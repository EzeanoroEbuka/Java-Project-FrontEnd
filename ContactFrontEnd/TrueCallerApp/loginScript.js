const form = document.querySelector('#loginForm')

form.addEventListener('submit', async(event)=> {
    event.preventDefault();
    const userEmail = document.getElementById('loginEmail').value;

    const   userPassword = document.getElementById('loginPassword').value;

    try {
        const response = await fetch("http://localhost:8080/api/v1/user/login", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
            }),
        })

        console.log(response);
        if (response.ok) {
            const result = await response.json()
            alert(result.message)
            console.log(result.message)

        } else {
            const error = await response;
            alert(error.message)
        }
    }
    catch (error) {
        alert(error.message)
        console.log(error.message)
    }

})
