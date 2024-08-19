const form = document.querySelector('#signInForm')

form.addEventListener('submit', async(event)=> {
    event.preventDefault();
    const userFirstName = document.getElementById('firstName').value;

const   userLastName = document.getElementById('lastName').value;

const userEmail = document.getElementById('signupEmail').value;

const userPassword = document.getElementById('signupPassword').value;

const userPhone = document.getElementById('phoneNumber').value;

try {
        const data = await fetch("http://localhost:8080/api/v1/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: userFirstName,
                lastName: userLastName,
                email: userEmail,
                password: userPassword,
                phoneNumber: userPhone
            }),

        })

        console.log(data);
        if (data.ok) {
            const result = await data.json()
            alert(result.message)
            console.log(result.message)

        } else {
            const error = await data;
            alert(error.message)
        }
    }
    catch (error) {
        alert(error.message)
        console.log(error.message)
    }

})
