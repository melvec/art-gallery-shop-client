import Card from "./Card";

const items = ["Bird", "Flowers", "Day and Night"];

const Cards = () => {
  ``;
  return (
    <>
      <div className="flex gap-5 items-center justify-center mb-4">
        {items.map((item) => (
          <div>
            <Card item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
