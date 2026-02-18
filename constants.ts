import { Category, Unit, PharmacyDetails } from './types';

export const PHARMACY_DETAILS: PharmacyDetails = {
  name: 'HOZAIFA PHARMACY',
  proprietor: 'Md. Humayun Kabir',
  designation: 'RMP & LMAFP Dhaka',
  address: 'Moshorpur, Naogaon Sadar, Naogaon',
  phone: '+880 1722-030489'
};

export const CATEGORIES: Category[] = [
  'Tablet',
  'Capsule',
  'Syrup',
  'Injection',
  'Drop',
  'Cream',
  'Others'
];

export const UNITS: Unit[] = [
  'Box',
  'Pcs',
  'Strip',
  'Bottle',
  'Vial'
];

// Extremely comprehensive list of medicines in Bangladesh (Updated with Cosmic Pharma, Ergon & Contraceptives)
export const MEDICINE_SUGGESTIONS = [
  // Cosmic Pharma Limited Products
  "Cospra 20mg", "Cospra 40mg", "Cospra IV", "Cosmet 500mg", "Cosmet 850mg", "Cosmet XR 500", "Coscef 200mg", "Coscef 400mg", "Coscef Suspension",
  "Cosclav 625", "Cosclav 375", "Cosvit Gold", "Cosvit Silver", "Coscal D", "Coscal Coral", "Cospen 500mg", "Cospen 250mg", "Cosmox 500mg",
  "Cosmox 250mg", "Cosgel Suspension", "Cosgel Tablet", "Coslon 5mg", "Coslon 10mg", "Cos-Az 500mg", "Cos-Az 250mg", "Cos-Az Suspension",
  "Cospa 500mg", "Cospa Plus", "Cospa Syrup", "Cos-B Tablet", "Cos-B Syrup", "Coszinc Syrup", "Coszinc Tablet", "Coscof Syrup", "Cos-D3 20000",
  "Cos-D3 40000", "Cos-E 400", "Cos-Gyl 400mg", "Cos-Gyl Suspension", "Cos-Iron Capsule", "Cos-P 500", "Cos-P Plus",

  // Ergon Pharmaceuticals Products
  "Ergoloc 20mg", "Ergoloc 40mg", "Ergoloc IV", "Ergoten 5mg", "Ergoten 10mg", "Ergomet 500mg", "Ergomet 850mg", "Ergomet XR 500", "Ergomet XR 1gm",
  "Ergo-P 500mg", "Ergo-P Plus", "Ergo-P Suspension", "Ergovid Gold", "Ergovid Silver", "Ergovid Kid", "Ergocal D", "Ergocal Coral", "Ergocal DX",
  "Ergofix 200mg", "Ergofix 400mg", "Ergofix Suspension", "Ergo-Az 500mg", "Ergo-Az 250mg", "Ergo-Az Suspension", "Ergomox 500mg", "Ergomox 250mg", "Ergomox Syrup",
  "Ergofluc 500mg", "Ergofluc 250mg", "Ergofluc Syrup", "Ergo-Gyl 400mg", "Ergo-Gyl Suspension", "Ergoliv Syrup", "Ergozinc Syrup", "Ergozinc Tablet", "Ergocof Syrup",
  "Ergo-D3 20000", "Ergo-D3 40000", "Ergo-E 200", "Ergo-E 400", "Ergo-B Tablet", "Ergo-B Syrup", "Ergo-S Tablet", "Ergo-S Inhaler", "Ergo-A Antacid", "Ergo-A Plus",
  "Ergo-Iron Capsule", "Ergo-Iron Syrup", "Ergo-C 250mg", "Ergo-Z Kid", "Ergo-Cold Tablet", "Ergo-Zip 1gm Injection", "Ergo-Zip 500mg Injection",
  "Ergo-Pase 0.5mg", "Ergo-Pase 2mg", "Ergo-Lax Syrup", "Ergo-Gast Tablet", "Ergo-Meti Tablet", "Ergo-Flu Cream", "Ergo-Derm Cream", "Ergo-Nist Cream",

  // Contraceptives & Condoms
  "Panther Condom", "Raja Condom", "Sensation Classic", "Sensation Chocolate", "Sensation Strawberry", "Sensation Long Play", "Hero Condom", "Carex Condom",
  "Durex Air", "Durex Invisible", "Durex Extra Safe", "Durex Mutual Climax", "Moods Condom", "U&Me Condom", "Josh Condom", "Smile Condom",
  "Femicon", "Minicon", "Maya", "Ovostat Gold", "Nordette", "Lyndiol", "Desolon", "Pill-72", "Emcon", "Norix 1",

  // Paracetamol & Pain Management
  "Napa 500mg", "Napa Extra", "Napa Extend", "Napa Rapid", "Napa Syrup", "Napa Drop", "Napa 125 Suppository", "Napa 250 Suppository", "Napa 500 Suppository", "Napa Soft",
  "Ace 500mg", "Ace Plus", "Ace Power", "Ace XR", "Ace Syrup", "Ace Drop", "Ace 125 Suppository", "Ace 250 Suppository", "Ace 500 Suppository",
  "Fast 500mg", "Fast XR", "Renova 500mg", "Pyralgin", "Xpa 500mg", "Xpa 650mg", "Reset 500", "Reset Plus", "Tylenol",
  "Clofenac 50mg", "Clofenac 100mg", "Clofenac SR", "Clofenac DT", "Clofenac Injection", "Clofenac Gel", "A-Fenac 50", "A-Fenac 100", "A-Fenac Gel",
  "Flexi 100mg", "Flexi 200mg", "Flexi SR", "Flexi Gel", "Flexi Injection", "Flamex 100", "Xeldrin 100",
  "Rolac 10mg", "Rolac Injection", "Keterol 10mg", "Keterol Injection", "Torax 10mg", "Torax Injection", "Xidol 10", "Minol 10",
  "Tory 60mg", "Tory 90mg", "Tory 120mg", "Etovan 60", "Etovan 90", "Etovan 120", "Anorel 90", "Eto 120",
  "Voveran 50mg", "Voveran TP", "Voveran SR", "Voveran Emulgel",
  "Indomet 25", "Indomet 50", "Naproxen 250", "Naproxen 500", "Napryn 500", "Xenopro 500",
  "Cataflam 50", "Cataflam 25", "Xene 500", "Relent 100", "Dolonex 20", "Etorix 90", "Etorix 120",
  
  // Gastric & Anti-ulcerants
  "Seclo 20mg", "Seclo 40mg", "Seclo CT", "Seclo Injection", "Seclo 20 Capsule", "Seclo Syrup",
  "Sergel 20mg", "Sergel 40mg", "Sergel 40 IV", "Sergel MUPS 20", "Sergel MUPS 40", "Sergel Syrup",
  "Maxpro 20mg", "Maxpro 40mg", "Maxpro HP", "Maxpro MUPS 20", "Maxpro MUPS 40", "Maxpro Injection",
  "Pantonix 20mg", "Pantonix 40mg", "Pantonix IV", "Pantobex 20", "Pantobex 40", "Pantodac 20", "Pantodac 40",
  "Nexum 20mg", "Nexum 40mg", "Nexum 40 IV", "Nexum MUPS 20", "Nexum MUPS 40", "Opton 20", "Opton 40",
  "Finix 20mg", "Finix 40mg", "Finix IV", "Esonix 20mg", "Esonix 40mg", "Exium 20mg", "Exium 40mg",
  "Omep 20mg", "Ometid 20mg", "Ometid 40mg", "Losectil 20mg", "Losectil 40mg", "Proceptin 20",
  "Rabeca 20", "Rabeca 20 IV", "Rabe 20", "Rabetab 20",
  "Entacyd", "Entacyd Plus", "Gavisol Liquid", "Gaviscon Liquid", "Gaviscon Tablet", "Flatameal DS", "Marlox Plus", "Polycrol", "Almex 400mg", "Gastrolut",
  "Bisodol", "Gelicon", "Simethicone Drop", "X-S", "Anvol 20", "Zantac 150", "Ranitid 150",
  "Sucral Suspension", "Locid", "Famotidine 20", "Famotidine 40", "Nizatidine 150",
  
  // Antibiotics
  "Zithrin 500mg", "Zithrin 250mg", "Zithrin Suspension", "Azithrocin 500mg", "Azithrocin 250mg", "Azithrocin Suspension", "Zimax 500mg", "Zimax 250mg", "Zimax Suspension", "Azi 500",
  "Ciprocin 500mg", "Ciprocin 750mg", "Ciprocin Suspension", "Cipro 500", "Neocipro 500", "Flontin 500",
  "Fixit 200mg", "Fixit 400mg", "Fixit Suspension", "Cef-3 200mg", "Cef-3 400mg", "Cef-3 Suspension", "T-Cef 200", "T-Cef 400", "Orcef 400", "Orcef 200",
  "Amclox 500mg", "Amex 500mg", "Moxacil 500mg", "Moxacil 250mg", "Moxacil Syrup", "Fimoxyl 500", "Aristomox 500", "Amoxicap 500",
  "Fluclox 500mg", "Phylopen 500mg", "Afclox 500mg", "Flugal 500", "Fluclox Syrup",
  "Levoxin 500mg", "Levoxin 750mg", "Levo 500", "Levobac 500", "Resquin 500",
  "Amodis 400mg", "Amodis Suspension", "Filmet 400mg", "Filmet Suspension", "Flagyl 400mg", "Flagyl Suspension", "Flamyd 400mg", "Metro 400",
  "Ceftron 1gm Injection", "Ceftron 250mg Injection", "Ceftron 500mg Injection", "Ceftriaxone 1gm", "Traxyl 1gm",
  "Zinnat 250mg", "Zinnat 500mg", "Cefu 250", "Cefu 500", "Cerox 500", "Xorim 500",
  "Furocef 500", "Furocef 250", "Doxycap", "Doxy 100", "Monas 10", "Fix A 200", "Fix A 400",
  "Cefotil 500", "Cefotil 250", "Cefotil Syrup", "Ecef 400", "Magacef 1gm", "Lucent 400",
  "Rifagut 200", "Rifagut 400", "Rifagut 550", "Normix 200", "Normix 400",
  "Nitrofur 100", "Uro-F 100", "Nifuran 100", "Macrodantin 100",
  
  // Drops (Eye, Ear, Nasal)
  "Tobra Eye Drop", "Tobracin Eye Drop", "Tomycin Eye Drop", "Tobrasone Eye Drop", "Tobradex Eye Drop",
  "Moxif Eye Drop", "Optimox Eye Drop", "Eyemox Eye Drop", "Zymar Eye Drop", "Vigamox Eye Drop",
  "Dexaquine Eye Drop", "Dexa Eye Drop", "Pred Eye Drop", "Lotepred Eye Drop", "Loteson Eye Drop",
  "Naphcon Eye Drop", "Naphcon-A Eye Drop", "Antazol Eye Drop", "Zaditen Eye Drop", "Pataday Eye Drop",
  "Timo Eye Drop", "G-Timo Eye Drop", "Combigan Eye Drop", "Xalatan Eye Drop", "Travatan Eye Drop",
  "Optifresh Eye Drop", "Tears Plus Eye Drop", "Refresh Eye Drop", "G-Tears Eye Drop", "Systane Eye Drop",
  "Chloramphenicol Eye/Ear Drop", "Cipro Eye/Ear Drop", "Oflox Eye/Ear Drop", "Gentamicin Eye/Ear Drop",
  "Otocomb Ear Drop", "Sofradex Ear Drop", "Betnesol-N Ear Drop", "Cipro-HC Ear Drop",
  "Antazol Nasal Drop", "Antazol Nasal Spray", "Nazolin Nasal Drop", "Pivalone Nasal Spray",
  "Xylomet Nasal Drop", "Neo-Synephrine Nasal Drop", "Nasonex Nasal Spray", "Avamys Nasal Spray", "Flixonase Nasal Spray",
  "Normal Saline Nasal Drop", "Solas Nasal Spray", "Mar Nasal Spray",
  
  // Anti-allergic & Respiratory
  "Alatrol 10mg", "Alatrol Syrup", "Atarax 10mg", "Atarax 25mg", "Cetirizine 10", "Histacin",
  "Fexo 60mg", "Fexo 120mg", "Fexo 180mg", "Fexoral 120", "Fexoral 180", "Fenadin 120", "Fenadin 180", "Rhinofex 120",
  "Deslor 5mg", "Deslor Syrup", "Destin 5mg", "D-lor 5mg", "Desal 5", "Desol 5",
  "Rupant 10mg", "Rupa 10mg", "Rupadin 10mg", "Rupatrol 10",
  "Monas 10mg", "Monas 5mg", "Monas 4mg", "Monas Kid", "Provair 10mg", "Provair 5mg", "Odmon 10mg", "Odmon 5mg", "Kast 10",
  "Tofen 1mg", "Tofen Syrup", "Keto 1", "Ketotifen Syrup",
  "Azmasol Inhaler", "Bextram Inhaler", "Windel 2mg", "Windel Syrup", "Salbutamol Syrup", "Sultolin Inhaler", "Salbutamol Tablet",
  "Seretide Evohaler", "Seretide Accuhaler", "Symbicort Turbuhaler", "Foracort Inhaler", "Budeson Inhaler",
  "Ipravent Inhaler", "Combivent Inhaler", "Duolin Inhaler", "Spiriva Handihaler",
  "Monte-L Tablet", "Monkast 10", "L-Cet 5", "Levocetirizine 5",
  
  // Vitamins & Supplements
  "Bextram Gold", "Bextram Silver", "Bextram Kid", "Filwell Gold", "Filwell Silver", "Filwell Kid", "Vital-M", "Vitrum", "Centrum",
  "Neuro-B", "Neuro-Best", "Neubion", "B-Plex Syrup", "V-Plex Syrup", "Vitavit Syrup", "B-50 Forte", "Neuro-V",
  "Ecap 200", "Ecap 400", "Ecap 600", "E-Gel 400", "Evit 400",
  "Calbo 500", "Calbo D", "Calbo Forte", "Calbo Coral", "Coral-D", "Coral-D Forte", "Cal-D 500", "Ostocal D", "G-Cal D",
  "Xinc Syrup", "Xinc Tablet", "Zinconia Syrup", "Baby-Z Syrup", "Z-Zinc",
  "Arovit", "Arovit Drop", "Ceevit 250mg", "Cevit", "Revital", "Ascobix",
  "Vit-D3 20000", "Vit-D3 40000", "D-Rise 40000", "Calciferol 1000",
  "Glucosamine 500", "Cartilage Plus", "Jointfix", "Flexi Joint",
  "Fe-Plus", "Ipro Syrup", "Zip-CI", "Zif-CI", "Fefol-CI", "I-One Syrup",
  
  // Heart, BP & Cholesterol
  "Osartil 50mg", "Osartil 100mg", "Osartil 25mg", "Angilock 50mg", "Angilock 25mg", "Angilock 100mg", "Losart 50",
  "Bizoran 5/20", "Bizoran 5/40", "Bizoran 10/20", "Bizoran 10/40", "Amlosart 5/20", "Amlosart 5/40",
  "Cordin 5mg", "Cordin 10mg", "Amlopin 5mg", "Amlopin 10mg", "Camlodin 5mg", "Amlod 5",
  "Atova 10mg", "Atova 20mg", "Atova 40mg", "Rosuva 10mg", "Rosuva 20mg", "Rosuva 5mg", "Rovista 10", "Rovista 5", "Statix 10",
  "Ecosprin 75mg", "Ecosprin 150mg", "Atrin 75", "Atrin 150", "Disprin",
  "Moduretic", "Lasix 40mg", "Frusenex 40mg", "Furo 40", "Furosemide Injection",
  "Telma 40", "Telma 80", "Telma AM", "Telsar 40", "Telsar 80",
  "Rami 2.5", "Rami 5", "Cardace 5", "Zestril 5", "Enace 5",
  "Lipiget 10", "Lipiget 20", "Atorva 10", "Atorva 20",
  
  // Diabetes
  "Metfo 500mg", "Metfo 850mg", "Metfo 1gm", "Combitra 2/500", "Combitra 5/500", "Glucofree 500", "Glucomet 500", "Metformin 500",
  "Glims 1mg", "Glims 2mg", "Glims 3mg", "Glims 4mg", "Secrin 1mg", "Secrin 2mg", "Amaril 2", "Glimerid 2",
  "Linaglip 5mg", "Linaglip M 2.5/500", "Linaglip M 2.5/850", "Trajenta 5mg", "Lina 5",
  "Sitaglip 50", "Sitaglip 100", "Januvia 100", "Janumet 50/500", "Janumet 50/1000",
  "Galvus 50", "Galvus Met 50/500", "Galvus Met 50/850", "Galvus Met 50/1000",
  "Diamicron XR 60", "Diamicron XR 30", "Glynase 5", "Daonil 5",
  
  // CNS, Mental Health & Sleep
  "Rivotril 0.5mg", "Rivotril 2mg", "Disopan 0.5mg", "Disopan 2mg", "Pase 0.5mg", "Pase 2mg", "Clonaz 0.5",
  "Sedo 5mg", "Sedo 10mg", "Relax 5mg", "Hypnocum 7.5mg", "Dormicum 7.5", "Midazol 7.5",
  "Lecital 10mg", "Lecital 20mg", "Nexital 10mg", "Zolpid 5mg", "Zolpid 10mg", "Zonax 5",
  "Amit 10", "Amit 25", "Tryptin 10", "Tryptin 25", "Nortryp 10",
  "Prozac 20", "Paxil 20", "Zoloft 50", "Escitalopram 10", "Lexapro 10",
  "Risperidone 1", "Risperidone 2", "Olanzapine 5", "Olanzapine 10", "Quetiapine 25", "Seroquel 25",
  "Epilim 200", "Epilim 500", "Tegretol 200", "Tegretol CR 200", "Gabapentin 300", "Gaba-P 300",
  
  // Dermatology & External
  "Viodin Ointment", "Viodin Gargle", "Povidone Ointment", "Povidone Cream", "Pevison Cream", "Pevisone",
  "Burnsil Cream", "Silverene Cream", "Burn Cream", "Burnol",
  "Cloben Cream", "Econate Cream", "Candid-B Cream", "Betnovate-N", "Dermovate-N", "Nystat Cream", "Ketoconazole Cream",
  "Fungi Cream", "Econate Ointment", "Candid Ointment", "Mupirocin Ointment", "Bactroban",
  "Diclofenac Gel", "Moov", "Iodex", "Fast Relief", "Tiger Balm", "Volini Gel",
  "Permethrin Cream", "Scabex Cream", "Lorel Cream", "A-Mite Cream",
  "Savlon Liquid", "Dettol Liquid", "Hexisol", "Avisept", "Povidone Solution",
  
  // Miscellaneous
  "Thyrox 50mcg", "Thyrox 25mcg", "Thyrox 100mcg", "Thyroid 50", "Thyronorm 50",
  "Emistat 8mg", "Emistat Syrup", "Ondent 8mg", "Ondent Syrup", "Joytrip", "Ondan 8", "Seton 8",
  "Orsaline-N", "SMC Orsaline", "Tasty Saline", "Rice Saline", "Purasaline",
  "Almex 400mg", "Almex Suspension", "Solas 400", "Avlo 400", "Zentel 400", "Vermic 500",
  "Bisodol", "Gaviscon Suspension", "Gelicon", "Antacid Plus",
  "Cof-P Syrup", "Adryl Syrup", "Tusca Syrup", "Pulmonal Syrup", "Ofkof Syrup", "Honitus", "Basok",
  "Dextrose 5% IV", "Dextrose 10% IV", "Normal Saline IV", "DNS IV", "Cholera Saline IV",
  "Lactogen 1", "Lactogen 2", "Cerelac", "Nan 1", "Eldomilk", "Marks Full Cream",
  "Surgical Tape", "Micropore", "Band-Aid", "Cotton Roll", "Gauze Pad", "Syringe 5ml", "Syringe 3ml", "Insulin Syringe"
].sort();