function zaloguj() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('haslo').value;

    if(login=='as') {
        if(password='as') {
            window.location = 'http://localhost/~maciej/e14-simple/strona1.html';
            alert('Gratuluje dostępu do strony!');
        }
        else {
            alert('Niepoprawne hasło!');
        }
    }
    else {
        alert('Niepoprawny login uzytkownika!');
    }
}

function checkNumber() {
    var liczba = document.getElementById("moja_liczba").value;

    if(liczba > 0) {
        alert("Liczba wieksza od zera");
    }
    else if(liczba < 0) {
        alert("Liczba jest mniejsza od zera");
    }
    else {
        alert("Liczba jest rowna zero");
    }
}


function pokaz_przedzial_liczb()
{
    var liczba1 = document.getElementById("liczba_pierwsza").value;
    var liczba2 = document.getElementById("liczba_druga").value;
    var wynik = '';

    for (i=liczba1; i<=liczba2; i++) {
        wynik += i + ", ";
    }

    alert(wynik);
}
