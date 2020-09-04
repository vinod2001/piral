import amplitude from 'amplitude-js';
import sha256 from 'sha256';

// const parseUrlToHash = (url) => {
//     const result = {};
  
//     if (!url) return result;
  
//     const query = url.slice(url.indexOf('?') + 1);
  
//     query.split('&').forEach((section) => {
//       const [key, value] = section.split('=');
//       result[key] = decodeURIComponent(value);
//     });
  
//     return result;
//   };
// class AmplitudeWrapper {
//     amplitude:any;

//     constructor(){
//         const instance = amplitude.getInstance();
//         instance.init("27033bfdedabcc4c0a1cdf6cb5a141bb");
//         this.amplitude = instance;
//     }

//     logEvent = (eventType, conText) =>{
//         this.amplitude.logEvent(eventType, conText);
//     }
    
//     // setUserHash = (payload) => {
//     //     const {
//     //       environmentSelectionUrl,
//     //       frontDoorUrl,
//     //       user: {
//     //         email,
//     //         locale,
//     //         language,
//     //       },
//     //     } = payload;
    
//     //     const environmentSelectionHash:any = parseUrlToHash(environmentSelectionUrl);
//     //     const customer = environmentSelectionHash.customer;
    
//     //     const frontDoor = frontDoorUrl.replace(/.com.*/, '.com');
//     //     const frontDoorHash:any = parseUrlToHash(frontDoorUrl);
//     //     const frontDoorEnvID = frontDoorHash.environmentId;
    
//     //     const hashedEmail = sha256(email);
//     //     const isInternalRequest = /@apptio.com$/gi.test(email);
    
//     //     const userProperties = {
//     //       locale,
//     //       language,
//     //       customer,
//     //       frontDoor,
//     //       frontDoorEnvID,
//     //       isInternalRequest,
//     //       usesAppShell: !!process.env.REACT_APP_USE_NEW_SHELL,
//     //     };
    
//     //     this.amplitude.setUserId(hashedEmail);
//     //     this.amplitude.setUserProperties(userProperties);
//     //   }
// }
function AmplitudeWrapper() {
       
            const instance = amplitude.getInstance();
            instance.init("27033bfdedabcc4c0a1cdf6cb5a141bb");
            this.amplitude = instance;
        
    
        this.logEvent = (eventType, conText) =>{
            this.amplitude.logEvent(eventType, conText);
        }
    }
 const amplitudeWrapperSinglton = new AmplitudeWrapper();
// console.log("amplitudeWrapperSinglton:",amplitudeWrapperSinglton);
//  export const AMPLITUDE_EVENT_TYPES = {
//     PAGE_VIEW       : 'PAGE_VIEW',
//     PAGE_VIEW_BOUNCE: 'PAGE_VIEW_BOUNCE',
//     ACTION          : 'ACTION',
//   };
  
  export const logEvent = amplitudeWrapperSinglton.logEvent;





  