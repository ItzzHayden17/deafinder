import React, { useEffect, useState } from 'react';

export function useAddToHomescreenPrompt() {
    const [prompt, setPrompt] = useState(null);

    const promptToInstall = () => {
        if (prompt) {
            return prompt.prompt();

        }
        return Promise.reject(
            new Error('Tried installing before browser sent "beforeinstallprompt" event')
        );
    };

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, []); // Empty dependency array ensures this effect runs only once on initial render

    return [prompt, promptToInstall];
}
