n.d(t, {
    j: function () {
        return s;
    }
}),
    n(47120),
    n(411104),
    n(653041);
var r = n(570140);
let i = {},
    a = !1;
function s(e) {
    for (let t in e) {
        let n = e[t];
        (function (e, t) {
            var n;
            n = t.actions;
        })(t, n),
            (function (e) {
                var t;
                let n = null !== (t = e.actions) && void 0 !== t ? t : [];
                for (let t of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) && (!n.includes('POST_CONNECTION_OPEN') && (n = [...n, 'POST_CONNECTION_OPEN']), !n.includes('OVERLAY_INITIALIZE') && (n = [...n, 'OVERLAY_INITIALIZE'])), e.loadRightBeforeConnectionOpen && (!n.includes('CONNECTION_OPEN') && (n = [...n, 'CONNECTION_OPEN']), !n.includes('OVERLAY_INITIALIZE') && (n = [...n, 'OVERLAY_INITIALIZE'])), n)) !(t in i) && (i[t] = []), i[t].push(e);
            })(n);
    }
    r.Z.addInterceptor(o);
}
function o(e) {
    if ((('CONNECTION_OPEN' === e.type || 'OVERLAY_INITIALIZE' === e.type) && (a = !0), e.type in i)) {
        let t = [];
        for (let n of i[e.type]) !a && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
        t.length > 0 ? (i[e.type] = t) : delete i[e.type];
    }
    return !1;
}
