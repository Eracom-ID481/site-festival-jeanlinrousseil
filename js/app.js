/// ********************* P5 ****************///


let header = document.getElementById("header");
let video;


function setup() {
  
  let canvas = createCanvas(windowWidth, windowHeight - header.clientHeight)
  canvas.parent('sketch');
 // video = createVideo('../assets/luff_affche.mp4');
  // video.hide();
  // video.loop();
  

  // put setup code here
}

function draw() {
  ellipse(mouseX, mouseY, mouseX, mouseY);

  //fill('#ED225D');
  //textFont(myFont,mouseX, mouseY, mouseX, mouseY);
  //textSize(36);
  //text('p5*js', 10, 50);
  // put drawing code here


}



/// ********************* TIMETABLE ****************///
const filters = document.getElementsByClassName("filter");
let current = document.getElementsByClassName("active");
drawTimetable(current[0].classList[1]);

for (let e of filters) {
  e.addEventListener("click", function () {
    current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    document.getElementById("timetable").innerHTML = "";
    drawTimetable(current[0].classList[1]);
  });
}

function drawTimetable(day) {
  let timetable = new Timetable();

  // On dessine une nouvelle grille selon le jour.
  // Utilisez le nom de classe attribuée à chaque jour pour donner la condition
  if (day == "vendredi") {
    // Définir les heures de la grille (heure de début, heure de fin).
    timetable.setScope(22, 07);

    // Définir les lieux de la grille.
    timetable.addLocations([
      "Paderewski",
      "Salle des Fêtes",
      "Oblò",
      "Collège du Belvédère",
      "Le Romandie",
      "EJMA",
      "Cinématographe",
      "Esplanade du Casino",
      "Casino de Montbenon",
      "Bellevaux",
    ]);

    // Premier événement:

    timetable.addEvent(
      // Artiste
      "Automatic Tasty",
      // Lieu
      "Paderewski",
      // Date et heure de début (année, mois, jour, heure, minute)
      new Date(2021, 10, 17, 22, 00),
      // Date et heure de fin (année, mois, jour, heure, minute)
      new Date(2021, 10, 17, 23, 00),
      // URL Quand on clicke sur le lien
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      // Artiste
      "Ansome",
      // Lieu
      "Paderewski",
      // Date et heure de début (année, mois, jour, heure, minute)
      new Date(2021, 10, 17, 05, 00),
      // Date et heure de fin (année, mois, jour, heure, minute)
      new Date(2021, 10, 17, 06, 00),
      // URL Quand on clicke sur le lien
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      // Artiste
      "Aphex-Twin",
      // Lieu
      "Salle des Fêtes",
      // Date et heure de début (année, mois, jour, heure, minute)
      new Date(2021, 10, 17, 01, 00),
      // Date et heure de fin (année, mois, jour, heure, minute)
      new Date(2021, 10, 17, 02, 00),
      // URL Quand on clicke sur le lien
      { url: "../artiste.html" }
    );

    
    timetable.addEvent(
      // Artiste
      "BOC",
      // Lieu
      "Salle des Fêtes",
      // Date et heure de début (année, mois, jour, heure, minute)
      new Date(2021, 10, 17, 06, 00),
      // Date et heure de fin (année, mois, jour, heure, minute)
      new Date(2021, 10, 17, 07, 00),
      // URL Quand on clicke sur le lien
      { url: "../artiste.html" }
    );

    // Deuxième événement
    timetable.addEvent(
      "Torriko",
      "Collège du Belvédère",
      new Date(2020, 10, 17, 13, 00),
      new Date(2020, 10, 17, 15, 45),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Gesmcom",
      "Collège du Belvédère",
      new Date(2020, 10, 17, 05, 00),
      new Date(2020, 10, 17, 06, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Koloah",
      "EJMA",
      new Date(2020, 10, 17, 05, 00),
      new Date(2020, 10, 17, 06, 00),
      { url: "../artiste.html" }
    );

    
    timetable.addEvent(
      "DJ Arjne",
      "Cinématographe",
      new Date(2020, 10, 17, 00, 00),
      new Date(2020, 10, 17, 01, 00),
      { url: "../artiste.html" }
    );

        // Troisième événement
        timetable.addEvent(
          "RX-101",
          "Le Romandie",
          new Date(2020, 10, 17, 05, 00),
          new Date(2020, 10, 17, 06, 00),
          { url: "../artiste.html" }
        );

                // Troisième événement
                timetable.addEvent(
                  "Nerz",
                  "Bellevaux",
                  new Date(2020, 10, 17, 02, 00),
                  new Date(2020, 10, 17, 03, 00),
                  { url: "../artiste.html" }
                );
            
                                // Troisième événement
                                timetable.addEvent(
                                  "DR110",
                                  "Esplanade du Casino",
                                  new Date(2020, 10, 17, 02, 00),
                                  new Date(2020, 10, 17, 03, 00),
                                  { url: "../artiste.html" }
                                );

                                timetable.addEvent(
                                  "Color Squad",
                                  "Esplanade du Casino",
                                  new Date(2020, 10, 17, 03, 00),
                                  new Date(2020, 10, 17, 04, 00),
                                  { url: "../artiste.html" }
                                );

                                timetable.addEvent(
                                  "Color Squad",
                                  "Esplanade du Casino",
                                  new Date(2020, 10, 17, 03, 00),
                                  new Date(2020, 10, 17, 04, 00),
                                  { url: "../artiste.html" }
                                );

                                timetable.addEvent(
                                  "Aural",
                                  "Casino de Montbenon",
                                  new Date(2020, 10, 17, 00, 00),
                                  new Date(2020, 10, 17, 01, 00),
                                  { url: "../artiste.html" }
                                );

                                timetable.addEvent(
                                  "BC01 (LIVE)",
                                  "Casino de Montbenon",
                                  new Date(2020, 10, 17, 06, 00),
                                  new Date(2020, 10, 17, 07, 00),
                                  { url: "../artiste.html" }
                                );
                            
                            
    
        let renderer = new Timetable.Renderer(timetable);
        renderer.draw(".timetable");
  }
  // Deuxième jour
  else if (day == "samedi") {
    timetable.setScope(22, 07);
    timetable.addLocations(["Paderewski",
    "Salle des Fêtes",
    "Oblò",
    "Collège du Belvédère",
    "Le Romandie",
    "EJMA",
    "Cinématographe",
    "Esplanade du Casino",
    "Casino de Montbenon",
    "Bellevaux",]);

    timetable.addEvent(
      "Cyberjit",
      "Salle des Fêtes",
      new Date(2020, 10, 17, 05, 00),
      new Date(2020, 10, 17, 06, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Textasy",
      "Paderewski",
      new Date(2020, 10, 17, 05, 00),
      new Date(2020, 10, 17, 06, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Lehu",
      "Paderewski",
      new Date(2020, 10, 17, 02, 00),
      new Date(2020, 10, 17, 03, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "MEL",
      "Paderewski",
      new Date(2020, 10, 17, 06, 00),
      new Date(2020, 10, 17, 07, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Jasss",
      "Oblò",
      new Date(2020, 10, 17, 00, 00),
      new Date(2020, 10, 17, 01, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Mopfunk",
      "Oblò",
      new Date(2020, 10, 17, 03, 00),
      new Date(2020, 10, 17, 04, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Machine Hum",
      "EJMA",
      new Date(2020, 10, 17, 03, 00),
      new Date(2020, 10, 17, 04, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Xoop",
      "EJMA",
      new Date(2020, 10, 17, 06, 00),
      new Date(2020, 10, 17, 07, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Coburn",
      "Cinématographe",
      new Date(2020, 10, 17, 04, 00),
      new Date(2020, 10, 17, 05, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Faitiche",
      "Le Romandie",
      new Date(2020, 10, 17, 01, 00),
      new Date(2020, 10, 17, 02, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Velum Break",
      "Le Romandie",
      new Date(2020, 10, 17, 06, 00),
      new Date(2020, 10, 17, 07, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "FLX",
      "Bellevaux",
      new Date(2020, 10, 17, 03, 00),
      new Date(2020, 10, 17, 04, 00),
      { url: "../artiste.html" }
    );
    
    timetable.addEvent(
      "Vowel",
      "Esplanade du Casino",
      new Date(2020, 10, 17, 00, 00),
      new Date(2020, 10, 17, 01, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Tuss",
      "Esplanade du Casino",
      new Date(2020, 10, 17, 03, 00),
      new Date(2020, 10, 17, 04, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Hermeth",
      "Casino de Montbenon",
      new Date(2020, 10, 17, 01, 00),
      new Date(2020, 10, 17, 02, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Dwaalicht",
      "Casino de Montbenon",
      new Date(2020, 10, 17, 06, 00),
      new Date(2020, 10, 17, 07, 00),
      { url: "../artiste.html" }
    );


    let renderer = new Timetable.Renderer(timetable);
    renderer.draw(".timetable");
  }
  // Troisième jour
  else if (day == "dimanche") {
    timetable.setScope(22, 07);
    timetable.addLocations(["Paderewski",
    "Salle des Fêtes",
    "Oblò",
    "Collège du Belvédère",
    "Le Romandie",
    "EJMA",
    "Cinématographe",
    "Esplanade du Casino",
    "Casino de Montbenon",
    "Bellevaux",]);
    timetable.addEvent(
      "Red Scan",
      "Paderewski",
      new Date(2020, 10, 17, 22, 00),
      new Date(2020, 10, 17, 23, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Vigile",
      "Paderewski",
      new Date(2020, 10, 17, 02, 00),
      new Date(2020, 10, 17, 03, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Riot Code",
      "Salle des Fêtes",
      new Date(2020, 10, 17, 00, 00),
      new Date(2020, 10, 17, 01, 00),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Baseck",
      "Oblò",
      new Date(2020, 10, 17, 03, 00),
      new Date(2020, 10, 17, 04, 00),
      { url: "../artiste.html" }
    );
    
    timetable.addEvent(
      "Turk",
      "Collège du Belvédère",
      new Date(2020, 10, 17, 00, 00),
      new Date(2020, 10, 17, 01, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "Alextrem",
      "Collège du Belvédère",
      new Date(2020, 10, 17, 03, 00),
      new Date(2020, 10, 17, 04, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "Hashtaga",
      "EJMA",
      new Date(2020, 10, 17, 01, 00),
      new Date(2020, 10, 17, 02, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "Lesthustler",
      "EJMA",
      new Date(2020, 10, 17, 06, 00),
      new Date(2020, 10, 17, 07, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "Peska",
      "Cinématographe",
      new Date(2020, 10, 17, 04, 00),
      new Date(2020, 10, 17, 05, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "Grim Lusk",
      "Le Romandie",
      new Date(2020, 10, 17, 02, 00),
      new Date(2020, 10, 17, 03, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "Dj Lucid",
      "Le Romandie",
      new Date(2020, 10, 17, 05, 00),
      new Date(2020, 10, 17, 06, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "Midi Noise",
      "Esplanade du Casino",
      new Date(2020, 10, 17, 01, 00),
      new Date(2020, 10, 17, 02, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "Vigile",
      "Esplanade du Casino",
      new Date(2020, 10, 17, 06, 00),
      new Date(2020, 10, 17, 07, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "Pinkman",
      "Casino de Montbenon",
      new Date(2020, 10, 17, 00, 00),
      new Date(2020, 10, 17, 01, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "Albiovix",
      "Casino de Montbenon",
      new Date(2020, 10, 17, 04, 00),
      new Date(2020, 10, 17, 05, 00),
      { url: "../artiste.html" }
    );
    let renderer = new Timetable.Renderer(timetable);
    renderer.draw(".timetable");
  }
}


