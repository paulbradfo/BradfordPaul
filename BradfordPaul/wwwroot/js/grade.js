$("#btnSend").click(function () {
    var as = parseInt($("#assign").val());
    var gr = parseInt($("#group").val());
    var qu = parseInt($("#quiz").val());
    var ex = parseInt($("#exam").val());
    var tex = parseInt($("#intex").val());

    /*Add the grades together*/

    var perc = as + gr + qu + ex + tex
    var letter = "";

    /*Assign a Letter grade according to the sum of all grade categories*/

    if (perc >= 94) {
        letter = "an A";
    }

    else if (90 <= perc && perc < 94) {
        letter = "an A-";
    }

    else if (87 <= perc && perc < 90) {
        letter = "a B+";
    }

    else if (84 <= perc && perc < 87) {
        letter = "a B";
    }

    else if (80 <= perc && perc < 84) {
        letter = "a B-";
    }

    else if (77 <= perc && perc < 80) {
        letter = "a C+";
    }

    else if (74 <= perc && perc < 77) {
        letter = "a C";
    }

    else if (70 <= perc && perc < 74) {
        letter = "a C-";
    }

    else if (67 <= perc && perc < 70) {
        letter = "a D+";
    }

    else if (64 <= perc && perc < 67) {
        letter = "a D";
    }

    else if (60 <= perc && perc < 64) {
        letter = "a D-";
    }

    else { letter = "an E"; }

    /*Print out grade result*/

    output = "Your final percentage is " + perc + "%" + "\n" + "You get " + letter;

    $("#output").html(output)

})