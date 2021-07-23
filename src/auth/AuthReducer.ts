

type AuthAction = 
    | {type: '[auth] login'}
    | {type: '[auth] logout'}


export const authReducer = (state: {}, action: AuthAction) => {
    switch(action.type) {
        case ('[auth] login'): {
            return {
            
            }
        }

        case ('[auth] logout'): {

        };
    }
};