var answer_holder = "";
var timer_counter = 0;
var randomNumber = 0;
var score = 0;
var timer_check = "";
var drawn_sketch = "";

function preload(){

}

function setup(){
    canvas = document.getElementById("board");
}

function draw(){
    strokeWeight(7);
    stroke(0);
    fill("red")

    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
    check_sketch();
    if(draw_sketch == sketch){
        answer_holder = "SET";
        score ++;
        document.getElementById("score").innerText = "Score : " +score;
    }
}

function check_sketch(){
    timer_counter++;
    if(timer_counter == 400){
        timer_counter = 0;
        timer_check = "completed"
    }
    if(timer_check == "completed"){
        timer_check = "set";
        answer_holder = "";
    }
}

function updateCanvas(){
    background('white')
    randomNumber = Math.floor((Math.random()* quick_draw_set.length()+1));
    console.log(quick_draw_set);
    sketch = quick_draw_set[randomNumber];
    document.getElementById("sketch_to_draw").innerText = "Sketch to be Drawn :" + sketch;
}

function classifyCanvas(){
    classifier.classify(canvas, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById("model_name").innerText = "Label : " + results[0].label;
    document.getElementById("model_accuracy").innerText = "accuracy : " + Math.round(results[0].confidence * 100)+"%";
}