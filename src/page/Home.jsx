import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../asyncActions/users";
import HomeFooter from "../components/HomeFooter";
import Slider from "../components/Slider";
import UsersBoughtTickets from "../components/UsersBoughtTickets";

const Home = () => {


  return (
    <div className="mb-5">
      <Slider />
      <UsersBoughtTickets />
      <HomeFooter />
    </div>
  );
};

export default Home;
