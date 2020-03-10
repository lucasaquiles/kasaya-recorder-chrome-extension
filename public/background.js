document.addEventListener('DOMContentLoaded', function() {


    console.log("opa, aeee carambola");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        
        console.log("tabs", tabs);
    //         // chrome.tabs.sendMessage(tabs[0].id, "teste", function(response) {
    //         //     console.log('success');
    //         // });
    });
});