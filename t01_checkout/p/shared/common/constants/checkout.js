export const BRAINTREE = 'braintree';
export const STRIPE = 'stripe';

export const gatewayConstants = {
  [BRAINTREE]: {
    default: {
      gatewayId: `mM2JaLr+QT8s6M65kFcXGEKidKl8qm2/VA3YitQY7T2YQG+esm6BU+OF5Qw=`,
      apiKey: 'production_x6svx8k6_wnd8phj8q9zfhjvz'
    },
    digital: {
      gatewayId:  `4aAkvOxZ22KwfPf4cQE3NnVDTdt/Q1BFzFNptZf+PFSKOOinFY5b6A==`,
      apiKey: 'production_x6svx8k6_wnd8phj8q9zfhjvz'
    },
  },
  [STRIPE]: {
    default: {
      gatewayId:  `U4b+tZFoNUsMWz6Jt27WpNnLS083VDUSuW0bFScoqLDzzObhpt+NOA==`,
      apiKey: 'pk_live_uxcppCCTgHju4xrvvCtI3Ay600KB74l09l'
    },
    donation: {
      gatewayId:  `ht+nMIUJ4VYtcGA3UZIOEonARToAOusoLYKFbJB8snSJQvYZwN7DlWrcUUM=`,
      apiKey: 'pk_live_51LfVQGDcPavdx8DIlmHXlhIzhPqEEjm0odQi60tWJZKl4Dyhnd9H7askL8mt54YaCKDnZ13TfkuoTMTqBTNouS0T00G2tI6uY3'
    },
    epochtv: {
      gatewayId: `LbgsX4Adl5vatX6oC2rfNiBURQaHZvACJrexmjWlZIKsMKNtCqbR9FRrPP8=`,
      apiKey: 'pk_live_51JccnFGaWtyiMidcEWvuKEUX3t7LA1VygOmmM2BmeJHYr9famWbtMoYmMaQBbHIORl8rUjYPGePOMhJaAlnffWuG00bWd1lQgq'
    },
    ae_magazine: {
      gatewayId: `e/GDEJqqqrsxoSknGTr98OqslEMUBTqp11OSsPhZensbEjMp53WWrOSXMXE=`,
      apiKey: 'pk_live_51InW28ADjJTk0TaV87IvFu4Jx9Sa57432FHsjspUaD4bOBfcHTePYMIr5PrfO3A6EHqXqOSSWIY7qEULPNFsZKMg00WiEpfatW'
    }
  }
}

export const getGatewayId = (gateway, plan_type) => {
  if (!gatewayConstants[gateway][plan_type]) {
      plan_type = 'default';
  }

  const gatewayId = encodeURIComponent(gatewayConstants[gateway][plan_type].gatewayId);

  return gatewayId;
}

export const getGatewayKey = (gateway, plan_type) => {
  if (!gatewayConstants[gateway][plan_type]) {
      plan_type = 'default';
  }

  const gatewayKey = gatewayConstants[gateway][plan_type].apiKey;

  return gatewayKey;
}

// braintree EET main: gw_BhPtPHRY6DBolCT3
// mM2JaLr+QT8s6M65kFcXGEKidKl8qm2/VA3YitQY7T2YQG+esm6BU+OF5Qw=

// braintree digital only: gw_16CPPCS520lN5Uj
// 4aAkvOxZ22KwfPf4cQE3NnVDTdt/Q1BFzFNptZf+PFSKOOinFY5b6A==

// stripe default: gw_AzqP5nRynqav8Gk
// U4b+tZFoNUsMWz6Jt27WpNnLS083VDUSuW0bFScoqLDzzObhpt+NOA==

// stripe epochtv: gw_16CKdhSWTocK97vQ
// LbgsX4Adl5vatX6oC2rfNiBURQaHZvACJrexmjWlZIKsMKNtCqbR9FRrPP8=

// stripe ae_magazine: gw_Azqe5iSXEospzCfj
// e/GDEJqqqrsxoSknGTr98OqslEMUBTqp11OSsPhZensbEjMp53WWrOSXMXE=

// stripe rl_magazine: gw_AzZhWcSdtzjJrz5J
// w96IUgyHNM+db3oro1hnwGh9bffF/zi0xKNhQnLlRjR8HOo+Mw/0U2U2AJ0=

// stripe donation: gw_AzZnJ8TNNlWZe6MA
// ht+nMIUJ4VYtcGA3UZIOEonARToAOusoLYKFbJB8snSJQvYZwN7DlWrcUUM=