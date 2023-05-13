import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { sData } from "../../constants/categories";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {sData.map((value) => {
          return (
            <div className="box d_flex" key={value.id}>
              <div className="left">
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button className="btn-primary">Buy</button>
              </div>
              <div className="right">
                <img src={value.cover} style={{maxHeight:"370px"}} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
