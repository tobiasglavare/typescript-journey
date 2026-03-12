function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry<T>(
    url: string,
    retries: number = 3,
    delay: number = 1000
): Promise<T> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Attempt ${attempt}...`);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.log(`Attempt ${attempt} failed:`, error);

            if (attempt === retries) {
                throw new Error(`All ${retries} attempts failed.`);
            }
            const backoff = delay * 2 ** (attempt - 1);
            console.log(`Waiting ${backoff}ms before next attempt...`);
            await sleep(backoff);
        }
    }
    throw new Error(`All ${retries} attempts failed.`);
}
