import axios from 'axios';
import { startAssertion } from '@simplewebauthn/browser';




export class LoginServiceKey {

    private url: string
    private verifyUrl: string

    constructor(url: string, verifyUrl: string) {
        this.url = url;
        this.verifyUrl = verifyUrl;
    }
    
    async call (username: {}) {
        
        const response = await axios.post( 
            this.url,
            username,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        );

            const registerResponse = await startAssertion(response.data);

            const attestationInfo = await axios.post(
                this.verifyUrl,
                {
                    registerResponse,
                    "username": username
                }
            );
    
            return attestationInfo.data;
        
        
        }
}
 
