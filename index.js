/**
 * Copyright 2020 Sai Prakash S.
 *
 * Licensed under the MIT License (the "License")
 * You may not use this file except in compliance with the License.
 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var crypto = require('crypto');

function generateRandPin(pinLength, callback) {    
    var asyncMode = (callback && typeof callback === 'function'),
        token = null;

    // Currently, PIN length is limited to 10 chars (practical limitation, as it covers most use cases)
    if(isNaN(pinLength) || pinLength < 1 || pinLength > 10) {
        if(asyncMode) {
            return callback("Node-Pin invalid argument error: PIN length must be a number between 1 and 10.", null);
        } else {
            throw(new Error("Node-Pin invalid argument error: PIN length must be a number between 1 and 10."));
        }
    }

    // Using 6 bytes to generate a Hex string with a numerical upper limit of 281474976710655 to allow for enough digits
    if(asyncMode) {
        crypto.randomBytes(6, function(err, buffer) {
            if(err) {
                return callback(err, null);
            }

            token = parseInt(buffer.toString('hex'), 16);    
            callback(null, token.toString().substr(0, pinLength));
          });
    } else {
        token = parseInt(crypto.randomBytes(6).toString('hex'), 16);
        
        if(token) {
            return token.toString().substr(0, pinLength);
        } else {
            throw(new Error("Node-Pin error: failed to generate a random buffer for the PIN code."));
        }        
    }
}

exports = module.exports = {generateRandPin: generateRandPin};