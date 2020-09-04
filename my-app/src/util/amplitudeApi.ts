import { Extend } from "piral";
import { logEvent, AMPLITUDE_EVENT_TYPES } from "./amplitude";

declare module "piral-core/lib/types/custom" {
  interface PiletCustomApi extends MyPiletApi {}
}

interface MyPiletApi {
  trigerEvent(eventType,property,metrics): any;
  AMPLITUDE_EVENT_TYPES:any;
}

export const createMyApi = (): Extend<MyPiletApi> => {
  return () => ({
    trigerEvent(eventType,event,metrics) {
      console.log(eventType + ", " + event);
      const property = {
        page_url:window.location.pathname,
        type:event.target.innerHTML
      }
      if(event){
        event.target.value
      }
      logEvent(eventType, property);
    },
    AMPLITUDE_EVENT_TYPES:{
      API_KEY: "API_KEY",
      USER_ID: "USER_ID",
      DEVICE_ID: "DEVICE_ID",
      EVENT_TYPE: "EVENT_TYPE",
      TIME: "TIME",
      EVENT_PROPERTIES: {
        LOAD_TIME: "LOAD_TIME",
        SOURCE: "SOURCE",
        DATES: "DATES"
      },
      GROUPS: {
        COMPANY_NAME:"COMPANY_NAME"
      },
      APP_VERSION: "APP_VERSION",
      APP_NAME: "APP_NAME",
      LANGUAGE: "LANGUAGE",
      PAGE_VIEW: "PAGE_VIEW"
    }
    // AMPLITUDE_EVENT_TYPES:{
    //     "api_key": "my_amplitude_api_key",
    //     "events": [
    //       {
    //         "user_id": "datamonster@gmail.com",
    //         "device_id": "C8F9E604-F01A-4BD9-95C6-8E5357DF265D",
    //         "event_type": "watch_tutorial",
    //         "time": 1396381378123,
    //         "event_properties": {
    //           "load_time": 0.8371,
    //           "source": "notification",
    //           "dates": [
    //             "monday",
    //             "tuesday"
    //           ]
    //         },
    //         "user_properties": {
    //           "age": 25,
    //           "gender": "female",
    //           "interests": [
    //             "chess",
    //             "football",
    //             "music"
    //           ]
    //         },
    //         "groups": {
    //           "company_id": "1",
    //           "company_name": [
    //             "Amplitude",
    //             "DataMonster"
    //           ]
    //         },
    //         "app_version": "2.1.3",
    //         "platform": "iOS",
    //         "os_name": "Android",
    //         "os_version": "4.2.2",
    //         "device_brand": "Verizon",
    //         "device_manufacturer": "Apple",
    //         "device_model": "iPhone 9,1",
    //         "carrier": "Verizon",
    //         "country": "United States",
    //         "region": "California",
    //         "city": "San Francisco",
    //         "dma": "San Francisco-Oakland-San Jose, CA",
    //         "language": "English",
    //         "price": 4.99,
    //         "quantity": 3,
    //         "revenue": -1.99,
    //         "productId": "Google Pay Store Product Id",
    //         "revenueType": "Refund",
    //         "location_lat": 37.77,
    //         "location_lng": -122.39,
    //         "ip": "127.0.0.1",
    //         "idfa": "AEBE52E7-03EE-455A-B3C4-E57283966239",
    //         "idfv": "BCCE52E7-03EE-321A-B3D4-E57123966239",
    //         "adid": "AEBE52E7-03EE-455A-B3C4-E57283966239",
    //         "android_id": "BCCE52E7-03EE-321A-B3D4-E57123966239",
    //         "event_id": 23,
    //         "session_id": 1396381378123,
    //         "insert_id": "5f0adeff-6668-4427-8d02-57d803a2b841"
    //       }
    //     ]
    //   }
  });
};

