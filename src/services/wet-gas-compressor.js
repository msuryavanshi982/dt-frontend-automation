const axios = require("axios");
const { WetGasCompressorEnum } = require("../lib/endpoints/wet-gas-compressor-endpoint-enum");

const host = "34.29.169.181";
const port = "8081";

const baseUrl = `http://${host}:${port}/app/v1/digital-twin/wet-gas-compressor/IOCL_DT_Paradip`;

const WetGasCompressor = {
    async addCardsData(cardDataPayload) {
        try {
            const response = await axios.post(`${baseUrl}/${WetGasCompressorEnum.CreateCards}`, cardDataPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        }
    },

    async addEfficiencyAnamolyScore(efficiencyAnamolyPayload) {
        try {
            const response = await axios.post(`${baseUrl}/${WetGasCompressorEnum.CreateEfficiencyAnamolyScore}`, efficiencyAnamolyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        }
    },

    async addHealthAnamolyScore(healthAnamolyPayload) {
        try {
            const response = await axios.post(`${baseUrl}/${WetGasCompressorEnum.CreateHealthAnamolyScore}`, healthAnamolyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        }
    },

    async addTripTags(tripTagsPayload) {
        try {
            const response = await axios.post(`${baseUrl}/${WetGasCompressorEnum.CreateTripTags}`, tripTagsPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        }
    }
}

module.exports = { WetGasCompressor };