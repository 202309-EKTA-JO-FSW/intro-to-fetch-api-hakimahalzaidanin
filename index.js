// Please read the README.md to understand what to do. Happy Coding !
async function fetchUserData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error( error);
        throw error;
    }


async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const userData = await response.json();

const usersData =userData;

const modifiedUsers=usersData.map(user => ({
    name: user.name,
    username: user.username,
    email: user.email,
    address: user.address.street,
    phone: user.phone,
    website: user.website,
    company: user.company.name
    }));

console.log(modifiedUsers);

const filteredUsers = modifiedUsers.filter(user =>user.email.endWith('.biz'));
// 4
console.log(filteredUsers);

// 5
const sortedUsers=modifiedUsers.sort((a,b) => a.name.localCompare(b.name));

console.log(sortedUsers);

// 6
}catch(error){
console.error(error);
}
    }}

    fetchUserData();