import { asyncHandler } from "../utils/asyncHandler.js";

const requestLogger = asyncHandler(async (req, res, next) => {
  const timestamp = new Date().toLocaleString(
    'en-GB', 
    {
      timeZoneName: "short"
    }
  );
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`)
  next();
})

export { requestLogger };