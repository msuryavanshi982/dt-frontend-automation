const { expect } = require("chai");
const { AirBlower } = require("../src/services/main-air-blower");
const { CardRequest, CardResponse, EfficiencyRequest, HealthAnamolyRequest, TripTagsRequest } = require("../src/lib/payloads/main-air-blower-payload");

describe('Air Blower Apis', () => {
    const airBlower = AirBlower;

    it('should make a Card Post request from Api', async () => {

        const cardPayload = CardRequest;
        const cardResponse = CardResponse;
        const response = await airBlower.addCardsData(cardPayload);

        expect(response.status).to.equal(200);
    })

    it('should make a Efficiency Post request from Api', async () => {

        const efficiencyPayload = EfficiencyRequest;
        const response = await airBlower.addEfficiencyAnamolyScore(efficiencyPayload);

        expect(response.status).to.equal(200);
    })

    it('should make a Health Anamoly Score Post request from Api', async () => {

        const healthAnamolyPayload = HealthAnamolyRequest;
        const response = await airBlower.addEfficiencyAnamolyScore(healthAnamolyPayload);

        expect(response.status).to.equal(200);
    })

    it('should make a Trip Tags Post request from Api', async () => {

        const tripTagsPayload = TripTagsRequest;
        const response = await airBlower.addTripTags(tripTagsPayload);

        expect(response.status).to.equal(200);
    })
})