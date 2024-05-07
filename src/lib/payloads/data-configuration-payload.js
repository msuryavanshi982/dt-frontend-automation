const CreateRxRgDesignRequest = {
    "cloRecyleStreamPropyleneMode":"100",
    "cloRecyleStreamMSMode":"100",
    "rotPropyleneMode":"100",
    "rotMSMode":"100",
    "co2GenerationInRg":"100",
    "catalystLoss":"100",
    "catalystCirculationRate":"100",
    "catToOilRatio":"100",
    "regeneratorPrimaryInletCycloneVelocity":"100",
    "regeneratorSecondaryOutletCycloneVelocity":"100",
    "reactorPrimaryInletCycloneVelocity":"100",
    "reactorSecondaryOutletCycloneVelocity":"100",
    "heatLostThroughFlueGas":"100",
    "cokeBurntInRegenerator":"100",
    "heatOutWithRegeneratedCatalyst":"100",
    "heatInWithAir":"100",
    "heatInWithSpentCatalyst":"100",
    "heatGeneratedDueToReactions":"100",
    "differentialPressureAcrossSpentCatalystSlideValve":"100",
    "differentialPressureAcrossRiser":"100",
    "differentialPressureAcrossRegeneratedCatalystSlideValve":"100",
    "differentialPressureAcrossRegenerator":"100",
    "differentialPressureAcrossSpentCatalystStandpipe":"100",
    "differentialPressureAcrossStripper":"100",
    "differentialPressureAcrossRegeneratedCatalystStandpipe":"100"
};

const UpdateRxRgDesignRequest = {
    "cloRecyleStreamPropyleneMode":"100",
    "cloRecyleStreamMSMode":"100",
    "rotPropyleneMode":"100",
    "rotMSMode":"100",
    "co2GenerationInRg":"100",
    "catalystLoss":"100",
    "catalystCirculationRate":"100",
    "catToOilRatio":"100",
    "regeneratorPrimaryInletCycloneVelocity":"100",
    "regeneratorSecondaryOutletCycloneVelocity":"100",
    "reactorPrimaryInletCycloneVelocity":"100",
    "reactorSecondaryOutletCycloneVelocity":"100",
    "heatLostThroughFlueGas":"100",
    "cokeBurntInRegenerator":"100",
    "heatOutWithRegeneratedCatalyst":"100",
    "heatInWithAir":"100",
    "heatInWithSpentCatalyst":"100",
    "heatGeneratedDueToReactions":"100",
    "differentialPressureAcrossSpentCatalystSlideValve":"100",
    "differentialPressureAcrossRiser":"100",
    "differentialPressureAcrossRegeneratedCatalystSlideValve":"100",
    "differentialPressureAcrossRegenerator":"100",
    "differentialPressureAcrossSpentCatalystStandpipe":"100",
    "differentialPressureAcrossStripper":"100",
    "differentialPressureAcrossRegeneratedCatalystStandpipe":"100",
    "id": 1
};

const CreateBoilerDesignRequest = {
    "efficiency":"100",
    "steamGeneration":"100",
    "heatLossThroughStack":"100",
    "co2Emission":"100"
};

const UpdateBoilerDesignRequest = {
    "efficiency":"100",
    "steamGeneration":"100",
    "heatLossThroughStack":"100",
    "co2Emission":"100",
    "id": 1
};

const CreateMabDesignRequest = {
    "efficiency":"100",
    "powerConsumption":"100",
    "airFlow":"100",
    "airDischargePressure":"100",
    "steamConsumption":"100",
    "airDischargeTemp":"100"
};

const UpdateMabDesignRequest = {
    "efficiency":"100",
    "powerConsumption":"100",
    "airFlow":"100",
    "airDischargePressure":"100",
    "steamConsumption":"100",
    "airDischargeTemp":"100"
};

const CreateWGCDesignRequest = {
    "wetGasFlow":"100",
    "pressure":"100",
    "efficiency":"100",
    "powerConsumption":"100",
    "steamConsumption":"100",
    "interstageCoolerTemp":"100"
};

const UpdateWGCDesignRequest = {
    "wetGasFlow":"100",
    "pressure":"100",
    "efficiency":"100",
    "powerConsumption":"100",
    "steamConsumption":"100",
    "interstageCoolerTemp":"100",
    "id": 1
};

const CreateShutDownRequest = {
    "datetimeForShutdownOrStartup":"100",
    "reasonForShutdownOrStartup":"100",
    "reasonForShutdownOrStartup2":"100"
};

