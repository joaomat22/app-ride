
let box = $(".box");

// box.width(600);

// box.innerWidth(600);

box.outerWidth(600);

box.append("largura:", box.width(), "<br>",
    "largura + padding:", box.innerWidth(), "<br>",
    "largura + padding + borda:", box.outerWidth(), "<br>",
    "largura + padding + borda + margem:", box.outerWidth(true)
    );
