"use strict";
let i, r;
n(47120);
var s, o, a, l, u = n(442837),
  _ = n(433517),
  d = n(570140),
  c = n(981631);
let E = "PictureInPictureLocation",
  I = new Map,
  T = c.VD2.BOTTOM_RIGHT,
  h = {};
class S extends(s = u.ZP.Store) {
  initialize() {
    T = _.K.get(E, c.VD2.BOTTOM_RIGHT)
  }
  get pipWindow() {
    var e;
    return null == i && null == r ? null : I.get(null !== (e = null != i ? i : r) && void 0 !== e ? e : "")
  }
  get pipVideoWindow() {
    return null == i ? null : I.get(i)
  }
  get pipActivityWindow() {
    return null == r ? null : I.get(r)
  }
  get pipWindows() {
    return I
  }
  isEmbeddedActivityHidden() {
    return null == r
  }
  getDockedRect(e) {
    return h[e]
  }
  isOpen(e) {
    return null != e && I.has(e)
  }
}
l = "PictureInPictureStore", (a = "displayName") in(o = S) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new S(d.Z, {
  PICTURE_IN_PICTURE_OPEN: function(e) {
    var t, n;
    let {
      id: s,
      component: o,
      props: a
    } = e;
    if (null != I.get(s)) return;
    let l = {
      id: s,
      component: o,
      position: null !== (t = a.position) && void 0 !== t ? t : T,
      props: a,
      docked: null !== (n = a.docked) && void 0 !== n && n
    };
    I.set(s, l), o === c.NYg.VIDEO ? null == i && (i = s) : o === c.NYg.EMBED_IFRAME && null == r && (r = s)
  },
  PICTURE_IN_PICTURE_CLOSE: function(e) {
    let {
      id: t
    } = e;
    if (!I.has(t)) return !1;
    {
      I.delete(t);
      let e = Array.from(I.keys());
      i === t ? i = e.find(e => {
        let t = I.get(e);
        return null != t && t.component === c.NYg.VIDEO
      }) : r === t && (r = e.find(e => {
        let t = I.get(e);
        return null != t && t.component === c.NYg.EMBED_IFRAME
      }))
    }
  },
  PICTURE_IN_PICTURE_MOVE: function(e) {
    let {
      id: t,
      position: n
    } = e;
    if (null == t || i !== t && r !== t) return !1;
    {
      let e = new Map;
      I.forEach((t, i) => {
        e.set(i, {
          ...t,
          position: n
        })
      }), I = e, T = n, _.K.set(E, n)
    }
  },
  PICTURE_IN_PICTURE_HIDE: function(e) {
    let {
      id: t
    } = e;
    if (i !== t && r !== t) return !1;
    {
      let e = I.get(t);
      if (null == e) return !1;
      I.set(t, {
        ...e,
        hidden: !0
      })
    }
  },
  PICTURE_IN_PICTURE_SHOW: function(e) {
    let {
      id: t
    } = e;
    if (i !== t && r !== t) return !1;
    {
      let e = I.get(t);
      if (null == e) return !1;
      I.set(t, {
        ...e,
        hidden: !1
      })
    }
  },
  PICTURE_IN_PICTURE_UPDATE_RECT: function(e) {
    let {
      id: t,
      rect: n
    } = e;
    h[t] = n
  },
  PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function(e) {
    let {
      id: t
    } = e, n = I.get(t);
    null != n && (n.component === c.NYg.VIDEO ? i = t : n.component === c.NYg.EMBED_IFRAME && (r = t))
  },
  LOGOUT: function() {
    i = null, r = null, I = new Map
  }
})