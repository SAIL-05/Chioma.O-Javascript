const yearOfBirth = document.getElementById('age')

const input = Number(prompt('Date of birth'))

yearOfBirth.textContent = `you are ${(2025 - input)} years old`

const yrOfBirth = document.getElementById('age')
const ageAns = document.getElementById('ageAns')
const btn = document.getElementById('btn')


function smbBtn (){
    let answer = Number(yrOfBirth.value)
    console.log(answer)
    ageAns.textContent = `you are ${(2025 - answer)} years old` 
    // console.log(ageAns.textContent = `you are ${(2025 - answer)} years old` )
}

btn.addEventListener('click', smbBtn)