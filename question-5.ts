import { prompt } from "./utils/ui";

class StringReverse {
  constructor(private readonly input: string) {}

  public reverse(): string {
    const inputList: string[] = this.input.split("");
    const reversedInputList: string[] = [];
    for (let index = inputList.length; index--; index >= 0) {
      const currentCharacter: string = inputList[index];
      reversedInputList.push(currentCharacter);
    }
    return reversedInputList.join("");
  }
}

export abstract class StringReverseApp {
  public static run(): void {
    const USER_QUESION = `Enter a string to reverse: `;
    const input: string = prompt(USER_QUESION);
    const reversedInput = new StringReverse(input).reverse();
    console.log(`Reversed input: ${reversedInput}`);
  }
}
