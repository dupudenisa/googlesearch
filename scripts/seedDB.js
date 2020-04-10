const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bookseed"
);

const bookSeed = [
  {
    title: "The Hunger Games",
    authors: ["Suzanne Collins"],
    description: "set in the dark",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  },

  {
    title: "Harry Potter",
    author: ["J.K. Rowling"],
    description: "Happy Potter",
    image: "https://www.ebay.com/i/193366878797?chn=ps&norover=1&mkevt=1&mkrid=711-117182-37290-0&mkcid=2&itemid=193366878797&targetid=885020184850&device=c&mktype=pla&googleloc=9027582&poi=&campaignid=9423618435&mkgroupid=96387797275&rlsatarget=pla-885020184850&abcId=1141016&merchantid=8531074&gclid=Cj0KCQjwj7v0BRDOARIsAGh37irEGWADIRUFXmWEgfOnoHUizHc4SOeyI-4XR34MkSpGpW8zpCy4fSwaApo7EALw_wcB",
    link: "https://books.google.com/books?id=f280CwAAQBAJ&dq=title:harry+potter&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwjgisuJytzoAhUR2qwKHZVlD6kQ6AEwAXoECAIQAg"

  },

  {
    title: "The Hunger Games",
    authors: ["Suzanne Collins"],
    description: "set in the dark",
    image: "https://www.abebooks.com/Chronicles-Narnia-Lewis-C-S-Collier/22536098931/bd?cm_mmc=ggl-_-US_Shopp_Trade-_-used-_-naa&gclid=Cj0KCQjwj7v0BRDOARIsAGh37iotQYowXzqpmE50SksfJaKhE_akpn5388lJYWsHW5b_YSqjCq2xXdoaAr6REALw_wcB#&gid=1&pid=1",
    link: "https://books.google.com/books?id=2Z0eNAEACAAJ&dq=title:the+chronicles+of+narnia&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwjrmNnlzNzoAhUN1qwKHU8yBTQQ6AEwAHoECAAQAg"

  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


