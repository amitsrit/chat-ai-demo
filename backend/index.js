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

app.post("/", async (request, response) => {
  const { chats } = request.body;

  console.log("question is =" + chats);

// build final prompt


const prompt = `
  Info: "Amit Pandey is software engineer working in MNC company. He is proficient in Java, microservices
and cloud concepts. He did his bachelors from RGPV university. He is a great cricket player and loves
to spend time with family."
  Question: chats[0].content
  Answer:
`; 

/*
const prompt = `
  Info: 
  Question: chats[0].content
  Answer:
`; */

  const result = await openai.createCompletion({
    model:"text-davinci-003",
    prompt: prompt,
    temperature:1,
    max_tokens:256,
    top_p:1,
    frequency_penalty:0,
    presence_penalty:0,
  });

  console.log("This is gpt respone = " + result.data.choices[0].text);
  response.json({
    output: { role: "GPT", content: result.data.choices[0].text },
  });


  console.log("This is converted respone = " + response);

});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
