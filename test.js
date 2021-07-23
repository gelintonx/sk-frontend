/**
 * 
 * import axios from 'axios';




export class RegisterKeyService {

    private url: string
    private verifyUrl: string

    constructor(url: string, verifyUrl: string) {
        this.url = url;
        this.verifyUrl = verifyUrl;
    }
    
    async call () {
        
        const response = await axios.get(
            this.url
        );

        console.log(response.data.response)
        const publicKeyCredentialCreationOptions = {
            challenge: Uint8Array.from(
                response.data.response.challenge, c => c.toString().charCodeAt(0)
            ),
            rp: {
                name: "Sk Example",
                id: response.data.response.rpId
            },
            user: {
                name: 'user',
                displayName: 'user',
            },
            pubKeyCredParams: [{alg: -7, type: "public-key"}],
            authenticatorSelection: {
                authenticatorAttachment: "cross-platform"
            },
            timeout: response.data.response.timeout,
            attestation: "indirect"
        };

        const credential = await navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions
        });

        console.log(credential);
    }


}
 */