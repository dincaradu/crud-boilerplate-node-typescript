import chalk from 'chalk';
import { ALLOW_ERRORS, ALLOW_LOGS, ALLOW_WARNINGS } from '../../_config/env.config';

/**
 * Log() This function forwards the Log to the generic logging function
 * @param output Any (default: '') This is going to be logged in the console
 * @param invert Boolean (default: false) If set to true this flag colors the background instead of the text
 * @param bold Boolean (default: false) This flag makes the Chalk text bold.
 * @returns Nothing, but writes to logs through console.log
 */
export const Log = (output: any, invert = false, bold = false) => logging(output, invert, bold, chalk.blue, chalk.bgBlue, console.log, ALLOW_LOGS);

/**
 * Error() This function forwards the Error log to the generic logging function
 * @param output Any (default: '') This is going to be logged in the console
 * @param invert Boolean (default: false) If set to true this flag colors the background instead of the text
 * @param bold Boolean (default: false) This flag makes the Chalk text bold.
 * @returns Nothing, but writes to logs through console.log
 */
export const Start = (output: any, invert = false, bold = false) => logging(output, invert, bold, chalk.green, chalk.bgGreen, console.log, ALLOW_LOGS);

/**
 * Err() This function forwards the Error log to the generic logging function
 * @param output Any (default: '') This is going to be logged in the console
 * @param invert Boolean (default: false) If set to true this flag colors the background instead of the text
 * @param bold Boolean (default: false) This flag makes the Chalk text bold.
 * @returns Nothing, but writes to logs through console.error
 */
export const Err = (output: any, invert = false, bold = false) => logging(output, invert, bold, chalk.red, chalk.bgRed, console.error, ALLOW_ERRORS);

/**
 * Warn() This function forwards the Warning log to the generic logging function
 * @param output Any (default: '') This is going to be logged in the console
 * @param invert Boolean (default: false) If set to true this flag colors the background instead of the text
 * @param bold Boolean (default: false) This flag makes the Chalk text bold.
 * @returns Nothing, but writes to logs through console.warn
 */
export const Warn = (output: any, invert = false, bold = false) => logging(output, invert, bold, chalk.yellow, chalk.bgYellow, console.warn, ALLOW_WARNINGS);


/**
 * This is a generic logging function that personalizes or disables the output
 * @param output Any (default: '') This is going to be logged in the console
 * @param invert Boolean (default: false) If set to true this flag colors the background instead of the text
 * @param bold Boolean (default: false) This flag makes the Chalk text bold.
 * @param color Chalk Color (default: Green) This is the color the text logged in the console.
 * @param bgColor Chalk Color (default: Green) This is the color of the background of the text logged in the console.
 * @param tool Function (default: console.log) This is the logging functionality used to output the logs.
 * @param doThis Boolean (default: FALSE) This flag prevents the output if it's TRUE.
 * @returns
 */
function logging (output: any, invert = false, bold = false, color = chalk.green, bgColor = chalk.bgGreen, tool = console.log, doThis = false) {
  if (!doThis) return;

  if (bold) output = chalk.bold(output);
  output = (invert ? bgColor(output) : color(output)) ;

  tool(output);
};
