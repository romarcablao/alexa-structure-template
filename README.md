# alexa-structure-template
How I structure my custom Alexa skill

[![GitHub](https://img.shields.io/badge/GitHub-romarcablao-lightgrey)](https://github.com/romarcablao)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-romarcablao-blue)](https://linkedin.com/in/romarcablao)

## Structure
1. Core - handles functions, queries or database connection.
2. Intents - handles specific Alexa Intent Handlers.

## GetTaskIntentHandler

  ```js
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

  ```

If user call upon the specific intents, it will be mapped to the intent handler to process specific activity/task.From the code above [GetTaskIntentHandler], what the handler will do is to call a function [getTask()] which resides on the core function folder, query from your source and respond through speech with data returned by the function.

---
[Romar Cablao](https://www.linkedin.com/in/romarcablao) | <romarcablao@gmail.com>
