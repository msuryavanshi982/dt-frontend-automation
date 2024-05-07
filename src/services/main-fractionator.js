const axios = require("axios");
const { MainFractionatorEnum } = require("../lib/endpoints/main-fractionator-endpoint-enum");

const host = "34.29.169.181";
const port = "8081";

const baseUrl = `http://${host}:${port}/app/v1/digital-twin/main-fractionator/IOCL_DT_Paradip`;

const MainFractionator = {
    async addCardsData(cardDataPayload){
        try {
            const response = await axios.post(`${baseUrl}/${MainFractionatorEnum.CreateCards}`, cardDataPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addYieldPercentage(yieldPercentagePayload){
        try {
            const response = await axios.post(`${baseUrl}/${MainFractionatorEnum.CreateYieldPercentage}`, yieldPercentagePayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addTemperature(temperaturePayload){
        try {
            const response = await axios.post(`${baseUrl}/${MainFractionatorEnum.CreateTemperature}`, temperaturePayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addProductPropertyDensity(productPropertyDensityPayload) {
        try {
            const response = await axios.post(`${baseUrl}/${MainFractionatorEnum.CreateProductPropertyDensity}`, productPropertyDensityPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addProductPropertySulphur(productPropertySulphurPayload) {
        try {
            const response = await axios.post(`${baseUrl}/${MainFractionatorEnum.CreateProductPropertySulphur}`, productPropertySulphurPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addProductPropertyBenzene(productPropertyBenzenePayload) {
        try {
            const response = await axios.post(`${baseUrl}/${MainFractionatorEnum.CreateProductPropertyBenzene}`, productPropertyBenzenePayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addFeedProperties(feedPropertiesPayload) {
        try {
            const response = await axios.post(`${baseUrl}/${MainFractionatorEnum.CreateFeedProperty}`, feedPropertiesPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },
}

module.exports = { MainFractionator };