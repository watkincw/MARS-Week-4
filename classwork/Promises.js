let success = true;
function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    { username: 'John', email: 'john@test.com' },
                    { username: 'Mark', email: 'mark@test.com' }
                ]);
            } else {
                reject('Unable to get the user list.');
            }
        }, 1000);
    });
};

function onSuccess(users) {
    console.log(users);
};
function onFailure(error) {
    console.log(error);
};

const promise = getUsers();
console.log(promise);
promise.then(onSuccess, onFailure);
console.log(promise);

// function findUser(username, callback) {
//     getUsers((users) => {
//         const user = users.find((user) => user.username === username);
//         callback(user);
//     });
// };

// findUser('Mark', console.log);