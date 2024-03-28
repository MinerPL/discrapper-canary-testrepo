"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("725568"),
  r = n("603839"),
  o = n("308083"),
  u = n("689938"),
  d = n("290305");

function c(e) {
  let {
    guildId: t
  } = e, n = s.useCallback(() => {
    (0, i.openFullScreenLayer)(e => {
      let {
        closeLayer: n
      } = e;
      return (0, a.jsx)(r.default, {
        onClose: n,
        guildId: t
      })
    }, {
      layerKey: o.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [t]);
  return (0, a.jsxs)(l.Clickable, {
    onClick: n,
    className: d.upsellContainer,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-xs/bold",
      color: "text-warning",
      className: d.exclusive,
      children: u.default.Messages.CLAN_UPSELL_INVITE
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: u.default.Messages.CLAN_UPSELL_CONTENT
    })]
  })
}