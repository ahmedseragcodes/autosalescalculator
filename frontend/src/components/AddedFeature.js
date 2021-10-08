import React from 'react';
import { removeFeature } from '../store/actions';
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button is-danger" onClick={()=>props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return{
    additionalPrice: state.additionalPrice,
    car: {
      price: state.car.price,
      name: state.car.name,
      image: state.car.image,
      features: state.car.features,
    },
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);