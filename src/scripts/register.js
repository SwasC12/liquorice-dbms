const fs = require('fs');
const path = require('path');

function registerUser(req, res) {
    const { email, password } = req.body;
    const userData = { email, password };

    const filePath = path.join(__dirname, '..', 'src', 'data', 'userAccount.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') { // Handle file not found error
            console.error('Error reading file:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        users.push(userData);

        fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8', err => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            res.status(201).json({ message: 'User registered successfully' });
        });
    });
}

module.exports = registerUser;
