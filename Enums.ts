enum Roles {
  user = "user",
  admin = "admin"
}

type Logindetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: Logindetails = {
  name: "Rashmi",
  email: "user@example.com",
  password: "usr",
  role: Roles.user,
};
const user2: Logindetails = {
  name: "Ravi",
  email: "admin@example.com",
  password: "admn",
  role: Roles.admin
};

const isAdmin = (user: Logindetails): string => {
  const { email, role } = user;
  if (role === Roles.admin) {
    return `${email} Is Allowed To Edit Website`;
  } else {
    return `${email} Is Not Allowed To Edit Website`;
  }
};

console.log("UserType : ", isAdmin(user1));
console.log("UserType : ", isAdmin(user2));
