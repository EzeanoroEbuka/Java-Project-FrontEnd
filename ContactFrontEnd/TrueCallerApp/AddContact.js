const form = document.querySelector('#addContactForm')

form.addEventListener('submit', async(event)=> {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;

    const   lastName = document.getElementById('lastName').value;

    const phone = document.getElementById('phoneNumber').value;

    const userEmail = document.getElementById('userEmail').value;

    try {
        const data = await fetch("http://localhost:8080/api/v1/user/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phone,
                email: userEmail,

            }),
        })

        console.log(data);
        if (data.ok) {
            const result = await data.json()
            alert(result.message)

            const {id,firstName, lastName,phoneNumber,email,message} = result;
            const divTag = document.createElement(`div`);
            divTag.classList.add(`contactBox`);
            const contactDetails = {divTag ,id ,firstName, lastName,phoneNumber,email,message}
            createInnerHTML(contactDetails)
            addContact.appendChild(divTag);
        });
    }
            function createInnerHTML(result){
                const {divTag,id,firstName, lastName,phoneNumber,email,message} = result;
                divTag.innerHTML =`
                <div class="image">
                    <img src="${IMAGE_URL}${poster_path}" alt="${title}">
                </div>
                <div class="titleAndRating">
                    <p>${title}</p>
                    <p>v${vote_average}</p>
                </div>
                <div class="movieDescription">
                    <p>${overview}</p>
                </div>
        `;
            }

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
