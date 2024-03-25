"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("433487"),
  u = n("149279"),
  d = n("392533"),
  c = n("782340"),
  f = n("663670"),
  E = function(e) {
    let {
      guild: t
    } = e, [n, l] = s.useState(!1), E = s.useCallback(() => l(!0), [l]), h = s.useCallback(() => l(!0), [l]);
    return (0, a.jsx)("div", {
      className: i(f.actionButtonsContainer, {
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