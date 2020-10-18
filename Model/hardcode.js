
//create image class.......
class image {
    constructor(filename, size, resolution, type){
        this.filename = filename;
        this.size = size;
        this.resolution = resolution;
        this.type = type;
    }
}
let image1 = new image("JensPaaStrand","1TB","8K","jpeg");
//create class normal user
class normalUser {
    constructor(firstName,lastName,age,username,password,interests,id){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.username=username;
        this.password=password;
        this.interests=interests;
        this.id = id;
    }
}
//Create payment user, which exstends a normal user
class paymentUser extends normalUser{
    constructor(firstName,lastName,age,username,password,interests,job,creditCard,image,id){
        super(firstName,lastName,age,username,password,interests,id);
        this.job = job;
        this.creditCard = creditCard;
        this.image = image;
    }
};
//Example of users. Hardcoded
export let Karsten = new normalUser("Karsten","Sten",99,"Karstensten99","pwf2k",["Skydiving","Burger","Taco"]);
export let lonse = new paymentUser("Lonse","Pind",16,"LonseLove","y24k",["Skydiving","Yoga","Bowling"],"Statsminister","3117 2448 9980 2241 4200","image.jpg");

//Checks if users has any interests in common
const match = (user1,user2) => {
   return user1.interests.some(r => user2.interests.includes(r));
};

console.log(match(Karsten,lonse));