$('#login-form').addEventListener('submit', async event => {
    event.preventDefault()
    try {
        const data = await apiCall('login', {
            email: $('#email').value,
            password: $('#password').value
        })
        if (data.success) {
            location.assign('/profile')
        } else {
            alert(`Error: ${data.message}`)
        }
    } catch (error) {
        console.trace(error)
        alert('Unexpected error')
    }
})