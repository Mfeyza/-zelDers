console.log("Conditions")

// * ============================================
// *               KARAR YAPILARI
// * ============================================

//! if ifadesi
//? en temel koşul ifadesidir eğer koşul doğruysa kod bloğu çalışır.

let a=80
let b=100
if(a<b ){
    console.log("80 100 de küçüktür koşul doğrudur kod bloğu çalıştı yazdır")
}

let maas=80000
let zamorani=0.1
let zamlimaas=maas*zamorani + maas
if(zamlimaas == 87500 || 88000 ){
    console.log("kod bloğu calisti")
}

//! if-else ifadesi
//?else if koşulu yanlış olduğu zaman çalışacak kod bloğudur

let tuba=26
let feyza=28
if(feyza < tuba){
    console.log("if bloğu calisti")
}else{
    console.log("else bloğu calisti")
}

//! else if ifadesi
//? birden fazla koşulu kontrol etmek istediğimiz zaman calisir

const sayi=0
if(sayi<0){
    console.log("sayi negatiftir")
}else if(sayi>0){
console.log("sayi pozitiftir")
}else{
    console.log("sayi sifira esittir")
}

// const sayi2=+prompt("bir sayi giriniz")
// if(sayi2<0){
//     console.log("sayi negatiftir")
// }else if(sayi2>0){
// console.log("sayi pozitiftir")
// }else{
//     console.log("sayi sifira esittir")
// }

// const not=+prompt("notunuzu giriniz")
// if(not<40){
//     console.log("FF")
// }else if(not<55){
//     console.log("DD")
// }else if(not <70){
//     console.log("CC")
// }else if(not <85){
//     console.log("BB")
// }else{
//     console.log("AA")
// }
//? 3 farklı tam sayı yazalım ve bunların en büyğünü yazdıralım

const s1=2
const s2=1
const s3=5
 if(s1 >= s2 && s1>= s3){
    console.log("s1 en büyük sayıdır")
 }else if(s2>= s1 && s2 >= s3){
    console.log("s2 en büyük sayıdır")
 }else if(s3>= s2 && s3>=s1){
    console.log("s3 en büyük sayıdır")
 }

 //**************** TERNARY *******************
 //! koşul ifadelerini daha kısa ve öz şekilde yazmak için kullanıılır

 //? conditions ? true : false

 let login= false

 let message= login ? "Welcome" : "Please log in"
 console.log(message)

 //!soru (kullanıcıdan bir not istiyorum not 50 den büyükse geçsin değilse kalsın mesajı yazdıralım)

//  const puan=+prompt("puanınızı giriniz")
//  let msg= puan > 50 ? "geçti" : "kaldı"
//  console.log(msg)

let hız=98
const msg2= hız > 120 ? "HIZLI" : hız >90 ? "ORTA" : "YAVAŞ"
console.log(msg2)


//!SORU : bir kullanıcın giriş bilgilerini kontrol edelim, eğer giriş bilgileri doğru ise giriş başarılı yazsın. Eğer ikisinden biri yanlış ise hangisinin yanlış girildiğiyle ilgili consolda feedback alalım

let username= "mfy35"
let password="mfy1234?"

if(username ==="mfy35" && password ==="mfy1234?"){
    console.log("giriş başarılı")
}else if(username !== "mfy35"){
    console.log("kullanıcı username i hatalı")
}else if(password !== "mfy1234?"){
    console.log("password hatalı")
}else{
    console.log("sunucu hatası")
}

// let userRole=prompt("rolünüzü yazınız")
// let msg4=userRole === "admin" ? "hoşgeldiniz admin" : userRole==="editör" ? "hoşgeldin editör" : "Hoş geldin kullanıcı"
// console.log(msg4)

let yas=25
let ehliyet=false
if(yas >= 18 && ehliyet){
    console.log("araba kiralayabilirsin")
}else{
    console.log("araba kiralayamazsın")
}


//**************** SWITCH-CASE *******************
const gun = 6

switch (gun) {
  case 1:
    console.log("Pazartesi")
    break
  case 2:
    console.log("Sali")
    break
  case 3:
    console.log("Carsamba")
    break
  case 4:
    console.log("Persembe")
    break
  case 5:
    console.log("Cuma")
    break
  default:
    console.log("Hafta sonu")
    break
}
