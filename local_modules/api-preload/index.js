var ApiPreload = (function (hrefs) {

    var preloadData = {};
    var hOP = preloadData.hasOwnProperty;

    return {
        preloadData: function (hrefs) {
            hrefs.forEach(href => {
                if (!hOP.call(preloadData, href)) {
                    preloadData[href] = window.fetch(href);
                }
            })
        },
        fetch: function (href, options) {
            if (!hOP.call(preloadData, href)) {
                throw new Error(href + ' not registered with ApiPreload!');
            }
            return preloadData[href];
        }
    };

})();

export default ApiPreload