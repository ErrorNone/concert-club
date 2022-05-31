import React from "react";
import { Button, Carousel, CarouselItem } from "react-bootstrap";
import HomeBackground from "../img/Home-background.png";
import "./Slider.scss";

const Slider = () => {
  return (
    <Carousel>
      <CarouselItem>
        <img
          src={HomeBackground}
          height="509px"
          alt="First slide"
          className="d-block w-100"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 carousel-shadow">
          <h1>Twenty One Pilots</h1>
          <p>22.02.23 в 21:00</p>
        </Carousel.Caption>
        <Carousel.Caption>
          <Button className="rounded-0" variant="light">
            Купить билет
          </Button>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          src={HomeBackground}
          height="509px"
          alt="Second slide"
          className="d-block w-100"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption
          className="d-flex flex-column align-items-center justify-content-center h-100 carousel-shadow">
          <h1>Twenty One Pilots</h1>
          <p>22.02.23 в 21:00</p>
        </Carousel.Caption>
        <Carousel.Caption>
          <Button className="rounded-0" variant="light">
            Купить билет
          </Button>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          src={HomeBackground}
          height="509px"
          alt="Third slide"
          className="d-block w-100"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption
          className="d-flex flex-column align-items-center justify-content-center h-100 carousel-shadow">
          <h1>Twenty One Pilots</h1>
          <p>22.02.23 в 21:00</p>
        </Carousel.Caption>
        <Carousel.Caption>
          <Button className="rounded-0" variant="light">
            Купить билет
          </Button>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
};

export default Slider;
