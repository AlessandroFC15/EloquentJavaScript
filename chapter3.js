/**
 * Created by mystic_alex on 17/07/17.
 */

/* Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite
amount of new numbers can be produced. How would you write a function that, given a number, tries to find a sequence of
such additions and multiplications that produce that number? For example, the number 13 could be reached by first
multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.*/

function findSolution(number) {
    "use strict";

    if (number === 1) {
        return number;
    } else if (number < 1) {
        return null;
    } else {
        var path1 = findSolution(number - 5);

        if (path1) {
            return path1 + " + 5";
        } else {
            var path2 = findSolution(number / 3);

            if (path2) {
                return path2 + " * 3";
            }
        }

        return null;
    }
}