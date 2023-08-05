import { Comments } from "@/data/chatbot.js"
export default function handler (req,res){
	res.status(200).json( Comments )
}