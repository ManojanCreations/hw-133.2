img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() 
{
    img = loadImage('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F11%2F03%2F61129_Prep_Smoothies_030_preview-2000.jpg&q=60');
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    
    if(status1 != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill("#6A0DAD")
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#6A0DAD");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

    }
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}