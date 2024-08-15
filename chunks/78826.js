n.d(t, {
  Fl: function() {
return E;
  },
  d7: function() {
return f;
  },
  p: function() {
return _;
  }
}), n(411104), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(374470),
  s = n(626135),
  o = n(960048),
  l = n(981631);
let u = i.createContext({
  registerAsset: () => {},
  unregisterAsset: () => {},
  hasError: !1,
  isLoading: !0
});

function c(e) {
  return (0, a.k)(e, HTMLImageElement) ? e.complete : !(0, a.k)(e, HTMLVideoElement) || e.readyState >= 2;
}

function d(e) {
  var t, n;
  return (0, a.k)(e, HTMLImageElement) ? e.getAttribute('src') : (0, a.k)(e, HTMLVideoElement) ? null !== (n = null === (t = e.querySelectorAll('source')[0]) || void 0 === t ? void 0 : t.getAttribute('src')) && void 0 !== n ? n : 'video' : e.tagName;
}

function _(e) {
  let {
children: t,
isPreview: n = !1,
source: _,
questId: E
  } = e, [f, h] = i.useState(!1), [p, m] = i.useState(new Set()), [I, T] = i.useState(!1), g = i.useRef(!1);
  i.useEffect(() => {
let e = new Set();
for (let t of p)
  !c(t) && e.add(t);
e.size !== p.size && m(e);
  }, [p]);
  let S = i.useCallback(e => {
  let {
    assetNode: t,
    nodeId: r,
    errorPrefix: i,
    errorMessage: a
  } = e;
  !n && null != _ && (s.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
    source: _,
    quest_id: E,
    asset_id: d(t)
  }), o.Z.captureException(Error(''.concat(i, ': ').concat(null != a ? ''.concat(a, ', ') : '').concat(d(t), ', ').concat(r)), {
    tags: {
      source: _
    }
  }), h(!0));
}, [
  n,
  _,
  E
]),
A = i.useCallback(e => {
  m(t => {
    let n = new Set(t);
    return n.delete(e), n;
  });
}, []),
N = i.useCallback((e, t) => {
  var n;
  if (T(!0), c(e))
    return;
  m(t => {
    let n = new Set(t);
    return n.add(e), n;
  });
  let r = (n = e, (0, a.k)(n, HTMLImageElement) ? 'load' : (0, a.k)(n, HTMLVideoElement) ? 'canplaythrough' : 'load');
  e.addEventListener(r, function t() {
    A(e), e.removeEventListener(r, t);
  });
  e.addEventListener('error', function n(r) {
    A(e), S({
      assetNode: e,
      nodeId: t,
      errorPrefix: 'Error loading asset',
      errorMessage: 'message' in r ? r.message : null
    }), e.removeEventListener('error', n);
  });
}, [
  S,
  A
]),
v = i.useMemo(() => p.size > 0 || !I, [
  I,
  p
]);
  i.useEffect(() => {
!v && (g.current = !0);
  }, [v]);
  let O = i.useMemo(() => ({
registerAsset: N,
unregisterAsset: A,
hasError: f,
isLoading: v && !g.current
  }), [
N,
A,
f,
v
  ]);
  return (0, r.jsx)(u.Provider, {
value: O,
children: t
  });
}

function E(e) {
  let {
id: t,
children: n
  } = e, {
registerAsset: r,
unregisterAsset: a
  } = i.useContext(u), s = i.useRef(null);
  return i.useEffect(() => {
let e = s.current;
return null != e && r(e, t), () => {
  null != e && a(e);
};
  }, [
r,
a,
t
  ]), n(s);
}

function f() {
  let {
hasError: e,
isLoading: t
  } = i.useContext(u);
  return {
hasError: e,
isLoading: t
  };
}