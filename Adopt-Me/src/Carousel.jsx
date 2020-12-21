import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="http://placecorgi.com/300/300" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
