import React from "react";

export default class StateProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobil: "BMW, Ferrari, Lamborghini",
    };
  }
  gantiMobil = (Mobil_baru) => {
    this.setState({
      mobil: Mobil_baru,
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.mobil}</h2>
        <button onClick={() => this.gantiMobil("Mercedes-Benz, Audi")}>
          Ganti Mobil
        </button>
      </div>
    );
  }
}
