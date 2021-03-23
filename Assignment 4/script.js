/*
Solution of assignment 4:

Expected output:

Hello Yaakov
Good Bye Mohith
Good Bye Latha
Good Bye Dayakar
Hello Dad
Hello Mom
Hello Brother
Hello Bhaswanth
Hello Amrita
Good Bye India
*/

(function() {
    var names = ["Yaakov", "Mohith", "Latha", "Dayakar", "Dad", "Mom", "Brother", "Bhaswanth", "Amrita", "India"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
