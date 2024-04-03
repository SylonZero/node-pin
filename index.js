/**
 * Copyright 2024 Sai Prakash S.
 *
 * Licensed under the MIT License (the "License")
 * You may not use this file except in compliance with the License.
 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const crypto = require('crypto');

/**
 * Generates a secure random PIN of specified length.
 * @param {number} pinLength - The desired length of the PIN.
 * @returns {Promise<string>} A promise that resolves to the generated PIN.
 */
function generateRandPin(pinLength) {
    return new Promise((resolve, reject) => {
        // Validate pinLength is within the desired range
        if (!Number.isInteger(pinLength) || pinLength < 1 || pinLength > 10) {
            reject(new Error("PIN length must be an integer between 1 and 10."));
            return;
        }

        crypto.randomBytes(6, (err, buffer) => {
            if (err) {
                reject(new Error("Failed to generate random bytes."));
                return;
            }

            let pin = parseInt(buffer.toString('hex'), 16).toString();
            // Ensure the PIN is not shorter than the desired length due to leading zeros
            if (pin.length < pinLength) {
                pin = pin.padStart(pinLength, '0');
            }
            resolve(pin.substring(0, pinLength));
        });
    });
}

module.exports = { generateRandPin };
