import fs from 'fs';

/**
 * Appends data to the given file.
 * @returns void
 * @param {string} filename - Filename to append the data
 * @param {string} data - Data to append
 * @param {string} message - Optional error Message
 */
export function appendToLog(filename: string, data: string, message?: string) {
  fs.appendFile(filename, data, {encoding: 'utf-8'}, function (err) {
    if (err) {
      console.log(message ? message : err);
      throw err;
    }
  });
}

/**
 * Appends data to the success log if the passed condition is true.
 * Otherwise the data is written to the error log
 * @param {string} folder - Folder where the log should be saved
 * @param {string} filename - Logfile name
 * @param {string} fileData - Data to write
 * @param {boolean} condition - If true write to success log, else write to error log
 * @returns void
 */
export function conditionalWriteToLog(
  folder: string,
  filename: string,
  fileData: string,
  condition: boolean
): void {
  if (!condition) {
    appendToLog(
      folder + `error\\${filename.replaceAll(/\s/g, '_')}_error.log`,
      fileData
    );
  } else {
    appendToLog(
      folder + `success\\${filename.replaceAll(/\s/g, '_')}_success.log`,
      fileData
    );
  }
}

/**
 * Try or catch and log the function passed as argument
 * @param {string} folder - Folder where the log should be saved
 * @param {string} filename - Logfile name
 * @param {any} callback - Callback to execute
 * @param {string} message - Optional error Message
 * @returns Promise<any>
 */
export async function tryCatchAndLog(
  folder: string,
  filename: string,
  callback: any,
  message?: string
): Promise<any> {
  try {
    return await callback;
  } catch (err: any) {
    console.error(message ? message : err);
    conditionalWriteToLog(folder, filename, message ? message : err, false);
    return false;
  }
}

/**
 * Try or catch and log the function passed as argument
 * Throws an error if the function passed as callback fails
 * @param {string} folder - Folder where the log should be saved
 * @param {string} filename - Logfile name
 * @param {any} callback - Callback to execute
 * @param {string} message - Optional error Message
 * @returns Promise<any>
 */
export async function tryCatchAndLogThrow(
  folder: string,
  filename: string,
  callback: any,
  message?: string
  ): Promise<any> {
  try {
    return await callback;
  } catch (err: any) {
    console.error(message ? message : err);
    conditionalWriteToLog(folder, filename, message ? message : err, false);
    throw err;
  }
}