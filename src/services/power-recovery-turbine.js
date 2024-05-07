const axios = require("axios");
const { PowerRecoveryTurbineEnum } = require("../lib/endpoints/power-recovery-turbine-endpoint-enum");

const host = "34.29.169.181";
const port = "8081";

const baseUrl = `http://${host}:${port}/app/v1/digital-twin/power-recovery-turbine/IOCL_DT_Paradip`;

const PowerRecoveryTurbine = {
    async addCardsData(cardDataPayload){
        try {
            
            const response = await axios.post(`${baseUrl}/${PowerRecoveryTurbineEnum.CreateCards}`, cardDataPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addEfficiencyAnamolyScore(efficiencyAnamolyPayload){
        try {
            
            const response = await axios.post(`${baseUrl}/${PowerRecoveryTurbineEnum.CreateEfficiencyAnamoly}`, efficiencyAnamolyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addTripTags(tripTagsPayload){
        try {
            
            const response = await axios.post(`${baseUrl}/${PowerRecoveryTurbineEnum.CreateTripTags}`, tripTagsPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },
}

module.exports = { PowerRecoveryTurbine };