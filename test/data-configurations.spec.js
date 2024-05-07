const { expect } = require("chai");
const { DataConfiguration } = require("../src/services/data-configurations");
const { UpdateBoilerDesignRequest, CreateBoilerDesignRequest, CreateRxRgDesignRequest, UpdateRxRgDesignRequest, CreateMabDesignRequest, UpdateMabDesignRequest, CreateWGCDesignRequest, UpdateWGCDesignRequest, CreateShutDownRequest, UpdateShutDownRequest, CreatePriceDataRequest, UpdatePriceDataRequest, CreateMaintenanceRequest, UpdateMaintenanceRequest, CreateAccidentRequest, UpdateAccidentRequest, CreateSafetyTrainingRequest, UpdateSafetyTrainingRequest, CreateEnvironmentDataRequest, UpdateEnvironmentDataRequest, CreateOtherDataRequest, UpdateOtherDataRequest, CreateUnitPerformanceRequest, UpdateUnitPerformanceRequest, CreateMonthlyTargetRequest, UpdateMonthlyTargetRequest, CreateMfDesignRequest, UpdateMFDesignRequest, CreateWHBDesignRequest, UpdateWHBDesignRequest, CreateAnamolyThresholdRequest, UpdateAnamolyThresholdRequest, UpdatePrtDesignRequest, CreatePrtDesignRequest } = require("../src/lib/payloads/data-configuration-payload");

