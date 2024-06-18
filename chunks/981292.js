"use strict";
n.d(t, {
  W3: function() {
    return u
  },
  pJ: function() {
    return i
  }
}), n(47120), n(653041);
var i, r, s = n(735250),
  o = n(470079);
(r = i || (i = {}))[r.MOUNTED = 0] = "MOUNTED", r[r.ENTERED = 1] = "ENTERED", r[r.YEETED = 2] = "YEETED";
let a = {};

function l(e) {
  return e
}

function u(e) {
  let {
    items: t,
    renderItem: n,
    getItemKey: i,
    wrapChildren: r = l,
    lazyCleanUpDelay: u
  } = e, _ = o.useRef(-1);
  o.useLayoutEffect(() => () => clearTimeout(_.current));
  let [, d] = o.useState(a), c = o.useRef(null), E = o.useMemo(() => {
    var e;
    let r = new Set(null === (e = c.current) || void 0 === e ? void 0 : e.keys()),
      s = new Map(c.current);
    for (let e of t) {
      let t = i(e),
        o = s.get(t);
      if (null == o) {
        let i = null != c.current ? 1 : 0,
          r = () => {
            var e, n;
            let i = null === (e = c.current) || void 0 === e ? void 0 : e.get(t);
            null == i || (2 === i.state ? (null === (n = c.current) || void 0 === n || n.delete(t), null != u ? (clearTimeout(_.current), _.current = setTimeout(() => d({}), u)) : d({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(t)))
          },
          s = n(t, e, i, r);
        o = {
          item: e,
          children: s,
          state: i,
          cleanUp: r,
          renderItem: n
        }
      } else if (o.item !== e || o.renderItem !== n || 2 === o.state) {
        let {
          cleanUp: i
        } = o, r = 2 === o.state ? 1 : o.state, s = n(t, e, r, o.cleanUp);
        o = {
          item: e,
          children: s,
          state: r,
          cleanUp: i,
          renderItem: n
        }
      }
      s.set(t, o), r.delete(t)
    }
    for (let e of r) {
      let t = s.get(e);
      if (null != t) {
        if (2 !== t.state || t.renderItem !== n) {
          let {
            item: i,
            cleanUp: r
          } = t, o = n(e, t.item, 2, t.cleanUp);
          null != (t = {
            item: i,
            children: o,
            state: 2,
            cleanUp: r,
            renderItem: n
          }).children ? s.set(e, t) : s.delete(e)
        } else s.set(e, t)
      }
    }
    return s
  }, [t, i, n, u]);
  o.useInsertionEffect(() => (c.current = E, () => {
    var e;
    return null === (e = c.current) || void 0 === e ? void 0 : e.clear()
  }), [E]);
  let I = [];
  for (let [, e] of E) I.push(e.children);
  return (0, s.jsx)(s.Fragment, {
    children: I.length > 0 ? r(I) : null
  })
}