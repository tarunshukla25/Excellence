const CommonValidator = {
    validateEmail:  (pEmail) => {
        if (!pEmail || pEmail === null || pEmail === '') {
            return false;
        }
        if(pEmail){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(pEmail).toLowerCase());
        }
        return true;
    }
}

module.exports = CommonValidator;