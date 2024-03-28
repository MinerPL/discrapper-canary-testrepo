"use strict";
t.r(r), t.d(r, {
  default: function() {
    return m
  }
}), t("47120"), t("653041");
var a = t("735250"),
  n = t("470079"),
  i = t("803997"),
  o = t.n(i),
  l = t("481060"),
  s = t("424625"),
  c = t("823379"),
  d = t("246992"),
  u = t("779869");
let h = n.forwardRef(function(e, r) {
  let {
    id: t,
    selected: n,
    onClick: i,
    children: s
  } = e;
  return (0, a.jsx)(l.Clickable, {
    className: o()(u.tabItem, {
      [u.selected]: n
    }),
    "data-tab-id": t,
    innerRef: r,
    onClick: i,
    children: s
  })
});

function p(e) {
  let {
    tabs: r,
    selectedTabId: t,
    onSelectTab: i
  } = e, o = n.useRef(null), p = n.useRef(0), m = n.useRef(new Map), [g, f] = n.useState([]), b = n.useCallback(() => {
    var e, a, n, i;
    if (null == o.current) return;
    let l = [],
      s = o.current.getBoundingClientRect().width;
    if (s !== p.current) {
      for (let o of (p.current = s, s -= null !== (a = null === (e = m.current.get(t)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0, r)) o.id !== t && (s -= null !== (i = null === (n = m.current.get(o.id)) || void 0 === n ? void 0 : n.width) && void 0 !== i ? i : 0) < 0 && l.push(o.id);
      f(l)
    }
  }, [r, t]), y = n.useRef(null);
  n.useEffect(() => (y.current = new ResizeObserver(() => b()), null != o.current && y.current.observe(o.current), () => {
    var e;
    null === (e = y.current) || void 0 === e || e.disconnect()
  }), [b]);
  let x = n.useCallback(e => {
    let {
      closePopout: n
    } = e;
    return (0, a.jsx)(l.Menu, {
      navId: "devtools-overflow",
      variant: "fixed",
      onClose: n,
      "aria-label": "Overflowed DevTools Tabs",
      onSelect: n,
      children: r.map(e => {
        let {
          id: r,
          name: n
        } = e;
        return g.includes(r) && t !== r ? (0, a.jsx)(l.MenuItem, {
          id: r,
          label: n,
          action: () => i(r)
        }, r) : null
      }).filter(c.isNotNullish)
    })
  }, [r, g, i, t]);
  return (0, a.jsxs)("div", {
    className: u.tabBar,
    ref: o,
    children: [r.map(e => {
      let {
        id: r,
        name: n
      } = e;
      if (!g.includes(r)) return (0, a.jsx)(h, {
        id: r,
        selected: t === r,
        ref: e => {
          var t, a, n;
          let i = null !== (a = null === (t = m.current.get(r)) || void 0 === t ? void 0 : t.width) && void 0 !== a ? a : 0;
          m.current.set(r, {
            node: e,
            width: null !== (n = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : i
          })
        },
        onClick: t !== r ? () => i(r) : void 0,
        children: n
      }, r)
    }).filter(c.isNotNullish), g.length > 0 && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(l.Popout, {
        layerContext: d.devToolsLayerContext,
        renderPopout: x,
        position: "bottom",
        align: "right",
        spacing: 0,
        children: e => (0, a.jsx)(l.Button, {
          ...e,
          className: u.overflowChevron,
          size: l.Button.Sizes.ICON,
          look: l.Button.Looks.BLANK,
          children: (0, a.jsx)(s.default, {
            className: u.__invalid_overflowIcon,
            width: 16,
            height: 16
          })
        })
      })
    })]
  })
}

function m(e, r) {
  var t, i, o;
  let {
    tabs: l,
    initialSelectedTabId: s,
    onChangeTab: c
  } = e, [d, u] = n.useState(null != s ? s : null === (t = l[0]) || void 0 === t ? void 0 : t.id), h = n.useCallback(() => (0, a.jsx)(p, {
    tabs: l,
    selectedTabId: d,
    onSelectTab: e => {
      u(e), null == c || c(e)
    }
  }), [d, u, c, ...r]);
  return {
    TabBar: h,
    renderSelectedTab: null !== (o = null === (i = l.find(e => e.id === d)) || void 0 === i ? void 0 : i.render) && void 0 !== o ? o : () => null,
    selectedTabId: d
  }
}