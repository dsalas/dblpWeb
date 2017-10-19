var prefixes = "PREFIX swrc: <http://swrc.ontoware.org/ontology#>"+
"PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
"PREFIX owl: <http://www.w3.org/2002/07/owl#>" +
"PREFIX d2r: <http://sites.wiwiss.fu-berlin.de/suhl/bizer/d2r-server/config.rdf#>" +
"PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>" +
"PREFIX dcterms: <http://purl.org/dc/terms/>" +
"PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>" +
"PREFIX map: <file:///home/diederich/d2r-server-0.3.2/dblp-mapping.n3#>" +
"PREFIX foaf: <http://xmlns.com/foaf/0.1/>" +
"PREFIX dc: <http://purl.org/dc/elements/1.1/>";

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};