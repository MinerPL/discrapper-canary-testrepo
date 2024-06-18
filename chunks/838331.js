"use strict";
n.d(t, {
  A7: function() {
    return A
  },
  hQ: function() {
    return C
  },
  lo: function() {
    return g
  },
  yn: function() {
    return m
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(924826),
  l = n(91192),
  u = n(178940),
  _ = n(1561),
  d = n(260034),
  c = n(742746),
  E = n(326452),
  I = n(993365),
  T = n(441674),
  h = n(689938),
  S = n(665553);
let f = "data-listbox-item-id",
  N = Object.freeze({
    STANDARD: S.selected,
    BRAND: S.selectedBrand
  });

function A(e) {
  let [t, n] = r.useState(() => new Set(e));
  return [t, r.useCallback(e => {
    n(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    })
  }, [])]
}

function m(e) {
  let [t, n] = r.useState(() => new Set(null != e ? [e] : void 0));
  return [t, r.useCallback(e => {
    n(new Set([e]))
  }, [])]
}

function O(e) {
  return String(e)
}
let R = r.createContext({
  activeDescendant: null,
  selected: new Set,
  setSelected: () => null,
  itemToString: O
});

function C(e) {
  let {
    placeholder: t,
    children: n,
    value: s,
    onChange: u,
    className: _,
    listClassName: T,
    "aria-label": N,
    multiSelect: A = !1,
    autoFocus: m = !1,
    maxVisibleItems: C = 5,
    itemToString: p = O,
    showScrollbar: g = !1
  } = e, [L, v] = r.useState(""), [D] = r.useState(!0), [M, P] = r.useState(null), y = r.useId(), U = r.useRef(null);
  r.useLayoutEffect(() => {
    let e = document.querySelector("[".concat(f, '="').concat(M, '"]')),
      t = U.current;
    null != t && null != e && t.scrollIntoViewNode({
      node: e,
      padding: 12
    })
  }, [M]);
  let b = n(L),
    G = 0 === b.length,
    w = r.useId(),
    k = r.useCallback(() => new Promise(e => {
      let t = U.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    B = r.useCallback(() => new Promise(e => {
      let t = U.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    x = r.useCallback((e, t) => {
      P(t);
      let n = document.querySelector(e),
        i = U.current;
      null != i && null != n && i.scrollIntoViewNode({
        node: n
      })
    }, []),
    V = (0, a.ZP)({
      id: w,
      isEnabled: !0,
      useVirtualFocus: !0,
      scrollToStart: k,
      scrollToEnd: B,
      setFocus: x
    }),
    Z = g ? c.Tv : c.lW;
  return (0, i.jsx)(l.bG, {
    navigator: V,
    children: (0, i.jsx)(l.SJ, {
      children: e => {
        let {
          ref: n,
          onKeyDown: r,
          ...a
        } = e;
        return (0, i.jsxs)("div", {
          ref: n,
          role: "combobox",
          "aria-label": N,
          "aria-expanded": D,
          "aria-controls": D ? y : void 0,
          "aria-owns": y,
          "aria-haspopup": "listbox",
          className: o()(S.combobox, _),
          children: [(0, i.jsx)(E.E, {
            autoFocus: m,
            size: E.E.Sizes.MEDIUM,
            placeholder: t,
            query: L,
            onChange: v,
            onKeyDown: r,
            onBlur: () => P(null),
            onClear: () => v(""),
            className: o()({
              [S.searchWithScrollbar]: g
            }),
            inputProps: {
              "aria-multiline": !1,
              "aria-activedescendant": null != M ? M : void 0
            }
          }), (0, i.jsx)("div", {
            children: D && (G ? (0, i.jsxs)("div", {
              className: S.empty,
              children: [(0, i.jsx)(d.X, {
                variant: "heading-md/semibold",
                children: h.Z.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
              }), (0, i.jsx)(I.x, {
                color: "text-muted",
                variant: "text-md/normal",
                children: h.Z.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
              })]
            }) : (0, i.jsx)(R.Provider, {
              value: {
                activeDescendant: M,
                selected: s,
                setSelected: u,
                itemToString: p
              },
              children: (0, i.jsx)(Z, {
                ...a,
                style: {
                  maxHeight: 46 * C
                },
                "aria-multiselectable": A,
                id: y,
                ref: U,
                className: o()(S.list, T, {
                  [S.scroller]: g
                }),
                sections: [b.length],
                sectionHeight: 0,
                rowHeight: 40,
                renderRow: e => {
                  let {
                    row: t
                  } = e;
                  return b[t]
                },
                renderSection: () => null
              })
            }))
          })]
        })
      }
    })
  })
}
let p = r.createContext(null);

function g(e) {
  var t;
  let {
    value: n,
    children: s,
    disabled: a = !1,
    selectedColor: u = N.STANDARD,
    ...d
  } = e, {
    activeDescendant: c,
    selected: E,
    setSelected: I,
    itemToString: T
  } = r.useContext(R), h = T(n), A = c === h, m = null !== (t = null == d ? void 0 : d.selected) && void 0 !== t ? t : E.has(n), O = (0, l.JA)(h);
  return (0, i.jsx)(_.P, {
    tag: "li",
    id: h,
    onClick: () => a ? null : I(n),
    [f]: n,
    className: o()(S.item, {
      [S.focused]: A,
      [u]: m,
      [S.disabled]: a
    }),
    ...O,
    role: "option",
    "aria-selected": m,
    "aria-disabled": a,
    children: (0, i.jsx)(p.Provider, {
      value: n,
      children: s
    })
  })
}
g.Colors = N, g.Label = function(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("span", {
    className: S.itemLabel,
    children: t
  })
}, g.Icon = function(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("span", {
    className: S.itemCheckbox,
    children: t
  })
}, g.Checkbox = function(e) {
  let {
    checked: t
  } = e, {
    selected: n
  } = r.useContext(R), s = r.useContext(p);
  return (0, i.jsx)("span", {
    className: S.itemCheckbox,
    children: (0, i.jsx)(u.X, {
      displayOnly: !0,
      value: null != t ? t : null != s && n.has(s),
      type: u.X.Types.INVERTED,
      size: 20
    })
  })
}, g.Checkmark = function() {
  let {
    selected: e
  } = r.useContext(R), t = r.useContext(p);
  return e.has(t) ? (0, i.jsx)("span", {
    className: S.itemCheckbox,
    children: (0, i.jsx)(T.Z, {
      width: 20,
      height: 20
    })
  }) : null
}