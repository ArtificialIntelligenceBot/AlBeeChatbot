/**
 * -----------------------------------------------
 *
 * AlBeeCharbot - an Opensource A.I. Chatbot
 * ==  A Smart Virtual Stduent Assistant ==
 * https://github.com/ArtificialIntelligenceBot/AlBeeChatbot
 *
 * -----------------------------------------------
 *
 * App Frontend:
 *   - node.js (https://nodejs.org)
 *   - Progressive Web App (https://en.wikipedia.org/wiki/Progressive_web_app)
 * A.I.
 *   Google - DialogFlow aka. API.ai (https://dialogflow.com)
 *   work in progress:
 *     - RASA (https://rasa.ai/)
 *     - AWS Lex (https://aws.amazon.com/lex)
 * -----------------------------------------------
 *
 * This source code is licensed under the BSD-style license.
 * Copyright 2007- by Max Tsai (mt8168@gmail.com)
 *
 */
"use strict";

var client;

function initBot() {
  client = new ApiAi.ApiAiClient({accessToken: 'a1d33eda68d34cffa530cbf904af9627'});
};

function sendText(text) {
  return client.textRequest(text);
}
