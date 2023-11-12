async function addUser() {
    const newUsernameInput = document.getElementById('usernameInput');
    const newPasswordInput = document.getElementById('passwordInput');
    const newUsername = newUsernameInput.value;
    let newPassword = newPasswordInput.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const protection = document.getElementById('Checkbox');
    const isProtected = protection.checked;

    if (isProtected) {
        newPassword = await Hash(newPassword);
    }

    users.push({
        username: newUsername,
        password: newPassword
    });
    localStorage.setItem('users', JSON.stringify(users));

    updateUsersList();
    newUsernameInput.value = '';
    newPasswordInput.value = '';
}

function clearUsers() {
    localStorage.removeItem('users');
    updateUsersList();
}

function updateUsersList() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const usersTableBody = document.getElementById('usersTableBody');

    usersTableBody.innerHTML = '';

    users.forEach(user => {
        const row = usersTableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = user.username;
        cell2.textContent = user.password;
    });
}

async function Hash(password) {
    const bcrypt = dcodeIO.bcrypt;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error(`Error hashing password: ${error.message}`);
    }
}

updateUsersList();