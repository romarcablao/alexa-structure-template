const Alexa = require('ask-sdk-core');

const UpdateTaskIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'UpdateTaskIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'What task would you like to update?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

module.exports = UpdateTaskIntentHandler;