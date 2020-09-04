Shell:(A seprate core module for apex-shell)

- Page views shell
    - page path details
    - Time taken for page to load

- Roles
    - Type of Role
    - User ID

-App category (App Name)
    - Environment ID
    - App version
    
- Logos
    - Environment ID / Tenant names

- Users
    - Active user

    

Package:
- Connect to Amplitude
  - API_KEY Management
  - Service requests

- function which emit a specific event
  app.amplitudeTrackEvent(data)
  app.amplitudeButtonClick(data)
- Amplitude expects data??
  Mapper from package to Amplitude data

- Provide general data format
  - Login information
  - anotations and so on.


Client:(Apex components adding extra attribute)

- event-listeners
- page and api request time (To figure out how to do this)
- data points to collect (id/button-name/filters)
- download and upload time (need to figure out)
  - Is it neccesary to make back end changes??
  - Limitations in UI to handle these
----------------------------------

Amplitude Dashboard
https://analytics.amplitude.com/vinod/chart/new/c2o4d88


----------------------------------

{
  "logoName": "companyName",
  "user":{
    "anonymousId/userId": "507f191e810c19729de860ea",
    "userRole": "admin",
  }
  "app":{
      "name":"itp",
      "version":"1.2.3"
      "environmentId":"q341234235643qew542345"
  },
  "locale": "en-US",
  "context": {
    "page": {
      "title": "page title",
      "url": "page url",
      "loadTime": "2sec" 
    },
    "event":{
      "type":"submit/button/checkbox/radio etc.."
      "name":"value of event property"
      "time":{
          "uploadEvent": "12sec",
          "downloadEvent": "20sec"
      }
    }
  },
  <!-- "integrations": {
    "All": true,
    "Mixpanel": false,
    "Salesforce": false
  } -->
}

-----------------------------


{
  "api_key": "my_amplitude_api_key",
  "events": [
    {
      "user_id": "datamonster@gmail.com",
      "device_id": "C8F9E604-F01A-4BD9-95C6-8E5357DF265D",
      "event_type": "watch_tutorial",
      "time": 1396381378123,
      "event_properties": {
        "load_time": 0.8371,
        "source": "notification",
        "dates": [
          "monday",
          "tuesday"
        ]
      },
      "user_properties": {
        "age": 25,
        "gender": "female",
        "interests": [
          "chess",
          "football",
          "music"
        ]
      },
      "groups": {
        "company_id": "1",
        "company_name": [
          "Amplitude",
          "DataMonster"
        ]
      },
      "app_version": "2.1.3",
      "platform": "iOS",
      "os_name": "Android",
      "os_version": "4.2.2",
      "device_brand": "Verizon",
      "device_manufacturer": "Apple",
      "device_model": "iPhone 9,1",
      "carrier": "Verizon",
      "country": "United States",
      "region": "California",
      "city": "San Francisco",
      "dma": "San Francisco-Oakland-San Jose, CA",
      "language": "English",
      "price": 4.99,
      "quantity": 3,
      "revenue": -1.99,
      "productId": "Google Pay Store Product Id",
      "revenueType": "Refund",
      "location_lat": 37.77,
      "location_lng": -122.39,
      "ip": "127.0.0.1",
      "idfa": "AEBE52E7-03EE-455A-B3C4-E57283966239",
      "idfv": "BCCE52E7-03EE-321A-B3D4-E57123966239",
      "adid": "AEBE52E7-03EE-455A-B3C4-E57283966239",
      "android_id": "BCCE52E7-03EE-321A-B3D4-E57123966239",
      "event_id": 23,
      "session_id": 1396381378123,
      "insert_id": "5f0adeff-6668-4427-8d02-57d803a2b841"
    }
  ]
}