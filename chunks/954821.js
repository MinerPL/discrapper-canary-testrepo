s.d(t, {
  h: function() {
return A;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(913527),
  r = s.n(i),
  o = s(481060),
  l = s(355467),
  c = s(100527),
  d = s(906732),
  _ = s(153124),
  E = s(73346),
  u = s(584825),
  T = s(305342),
  I = s(293810),
  S = s(689938),
  N = s(683870);
let C = e => {
let [t, s] = a.useState(!1), [n, i] = a.useState(null);
return {
  cancelSubscription: async t => {
    try {
      return s(!0), await l.EO(t, e), !0;
    } catch (e) {
      i(e);
    } finally {
      s(!1);
    }
  },
  error: n,
  submitting: t
};
  },
  m = e => {
var t;
let {
  transitionState: s,
  groupListing: a,
  guildId: i,
  listing: l,
  subscription: m,
  onClose: A
} = e, g = (0, _.Dt)(), h = (0, u.YB)(i), O = (null == h ? void 0 : null === (t = h.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, E._W)(h.cover_image_asset.application_id, h.cover_image_asset, 440) : void 0, {
  analyticsLocations: p
} = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
  cancelSubscription: R,
  error: x,
  submitting: M
} = C(p), f = async () => {
  await R(m.id) && A();
}, D = l.role_benefits.benefits.filter(e => e.ref_type === I.Qs.CHANNEL), P = l.role_benefits.benefits.filter(e => e.ref_type === I.Qs.INTANGIBLE), L = r()(m.currentPeriodEnd).format('MMMM Do, YYYY'), b = S.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_DESCRIPTION.format({
  numChannels: D.length,
  numAdditionalBenefits: P.length,
  subscriptionEndDate: L
});
return (0, n.jsxs)(o.ModalRoot, {
  transitionState: s,
  className: N.__invalid_modal,
  'aria-labelledby': g,
  children: [
    (0, n.jsxs)('div', {
      children: [
        (0, n.jsx)('img', {
          src: O,
          alt: '',
          className: N.headerImage
        }),
        (0, n.jsx)(o.ModalCloseButton, {
          withCircleBackground: !0,
          className: N.closeButton,
          onClick: A
        })
      ]
    }),
    null != x ? (0, n.jsx)(o.FormErrorBlock, {
      children: x.message
    }) : null,
    (0, n.jsxs)(o.ModalContent, {
      className: N.content,
      children: [
        (0, n.jsx)(o.Heading, {
          id: g,
          variant: 'text-md/medium',
          className: N.title,
          children: S.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_TITLE
        }),
        (0, n.jsx)(o.Text, {
          className: N.description,
          variant: 'text-sm/normal',
          children: b
        }),
        (0, n.jsx)(T.c, {
          listingId: l.id,
          guildId: a.guild_id,
          className: N.benefits
        })
      ]
    }),
    (0, n.jsxs)(o.ModalFooter, {
      className: N.footer,
      children: [
        (0, n.jsx)(o.Button, {
          color: o.Button.Colors.RED,
          onClick: f,
          submitting: M,
          children: S.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
        }),
        (0, n.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.WHITE,
          className: N.goBackButton,
          onClick: A,
          children: S.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
        })
      ]
    })
  ]
});
  },
  A = e => {
(0, o.openModal)(t => (0, n.jsx)(m, {
  ...t,
  ...e
}));
  };