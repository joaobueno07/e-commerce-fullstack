export type CheckoutTabs = "userInfo" | "addressInfo" | "paymentInfo";

export type StepsPermission = Record<CheckoutTabs, { locked: boolean }>;
