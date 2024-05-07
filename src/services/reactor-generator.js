const axios = require("axios");
const { ReactorGeneratorEnum } = require("../lib/endpoints/reactor-generator-endpoint-enum");

const host = "34.29.169.181";
const port = "8081";

const baseUrl = `http://${host}:${port}/app/v1/digital-twin/reactor-regenerator/IOCL_DT_Paradip`;

const ReactorGenerator = {
    async addCardsData(cardDataPayload){
        try {
            const response = await axios.post(`${baseUrl}/${ReactorGeneratorEnum.CreateCards}`, cardDataPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addCycloneVelocity(efficiencyAnamolyPayload){
        try {
            const response = await axios.post(`${baseUrl}/${ReactorGeneratorEnum.CreateCycloneVelocity}`, efficiencyAnamolyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addEnergy(energyPayload){
        try {
            const response = await axios.post(`${baseUrl}/${ReactorGeneratorEnum.CreateEnergy}`, energyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addPressureSystemAnamoly(pressureSystemPayload) {
        try {
            const response = await axios.post(`${baseUrl}/${ReactorGeneratorEnum.CreatePressureSystemAnamoly}`, pressureSystemPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },
}

module.exports = { ReactorGenerator };