n.d(t, {
  Kp: function() {
return m;
  },
  u9: function() {
return C;
  },
  xV: function() {
return h;
  }
}), n(757143), n(47120), n(653041);
var s = n(470079),
  r = n(266067),
  a = n(442837),
  i = n(607070),
  o = n(100527),
  c = n(906732),
  l = n(328347),
  d = n(237031),
  u = n(981631);
let f = ''.concat('#').concat('itemSkuId', '='),
  p = new RegExp('^'.concat(f, '(\\d+)$')),
  g = [
u.Z5c.COLLECTIBLES_SHOP,
u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
  ],
  C = e => {
let t = (0, r.TH)();
s.useEffect(() => {
  if (null != e && g.includes(t.pathname))
    return window.location.replace(''.concat(f).concat(e.skuId)), () => {
      window.location.hash.startsWith(f) && window.location.replace('#');
    };
}, []);
  },
  _ = e => {
let {
  categories: t,
  productSkuId: n,
  analyticsLocations: s,
  analyticsSource: r,
  initialItemCardRef: a,
  reducedMotion: i = !1
} = e;
for (let e of t.values()) {
  let t = e.products.find(e => e.skuId === n);
  if (null != t) {
    var o;
    null === (o = a.current) || void 0 === o || o.scrollIntoView({
      behavior: i ? 'instant' : 'smooth',
      block: 'center',
      inline: 'center'
    });
    let n = setTimeout(() => {
      let n = document.getElementById('shop-item-'.concat(t.skuId));
      n !== document.activeElement && (null == n || n.focus()), (0, d.T)({
        product: t,
        category: e,
        analyticsSource: r,
        analyticsLocations: s,
        returnRef: a
      });
    }, 750);
    return () => clearTimeout(n);
  }
}
return () => {};
  },
  m = e => {
let {
  categories: t,
  isFetchingCategories: n,
  isLayer: d,
  initialItemCardRef: f
} = e, g = (0, a.e7)([i.Z], () => i.Z.useReducedMotion), C = s.useRef(null), m = (0, r.TH)(), h = m.pathname === u.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : m.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP, {
  analyticsLocations: b
} = (0, c.ZP)(h);
s.useEffect(() => {
  if (d)
    return;
  let e = p.exec(m.hash);
  if (null != e) {
    let t = e[1];
    C.current = t;
  }
}, []);
let x = (0, a.e7)([l.Z], () => l.Z.initialProductSkuId);
s.useEffect(() => {
  if (n)
    return;
  let e = null;
  if (d && null != x && (e = x), !d && null != C.current && (e = C.current), null != e) {
    let n = [],
      s = setTimeout(() => {
        let s = _({
          categories: t,
          productSkuId: e,
          analyticsLocations: b,
          analyticsSource: h,
          initialItemCardRef: f,
          reducedMotion: g
        });
        n.push(s);
      }, 250);
    return n.push(() => clearTimeout(s)), () => {
      n.forEach(e => e());
    };
  }
}, [
  d,
  b,
  h,
  t,
  n,
  x,
  f,
  g
]);
  },
  h = e => {
let t = s.useRef({}),
  n = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
  r = s.useCallback((e, n) => {
    t.current[e] = n;
  }, []);
return {
  setCategoryRef: r,
  handleScrollToCategory: s.useCallback(s => {
    let r = t.current[s];
    null != r && (null == e || e.scrollIntoViewNode({
      node: r,
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