const UpdateShutDownRequest = {
    "datetimeForShutdownOrStartup":"100",
    "reasonForShutdownOrStartup":"100",
    "reasonForShutdownOrStartup2":"100",
    "id": 1
};

const CreatePriceDataRequest = {
    "vgo": "100",
    "indmax": "100",
    "cln": "100",
    "vgoDownstream": "100",
    "lpg": "100",
    "lpgDownstream": "100",
    "offGas": "100",
    "offGasDownstream": "100",
    "lcn": "100",
    "lcnDownstream": "100",
    "mcn": "100",
    "mcnDownstream": "100",
    "hcn": "100",
    "hcnDownstream": "100",
    "lco": "100",
    "lcoDownstream": "100",
    "clo": "100",
    "cloDownstream": "100"
};

const UpdatePriceDataRequest = {
    "vgo": "100",
    "indmax": "100",
    "cln": "100",
    "vgoDownstream": "100",
    "lpg": "100",
    "lpgDownstream": "100",
    "offGas": "100",
    "offGasDownstream": "100",
    "lcn": "100",
    "lcnDownstream": "100",
    "mcn": "100",
    "mcnDownstream": "100",
    "hcn": "100",
    "hcnDownstream": "100",
    "lco": "100",
    "lcoDownstream": "100",
    "clo": "100",
    "cloDownstream": "100",
    "id": 1
};

const CreateMaintenanceRequest = {
    "typeOfMaintenancePerformed":"100",
    "dateAndTimeOfMaintenanceActivity":"100",
    "equipmentOrComponentThatWasMaintained":"100",
    "issueOrObservationNotedDuringMaintenanceActivity":"100",
    "detailsOfAnyReplacementPartsUsed":"100",
    "labourHours":"100",
    "costOfMaintenanceActivity":"100"
};

const UpdateMaintenanceRequest = {
    "typeOfMaintenancePerformed":"100",
    "dateAndTimeOfMaintenanceActivity":"100",
    "equipmentOrComponentThatWasMaintained":"100",
    "issueOrObservationNotedDuringMaintenanceActivity":"100",
    "detailsOfAnyReplacementPartsUsed":"100",
    "labourHours":"100",
    "costOfMaintenanceActivity":"100",
    "id": 1
};

const CreateAccidentRequest = {
    "dateAndTimeOfIndicent":"100",
    "descriptionOfWhatHappened":"100",
    "locationWithinTheUnitWhereTheIncidentOccured":"100",
    "potentialOrActualImpact":"100",
    "actionTaken":"100",
    "followUpActionTaken":"100",
    "documentationofInjuries":"100"
};

const UpdateAccidentRequest = {
    "dateAndTimeOfIndicent":"100",
    "descriptionOfWhatHappened":"100",
    "locationWithinTheUnitWhereTheIncidentOccured":"100",
    "potentialOrActualImpact":"100",
    "actionTaken":"100",
    "followUpActionTaken":"100",
    "documentationofInjuries":"100",
    "id": 1
};

const CreateSafetyTrainingRequest = {
    "typeOfTrainingProvided":"100",
    "dateAndTimeOfTraining":"100",
    "durationOfTraining":"100",
    "locationOfTraining":"100",
    "instructorName":"100",
    "namesAndRolesOfAttendees":"100",
    "topicsCoveredDuringTraining":"100",
    "results":"100",
    "followUpActions":"100",
    "safetyAuditPeriod":"100",
    "safetyTrainingPeriod":"100"
};

const UpdateSafetyTrainingRequest = {
    "typeOfTrainingProvided":"100",
    "dateAndTimeOfTraining":"100",
    "durationOfTraining":"100",
    "locationOfTraining":"100",
    "instructorName":"100",
    "namesAndRolesOfAttendees":"100",
    "topicsCoveredDuringTraining":"100",
    "results":"100",
    "followUpActions":"100",
    "safetyAuditPeriod":"100",
    "safetyTrainingPeriod":"100",
    "id": 1
};

const CreateEnvironmentDataRequest = {
    "co2":"100",
    "sox":"100",
    "complianceScore":"100"
};

const UpdateEnvironmentDataRequest = {
    "co2":"100",
    "sox":"100",
    "complianceScore":"100",
    "id": 1
};

const CreateOtherDataRequest = {
    "ambientTemperature":"100",
    "relativeHumidity":"100",
    "co":"100",
    "dryness":"100"
};

const UpdateOtherDataRequest = {
    "ambientTemperature":"100",
    "relativeHumidity":"100",
    "co":"100",
    "dryness":"100",
    "id": 1
};

