import * as React from "react";
import { PiletApi } from "my-app";
import { Link } from "react-router-dom";

const Page:any = React.lazy(() => import("./Page"));
const DetailsWrapper:any = React.lazy(() => import("./details"));

interface EventFormat  {
  dataType:{
    app:string;
    role:string;
    pageUrl:string;
  },
  events:{
    clickType:string;
    name:string;
    purpose:string;
  }
}
let AllEvents:EventFormat ={
  dataType:{
    app:"",
    role:"",
    pageUrl:"",
  },
  events:{
    clickType:"",
    name:"",
    purpose:"",
  }
}

export function setup(app: PiletApi) {
  app.registerMenu(() => (
    <a href="https://docs.piral.io" target="_blank">
      Documentation
    </a>
  ));

  app.registerPage("/google", AppContainer);

  function AppContainer() {
    return <Page piral={app} />;
  }
}
