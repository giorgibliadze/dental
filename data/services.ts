export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  duration: string;
  features: string[];
  category: "cosmetic" | "general" | "orthodontic" | "implant";
  image: string;
}

export const services: Service[] = [
  {
    id: "teeth-whitening",
    title: "კბილების გათეთრება",
    description: "პროფესიონალური ლაზერული გათეთრება 10 ტონამდე — ერთ სეანსში, უმტკივნეულოდ.",
    icon: "Sparkles",
    price: "₾350-დან",
    duration: "60–90 წთ",
    features: ["ლაზერული გათეთრება", "ხანგრძლივი შედეგი", "უმტკივნეულო", "მყისიერი ეფექტი"],
    category: "cosmetic",
    image: "/images/services/whitening.jpg",
  },
  {
    id: "dental-implants",
    title: "კბილის იმპლანტი",
    description: "ტიტანის იმპლანტები ბუნებრივი კბილის სრული ფუნქციითა და გარეგნობით.",
    icon: "Zap",
    price: "₾2,200-დან",
    duration: "2–3 ვიზიტი",
    features: ["Straumann ტიტანი", "30+ წლის სიცოცხლე", "ბუნებრივი გარეგნობა", "სრული ფუნქცია"],
    category: "implant",
    image: "/images/services/implants.jpg",
  },
  {
    id: "invisalign",
    title: "ინვიზალაინი",
    description: "გამჭვირვალე კაპებით კბილების გასწორება — შეუმჩნევლად, კომფორტულად.",
    icon: "Smile",
    price: "₾1,800-დან",
    duration: "12–18 თვე",
    features: ["გამჭვირვალე კაპები", "მოსახსნელი", "3D დაგეგმარება", "კომფორტული"],
    category: "orthodontic",
    image: "/images/services/invisalign.jpg",
  },
  {
    id: "veneers",
    title: "ფაიფურის ვინირები",
    description: "ულტრა-თხელი კერამიკული ფირფიტები სრულყოფილი ღიმილისთვის.",
    icon: "Star",
    price: "₾650/კბილი-დან",
    duration: "2 ვიზიტი",
    features: ["ინდივიდუალური დამზადება", "საღებავ-გამძლე", "ბუნებრივი", "10+ წლის სიცოცხლე"],
    category: "cosmetic",
    image: "/images/services/veneers.jpg",
  },
  {
    id: "root-canal",
    title: "არხების მკურნალობა",
    description: "უმტკივნეულო ფესვის არხის მკურნალობა ბუნებრივი კბილის შესანარჩუნებლად.",
    icon: "Shield",
    price: "₾450-დან",
    duration: "60–90 წთ",
    features: ["უმტკივნეულო", "კბილის შენარჩუნება", "ერთ ვიზიტში", "ანესთეზია შედის"],
    category: "general",
    image: "/images/services/root-canal.jpg",
  },
  {
    id: "cleaning",
    title: "პროფ. წმენდა",
    description: "ულტრაბგერითი სკეილინგი, პოლირება და ფტორიზაცია — ერთ ვიზიტში.",
    icon: "Heart",
    price: "₾120-დან",
    duration: "45–60 წთ",
    features: ["ულტრაბგერითი სკეილინგი", "Air Flow პოლირება", "ფტორიზაცია", "ჰიგიენის კონსულტაცია"],
    category: "general",
    image: "/images/services/cleaning.jpg",
  },
  {
    id: "crowns",
    title: "კბილის გვირგვინი",
    description: "ცირკონიისა და კერამიკის გვირგვინები დაზიანებული კბილის სრული აღდგენისთვის.",
    icon: "Crown",
    price: "₾550-დან",
    duration: "2 ვიზიტი",
    features: ["ცირკონიუმი / კერამიკა", "ფერის შერჩევა", "მდგრადი", "ბუნებრივი შეგრძნება"],
    category: "general",
    image: "/images/services/crowns.jpg",
  },
  {
    id: "composite-bonding",
    title: "კომპოზიტური ბონდინგი",
    description: "გატეხილი ან დაფერილი კბილების სწრაფი კოსმეტიკური გადაწყვეტა.",
    icon: "Layers",
    price: "₾200/კბილი-დან",
    duration: "30–60 წთ",
    features: ["ერთ ვიზიტში", "ბურღვის გარეშე", "შექცევადი", "ხელმისაწვდომი"],
    category: "cosmetic",
    image: "/images/services/bonding.jpg",
  },
];
