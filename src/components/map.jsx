import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDVc1CDUVpLDi2oCI_KCzGGhTJJvpakGdw"> 
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={{ lat: 51.557245, lng: -0.130489 }}
        zoom={14}a
      >
        <Marker position={{ lat: 51.557245, lng:  -0.130489 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
