import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Video from "../Components/Video/Video";
import Story from "../Components/Story/Story";
import Nurses from "../Components/Nurses/Nurses";
import Discounted from "../Components/Navbar/Discounted/Discounted";
import Testimonial from "../Components/Testimonial/Testimonial";
import Blog from "../Components/Blog/Blog";
import Experienece from "../Components/Experience/Experienece";
import Register from "../Components/Register/Register";
import Touch from "../Components/Touch/Touch";
const Home = () => {
  return (
    <div
    // style={{
    //   width: "100%",
    //   overflow: "hidden",
    //   display: "flex",
    //   justifyContent: "center",
    // }}
    >
      {/* <div style={{ maxWidth: "1440px" }}> */}
      <Navbar />
      <Video />
      <Story />
      <Nurses />
      <Discounted />
      <Testimonial />
      <Blog />
      <Experienece />
      <Register />
      <Touch />
      {/* </div> */}
    </div>
  );
};

export default Home;