describe('Data Configuration Apis', () => {
    const dataConfiguration = DataConfiguration;

    it('should make a RxGx Design Post request from Api', async () => {

        const rxRgDesignPayload = CreateRxRgDesignRequest;

        const response = await dataConfiguration.addRxRgDesign(rxRgDesignPayload);

        expect(response.status).to.equal(200);
    })

    it('should make a Update User Post request from Api', async () => {

        const rxRgDesignPayload = UpdateRxRgDesignRequest;

        const response = await dataConfiguration.updateRxRgDesign(rxRgDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a RxGx Design Get request from Api', async () => {

        const response = await dataConfiguration.getRxRgDesign();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Boiler Design Post request from Api', async () => {

        const boilerDesignPayload = CreateBoilerDesignRequest;

        const response = await dataConfiguration.addBoilerDesign(boilerDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Boiler Design Post request from Api', async () => {

        const boilerDesignPayload = UpdateBoilerDesignRequest;

        const response = await dataConfiguration.updateBoilerDesign(boilerDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Boiler Design Get request from Api', async () => {

        const response = await dataConfiguration.getBoilerDesign();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Mab Design Post request from Api', async () => {

        const mabDesignPayload = CreateMabDesignRequest;

        const response = await dataConfiguration.addMabDesign(mabDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Mab Design Post request from Api', async () => {

        const mabDesignPayload = UpdateMabDesignRequest;

        const response = await dataConfiguration.updateMabDesign(mabDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Mab Design Get request from Api', async () => {

        const response = await dataConfiguration.getMabDesign();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a WGC Design Post request from Api', async () => {

        const wgcDesignPayload = CreateWGCDesignRequest;

        const response = await dataConfiguration.addWgcDesign(wgcDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a WGC Design Post request from Api', async () => {

        const wgcDesignPayload = UpdateWGCDesignRequest;

        const response = await dataConfiguration.updateWgcDesign(wgcDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a WGC Design Get request from Api', async () => {

        const response = await dataConfiguration.getWgcDesign();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Shut Down Post request from Api', async () => {

        const shutDownPayload = CreateShutDownRequest;

        const response = await dataConfiguration.addShutDown(shutDownPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Shut Down Post request from Api', async () => {

        const shutDownPayload = UpdateShutDownRequest;

        const response = await dataConfiguration.updateShutDown(shutDownPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Shut Down Get request from Api', async () => {

        const response = await dataConfiguration.getShutDown();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Price Data Post request from Api', async () => {

        const priceDataPayload = CreatePriceDataRequest;

        const response = await dataConfiguration.addPriceData(priceDataPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Price Data Post request from Api', async () => {

        const priceDataPayload = UpdatePriceDataRequest;

        const response = await dataConfiguration.updatePriceData(priceDataPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Price Data Get request from Api', async () => {

        const response = await dataConfiguration.getPriceData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Maintenance Post request from Api', async () => {

        const maintenancePayload = CreateMaintenanceRequest;

        const response = await dataConfiguration.addMaintenanceData(maintenancePayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Maintenance Post request from Api', async () => {

        const maintenancePayload = UpdateMaintenanceRequest;

        const response = await dataConfiguration.updateMaintenanceData(maintenancePayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Maintenance Get request from Api', async () => {

        const response = await dataConfiguration.getMaintenanceData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Accident Post request from Api', async () => {
        const accidentPayload = CreateAccidentRequest;
        const response = await dataConfiguration.addAccidentData(accidentPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Accident Post request from Api', async () => {

        const accidentPayload = UpdateAccidentRequest;

        const response = await dataConfiguration.updateAccidentData(accidentPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Accident Get request from Api', async () => {

        const response = await dataConfiguration.getAccidentData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Safety Training Data Post request from Api', async () => {

        const safetyTrainingPayload = CreateSafetyTrainingRequest;

        const response = await dataConfiguration.addSafetyTrainingData(safetyTrainingPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Safety Training Post request from Api', async () => {

        const safetyTrainingPayload = UpdateSafetyTrainingRequest;

        const response = await dataConfiguration.updateAccidentData(safetyTrainingPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Safety Training Get request from Api', async () => {

        const response = await dataConfiguration.getSafetyTrainingData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Environment Data Post request from Api', async () => {

        const environmentDataPayload = CreateEnvironmentDataRequest;

        const response = await dataConfiguration.addEnvironmentData(environmentDataPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Environment Data Post request from Api', async () => {

        const environmentDataPayload = UpdateEnvironmentDataRequest;

        const response = await dataConfiguration.updateEnvironmentData(environmentDataPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Environment Data Get request from Api', async () => {

        const response = await dataConfiguration.getSafetyTrainingData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Other Data Post request from Api', async () => {

        const otherDataPayload = CreateOtherDataRequest;

        const response = await dataConfiguration.addOtherData(otherDataPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Other Data Post request from Api', async () => {

        const otherDataPayload = UpdateOtherDataRequest;

        const response = await dataConfiguration.updateOtherData(otherDataPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Other Data Get request from Api', async () => {

        const response = await dataConfiguration.getOtherData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Unit Performance Data Post request from Api', async () => {

        const unitPerformancePayload = CreateUnitPerformanceRequest;

        const response = await dataConfiguration.addUnitPerformanceData(unitPerformancePayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Unit Performance Data Post request from Api', async () => {

        const unitPerformancePayload = UpdateUnitPerformanceRequest;

        const response = await dataConfiguration.updateUnitPerformanceData(unitPerformancePayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Unit Performance Data Get request from Api', async () => {

        const response = await dataConfiguration.getUnitPerformanceData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Monthly Target Data Post request from Api', async () => {

        const monthlyTargetPayload = CreateMonthlyTargetRequest;

        const response = await dataConfiguration.addMonthlyTargetData(monthlyTargetPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Monthly Target Data Post request from Api', async () => {

        const monthlyTargetPayload = UpdateMonthlyTargetRequest;

        const response = await dataConfiguration.updateMonthlyTargetData(monthlyTargetPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Monthly Target Data Get request from Api', async () => {

        const response = await dataConfiguration.getMonthlyTargetData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a MF Design Data Post request from Api', async () => {

        const mfDesignPayload = CreateMfDesignRequest;

        const response = await dataConfiguration.addMfDesignData(mfDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a MF Design Data Post request from Api', async () => {

        const mfDesignPayload = UpdateMFDesignRequest;

        const response = await dataConfiguration.updateMfDesignData(mfDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a MF Design Data Get request from Api', async () => {

        const response = await dataConfiguration.getMfDesignData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a WHB Design Data Post request from Api', async () => {

        const whbDesignPayload = CreateWHBDesignRequest;

        const response = await dataConfiguration.addWhbDesignData(whbDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a WHB Design Data Post request from Api', async () => {

        const whbDesignPayload = UpdateWHBDesignRequest;

        const response = await dataConfiguration.updateWhbDesignData(whbDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a WHB Design Data Get request from Api', async () => {

        const response = await dataConfiguration.getWhbDesignData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Anamoly Threshold Data Post request from Api', async () => {

        const anamolyThresholdPayload = CreateAnamolyThresholdRequest;

        const response = await dataConfiguration.addAnamolyThresholdData(anamolyThresholdPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Anamoly Threshold Data Post request from Api', async () => {

        const anamolyThresholdPayload = UpdateAnamolyThresholdRequest;

        const response = await dataConfiguration.updateAnamolyThresholdData(anamolyThresholdPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Anamoly Threshold Data Get request from Api', async () => {

        const response = await dataConfiguration.getAnamolyThresholdData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a PRT Design Data Post request from Api', async () => {

        const prtDesignPayload = CreatePrtDesignRequest;
        
        const response = await dataConfiguration.addPrtDesignData(prtDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a PRT Design Data Post request from Api', async () => {

        const prtDesignPayload = UpdatePrtDesignRequest;

        const response = await dataConfiguration.updatePrtDesignData(prtDesignPayload);

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a PRT Design Data Get request from Api', async () => {

        const response = await dataConfiguration.getPrtDesignData();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })
})
