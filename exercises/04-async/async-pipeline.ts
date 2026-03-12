// Exercise: Async Pipeline
//
// You're building a deployment status checker. It needs to:
// 1. Fetch a list of services
// 2. Check each service's health
// 3. Generate a report
//
// Each step is async and depends on the previous one.
//
// Tasks:
// 1. Implement getServices() — returns a list of service configs after a delay
// 2. Implement checkHealth() — checks one service, returns its status
// 3. Implement generateReport() — takes all statuses, returns a formatted string
// 4. Implement runPipeline() — chains all three steps together
//
// This is how real async code flows in practice:
// fetch data → process it → output results

interface ServiceConfig {
    name: string;
    url: string;
    critical: boolean;
}

interface HealthResult {
    name: string;
    url: string;
    healthy: boolean;
    responseMs: number;
    critical: boolean;
}

// Task 1: Simulate fetching service configs (pretend this is an API call)
// Should return the array after a 500ms delay
async function getServices(): Promise<ServiceConfig[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
        const services: ServiceConfig[] = [
        { name: "API Gateway", url: "https://api.example.com", critical: true },
        { name: "Auth Service", url: "https://auth.example.com", critical: true },
        { name: "Logging", url: "https://logs.example.com", critical: false },
        { name: "Metrics", url: "https://metrics.example.com", critical: false },
    ];
    return services;
}


// Task 2: Simulate checking one service's health
// Should resolve after random delay (0-1000ms)
// Randomly healthy (80% chance) or unhealthy (20% chance)
async function checkHealth(service: ServiceConfig): Promise<HealthResult> {
    const responseMs = Math.random() * 1000;
    const randomHealthy = Math.random() > 0.2;
    await new Promise(resolve => setTimeout(resolve, responseMs))

    return {
        name: service.name,
        url: service.url,
        healthy: randomHealthy,
        responseMs: responseMs,
        critical: service.critical,
    };
}

// Task 3: Generate a report string from health results
// Format: one line per service, flag critical ones that are down
// Example output:
//   "✅ API Gateway (120ms)"
//   "❌ Auth Service (450ms) [CRITICAL]"
//   "✅ Logging (89ms)"
async function generateReport(results: HealthResult[]): Promise<string> {
    const report = results.map(i => {
        const icon = i.healthy ? "[OK]" : "[FAIL]";
        const critical = (!i.healthy && i.critical) ? "[CRITICAL]" : "";
        return `${icon} ${i.name} (${Math.round(i.responseMs)}ms}${critical})`;
    });
    return report.join("\n");
    // Your code here
}

// Task 4: Chain it all together
// getServices → check all health (in parallel!) → generate report
async function runPipeline(): Promise<void> {
    const services = await getServices();
    const checkAll = await Promise.all(services.map(i => checkHealth(i)));
    const generatedReport = await(generateReport(checkAll));
    console.log(generatedReport);
    // Your code here
    // Don't forget to console.log the final report
}

// Uncomment to test:
// runPipeline();
