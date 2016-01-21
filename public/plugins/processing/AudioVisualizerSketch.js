Maxim maxim;
AudioPlayer playerBeat;
float[] spec;
String[] tracks;
int xPos;
int currentTrack;
bool isPlaying;

void setup()
{
    //size(1200, 700);
    size(600,600);
    background(0);
    frameRate(120);
    xPos = 0;
    currentTrack = 0;

    /* Populate array of track names */
    //tracks = new Array("/assets/DrumKick.wav","HighHatBlues.wav","TimeOfTheSeason.wav","Cbat.wav","DrugsDen.wav","Cybotron.wav","atmos1.wav","RudeBoy.wav","Doomsday.wav");
    tracks = new Array("/assets/HardAcid.wav");

    /* Initialize and start player */
    maxim = new Maxim(this);
    playerBeat = maxim.loadFile(tracks[currentTrack]);
    playerBeat.setAnalysing(true);
    playerBeat.setLooping(true);
    isPlaying = true;
}

void draw()
{
    float ratio = 1;
    float pow;
    background(0);

    // Start/stop audio player
    if(isPlaying){
        playerBeat.play();
    }
    else{
        playerBeat.stop();
    }

    /* Visualization */
    pow = playerBeat.getAveragePower();
    spec = playerBeat.getPowerSpectrum();
    //Tailor visible spectrum to screen size
    //float widthRatio = (width + 200)/1024;
    float widthRatio = width/1024;
    float heightRatio = height/45;
    strokeWeight(6);
    if (spec != null) {
        for (int i = 0; i< spec.length; i++) {
            //Draw an ellipse - diameter based on power
            //ellipse(i * widthRatio, (abs(spec[i]) * 10) - 100 * heightRatio, (pow *10), (pow *10));
            ellipse(i * widthRatio, ((abs(spec[i])) * heightRatio) - height, (pow + 2), (pow + 2));
            //Color based on spectrum
            stroke(1500* spec[i]);
        }
    }

    //Label - Next Track
    noFill();
    //stroke(200);
    //rect(width - 150, +4, 146, 40);
    //fill(200);
    textSize(24);
    if(isPlaying){
        text("Click here to Pause", width - 225, 36);
    }
    else{
        text("Click here to Play", width - 225, 36);
    }

    //Label - Display name of current track
    //text(tracks[currentTrack], 50, 36);

    /* Beat speed */
    if (mouseY > height*(5/6))
    {
        ratio = (float) mouseX / (float) width;
        ratio *= 2;
        playerBeat.speed(ratio);
    }

    //Label - Display speed
    textSize(18);
    text("Mouse left and right to change speed: " + round(ratio * 100), 20 , height - 20);
}


void mousePressed()
{
    /* Next Track */
    if (mouseY < height * (1/6)) {
        //if (currentTrack < tracks.length - 1) {
        //  currentTrack++;
        // } else {
        //   currentTrack = 0;
        //  }


        isPlaying = !isPlaying;

        //if(playerBeat.isPlaying){
        //     playerBeat.stop();
        // }
        // else{
        //     playerBeat = maxim.loadFile(tracks[currentTrack]);
        //     playerBeat.setAnalysing(true);
        //   playerBeat.setLooping(true);
        //    playerBeat.play();
        // }
        //Load the next track
        //playerBeat.stop();
        //playerBeat = maxim.loadFile(tracks[currentTrack]);
        //playerBeat.setAnalysing(true);
        //playerBeat.setLooping(true);
    }
}

void resizeSketch(int w, int h) {
    if (w < 680) {
        size(w, floor(float(w)/600*600));
    }else size(600,600);
    //else size(680, 610 - 30);
}