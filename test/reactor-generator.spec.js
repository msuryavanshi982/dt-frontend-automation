const { expect } = require("chai");
const { ReactorGenerator } = require("../src/services/reactor-generator");
const { CardRequest, CycloneVelocityRequest, EnergyRequest, PressureSystemRequest } = require("../src/lib/payloads/reactor-generator-payload");

describe('Reactor Generator Apis', () => {
    const reactorGenerator = ReactorGenerator;

    it('should make a Card Post request from Api', async () => {
        
        const cardPayload = CardRequest;
        
        const response = await reactorGenerator.addCardsData(cardPayload);
        
        expect(response.status).to.equal(200);
    })

    it('should make a Cyclone Velocity Post request from Api', async () => {
        
        const cycloneVelocityPayload = CycloneVelocityRequest;
        
        const response = await reactorGenerator.addCycloneVelocity(cycloneVelocityPayload);
        
        expect(response.status).to.equal(200);
    })

    it('should make a Energy Post request from Api', async () => {
        
        const energyPayload = EnergyRequest;
        
        const response = await reactorGenerator.addEnergy(energyPayload);
        
        expect(response.status).to.equal(200);
    })

    it('should make a Pressure System Anamoly Post request from Api', async () => {
        
        const pressureSystemPayload = PressureSystemRequest;
        
        const response = await reactorGenerator.addPressureSystemAnamoly(pressureSystemPayload);
        
        expect(response.status).to.equal(200);
    })
})