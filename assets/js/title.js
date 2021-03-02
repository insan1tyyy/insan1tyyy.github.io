var text = ["$", " $", "y $", "ty $", "1ty $", "n1ty $", "an1ty $", "san1ty $", "nsan1ty $","insan1ty $","insan1ty $","insan1t $", "insan1 $", "insan $", "insa $", "ins $", "in $", "i $", " $", "a $", "ma $", "rma $", "erma $", "perma $", "sperma $", "sperma $","sperm $","sper $","spe $", "sp $", "s $", " $", "a $", "da $", "zda $", "izda $", "pizda $", "pizda $", "pizd $", "piz $", "pi $", "p $"];
var counter = 0
var inst = setInterval(change, 200);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
