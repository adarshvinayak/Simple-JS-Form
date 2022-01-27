
function onSubmit(e) {  //(e) is the event parameter
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please fill all fields'

        setTimeout(() => msg.remove(), 2000)
    }
    else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li)

        //clear
        nameInput.value = ''
        emailInput.value = ''        
    }
}