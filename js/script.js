var intro = "Xushkelibsiz!!";

var fistName = "Ismingiz nima?";
var lastName = "Familangiz nima?";
var addres ="Manzilingiz qayer?";
var profession ="Kasbingiz nima?";
var nommer = "Telefon raqamingizni kiriting!"
var email = "Emailingizni kiriting!"
var hobby = "Hobiyingiz nima?"
var info ="Malumorlat kabul kilindi. Etiboringiz uchun raxmat!";


var alertIntro = alert (intro);
var answerFistName = prompt (fistName).trim();
var answerLastName = prompt (lastName).trim();
var answerAddres = prompt (addres).trim();
var answerProfession = prompt (profession).trim();
var answerNommer = prompt (nommer).trim();
var answerEmail = prompt (email).trim();
var answerHobby = prompt (hobby).trim()
var alertInfo = alert (info);

var paragraph = document.createElement("p");
paragraph.textContent = `Xushkelibsiz ${answerFistName} ${answerLastName}!.
Sizni manzilingiz ${answerAddres} juda chiroyli shahar!.
Siz ${answerProfession} kasbingizdan faxirlaning!.
${answerFistName} telefon nomer: ${answerNommer}.
${answerFistName} email: ${answerEmail}.
Sizning hobyingiz ${answerHobby}.`;
document.body.appendChild(paragraph);

console.log (`Foydalanuvchi malumotlari.

Faydalanuvchining ismi ${answerFistName}.
${answerFistName}ning familiyasi ${answerLastName}.
U ${answerAddres} dan.
Uning kasbi ${answerProfession}.
Unin telefonraqami ${answerNommer}.
Uning emailli ${answerEmail}.
Uning hobiyi ${answerHobby}
`) 

document.body .style .backgroundColor ="thistle"
document.body .style .textAlign ="center"