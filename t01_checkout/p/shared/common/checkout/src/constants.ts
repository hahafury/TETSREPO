import { TGatewayType, TPlanType } from './types';

export const BRAINTREE = 'braintree';
export const STRIPE = 'stripe';

export const BRAINTREE_KEY = 'production_x6svx8k6_wnd8phj8q9zfhjvz';
export const STRIPE_KEY = 'pk_live_uxcppCCTgHju4xrvvCtI3Ay600KB74l09l';

type GatewayType = {
  [key in TGatewayType]?: {
    [key in TPlanType]?: {
      gatewayId: string;
    };
  };
};

export const gatewayConstants: GatewayType = {
  [BRAINTREE]: {
    default: {
      gatewayId: `mM2JaLr+QT8s6M65kFcXGEKidKl8qm2/VA3YitQY7T2YQG+esm6BU+OF5Qw=`
    },
    digital: {
      gatewayId:  `4aAkvOxZ22KwfPf4cQE3NnVDTdt/Q1BFzFNptZf+PFSKOOinFY5b6A==`
    },
  },
  [STRIPE]: {
    default: {
      gatewayId:  `U4b+tZFoNUsMWz6Jt27WpNnLS083VDUSuW0bFScoqLDzzObhpt+NOA==`
    },
    donation: {
      gatewayId:  `U4b+tZFoNUsMWz6Jt27WpNnLS083VDUSuW0bFScoqLDzzObhpt+NOA==`
    },
    epochtv: {
      gatewayId: `LbgsX4Adl5vatX6oC2rfNiBURQaHZvACJrexmjWlZIKsMKNtCqbR9FRrPP8=`
    },
    ae_magazine: {
      gatewayId: `e/GDEJqqqrsxoSknGTr98OqslEMUBTqp11OSsPhZensbEjMp53WWrOSXMXE=`
    }
  }
}

// braintree EET main: gw_BhPtPHRY6DBolCT3
// mM2JaLr+QT8s6M65kFcXGEKidKl8qm2/VA3YitQY7T2YQG+esm6BU+OF5Qw=

// braintree digital only: gw_16CPPCS520lN5Uj
// 4aAkvOxZ22KwfPf4cQE3NnVDTdt/Q1BFzFNptZf+PFSKOOinFY5b6A==

// stripe donation (default): gw_AzqP5nRynqav8Gk
// U4b+tZFoNUsMWz6Jt27WpNnLS083VDUSuW0bFScoqLDzzObhpt+NOA==

// stripe epochtv: gw_16CKdhSWTocK97vQ
// LbgsX4Adl5vatX6oC2rfNiBURQaHZvACJrexmjWlZIKsMKNtCqbR9FRrPP8=

// stripe ae_magazine: gw_Azqe5iSXEospzCfj
// e/GDEJqqqrsxoSknGTr98OqslEMUBTqp11OSsPhZensbEjMp53WWrOSXMXE=

// stripe rl_magazine: gw_AzZhWcSdtzjJrz5J
// w96IUgyHNM+db3oro1hnwGh9bffF/zi0xKNhQnLlRjR8HOo+Mw/0U2U2AJ0=