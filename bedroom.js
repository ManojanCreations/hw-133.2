img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() 
{
    img = loadImage('https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1454806.jpg&fm=jpg');
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    
    if(status1 != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill("#0000ff")
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#0000FF");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

    }f
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