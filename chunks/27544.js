"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  n = s("748780"),
  i = s("442837"),
  r = s("481060"),
  o = s("741361"),
  d = s("856606"),
  u = s("277053"),
  c = s("259580"),
  h = s("689938"),
  m = s("62403");

function E() {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.advancedMode),
    [t] = a.useState(new n.default.Value(e ? 1 : 0));
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.FormDivider, {
      className: m.advancedModeDivider
    }), (0, l.jsx)(r.HeadingLevel, {
      component: (0, l.jsx)(r.Button, {
        look: r.Button.Looks.BLANK,
        color: r.Button.Colors.TRANSPARENT,
        onClick: function() {
          e ? n.default.timing(t, {
            toValue: 0,
            duration: 250
          }).start(() => {
            (0, o.setAdvancedMode)(!1)
          }) : ((0, o.setAdvancedMode)(!0), n.default.timing(t, {
            toValue: 1,
            duration: 250
          }).start())
        },
        children: (0, l.jsxs)(r.FormTitle, {
          tag: "h1",
          className: m.advancedTitle,
          children: [h.default.Messages.CHANNEL_PERMISSIONS_ADVANCED_PERMISSIONS, (0, l.jsx)(c.default, {
            expanded: e,
            className: m.titleCaret,
            width: 20,
            height: 20
          })]
        })
      }),
      children: e && (0, l.jsx)(n.default.div, {
        style: {
          opacity: t
        },
        children: (0, l.jsx)(d.default, {})
      })
    })]
  })
}