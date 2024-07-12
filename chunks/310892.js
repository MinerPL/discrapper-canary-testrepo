n.r(t), n.d(t, {
  default: function() {
return m;
  },
  openEffectsUpsellModal: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  l = n(174609),
  s = n(98278),
  r = n(790527),
  o = n(810090),
  c = n(626135),
  d = n(981631),
  u = n(689938),
  h = n(863527),
  p = n(626065);

function m(e) {
  let {
onClose: t,
analytics: n,
...a
  } = e, m = u.Z.Messages.VOICE_CHANNEL_EFFECTS_UPSELL_BODY_2.format({
onPressMore: function() {
  (0, l.Z)(), t(), c.default.track(d.rMx.PREMIUM_PROMOTION_OPENED, {
    location_section: d.jXE.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
    location_object: d.qAy.NAVIGATION_LINK
  }), (0, s.z)();
}
  });
  return (0, i.jsx)(r.Z, {
title: u.Z.Messages.VOICE_CHANNEL_EFFECTS_UPSELL_HEADER_2,
glowUp: m,
body: m,
artContainerClassName: h.artContainer,
enableArtBoxShadow: !1,
type: n.type,
analyticsLocation: {
  section: d.jXE.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
  object: n.object
},
analyticsSource: {
  page: d.ZY5.CHANNEL_CALL,
  section: n.section
},
onClose: t,
onSubscribeClick: l.Z,
artElement: (0, i.jsx)(o.Z, {
  className: h.video,
  src: p,
  loop: !0,
  autoPlay: !0
}),
...a
  });
}

function _(e) {
  let {
analytics: t
  } = e;
  (0, a.openModalLazy)(async () => {
let {
  default: e
} = await Promise.resolve().then(n.bind(n, 310892));
return n => (0, i.jsx)(e, {
  analytics: t,
  ...n
});
  });
}