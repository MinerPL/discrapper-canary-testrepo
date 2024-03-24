"use strict";
n.r(t), n.d(t, {
  useSignUpButton: function() {
    return S
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("974667"),
  i = n("524173"),
  r = n("77078"),
  o = n("446674"),
  u = n("841098"),
  d = n("20606"),
  c = n("610898"),
  f = n("829562"),
  h = n("956089"),
  C = n("108189"),
  p = n("124150"),
  m = n("49111"),
  E = n("782340"),
  g = n("884836");

function I(e) {
  let {
    target: t
  } = e, o = (0, s.useTreeItem)("fakedoor"), p = a.useCallback(() => {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("597245").then(n.bind(n, "597245"));
      return n => (0, l.jsx)(e, {
        ...n,
        target: t
      })
    })
  }, [t]), I = "url(".concat(t.backgroundAssetUrl, ") black top / cover no-repeat"), S = (0, l.jsxs)("div", {
    className: g.tooltipContainer,
    children: [(0, l.jsx)("div", {
      className: g.tooltipBackground,
      style: {
        background: I
      }
    }), (0, l.jsx)(r.Heading, {
      variant: "heading-sm/medium",
      children: t.tooltipHeader
    }), (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      children: E.default.Messages.SIGNUP_BUTTON_TOOLTIP_CTA
    })]
  }), _ = (0, u.useTheme)();
  return (0, l.jsxs)(c.ListItem, {
    children: [(0, l.jsx)(r.ThemeContextProvider, {
      theme: m.ThemeTypes.DARK,
      children: (0, l.jsx)(f.default, {
        text: S,
        children: (0, l.jsx)(r.ThemeContextProvider, {
          theme: _,
          children: (0, l.jsx)(r.BlobMask, {
            lowerBadge: (0, l.jsx)(h.NumberBadge, {
              count: 1,
              color: d.default.BG_BRAND
            }),
            children: (0, l.jsx)(C.default, {
              ...o,
              onMouseDown: p,
              children: (0, l.jsx)(i.BellIcon, {
                color: d.default.TEXT_NORMAL
              })
            })
          })
        })
      })
    }), (0, l.jsx)("div", {
      style: {
        background: I,
        width: 0,
        height: 0
      }
    })]
  })
}

function S() {
  let e = (0, o.useStateFromStores)([p.default], () => p.default.getActiveUserSignUp());
  return null == e ? null : (0, l.jsx)(I, {
    target: e
  })
}