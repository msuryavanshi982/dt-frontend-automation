const axios = require("axios");
const { AirBlowerEnum } = require("../lib/endpoints/main-air-blower-enum");

const host = "34.29.169.181";
const port = "8081";

const baseUrl = `http://${host}:${port}/app/v1/digital-twin/main-air-blower/IOCL_DT_Paradip`;

const AirBlower = {
    async addCardsData(cardDataPayload){
        try {
            const response = await axios.post(`${baseUrl}/${AirBlowerEnum.CreateCards}`, cardDataPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addEfficiencyAnamolyScore(efficiencyAnamolyPayload){
        try {
            
            const response = await axios.post(`${baseUrl}/${AirBlowerEnum.CreateEfficiencyAnamoly}`, efficiencyAnamolyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addHealthAnamolyScore(healthAnamolyPayload){
        try {
            
            const response = await axios.post(`${baseUrl}/${AirBlowerEnum.CreateHealthAnamoly}`, healthAnamolyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addTripTags(tripTagsPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${AirBlowerEnum.CreateTripTags}`, tripTagsPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },
}

module.exports = { AirBlower };