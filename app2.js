// function loadJSON(callback) {
//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'file.json', true);
//     xobj.onreadystatechange = function() {
//         if (xobj.readyState === 4 && xobj.status === "200") {
//
//             // .open will NOT return a value but simply returns undefined in async mode so use a callback
//             callback(xobj.responseText);
//
//         }
//     };
//     xobj.send(null);
//
// }
//
// // Call to function with anonymous callback
// loadJSON(function(response) {
//     // Do Something with the response e.g.
//     jsonresponse = JSON.parse(response);
//
//     // Assuming json data is wrapped in square brackets as Drew suggests
//     // console.log(jsonresponse[0].name);
//     console.log(jsonresponse);
//
// });
var trashs=[
    {
        "type": "jaune",
        "color": "#E0D42B",
        "icon":"<i class='fas fa-trash'></i>",
        "dechets": [
            "bouteille plastique",
            "boîtes en carton"
        ]
    },
    {
        "type": "vert",
        "color": "#0B2E13",
        "icon":"<i class='fas fa-trash-restore-alt'></i>",
        "dechets": [
            "bouteilles de vin",
            "bouteilles d'huile"
        ]
    },
    {
        "type": "bleu",
        "color": "#16193D",
        "icon":"<i class='fas fa-trash-alt'></i>",
        "dechets": [
            "libération",
            "voici"
        ]
    },
    {
        "type": "marron",
        "color": "#69471E",
        "icon":"<i class='far fa-trash-alt'></i>",
        "dechets": [
            "blanc de poulet",
            "couches-culottes"
        ]
    }
];
