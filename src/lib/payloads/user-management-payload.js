const AddUserRequest = {
    "fullname":"Bramhesh Kumar Srivastava",
    "employeeCode":"A8000020",
    "refinery":"RHQ",
    "department":"Admin",
    "designation":"Admin",
    "role":"Admin",
    "email":"bramhesh.srivastav@algo8.ai",
    "mobile":"+91-9205721407"
};

const UpdateUserRequest = {
    "refinery":"Paradip",
    "department":"Admin",
    "designation":"Admin",
    "role":"Admin",
    "id": 1
};

const RevokeUserRequest = {
    "id": [2]
};

const GetUserRequest = {
    "userRole": null,
    "refinery": "Paradip"
};

module.exports = {
    AddUserRequest,
    UpdateUserRequest,
    RevokeUserRequest,
    GetUserRequest,
};