/*Input: [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
    > 55 and > 7 = Senior
Output: ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/

// const openOrSenior = (data) => {
//     return data.map((input) => {
//         if(input[0] >= 55 && input[1] > 7) {
//             return "Senior"
//         } else {
//             return "Open"
//         }
//     })
// }

const openOrSenior = (data) => data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');
