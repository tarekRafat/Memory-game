"use strict";
// import { convertTypeAcquisitionFromJson } from "typescript";
let clicked = false;
let same = false;
let firstCard, secondCard;
//collection of pictures
const collection1 = [
    { id: 1, imgUrl: "https://i1.wp.com/blog.education.nationalgeographic.org/wp-content/uploads/2018/01/tech-tools.jpg?ssl=1" },
    { id: 2, imgUrl: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
    { id: 3, imgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 4, imgUrl: "https://thumbs.dreamstime.com/b/flat-lay-composition-words-technical-support-phone-computer-keyboard-grey-background-flat-lay-composition-words-130293805.jpg" },
];
// const collection2 :PictureType[] = [
//     {id:1,imgUrl:"https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
//     {id:2,imgUrl:"https://thumbs.dreamstime.com/b/two-people-coding-code-program-programming-developer-computer-web-development-coder-working-design-software-desk-office-139990440.jpg"},
//     {id:3,imgUrl:"https://image.shutterstock.com/image-vector/software-web-development-programming-concept-260nw-1122339353.jpg"},
//     {id:4,imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGld5b0NVJcBryxEGu7XeWQnY0RQDQeRUoQ&usqp=CAU"},
// ];
class Card {
    //Methods
    randomInt(max, min) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
    }
    displaycollection1(colec) {
        this.randomImg(colec);
        this.flipCards();
    }
    randomImg(imgs) {
        let randomSourceImg;
        let randomSourceImg2;
        let randomSourceImg3;
        let testDiv;
        let testDiv2;
        let newPic;
        let newPic2;
        // console.log(this.hidden)
        randomSourceImg = this.randomSource(imgs);
        randomSourceImg2 = this.randomSource(imgs);
        randomSourceImg3 = this.randomSource(imgs);
        let arrOfRandoumImgs = [1, 3, 2, 1, 2, 3, 3, 4, 5, 6, 6, 6];
        // arrOfRandoumImgs.push(randomSourceImg,randomSourceImg2,randomSourceImg3);
        console.log([...new Set(arrOfRandoumImgs)]);
        for (let i = 0; i < imgs.length / 2; i++) {
            testDiv = document.createElement("div");
            newPic = ` <img src="${randomSourceImg}"/>`;
            testDiv.innerHTML = newPic;
            document.body.appendChild(testDiv);
            // testDiv2 = document.createElement("div");
            // newPic2 = ` <img src="${randomSourceImg2}"/>`;
            // testDiv2.innerHTML = newPic2
            // document.body.appendChild(testDiv2);
        }
    }
    randomSource(imgs) {
        const source = imgs[this.randomInt(imgs.length - 1, 0)].imgUrl;
        return source;
    }
    flipCards() {
    }
}
// const defaultCards = document.querySelectorAll(".default")
// const hiddenCards = document.querySelectorAll(".card")
const cards = new Card();
cards.displaycollection1(collection1);
