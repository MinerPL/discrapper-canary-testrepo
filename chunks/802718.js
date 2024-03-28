"use strict";
n.r(t), n.d(t, {
  useSignUpButton: function() {
    return I
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("924826"),
  i = n("652335"),
  r = n("481060"),
  o = n("442837"),
  u = n("239091"),
  d = n("410030"),
  c = n("377171"),
  f = n("682662"),
  h = n("662146"),
  C = n("26290"),
  p = n("15434"),
  m = n("678513"),
  g = n("981631"),
  E = n("689938"),
  S = n("478011");

function _(e) {
  let {
    target: t
  } = e, o = (0, s.useTreeItem)("fakedoor"), m = a.useCallback(() => {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("22862"), n.e("81847")]).then(n.bind(n, "646202"));
      return n => (0, l.jsx)(e, {
        ...n,
        target: t
      })
    })
  }, [t]), _ = a.useCallback(e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("39612").then(n.bind(n, "761624"));
      return n => (0, l.jsx)(e, {
        ...n,
        signupTarget: t
      })
    })
  }, [t]), I = "url(".concat(t.backgroundAssetUrl, ") black top / cover no-repeat"), N = (0, l.jsxs)("div", {
    className: S.tooltipContainer,
    children: [(0, l.jsx)("div", {
      className: S.tooltipBackground,
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
  }), T = (0, d.useTheme)();
  return (0, l.jsxs)(f.ListItem, {
    children: [(0, l.jsx)(r.ThemeContextProvider, {
      theme: g.ThemeTypes.DARK,
      children: (0, l.jsx)(h.default, {
        text: N,
        tooltipClass: S.tooltip,
        children: (0, l.jsx)(r.ThemeContextProvider, {
          theme: T,
          children: (0, l.jsx)(r.BlobMask, {
            lowerBadge: (0, l.jsx)(C.NumberBadge, {
              count: 1,
              color: c.default.BG_BRAND
            }),
            children: (0, l.jsx)(p.default, {
              ...o,
              onClick: m,
              onContextMenu: _,
              children: (0, l.jsx)(i.BellIcon, {
                color: c.default.TEXT_NORMAL
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

function I() {
  let e = (0, o.useStateFromStores)([m.default], () => m.default.getActiveUserSignUp());
  return null == e ? null : (0, l.jsx)(_, {
    target: e
  })
}