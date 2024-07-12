n.d(t, {
  Kp: function() {
return h;
  },
  u9: function() {
return C;
  },
  xV: function() {
return _;
  }
}), n(757143), n(47120), n(653041);
var r = n(470079),
  s = n(266067),
  a = n(442837),
  o = n(607070),
  i = n(100527),
  l = n(906732),
  c = n(328347),
  d = n(237031),
  u = n(981631);
let p = ''.concat('#').concat('itemSkuId', '='),
  g = new RegExp('^'.concat(p, '(\\d+)$')),
  f = [
u.Z5c.COLLECTIBLES_SHOP,
u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
  ],
  C = e => {
let t = (0, s.TH)();
r.useEffect(() => {
  if (null != e && f.includes(t.pathname))
    return window.location.replace(''.concat(p).concat(e.skuId)), () => {
      window.location.hash.startsWith(p) && window.location.replace('#');
    };
}, []);
  },
  m = e => {
let {
  categories: t,
  productSkuId: n,
  analyticsLocations: r,
  analyticsSource: s,
  initialItemCardRef: a,
  reducedMotion: o = !1
} = e;
for (let e of t.values()) {
  let t = e.products.find(e => e.skuId === n);
  if (null != t) {
    var i;
    null === (i = a.current) || void 0 === i || i.scrollIntoView({
      behavior: o ? 'instant' : 'smooth',
      block: 'center',
      inline: 'center'
    });
    let n = setTimeout(() => {
      let n = document.getElementById('shop-item-'.concat(t.skuId));
      n !== document.activeElement && (null == n || n.focus()), (0, d.T)({
        product: t,
        category: e,
        analyticsSource: s,
        analyticsLocations: r,
        returnRef: a
      });
    }, 750);
    return () => clearTimeout(n);
  }
}
return () => {};
  },
  h = e => {
let {
  categories: t,
  isFetchingCategories: n,
  isLayer: d,
  initialItemCardRef: p
} = e, f = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), C = r.useRef(null), h = (0, s.TH)(), _ = h.pathname === u.Z5c.COLLECTIBLES_SHOP ? i.Z.HOME_PAGE_SHOP_TAB : h.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? i.Z.COLLECTIBLES_SHOP_FULLSCREEN : i.Z.COLLECTIBLES_SHOP, {
  analyticsLocations: b
} = (0, l.ZP)(_);
r.useEffect(() => {
  if (d)
    return;
  let e = g.exec(h.hash);
  if (null != e) {
    let t = e[1];
    C.current = t;
  }
}, []);
let x = (0, a.e7)([c.Z], () => c.Z.initialProductSkuId);
r.useEffect(() => {
  if (n)
    return;
  let e = null;
  if (d && null != x && (e = x), !d && null != C.current && (e = C.current), null != e) {
    let n = [],
      r = setTimeout(() => {
        let r = m({
          categories: t,
          productSkuId: e,
          analyticsLocations: b,
          analyticsSource: _,
          initialItemCardRef: p,
          reducedMotion: f
        });
        n.push(r);
      }, 250);
    return n.push(() => clearTimeout(r)), () => {
      n.forEach(e => e());
    };
  }
}, [
  d,
  b,
  _,
  t,
  n,
  x,
  p,
  f
]);
  },
  _ = e => {
let t = r.useRef({}),
  n = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
  s = r.useCallback((e, n) => {
    t.current[e] = n;
  }, []);
return {
  setCategoryRef: s,
  handleScrollToCategory: r.useCallback(r => {
    let s = t.current[r];
    null != s && (null == e || e.scrollIntoViewNode({
      node: s,
      padding: 12,
      animate: !n,
      shouldScrollToStart: !0
    }));
  }, [
    e,
    n
  ])
};
  };