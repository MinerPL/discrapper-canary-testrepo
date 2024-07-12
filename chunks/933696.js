e.r(n), e.d(n, {
  default: function() {
return i;
  }
});
var o = e(735250);
e(470079);
var s = e(98278),
  _ = e(790527),
  c = e(474936),
  L = e(981631),
  a = e(689938);

function i(t) {
  let {
onClose: n,
source: i,
...r
  } = t, I = a.Z.Messages.GUILD_IDENTITY_UPSELL_MODAL_BODY.format({
onAndMore: function() {
  n(), (0, s.z)(!0);
}
  });
  return (0, o.jsx)(_.Z, {
artURL: e(399604),
type: c.cd.PREMIUM_GUILD_IDENTITY_MODAL,
title: a.Z.Messages.GUILD_IDENTITY_UPSELL_MODAL_TITLE,
body: I,
glowUp: I,
analyticsSource: i,
analyticsLocation: {
  section: L.jXE.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
  object: L.qAy.BUTTON_CTA
},
onClose: n,
...r
  });
}