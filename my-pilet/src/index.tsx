import * as React from "react";
import { PiletApi } from "my-app";
import { Link } from "react-router-dom";
// import DetailsWrapper from "./details"

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
  // app.registerPage("/wrapper", DetailsWrapper);
  function AppContainer() {
    return <Page piral={app} />;
  }

  // app.showNotification("Hello from Piral!", {
  //   autoClose: 2000
  // });
  
  // app.registerTile("first-tile", () => <Link to="/google">super</Link>, {
  //   initialColumns: 2,
  //   initialRows: 2
  // });
  // app.registerTile("second-tile", () => <Link to="/google">new title</Link>, {
  //   initialColumns: 2,
  //   initialRows: 2
  // });
  // app.registerTile("third-tile", () => <div><Link to="/wrapper">Wrapper</Link></div>, {
    
  // })
  // app.registerTile(() => (
  //   <button
  //     onClick={e => {
  //       sendEmit(e);
  //       app.unregisterTile("first-tile");
  //     }}
  //   >
  //     Remove first tile
  //   </button>
  // ));

  // const connect: any = app.createConnector(
  //   () =>
  //     new Promise(resolve =>
  //       setTimeout(() => resolve([{ id: 5, title: "foo" }]), 1000)
  //     )
  // );
 
  // function test(){
  //   console.log("testing");
  // }
  //test()
  // app.registerPage("/google", connect(Page));
  // app.registerPage("/google", AppContainer);
  // app.registerPage("/wrapper", DetailsWrapper);

  const properties = {
    hello: "test"
  };
  const mesurements = {
    google: "new"
  };
  //console.log('app:',app.trackEvent("test"));
  // console.log('trackEvent:',app.trackEvent("test",event,{}));

  // console.log('track:',app.trackEvent('track-event'));

  const sendEmit = (event) => {
    AllEvents.events.clickType = event.target.type;
    app.trackEvent("track-event",AllEvents);
  };
  // app.on('amplitude-event', ev => console.log('trackevent:',ev.message));

  //  app.emit('trackevent',{
  //   message:track
  // })

  app.emit("testEvent", {
    message: "new msg"
  });
}
