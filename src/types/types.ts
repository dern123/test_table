export type CaseStatus = "Applied" | "In process" | "Reviewed" | "Declined";
export type CaseType = "Bank Account" | "Acquiring Account" | "Alternative Account" | "Crypto Account";
export type ActiveCase = {
id: string;
accountName: string;
country: string;
type: CaseType;
openFee: string;
incomingFee: string;
outgoingFee: string;
expTime: string;
status: CaseStatus;
};