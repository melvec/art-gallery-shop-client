import bird from "../assets/paintings/bird.jpg";
interface CardProps {
  item: string;
}

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  return (
    <div className="card bg-beige w-96 shadow-xl">
      <figure>
        <img src={bird} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
