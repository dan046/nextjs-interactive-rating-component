import Image from 'next/image';
import IconStar from '../../../assets/images/icon-star.svg';

const RatingComponent = () => {
  return (
    <div>
      <figure>
        <Image src={IconStar} alt="icon-star" />
      </figure>
      <header>How did we do?</header>
    </div>
  );
};

export default RatingComponent;
