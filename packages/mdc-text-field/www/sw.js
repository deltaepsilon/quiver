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
    "url": "build/mdc-text-field/cm3f1l0o.js",
    "revision": "f6a7b4524916efc9903b5d42720839e9"
  },
  {
    "url": "build/mdc-text-field/cm3f1l0o.sc.js",
    "revision": "af1d84f4bfa8c575b3ac04a6e495b82d"
  },
  {
    "url": "build/mdc-text-field/ynr6bdaf.js",
    "revision": "0fb5172d1a38599c77ee55eece9bd6d6"
  },
  {
    "url": "build/mdc-text-field/ynr6bdaf.sc.js",
    "revision": "aeaa97b230c757f72a7a8c6da8475484"
  },
  {
    "url": "index.html",
    "revision": "511fd6501eba394b062ea15729dcde54"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
