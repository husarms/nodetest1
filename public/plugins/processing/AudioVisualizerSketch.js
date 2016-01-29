var maxim;
var playerBeat;
var spec;
var tracks;
var xPos;
var currentTrack;
var isPlaying;
var divWidth = 800;
var divHeight = 600
var sizeRatio = 1;

void setup()
{
    size(divWidth, divHeight);
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
        var widthRatio = (width / 2000) * sizeRatio;
        var heightRatio = (height / 50) * sizeRatio;
        strokeWeight(6 * sizeRatio);
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

    //Label - Display name of current track
    textSize(24 * sizeRatio);
    text(tracks[currentTrack], 10 * sizeRatio, 36 * sizeRatio);
    text("width: " + width + " height: " + height, 10 * sizeRatio, 70 * sizeRatio);
}

void togglePlayer()
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

void nextTrack()
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

void mousePressed()
{
    //
}

void resizeSketch(int w, int h)
{
    sizeRatio = w / 800;
    divWidth = 800 * sizeRatio;
    divHeight = 600 * sizeRatio;
    size(divWidth, divHeight);
    scale(800 / divWidth, 600 / divHeight);
}