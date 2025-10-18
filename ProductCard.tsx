import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  onAddToCart: (product: any) => void;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  rating,
  isNew,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <Badge className="absolute top-3 left-3 bg-black text-white">
            New
          </Badge>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <h3 className="mb-2">{name}</h3>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300 fill-current"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({rating})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-900">${price.toFixed(2)}</span>
          <Button
            size="sm"
            onClick={() =>
              onAddToCart({ id, name, price, image, category, rating })
            }
            className="bg-black hover:bg-gray-800"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
