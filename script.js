var libri = {
    "titulli": "Kronike ne gur",
    "autori": "ismail kadare",
    "viti": 1971
};

//Shenimi me pike
document.write(libri.autori); //rezultati: ismail kadare

//shenimi me kllapa te mesme
document.write(libri["viti"]); //Rezultati: 1971

console.log("titulli" in libri)



var personi = {
    emri: "filan",
    mbiemri: "fisteku",
    mosha: 17,
    emriPlote: function() {
        alert(this.emri + " " + this.mbiemri)
    }
};

personi.emriPlote();


var bindi = {
    emri: "Bind",
    mbiemri: "Berisha",
    mosha: 15,
    vendndodhja: "Prishtine",
    teDhenat: function() {
        alert("Pershendetje " + this.emri + " " + this.mbiemri)
    }
};

bindi.teDhenat();




var dog = {
    name: "Rex",
    Race: "Dalmation",
    Age: 5,
    Color: "Black and white",
    Energy: 100,
    getEnergy: function() {
        console.log(this.Energy);
    },

    bark: function() {
        

     if(this.Energy < 0) {
            alert("Kujdes energjia eshte 0")
        }
        else{
           this.Energy -= 25;
        console.log("Woof woof woof " + this.Energy);
        }    
    },

    hani: function() {
        if(this.Energy > 100) {
            alert("Kujdes keni kaluar limitin e energjise")
        }
        else{
            this.Energy += 25;
            console.log("Yummy Yummy in my tummy " + this.Energy)
        }    
    }
}

dog.getEnergy();



dog.hani()
dog.hani()
dog.hani()

dog.hani()
dog.hani()
v
dog.hani()
