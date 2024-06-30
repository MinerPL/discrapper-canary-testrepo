let r, i;
n(47120);
var a, o, s, l, u = n(442837), c = n(433517), d = n(570140), _ = n(981631);
let E = 'PictureInPictureLocation', f = new Map(), h = _.VD2.BOTTOM_RIGHT, p = {};
class m extends (a = u.ZP.Store) {
    initialize() {
        h = c.K.get(E, _.VD2.BOTTOM_RIGHT);
    }
    get pipWindow() {
        var e;
        return null == r && null == i ? null : f.get(null !== (e = null != r ? r : i) && void 0 !== e ? e : '');
    }
    get pipVideoWindow() {
        return null == r ? null : f.get(r);
    }
    get pipActivityWindow() {
        return null == i ? null : f.get(i);
    }
    get pipWindows() {
        return f;
    }
    isEmbeddedActivityHidden() {
        return null == i;
    }
    getDockedRect(e) {
        return p[e];
    }
    isOpen(e) {
        return null != e && f.has(e);
    }
}
l = 'PictureInPictureStore', (s = 'displayName') in (o = m) ? Object.defineProperty(o, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[s] = l, t.Z = new m(d.Z, {
    PICTURE_IN_PICTURE_OPEN: function (e) {
        var t, n;
        let {
            id: a,
            component: o,
            props: s
        } = e;
        if (null != f.get(a))
            return;
        let l = {
            id: a,
            component: o,
            position: null !== (t = s.position) && void 0 !== t ? t : h,
            props: s,
            docked: null !== (n = s.docked) && void 0 !== n && n
        };
        f.set(a, l), o === _.NYg.VIDEO ? null == r && (r = a) : o === _.NYg.EMBED_IFRAME && null == i && (i = a);
    },
    PICTURE_IN_PICTURE_CLOSE: function (e) {
        let {id: t} = e;
        if (!f.has(t))
            return !1;
        {
            f.delete(t);
            let e = Array.from(f.keys());
            r === t ? r = e.find(e => {
                let t = f.get(e);
                return null != t && t.component === _.NYg.VIDEO;
            }) : i === t && (i = e.find(e => {
                let t = f.get(e);
                return null != t && t.component === _.NYg.EMBED_IFRAME;
            }));
        }
    },
    PICTURE_IN_PICTURE_MOVE: function (e) {
        let {
            id: t,
            position: n
        } = e;
        if (null == t || r !== t && i !== t)
            return !1;
        {
            let e = new Map();
            f.forEach((t, r) => {
                e.set(r, {
                    ...t,
                    position: n
                });
            }), f = e, h = n, c.K.set(E, n);
        }
    },
    PICTURE_IN_PICTURE_HIDE: function (e) {
        let {id: t} = e;
        if (r !== t && i !== t)
            return !1;
        {
            let e = f.get(t);
            if (null == e)
                return !1;
            f.set(t, {
                ...e,
                hidden: !0
            });
        }
    },
    PICTURE_IN_PICTURE_SHOW: function (e) {
        let {id: t} = e;
        if (r !== t && i !== t)
            return !1;
        {
            let e = f.get(t);
            if (null == e)
                return !1;
            f.set(t, {
                ...e,
                hidden: !1
            });
        }
    },
    PICTURE_IN_PICTURE_UPDATE_RECT: function (e) {
        let {
            id: t,
            rect: n
        } = e;
        p[t] = n;
    },
    PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function (e) {
        let {id: t} = e, n = f.get(t);
        null != n && (n.component === _.NYg.VIDEO ? r = t : n.component === _.NYg.EMBED_IFRAME && (i = t));
    },
    LOGOUT: function () {
        r = null, i = null, f = new Map();
    }
});
