import Keycloak from 'keycloak-js';
const VknKeycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "vijay",
 clientId: "vijay-keycloak-ms-ac"
});

export default VknKeycloak;