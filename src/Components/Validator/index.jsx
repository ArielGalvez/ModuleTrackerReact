export default function Validator(){
    return {
        validateName: (name) => {
            const regex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
            if (name === '') {
                return {
                    isValid: false,
                    error: 'Enter a data'
                };
            }
            return {
                isValid: regex.test(name),
                error: 'Must start with capital letters and not contains numbers'
            };
        },
        validateTelf: (telf) => {
            const regex = /^[7|6|4]{1}[0-9]{6,7}$/;
            if (telf === '') {
                return {
                    isValid: false,
                    error: 'Enter a data'
                };
            }
            return {
                isValid: regex.test(telf),
                error: 'The number should start with 7, 6 or 4 and be between 7 and 8 digits'
            };
        },
        validateEmail: (email) => {
            const regex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
            if (email === '') {
                return {
                    isValid: false,
                    error: 'Enter a data'
                };
            }
            return {
                isValid: regex.test(email),
                error: 'Enter a valid email'
            };
        },
        validateCi: (ci) => {
            const regex = /^[1-9]{1}[0-9]{6,7}$/;
            if (ci === '') {
                return {
                    isValid: false,
                    error: 'Enter a data'
                };
            }
            return {
                isValid: regex.test(ci),
                error: 'The number should have between 7 and 8 digits'
            };
        }
    };
}