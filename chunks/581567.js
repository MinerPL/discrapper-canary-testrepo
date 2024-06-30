n.d(t, {
    G8: function () {
        return o;
    },
    N6: function () {
        return a;
    },
    vp: function () {
        return s;
    }
});
var r = n(77498), i = n(358085);
function a(e) {
    var t;
    return ((t = (t = e).toLowerCase()).endsWith('/') && (t = t.slice(0, -1)), t).split('/').slice(-2).join('/');
}
function o(e) {
    var t, n;
    if (null == e)
        return {
            gameName: void 0,
            gameId: void 0,
            exe: void 0,
            distributor: void 0
        };
    let i = r.Z.getGameByName(e.name), o = 'exePath' in e ? e.exePath : e.exe;
    return {
        gameName: null !== (t = e.name) && void 0 !== t ? t : void 0,
        gameId: null == i ? void 0 : i.id,
        exe: null != o ? a(o) : void 0,
        distributor: null !== (n = e.distributor) && void 0 !== n ? n : void 0
    };
}
function s(e, t) {
    if (null == e || null == t)
        return !1;
    let n = a(e), r = (0, i.getPlatformName)();
    return t.some(e => e.os === r && (null == n ? void 0 : n.endsWith(e.name)));
}
