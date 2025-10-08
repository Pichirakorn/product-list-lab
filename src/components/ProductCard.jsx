// src/components/ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';

function ProductCard({ product, onAddToCart, onViewDetails }) {

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i}>⭐</span>);
        }
        if (hasHalfStar) stars.push(<span key="half">✨</span>);
        while (stars.length < 5) {
            stars.push(<span key={`empty-${stars.length}`}>☆</span>);
        }

        return <span>{stars} ({rating.toFixed(1)})</span>;
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/300x300/cccccc/666666?text=No+Image';
                    }}
                />
            </div>
            
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-rating">
                    {renderStars(product.rating)}
                </div>

                <div className="product-price">
                    ฿{product.price.toLocaleString()}
                    {product.discount > 0 && (
                        <div style={{ color: 'red', fontWeight: 'bold' }}>
                            ลด {product.discount}% 
                            <span style={{ 
                                textDecoration: 'line-through', 
                                color: '#999', 
                                marginLeft: '8px' 
                            }}>
                                ฿{product.originalPrice.toLocaleString()}
                            </span>
                        </div>
                    )}
                </div>
                
                <div className="product-actions">
                    <button 
                        className="btn btn-secondary"
                        onClick={() => onViewDetails(product)}
                    >
                        ดูรายละเอียด
                    </button>
                    <button 
                        className="btn btn-primary"
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
                    </button>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        originalPrice: PropTypes.number,
        discount: PropTypes.number,
        image: PropTypes.string,
        description: PropTypes.string,
        inStock: PropTypes.bool,
        rating: PropTypes.number
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductCard;
