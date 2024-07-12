t.r(e), t.d(e, {
  default: function() {
return L;
  }
});
var o = t(735250);
t(470079);
var E = t(98278),
  i = t(790527),
  a = t(474936),
  c = t(981631),
  s = t(689938);

function L(n) {
  var e;
  let {
channel: L,
onClose: u,
..._
  } = n, r = s.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_BODY.format({
onLearnMore: function() {
  u(), (0, E.z)(!0);
}
  });
  return (0, o.jsx)(i.Z, {
artURL: t(990158),
type: a.cd.MESSAGE_LENGTH_UPSELL,
title: s.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_HEADER,
body: r,
glowUp: r,
analyticsSource: {
  page: (null == (e = L) ? void 0 : e.getGuildId()) != null ? c.ZY5.GUILD_CHANNEL : (null == e ? void 0 : e.isGroupDM()) || (null == e ? void 0 : e.isPrivate()) ? c.ZY5.DM_CHANNEL : null
},
analyticsLocation: {
  section: c.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
  object: c.qAy.BUTTON_CTA
},
onClose: u,
..._
  });
}