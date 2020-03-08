

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

const erl = new EventRecordListener();

chrome.runtime.onInstalled.addListener(function() {

    console.log("começou? ", erl);

    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  });

