function explainCallBack(name, age, task){
    console.log('Hello ', name);
    console.log('your age ', age);
    task();


}
function washHand(){
    console.log("Wash hands with soap.");
}
function takeShower(){
    console.log('Take shower.');
}

function eatLunch(){
    console.log("Eat your Lunch.")
}
 
explainCallBack('Nasir', 17, washHand);
explainCallBack('Lexis', 19, takeShower);
explainCallBack('James', 15, eatLunch);