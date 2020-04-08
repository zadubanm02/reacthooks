import React from "react";
import google from "google";
import {
  GoogleMapProvider,
  InfoWindow,
  MapBox,
  Marker
} from "@googlemap-react/core";
import "./google-map-styles.scss";

export const GoogleMap = props => {
  const { GPSLat, GPSLong } = props;
  return (
    <div className="container">
      <div className="map-container">
        <GoogleMapProvider>
          <MapBox
            apiKey="AIzaSyCIdZCKDdbYMYgUf5A_u-AObRwa-8J8Msg"
            opts={{
              center: { lat: { GPSLat }, lng: { GPSLong } },
              zoom: 14
            }}
            style={{
              height: "100vh",
              width: "100%"
            }}
            useDrawing
            useGeometry
            usePlaces
            useVisualization
            onCenterChanged={() => {
              console.log("The center of the map has changed.");
            }}
          />
          <Marker
            id="marker"
            opts={{
              draggable: true,
              label: "hello",
              position: { lat: GPSLat, lng: GPSLong }
            }}
          />
          <InfoWindow
            opts={{
              content: "This is an info window",
              position: { lat: GPSLat, lng: GPSLong }
            }}
            visible
          />
        </GoogleMapProvider>
      </div>
    </div>
  );
};
