function inchesToImerial(inches) {
    let foot = Number(Math.floor(inches/12));
    let foot2 = inches%12;

    console.log(`${foot}'-${foot2}"`)
}

inchesToImerial(36);
inchesToImerial(55);
inchesToImerial(11);