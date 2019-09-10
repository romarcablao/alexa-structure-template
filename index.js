// Import Alexa SDK
const Alexa = require('ask-sdk-core');

// Import Default Intents
const {
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    ErrorHandler,
    IntentReflectorHandler
} = require('./intents/Default');

// Import Custom Intents
const AddTaskIntentHandler = require('./intents/AddTaskHandler');
const UpdateTaskIntentHandler = require('./intents/UpdateTaskHandler');
const DeleteTaskIntentHandler = require('./intents/DeleteTaskHandler');
const GetTaskIntentHandler = require('./intents/GetTaskHandler');

// Alexa SkillBuilder
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        // Default Intents
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,

        // Custom Intent
        AddTaskIntentHandler,
        UpdateTaskIntentHandler,
        DeleteTaskIntentHandler,
        GetTaskIntentHandler,

        // Make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
        IntentReflectorHandler,
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
