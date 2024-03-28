"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("626135"),
  i = n("503899"),
  r = n("292352"),
  o = n("981631"),
  u = n("689938"),
  d = n("430642");

function c() {
  return (0, a.jsxs)(s.Button, {
    innerClassName: d.qrCodeButtonContent,
    size: s.Button.Sizes.LARGE,
    onClick: () => {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("73422"), n.e("90688")]).then(n.bind(n, "978305"));
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