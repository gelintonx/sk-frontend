import axios from 'axios';
import { startAttestation } from '@simplewebauthn/browser';




export class RegisterKeyService {

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

            const registerResponse = await startAttestation(response.data.response);

            const attestationInfo = await axios.post(
                this.verifyUrl,
                {
                    registerResponse,
                    "username": username
                }
            );
    
            console.log(attestationInfo.data);
        
        
        }
}
 
