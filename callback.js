// function count bmi

function CountBMI(weight, height, callback){
    let result = weight / Math.pow(height,2)
    // return result
    callback (result)
}

// function status bmi 

let statusBMI = (bmi) => {
    if(bmi < 18.5){
        console.log(`you are under weight`);
    }
    else if (bmi >= 18.5 && bmi < 25){
        console.log(`you are normal`);
    }
    else if (bmi >= 30){
        console.log(`you are obese`);
    }
}


CountBMI(70, 1.7, result => statusBMI(result))