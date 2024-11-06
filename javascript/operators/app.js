console.log("operatörler")

 //! Template Literals
 const maas=60000
 const izingunu=30
 console.log("MAAS =" + " " + maas + " "+"+ SIGORTA", "IZIN SURESI:" + izingunu)
 console.log(`MAAS = ${maas} + SIGORTA, IZIN SURESI: ${izingunu}`) //! altgr,virgül
 console.log(`${maas - izingunu * 500}`)


 //!örnek
//  const firstName= prompt("lütfen isminizi giriniz")
//  const yas=prompt("lütfen yaşınızı giriniz:")
//  console.log(`İsmim ${firstName} yaşım ${yas}`)
//  console.log(typeof yas) //! Prompt funksiyonu verileri hep string olarak alir

//? NOT: Sistem saatini almak icin Date() class'ı kullanilabilir.
 console.log(new Date().getFullYear())

 //* Matematiksel işlemler

 //?kullanıcıdan veri girişi isteriz
 //? prompt kullanıcıdan alınan veri default olarak string gelir
 //? bu veriyi number a çevirmek istersek Number() fonksiyonunu kullanabiliriz
 //? yada prompt un önüne + koyarakta bunu yapabiliriz

//  const x= Number(prompt("yaşınızı giriniz"))
// const x= +prompt("Lütfen yaşınızı giriniz")
//  console.log(typeof x)


//!toFixed
const r=Number(prompt("Lütfen yarıçapı giriniz"))
console.log(typeof r)
console.log(typeof Math.PI)
const alan=(Math.PI * r ** 2).toFixed(2)
console.log(alan)
console.log(typeof alan)

//!Yuvarlama fonksiyonları
console.log(Math.round(153.6555)) //!yakın tam sayıya yuvarlar(154)
console.log(Math.ceil(153.26)) //!tavana yuvarlar
console.log(Math.floor(153.26)) //!tabana yuvarlar
console.log(Math.trunc(153.755)) //!her zaman tam kısmı alır

//? Math.random() 0-1 arasında rastgele random sayı üretir
console.log((Math.random()*10))
console.log(Math.round(Math.random()*10))

//?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.trunc(); //* sayinin tam kismini alir.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

//* Arttırma ve azaltma (Inc,Dec)
let num1=55
// num1 +=1 //! 1 arttır
// num1++ //! 1 arttır
// ++num1  //! 1 arttır
// num1 -=5 //! 1 azalt
num1 *=2 //! 2 ile çarp
console.log(num1)

const num2=3 % 2 //! mod alır
console.log(num2)

//? Kullanıcıdan prompt ile 3 basamaklı sayi al ve sayının basamak değerlerini ayrı ayrı yazdır örneğin birler=3 onlar=4 yüzler = 9 gibi
