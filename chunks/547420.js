t.d(n, {
    MY: function () {
        return a;
    },
    RC: function () {
        return u;
    },
    UF: function () {
        return r;
    }
});
var i = t(857595), l = t(607070), o = t(981631);
function E(e) {
    return o.yqN.ZOOM_SCALES[Math.max(0, Math.min(o.yqN.ZOOM_SCALES.indexOf(l.Z.zoom) + e, o.yqN.ZOOM_SCALES.length - 1))];
}
let r = {
        binds: ['mod+plus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(E(1)), !1)
    }, u = {
        binds: ['mod+minus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(E(-1)), !1)
    }, a = {
        binds: ['mod+0'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(o.yqN.ZOOM_DEFAULT), !1)
    };
n.ZP = 12633 == t.j ? {
    ZOOM_IN: r,
    ZOOM_OUT: u,
    ZOOM_RESET: a
} : null;
