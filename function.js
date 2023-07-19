function evenify(element){
    
    if(element%2==0){
        console.log(element, " is even.");
    }
    else{
        console.log(element*2, " was odd and evenified.");
    }

}
function evenifyAll(nums){
    for(let i=0; i < nums.length; i++){
    const num = nums[i];
    evenify(num);
    }
}


var nums = [5, 12,89, 45, 18, 8];

for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    // if(element%2==0){
    //     console.log(element, " is even.");
    // }
    // else{
    //     console.log(element, " is odd.");
    // }
    evenify(element);
    
}

friendsAge = [12, 13, 18, 17, 19, 20, 16];
evenifyAll(friendsAge);
