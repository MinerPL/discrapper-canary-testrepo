n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140);
let u = [];
function c() {
    u = [];
}
class d extends (r = o.ZP.Store) {
    hasLayers() {
        return u.length > 0;
    }
    getLayers() {
        return u;
    }
}
(s = 'LayerStore'),
    (a = 'displayName') in (i = d)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new d(l.Z, {
        LAYER_PUSH: function (e) {
            let { component: t } = e;
            if (u.indexOf(t) >= 0) return !1;
            u = [...u, t];
        },
        LAYER_POP: function () {
            if (0 === u.length) return !1;
            u = u.slice(0, -1);
        },
        LAYER_POP_ALL: c,
        LOGOUT: c,
        NOTIFICATION_CLICK: c
    }));
