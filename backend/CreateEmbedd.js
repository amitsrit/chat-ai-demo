import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { stringify }  from "csv-stringify";
import { appendFileSync } from "fs";
import writer from "xlsx";
import xl  from "excel4node";
import { PdfReader } from "pdfreader";
import PDFParser from "pdf2json";



const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());



//read a PDF file -


/*
        const configuration = new Configuration({
          organization: "org-TntsXAd0CauNOJMkOlFrXpKR",
          apiKey: "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",
        });

        const openai = new OpenAIApi(configuration);

        const response = openai.createEmbedding({
           input: item.text,
           model: "text-embedding-ada-002",
           encoding_format: "float",
        });
        console.log(response.data)

console.log(response.data.data[0].embedding)

console.log("now writing the embedding output to csv file");

const wb = new xl.Workbook();
const ws = wb.addWorksheet('Sheet1');

const headingColumnNames = [
    "Text",
    "Embedding"
]

let data = [
 {
    "Text":"test Text",
    "Embedding": `${response.data.data[0].embedding}`
 }
]

console.log("aba = " + data);

//Write Column Title in Excel file
let headingColumnIndex = 1;
headingColumnNames.forEach(heading => {
    ws.cell(1, headingColumnIndex++)
        .string(heading)
});


//Write Data in Excel file
let rowIndex = 2;
data.forEach( record => {
    let columnIndex = 1;
    Object.keys(record ).forEach(columnName =>{
        ws.cell(rowIndex,columnIndex++)
            .string(record [columnName])
    });
    rowIndex++;
}); 


wb.write("./embeddings2.xlsx");

console.log("Finished writing data"); */


