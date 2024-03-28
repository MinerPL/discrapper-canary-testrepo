"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("782568"),
  o = n("31336"),
  u = n("906467"),
  d = n("274522"),
  c = n("54017"),
  f = n("441957"),
  E = n("502568"),
  _ = n("63063"),
  T = n("689938");

function m() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.isDeveloper),
    [t, m] = a.useState(!1),
    [I, p] = a.useState(0),
    h = e => {
      clearTimeout(I), p(setTimeout(() => {
        m(e)
      }, 100))
    };
  return (0, s.jsx)("div", {
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: (0, s.jsx)(i.Popout, {
      shouldShow: t,
      animation: i.Popout.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: !1,
      onRequestOpen: () => m(!0),
      onRequestClose: () => m(!1),
      renderPopout: () => (function(e) {
        let {
          onClose: t,
          isDiscordDeveloper: a
        } = e;
        return (0, s.jsx)(i.Menu, {
          onSelect: () => {},
          navId: "staff-help-popout",
          variant: "fixed",
          onClose: t,
          "aria-label": T.default.Messages.GUILD_ACTIONS_MENU_LABEL,
          children: (0, s.jsxs)(i.MenuGroup, {
            children: [(0, s.jsx)(i.MenuItem, {
              id: "staff-help-bug-reporter",
              label: T.default.Messages.BUG_REPORT_TITLE,
              icon: d.default,
              action: () => (0, i.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("83051")]).then(n.bind(n, "115072"));
                return t => (0, s.jsx)(e, {
                  ...t
                })
              })
            }), a && (0, s.jsx)(i.MenuItem, {
              id: "staff-devtools",
              label: "Toggle DevTools",
              icon: c.default,
              action: () => (0, o.toggleDisplayDevTools)()
            }), (0, s.jsx)(i.MenuItem, {
              id: "staff-help-center",
              label: "Go to Help Center",
              icon: f.default,
              action: () => (0, r.default)(_.SUPPORT_LOCATION)
            })]
          })
        })
      })({
        onClose: () => m(!1),
        isDiscordDeveloper: e
      }),
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, s.jsx)(E.Icon, {
          ...e,
          icon: d.default,
          "aria-label": T.default.Messages.HELP,
          selected: n
        })
      }
    })
  })
}