import mongoose from "mongoose";
import mongooseAggregatePaginate  from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
        videoFile : {
            type : String, // cloudinary field
            required : [true,"video must required"],
        },
        videoFile : {
            type : String, // cloudinary field
            required : [true,"thumbnail must required"],
        },
        title : {
            type : String,
            required : [true,"title must required"],
        },
        description : {
            type : String,
            required : [true,"description must required"],
        },
        duration : { 
            type : Number, // we get from cloudinary 
            required : true,
        },
        views : {
            type : Number,
            default : 0
        },
        isPublished : {
            type : Boolean,
            default : true,
        },
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {
        timestamps : true
    }
);

// aggregrate pipeline
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);