n.d(t, {
  N: function() {
return g;
  }
});
var i = n(735250);
n(470079);
var s = n(704215),
  a = n(740111),
  r = n(481060),
  l = n(963249),
  o = n(703656),
  c = n(626135),
  d = n(63063),
  u = n(823188),
  _ = n(474936),
  h = n(981631),
  E = n(689938),
  I = n(745710),
  m = n(74316);

function g(e) {
  var t, n;
  let {
content: g,
renderModalProps: p,
analyticsLocations: T,
analyticsLocation: S,
isLightTheme: C
  } = e, f = 'AnnouncementModalVariant1_'.concat(s.z[Number(g.dismissKey)]), {
onClose: N
  } = p, A = null != g.button && '' !== g.button.copy ? g.button.copy : E.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN, Z = (null === (t = g.button) || void 0 === t ? void 0 : t.buttonAction) === a.Wc.OPEN_MARKETING_PAGE ? 'jump_to_mkt_button' : 'get_nitro_button', L = (null === (n = g.button) || void 0 === n ? void 0 : n.buttonAction) === a.Wc.OPEN_MARKETING_PAGE ? () => {
(0, o.uL)(h.Z5c.APPLICATION_STORE), N();
  } : () => (0, l.Z)({
subscriptionTier: _.Si.TIER_2,
analyticsLocations: T,
analyticsObject: {
  ...S,
  object: h.qAy.BUTTON_CTA,
  objectType: h.Qqv.TIER_2
},
onClose: e => {
  e && N();
}
  }), v = '' !== g.helpArticleId ? () => (0, i.jsx)(r.Anchor, {
className: I.termsApplyAnchor,
href: d.Z.getArticleURL(g.helpArticleId),
children: E.Z.Messages.BOGO_TERMS_APPLY
  }) : void 0, O = {
type: 'video',
src: C ? g.heroArtVideoLinkLightTheme : g.videoLink
  };
  null != g.heroArtVideoSubtitles && (O.subtitles = g.heroArtVideoSubtitles.map(e => {
var t;
return {
  locale: e.locale,
  src: e.link,
  isDefault: null !== (t = e.isDefault) && void 0 !== t && t
};
  })), ('' !== g.heroArtImageLinkDarkTheme || '' !== g.heroArtImageLinkLightTheme) && (O = {
type: 'image',
src: C ? g.heroArtImageLinkLightTheme : g.heroArtImageLinkDarkTheme
  });
  let R = C ? u.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : u.VE.PREMIUM_TIER_2_WHITE_FILL,
x = '' !== g.modalTopPill ? () => (0, i.jsx)(u.Cy, {
  text: g.modalTopPill,
  className: I.modalTopPill,
  colorOptions: R
}) : void 0;
  return {
renderModalProps: p,
header: g.header,
modalTopExtra: x,
subHeader: g.subheader,
subHeaderExtra: v,
body: g.body,
heroArt: O,
featureCards: g.featureCards.map(e => ({
  header: e.header,
  subHeader: e.body,
  imageSrc: C ? e.imageLinkLightTheme : e.imageLink,
  tagText: '' !== e.pill ? e.pill : void 0
})),
changeLogId: f,
button: () => {
  let e = Date.now();
  return (0, i.jsxs)(r.ShinyButton, {
    className: I.buttonWide,
    innerClassName: I.innerButton,
    color: r.Button.Colors.GREEN,
    size: r.Button.Sizes.SMALL,
    onClick: () => {
      c.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
        change_log_id: f,
        cta_type: Z,
        seconds_open: Math.round((Date.now() - e) / 1000),
        target: f
      }), L();
    },
    children: [
      (0, i.jsx)('img', {
        alt: '',
        className: I.nitroIconSubHeader,
        src: m
      }),
      A
    ]
  });
},
modalDismissibleContent: '' !== g.dismissKey ? Number(g.dismissKey) : void 0
  };
}