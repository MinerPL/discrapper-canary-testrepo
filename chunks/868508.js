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
  d = a(2052),
  l = a(100527),
  c = a(906732),
  u = a(963249),
  i = a(706454),
  _ = a(594174),
  g = a(626135),
  h = a(63063),
  f = a(74538),
  m = a(290347),
  N = a(474936),
  E = a(981631),
  C = a(689938),
  p = a(903538),
  O = a(913907),
  A = a(82341),
  x = a(309539),
  M = a(74316);
let T = '2023_summer_bogo',
  b = 'DnkvLW5052Y';

function D(e) {
  let {
renderModalProps: t
  } = e, {
onClose: a
  } = t, D = (0, n.e7)([i.default], () => i.default.locale), y = D.split('-')[0], R = 'zh-CN' === D ? 'zh-Hans' : 'zh-TW' === D ? 'zh-Hant' : y, v = {
url: ''.concat((0, E.ivE)(b), '?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=').concat('en' === y ? '0' : '1', '&cc_lang_pref=').concat(R),
width: 498,
height: 280
  }, {
location: B
  } = (0, d.O)(), {
analyticsLocations: G
  } = (0, c.ZP)(l.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), H = (0, n.e7)([_.default], () => _.default.getCurrentUser()), S = (0, f.M5)(H, N.p9.TIER_2), L = (0, f.I5)(H) && !S;
  return (0, r.jsx)(m.Z, {
renderModalProps: t,
heroArt: {
  type: 'embed',
  embed: v,
  thumbnail: {
    url: 'https://i.ytimg.com/vi/'.concat(b, '/maxresdefault.jpg'),
    width: 498,
    height: 280
  },
  href: 'https://youtu.be/'.concat(b)
},
modalDismissibleContent: s.z.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
header: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
subHeader: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
subHeaderExtra: () => (0, r.jsx)(o.Anchor, {
  className: p.termsApplyAnchor,
  href: h.Z.getArticleURL(E.BhN.SUMMER_2023_BOGO),
  children: (0, r.jsx)(o.Heading, {
    variant: 'heading-md/normal',
    className: p.termsApplyBodyText,
    children: C.Z.Messages.BOGO_TERMS_APPLY
  })
}),
featureCards: [{
    header: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
    subHeader: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
      helpCenterLink: h.Z.getArticleURL(E.BhN.REMIXING)
    }),
    imageSrc: O,
    tagText: C.Z.Messages.EARLY_ACCESS
  },
  {
    header: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
    subHeader: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
    imageSrc: x
  },
  {
    header: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
    subHeader: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
    imageSrc: A
  }
],
changeLogId: T,
button: () => {
  let e = L ? 'upgrade_plan_button' : 'get_nitro_button',
    t = Date.now();
  return (0, r.jsxs)(o.ShinyButton, {
    className: p.buttonWide,
    innerClassName: p.innerButton,
    color: o.Button.Colors.GREEN,
    size: o.Button.Sizes.SMALL,
    onClick: () => {
      g.default.track(E.rMx.CHANGE_LOG_CTA_CLICKED, {
        change_log_id: T,
        cta_type: e,
        seconds_open: Math.round((Date.now() - t) / 1000),
        target: 'bogo_payment_model'
      }), (0, u.Z)({
        subscriptionTier: N.Si.TIER_2,
        analyticsLocations: G,
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
        className: p.nitroIconSubHeader,
        src: M
      }),
      C.Z.Messages.BOGO_CLAIM_OFFER
    ]
  });
}
  });
}