importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/google-logo.svg",
    "revision": "686f8efa6e3e28e96d1c08399e8d353d"
  },
  {
    "url": "build/mdc-button.js",
    "revision": "2177070c018b14c0d8a68453adf72717"
  },
  {
    "url": "build/mdc-button/crzbfkun.js",
    "revision": "81c297fb1062ad49f3577b44f4d0ff04"
  },
  {
    "url": "build/mdc-button/mdc-button.510fb3wq.js",
    "revision": "988467105d7b3b0e632f383a12aed738"
  },
  {
    "url": "build/mdc-button/mdc-button.eylllxg8.js",
    "revision": "bed83eb30e1fdfd2b70859e6c8bc20e7"
  },
  {
    "url": "build/mdc-button/mdc-button.registry.json",
    "revision": "ed6264a1f1584053b3863d0c2f4c6cb0"
  },
  {
    "url": "build/mdc-button/mdc-button.srllxaxc.js",
    "revision": "d4687f2775f46709b761834b74b90a2e"
  },
  {
    "url": "build/mdc-button/x7th1fdm.js",
    "revision": "004dccc064fc0727cb3242289146f5c4"
  },
  {
    "url": "index.html",
    "revision": "4af2f46cc9102292e76545dd52992260"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
