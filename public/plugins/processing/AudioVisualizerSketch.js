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
var minPow = 0;
var maxPow = 0;
var minSpec = 0;
var maxSpec = -100;

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
        playerBeat.setAnalysing(true);
        playerBeat.setLooping(true);
        playerBeat.play();

        /* Visualization */
        pow = playerBeat.getAveragePower();
        spec = playerBeat.getPowerSpectrum();

        /*
        pow range: (-0.76 to 0.25)

        spec[i] range: (-268 to -21)

        spec.length = 1024

         */

        //Tailor visible spectrum to screen size
        var widthRatio = width / 1024;//based on spec.length = 1024
        var heightRatio = height / 135;//based on max abs(spec[i]) = 268

        strokeWeight(6 * sizeRatio);

        if (spec != null) {
            for (var i = 0; i < spec.length; i++) {

                //Draw an ellipse(x, y, width, height) - diameter based on power
                ellipse(i * widthRatio, abs(spec[i]) * heightRatio, (pow * sizeRatio) + 0, (pow * sizeRatio) + 0);

                //Color based on spectrum
                stroke(1000 * spec[i]);

                if(pow > maxPow){
                    maxPow = pow;
                }
                if(pow < minPow){
                    minPow = pow;
                }
                if(spec[i] > maxSpec){
                    maxSpec = spec[i];
                }
                if(spec[i] < minSpec){
                    minSpec = spec[i];
                }
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
        textSize(18 * sizeRatio);
        text("Mouse left and right to change speed: " + round(ratio * 100), 20 , height - 10);
    }

    //Label - Display name of current track
    textSize(24 * sizeRatio);
    text(tracks[currentTrack], 10 * sizeRatio, 36 * sizeRatio);
    //text("width: " + width + " height: " + height, 10 * sizeRatio, 70 * sizeRatio);
    //text("minPow:: " + minPow + " maxPow: " + maxPow, 10 * sizeRatio, 100 * sizeRatio);
    //text("minSpec: " + minSpec + " maxSpec: " + maxSpec, 10 * sizeRatio, 130 * sizeRatio);
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