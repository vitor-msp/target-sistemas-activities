import { INVOICING_ENTRIES } from "./invoicing";

export type provinceInvoicing = {
  name: string;
  value: number;
};

type provincePercent = {
  name: string;
  percent: string;
};

class Invoicing {
  private totalBilling: number = 0;

  constructor(private readonly provinces: provinceInvoicing[]) {}

  public calculateTotalBilling(): void {
    const total = this.provinces.reduce<number>(
      (accumulator: number, current: provinceInvoicing) => {
        accumulator += current.value;
        return accumulator;
      },
      0
    );
    this.totalBilling = total;
  }

  public getPercentBillingByProvince(): provincePercent[] {
    const percents = this.provinces.map((province) => {
      const percent = (province.value / this.totalBilling) * 100;
      const provincePercent: provincePercent = {
        name: province.name,
        percent: `${percent.toFixed(2)}%`,
      };
      return provincePercent;
    });
    return percents;
  }
}

const invoicing = new Invoicing(INVOICING_ENTRIES);
invoicing.calculateTotalBilling();
console.log(
  `Percent billing by province: ${JSON.stringify(
    invoicing.getPercentBillingByProvince()
  )}`
);
