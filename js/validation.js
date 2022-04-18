let tempName = ""
let tempEmail = ""
let tempTel = ""

function checkNameForm(x) {
    let len = x
    console.log(len.value.length)
    if (len.value.length < 3) {
        setError(len, "Too short...", 'name')
    } else {
        len.style.borderColor = "black"
    }
}

function checkEmailForm(x) {
    let splited = x.value.split("@")
    if (splited.length == 2) {
        if (splited[0].length >= 3 && splited[0].length <= 15) {
            for (i of splited[0]) {
                if (!/[a-z0-9_-]/i.test(i)) {
                    setError(x, "Main part of email must contains only digits, letter, - and _", 'email')
                    return
                }
            }
            let second = splited[1].split('.')
            if (second.length == 2) {
                if (second[0].length >= 4) {
                    for (i of second[0]) {
                        if (!/[a-z]/i.test(i)) {
                            setError(x, "Subdomain must contain only letters", 'email')
                            return
                        }
                    }
                    if (second[1].length >= 2) {
                        for (i of second[1]) {
                            if (!/[a-z]/i.test(i)) {
                                setError(x, "Updomain must contain only letters", 'email')
                                return
                            }
                        }
                        x.style.borderColor = "black"
                    } else {
                        setError(x, "Short updomain...", 'email')
                    }
                } else {
                    setError(x, "Short subdomain...", 'email')
                }
            } else {
                setError(x, "Miss dot after subdomain...", 'email')
            }
        } else {
            setError(x, "Wrong input...", 'email')
        }
    } else {
        setError(x, "Miss @ ...", 'email')
    }
}

function setError(x, text, type) {
    x.style.borderColor = "red"
    if (type == 'name') {
        tempName = x.value
    } else if (type == 'email'){
        tempEmail = x.value
    } else {
        tempTel = x.value
    }
    x.value= text
    x.style.color = "red"

    
}

function defaultStyle(x, type) {
    if (type == 'name') {
        if (x.value == "Too short...") {
            x.value = tempName
            x.style.color = "black"
        }
    } else if (type == 'email') {
        if (x.value == "Wrong input...") {
            x.value = tempEmail
            x.style.color = "black"
        } else if (x.value == "Miss @ ..."){
            x.value = tempEmail
            x.style.color = "black"
        } else if (x.value == "Main part of email must contains only digits, letter, - and _"){
            x.value = tempEmail
            x.style.color = "black"
        } else if (x.value == "Miss dot after subdomain..."){ 
            x.value = tempEmail
            x.style.color = "black"
        } else if (x.value == "Short subdomain..."){ 
            x.value = tempEmail
            x.style.color = "black"
        } else if (x.value == "Updomain must contain only letters"){ 
            x.value = tempEmail
            x.style.color = "black"
        }else if (x.value == "Short updomain..."){ 
            x.value = tempEmail
            x.style.color = "black"
        }else if (x.value == "Subdomain must contain only letters"){ 
            x.value = tempEmail
            x.style.color = "black"
        }
        
    } else if (type == "phone") {
        if (x.value == "Phone must contains 10 digit") {
            x.value = tempTel
            x.style.color = "black"
        }
    }
    

}

function checkPhoneForm(x) {
    if (x.value.length != 10) {
        setError(x, "Phone must contains 10 digit", 'phone')
    } else {
        x.style.borderColor = "black"
    }
}