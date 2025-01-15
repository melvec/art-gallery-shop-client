const imageData = [
  {
    src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    alt: "Burger 1",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    alt: "Burger 2",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    alt: "Burger 3",
  },
];

const Categories = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" carousel items-center">
        <div className="carousel-item gap-5 mt-4 mb-4">
          {imageData.map((item) => {
            return (
              <img
                className="lg:h-40 lg:w-40 rounded-full"
                src={item.src}
                alt={item.alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
