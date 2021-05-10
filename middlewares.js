import routes from "./routes"

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "SYAG";
    res.locals.routes = routes;
    next();
};