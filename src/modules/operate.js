import { registerLocationSubmit } from "./user-input";

const initApp = async () => {
    try {
        await registerLocationSubmit();
    } catch (e) {
        console.error('Error Initializing App: ', e);
    }

};

export { initApp };