const axios = require("axios");
const { WhatIfEnum } = require("../lib/endpoints/what-if-endpoint-enum");

const host = "34.29.169.181";
const port = "8081";

const baseUrl = `http://${host}:${port}/app/v1/digital-twin/what-if-analysis/IOCL_DT_Paradip`;

const WhatIf = {
    async addWhatIfGetInitials(whatIfInitialPayload){
        try {
            const response = await axios.post(`${baseUrl}/${WhatIfEnum.CreateWhatIf}`, whatIfInitialPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },
}

module.exports = { WhatIf };