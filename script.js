let slider = document.querySelectorAll("#myRange");

let output = document.querySelectorAll(".number_value");


function getActualSliderValue(){
    for(let i = 0; i < slider.length; i++) {
        
        slider[i].onchange = function(){
            let sliderValue = 0;
           if(i === 0){
                sliderValue =  slider[i].value;
                console.log(sliderValue);
                return sliderValue;
                        
            };
            if (i === 1){
                sliderValue = slider[i].value;
                console.log(sliderValue);
                alert(sliderValue) ;
            };
            if (i === 2){
                sliderValue = slider[i].value;
                console.log(sliderValue);
                return sliderValue; 
            };
            return sliderValue;
        };
        
    };
    
};

// chart variables
let xValues = ["Jā", "Nē", "Varbūt"];
let yValues = [];
let barColors = ["red", "green", "yellow"];
let yValuesUpdated =[];

    
for(let i = 0; i < slider.length; i++) {
    for(let j = 0; j < output.length; j++){
        if (i == j){
            output[j].innerHTML = slider[i].value;
            yValues.push(slider[i].value);
            console.log(yValues);

            slider[i].oninput = function(){
                output[j].innerHTML = this.value;
                yValuesUpdated = yValues.fill(this.value, i, i+1);
                console.log(yValuesUpdated);
                pollChart.data.datasets[0].data = yValuesUpdated;
                pollChart.update(); 

                
                let sliderValue1 = yValuesUpdated[0];
                let sliderValue2 = yValuesUpdated[1];
                let sliderValue3 = yValuesUpdated[2];
                let sum = Number(sliderValue1) + Number(sliderValue2) + Number(sliderValue3);
                let min = Math.min(sliderValue1, sliderValue2, sliderValue3);
                let max = Math.max(sliderValue1, sliderValue2, sliderValue3);
                let delta = max - min;
                console.log(delta);
                console.log(sum);
                console.log(sliderValue1);

                let sliderValueActual = getActualSliderValue();
                console.log(sliderValueActual);
/*
                function calculateSliderValues(){
                    
                    if(sumSliderValue > 100){

                        };
                };
                */

                
            };
        };
    };      
};

//chart STARTS
let myChart = document.getElementById('myChart').getContext('2d');
    
Chart.defaults.font.size = 20;
Chart.defaults.color = 'black';
    
var pollChart = new Chart(myChart, {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options:{
        plugins:{
            legend:{display: false}
        },
            
        scales:{
            y:{
                display:false,
                min: 0,
                max:100
                    
            },
            x:{
                grid:{display:false},
            } 
        }
    }
});
//chart ENDS




