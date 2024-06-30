n.d(t, {
    hY: function () {
        return h;
    },
    og: function () {
        return m;
    },
    rO: function () {
        return I;
    },
    vu: function () {
        return _;
    }
});
var r, i, a, o, s, l = n(525654), u = n.n(l);
let c = (null !== (r = u().name) && void 0 !== r ? r : 'unknown').toLowerCase(), d = 'chrome' === c.toLowerCase() ? parseInt(null !== (i = u().version) && void 0 !== i ? i : '', 10) : -1;
function _() {
    return d;
}
let E = 'electron' === c.toLowerCase() ? parseInt(null !== (a = u().version) && void 0 !== a ? a : '', 10) : -1, f = 'firefox' === c.toLowerCase() ? parseInt(null !== (o = u().version) && void 0 !== o ? o : '', 10) : -1;
function h() {
    return f;
}
let p = 'edge' === c.toLowerCase() ? parseInt(null !== (s = u().version) && void 0 !== s ? s : '', 10) : -1;
function m() {
    return -1 !== d || -1 !== E || -1 !== f || -1 !== p;
}
function I() {
    var e;
    let t = window.navigator, n = t.userAgent.toLowerCase(), r = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null;
    return -1 !== n.indexOf('safari') && !(-1 !== n.indexOf('chrome')) && -1 !== n.indexOf('version/') && r;
}
