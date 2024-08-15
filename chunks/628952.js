t(47120);
var a = t(735250);
t(470079);
var s = t(120356),
  i = t.n(s),
  l = t(979554),
  r = t(442837),
  o = t(481060),
  d = t(1585),
  u = t(125988),
  c = t(987209),
  E = t(921813),
  f = t(731896),
  h = t(484459),
  m = t(594174),
  v = t(937615),
  C = t(583434),
  p = t(689938),
  x = t(653844),
  I = t(223223);
let T = e => {
let {
  avatarDecoration: n
} = e, t = (0, r.e7)([m.default], () => m.default.getCurrentUser()), {
  avatarDecorationSrc: s
} = (0, u.Z)({
  user: t,
  avatarDecorationOverride: n,
  size: (0, d.y9)(o.AvatarSizes.SIZE_40)
});
return (0, a.jsx)('img', {
  src: s,
  alt: n.label,
  className: x.avatarDecoration
});
  },
  g = e => {
var n;
let {
  profileEffect: t
} = e, s = (0, f.V)(t.id), {
  accessibilityLabel: i,
  thumbnailPreviewSrc: l,
  title: r
} = null !== (n = null == s ? void 0 : s.config) && void 0 !== n ? n : {};
return (0, a.jsxs)('div', {
  className: x.profileEffectContainer,
  children: [
    (0, a.jsx)('img', {
      src: I,
      alt: i,
      className: x.profileEffectBackground
    }),
    (0, a.jsx)('img', {
      className: x.profileEffect,
      src: l,
      alt: r
    })
  ]
});
  };
n.Z = e => {
  let {
selectedSkuId: n,
selectedSkuPricePreview: t,
className: s
  } = e, {
product: d
  } = (0, C.T)(n), {
giftRecipient: u,
giftRecipientError: f
  } = (0, c.wD)(), I = (0, r.e7)([m.default], () => m.default.getCurrentUser());
  if (null == d || null == t)
return null;
  let [N] = d.items, S = null != u && u.id !== (null == I ? void 0 : I.id);
  return (0, a.jsxs)('div', {
className: s,
children: [
  (0, a.jsxs)('div', {
    className: x.previewTitleContainer,
    children: [
      (0, a.jsx)(o.FormTitle, {
        className: x.previewTitle,
        children: p.Z.Messages.COLLECTIBLES_GIFT_LABEL
      }),
      S && (0, a.jsx)(o.Popout, {
        preload: () => (0, h.Z)(u.id, u.getAvatarURL(null, 80)),
        renderPopout: e => (0, a.jsx)(E.Z, {
          ...e,
          user: u,
          pendingAvatar: u.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: N.type === l.Z.AVATAR_DECORATION ? N : null,
          pendingProfileEffectId: N.type === l.Z.PROFILE_EFFECT ? N.id : null,
          canUsePremiumCustomization: !0,
          disabledInputs: !0
        }),
        align: 'center',
        position: 'right',
        children: e => (0, a.jsx)(o.Clickable, {
          ...e,
          className: x.previewLink,
          children: (0, a.jsx)(o.Text, {
            variant: 'text-xs/medium',
            color: 'text-link',
            children: p.Z.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, u.id)
    ]
  }),
  (0, a.jsxs)('div', {
    className: i()(x.previewContainer, {
      [x.previewContainerError]: null != f
    }),
    children: [
      N.type === l.Z.AVATAR_DECORATION && (0, a.jsx)(T, {
        avatarDecoration: N
      }),
      N.type === l.Z.PROFILE_EFFECT && (0, a.jsx)(g, {
        profileEffect: N
      }),
      (0, a.jsxs)('div', {
        className: x.previewTextContainer,
        children: [
          (0, a.jsx)(o.Text, {
            variant: 'text-md/semibold',
            children: d.name
          }),
          (0, a.jsx)(o.Heading, {
            variant: 'heading-sm/medium',
            color: 'header-secondary',
            children: N.type === l.Z.AVATAR_DECORATION ? p.Z.Messages.USER_SETTINGS_AVATAR_DECORATION : N.type === l.Z.PROFILE_EFFECT ? p.Z.Messages.USER_SETTINGS_PROFILE_EFFECT : null
          })
        ]
      }),
      (0, a.jsx)(o.Text, {
        variant: 'text-md/semibold',
        children: (0, v.T4)(t.amount, t.currency)
      })
    ]
  }),
  null != f && (0, a.jsx)(o.Text, {
    className: x.recipientError,
    variant: 'text-sm/normal',
    color: 'status-danger-background',
    children: f
  })
]
  });
};