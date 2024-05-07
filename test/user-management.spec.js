const { expect } = require("chai");
const { UserManagement } = require("../src/services/user-management");
const { AddUserRequest, GetUserRequest, RevokeUserRequest, UpdateUserRequest } = require("../src/lib/payloads/user-management-payload");

describe('User Management Apis', () => {
    const userManagement = UserManagement;

    it('should make a Add User Post request from Api', async () => {
        
        const addUserPayload = AddUserRequest;
        
        const response = await userManagement.addUser(addUserPayload);
        
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Update User Post request from Api', async () => {
        
        const updateUserPayload = UpdateUserRequest;
        
        const response = await userManagement.updateUser(updateUserPayload);
        
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Revoke User Post request from Api', async () => {

        const revokeUserPayload = RevokeUserRequest;
        
        const response = await userManagement.revokeUser(revokeUserPayload);
        
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Get User Post request from Api', async () => {
        
        const getUserPayload = GetUserRequest;
        const response = await userManagement.getUser(getUserPayload);
        
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })
})
