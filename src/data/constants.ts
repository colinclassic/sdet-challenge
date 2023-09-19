
class Constants {

    validData = {
        username: "warren",
        password: "A!BCDEFG",
        age: "25"

    }

    invalidData = {
        username: "dav1d",
        password: "BBBBB",
        age: "121",
        ageFormat: "22.5"

    }

    errors = {
        username: "Error: Please enter a valid Username",
        password: "Error: Please enter a valid Password",
        age: "Error: Please enter a valid Age"
    }

}

export default new Constants()