/* Kevinz Jewelry and Bags Hub — product catalogue */
const KEVINZ_WHATSAPP_NUMBER = "256755134204";

const KEVINZ_CATEGORIES = [
  { slug: 'ladies-bags', name: "Ladies' Bags" },
  { slug: 'nightwear', name: 'Nightwear' },
  { slug: 'earrings', name: 'Earrings' },
  { slug: 'hair-accessories', name: 'Hair Bows' },
  { slug: 'keychains', name: 'Lollipop Key Chains' },
];

const KEVINZ_PRODUCTS = [
  { id: 1, name: 'Pink Structured Ladies Bag', category: 'ladies-bags', categoryName: "Ladies' Bags", price: 35000, stock: 10, featured: true, image: 'pink-ladies-bag.jpg', description: 'Elegant pink structured ladies bag with a stylish handle and matching accessories.' },
  { id: 2, name: 'Grey Structured Ladies Bag', category: 'ladies-bags', categoryName: "Ladies' Bags", price: 35000, stock: 10, featured: true, image: 'grey-ladies-bag.jpg', description: 'Classic grey structured ladies bag for everyday styling.' },
  { id: 3, name: 'White Ladies Handbag', category: 'ladies-bags', categoryName: "Ladies' Bags", price: 35000, stock: 10, featured: false, image: 'white-ladies-bag.jpg', description: 'Clean white handbag with a polished, elegant finish.' },
  { id: 4, name: 'Grey Bow Ladies Bag', category: 'ladies-bags', categoryName: "Ladies' Bags", price: 35000, stock: 10, featured: false, image: 'grey-bow-ladies-bag.jpg', description: 'Beautiful grey ladies bag decorated with a bow detail.' },
  { id: 5, name: 'Silver Ladies Bag', category: 'ladies-bags', categoryName: "Ladies' Bags", price: 35000, stock: 10, featured: false, image: 'silver-ladies-bag.jpg', description: 'Stylish silver-toned ladies bag with a modern look.' },
  { id: 6, name: 'Pink Mini Ladies Handbag', category: 'ladies-bags', categoryName: "Ladies' Bags", price: 35000, stock: 10, featured: false, image: 'pink-ladies-handbag.jpg', description: 'Charming pink mini handbag for a fashionable everyday look.' },
  { id: 7, name: 'Black Ladies Bag Set', category: 'ladies-bags', categoryName: "Ladies' Bags", price: 35000, stock: 10, featured: false, image: 'black-ladies-bag-set.jpg', description: 'Black ladies bag set with matching pieces.' },
  { id: 8, name: 'Black Classic Ladies Handbag', category: 'ladies-bags', categoryName: "Ladies' Bags", price: 35000, stock: 10, featured: false, image: 'black-ladies-handbag.jpg', description: 'Classic black handbag with a neat, elegant finish.' },

  { id: 9, name: 'Green Nightwear Set', category: 'nightwear', categoryName: 'Nightwear', price: 7000, stock: 10, featured: true, image: 'green-nightwear.jpg', description: 'Comfortable green nightwear set for relaxing at home.' },
  { id: 10, name: 'Pink Nightwear Set', category: 'nightwear', categoryName: 'Nightwear', price: 7000, stock: 10, featured: false, image: 'pink-nightwear.jpg', description: 'Lovely pink nightwear set designed for comfort.' },
  { id: 11, name: 'Green Printed Nightwear Set', category: 'nightwear', categoryName: 'Nightwear', price: 7000, stock: 10, featured: false, image: 'green-nightwear-set.jpg', description: 'Soft green printed nightwear set for comfortable nights.' },

  { id: 12, name: 'Pink Flower Earrings', category: 'earrings', categoryName: 'Earrings', price: 5000, stock: 10, featured: true, image: 'pink-flower-earrings.jpg', description: 'Beautiful pink flower earrings sold as a pair.' },
  { id: 13, name: 'Yellow Flower Earrings', category: 'earrings', categoryName: 'Earrings', price: 5000, stock: 10, featured: false, image: 'yellow-flower-earrings.jpg', description: 'Bright yellow flower earrings sold as a pair.' },

  { id: 14, name: 'Black Hair Bow', category: 'hair-accessories', categoryName: 'Hair Bows', price: 3000, stock: 10, featured: true, image: 'black-hair-bow.jpg', description: 'Elegant black hair bow for a stylish finish.' },

  { id: 15, name: 'Pink Lollipop Key Chain', category: 'keychains', categoryName: 'Lollipop Key Chains', price: 5000, stock: 10, featured: true, image: 'pink-lollipop-keychains.jpg', description: 'Cute colorful lollipop-style key chain.' },
  { id: 16, name: 'Colorful Lollipop Key Chain', category: 'keychains', categoryName: 'Lollipop Key Chains', price: 5000, stock: 10, featured: false, image: 'colorful-lollipop-keychains.jpg', description: 'Fun colorful lollipop-style key chain.' },
  { id: 17, name: 'Assorted Lollipop Key Chain', category: 'keychains', categoryName: 'Lollipop Key Chains', price: 5000, stock: 10, featured: false, image: 'assorted-lollipop-keychains.jpg', description: 'Assorted decorative lollipop key chain.' },
];

function kvzFormatMoney(amount) {
  return 'UGX ' + Number(amount).toLocaleString('en-UG');
}
function kvzGetProduct(id) {
  return KEVINZ_PRODUCTS.find(p => p.id === Number(id)) || null;
}
