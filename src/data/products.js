// src/data/products.js
export const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
    { id: 'clothing', name: 'เสื้อผ้า' },
    { id: 'books', name: 'หนังสือ' },
    { id: 'accessories', name: 'เครื่องประดับ' },
];

export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        category: 'electronics',
        price: 45900,
        originalPrice: 49900,
        discount: 8,
        image: 'https://placehold.co/300x300/007bff/ffffff?text=iPhone+15',
        description: 'สมาร์ทโฟนล่าสุดจาก Apple',
        inStock: true,
        rating: 4.8
    },
    {
        id: 2,
        name: 'เสื้อยืดผ้าฝ้าย',
        category: 'clothing',
        price: 299,
        originalPrice: 399,
        discount: 25,
        image: 'https://placehold.co/300x300/ffc107/000000?text=T-Shirt',
        description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
        inStock: true,
        rating: 4.2
    },
    {
        id: 3,
        name: 'หนังสือ React.js Guide',
        category: 'books',
        price: 650,
        originalPrice: 650,
        discount: 0,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=React+Book',
        description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
        inStock: false,
        rating: 4.7
    },
    {
        id: 4,
        name: 'Smart Watch Zeta',
        category: 'electronics',
        price: 4990,
        originalPrice: 5990,
        discount: 17,
        image: 'https://placehold.co/300x300/28a745/ffffff?text=Smart+Watch',
        description: 'นาฬิกาอัจฉริยะ ฟังก์ชันครบ',
        inStock: true,
        rating: 4.5
    },
    {
        id: 5,
        name: 'หมวกแก๊ป',
        category: 'accessories',
        price: 250,
        originalPrice: 300,
        discount: 17,
        image: 'https://placehold.co/300x300/f66/ffffff?text=Cap',
        description: 'หมวกแก๊ปผ้าฝ้ายคุณภาพดี ใส่ได้ทุกวัน',
        inStock: true,
        rating: 4.0
    },
];
