Shell:(A seprate core module for apex-shell)

- Page views shell
- Connect to Amplitude
  - API_KEY Management
  - Service requests
- Roles
- Provide general data format
  - Login information
  - anotations and so on.

Package:

- function which emit a specific event
  app.amplitudeTrackEvent(data)
  app.amplitudeButtonClick(data)
- Amplitude expects data??
  Mapper from package to Amplitude data

Client:(Apex components adding extra attribute)

- event-listeners
- page and api request time
- data points to collect (id/button-name/filters)
- download and upload time
  - Is it neccesary to make back end changes??
  - Limitations in UI to handle these
----------------------------------

Amplitude Dashboard
https://analytics.amplitude.com/vinod/chart/new/c2o4d88