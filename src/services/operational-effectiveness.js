const axios = require("axios");
const { OperationalEffectivenessEnum } = require("../lib/endpoints/operational-effectiveness-endpoint-enum");

const host = "34.29.169.181";
const port = "8081";

const baseUrl = `http://${host}:${port}/app/v1/digital-twin/ind-max-performance/IOCL_DT_Paradip`;

const OperationalEffectiveness = {
    async addEneryEfficiency(efficiencyPayload){
        try {
            const response = await axios.post(`${baseUrl}/${OperationalEffectivenessEnum.CreateEnergyEfficiency}`, efficiencyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addProfitability(profitabilityPayload) {
        try {
            const response = await axios.post(`${baseUrl}/${OperationalEffectivenessEnum.CreateProfitability}`, profitabilityPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addPercentageConversion(percentConversionPayload) {
        try {
            const response = await axios.post(`${baseUrl}/${OperationalEffectivenessEnum.CreatePercentageConversion}`, percentConversionPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addComplianceScore(complianceScorePayload) {
        try {
            const response = await axios.post(`${baseUrl}/${OperationalEffectivenessEnum.CreateComplianceScore}`, complianceScorePayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addUnitTime(unitTimePayload) {
        try {
            const response = await axios.post(`${baseUrl}/${OperationalEffectivenessEnum.CreateUnitTime}`, unitTimePayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addYieldPercentage(yieldPercentagePayload) {
        try {
            const response = await axios.post(`${baseUrl}/${OperationalEffectivenessEnum.CreateYieldPercentage}`, yieldPercentagePayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getMonthlyTargetThroughput() {
        try {
            const response = await axios.get(`${baseUrl}/${OperationalEffectivenessEnum.GetMonthlyTargetThroughput}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getMonthlyTargetProfitability() {
        try {
            const response = await axios.get(`${baseUrl}/${OperationalEffectivenessEnum.GetMonthlyTargetProfitability}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getStatus() {
        try {
            const response = await axios.get(`${baseUrl}/${OperationalEffectivenessEnum.GetStatus}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getUpTime() {
        try {
            const response = await axios.get(`${baseUrl}/${OperationalEffectivenessEnum.GetUpTime}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getRotataryEquipment() {
        try {
            const response = await axios.get(`${baseUrl}/${OperationalEffectivenessEnum.GetRotatoryEquipment}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getEmission() {
        try {
            const response = await axios.get(`${baseUrl}/${OperationalEffectivenessEnum.GetEmission}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },
}

module.exports = { OperationalEffectiveness };
