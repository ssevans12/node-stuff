function checkPassword (email, password) {
    if (email === "shawn@psych.com" && password === "tearsforfears"){
        return "welcome shawn"
    }else {
        return "unauthorized"
    }
}

module.exports = {
    checkPassword
}