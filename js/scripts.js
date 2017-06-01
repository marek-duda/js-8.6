var a = 5;
var b = 10;
var value = (a * a) + (2 * a * b) - (b * b);

console.log('Value = ' + value);

if ( value > 0 ) {
    console.log('Wynik dodatni');
} else if ( value < 0 ) {
    console.log('Wyniku ujemny');
}

if ( value == 0 ) {
    console.log('Wynik jest równy zero');
} else if ( ( value > 0 ) || ( value < 0 ) ) {
    console.log('Wynik nie jest równy zero');
}