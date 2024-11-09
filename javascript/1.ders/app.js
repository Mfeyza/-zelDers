console.log("harici appjs çalıştı")

//! Değişken Tanımlama

// const num1=5
// let cumle="javascript dersi 1"
// console.log(num1)
// console.log(typeof num1)
// console.log(cumle)
// console.log(typeof cumle)

// let a=18
// let b=12
// console.log(a+b)
// console.log(a-b)
// console.log(b-a)


/* -------------------------------------------------------------------------- */
/*                                CONST AND LET                               */
/* -------------------------------------------------------------------------- */

const numOfCars=6.7
console.log(numOfCars)

const price="6.7" //! tırnak içinde yazılan her ifade bize tip olarak string döner
console.log(price)
console.log(typeof price) //! değişken tipi typeOf ile belirlenir

const yazi1="bes"
const yazi2=10
const sonuc=yazi1+yazi2
console.log(sonuc)
// console.log(yazi1 + yazi2)

//! Const ile tanimlanan degiskenin baslangicta degeri olmak zorundadır. Cunku sonradan atamak mumkun degildir.
// const baslangic
// baslangic=5
const baslangic=5 //!correct

//?LET
let sayac //! let ile daha sonra atama yapabiliriz
sayac=5
console.log(sayac) //! 5 çıktısını verir
let kisi=8
console.log("SAYAC"+" " + sayac+ " " + "KISI" + " " + kisi)

let tuba=25
let feyza=28
console.log("TUBA" + tuba + " " + "FEYZA" + feyza + " " +  "YASINDADIR")

let number
console.log(number)
console.log(typeof undefined)
console.log(typeof NaN)

console.log(5/0)
console.log(typeof Infinity)
console.log(0/5)

//?VAR
//* VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//* VAR değişkenleri global degiskenler gibidir.
//* LET ve CONST ile tanimlanan degiskenler block-scope 'dur
//* Yani sadece tanimlandigi block (alan) icerisinde gecerlidir.

var hoisting=100 //!Hoisting(yukarı kaldırma)
hoisting=5
console.log(hoisting) //! 5 çıktısını verir

var z
console.log(z) //!undefined

var z="11"
console.log(z)

var q=8
console.log(q)

//* SCOPE - blok alanı

{
 const number=6 //!local alanda
 console.log("NUMBER =", number)
}
console.log(number) //! global alanda undefined

var i=38 //'global değişken
{
    i=99 //'global değişkene localde değer aktardım
}
console.log(i) //! çıktı artık 99

{
    var varScope="feyza"   //? var ile bir scope icerinde degisken tanımlandiginda
    //? bu degisken scope'a bagli olmaz (Global)
}
console.log(varScope) //! feyza

{
    let letScope="tuba"
}
// console.log(letScope) //!app.js:103 Uncaught ReferenceError: letScope is not defined


var sayi1= 1500
let sayi2= 800
console.log(sayi2) //! 800 çıktısını verir
{
    var sayi1=500 //? hositingden dolayi ayni global degiskene deger aktarır.
  let sayi2 = 400 //? yeni local sayi2
    console.log(sayi2)
}
console.log(sayi1 ,  sayi2)  //? --> global sayi1 ve sayi2 yi yazdirir

//! gelmeden önce mantıksal operatör ve condition bakabilirsin.
// https://medium.com/@mrymfyza/javascript-mfy-serisi-conditions-ko%C5%9Ful-ifadeleri-if-else-ternary-d5dcd21480f4


