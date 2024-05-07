const { expect } = require("chai");
const { WasteHeatBoiler } = require("../src/services/waste-heat-boiler");
const { CardRequest, StreamConsumptionRequest, StreamGenerationRequest } = require("../src/lib/payloads/waste-heat-boiler");

describe('Waste Heat Boiler Apis', () => {
    const wasteHeatBoiler = WasteHeatBoiler;

    it('should make a Card Post request from Api', async () => {
        
        const cardPayload = CardRequest;
        
        const response = await wasteHeatBoiler.addCardsData(cardPayload);
        
        expect(response.status).to.equal(200);
    })

    it('should make a Stream Generation Post request from Api', async () => {
        
        const streamGenerationPayload = StreamGenerationRequest;
        
        const response = await wasteHeatBoiler.addStreamGeneration(streamGenerationPayload);
        
        expect(response.status).to.equal(200);
    })

    it('should make a Stream Consumption Post request from Api', async () => {
        
        const streamConsumptionPayload = StreamConsumptionRequest;
        
        const response = await wasteHeatBoiler.addStreamConsumption(streamConsumptionPayload);
        
        expect(response.status).to.equal(200);
    })
})