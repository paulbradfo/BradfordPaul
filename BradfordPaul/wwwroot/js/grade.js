$("#btnSend").click(function () {
    var as = parseInt($("#assign").val());
    var gr = parseInt($("#group").val());
    var qu = parseInt($("#quiz").val());
    var ex = parseInt($("#exam").val());
    var tex = parseInt($("#intex").val());

    var perc = ((as / 55) + (gr / 5) + (qu / 10) + (ex / 20) + (tex / 10)) * 100;
    var letter = "";

    if (perc >= 94) {
        letter = "A"
    }

    else if (90 <= perc && perc < 94) {
        letter = "A-"
    }

    else if (87 <= perc && perc < 90) {
        letter = "B+"
    }

    else if (84 <= perc && perc < 87) {
        letter = "B"
    }

    else if (80 <= perc && perc < 84) {
        letter = "B-"
    }

    else if (77 <= perc && perc < 80) {
        letter = "C+"
    }

    else if (74 <= perc && perc < 77) {
        letter = "C"
    }

    else if (70 <= perc && perc < 74) {
        letter = "C-"
    }

    else if (67 <= perc && perc < 70) {
        letter = "D+"
    }

    else if (64 <= perc && perc < 67) {
        letter = "D"
    }

    else if (60 <= perc && perc < 64) {
        letter = "D-"
    }

    else { letter = "E" }

    output = "Your final percentage is " + perc + "%" + "\n" + "You get a " + letter;

    $("#output").html() = output;
})