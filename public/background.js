//chrome.storage.local.set({variable: variableInformation});

chrome.runtime.onConnect.addListener(function(port) {

    console.log(port.name);

    port.onMessage.addListener(function(msg) {
    
        if(msg.tab) {
            console.log(msg);
        }

        if(msg.tag) {

            console.log("tag", msg);
        }

        if(msg.paused){
            
            console.log("msg", msg);
        }
        // port.postMessage({question: "Who's there?"});
    });    
 });
