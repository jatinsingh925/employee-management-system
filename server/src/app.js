import express from 'express';  // new es moldule

const app = express();  // Application obiject -// Creates the Express application instance
app.use(express.json())  // first middleware - convert stream line data in json
console.log("✅ app.js loaded");
app.get("/api/v1/health", (req, res) => {
   res.status(200).json({
    success: true,
    message: "Employee Management API is running",
   });
});
export default app;      // Export the configured Express application