"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("599110"),
  i = n("698370"),
  r = n("922832"),
  o = n("49111"),
  u = n("782340"),
  d = n("238595");

function c() {
  return (0, a.jsxs)(s.Button, {
    innerClassName: d.qrCodeButtonContent,
    size: s.Button.Sizes.LARGE,
    onClick: () => {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("668170").then(n.bind(n, "668170"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }), l.default.track(o.AnalyticEvents.FAMILY_CENTER_ACTION, {
        action: r.FamilyCenterAction.ShowQRCodeModal
      })
    },
    children: [(0, a.jsx)(i.default, {}), u.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_BUTTON]
  })
}