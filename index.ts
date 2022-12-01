import { calculateSum as question1 } from "./question-1";
import { init as question2 } from "./question-2";
import { InvoicingApp as Question3 } from "./question-3/index";
import { InvoicingApp as Question4 } from "./question-4/index";
import { StringReverseApp as Question5 } from "./question-5";
import { prompt } from "./utils/ui";

(() => {
  const USER_QUESION = `Enter a number of activity to execute (1, 2, 3, 4 or 5, or any other character to exit): `;
  let input = "";

  while (true) {
    input = prompt(USER_QUESION);
    switch (input) {
      case "1":
        console.log(`\n============= Question 1 =============\n`);
        question1();
        console.log(`\n`);
        break;
        
      case "2":
        console.log(`\n============= Question 2 =============\n`);
        question2();
        console.log(`\n`);
        break;
        
      case "3":
        console.log(`\n============= Question 3 =============\n`);
        Question3.run();
        console.log(`\n`);
        break;
        
      case "4":
        console.log(`\n============= Question 4 =============\n`);
        Question4.run();
        console.log(`\n`);
        break;
        
      case "5":
        console.log(`\n============= Question 5 =============\n`);
        Question5.run();
        console.log(`\n`);
        break;

      default:
        console.log(`\n============= Bye Bye =============\n`);
        return;
    }
  }
})();
