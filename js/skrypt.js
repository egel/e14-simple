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

    for (i=liczba1; i<=liczba2; i++)
    {
        wynik += i + ", ";
    }

    alert(wynik);
}
