/**Solution to Problem 1
 * To know the minimal and the maximal difference between the two strings,
 *  if he changes all unreadable symbols to lower case Latin letters.
 */

/**
 * @author Anupam Mishra
 * @version 1.0
 * @Status Published
 * Input and Output Results
  	4
	a?c
	??b
	1 3
	???a
	???a
	0 3
	?abac
	aba?a
	3 5
	xyz
	xyz
	0 0
 */

/** Importing Files*/
import java.io.IOException;
import java.util.Scanner;

/** Public Class */
public class DifferenceSheetProblem {
	public static void main(String[] args) throws IOException {
		// A simple text scanner which can parse input to code
		Scanner sc = new Scanner(System.in);
		try {
			// Initialize number of test cases as t
			int t = sc.nextInt();
			// Iteration for number of test cases
			for (int i = 0; i < t; i++) {
				String n1 = sc.next();
				String n2 = sc.next();
				char[] s1 = n1.toCharArray();
				char[] s2 = n2.toCharArray();
				// Initialize Minimum and Maximum Counters
				int min = 0, max = 0;
				// Iteration to get each character
				for (int j = 0; j < s2.length; j++) {
					// Counting Maximum Difference
					if ((s1[j] != s2[j]) || (s1[j] == '?' && s2[j] == '?')) {
						max++;
					}
					// Counting Minimum Difference
					if (s1[j] != s2[j] && (s1[j] != '?' && s2[j] != '?')) {
						min++;
					}

				}
				// Printing output
				System.out.println(min + " " + max);
			}
		} finally {
			sc.close();

		}
	}

}
