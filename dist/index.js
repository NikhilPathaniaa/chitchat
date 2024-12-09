"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const socket_1 = require("./socket");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));
// Root route
app.get('/', (_req, res) => {
    res.json({
        status: 'ok',
        message: 'ChitChat Socket Server Running',
        version: '1.0.0'
    });
});
// Health check route
app.get('/health', (_req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});
// Error handling middleware
app.use((err, _req, res, _next) => {
    console.error('Server error:', err);
    res.status(500).json({
        status: 'error',
        message: err.message || 'Internal server error'
    });
});
// Initialize socket server
(0, socket_1.initSocket)(server);
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to check server status`);
});
