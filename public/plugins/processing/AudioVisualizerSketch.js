var maxim;
var playerBeat;
var spec;
var tracks;
var xPos;
var currentTrack;
var isPlaying;
var divWidth = 800;
var divHeight = 400
var sizeRatio = 1;
var maxSpec = 0;
var specRatio = 1;
var x = 0;
var y = 0;
var diam = 0;

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
    /*
     pow range: (-0.76 to 0.25)
     spec[i] range: (-268 to -21)
     spec.length = 1024
     */

    //Tailor visible spectrum to screen size
    var widthRatio = width / 900;//based on spec.length = 1024
    var heightRatio = height / 50;//based on max abs(spec[i]) = 268

    var spectrum = [1024];
    var power = 0;
    var ratio = 1;
    var pow;
    background(0);

    //Check if music is playing, then analyze and store data points in variables for drawing
    if (isPlaying)
    {
        playerBeat.setAnalysing(true);
        playerBeat.setLooping(true);
        playerBeat.play();

        if(playerBeat.isPlaying){

            /* Analyze */
            pow = playerBeat.getAveragePower();
            spec = playerBeat.getPowerSpectrum();

            if(spec != null){
                spectrum = spec;
            }

            power = abs(pow);
        }
    }

    //Actual drawing
    strokeWeight(6 * sizeRatio);

    //Map spectrum array
    for (var i = 0; i < spectrum.length; i++) {

        x = i * widthRatio;
        y = (abs(spectrum[i]) * heightRatio) - (350 * sizeRatio);
        diam = (power * sizeRatio) + 0;

        //Draw an ellipse(x, y, width, height) - diameter based on power
        ellipse(x, y, diam, diam);

        //Color based on spectrum
        stroke(1000 * spectrum[i]);
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
    text("Mouse left and right to change speed: " + round(ratio * 100), 20 * sizeRatio , (height - 10) * sizeRatio);

    //Label - Display name of current track
    textSize(24 * sizeRatio);
    text(tracks[currentTrack], 10 * sizeRatio, 36 * sizeRatio);
    //text("power: " + power, 10 * sizeRatio, 70 * sizeRatio);
    //text("spec.length: " + spectrum.length, 10 * sizeRatio, 100 * sizeRatio);
    //text("width: " + width + " height: " + height, 10 * sizeRatio, 70 * sizeRatio);
    //text("minPow:: " + minPow + " maxPow: " + maxPow, 10 * sizeRatio, 100 * sizeRatio);
    //text("minSpec: " + minSpec + " maxSpec: " + maxSpec, 10 * sizeRatio, 130 * sizeRatio);
}

//Play or pause music
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


//Iterate through tracks
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

//Resize sketch to match dimensions of div
void resizeSketch(int w, int h)
{
    sizeRatio = w / 800;
    divWidth = 800 * sizeRatio;
    divHeight = 400 * sizeRatio;
    size(divWidth, divHeight);
    scale(800 / divWidth, 400 / divHeight);
}