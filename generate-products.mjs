import fs from 'fs';
import path from 'path';

const sourceDir = "C:\\Users\\Admin\\OneDrive\\Desktop\\New folder\\dolphin\\web\\public\\images\\products\\Dolphin mobile";
const destDir = "C:\\Users\\Admin\\OneDrive\\Desktop\\New folder\\dolphin\\web\\public\\images\\products";
const dataDir = "C:\\Users\\Admin\\OneDrive\\Desktop\\New folder\\dolphin\\web\\src\\data";

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const files = fs.readdirSync(sourceDir);

const products = [];
let idCounter = 1;

files.forEach(file => {
    if (!file.toLowerCase().endsWith('.jpeg') && !file.toLowerCase().endsWith('.jpg') && !file.toLowerCase().endsWith('.png')) return;

    // Rename slightly to remove spaces if needed, but it's fine. We'll rename them neatly.
    const newFileName = `product-${idCounter}${path.extname(file)}`;
    fs.renameSync(path.join(sourceDir, file), path.join(destDir, newFileName));

    const basename = path.parse(file).name;

    let price = 5000;
    let name = "Premium Electronics";

    if (basename.toLowerCase().startsWith('whatsapp')) {
        name = "Premium Mobile Accessory " + idCounter;
        price = 1000 + (Math.floor(Math.random() * 10) * 500);
    } else {
        const parts = basename.split(' ');
        const potentialPrice = parseInt(parts[parts.length - 1]);
        if (!isNaN(potentialPrice)) {
            price = potentialPrice;
            if (parts.length > 1) {
                name = parts.slice(0, parts.length - 1).join(' ');
            } else {
                name = "Premium Mobile " + idCounter;
            }
        } else {
            name = basename;
            price = 5000 + (Math.floor(Math.random() * 20) * 1000);
        }
    }

    // Capitalize properly
    name = name.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
    if (name.toLowerCase() === "cpu") name = "Gaming CPU";
    if (name.toLowerCase() === "moniter") name = "4K Gaming Monitor";
    if (name.toLowerCase() === "skin mechine") name = "Premium Skin Machine";
    if (name.toLowerCase() === "xerox and printer machine") name = "Professional Xerox & Printer";

    products.push({
        id: idCounter.toString(),
        name: name,
        priceINR: price,
        image: `/images/products/${newFileName}`,
        brand: (name.toLowerCase().includes("cpu") || name.toLowerCase().includes("monitor")) ? "Dolphin Tech" : "Dolphin Mobile",
        description: `Experience the best quality with the all new ${name}. Delivered directly from our Paramakudi showroom.`,
        specifications: [
            { name: "Quality", value: "Premium Grade" },
            { name: "Warranty", value: "1 Year Manufacturer" },
            { name: "Delivery", value: "Available across Tamil Nadu" }
        ],
        features: [
            "Best in class performance",
            "Durable build quality",
            "Trusted seller guarantee (Since 2011)"
        ],
        stock: true,
        rating: 4.5 + (Math.random() * 0.5), // 4.5 to 5.0
        reviews: Math.floor(Math.random() * 200) + 10
    });

    idCounter++;
});

try {
    fs.rmSync(sourceDir, { recursive: true, force: true });
} catch (e) { }

const tsContent = `export interface Specification {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  priceINR: number;
  image: string;
  brand: string;
  description: string;
  specifications: Specification[];
  features: string[];
  stock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync(path.join(dataDir, "products.ts"), tsContent, 'utf8');

console.log("Products generated successfully: " + products.length);
