var s = n(525654), r = n.n(s), i = n(643191);
t.Z = {
    dump(e) {
        let t;
        null != performance.memory && (t = {
            jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
            totalJSHeapSize: performance.memory.totalJSHeapSize,
            usedJSHeapSize: performance.memory.usedJSHeapSize
        }), e({
            browser: {
                name: r().name,
                version: r().version
            },
            os: {
                name: r().os.family,
                version: r().os.version
            },
            memory: t
        });
    },
    getTimeSinceNavigationStart: () => Date.now() - i.mb
};
