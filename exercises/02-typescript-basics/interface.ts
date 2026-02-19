// Type a config object: Create an interface for a 
// server configuration with host, port, ssl (optional), and timeout.

interface serverConfiguration {
    host: string;
    port: number;
    ssl?: boolean;
    timeout: number;
}