const axios = require("axios");
const { UserManagementEnum } = require("../lib/endpoints/user-management-endpoint-enum");

const host = "34.29.169.181";
const port = "8081";

const baseUrl = `http://${host}:${port}/app/v1/digital-twin/tool-settings`;

const UserManagement = {
    async addUser(addUserPayload){
        try {
            
            const response = await axios.post(`${baseUrl}/${UserManagementEnum.CreateUser}`, addUserPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateUser(updateUserPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${UserManagementEnum.UpdateUser}`, updateUserPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async revokeUser(revokeUserPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${UserManagementEnum.RevokeUser}`, revokeUserPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getUser(getUserPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${UserManagementEnum.GetUser}`, getUserPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },
}

module.exports = { UserManagement };