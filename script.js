
document
    .getElementById("contact-form")
    .addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send a POST request to the Vercel API endpoint with JSON data
        try {
            const response = await fetch(
                "https://emailsendendpoint.onrender.com/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        name: name,
                        email: email,
                        message: message,
                    }).toString(),
                },
            );
            const data = await response.json();

            // Show toast notifications based on the response
            if (response.ok) {
                alert("Message received, check your Email!");
            } else {
                alert(`An error occurred: ${data.message}`);
            }
        } catch (error) {
            alert(`An error occurred: ${error.message}`);
        }
    });
