/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    //unary plus used in setstate to convert string to number
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photos, index) => (
            <img
              key={photos}
              src={photos}
              data-index={index}
              onClick={this.handleIndexClick}
              onKeyDown={this.handleIndexClick}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
