const { expect } = require("chai");
const { WetGasCompressor } = require("../src/services/wet-gas-compressor");
const { CardRequest, EfficiencyAnamolyRequest, HealthAnamolyRequest, TripTagsRequest } = require("../src/lib/payloads/wet-gas-compressor-payload");

describe('Wet Gas Compressor Apis', () => {
    const wetGasCompressor = WetGasCompressor;

    it('should make a Card Post request from Api', async () => {
        const cardPayload = CardRequest;
        const response = await wetGasCompressor.addCardsData(cardPayload);

        // Test Case 1: Check for a status code of 200
        expect(response.status).to.equal(200);

        // Test Case 2: Check for a success message in the response
        expect(response.data.message).to.equal("Cards Data Fetch Successful");

        // Test Case 3: Check for the expected data structure
        expect(response.data.data).to.have.property("data");
        const responseData = response.data.data;

        // Test Case 4: Check for the design data properties
        const designData = responseData.data.designData;
        expect(designData).to.have.property("id");
        expect(designData).to.have.property("wetGasFlow").to.equal("undefined");
        expect(designData).to.have.property("pressure").to.equal("undefined");
        expect(designData).to.have.property("efficiency").to.equal("undefined");
        expect(designData).to.have.property("powerConsumption").to.equal("undefined");
        expect(designData).to.have.property("steamConsumption").to.equal("undefined");
        expect(designData).to.have.property("interstageCoolerTemp").to.equal("undefined");
        expect(designData).to.have.property("timestamp");
        expect(designData).to.have.property("wgcHealth").to.be.null;
        expect(designData).to.have.property("wgcTimeToFailureInNext30Days").to.be.null;
        expect(designData).to.have.property("monthlyUptime").to.equal(100);

        // Test Case 5: Check for the health single value properties
        const healthSingleValue = responseData.data.healthSingleValue[0];
        expect(healthSingleValue).to.have.property("wgcHealth").to.be.a("number");

        // Test Case 6: Check for the efficiency single value properties
        const efficiencySingleValue = responseData.data.efficiencySingleValue[0];
        expect(efficiencySingleValue).to.have.property("wgcEfficiency").to.be.a("number");

        // Test Case 7: Check for the steam consumption single value properties
        const steamConsumptionSingleValue = responseData.data.steamConsumptionSingleValue[0];
        expect(steamConsumptionSingleValue).to.have.property("wgcSteamConsumption").to.be.a("number");

        // Test Case 8: Check for the wet gas flow single value properties
        const wetGasFlowSingleValue = responseData.data.wetGasFlowSingleValue[0];
        expect(wetGasFlowSingleValue).to.have.property("wgcWetGasFlow").to.be.a("number");

        // Test Case 9: Check for the time to failure single value properties
        const timeToFailureSingleValue = responseData.data.timeToFailureSingleValue[0];
        expect(timeToFailureSingleValue).to.have.property("wgcTimeToFailureInNext30Days").to.be.null;

        // Test Case 10: Check for the power consumption single value properties
        const powerConsumptionSingleValue = responseData.data.powerConsumptionSingleValue[0];
        expect(powerConsumptionSingleValue).to.have.property("wgcPowerConsumptionMW").to.be.a("number");

        // Test Case 11: Check for the interstage cooler temp single value properties
        const interstageCoolerTempSingleValue = responseData.data.intersatgeCoolerTempSingleValue[0];
        expect(interstageCoolerTempSingleValue).to.have.property("wgcInterStageCoolerTemperature").to.be.a("number");

        // Test Case 12: Check for the suction pressure single value properties
        const suctionPressureSingleValue = responseData.data.suctionPressureSingleValue[0];
        expect(suctionPressureSingleValue).to.have.property("wgcSuctionPressure").to.be.a("number");

        // Test Case 13: Check for the health 10 value properties
        const health10Value = responseData.data.health10Value[0];
        expect(health10Value).to.have.property("wgcHealth").to.be.an("array");
        expect(health10Value).to.have.property("timestamp").to.be.an("array");
        expect(health10Value.wgcHealth).to.have.lengthOf(8);
        expect(health10Value.timestamp).to.have.lengthOf(8);

        // Test Case 14: Check for the efficiency 10 value properties
        const efficiency10Value = responseData.data.efficiency10Value[0];
        expect(efficiency10Value).to.have.property("wgcEfficiency").to.be.an("array");
        expect(efficiency10Value).to.have.property("wgcDesignEfficiency").to.be.an("array");
        expect(efficiency10Value).to.have.property("timestamp").to.be.an("array");
        expect(efficiency10Value.wgcEfficiency).to.have.lengthOf(8);
        expect(efficiency10Value.wgcDesignEfficiency).to.have.lengthOf(8);
        expect(efficiency10Value.timestamp).to.have.lengthOf(8);

        // Test Case 15: Check for the steam consumption 10 value properties
        const steamConsumption10Value = responseData.data.steamConsumption10Value[0];
        expect(steamConsumption10Value).to.have.property("wgcSteamConsumption").to.be.an("array");
        expect(steamConsumption10Value).to.have.property("timestamp").to.be.an("array");
        expect(steamConsumption10Value.wgcSteamConsumption).to.have.lengthOf(8);
        expect(steamConsumption10Value.timestamp).to.have.lengthOf(8);

        // Test Case 16: Check for the wet gas flow 10 value properties
        const wetGasFlow10Value = responseData.data.wetGasFlow10Value[0];
        expect(wetGasFlow10Value).to.have.property("wgcWetGasFlow").to.be.an("array");
        expect(wetGasFlow10Value).to.have.property("timestamp").to.be.an("array");
        expect(wetGasFlow10Value.wgcWetGasFlow).to.have.lengthOf(8);
        expect(wetGasFlow10Value.timestamp).to.have.lengthOf(8);

        // Test Case 17: Check for the time to failure 10 value properties
        const timeToFailure10Value = responseData.data.timeToFailure10Value[0];
        expect(timeToFailure10Value).to.have.property("wgcTimeToFailureInNext30Days").to.be.an("array");
        expect(timeToFailure10Value).to.have.property("timestamp").to.be.an("array");
        expect(timeToFailure10Value.wgcTimeToFailureInNext30Days).to.have.lengthOf(8);
        expect(timeToFailure10Value.timestamp).to.have.lengthOf(8);

        // Test Case 18: Check for the power consumption 10 value properties
        const powerConsumption10Value = responseData.data.powerConsumption10Value[0];
        expect(powerConsumption10Value).to.have.property("wgcPowerConsumptionMW").to.be.an("array");
        expect(powerConsumption10Value).to.have.property("timestamp").to.be.an("array");
        expect(powerConsumption10Value.wgcPowerConsumptionMW).to.have.lengthOf(8);
        expect(powerConsumption10Value.timestamp).to.have.lengthOf(8);

        // Test Case 19: Check for the interstage cooler temp 10 value properties
        const interstageCoolerTemp10Value = responseData.data.intersatgeCoolerTemp10Value[0];
        expect(interstageCoolerTemp10Value).to.have.property("wgcInterStageCoolerTemperature").to.be.an("array");
        expect(interstageCoolerTemp10Value).to.have.property("timestamp").to.be.an("array");
        expect(interstageCoolerTemp10Value.wgcInterStageCoolerTemperature).to.have.lengthOf(8);
        expect(interstageCoolerTemp10Value.timestamp).to.have.lengthOf(8);

        // Test Case 20: Check for the suction pressure 10 value properties
        const suctionPressure10Value = responseData.data.suctionPressure10Value[0];
        expect(suctionPressure10Value).to.have.property("wgcSuctionPressure").to.be.an("array");
        expect(suctionPressure10Value).to.have.property("timestamp").to.be.an("array");
        expect(suctionPressure10Value.wgcSuctionPressure).to.have.lengthOf(8);
        expect(suctionPressure10Value.timestamp).to.have.lengthOf(8);
    });

    it('should make an Efficiency Anomaly Post request from Api', async () => {
        const efficiencyAnomalyPayload = EfficiencyAnamolyRequest;

        const response = await wetGasCompressor.addEfficiencyAnamolyScore(efficiencyAnomalyPayload);

        // Test Case 1: Check for a status code of 200
        expect(response.status).to.equal(200);

        const responseData = response.data;
        
        // Test Case 2: Check for a success message in the response
        expect(response.data.message).to.equal("Efficiency Anamaly Score Fetch Successful");
        
        // Test Case 3: Check for the expected data structure
        expect(responseData.data).to.have.property("data");
        const efficiencyAnomalyScoreData = responseData.data.data.efficiencyAnamolyScore[0];
        console.log({ data: JSON.stringify(responseData) });

        // Test Case 4: Check for the existence of efficiency anomaly score array
        expect(efficiencyAnomalyScoreData).to.have.property("wgcEfficiencyAnomalyScore");
        expect(efficiencyAnomalyScoreData.wgcEfficiencyAnomalyScore).to.be.an("array");

        // Test Case 5: Check for the correctness of efficiency anomaly score values
        expect(efficiencyAnomalyScoreData.wgcEfficiencyAnomalyScore).to.deep.equal([37.83, 38.32, 36.51, 36.31, 36.31, 36.12, 36.18, 37.58]);

        // Test Case 6: Check for the existence of efficiency anomaly score threshold array
        expect(efficiencyAnomalyScoreData).to.have.property("wgcEfficiencyAnomalyScoreThreshold");
        expect(efficiencyAnomalyScoreData.wgcEfficiencyAnomalyScoreThreshold).to.be.an("array");

        // Test Case 7: Check for the correctness of efficiency anomaly score threshold values
        expect(efficiencyAnomalyScoreData.wgcEfficiencyAnomalyScoreThreshold).to.deep.equal([62, 62, 62, 62, 62, 62, 62, 62]);

        // Test Case 8: Check for the existence of efficiency risk zone array
        expect(efficiencyAnomalyScoreData).to.have.property("wgcEfficiencyRiskZone");
        expect(efficiencyAnomalyScoreData.wgcEfficiencyRiskZone).to.be.an("array");

        // Test Case 9: Check for the correctness of efficiency risk zone values
        expect(efficiencyAnomalyScoreData.wgcEfficiencyRiskZone).to.deep.equal([null, null, null, null, null, null, null, null]);

        // Test Case 10: Check for the existence of timestamp array
        expect(efficiencyAnomalyScoreData).to.have.property("timestamp");
        expect(efficiencyAnomalyScoreData.timestamp).to.be.an("array");

        // Test Case 11: Check for the correctness of timestamp values
        expect(efficiencyAnomalyScoreData.timestamp).to.deep.equal([
            "2022-04-29 13:00:00",
            "2022-04-29 12:00:00",
            "2022-04-29 11:00:00",
            "2022-04-29 10:00:00",
            "2022-04-29 09:00:00",
            "2022-04-29 08:00:00",
            "2022-04-29 07:00:00",
            "2022-04-29 06:00:00"
        ]);

        // Test Case 12: Check for the flag value
        expect(responseData.flag).to.equal(true);
    });

    it('should make a Health Anamoly Post request from Api', async () => {

        const healthAnamolyPayload = HealthAnamolyRequest;
    
        const response = await wetGasCompressor.addHealthAnamolyScore(healthAnamolyPayload);
    
        expect(response.status).to.equal(200);
    })
    
    it('should make a Trip Tags Post request from Api', async () => {
    
        const tripTagsPayload = TripTagsRequest;
    
        const response = await wetGasCompressor.addTripTags(tripTagsPayload);
    
        expect(response.status).to.equal(200);
    })

});