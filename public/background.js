chrome.runtime.onConnect.addListener(function(port) {
    console.log(port.name);
    
    port.onMessage.addListener(function(msg) {
        console.log(msg);
        // port.postMessage({question: "Who's there?"});
    });
    
 });

function listener(event) {
   
    console.log( event.currentTarget);
}

document.addEventListener("click", listener);
