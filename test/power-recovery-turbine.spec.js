const { expect } = require("chai");
const { PowerRecoveryTurbine } = require("../src/services/power-recovery-turbine");
const { CardRequest, EfficiencyRequest, TripTagsRequest } = require("../src/lib/payloads/power-recovery-turbine-payload");

describe('Power Recovery Turbine Apis', () => {
    const powerRecoveryTurbine = PowerRecoveryTurbine;

    it('should make a Card Post request from Api', async () => {
        
        const cardPayload = CardRequest;
        
        const response = await powerRecoveryTurbine.addCardsData(cardPayload);
        
        expect(response.status).to.equal(200);
    })

    it('should make a Efficiency Post request from Api', async () => {
        
        const efficiencyPayload = EfficiencyRequest;
        
        const response = await powerRecoveryTurbine.addEfficiencyAnamolyScore(efficiencyPayload);
        
        expect(response.status).to.equal(200);
    })

    it('should make a Trip Tags Post request from Api', async () => {
        
        const tripTagsPayload = TripTagsRequest;
        
        const response = await powerRecoveryTurbine.addTripTags(tripTagsPayload);
        
        expect(response.status).to.equal(200);
    })
})