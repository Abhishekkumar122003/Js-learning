const formatWithSpace = (first, last) => {
    return `${first} ${last}`;
};

const getUserFullName = (userObj, cb) => {
    const fullName = cb(user.firstName, user.lastName);
    return `Customer Name: ${fullName}`;
};

const user = { firstName: "Hi", lastName: "Hello" };
getUserFullName(user, formatWithSpace);