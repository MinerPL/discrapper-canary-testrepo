n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(519149), n(411104);
var r, i = n(512722),
  a = n.n(i),
  s = n(392711),
  o = n.n(s),
  l = n(202226),
  u = n(442837),
  c = n(570140),
  d = n(710845),
  _ = n(358085),
  E = n(998502),
  f = n(228488),
  h = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let m = {},
  I = {},
  T = {},
  g = {},
  S = {},
  A = new Set(),
  N = () => b.emitChange(),
  v = o().debounce(N, 150);

function O(e) {
  let t = T[e];
  null != t && !t.closed && (m[e] = {
x: t.screenX,
y: t.screenY,
width: t.innerWidth,
height: t.innerHeight,
alwaysOnTop: !!_.isPlatformEmbedded && I[e]
  });
}

function R(e, t, r) {
  let i = e.document,
s = new URL(t).origin,
o = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
l = URL.canParse(n.p) ? new URL(n.p).origin : '';
  if (s !== o && s !== l) {
new d.Z('PopoutWindowStore').warn('Not injecting stylesheet, unrecognized origin', s);
return;
  }
  let u = i.createElement('link');
  u.href = t, u.rel = 'stylesheet', u.integrity = r, a()(null != i.head, 'Document head was null'), i.head.appendChild(u);
}

function C(e) {
  let t = T[e];
  null != t && (!t.closed && O(e), t.close(), ! function(e) {
let t = T[e];
a()(null != t, 'Popout window was null during unmount'), t.removeEventListener('focus', N), t.removeEventListener('blur', N), t.removeEventListener('resize', v);
let n = g[e];
a()(null != n, 'Window root was null while unmounting'), n.unmount(), delete T[e], delete I[e], delete S[e], delete g[e];
  }(e), b.emitChange());
}

function y(e) {
  let {
data: t
  } = e;
  if (!(t instanceof Object && t.discordPopoutEvent instanceof Object))
return;
  let n = t.discordPopoutEvent;
  if (null != n.key)
switch (n.type) {
  case h.l9w.LOADED:
    var r;
    return r = n.key, void(A.has(r) && (! function(e) {
      let t = T[e],
        n = S[e];
      if (null == t) {
        new d.Z('PopoutWindowStore').warn('Failed to open window', e);
        return;
      }
      let r = t.document;
      (0, f.uF)(r, N), t.addEventListener('focus', N), t.addEventListener('blur', N), t.addEventListener('resize', v), ! function(e, t) {
        for (let e of document.querySelectorAll('link[rel="stylesheet"]'))
          R(t, e.href, e.integrity);
      }(0, t);
      let i = (0, l.createRoot)(r.getElementById('app-mount'));
      a()(null != i, 'No render target for popout!'), g[e] = i, i.render(n(e));
    }(r), A.delete(r), b.emitChange()));
  case h.l9w.UNLOADED:
    return C(n.key);
}
}

function D() {
  for (let e of Object.keys(T)) {
let t = T[e];
null != t && t.close();
  }
}
class L extends(r = u.ZP.PersistedStore) {
  initialize(e) {
window.addEventListener('message', y), window.addEventListener('beforeunload', D), m = null != e ? e : {};
  }
  getWindow(e) {
return T[e];
  }
  getWindowState(e) {
return m[e];
  }
  getWindowKeys() {
return Object.keys(T);
  }
  getWindowOpen(e) {
let t = T[e];
return null != t && !t.closed;
  }
  getIsAlwaysOnTop(e) {
return !!I[e];
  }
  getWindowFocused(e) {
var t, n;
let r = T[e];
return null !== (n = null == r ? void 0 : null === (t = r.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n;
  }
  getWindowVisible(e) {
var t;
let n = T[e];
return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === 'visible';
  }
  getState() {
return m;
  }
  unmountWindow(e) {
return C(e);
  }
}
p(L, 'displayName', 'PopoutWindowStore'), p(L, 'persistKey', 'PopoutWindowStore');
let b = new L(c.Z, {
  POPOUT_WINDOW_OPEN: function(e) {
let {
  key: t,
  features: n,
  render: r
} = e;
if (_.isPlatformEmbedded && !E.ZP.supportsFeature(h.eRX.POPOUT_WINDOWS))
  throw Error('Popout windows not supported on this native module version!');
let i = T[t];
if (null != i && !i.closed)
  return _.isPlatformEmbedded ? E.ZP.focus(t) : i.focus(), !1;
let {
  defaultWidth: a,
  defaultHeight: s,
  defaultAlwaysOnTop: o = !1,
  ...l
} = n, u = l, c = o, d = m[t];
if (null != d) {
  let {
    width: e,
    height: t,
    x: n,
    y: r,
    alwaysOnTop: i
  } = d;
  c = null != i ? i : o, u = {
    width: null != e && 0 !== e ? e : a,
    height: null != t && 0 !== t ? t : s,
    left: n,
    top: r,
    ...u
  };
}
let f = window.open(h.Z5c.POPOUT_WINDOW, t, function(e) {
  let t = '';
  for (let n of Object.keys(e)) {
    let r = e[n];
    void 0 !== r && ('boolean' == typeof r && (r = r ? 'yes' : 'no'), t += ''.concat(n, '=').concat(r, ','));
  }
  return t;
}(u));
f.windowKey = t, null == f || f.focus(), T[t] = f, S[t] = r, _.isPlatformEmbedded && (E.ZP.setAlwaysOnTop(t, c), I[t] = c, E.ZP.isAlwaysOnTop(t).then(e => I[t] = e)), A.add(t);
  },
  POPOUT_WINDOW_ADD_STYLESHEET: function(e) {
let {
  url: t,
  integrity: n
} = e;
for (let e of Object.values(T))
  null != e && !e.closed && R(e, t, n);
  },
  POPOUT_WINDOW_CLOSE: function(e) {
let {
  key: t
} = e, n = T[t];
null != n && !n.closed && (O(t), n.close());
  },
  POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
let {
  key: t,
  alwaysOnTop: n
} = e;
_.isPlatformEmbedded && (E.ZP.setAlwaysOnTop(t, n), I[t] = n, E.ZP.isAlwaysOnTop(t).then(e => I[t] = e));
  },
  LOGOUT: D
});
t.Z = b;