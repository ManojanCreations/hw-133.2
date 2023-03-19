img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() 
{
    img = loadImage('https://www.cnet.com/a/img/resize/89439acb1ddd08da5ec840130313eb25a9509302/2021/04/14/58e9b86b-3c3a-4ff9-ac4d-1d1ab7bef323/002-lg-g1-oled-tv.jpg?auto=webp&fit=crop&height=236&width=420');
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    
    if(status1 != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill("#FFFF00")
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FFFF00");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

    }
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