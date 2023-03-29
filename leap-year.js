function leap() {
            var year = Number(prompt("enter year : "));

            if (year % 4 == 0 || year % 400 == 0) {
                if (year % 100 !== 0) {
                    return year + " is a leap year "
                }
                else {
                    return year + " is not leap year <br>"
                }

            }
            else {
                return year + " is not a leap year"
            }
        }
        console.log(leap())
