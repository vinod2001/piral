import "piral/polyfills";
import { renderInstance } from "piral";
import { layout, errors } from "./layout";
import { createTrackingApi } from 'piral-tracking';
import { logEvent, AMPLITUDE_EVENT_TYPES } from "./utils/amplitude";


// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = "https://feed.piral.cloud/api/v1/pilet/pilet_tutorial";


const { root } = renderInstance({
  layout,
  errors,
  extendApi: [createTrackingApi()], // this need to be added when adding our own the plugin.. wecan also add piral pludings like creatSearchApi() eg: [createMyApi(),creatSearchApi()]
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => {
        console.log("extension:",JSON.stringify(res));
        return res.items;
      });
  }
});

root.on('track-event', (data) => {
  console.log(data);
  logEvent(AMPLITUDE_EVENT_TYPES.PAGE_VIEW, data);
})