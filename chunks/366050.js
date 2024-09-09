let r, i;
n(47120);
var a,
    s = n(442837),
    o = n(570140),
    l = n(981631),
    u = n(354459);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = new Map(),
    _ = {},
    E = l.VD2.BOTTOM_RIGHT,
    f = {
        [u.cL.VIDEO]: u.l8[u.cL.VIDEO],
        [u.cL.CAMERA_PREVIEW]: u.l8[u.cL.CAMERA_PREVIEW]
    };
class h extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        if (null == e) {
            (E = l.VD2.BOTTOM_RIGHT),
                (f = {
                    [u.cL.VIDEO]: u.l8[u.cL.VIDEO],
                    [u.cL.CAMERA_PREVIEW]: u.l8[u.cL.CAMERA_PREVIEW]
                });
            return;
        }
        (E = e.openPosition), (f = e.pipWidths);
    }
    get pipWindow() {
        var e;
        return null == r && null == i ? null : d.get(null !== (e = null != r ? r : i) && void 0 !== e ? e : '');
    }
    get pipVideoWindow() {
        return null == r ? null : d.get(r);
    }
    get pipActivityWindow() {
        return null == i ? null : d.get(i);
    }
    get pipWindows() {
        return d;
    }
    pipWidth(e) {
        return f[e];
    }
    isEmbeddedActivityHidden() {
        return null == i;
    }
    getDockedRect(e) {
        return _[e];
    }
    isOpen(e) {
        return null != e && d.has(e);
    }
    getState() {
        return {
            openPosition: E,
            pipWidths: f
        };
    }
}
c(h, 'displayName', 'PictureInPictureStore'),
    c(h, 'persistKey', 'PictureInPictureStore'),
    c(h, 'migrations', [
        (e) => {
            var t, n;
            return {
                pipWidths: {
                    [u.cL.VIDEO]: null !== (t = e.pipWidth) && void 0 !== t ? t : u.l8[u.cL.VIDEO],
                    [u.cL.CAMERA_PREVIEW]: u.l8[u.cL.CAMERA_PREVIEW]
                },
                openPosition: null !== (n = e.openPosition) && void 0 !== n ? n : l.VD2.BOTTOM_RIGHT
            };
        }
    ]),
    (t.Z = new h(o.Z, {
        PICTURE_IN_PICTURE_OPEN: function (e) {
            var t, n;
            let { id: a, component: s, props: o } = e;
            if (null != d.get(a)) return;
            let u = {
                id: a,
                component: s,
                position: null !== (t = o.position) && void 0 !== t ? t : E,
                props: o,
                docked: null !== (n = o.docked) && void 0 !== n && n
            };
            d.set(a, u), s === l.NYg.VIDEO ? null == r && (r = a) : s === l.NYg.EMBED_IFRAME && null == i && (i = a);
        },
        PICTURE_IN_PICTURE_CLOSE: function (e) {
            let { id: t } = e;
            if (!d.has(t)) return !1;
            {
                d.delete(t);
                let e = Array.from(d.keys());
                r === t
                    ? (r = e.find((e) => {
                          let t = d.get(e);
                          return null != t && t.component === l.NYg.VIDEO;
                      }))
                    : i === t &&
                      (i = e.find((e) => {
                          let t = d.get(e);
                          return null != t && t.component === l.NYg.EMBED_IFRAME;
                      }));
            }
        },
        PICTURE_IN_PICTURE_MOVE: function (e) {
            let { id: t, position: n } = e;
            if (null == t || (r !== t && i !== t)) return !1;
            {
                let e = new Map();
                d.forEach((t, r) => {
                    e.set(r, {
                        ...t,
                        position: n
                    });
                }),
                    (d = e),
                    (E = n);
            }
        },
        PICTURE_IN_PICTURE_RESIZE: function (e) {
            let { width: t, pipType: n } = e;
            f[n] = t;
        },
        PICTURE_IN_PICTURE_HIDE: function (e) {
            let { id: t } = e;
            if (r !== t && i !== t) return !1;
            {
                let e = d.get(t);
                if (null == e) return !1;
                d.set(t, {
                    ...e,
                    hidden: !0
                });
            }
        },
        PICTURE_IN_PICTURE_SHOW: function (e) {
            let { id: t } = e;
            if (r !== t && i !== t) return !1;
            {
                let e = d.get(t);
                if (null == e) return !1;
                d.set(t, {
                    ...e,
                    hidden: !1
                });
            }
        },
        PICTURE_IN_PICTURE_UPDATE_RECT: function (e) {
            let { id: t, rect: n } = e;
            _[t] = n;
        },
        PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function (e) {
            let { id: t } = e,
                n = d.get(t);
            null != n && (n.component === l.NYg.VIDEO ? (r = t) : n.component === l.NYg.EMBED_IFRAME && (i = t));
        },
        LOGOUT: function () {
            (r = null), (i = null), (d = new Map());
        }
    }));
