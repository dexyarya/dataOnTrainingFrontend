import React from "react";
import { Carousel, Image } from "antd";
import image2 from "../../assets/image1.svg";
import image5 from "../../assets/image5.svg";
import image4 from "../../assets/image4.svg";
import image3 from "../../assets/image3.svg";
import "./carousel.css";

const CarouselImage = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3>
            <Image height={400} src={image2} preview={false} />
          </h3>
        </div>
        <div>
          <h3>
            <Image preview={false} height={400} src={image5} alt="image" />
          </h3>
        </div>
        <div>
          <h3>
            <Image height={400} src={image3} preview={false} />
          </h3>
        </div>
        <div>
          <h3>
            <Image height={400} src={image4} preview={false} />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselImage;
