const { expect } = require("chai");
const { MainFractionator } = require("../src/services/main-fractionator");
const { CardRequest } = require("../src/lib/payloads/main-air-blower-payload");
const { FeedPropertiesRequest, ProductPropertyBenzeneRequest, ProductPropertyDensityRequest, ProductPropertySulphurRequest, TemperatureRequest, YieldPercentageRequest } = require("../src/lib/payloads/main-fractionator-payload");

describe('Main Fractionator Apis', () => {
    const mainFractionator = MainFractionator;

    it('should make a Card Post request from Api', async () => {

        const cardPayload = CardRequest;

        const response = await mainFractionator.addCardsData(cardPayload);

        expect(response.status).to.equal(200);
    })

    it('should make a Yield Percentage Post request from Api', async () => {

        const yieldPercentagePayload = YieldPercentageRequest;

        const response = await mainFractionator.addYieldPercentage(yieldPercentagePayload);

        expect(response.status).to.equal(200);
    })

    it('should make a Temperature Post request from Api', async () => {

        const temperaturePayload = TemperatureRequest;

        const response = await mainFractionator.addTemperature(temperaturePayload);

        expect(response.status).to.equal(200);
    })

    it('should make a Product Property Density Post request from Api', async () => {

        const productPropertyDensityPayload = ProductPropertyDensityRequest;

        const response = await mainFractionator.addProductPropertyDensity(productPropertyDensityPayload);

        expect(response.status).to.equal(200);
    })

    it('should make a Product Property Sulphur Post request from Api', async () => {

        const productPropertySulphurPayload = ProductPropertySulphurRequest;

        const response = await mainFractionator.addProductPropertySulphur(productPropertySulphurPayload);

        expect(response.status).to.equal(200);
    })

    it('should make a Product Property Benzene Post request from Api', async () => {

        const productPropertyBenzenePayload = ProductPropertyBenzeneRequest;

        const response = await mainFractionator.addProductPropertyBenzene(productPropertyBenzenePayload);

        expect(response.status).to.equal(200);
    })

    it('should make a Feed Properties Post request from Api', async () => {

        const feedPropertiesPayload = FeedPropertiesRequest;

        const response = await mainFractionator.addProductPropertyBenzene(feedPropertiesPayload);

        expect(response.status).to.equal(200);
    })
})