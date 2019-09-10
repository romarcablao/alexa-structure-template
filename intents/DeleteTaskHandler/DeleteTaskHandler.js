const Alexa = require('ask-sdk-core');

const DeleteTaskIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DeleteTaskIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'What task would you like to delete?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

module.exports = DeleteTaskIntentHandler;