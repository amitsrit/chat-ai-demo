import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  organization: "org-TntsXAd0CauNOJMkOlFrXpKR",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const initialPrompt = "Who is Hassan Djirdeh?"

/* after some work, we determine the following contextual information to be closest in similarity to the prompt question above. */
const textWithHighestScore = "Hassan Djirdeh is a front-end engineer"

// build final prompt
const finalPrompt = `
  Info: ${textWithHighestScore}
  Question: ${initialPrompt}
  Answer:
`;

// ask Open AI to answer the prompt
const result = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: finalPrompt,
  max_tokens: 64,
});

console.log("This is gpt respone = " + result.data.choices[0].text);