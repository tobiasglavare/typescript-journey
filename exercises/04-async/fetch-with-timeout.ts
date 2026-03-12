async function fetchWithTimeout<T>(
    promise: Promise<T>,
    timeoutMs: number
): Promise<T> {
    const timeout = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Timeout")), timeoutMs);
    });
    
    return Promise.race([promise, timeout]);
}

export {};

const resultat = await fetchWithTimeout(
    fetch("https://google.se"),
    5000, 
)