/*! Built with http://stenciljs.com */
(function (window, document, appNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, components, x, i) {
    'use strict';
    // create global namespace if it doesn't already exist
    (window[appNamespace] = window[appNamespace] || {}).components = components = components || [];
    // auto hide components until they been fully hydrated
    // reusing the "x" and "i" variables from the args for funzies
    // note: filter and map must stay es5 and must not use arrow functions
    i = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (i.length) {
        x = document.createElement('style');
        x.innerHTML = i.join() + '{visibility:hidden}';
        x.setAttribute('data-visibility', '');
        document.head.insertBefore(x, document.head.firstChild);
    }
    // get this current script
    appNamespace = appNamespace.toLowerCase();
    x = document.scripts;
    for (i = x.length - 1; i >= 0; i--) {
        if (x[i].src && x[i].src.split('/').pop() === appNamespace + '.js') {
            publicPath = x[i].src.replace(appNamespace + '.js', appNamespace + '/');
            break;
        }
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = document.createElement('script');
    x.src = publicPath + (('noModule' in x && window.customElements && window.fetch) ? (document.documentElement.hasAttribute('data-ssr') ? appCoreSsr : appCore) : appCorePolyfilled);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-core', appCore);
    document.head.appendChild(x);
})(window, document, "firebase-authentication","/build/firebase-authentication/","firebase-authentication.core.js","firebase-authentication.core.ssr.js","es5-build-disabled.js",[["firebase-authentication",["firebase-authentication",null],1,[["email",1,1,3],["facebook",1,1,3],["github",1,1,3],["google",1,1,3],["phone",1,1,3],["redirect",1,1,3],["twitter",1,1,3],["view",5]],1],["mdc-button",["mdc-button",null],1,[["compact",1,1,3],["dense",1,1,3],["disabled",1,1,3],["icon",1,1,2],["raised",1,1,3],["ripple",1,1,3],["src",1,1,2],["stroked",1,1,3],["unelevated",1,1,3]],0,1],["mdc-material",["mdc-material",null],1,[["elevation",1,1,4],["padding",1,1,3],["transition",1,1,3]],0,1],["mdc-text-field",["mdc-text-field",null],1,[["disabled",1,1,3],["initialValue",1,1,2],["label",1,1,2],["persistent",1,1,3],["value",5]],1,1]]);