const CreateUnitPerformanceRequest = {
    "energyEfficiency":"100",
    "conversionForPMode":"100",
    "conversionForMSMode":"100",
    "unitUptime":"100",
    "capacityUtilization":"100",
    "vgoThrougput":"100",
    "cokerNapthaThrougput":"100",
    "totalThroughput":"100"
};

const UpdateUnitPerformanceRequest = {
    "energyEfficiency": "100",
    "conversionForPMode": "100",
    "conversionForMSMode": "100",
    "unitUptime": "100",
    "capacityUtilization": "100",
    "vgoThrougput": "100",
    "cokerNapthaThrougput": "100",
    "totalThroughput": "100",
    "id": 2
};

const CreateMonthlyTargetRequest = {
    "date":"2020-01-01",
    "throughputMT":"100",
    "profitabilityCr":"90"
};

const UpdateMonthlyTargetRequest = {
    "id": "1",
    "date":"2020-02-01",
    "throughputMT":"100",
    "profitabilityCr":"90"
};

const CreateMfDesignRequest = {
    "propylene_lpgYield":"100",
    "propylene_lcnYield":"100",
    "propylene_mcnYield":"100",
    "propylene_hcnYield":"100",
    "propylene_offGasYield":"100",
    "propylene_lcoYield":"100",
    "propylene_cloYield":"100",
    "propylene_cokeYield":"100",
    "propylene_propyleneYield":"100",
    "propylene_gasolineYield":"100",
    "propylene_tray36Temp":"100",
    "propylene_dewPoint":"100",
    "propylene_columnTopTemp":"100",
    "propylene_lcnDensity":"100",
    "propylene_mcnDensity":"100",
    "propylene_hcnDensity":"100",
    "propylene_lcoDensity":"100",
    "propylene_cloDensity":"100",
    "propylene_lcnSulphur":"100",
    "propylene_mcnSulphur":"100",
    "propylene_hcnSulphur":"100",
    "propylene_lcoSulphur":"100",
    "propylene_cloSulphur":"100",
    "propylene_lcnBenzeneContent":"100",
    "propylene_mcnBenzeneContent":"100",
    "gasoline_lpgYield":"100",
    "gasoline_lcnYield":"100",
    "gasoline_mcnYield":"100",
    "gasoline_hcnYield":"100",
    "gasoline_offGasYield":"100",
    "gasoline_lcoYield":"100",
    "gasoline_cloYield":"100",
    "gasoline_cokeYield":"100",
    "gasoline_propyleneYield":"100",
    "gasoline_gasolineYield":"100",
    "gasoline_tray36Temp":"100",
    "gasoline_dewPoint":"100",
    "gasoline_columnTopTemp":"100",
    "gasoline_lcnDensity":"100",
    "gasoline_mcnDensity":"100",
    "gasoline_hcnDensity":"100",
    "gasoline_lcoDensity":"100",
    "gasoline_cloDensity":"100",
    "gasoline_lcnSulphur":"100",
    "gasoline_mcnSulphur":"100",
    "gasoline_hcnSulphur":"100",
    "gasoline_lcoSulphur":"100",
    "gasoline_cloSulphur":"100",
    "gasoline_lcnBenzeneContent":"100",
    "gasoline_mcnBenzeneContent":"100",
    "vgo_Density":"100",
    "vgo_sulphur":"100",
    "vgo_finalBoilingPoint":"100",
    "vgo_uopkFactor":"100",
    "vgo_anilinePoint":"100",
    "vgo_ccr":"100",
    "cln_clnDensity":"100",
    "cln_sulphur":"100",
    "cln_finalBoilingPoint":"100"
};

