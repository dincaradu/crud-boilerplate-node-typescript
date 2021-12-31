import chalk from 'chalk';
import { ALLOW_ERRORS, ALLOW_LOGS, ALLOW_WARNINGS } from '../config/env.config';

/**
 *
 * @param output What do you want to output to console.log in blue?
 * @param invert Boolean value, default is false, for inverting bg and text colors
 * @param bold Boolean value, default is false
 * @returns Nothing, but writes to logs through console.log
 */
 export const Log = (output: any, invert = false, bold = false) => logging(output, invert, bold, chalk.blue, chalk.bgBlue, console.log, ALLOW_LOGS);
 /**
  *
  * @param output What do you want to output to console.log in green?
  * @param invert Boolean value, default is false, for inverting bg and text colors
  * @param bold Boolean value, default is false
  * @returns Nothing, but writes to logs through console.log
  */
 export const Start = (output: any, invert = false, bold = false) => logging(output, invert, bold, chalk.green, chalk.bgGreen, console.log, ALLOW_LOGS);

/**
 *
 * @param output What do you want to output to console.error?
 * @param invert Boolean value, default is false, for inverting bg and text colors
 * @param bold Boolean value, default is false
 * @returns Nothing, but writes to logs through console.error
 */
export const Error = (output: any, invert = false, bold = false) => logging(output, invert, bold, chalk.red, chalk.bgRed, console.error, ALLOW_ERRORS);

/**
 *
 * @param output What do you want to output to console.warn?
 * @param invert Boolean value, default is false, for inverting bg and text colors
 * @param bold Boolean value, default is false
 * @returns Nothing, but writes to logs through console.warn
 */
export const Warn = (output: any, invert = false, bold = false) => logging(output, invert, bold, chalk.yellow, chalk.bgYellow, console.warn, ALLOW_WARNINGS);



function logging (output: any, invert = false, bold = false, color = chalk.green, bgColor = chalk.bgGreen, tool = console.log, doThis = false) {
  if (!doThis) return;

  if (bold) output = chalk.bold(output);
  output = (invert ? bgColor(output) : color(output)) ;

  tool(output);
};