const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === "true";
const prodEndpoint = process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT;
const localEndpoint = process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT;
const serverEndpoint = isProduction ? prodEndpoint : localEndpoint;

export default serverEndpoint;
