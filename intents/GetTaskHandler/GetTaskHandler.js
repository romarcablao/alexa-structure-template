const Alexa = require('ask-sdk-core');
const DB = require('../../core/database');

const GetTaskIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetTaskIntent';
    },
    handle(handlerInput) {
        // Call get query/logic here
        let tasks = DB.getTasks();
        const speakOutput = 'Here are your tasks: ' + tasks;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

module.exports = GetTaskIntentHandler;