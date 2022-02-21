document.getElementById('output').style.visibility = 'hidden'

let input = document.getElementById('go').addEventListener('click', convert);

function convert() {
    document.getElementById('output').style.visibility = 'visible'
    let kilo = document.getElementById('ibsInput').value ;
    document.getElementById('poundsOutput').innerHTML = (kilo*2.2047).toFixed(2);
    document.getElementById('ozOutput').innerHTML = (kilo*35.274).toFixed(2);
    document.getElementById('gramsOutput').innerHTML = (kilo*1000);
}