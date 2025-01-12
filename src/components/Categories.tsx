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
  {
    src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    alt: "Burger 4",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    alt: "Burger 5",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    alt: "Burger 6",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    alt: "Burger 7",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    alt: "Burger 7",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    alt: "Burger 7",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    alt: "Burger 7",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    alt: "Burger 7",
  },
];

const Categories = () => {
  return (
    <div className="carousel rounded-box">
      <div className="carousel-item">
        {imageData.map((item) => {
          return <img className="lg:h-64" src={item.src} alt={item.alt} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
