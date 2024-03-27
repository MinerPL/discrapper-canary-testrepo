"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("495137"),
  i = n("77078"),
  r = n("446674"),
  o = n("124150"),
  u = n("49111"),
  d = n("8732"),
  c = function(e) {
    let {
      guild: t
    } = e, c = (0, r.useStateFromStores)([o.default], () => o.default.getActiveGuildSignUp(t.id)), f = s.useCallback(() => {
      null != c && (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("597245").then(n.bind(n, "597245"));
        return n => (0, a.jsx)(e, {
          ...n,
          target: c,
          guildId: t.id
        })
      })
    }, [c, t.id]);
    if (null == c) return null;
    let E = "url(".concat(c.backgroundAssetUrl, ") black top / cover no-repeat");
    return (0, a.jsx)(i.ThemeContextProvider, {
      theme: u.ThemeTypes.DARK,
      children: (0, a.jsx)("div", {
        className: d.container,
        children: (0, a.jsxs)("div", {
          className: d.card,
          style: {
            background: E
          },
          children: [(0, a.jsxs)("div", {
            className: d.eyebrow,
            children: [(0, a.jsx)(l.EnvelopeIcon, {
              height: 12,
              width: 12,
              color: "currentColor"
            }), (0, a.jsx)(i.Text, {
              variant: "text-xs/semibold",
              color: "none",
              children: "EXCLUSIVE INVITE"
            })]
          }), (0, a.jsx)(i.Heading, {
            variant: "heading-sm/medium",
            children: "Want to recruit more people to play Valorant in your server?"
          }), (0, a.jsx)(i.Button, {
            className: d.button,
            color: "none",
            onClick: f,
            children: (0, a.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "none",
              children: "Learn More"
            })
          })]
        })
      })
    })
  }