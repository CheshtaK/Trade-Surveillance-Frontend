// Gobal data model for Trade

export class Trade {
  trade_id: number;
  trade_dt: string;
  trade_type: string;
  trader: string;
  security: string;
  security_type: string;
  quantity: number;
  price: number;
}
