import { ActiveCase } from "../types/types";
export const SEED: ActiveCase[] = [
  { id: "1", accountName: "Vertex Capital LTD", country: "UK", type: "Bank Account", openFee: "$200", incomingFee: "0.3%", outgoingFee: "0.5%", expTime: "5–7 days", status: "Applied" },
{ id: "2", accountName: "NovaPay s.r.o.", country: "CZ", type: "Acquiring Account", openFee: "$0", incomingFee: "1.2%", outgoingFee: "1.0%", expTime: "2–4 days", status: "In process" },
{ id: "3", accountName: "Astra Fintech", country: "LT", type: "Alternative Account", openFee: "$50", incomingFee: "0.2%", outgoingFee: "0.4%", expTime: "24–48h", status: "Reviewed" },
{ id: "4", accountName: "CryptoFlow", country: "EE", type: "Crypto Account", openFee: "$100", incomingFee: "0.15%", outgoingFee: "0.25%", expTime: "1–3 days", status: "Declined" },
{ id: "5", accountName: "Vertex Holdings", country: "CY", type: "Bank Account", openFee: "$300", incomingFee: "0.35%", outgoingFee: "0.55%", expTime: "7–10 days", status: "In process" },
  { id: "6", accountName: "Iberbanco-Business", country: "France", type: "Bank Account", openFee: "$5,000", incomingFee: "0.3% + 20EUR/0.2% + 20 GBP", outgoingFee: "0.3% + 20EUR/0.2% + 20 GBP", expTime: "3 Biz. Days", status: "Reviewed" },
  { id: "7", accountName: "Iberbanco-Business", country: "France", type: "Bank Account", openFee: "$5,000", incomingFee: "0.3% + 20EUR/0.2% + 20 GBP", outgoingFee: "0.3% + 20EUR/0.2% + 20 GBP", expTime: "3 Biz. Days", status: "Declined" },
  { id: "8", accountName: "Iberbanco-Business", country: "France", type: "Bank Account", openFee: "$5,000", incomingFee: "0.3% + 20EUR/0.2% + 20 GBP", outgoingFee: "0.3% + 20EUR/0.2% + 20 GBP", expTime: "3 Biz. Days", status: "Applied" },
]; 
