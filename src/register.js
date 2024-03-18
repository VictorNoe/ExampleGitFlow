const nameUser = () => {
    return 'victor';
}

const lastname =  () => {
    return 'flores';
}

const register = () => {
    const fullname = nameUser() + lastname();
    return fullname
}

console.log(register);