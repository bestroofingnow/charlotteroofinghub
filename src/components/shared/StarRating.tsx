import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  maxRating?: number
  showNumber?: boolean
  reviewCount?: number
  size?: 'sm' | 'md' | 'lg'
}

export default function StarRating({
  rating,
  maxRating = 5,
  showNumber = true,
  reviewCount,
  size = 'md'
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`}
          />
        ))}

        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star className={`${sizeClasses[size]} text-gray-300`} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        )}

        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={`${sizeClasses[size]} text-gray-300`}
          />
        ))}
      </div>

      {showNumber && (
        <span className={`${textSizeClasses[size]} font-semibold text-gray-700`}>
          {rating.toFixed(1)}
        </span>
      )}

      {reviewCount !== undefined && (
        <span className={`${textSizeClasses[size]} text-gray-500`}>
          ({reviewCount} reviews)
        </span>
      )}
    </div>
  )
}
