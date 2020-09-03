import amplitude from 'amplitude-js'

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
// }

function AmplitudeWrapper() {
        // amplitude:any
    
        
            const instance = amplitude.getInstance();
            instance.init("27033bfdedabcc4c0a1cdf6cb5a141bb");
            this.amplitude = instance;
        
    
        this.logEvent = (eventType, conText) =>{
            this.amplitude.logEvent(eventType, conText);
        }
    }
 const amplitudeWrapperSinglton = new AmplitudeWrapper();
console.log("amplitudeWrapperSinglton:",amplitudeWrapperSinglton)
 export const AMPLITUDE_EVENT_TYPES = {
    PAGE_VIEW       : 'PAGE_VIEW',
    PAGE_VIEW_BOUNCE: 'PAGE_VIEW_BOUNCE',
    ACTION          : 'ACTION',
  };
  
  export const logEvent = amplitudeWrapperSinglton.logEvent;