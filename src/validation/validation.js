//yaha par sare regex bananege 

exports.validfullName = (fullname) => {
    const validfullName = /^[A-Za-z]/
    return validfullName.test(fullname)
}

exports.validemail = (email) => {
    const validemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return validemail.test(email)
}

exports.validpaswword = (password) => {
    const validpaswword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
    return validpaswword.test(password)
}

