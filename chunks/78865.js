a.r(t), a.d(t, {
  default: function() {
return A;
  }
});
var s = a(735250);
a(470079);
var n = a(174609),
  r = a(631771),
  o = a(790527),
  d = a(703656),
  c = a(626135),
  _ = a(981631),
  i = a(474936),
  E = a(689938),
  u = a(130245);
let p = a(279360);

function A(e) {
  let {
onClose: t,
onCloseParent: a,
analyticsSource: A,
...M
  } = e, l = r.PC.useExperiment({
location: 'HD Streaming Roadblock'
  }, {
autoTrackExposure: !0
  }).enabled, S = (0, s.jsx)('img', {
className: l ? u.updatedArt : u.art,
alt: 'HD Streaming Nitro Perk',
src: l ? 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png' : p
  }), L = l ? E.Z.Messages.STREAM_PREMIUM_UPSELL_TITLE : E.Z.Messages.STREAM_PREMIUM_UPSELL_HEADER_V2, T = l ? E.Z.Messages.STREAM_PREMIUM_UPSELL_DESCRIPTION : E.Z.Messages.STREAM_PREMIUM_UPSELL_BODY_V2;
  return (0, s.jsx)(o.Z, {
title: L,
glowUp: T,
body: T,
artElement: S,
artContainerClassName: l ? u.updatedArtContainer : void 0,
type: i.cd.STREAM_QUALITY_UPSELL,
analyticsLocation: {
  section: _.jXE.STREAM_UPSELL_MODAL,
  object: _.qAy.BUTTON_CTA
},
analyticsSource: A,
onClose: t,
onSubscribeClick: n.Z,
secondaryCTA: E.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA,
onSecondaryClick: function() {
  (0, n.Z)(), t(), null == a || a(), c.default.track(_.rMx.PREMIUM_PROMOTION_OPENED, {
    location_section: _.jXE.STREAM_UPSELL_MODAL,
    location_object: _.qAy.NAVIGATION_LINK
  }), (0, d.uL)(_.Z5c.APPLICATION_STORE);
},
showEnhancedUpsell: !0,
enableArtBoxShadow: !1,
headerClassName: l ? u.updatedHeader : void 0,
...M
  });
}