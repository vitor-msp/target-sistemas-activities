import { ui } from "./utils/ui";

class StringReverse {
  constructor(private readonly input: string) {}

  public reverse(): string {
    const inputList: string[] = this.input.split("");
    const reversedInputList: string[] = [];
    for (let index = inputList.length; index--; index >= 0) {
      const currentCaracter: string = inputList[index];
      reversedInputList.push(currentCaracter);
    }
    return reversedInputList.join("");
  }
}

abstract class StringReverseApp {
  public static run(): void {
    const USER_QUESION = `Enter a string to reverse: `;
    ui.question(USER_QUESION, (input: string) => {
      const reversedInput = new StringReverse(input).reverse();
      console.log(`Reversed input: ${reversedInput}`);
      ui.close();
    });
  }
}
StringReverseApp.run();
