"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(393903),
  u = n(689938),
  _ = n(691553);

function d(e) {
  let {
    items: t,
    renderItem: n
  } = e;
  return (0, i.jsx)(a.Tooltip, {
    text: (0, i.jsx)("div", {
      className: _.tooltip,
      children: t.map(n)
    }),
    "aria-label": "overflow",
    children: e => (0, i.jsx)("div", {
      ...e,
      children: n(u.Z.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
        count: t.length
      }))
    })
  })
}
t.Z = function(e) {
  let {
    className: t,
    items: n,
    renderItem: s,
    itemGapPx: a = 0,
    maxLines: c
  } = e, {
    lastVisibleIndex: E,
    containerRef: I,
    itemsRef: T,
    overflowItemsRef: h
  } = function(e) {
    let {
      itemGapPx: t,
      items: n,
      maxLines: i
    } = e, [s, o] = r.useState(0), [a, u] = r.useState(0), _ = r.useRef([]), d = r.useRef(0), c = r.useRef(0), E = r.useRef(null), I = r.useRef(null), T = (0, l.y)(e => {
      let t = null == e ? void 0 : e.getBoundingClientRect().width;
      null != t && u(t)
    });
    return r.useLayoutEffect(() => {
      var e;
      if (null == E.current || null == I.current) return;
      _.current.length = n.length, E.current.childNodes.forEach((e, t) => {
        let {
          width: n
        } = e.getBoundingClientRect();
        _.current[t] = n
      }), d.current = null !== (e = I.current.getBoundingClientRect().width) && void 0 !== e ? e : 0;
      let r = function(e) {
        let {
          items: t,
          maxLines: n,
          itemWidths: i,
          itemGapPx: r,
          containerWidth: s,
          overflowWidth: o
        } = e, a = 0, l = 0, u = 0;
        for (let e = 0; e < t.length; e++) {
          let _ = i[e];
          if (isNaN(_) || _ > s) continue;
          let d = a === n - 1,
            c = e === t.length - 1;
          if (!(l + _ + (d && !c ? o + r : 0) < s)) {
            if (d) break;
            a++, l = 0
          }
          u = e, l += _ + r
        }
        return u
      }({
        items: n,
        maxLines: i,
        itemGapPx: t,
        containerWidth: a,
        itemWidths: _.current,
        overflowWidth: d.current
      });
      r !== c.current && (c.current = r, o(e => e + 1))
    }, [a, t, n, i]), r.useMemo(() => ({
      lastVisibleIndex: c.current,
      containerRef: T,
      itemsRef: E,
      overflowItemsRef: I,
      version: s
    }), [T, s])
  }({
    items: n,
    itemGapPx: a,
    maxLines: c
  }), S = r.useMemo(() => n.slice(0, E + 1), [n, E]), f = r.useMemo(() => n.slice(E + 1), [n, E]);
  return (0, i.jsxs)("div", {
    className: o()(t, _.items),
    ref: I,
    children: [(0, i.jsxs)("div", {
      "aria-hidden": !0,
      className: _.measurements,
      children: [(0, i.jsx)("div", {
        className: _.itemMeasurements,
        ref: T,
        children: n.map(s)
      }), (0, i.jsx)("div", {
        className: _.overflowMeasurement,
        ref: h,
        children: s(u.Z.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
          count: Number("1".concat(n.length))
        }))
      })]
    }), S.map(s), f.length > 0 && (0, i.jsx)(d, {
      items: f,
      renderItem: s
    })]
  })
}