"use strict";
s.r(t), s.d(t, {
  OneWayToTwoWayLinkUpsell: function() {
    return S
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("243778"),
  r = s("26290"),
  o = s("921944"),
  d = s("689938"),
  u = s("238805");
let c = e => {
    let {
      markAsDismissed: t
    } = e;
    return n.useEffect(() => t(o.ContentDismissActionType.UNKNOWN), [t]), (0, a.jsx)(r.TextBadge, {
      className: u.newBadge,
      text: d.default.Messages.NEW
    })
  },
  S = e => {
    let {
      title: t,
      body: s,
      img: n,
      newIndicatorDismissibleContent: r,
      onClick: o
    } = e;
    return (0, a.jsxs)("div", {
      className: u.container,
      children: [n, (0, a.jsxs)("div", {
        className: u.textContainer,
        children: [(0, a.jsxs)("div", {
          className: u.headerText,
          children: [(0, a.jsx)(i.default, {
            contentTypes: [r],
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: s
              } = e;
              return t === r ? (0, a.jsx)(c, {
                markAsDismissed: s
              }) : null
            }
          }), (0, a.jsx)(l.Text, {
            variant: "text-md/semibold",
            children: t
          })]
        }), (0, a.jsx)(l.Text, {
          variant: "text-xs/normal",
          children: s
        })]
      }), (0, a.jsx)(l.Button, {
        size: l.ButtonSizes.MEDIUM,
        onClick: o,
        className: u.reconnectButton,
        children: d.default.Messages.RECONNECT
      })]
    })
  }