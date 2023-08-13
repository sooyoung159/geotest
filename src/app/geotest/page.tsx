"use client";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const Geotest = () => {
  // const cordinates = { lat: 59.955413, lng: 30.337844 };

  const [cordinates, setCordiantes] = useState<{ lat: number; lng: number }>({
    lat: 59.955413,
    lng: 30.337844,
  });

  const testHandler = () => {
    setCordiantes({
      lat: 37.474579,
      lng: 127.104247,
    });
  };
  return (
    <div className="h-screen">
      <div className="w-screen h-[calc(100%-100px)]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}` }}
          defaultCenter={cordinates}
          center={cordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
        >
          <AnyReactComponent
            lat={cordinates.lat}
            lng={cordinates.lng}
            text="여기"
          />
        </GoogleMapReact>
      </div>
      <div className="h-[100px]">
        <button onClick={testHandler}>변경 하기</button>
      </div>
    </div>
  );
};

export default Geotest;
