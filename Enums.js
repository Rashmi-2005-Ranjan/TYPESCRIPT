var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Rashmi",
    email: "user@example.com",
    password: "usr",
    role: Roles.user,
};
var user2 = {
    name: "Ravi",
    email: "admin@example.com",
    password: "admn",
    role: Roles.admin
};
var isAdmin = function (user) {
    var email = user.email, role = user.role;
    if (role === Roles.admin) {
        return "".concat(email, " Is Allowed To Edit Website");
    }
    else {
        return "".concat(email, " Is Not Allowed To Edit Website");
    }
};
console.log("UserType : ", isAdmin(user1));
console.log("UserType : ", isAdmin(user2));
