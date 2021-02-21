// import { convertTypeAcquisitionFromJson } from "typescript";

interface PictureType{
    id:number,
    imgUrl:string,
}
let clicked:boolean = false;
let same:boolean = false;
let firstCard:HTMLElement,secondCard:HTMLElement;

//collection of pictures
const collection1 :PictureType[] = [
    {id:1,imgUrl:"https://i1.wp.com/blog.education.nationalgeographic.org/wp-content/uploads/2018/01/tech-tools.jpg?ssl=1"},
    {id:2,imgUrl:"https://slidescarnival-d1aa.kxcdn.com/wp-content/uploads/2019/09/free-technology-powerpoint-template-or-google-slides-theme-with-isometric-illustrations-400x225.jpg"},
    {id:3,imgUrl:"https://www.online-tech-tips.com/wp-content/uploads/2020/01/free-software.png"},
    {id:4,imgUrl:"https://thumbs.dreamstime.com/b/flat-lay-composition-words-technical-support-phone-computer-keyboard-grey-background-flat-lay-composition-words-130293805.jpg"},
];
const collection2 :PictureType[] = [
    {id:1,imgUrl:"https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {id:2,imgUrl:"https://thumbs.dreamstime.com/b/two-people-coding-code-program-programming-developer-computer-web-development-coder-working-design-software-desk-office-139990440.jpg"},
    {id:3,imgUrl:"https://image.shutterstock.com/image-vector/software-web-development-programming-concept-260nw-1122339353.jpg"},
    {id:4,imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGld5b0NVJcBryxEGu7XeWQnY0RQDQeRUoQ&usqp=CAU"},
];
class Card {
    cards:NodeListOf<Element>; 
    hidden:NodeListOf<Element>; 
    // cardDefault:NodeListOf<Element>; 
    constructor(cards:NodeListOf<Element>,hidden:NodeListOf<Element>){
        this.cards = cards;
        this.hidden = hidden; 
        // this.cardDefault = cardDefault;
    }
   
    displaycollection1 (colec:PictureType[] ){
        this.randomImg(colec);
    }
        randomInt(max:number,min:number):number{
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber
    }
    randomImg(imgs:PictureType[]){
        const source = imgs[this.randomInt(imgs.length-1,0)].imgUrl;
        // const source2 = imgs[this.randomInt(imgs.length-1,0)].imgUrl;
        // const source3 = imgs[this.randomInt(imgs.length-1,0)].imgUrl;
        // const source4 = imgs[this.randomInt(imgs.length-1,0)].imgUrl;
        // const source2 = imgs[this.randomInt(imgs.length-1,0)].imgUrl;
        // console.log({source,source2,source3,source4})
        let [first,second,third,fourth] = this.hidden;
        // first.style.backgroundImage  = `url(${source})`;
        // third.style.backgroundImage  = `url(${source2})`;
        // second.style.backgroundImage  = `url(${source3})`;
        // fourth.style.backgroundImage  = `url(${source4})`;
        console.log(first)
        // console.log(this)
        // first.src = source;
        // second = source;
        // third = source2;
        // fourth = source2;
            this.hidden.forEach((hidden:any,index)=>{ 
                hidden.style.backgroundImage = `url(${source})`;

                hidden.addEventListener("click",()=>{
                    hidden.classList.add("hide");
                    if(!clicked){
                        clicked = true
                        firstCard = hidden;
                    }else{
                        clicked = false;
                        secondCard = hidden;
                        // console.log({firstCard,secondCard,clicked})
      setTimeout(() => {
        if(firstCard.className === secondCard.className){
            // console.log({firstCardClass:firstCard.className,secondCardClass:secondCard.className})
            same = true

        }else{
            firstCard.classList.remove("hide")
            secondCard.classList.remove("hide")
        }
      }, 1000);
                    }
                })
             })        
    }

}
const defaultCards = document.querySelectorAll(".default")
const defaultCards2 = document.querySelectorAll(".default2")
const hiddenCards = document.querySelectorAll(".card")
const hiddenCards2 = document.querySelectorAll(".card2")
const cards = new Card(defaultCards,hiddenCards)
const cards2 = new Card(defaultCards2,hiddenCards2)
cards.displaycollection1(collection1);
cards2.displaycollection1(collection2);