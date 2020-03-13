//chrome.storage.local.set({variable: variableInformation});

chrome.runtime.onConnect.addListener(function(port) {

    console.log(port.name);

    port.onMessage.addListener(function(msg) {
    
        if(msg.tab) {
            console.log(msg);
        }

        if(msg.tag) {

            console.log("tag");
            console.log(msg);
        }
        // port.postMessage({question: "Who's there?"});
    });    
 });
