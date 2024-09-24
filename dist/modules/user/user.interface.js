export var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
export var Role;
(function (Role) {
    Role["SuperAdmin"] = "superAdmin";
    Role["Admin"] = "admin";
    Role["User"] = "user";
    Role["Doctor"] = "doctor";
})(Role || (Role = {}));
export const AllRoles = [Role.SuperAdmin, Role.Admin, Role.User, Role.Doctor];
// export interface IRole {
//   superAdmin: string;
//   admin: string;
//   user: string;
//   doctor: string;
// }
