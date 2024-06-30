r.d(e, {
    W: function () {
        return a;
    }
});
var n = r(607190);
let _ = () => {
        let t = n.m.performance.timing, e = n.m.performance.navigation.type, r = {
                entryType: 'navigation',
                startTime: 0,
                type: 2 == e ? 'back_forward' : 1 === e ? 'reload' : 'navigate'
            };
        for (let e in t)
            'navigationStart' !== e && 'toJSON' !== e && (r[e] = Math.max(t[e] - t.navigationStart, 0));
        return r;
    }, a = () => n.m.__WEB_VITALS_POLYFILL__ ? n.m.performance && (performance.getEntriesByType && performance.getEntriesByType('navigation')[0] || _()) : n.m.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
