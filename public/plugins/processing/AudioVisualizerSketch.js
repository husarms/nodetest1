var maxim;
var playerBeat;
var spec;
var tracks;
var xPos;
var currentTrack;
var isPlaying;

void setup()
{
    size(600,600);
    background(0);
    frameRate(120);
    xPos = 0;
    currentTrack = 0;

    /* Populate array of track names */
    tracks = new Array
    (
        "/plugins/processing/808Beat.wav",
        "/plugins/processing/atmos1.wav",
        "/plugins/processing/FunkGuitar.wav",
        "/plugins/processing/HardAcid.wav",
        "/plugins/processing/IAgainstI.wav",
        "/plugins/processing/LondonCalling.wav",
        "/plugins/processing/TimeOfTheSeason.wav",
        "/plugins/processing/TrapLoop.mp3"
    );

    /* Initialize and start player */
    maxim = new Maxim(this);
    playerBeat = maxim.loadFile(tracks[currentTrack]);
    playerBeat.setAnalysing(true);
    playerBeat.setLooping(true);
    isPlaying = false;
}

void draw()
{
    var ratio = 1;
    var pow;
    background(0);

    if (isPlaying)
    {
        playerBeat.play();

        /* Visualization */
        pow = playerBeat.getAveragePower();
        spec = playerBeat.getPowerSpectrum();

        //Tailor visible spectrum to screen size
        //float widthRatio = (width + 200)/1024;
        var widthRatio = width / 1024;
        var heightRatio = height / 45;
        strokeWeight(6);
        if (spec != null) {
            for (var i = 0; i < spec.length; i++) {
                //Draw an ellipse - diameter based on power
                //ellipse(i * widthRatio, (abs(spec[i]) * 10) - 100 * heightRatio, (pow *10), (pow *10));
                ellipse(i * widthRatio, ((abs(spec[i])) * heightRatio) - height, (pow + 2), (pow + 2));
                //Color based on spectrum
                stroke(1500 * spec[i]);
            }
        }

        /* Beat speed - lower 1/6 */
        if (mouseY > height * (5/6))
        {
            ratio =  mouseX /  width;
            ratio *= 2;
            playerBeat.speed(ratio);
        }

        //Label - Display speed
        textSize(18);
        text("Mouse left and right to change speed: " + round(ratio * 100), 20 , height - 20);
    }

    //Label - Next Track
    //noFill();
    //stroke(200);
    //rect(width - 150, +4, 146, 40);
    //fill(200);
    textSize(24);
    text("Next track >>", width * (3/4), 36);
    if(isPlaying)
    {
        text("Click here to Pause", 10, 36);
    }
    else
    {
        text("Click here to Play", 10, 36);
    }

    //Label - Display name of current track
    text(tracks[currentTrack], 10, 80);
}


void mousePressed()
{
    //Top 1/6, left half - play/pause
    if ((mouseY < height * (1/6)) && (mouseX < width * (1/2)))
    {
        isPlaying = !isPlaying;

        if (!isPlaying){
            playerBeat.stop();
        }
        else
        {
            playerBeat.play();
        }
    }

    //Top 1/6, right half - next track
    if ((mouseY < height * (1/6)) && (mouseX > width * (1/2)))
    {
        if (currentTrack < tracks.length - 1) {
            currentTrack++;
        }
        else {
            currentTrack = 0;
        }
        if (isPlaying)
        {
            playerBeat.stop();
        }
        playerBeat = maxim.loadFile(tracks[currentTrack]);
    }
}

void resizeSketch(int w, int h)
{
    size(w, h);
    scale(w/600, h/600);
}