const axios = require("axios");
const { AccidentEnum, AnamolyThresholdEnum, BoilerDesignEnum, EnvironmentEnum, MabDesignEnum, MaintenanceEnum, MfDesignEnum, MonthlyTargetEnum, OtherEnum, PriceEnum, PrtDesignEnum, RxRdDesignEnum, SafetyTrainingEnum, ShutDownEnum, UnitPerformanceEnum, WgcDesignEnum, WhbDesignEnum } = require("../lib/endpoints/data-configuration-endpoint-enum");

const host = "34.29.169.181";
const port = "8081";

const baseUrl = `http://${host}:${port}/app/v1/digital-twin/tool-settings/IOCL_DT_Paradip`;

const DataConfiguration = {
    async addRxRgDesign(rxRgPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${RxRdDesignEnum.AddRxRgDesign}`, rxRgPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateRxRgDesign(rxRgPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${RxRdDesignEnum.UpdateRxRgDesign}`, rxRgPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getRxRgDesign() {
        try {
            
            const response = await axios.get(`${baseUrl}/${RxRdDesignEnum.GetRxRgDesign}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addBoilerDesign(boilerDesignPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${BoilerDesignEnum.AddBoilerDesign}`, boilerDesignPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateBoilerDesign(boilerDesignPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${BoilerDesignEnum.UpdateBoilerDesign}`, boilerDesignPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getBoilerDesign() {
        try {
            
            const response = await axios.get(`${baseUrl}/${BoilerDesignEnum.GetBoilerDesign}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addMabDesign(mabDesignPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${MabDesignEnum.AddMabDesign}`, mabDesignPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateMabDesign(mabDesignPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${MabDesignEnum.UpdateMabDesign}`, mabDesignPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getMabDesign() {
        try {
            
            const response = await axios.get(`${baseUrl}/${MabDesignEnum.GetMabDesign}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addWgcDesign(wgcPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${WhbDesignEnum.AddWhbDesignData}`, wgcPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateWgcDesign(wgcPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${WgcDesignEnum.UpdateWgcDesign}`, wgcPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getWgcDesign() {
        try {
            
            const response = await axios.get(`${baseUrl}/${WgcDesignEnum.GetWgcDesign}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addShutDown(shotDownPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${ShutDownEnum.AddShutDown}`, shotDownPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateShutDown(shotDownPayload) {
        try {
            
            const response = await axios.get(`${baseUrl}/${ShutDownEnum.UpdateShutDown}`, shotDownPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getShutDown() {
        try {
            
            const response = await axios.get(`${baseUrl}/${ShutDownEnum.GetShutDown}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addPriceData(priceDataPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${PriceEnum.AddPriceData}`, priceDataPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updatePriceData(priceDataPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${PriceEnum.UpdatePriceData}`, priceDataPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getPriceData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${PriceEnum.GetPriceData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addMaintenanceData(maintenancePayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${MaintenanceEnum.AddMaintenanceData}`, maintenancePayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateMaintenanceData(maintenancePayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${MaintenanceEnum.UpdateMaintenanceData}`, maintenancePayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getMaintenanceData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${MaintenanceEnum.GetMaintenanceData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addAccidentData(accidentPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${AccidentEnum.AddAccidentData}`, accidentPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateAccidentData(accidentPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${AccidentEnum.UpdateAccidentData}`, accidentPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getAccidentData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${AccidentEnum.GetAccidentData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addSafetyTrainingData(safetyPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${SafetyTrainingEnum.AddSafetyTrainingData}`, safetyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateSafetyTrainingData(safetyPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${SafetyTrainingEnum.UpdateSafetyTrainingData}`, safetyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getSafetyTrainingData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${SafetyTrainingEnum.GetSafetyTrainingData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addEnvironmentData(environmentPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${EnvironmentEnum.AddEnvironmentData}`, environmentPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateEnvironmentData(environmentPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${EnvironmentEnum.UpdateEnvironmentData}`, environmentPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getEnvironmentData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${EnvironmentEnum.GetEnvironmentData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addOtherData(otherPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${OtherEnum.AddOtherData}`, otherPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateOtherData(otherPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${OtherEnum.UpdateOtherData}`, otherPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getOtherData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${OtherEnum.GetOtherData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addUnitPerformanceData(unitPerformancePayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${UnitPerformanceEnum.AddUnitPerformanceData}`, unitPerformancePayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateUnitPerformanceData(unitPerformancePayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${UnitPerformanceEnum.UpdateUnitPerformanceData}`, unitPerformancePayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getUnitPerformanceData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${UnitPerformanceEnum.GetUnitPerformanceData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addMonthlyTargetData(monthlyTargetPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${MonthlyTargetEnum.AddMonthlyTargetData}`, monthlyTargetPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateMonthlyTargetData(monthlyTargetPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${MonthlyTargetEnum.UpdateMonthlyTargetData}`, monthlyTargetPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getMonthlyTargetData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${MonthlyTargetEnum.GetMonthlyTargetData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addMfDesignData(mfDesignPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${MfDesignEnum.AddMfDesignData}`, mfDesignPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateMfDesignData(mfDesignPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${MfDesignEnum.UpdateMfDesignData}`, mfDesignPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getMfDesignData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${MfDesignEnum.GetMfDesignData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addWhbDesignData(whbDesignPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${WhbDesignEnum.AddWhbDesignData}`, whbDesignPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateWhbDesignData(whbDesignPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${WhbDesignEnum.UpdateWhbDesignData}`, whbDesignPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getWhbDesignData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${WhbDesignEnum.GetWhbDesignData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addAnamolyThresholdData(anamolyPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${AnamolyThresholdEnum.AddAnamolyThresholdData}`, anamolyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updateAnamolyThresholdData(anamolyPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${AnamolyThresholdEnum.UpdateAnamolyThresholdData}`, anamolyPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getAnamolyThresholdData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${AnamolyThresholdEnum.GetAnamolyThresholdData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async addPrtDesignData(prtDesignPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${PrtDesignEnum.AddPrtDesignData}`, prtDesignPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async updatePrtDesignData(prtDesignPayload) {
        try {
            
            const response = await axios.post(`${baseUrl}/${PrtDesignEnum.UpdatePrtDesignData}`, prtDesignPayload);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },

    async getPrtDesignData() {
        try {
            
            const response = await axios.get(`${baseUrl}/${PrtDesignEnum.GetPrtDesignData}`);
            return response;
        } catch (error) {
            console.error("Error in API request:", error.message);
            throw error;
        };
    },
}

module.exports = { DataConfiguration };