const UpdateMFDesignRequest = {
    "id": 1,
    "propylene_lpgYield":"100",
    "propylene_lcnYield":"100",
    "propylene_mcnYield":"100",
    "propylene_hcnYield":"100",
    "propylene_offGasYield":"100",
    "propylene_lcoYield":"100",
    "propylene_cloYield":"100",
    "propylene_cokeYield":"100",
    "propylene_propyleneYield":"100",
    "propylene_gasolineYield":"100",
    "propylene_tray36Temp":"100",
    "propylene_dewPoint":"100",
    "propylene_columnTopTemp":"100",
    "propylene_lcnDensity":"100",
    "propylene_mcnDensity":"100",
    "propylene_hcnDensity":"100",
    "propylene_lcoDensity":"100",
    "propylene_cloDensity":"100",
    "propylene_lcnSulphur":"100",
    "propylene_mcnSulphur":"100",
    "propylene_hcnSulphur":"100",
    "propylene_lcoSulphur":"100",
    "propylene_cloSulphur":"100",
    "propylene_lcnBenzeneContent":"100",
    "propylene_mcnBenzeneContent":"100",
    "gasoline_lpgYield":"100",
    "gasoline_lcnYield":"100",
    "gasoline_mcnYield":"100",
    "gasoline_hcnYield":"100",
    "gasoline_offGasYield":"100",
    "gasoline_lcoYield":"100",
    "gasoline_cloYield":"100",
    "gasoline_cokeYield":"100",
    "gasoline_propyleneYield":"100",
    "gasoline_gasolineYield":"100",
    "gasoline_tray36Temp":"100",
    "gasoline_dewPoint":"100",
    "gasoline_columnTopTemp":"100",
    "gasoline_lcnDensity":"100",
    "gasoline_mcnDensity":"100",
    "gasoline_hcnDensity":"100",
    "gasoline_lcoDensity":"100",
    "gasoline_cloDensity":"100",
    "gasoline_lcnSulphur":"100",
    "gasoline_mcnSulphur":"100",
    "gasoline_hcnSulphur":"100",
    "gasoline_lcoSulphur":"100",
    "gasoline_cloSulphur":"100",
    "gasoline_lcnBenzeneContent":"100",
    "gasoline_mcnBenzeneContent":"100",
    "vgo_Density":"100",
    "vgo_sulphur":"100",
    "vgo_finalBoilingPoint":"100",
    "vgo_uopkFactor":"100",
    "vgo_anilinePoint":"100",
    "vgo_ccr":"100",
    "cln_clnDensity":"100",
    "cln_sulphur":"100",
    "cln_finalBoilingPoint":"100"
};

const CreateWHBDesignRequest = {
    "efficiency":"100",
    "flueGasFlow":"100",
    "coInFlueGas":"100",
    "heatLostThroughStack":"100",
    "steamGeneration":"100",
    "highPressureSteamConsumption":"100",
    "mediumPressureSteamConsumption":"100"
};

const UpdateWHBDesignRequest = {
    "id": 1,
    "efficiency": "100",
    "flueGasFlow": "100",
    "coInFlueGas": "100",
    "heatLostThroughStack": "100",
    "steamGeneration": "100",
    "highPressureSteamConsumption": "100",
    "mediumPressureSteamConsumption": "100"
};

const CreateAnamolyThresholdRequest = {
    "rxrgPressureSystem":100,
    "mabHealth":100,
    "mabEfficiency":100,
    "wgcHealth":100,
    "wgcEfficiency":100,
    "prtEfficiency":100
};

const UpdateAnamolyThresholdRequest = {
    "rxrgPressureSystem": 100,
    "mabHealth": 100,
    "mabEfficiency": 100,
    "wgcHealth": 100,
    "wgcEfficiency": 100,
    "prtEfficiency": 100,
    "id": 1
};

const CreatePrtDesignRequest = {
    "efficiency":"100",
    "powerGeneration":"100",
    "valveOpening":"100",
    "byPassValveOpening":"100",
    "flueGasFlow":"100",
    "flueGasInletPressure":"100"
};

const UpdatePrtDesignRequest = {
    "efficiency":"100",
    "powerGeneration":"100",
    "valveOpening":"100",
    "byPassValveOpening":"100",
    "flueGasFlow":"100",
    "flueGasInletPressure":"100",
    "id":1
};

module.exports = {
    CreateRxRgDesignRequest,
    UpdateRxRgDesignRequest,
    CreateBoilerDesignRequest,
    UpdateBoilerDesignRequest,
    CreateMabDesignRequest,
    UpdateMabDesignRequest,
    CreateWGCDesignRequest,
    UpdateWGCDesignRequest,
    CreateShutDownRequest,
    UpdateShutDownRequest,
    CreatePriceDataRequest,
    UpdatePriceDataRequest,
    CreateMaintenanceRequest,
    UpdateMaintenanceRequest,
    CreateAccidentRequest,
    UpdateAccidentRequest,
    CreateSafetyTrainingRequest,
    UpdateSafetyTrainingRequest,
    CreateEnvironmentDataRequest,
    UpdateEnvironmentDataRequest,
    CreateOtherDataRequest,
    UpdateOtherDataRequest,
    CreateUnitPerformanceRequest,
    UpdateUnitPerformanceRequest,
    CreateMonthlyTargetRequest,
    UpdateMonthlyTargetRequest,
    CreateMfDesignRequest,
    UpdateMFDesignRequest,
    CreateWHBDesignRequest,
    UpdateWHBDesignRequest,
    CreateAnamolyThresholdRequest,
    UpdateAnamolyThresholdRequest,
    CreatePrtDesignRequest,
    UpdatePrtDesignRequest,
}