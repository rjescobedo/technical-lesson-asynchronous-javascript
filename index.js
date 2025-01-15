// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         console.log(users);
//         displayUsers(users)
//     })
//     .catch(error => {
//         console.error('Error fetching user data:', error);
//     })

    function displayUsers(users) {
        const userList = document.querySelector('#user-list');

        users.forEach(user => {
            console.log(user)
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} (${user.email})`;
            userList.appendChild(listItem);
        });
    }

    async function fetchAndDisplayUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            const users = await response.json();

            displayUsers(users)
            
        } catch (error) {
            const userList = document.querySelector('#user-list');
            const errorMessage = document.createElement('li');

            errorMessage.textContent = `Failed to load user data. Please try again later`;
        
            userList.appendChild(errorMessage)

            console.error('Error fetching user data:', error)
        }
    }
    fetchAndDisplayUsers();