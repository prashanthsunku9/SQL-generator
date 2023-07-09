import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv"



const app: Application = express()

app.use(cors())
app.use(express.json())
dotenv.config();
const PORT= process.env.PORT;


const API_KEY= process.env.API_KEY;


const configuration = new Configuration({
  apiKey: API_KEY
})

const openai = new OpenAIApi(configuration);

app.post("/completions", async (req: Request, res: Response) => {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user", content: "Create a SQL request to " + req.body.message
      }]
    })
    
    res.send(completion.data.choices[0].message)
  } catch (error) {
    debugger
    console.error(error);
    res.status(500).send("Server error")
  }
})

app.listen(PORT, () => console.log(`server started successully  ${PORT}`))

