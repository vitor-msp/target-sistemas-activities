import { INVOICING_ENTRIES } from "./invoicing";

export type dailyBilling = {
  day: number;
  value: number;
};

class Invoicing {
  private billingAverage: number = 0;

  constructor(private readonly entries: dailyBilling[]) {}

  private sortBillings(): void {
    this.entries.sort((a, b) => a.value - b.value);
  }

  public getHighestBilling(): dailyBilling {
    this.sortBillings();
    return this.entries[this.entries.length - 1];
  }

  public getLowestBilling(): dailyBilling {
    this.sortBillings();
    return this.entries[0];
  }

  private filterNonNullBillings(): dailyBilling[] {
    return this.entries.filter((entry) => entry.value > 0);
  }

  public calculateBillingAverage(): void {
    const filteredBillings = this.filterNonNullBillings();
    const count = filteredBillings.length;
    const total: number = filteredBillings.reduce<number>(
      (accumulator: number, current: dailyBilling) => {
        accumulator += current.value;
        return accumulator;
      },
      0
    );
    this.billingAverage = total / count;
  }

  public getCountDaysWithAboveAverageBilling(): number {
    const daysWithAboveAverageBilling = this.entries.filter(
      (entry) => entry.value > this.billingAverage
    );
    return daysWithAboveAverageBilling.length;
  }
}

export abstract class InvoicingApp {
  public static run(): void {
    const invoicing = new Invoicing(INVOICING_ENTRIES);
    console.log(
      `The lowest billing: ${JSON.stringify(invoicing.getLowestBilling())}`
    );
    console.log(
      `The highest billing: ${JSON.stringify(invoicing.getHighestBilling())}`
    );
    invoicing.calculateBillingAverage();
    console.log(
      `The count of the days with above average billing: ${JSON.stringify(
        invoicing.getCountDaysWithAboveAverageBilling()
      )}`
    );
  }
}
