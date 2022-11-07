/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2016. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @param tag: a topic such as MobileFirst_Platform, Bluemix, Cordova.
 * @returns json list of items.
 */

function getNearbyCinemas(tag) {
  var input = {
    method: "get",
    returnedContentType: "json",
    path: "/cinemasNearby/?n=25",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      client: "DEV_0",
      "x-api-key": "4qEvoBuESv456NPNMIU9d2bsRB45uAGQL668wLo5",
      authorization: "Basic REVWXzBfWFg6Z0tTaGVUZjJqR1N0",
      territory: "XX",
      "api-version": "v200",
      geolocation: "-22.0;14.0",
      "device-datetime": "2022-11-06T08:30:17.360Z",
    },
  };
  return MFP.Server.invokeHttp(input);
}

/**
 * Helper function to build the URL path.
 */
function getPath(tag) {
  if (tag === undefined || tag === "") {
    return "feed.xml";
  } else {
    return "blog/atom/" + tag + ".xml";
  }
}

/**
 * @returns ok
 */
function unprotected(param) {
  return { result: "Hello from unprotected resource" };
}
