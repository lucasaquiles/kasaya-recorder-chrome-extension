class EventRecordListener {

    constructor() {
        this.record = {

            element: [],
            name: ""
        }
    }

    recorderInteraction(event) {

        const ri = {element: event.currentTarget, eventType: event.type}; 
        
        console.log("elemento: ", ri.element);
        console.log("type: ", ri.eventType);
    }
}

// chrome.runtime.onMessage.addListener(
    
//     function(request, sender, sendResponse) {

//        const erl = new EventRecordListener();
//        console.log("começou? ", erl); 

//        if( request.message === "clicked_browser_action") {
//          toggle();
//        }
//     }
//  );


