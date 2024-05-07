const axios = require("axios");
const { WasteHeatBoilerEnum } = require("../lib/endpoints/waste-heat-boiler-endpoint-enum");

const host = "34.29.169.181";
const port = "8081";

const baseUrl = `http://${host}:${port}/app/v1/digital-twin/waste-heat-boiler/IOCL_DT_Paradip`;

const WasteHeatBoiler = {
    async addCardsData(cardDataPayload){
        try {
            const response = await axios.post(`${baseUrl}/${WasteHeatBoilerEnum.CreateCards}`, cardDataPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addStreamGeneration(streamGenerationPayload){
        try {
            const response = await axios.post(`${baseUrl}/${WasteHeatBoilerEnum.CreateStreamGeneration}`, streamGenerationPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addStreamConsumption(streamConsumptionPayload){
        try {
            const response = await axios.post(`${baseUrl}/${WasteHeatBoilerEnum.CreateStreamConsumption}`, streamConsumptionPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },
}

module.exports = { WasteHeatBoiler };