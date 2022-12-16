import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="/#">
          <img src="/images/slideImages/1.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/#">
          <img src="/images/slideImages/2.webp" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/#">
          <img src="/images/slideImages/3.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/#">
          <img src="/images/slideImages/4.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/#">
          <img src="/images/slideImages/5.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/#">
          <img src="/images/slideImages/6.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/#">
          <img src="/images/slideImages/7.webp" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
width: 68%;
height: 360px;
margin: auto;
overflow: hidden;
z-index: -1;


& > button {
    opacity: 1;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover{
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }
}

ul li button{
    margin-top: 90px;

    &:before{
        font-size: 10px;
        color: #fff;
    }
}

li.slick-active button:before{
    color: yellow;
}

.slick-list{
    overflow: initial;
}

.slick-prev {
    left: 10px;
    font-size: 30px;
}

.slick-next{
    right: 10px;
}

.slick-prev:before {
    font-size: 40px;
  }
  
  .slick-next:before {
    font-size: 40px;
  }
`;

const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position: relative;

a{
    cursor: pointer;
    display: block;
    position: relative;


    img{
        width: 100%;
        height: 100%;
    }

    &:hover{
        padding: 0;
    }
}
`;

export default ImageSlider;
