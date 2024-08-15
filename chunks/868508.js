a.r(t), a.d(t, {
  default: function() {
return D;
  }
});
var r = a(735250);
a(470079);
var n = a(442837),
  s = a(704215),
  o = a(481060),
  l = a(2052),
  c = a(100527),
  d = a(906732),
  u = a(963249),
  i = a(706454),
  _ = a(594174),
  f = a(626135),
  h = a(63063),
  g = a(74538),
  m = a(290347),
  N = a(474936),
  E = a(981631),
  p = a(689938),
  C = a(626984),
  O = a(913907),
  x = a(82341),
  A = a(309539),
  M = a(74316);
let b = '2023_summer_bogo',
  T = 'DnkvLW5052Y';

function D(e) {
  let {
renderModalProps: t
  } = e, {
onClose: a
  } = t, D = (0, n.e7)([i.default], () => i.default.locale), y = D.split('-')[0], R = 'zh-CN' === D ? 'zh-Hans' : 'zh-TW' === D ? 'zh-Hant' : y, v = {
url: ''.concat((0, E.ivE)(T), '?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=').concat('en' === y ? '0' : '1', '&cc_lang_pref=').concat(R),
width: 498,
height: 280
  }, {
location: B
  } = (0, l.O)(), {
analyticsLocations: L
  } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), G = (0, n.e7)([_.default], () => _.default.getCurrentUser()), S = (0, g.M5)(G, N.p9.TIER_2), H = (0, g.I5)(G) && !S;
  return (0, r.jsx)(m.Z, {
renderModalProps: t,
heroArt: {
  type: 'embed',
  embed: v,
  thumbnail: {
    url: 'https://i.ytimg.com/vi/'.concat(T, '/maxresdefault.jpg'),
    width: 498,
    height: 280
  },
  href: 'https://youtu.be/'.concat(T)
},
modalDismissibleContent: s.z.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
header: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
subHeader: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
subHeaderExtra: () => (0, r.jsx)(o.Anchor, {
  className: C.termsApplyAnchor,
  href: h.Z.getArticleURL(E.BhN.SUMMER_2023_BOGO),
  children: (0, r.jsx)(o.Heading, {
    variant: 'heading-md/normal',
    className: C.termsApplyBodyText,
    children: p.Z.Messages.BOGO_TERMS_APPLY
  })
}),
featureCards: [{
    header: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
    subHeader: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
      helpCenterLink: h.Z.getArticleURL(E.BhN.REMIXING)
    }),
    imageSrc: O,
    tagText: p.Z.Messages.EARLY_ACCESS
  },
  {
    header: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
    subHeader: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
    imageSrc: A
  },
  {
    header: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
    subHeader: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
    imageSrc: x
  }
],
changeLogId: b,
button: () => {
  let e = H ? 'upgrade_plan_button' : 'get_nitro_button',
    t = Date.now();
  return (0, r.jsxs)(o.ShinyButton, {
    className: C.buttonWide,
    innerClassName: C.innerButton,
    color: o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    onClick: () => {
      f.default.track(E.rMx.CHANGE_LOG_CTA_CLICKED, {
        change_log_id: b,
        cta_type: e,
        seconds_open: Math.round((Date.now() - t) / 1000),
        target: 'bogo_payment_model'
      }), (0, u.Z)({
        subscriptionTier: N.Si.TIER_2,
        analyticsLocations: L,
        analyticsObject: {
          ...B,
          object: E.qAy.BUTTON_CTA,
          objectType: E.Qqv.TIER_2
        },
        onClose: e => {
          e && a();
        }
      });
    },
    children: [
      (0, r.jsx)('img', {
        alt: '',
        className: C.nitroIconSubHeader,
        src: M
      }),
      p.Z.Messages.BOGO_CLAIM_OFFER
    ]
  });
}
  });
}