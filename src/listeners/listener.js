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



