import { Component } from "react";
import withRouter from "./withRouter";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./modal";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: "",
      animal: "",
      breed: "",
      description: "",
      location: "",
      id: "",
      images: [],
      showModal: false,
    };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    console.log(res);
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  adopt = () => {
    window.location = "http://bit.ly/pet-adopt";
  };

  render() {
    const { showModal } = this.state;
    if (this.state.loading) {
      return <h2>Loading</h2>;
    }
    const { animal, breed, city, state, name, description, images } =
      this.state;
    console.log(this.state);
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}{" "}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}?</h1>
              <div>
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No, I am a monster</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
