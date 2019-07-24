

import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '@/views/home/Home';
import Host from '@/views/host/Host';
import Rooms from '@/views/rooms/Rooms';

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  // {
  //   path: "home",
  //   component: Home
  // },
  {
    path: '/host',
    component: Host
  },
  {
    path: "/rooms",
    component: Rooms,
    // routes: [
    //   {
    //     path: "/rooms/bus",
    //     component: Bus
    //   },
    //   {
    //     path: "/rooms/cart",
    //     component: Cart
    //   }
    // ]
  }
];