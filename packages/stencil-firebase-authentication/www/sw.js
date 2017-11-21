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
    "url": "assets/facebook-logo.svg",
    "revision": "ead0ca74533ff593f72f813c29fc423c"
  },
  {
    "url": "assets/github-logo.svg",
    "revision": "3afb1003870b82f9d01d45624da736b7"
  },
  {
    "url": "assets/google-logo.svg",
    "revision": "686f8efa6e3e28e96d1c08399e8d353d"
  },
  {
    "url": "assets/twitter-logo.svg",
    "revision": "c3b7d4e47a9286b144d3ba2fa0543ac0"
  },
  {
    "url": "build/firebase-authentication.js",
    "revision": "58a931f2e3f46c8c127dd037461d20d4"
  },
  {
    "url": "build/firebase-authentication/1gxsrbto.js",
    "revision": "206ff93ca480ae8e883d2eb3925473e4"
  },
  {
    "url": "build/firebase-authentication/9a5rarot.js",
    "revision": "cbb91b8e554d45abdd4a9cc0aff475a4"
  },
  {
    "url": "build/firebase-authentication/cwoojzvx.js",
    "revision": "db2a0176ef1715448e7a9e41b3bbaa43"
  },
  {
    "url": "build/firebase-authentication/firebase-authentication.1skob0kn.js",
    "revision": "43b6cf94101f5ac0e76984d9de1381ac"
  },
  {
    "url": "build/firebase-authentication/firebase-authentication.registry.json",
    "revision": "d3940aa26fccee3fcb22dc3d2aaec47b"
  },
  {
    "url": "build/firebase-authentication/firebase-authentication.sel7s6yk.js",
    "revision": "43fa469bcf5efd52b940915747a091d8"
  },
  {
    "url": "build/firebase-authentication/firebase-authentication.vrgk7ofh.js",
    "revision": "fb8e96909478a694192edbba236ab45c"
  },
  {
    "url": "build/firebase-authentication/gmhmhqrb.js",
    "revision": "98438f62ff0c20ed0e02f142fc21a916"
  },
  {
    "url": "build/firebase-authentication/jtwvmy5r.js",
    "revision": "4e082661026c9929b0c2bda699b1d3e8"
  },
  {
    "url": "build/firebase-authentication/jtwvmy5r.sc.js",
    "revision": "e63929c52886d9a5c74cce29cc1212c2"
  },
  {
    "url": "build/firebase-authentication/nytrsfpf.js",
    "revision": "244f4809f8a61eebc0f5cb70b8289449"
  },
  {
    "url": "build/firebase-authentication/nytrsfpf.sc.js",
    "revision": "7144dd895ed4cf28dac480b55fa2d248"
  },
  {
    "url": "index.html",
    "revision": "6911bf98328a1f7abd8a1ab2c74eacb9"
  },
  {
    "url": "mdc-material/collection/collection-manifest.json",
    "revision": "edca2b5735e88f99ca95edaee468b619"
  },
  {
    "url": "mdc-material/collection/components/mdc-material/mdc-material.js",
    "revision": "230fede05c23e2d47b84832e794a12e9"
  },
  {
    "url": "mdc-material/collection/index.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "mdc-material/mdc-material.js",
    "revision": "cf116f7df5b19870d2ffedeff2bed9c5"
  },
  {
    "url": "mdc-material/mdc-material.registry.json",
    "revision": "357a707b9db3e826f1b5eb7d70afe51b"
  },
  {
    "url": "mdc-material/mdc-material/7gtf691a.js",
    "revision": "0bae4186d6010adaa9240d9581d35372"
  },
  {
    "url": "mdc-material/mdc-material/d2f8yube.js",
    "revision": "30844bad16aa7113de0d181f66bd65d2"
  },
  {
    "url": "mdc-material/mdc-material/mdc-material.pupuu45x.js",
    "revision": "1e0ba8e09070e082e64879ae6746ea34"
  },
  {
    "url": "mdc-material/mdc-material/mdc-material.sbprwvrp.js",
    "revision": "9590ecf1ad6afbc9e272693bf7a7d5ce"
  },
  {
    "url": "mdc-material/mdc-material/mdc-material.thdcygol.js",
    "revision": "73e5f8ea69216712bb0247f80956cb2d"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
