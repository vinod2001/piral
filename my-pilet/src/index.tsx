import * as React from "react";
import { PiletApi } from "my-app";
import { Link } from "react-router-dom";

const Page = React.lazy(() => import("./Page"));

export function setup (app: PiletApi) {
 
  app.showNotification("Hello from Piral!", {
    autoClose: 2000
  });
  app.registerMenu(() => (
    <a href="https://docs.piral.io" target="_blank">
      Documentation
    </a>
  ));
  app.registerTile("first-tile", () => <Link to="/google">super</Link>, {
    initialColumns: 2,
    initialRows: 2
  });
  app.registerTile(
    "second-tile",
    () => <Link to="/google">new title</Link>,
    {
      initialColumns: 2,
      initialRows: 2
    }
  );

  app.registerTile(() => (
    <button onClick={() => app.unregisterTile("first-tile")}>
      Remove first tile
    </button>
  ));
  
  // const connect: any = app.createConnector(
  //   () =>
  //     new Promise(resolve =>
  //       setTimeout(() => resolve([{ id: 5, title: "foo" }]), 1000)
  //     )
  // );
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const connect:any = app.createConnector(()=>
    fetch(apiUrl).then(res=>res.json())
  )
  function test(){
    console.log("testing");
  }
 test()
  app.registerPage("/google", connect(Page));
  const properties = {
    hello:'test'
  }
  const mesurements = {
    google:'new'
  }
  //console.log('app:',app.trackEvent("test"));
   // console.log('trackEvent:',app.trackEvent("test",event,{}));

   app.trackEvent('sample-pilet-ready');
}
