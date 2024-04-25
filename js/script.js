let weight =  document.querySelector('#weight')
let height = document.querySelector('#height')
let result = document.querySelector('#result')
let category = document.querySelector('#category')
let height_val = document.querySelector('#height-val')
let weight_val = document.querySelector('#weight-val')
let userHeight= 100
let userWeight = 20

weight.addEventListener('change', function(event){
    userWeight = event.target.value
    weight_val.innerHTML = userWeight + 'kg'
    calculateBmi(userHeight, userWeight)

})
height.addEventListener('change', function(event){
    userHeight = event.target.value
    height_val.innerHTML = userHeight + 'cm'
    calculateBmi(userHeight, userWeight)
})

function calculateBmi(userHeight, userWeight){
    let bmi = (userWeight / ((userHeight/100)* (userHeight/100))).toFixed(1)
    result.innerHTML = bmi
    if(bmi<18){
        category.innerHTML = 'under weight'
        result.style.color = 'lightgreen'

    }else if (bmi>18 && bmi<=24.9){
        category.innerHTML = 'normal weight'
        result.style.color = 'green'

    }else if (bmi>=25 && bmi<=29.9){
        category.innerHTML = 'over weight'
        result.style.color = 'orange'

    }else if (bmi>29.9){
        category.innerHTML = 'obese'
        result.style.color = 'red'
    }
}