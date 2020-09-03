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
    - Environment ID / Tenenant names
    

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