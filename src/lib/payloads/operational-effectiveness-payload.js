const EfficiencyRequest = {
    "shift":"Day", 
    "granularity":"Hourly", 
    "startDateTime":null, 
    "endDateTime":null
}

const EfficiencyResponse = {
    "status": 200,
    "message": "Operational Effectiveness Energy Efficiency Fetch Successful",
    "data": {
        "data": {
            "energyEfficiency": [{
                "energyEfficiency": "5.56",
                "percentDeviation": null
            }],
            "energyEfficiencyDev": [{
                "energyEfficiencyDev": [5.56, 5.14, 5.2, 5.16, 5.32, 5.66, 5.21, 5.04],
                "timestamp": ["2022-04-28 06:00:00", "2022-04-27 06:00:00", "2022-04-26 06:00:00", "2022-04-25 06:00:00", "2022-04-24 06:00:00", "2022-04-23 06:00:00", "2022-04-22 06:00:00", "2022-04-21 06:00:00"]
            }]
        },
        "flag": true
    }
};

const ProfitabilityRequest = {
    "shift":"Day", 
    "granularity":"Hourly", 
    "startDateTime":null, 
    "endDateTime":null
};

const ProfitabilityResponse = {
    "status": 200,
    "message": "Operational Effectiveness Profitability Fetch Successful",
    "data": {
        "data": {
            "profitability": [
                {
                    "profitability": 1947.34,
                    "percentDeviation": -10.12
                }
            ],
            "profitabilityDev": [
                {
                    "profitabilityDev": [
                        1947.34,
                        2166.53,
                        2111.3,
                        2046.46,
                        1844.59,
                        2195.14,
                        2054.35,
                        2086.7
                    ],
                    "timestamp": [
                        "2022-04-28 06:00:00",
                        "2022-04-27 06:00:00",
                        "2022-04-26 06:00:00",
                        "2022-04-25 06:00:00",
                        "2022-04-24 06:00:00",
                        "2022-04-23 06:00:00",
                        "2022-04-22 06:00:00",
                        "2022-04-21 06:00:00"
                    ]
                }
            ]
        },
        "flag": true
    }
};

const PercentageConversionRequest = {
    "shift":"Day", 
    "granularity":"Hourly", 
    "startDateTime":null, 
    "endDateTime":null
};

const ComplianceScoreRequest = {
    "shift":"Day", 
    "granularity":"Hourly", 
    "startDateTime":null, 
    "endDateTime":null
};

const UnitUptimeRequest = {
    "shift":"Day", 
    "granularity":"Hourly", 
    "startDateTime":null, 
    "endDateTime":null
};

const YieldPercentageRequest = {
    "shift":"Day", 
    "granularity":"Hourly", 
    "startDateTime":null, 
    "endDateTime":null
};

module.exports = {
    EfficiencyRequest,
    EfficiencyResponse,
    ProfitabilityRequest,
    ProfitabilityResponse,
    PercentageConversionRequest,
    ComplianceScoreRequest,
    UnitUptimeRequest,
    YieldPercentageRequest,
};