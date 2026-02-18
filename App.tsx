import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { OrderForm } from './components/OrderForm';
import { OrderTable } from './components/OrderTable';
import { PrintHeader } from './components/PrintHeader';
import { OrderItem, Order } from './types';
import { PHARMACY_DETAILS } from './constants';
import { generateAndSharePDF } from './services/pdfService';
import { saveOrderAsImage } from './services/imageService';
import { Save, Share2, Menu, Clock, Trash2, PlusCircle, History, Image as ImageIcon, Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [savedOrders, setSavedOrders] = useState<Order[]>([]);
  const [editingOrderId, setEditingOrderId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [currentSlipNo, setCurrentSlipNo] = useState(() => Math.floor(Math.random() * 100000).toString().padStart(6, '0'));

  // Load saved orders
  useEffect(() => {
    const saved = localStorage.getItem('hozaifa_rx_orders');
    if (saved) {
      setSavedOrders(JSON.parse(saved));
    }
  }, []);

  const persistOrders = (orders: Order[]) => {
    setSavedOrders(orders);
    localStorage.setItem('hozaifa_rx_orders', JSON.stringify(orders));
  };

  const handleAddItem = (newItem: Omit<OrderItem, 'id'>) => {
    const item: OrderItem = { ...newItem, id: crypto.randomUUID() };
    setItems([...items, item]);
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleNewOrder = () => {
    setItems([]);
    setEditingOrderId(null);
    setIsSidebarOpen(false);
    setCurrentSlipNo(Math.floor(Math.random() * 100000).toString().padStart(6, '0'));
  };

  const handleSaveOrder = () => {
    if (items.length === 0) {
      alert("আগে ওষুধ যোগ করুন।");
      return;
    }

    let updatedOrders: Order[];
    const now = new Date();
    const dateString = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) + ', ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    
    if (editingOrderId) {
      updatedOrders = savedOrders.map(order => 
        order.id === editingOrderId ? { ...order, items, totalItems: items.length, date: dateString } : order
      );
      alert("আপডেট সফল হয়েছে!");
    } else {
      const newOrder: Order = { id: crypto.randomUUID(), date: dateString, items: [...items], totalItems: items.length };
      updatedOrders = [newOrder, ...savedOrders];
      alert("সেভ সফল হয়েছে!");
    }
    persistOrders(updatedOrders);
    handleNewOrder();
  };

  const handleEditOrder = (order: Order) => {
    setItems(order.items);
    setEditingOrderId(order.id);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteSavedOrder = (id: string) => {
    if (window.confirm("আপনি কি নিশ্চিতভাবে এই অর্ডারটি ডিলিট করতে চান?")) {
      const updated = savedOrders.filter(o => o.id !== id);
      persistOrders(updated);
      if (editingOrderId === id) handleNewOrder();
    }
  };

  const handleShare = async () => {
    if (items.length === 0) return alert("আগে ওষুধ যোগ করুন।");
    await generateAndSharePDF(items, PHARMACY_DETAILS);
  };

  const handleSaveAsImage = async () => {
    if (items.length === 0) return alert("আগে ওষুধ যোগ করুন।");
    
    setIsGeneratingImage(true);
    try {
      const success = await saveOrderAsImage('order-slip-capture', `Order_${currentSlipNo}`);
      if (success) {
        // Success notification handled in service
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const formattedCurrentDate = () => {
    const d = new Date();
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex print:block print:bg-white">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        savedOrders={savedOrders} 
        onEditOrder={handleEditOrder} 
        onDeleteOrder={handleDeleteSavedOrder} 
        onNewOrder={handleNewOrder} 
        currentEditingId={editingOrderId}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Off-screen Capture Area */}
      <div id="order-slip-capture" className="p-12 bg-white">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{PHARMACY_DETAILS.name}</h1>
            <h2 className="text-2xl font-bold text-gray-800">Prop: {PHARMACY_DETAILS.proprietor}</h2>
            <p className="text-sm font-bold text-gray-400">{PHARMACY_DETAILS.designation}</p>
            <p className="text-lg text-gray-700 mt-3">{PHARMACY_DETAILS.address}</p>
            <p className="font-black text-gray-900 text-lg">Mobile: {PHARMACY_DETAILS.phone}</p>
            
            <div className="mt-8 border-t-[3px] border-gray-900 pt-6 flex justify-between items-end">
                <div className="text-left">
                    <p className="text-xs uppercase font-black text-gray-400">Order Slip No</p>
                    <p className="text-2xl font-black font-mono">#{currentSlipNo}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs uppercase font-black text-gray-400">Issue Date</p>
                    <p className="text-2xl font-black">{formattedCurrentDate()}</p>
                </div>
            </div>
          </div>

          <table className="w-full text-left text-lg border-collapse">
            <thead>
                <tr className="bg-[#075e54]">
                    <th className="p-4 text-white border border-gray-200">SL</th>
                    <th className="p-4 text-white border border-gray-200">Category</th>
                    <th className="p-4 text-white border border-gray-200">Medicine Name</th>
                    <th className="p-4 text-white border border-gray-200">Company</th>
                    <th className="p-4 text-white border border-gray-200 text-right">Qty</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={item.id}>
                        <td className="p-4 border border-gray-200 font-medium text-gray-900">{String(index+1).padStart(2,'0')}</td>
                        <td className="p-4 border border-gray-200 text-gray-800">{item.category}</td>
                        <td className="p-4 border border-gray-200 font-bold text-gray-900">{item.medicineName}</td>
                        <td className="p-4 border border-gray-200 text-gray-600">{item.companyName || '-'}</td>
                        <td className="p-4 border border-gray-200 font-black text-right text-gray-900">{item.quantity} {item.unit}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className="bg-gray-50">
                    <td colSpan={4} className="p-5 border border-gray-200 text-right font-black text-xl text-gray-900">Total Items:</td>
                    <td className="p-5 border border-gray-200 text-right font-black text-2xl text-[#075e54]">{items.length}</td>
                </tr>
            </tfoot>
          </table>
          
          <div className="mt-16 pt-8 border-t border-gray-100 text-center text-xs text-gray-400 font-black uppercase tracking-widest">
            {PHARMACY_DETAILS.name} • Professional Order Slip
          </div>
      </div>

      <main className="flex-1 md:ml-64 print:ml-0 print:w-full">
        <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-screen flex flex-col print:block">
          
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 no-print">
            <div className="flex items-center gap-4">
                <button 
                  type="button" 
                  onClick={() => setIsSidebarOpen(true)} 
                  className="md:hidden p-3 text-white bg-primary shadow-lg rounded-2xl hover:bg-emerald-800 transition-all active:scale-95"
                >
                    <History size={24} />
                </button>
                <div>
                    <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                      {editingOrderId ? 'অর্ডার এডিট করুন' : 'নতুন অর্ডার তৈরি করুন'}
                    </h1>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              <button 
                onClick={handleSaveAsImage} 
                disabled={isGeneratingImage}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-bold shadow-md active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isGeneratingImage ? <Loader2 size={18} className="animate-spin" /> : <ImageIcon size={18} />}
                {isGeneratingImage ? 'প্রসেসিং...' : 'পিকচার সেভ'}
              </button>
              <button onClick={handleShare} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-bold shadow-sm active:scale-95">
                <Share2 size={18} />
                Share
              </button>
              <button onClick={handleSaveOrder} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-emerald-800 transition-all font-bold shadow-md active:scale-95">
                <Save size={18} />
                {editingOrderId ? 'Update' : 'Save'}
              </button>
            </div>
          </header>

          <PrintHeader />
          <OrderForm onAdd={handleAddItem} />
          <div className="flex-1 print:w-full mb-12">
             <OrderTable items={items} onDelete={handleDeleteItem} />
          </div>

          <footer className="mt-auto text-center text-[10px] text-gray-400 no-print py-10 border-t font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {PHARMACY_DETAILS.name} • System v1.2.0
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;