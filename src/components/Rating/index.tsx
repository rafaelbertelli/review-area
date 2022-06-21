import { useState } from "react";

import { faStar as unfilledStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductUiProps } from "../../@seedwork/domain/Product/type";

type RatingProps = {
  onChange: ({
    ratingValue,
    product,
  }: {
    ratingValue: number;
    product: ProductUiProps;
  }) => void;
  product: ProductUiProps;
};

const Rating = ({ onChange, product }: RatingProps) => {
  const [amountRatingsAllowed] = useState([1, 2, 3, 4, 5]);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingClick = (ratingNumber: number) => {
    setRatingValue(ratingNumber);
    onChange({ ratingValue: ratingNumber, product });
  };

  return (
    <div onMouseLeave={() => setHoveredStar(0)}>
      {amountRatingsAllowed.map((ratingNumber) => (
        <FontAwesomeIcon
          className="pointer-on-hover primary-color rating-icon"
          key={ratingNumber}
          icon={
            hoveredStar >= ratingNumber || ratingValue >= ratingNumber
              ? filledStar
              : unfilledStar
          }
          onMouseEnter={() => setHoveredStar(ratingNumber)}
          onClick={() => handleRatingClick(ratingNumber)}
        />
      ))}
    </div>
  );
};

export default Rating;
