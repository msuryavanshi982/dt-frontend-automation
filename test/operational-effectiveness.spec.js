const { expect } = require("chai");
const { OperationalEffectiveness } = require("../src/services/operational-effectiveness");
const { ComplianceScoreRequest, EfficiencyRequest, EfficiencyResponse, PercentageConversionRequest, ProfitabilityRequest, ProfitabilityResponse, UnitUptimeRequest, YieldPercentageRequest } = require("../src/lib/payloads/operational-effectiveness-payload");

describe('Operational Effectiveness Apis', () => {
    const operationalEffectiveness = OperationalEffectiveness;

    it('should make a Efficiency Post request from Api', async () => {
        //arrange
        const efficiencyRequest = EfficiencyRequest;
        const expectedEfficiencyResponse = EfficiencyResponse;
        //act
        const response = await operationalEffectiveness.addEneryEfficiency(efficiencyRequest);
        //assert
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
        expect(response.data).to.have.property("message", "Operational Effectiveness Energy Efficiency Fetch Successful");
        expect(response.data).to.have.nested.property("data.data.energyEfficiency[0].energyEfficiency");
        expect(response.data).to.have.nested.property("data.flag", true);
    })

    it('should make a Profitability Post request from Api', async () => {
        //arrange
        const profitabilityRequest = ProfitabilityRequest;

        const expectedProfitabilityResponse = ProfitabilityResponse;
        //act
        const response = await operationalEffectiveness.addProfitability(profitabilityRequest);
        //assert
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
        expect(response.data).to.have.property("message", "Operational Effectiveness Profitability Fetch Successful");
        expect(response.data).to.have.nested.property("data.data.profitability[0].profitability");
        expect(response.data).to.have.nested.property("data.flag", true);
    })

    it('should make a Percentage Conversion Post request from Api', async () => {
        const percentageConversionRequest = PercentageConversionRequest;
        const response = await operationalEffectiveness.addProfitability(percentageConversionRequest);
        //assert
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Percentage Conversion Post request from Api', async () => {
        const complianceScoreRequest = ComplianceScoreRequest;
        const response = await operationalEffectiveness.addComplianceScore(complianceScoreRequest);
        //assert
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Unit Uptime Post request from Api', async () => {
        const unitUptimeRequest = UnitUptimeRequest;
        const response = await operationalEffectiveness.addUnitTime(unitUptimeRequest);
        //assert
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it('should make a Yield Percentage Post request from Api', async () => {
        const yieldPercentageRequest = YieldPercentageRequest;
        const response = await operationalEffectiveness.addUnitTime(yieldPercentageRequest);
        //assert
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it("should have a Monthly Targets Throughput Get Request from Api", async () => {
        //act
        const response = await operationalEffectiveness.getMonthlyTargetThroughput();
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it("should have a Monthly Targets Profitability Get Request from Api", async () => {
        //act
        const response = await operationalEffectiveness.getMonthlyTargetProfitability();
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it("should have a Status Get Request from Api", async () => {
        //act
        const response = await operationalEffectiveness.getStatus();
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it("should have a UpTime Get Request from Api", async () => {
        //act
        const response = await operationalEffectiveness.getUpTime();
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it("should have a Rotatory Equipment Performance Get Request from Api", async () => {
        //act
        const response = await operationalEffectiveness.getRotataryEquipment();
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })

    it("should have a Emission Get Request from Api", async () => {
        //act
        const response = await operationalEffectiveness.getEmission();
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("status", 200);
    })
})
