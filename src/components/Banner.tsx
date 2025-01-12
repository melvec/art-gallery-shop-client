import bannerBackground from "../assets/images/bannerBackground.png";
import bird from "../assets/images/bird.png";
import birds from "../assets/images/birds.png";

const Banner = () => {
  return (
    <div className="d-none d-md-block">
      <div className="d-flex charm-regular ">
        <span className="absolute text-[20px] sm:text-[25px] md:text-[30px] top-[150px] sm:top-[180px] md:top-[200px] left-[50%] translate-x-[-50%] w-[90%] sm:w-[70%] md:w-[500px] h-auto z-10 text-black text-center">
          Get your dream painting
        </span>

        <img
          src={bannerBackground}
          style={{
            height: "200px",
            objectFit: "cover",
            boxShadow: "12px 16px 15px rgba(0, 0, 0, 0.2)",
            width: "100%",
          }}
          className="ms-auto"
        ></img>
        <img
          src={bird}
          style={{
            transform: "scaleX(-1)",
            position: "absolute",
            top: "20px", // Adjust this to position the overlay img vertically
            left: "20px", // Adjust this to position the overlay img horizontally
            width: "100px", // Set the size of the overlay img
            height: "100px",
            zIndex: 10, // Ensure the overlay img is on top
          }}
        />
        <img
          src={birds}
          style={{
            position: "absolute",
            top: "60px", // Adjust this to position the overlay img vertically
            right: "200px", // Adjust this to position the overlay img horizontally
            width: "500px", // Set the size of the overlay img
            height: "150px",
            zIndex: 10,
          }}
        ></img>
      </div>
    </div>
  );
};

export default Banner;
