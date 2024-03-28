"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("808268"),
  u = n("404975"),
  d = n("455839"),
  c = n("689938"),
  f = n("616562");
t.default = function(e) {
  let {
    guild: t
  } = e, [n, l] = s.useState(!1), E = s.useCallback(() => l(!0), [l]), h = s.useCallback(() => l(!0), [l]);
  return (0, a.jsx)("div", {
    className: i()(f.actionButtonsContainer, {
      [f.forceButtonsShow]: n
    }),
    children: (0, a.jsx)(u.default, {
      children: (0, a.jsx)(d.GuildDiscoveryMenuPopout, {
        onRequestOpen: E,
        onRequestClose: h,
        guild: t,
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, a.jsx)(r.Tooltip, {
            text: c.default.Messages.MORE,
            hideOnClick: !0,
            children: e => {
              let {
                onClick: s,
                ...l
              } = e;
              return (0, a.jsx)(u.Button, {
                ...n,
                ...l,
                onClick: e => {
                  e.stopPropagation(), null == s || s(), t(e)
                },
                "aria-label": c.default.Messages.MORE,
                children: (0, a.jsx)(o.default, {
                  className: f.overflowIcon
                })
              })
            }
          })
        }
      })
    })
  })
}