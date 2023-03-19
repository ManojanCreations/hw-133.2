img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() 
{
    img = loadImage('https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVza3xlbnwwfHwwfHw%3D&w=1000&q=80');
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    
    if(status1 != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill("#FFA500")
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FFA500");
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