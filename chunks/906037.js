n.d(t, {
    CR: function () {
        return o;
    },
    eM: function () {
        return a;
    },
    m3: function () {
        return r;
    }
});
var i = n(570140),
    s = n(449224);
function a(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function o(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || a(e) !== a(t)) && r(t, n(t));
}
function r(e, t) {
    var n, o;
    let r = a(e),
        l = s.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == l ? void 0 : l.name) && void 0 !== n ? n : null,
        gameId: null !== (o = null == l ? void 0 : l.id) && void 0 !== o ? o : null,
        widgetType: e.widget,
        visible: r && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
