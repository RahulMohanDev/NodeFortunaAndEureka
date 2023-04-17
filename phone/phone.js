import EventEmitter from 'events';
import {connectCall,makeCall} from './phoneCallConnect.js'

const callEmitter = new EventEmitter();

// configure the emitter
callEmitter.on('call', () => {
    connectCall();
    makeCall();
    // 50 function
});


callEmitter.on('cutCall',()=>{
    console.log("call cut");
})

export default callEmitter;
