const CardRequest = {
    "shift":"Day", 
    "granularity":"Hourly", 
    "startDateTime":null, 
    "endDateTime":null
};

const CardResponse = {
    "status": 200,
    "message": "Cards Data Fetch Successful",
    "data": {
        "data": {
            "designData": {
                "id": 0,
                "airFlow": "392.45",
                "airDischargePressure": "2.77",
                "efficiency": "100",
                "powerConsumption": "100",
                "steamConsumption": "162",
                "airDischargeTemp": "226",
                "timestamp": "2024-01-03T10:41:29.000Z",
                "mabHealth": null,
                "mabTimeToFailureInNext30Days": null,
                "monthlyUptime": 100
            },
            "healthSingleValue": [
                {
                    "mabHealth": 63.15
                }
            ],
            "health10Value": [
                {
                    "mabHealth": [
                        63.15,
                        63.13,
                        63.11,
                        63.1,
                        63.08,
                        63.07,
                        63.08,
                        63.07
                    ],
                    "timestamp": [
                        "2022-04-29 13:00:00",
                        "2022-04-29 12:00:00",
                        "2022-04-29 11:00:00",
                        "2022-04-29 10:00:00",
                        "2022-04-29 09:00:00",
                        "2022-04-29 08:00:00",
                        "2022-04-29 07:00:00",
                        "2022-04-29 06:00:00"
                    ]
                }
            ],
            "efficiencySingleValue": [
                {
                    "mabEfficiency": 62.17
                }
            ],
            "efficiency10Value": [
                {
                    "mabEfficiency": [
                        62.17,
                        62.42,
                        62.34,
                        62.22,
                        62.19,
                        62.03,
                        62.03,
                        61.9
                    ],
                    "mabDesignEfficiency": [
                        83.05,
                        83.09,
                        82.92,
                        82.85,
                        82.74,
                        82.33,
                        82,
                        82.03
                    ],
                    "timestamp": [
                        "2022-04-29 13:00:00",
                        "2022-04-29 12:00:00",
                        "2022-04-29 11:00:00",
                        "2022-04-29 10:00:00",
                        "2022-04-29 09:00:00",
                        "2022-04-29 08:00:00",
                        "2022-04-29 07:00:00",
                        "2022-04-29 06:00:00"
                    ]
                }
            ],
            "timetoFailureSingleValue": [
                {
                    "mabTimeToFailureInNext30Days": null
                }
            ],
            "timetoFailure10Value": [
                {
                    "mabTimeToFailureInNext30Days": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "timestamp": [
                        "2022-04-29 13:00:00",
                        "2022-04-29 12:00:00",
                        "2022-04-29 11:00:00",
                        "2022-04-29 10:00:00",
                        "2022-04-29 09:00:00",
                        "2022-04-29 08:00:00",
                        "2022-04-29 07:00:00",
                        "2022-04-29 06:00:00"
                    ]
                }
            ],
            "powerConsumptionSingleValue": [
                {
                    "mabPowerConsumptionMW": 22.75
                }
            ],
            "powerConsumption10Value": [
                {
                    "mabPowerConsumptionMW": [
                        22.75,
                        22.7,
                        22.77,
                        22.81,
                        22.83,
                        22.96,
                        23.01,
                        23.01
                    ],
                    "timestamp": [
                        "2022-04-29 13:00:00",
                        "2022-04-29 12:00:00",
                        "2022-04-29 11:00:00",
                        "2022-04-29 10:00:00",
                        "2022-04-29 09:00:00",
                        "2022-04-29 08:00:00",
                        "2022-04-29 07:00:00",
                        "2022-04-29 06:00:00"
                    ]
                }
            ],
            "steamConsumptionSingleValue": [
                {
                    "mabSteamConsumption": 151.09
                }
            ],
            "steamConsumption10Value": [
                {
                    "mabSteamConsumption": [
                        151.09,
                        154.3,
                        152.77,
                        153.16,
                        151.05,
                        151.15,
                        151.28,
                        151.02
                    ],
                    "timestamp": [
                        "2022-04-29 13:00:00",
                        "2022-04-29 12:00:00",
                        "2022-04-29 11:00:00",
                        "2022-04-29 10:00:00",
                        "2022-04-29 09:00:00",
                        "2022-04-29 08:00:00",
                        "2022-04-29 07:00:00",
                        "2022-04-29 06:00:00"
                    ]
                }
            ],
            "airDischargeTemperatureSingleValue": [
                {
                    "mabAirDischargeTemperature": 191.56
                }
            ],
            "airDischargeTemperature10Value": [
                {
                    "mabAirDischargeTemperature": [
                        191.56,
                        191.95,
                        192.08,
                        191.88,
                        191.48,
                        191.14,
                        190.61,
                        190
                    ],
                    "timestamp": [
                        "2022-04-29 13:00:00",
                        "2022-04-29 12:00:00",
                        "2022-04-29 11:00:00",
                        "2022-04-29 10:00:00",
                        "2022-04-29 09:00:00",
                        "2022-04-29 08:00:00",
                        "2022-04-29 07:00:00",
                        "2022-04-29 06:00:00"
                    ]
                }
            ],
            "airFlowSingleValue": [
                {
                    "mabAirFlow": 416.69
                }
            ],
            "airFlow10Value": [
                {
                    "mabAirFlow": [
                        416.69,
                        416.54,
                        417.23,
                        417.49,
                        417.88,
                        419.45,
                        420.62,
                        420.47
                    ],
                    "timestamp": [
                        "2022-04-29 13:00:00",
                        "2022-04-29 12:00:00",
                        "2022-04-29 11:00:00",
                        "2022-04-29 10:00:00",
                        "2022-04-29 09:00:00",
                        "2022-04-29 08:00:00",
                        "2022-04-29 07:00:00",
                        "2022-04-29 06:00:00"
                    ]
                }
            ],
            "airDischargePressureSingleValue": [
                {
                    "mabAirDischargePressure": 2.97
                }
            ],
            "airDischargePressure10Value": [
                {
                    "mabAirDischargePressure": [
                        2.97,
                        2.97,
                        2.97,
                        2.97,
                        2.97,
                        2.97,
                        2.98,
                        2.98
                    ],
                    "timestamp": [
                        "2022-04-29 13:00:00",
                        "2022-04-29 12:00:00",
                        "2022-04-29 11:00:00",
                        "2022-04-29 10:00:00",
                        "2022-04-29 09:00:00",
                        "2022-04-29 08:00:00",
                        "2022-04-29 07:00:00",
                        "2022-04-29 06:00:00"
                    ]
                }
            ]
        },
        "flag": true
    }
};

const EfficiencyRequest = {
    "shift":"Day", 
    "granularity":"Hourly", 
    "startDateTime":null, 
    "endDateTime":null
};

const HealthAnamolyRequest = {
    "shift":"Day", 
    "granularity":"Hourly", 
    "startDateTime":null, 
    "endDateTime":null
};

const TripTagsRequest = {
    "shift":"Day", 
    "granularity":"Hourly", 
    "startDateTime":null, 
    "endDateTime":null
};

module.exports = { CardRequest, CardResponse, EfficiencyRequest, HealthAnamolyRequest, TripTagsRequest}