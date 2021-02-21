// import { convertTypeAcquisitionFromJson } from "typescript";
var clicked = false;
var same = false;
var firstCard, secondCard;
//collection of pictures
var collection1 = [
    { id: 1, imgUrl: "https://i1.wp.com/blog.education.nationalgeographic.org/wp-content/uploads/2018/01/tech-tools.jpg?ssl=1" },
    { id: 2, imgUrl: "https://slidescarnival-d1aa.kxcdn.com/wp-content/uploads/2019/09/free-technology-powerpoint-template-or-google-slides-theme-with-isometric-illustrations-400x225.jpg" },
    { id: 3, imgUrl: "https://www.online-tech-tips.com/wp-content/uploads/2020/01/free-software.png" },
    { id: 4, imgUrl: "https://thumbs.dreamstime.com/b/flat-lay-composition-words-technical-support-phone-computer-keyboard-grey-background-flat-lay-composition-words-130293805.jpg" },
];
var collection2 = [
    { id: 1, imgUrl: "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id: 2, imgUrl: "https://thumbs.dreamstime.com/b/two-people-coding-code-program-programming-developer-computer-web-development-coder-working-design-software-desk-office-139990440.jpg" },
    { id: 3, imgUrl: "https://image.shutterstock.com/image-vector/software-web-development-programming-concept-260nw-1122339353.jpg" },
    { id: 4, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGld5b0NVJcBryxEGu7XeWQnY0RQDQeRUoQ&usqp=CAU" },
];
var Card = /** @class */ (function () {
    // cardDefault:NodeListOf<Element>; 
    function Card(cards, hidden) {
        this.cards = cards;
        this.hidden = hidden;
        // this.cardDefault = cardDefault;
    }
    Card.prototype.displaycollection1 = function (colec) {
        this.randomImg(colec);
    };
    Card.prototype.randomInt = function (max, min) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
    };
    Card.prototype.randomImg = function (imgs) {
        var source = imgs[this.randomInt(imgs.length - 1, 0)].imgUrl;
        // const source2 = imgs[this.randomInt(imgs.length-1,0)].imgUrl;
        // const source3 = imgs[this.randomInt(imgs.length-1,0)].imgUrl;
        // const source4 = imgs[this.randomInt(imgs.length-1,0)].imgUrl;
        // const source2 = imgs[this.randomInt(imgs.length-1,0)].imgUrl;
        // console.log({source,source2,source3,source4})
        var _a = this.hidden, first = _a[0], second = _a[1], third = _a[2], fourth = _a[3];
        // first.style.backgroundImage  = `url(${source})`;
        // third.style.backgroundImage  = `url(${source2})`;
        // second.style.backgroundImage  = `url(${source3})`;
        // fourth.style.backgroundImage  = `url(${source4})`;
        console.log(first);
        // console.log(this)
        // first.src = source;
        // second = source;
        // third = source2;
        // fourth = source2;
        this.hidden.forEach(function (hidden, index) {
            hidden.style.backgroundImage = "url(" + source + ")";
            hidden.addEventListener("click", function () {
                hidden.classList.add("hide");
                if (!clicked) {
                    clicked = true;
                    firstCard = hidden;
                }
                else {
                    clicked = false;
                    secondCard = hidden;
                    // console.log({firstCard,secondCard,clicked})
                    setTimeout(function () {
                        if (firstCard.className === secondCard.className) {
                            // console.log({firstCardClass:firstCard.className,secondCardClass:secondCard.className})
                            same = true;
                        }
                        else {
                            firstCard.classList.remove("hide");
                            secondCard.classList.remove("hide");
                        }
                    }, 1000);
                }
            });
        });
    };
    return Card;
}());
var defaultCards = document.querySelectorAll(".default");
var defaultCards2 = document.querySelectorAll(".default2");
var hiddenCards = document.querySelectorAll(".card");
var hiddenCards2 = document.querySelectorAll(".card2");
var cards = new Card(defaultCards, hiddenCards);
var cards2 = new Card(defaultCards2, hiddenCards2);
cards.displaycollection1(collection1);
cards2.displaycollection1(collection2);
