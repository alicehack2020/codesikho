import * as mongoose from 'mongoose';
import {model} from 'mongoose';

const productSchema=new mongoose.Schema(
    {

     product1:{type:String,required:true},
     product2:{type:String,required:true},
     product3:{type:String,required:true},
     product4:{type:String,required:true} 
    }
);