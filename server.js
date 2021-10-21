let mongoose = require("mongoose");
const express = require("express");
const app = express();
const Person = require("./person/person");

mongoose
  .connect("mongodb://localhost:27017/person")
  .then(() => console.log("Connecting to db"))

  .catch((err) => console.log(err));

//create and save
app.post("/person", (req, res) => {
  const person = new Person({
    name: "chatti aymen",
    age: 28,
    favoriteFoods: ["merguez", "kosksi", "ojja"],
  });
  person.save(() => {
    console.log("person added successfully ..");
  });
  res.send({ person: person, msg: "added" });
});

persons = [
  {
    name: "Mohamed Hassen",
    age: 29,
    favoriteFoods: ["kosksi", "pizza", "escalope"],
  },
  {
    name: "Khaled Jaouadi",
    age: 21,
    favoriteFoods: ["kosksi", "viande", "mange tout"],
  },
  {
    name: "mihed baccar",
    age: 31,
    favoriteFoods: ["ma9arouna", "pizza", "djej"],
  },
  {
    name: "Mary",
    age: 65,
    favoriteFoods: ["kosksi", "pizza", "escalope"],
  },
  {
    name: "Mary",
    age: 52,
    favoriteFoods: ["kosksi", "pizza", "escalope"],
  },
];

//Create Many Records with model.create()

/*Person.create(persons, (err, data) => {
  err ? console.log(err) : console.log("c bon tzedou");
});*/

//Use model.find() to Search Your Database

/*Person.find({}, (err, data) => {
  err ? console.log(err) : console.log(data);
});*/

//Use model.findOne() to Return a Single Matching Document from Your Database

/*Person.findOne({ favoriteFoods: "kosksi" }, (err, data) => {
  err ? console.log(err) : console.log(data);
});
Person.find({ favoriteFoods: "kosksi" }, (err, data) => {
  err ? console.log(err) : console.log(data);
});*/

//Use model.findById() to Search Your Database By _id

/*Person.findById({ _id: "617131cea53356396101611c" }, (err, data) => {
  err ? console.log(err) : console.log(data);
});*/

//Perform Classic Updates by Running Find, Edit, then Save

/*Person.findByIdAndUpdate(
  "61712eb7799a37d9dbaa56d7",
  { $push: { favoriteFoods: "hamburgers" } },
  (err, data) => {
    err ? console.log(err) : console.log(data);
  }
);*/

//Perform New Updates on a Document Using model.findOneAndUpdate()

/*Person.findOneAndUpdate(
  { name: "mihed baccar" },
  { age: 20 },
  { new: true },
  (err, data) => {
    err ? console.log(err) : console.log(data);
  }
);*/

//Delete One Document Using model.findByIdAndRemove

/*Person.findByIdAndRemove({ _id: "617131cea53356396101611d" }, (err, data) => {
  err ? console.log(err) : console.log(data);
});*/

//MongoDB and Mongoose - Delete Many Documents with model.remove()

/*Person.deleteMany({ name: "Mary" }, (err, data) => {
  err ? console.log(err) : console.log(data);
});*/

//Chain Search Query Helpers to Narrow Search Results

/*
Person.find({ favoriteFoods: "pizza" })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: 0 })
  .exec((err, data) => {
    err ? console.log(err) : console.log(data);
  });*/

app.listen(5000, (err) => {
  err ? console.log(err) : console.log("server is running");
});
