import Image from 'next/image';
import IconStar from '../../../assets/images/icon-star.svg';

const RatingComponent = () => {
  return (
    <div>
      <figure>
        <Image
          className="rating-component__star"
          src={IconStar}
          alt="icon-star"
        />
      </figure>
      <header>
        <h2>How did we do?</h2>
      </header>
    </div>
  );
};

export default RatingComponent;
