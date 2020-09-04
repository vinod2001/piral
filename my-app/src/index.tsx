import "piral/polyfills";
import { renderInstance, Extend, createInstance } from "piral";
import { layout, errors } from "./layout";
// import { creatSearchApi } from "piral-search";
import { createTrackingApi } from "piral-tracking";
import { logEvent, AMPLITUDE_EVENT_TYPES } from "./util/amplitude";
import { createMyApi } from "./util/amplitudeApi"


// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = "https://feed.piral.cloud/api/v1/pilet/pilet_tutorial";




// const instance = createInstance({
//   // important part
//   extendApi: [createTrackingApi()],
//   // ...
// });
// console.log("createInstance:",instance);


const { root } = renderInstance({
  layout,
  errors,
  extendApi: [createTrackingApi(),createMyApi()], // this need to be added when adding our own the plugin.. wecan also add piral pludings like creatSearchApi() eg: [createMyApi(),creatSearchApi()]
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => {
        console.log("extension:", JSON.stringify(res));
        return res.items;
      });
  }
});
// console.clear();
root.on("testEvent", ev =>
  setTimeout(() => {
    return console.log("testEvent:", ev.message);
  }, 5000)
);

// root.on("track-event", ev => {
//   console.log("latestTrack:", ev);
//   logEvent(AMPLITUDE_EVENT_TYPES.PAGE_VIEW_BOUNCE, ev);
// });

// console.log("eventtrack",root.registerExtension);
//console.log("eventtrack",root.trackEvent);
// console.log('extension:',root.trackEvent("my-pilet"));
// setTimeout(() => {
//   alert(root.AMPLITUDE_EVENT_TYPES.api_key);
//  //root.registerSearchProvider;
// }, 1500);
