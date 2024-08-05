let r, i;
n(47120);
var a, s = n(442837),
  o = n(433517),
  l = n(570140),
  u = n(981631),
  c = n(354459);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let _ = 'PictureInPictureLocation',
  E = new Map(),
  f = {},
  h = u.VD2.BOTTOM_RIGHT,
  p = c.l8;
class m extends(a = s.ZP.PersistedStore) {
  initialize(e) {
if (null == e) {
  let e = o.K.get(_);
  null != e && o.K.remove(_), h = null != e ? e : u.VD2.BOTTOM_RIGHT, p = c.l8;
  return;
}
h = e.openPosition, p = e.pipWidth;
  }
  get pipWindow() {
var e;
return null == r && null == i ? null : E.get(null !== (e = null != r ? r : i) && void 0 !== e ? e : '');
  }
  get pipVideoWindow() {
return null == r ? null : E.get(r);
  }
  get pipActivityWindow() {
return null == i ? null : E.get(i);
  }
  get pipWidth() {
return p;
  }
  get pipWindows() {
return E;
  }
  isEmbeddedActivityHidden() {
return null == i;
  }
  getDockedRect(e) {
return f[e];
  }
  isOpen(e) {
return null != e && E.has(e);
  }
  getState() {
return {
  openPosition: h,
  pipWidth: p
};
  }
}
d(m, 'displayName', 'PictureInPictureStore'), d(m, 'persistKey', 'PictureInPictureStore'), t.Z = new m(l.Z, {
  PICTURE_IN_PICTURE_OPEN: function(e) {
var t, n;
let {
  id: a,
  component: s,
  props: o
} = e;
if (null != E.get(a))
  return;
let l = {
  id: a,
  component: s,
  position: null !== (t = o.position) && void 0 !== t ? t : h,
  props: o,
  docked: null !== (n = o.docked) && void 0 !== n && n
};
E.set(a, l), s === u.NYg.VIDEO ? null == r && (r = a) : s === u.NYg.EMBED_IFRAME && null == i && (i = a);
  },
  PICTURE_IN_PICTURE_CLOSE: function(e) {
let {
  id: t
} = e;
if (!E.has(t))
  return !1;
{
  E.delete(t);
  let e = Array.from(E.keys());
  r === t ? r = e.find(e => {
    let t = E.get(e);
    return null != t && t.component === u.NYg.VIDEO;
  }) : i === t && (i = e.find(e => {
    let t = E.get(e);
    return null != t && t.component === u.NYg.EMBED_IFRAME;
  }));
}
  },
  PICTURE_IN_PICTURE_MOVE: function(e) {
let {
  id: t,
  position: n
} = e;
if (null == t || r !== t && i !== t)
  return !1;
{
  let e = new Map();
  E.forEach((t, r) => {
    e.set(r, {
      ...t,
      position: n
    });
  }), E = e, h = n;
}
  },
  PICTURE_IN_PICTURE_RESIZE: function(e) {
let {
  width: t
} = e;
p = t;
  },
  PICTURE_IN_PICTURE_HIDE: function(e) {
let {
  id: t
} = e;
if (r !== t && i !== t)
  return !1;
{
  let e = E.get(t);
  if (null == e)
    return !1;
  E.set(t, {
    ...e,
    hidden: !0
  });
}
  },
  PICTURE_IN_PICTURE_SHOW: function(e) {
let {
  id: t
} = e;
if (r !== t && i !== t)
  return !1;
{
  let e = E.get(t);
  if (null == e)
    return !1;
  E.set(t, {
    ...e,
    hidden: !1
  });
}
  },
  PICTURE_IN_PICTURE_UPDATE_RECT: function(e) {
let {
  id: t,
  rect: n
} = e;
f[t] = n;
  },
  PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function(e) {
let {
  id: t
} = e, n = E.get(t);
null != n && (n.component === u.NYg.VIDEO ? r = t : n.component === u.NYg.EMBED_IFRAME && (i = t));
  },
  LOGOUT: function() {
r = null, i = null, E = new Map();
  }
});