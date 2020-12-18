import React, { Component } from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker, GoogleMapReact } from "google-maps-react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { LocationPin } from "./LocationPin";

export class GoogleMaps extends Component {
	render() {
		return (
			<div>
				<Map google={this.props.google} zoom={14}>
					<Marker onClick={this.onMarkerClick} name={"Current location"} />

					<InfoWindow onClose={this.onInfoWindowClose} />
				</Map>
			</div>
		);
	}
}
GoogleMaps.propTypes = {
	google: PropTypes.object
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyBtEjDaaragieOc69Md3SehDsj5fQqQ4sw"
})(GoogleMaps);
