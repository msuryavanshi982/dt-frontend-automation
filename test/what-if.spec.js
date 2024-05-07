// const expect =  require("chai");
// const { WhatIf } = require("../src/services/what-if");
// const { WhatIfRequest } = require("../src/lib/payloads/what-if-payload");

// describe('What if Apis', () => {
//     const whatIf = WhatIf;

//     it('should make a What If request from Api', async () => {

//         const whatIfPayload = WhatIfRequest;
        
//         const response = await whatIf.addWhatIfGetInitials(whatIfPayload);
        
//         expect(response.status).to.equal(200);
//         expect(response.data.message).to.equal('What If Get Initials Data Fetch Successfull');
//         expect(response.data).to.be.an('object');
//         expect(response.data.data.data).to.be.an('array');
//         expect(response.data.data.data.length).to.equal(1);

//         const responseData = response.data.data.data[0];
//         expect(responseData.index).to.be.a('number');
//         expect(responseData.timestamp).to.be.a('string');
//         expect(responseData.throughputVGO).to.be.a('number');

//         expect(responseData).to.have.property('rot');
//         expect(responseData).to.have.property('cot');
//         expect(responseData).to.have.property('reactorStreamFlow');
//     });
// });