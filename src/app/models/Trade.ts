// Gobal data model for Trade

export class Trade {
  timestamp: string;
  type: string;
  traderName: string;
  securityName: string;
  quantity: number;
  price: number;
  brokerName: string;
}
