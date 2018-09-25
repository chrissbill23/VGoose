import {People} from "./Data";
import {connect, Model, Mongoose} from "mongoose";

let connection : Mongoose;
connect("mongodb://localhost:27017/prova").then((value) => {
    connection = value;
    let modello = new People().getModel();
    console.log("Connected!");
    let p1 = new modello({name: "christian", surname: "bile", nickname: "chrissbill23"});
    p1.save().then((data: People) => {
        console.log(data);
    }, err => {
        console.log(err.toString());
    });
}, (reason) => {
    console.log(reason.toString());
});