import mongoose from "mongoose";
import { title } from "process";

const topicScheme = new mongoose.Schema(
    {
        title : String,
        avatar : String,
        description : String,
        status : String,
        slug : String,
        deleted : {
            default : false,
            type : Boolean
        },
        deleteAt : Date
    },
    {
        timestamps : true
    }
)

const Topic = mongoose.model("Topic", topicScheme, "topics");
export default Topic;