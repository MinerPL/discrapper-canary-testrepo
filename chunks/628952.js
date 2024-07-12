t(47120);
var i = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  o = t(979554),
  s = t(442837),
  l = t(481060),
  c = t(1585),
  d = t(125988),
  u = t(987209),
  f = t(921813),
  p = t(731896),
  _ = t(484459),
  m = t(594174),
  b = t(937615),
  C = t(583434),
  g = t(689938),
  x = t(788708),
  v = t(223223);
let h = e => {
let {
  avatarDecoration: n
} = e, t = (0, s.e7)([m.default], () => m.default.getCurrentUser()), {
  avatarDecorationSrc: a
} = (0, d.Z)({
  user: t,
  avatarDecorationOverride: n,
  size: (0, c.y9)(l.AvatarSizes.SIZE_40)
});
return (0, i.jsx)('img', {
  src: a,
  alt: n.label,
  className: x.avatarDecoration
});
  },
  E = e => {
var n;
let {
  profileEffect: t
} = e, a = (0, p.V)(t.id), {
  accessibilityLabel: r,
  thumbnailPreviewSrc: o,
  title: s
} = null !== (n = null == a ? void 0 : a.config) && void 0 !== n ? n : {};
return (0, i.jsxs)('div', {
  className: x.profileEffectContainer,
  children: [
    (0, i.jsx)('img', {
      src: v,
      alt: r,
      className: x.profileEffectBackground
    }),
    (0, i.jsx)('img', {
      className: x.profileEffect,
      src: o,
      alt: s
    })
  ]
});
  };
n.Z = e => {
  let {
selectedSkuId: n,
selectedSkuPricePreview: t,
className: a
  } = e, {
product: c
  } = (0, C.T)(n), {
giftRecipient: d,
giftRecipientError: p
  } = (0, u.wD)(), v = (0, s.e7)([m.default], () => m.default.getCurrentUser());
  if (null == c || null == t)
return null;
  let [T] = c.items, I = null != d && d.id !== (null == v ? void 0 : v.id);
  return (0, i.jsxs)('div', {
className: a,
children: [
  (0, i.jsxs)('div', {
    className: x.previewTitleContainer,
    children: [
      (0, i.jsx)(l.FormTitle, {
        className: x.previewTitle,
        children: g.Z.Messages.COLLECTIBLES_GIFT_LABEL
      }),
      I && (0, i.jsx)(l.Popout, {
        preload: () => (0, _.Z)(d.id, d.getAvatarURL(null, 80)),
        renderPopout: e => (0, i.jsx)(f.Z, {
          ...e,
          user: d,
          pendingAvatar: d.getAvatarURL(null, (0, l.getAvatarSize)(l.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: T.type === o.Z.AVATAR_DECORATION ? T : null,
          pendingProfileEffectId: T.type === o.Z.PROFILE_EFFECT ? T.id : null,
          canUsePremiumCustomization: !0,
          disabledInputs: !0
        }),
        align: 'center',
        position: 'right',
        children: e => (0, i.jsx)(l.Clickable, {
          ...e,
          className: x.previewLink,
          children: (0, i.jsx)(l.Text, {
            variant: 'text-xs/medium',
            color: 'text-link',
            children: g.Z.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, d.id)
    ]
  }),
  (0, i.jsxs)('div', {
    className: r()(x.previewContainer, {
      [x.previewContainerError]: null != p
    }),
    children: [
      T.type === o.Z.AVATAR_DECORATION && (0, i.jsx)(h, {
        avatarDecoration: T
      }),
      T.type === o.Z.PROFILE_EFFECT && (0, i.jsx)(E, {
        profileEffect: T
      }),
      (0, i.jsxs)('div', {
        className: x.previewTextContainer,
        children: [
          (0, i.jsx)(l.Text, {
            variant: 'text-md/semibold',
            children: c.name
          }),
          (0, i.jsx)(l.Heading, {
            variant: 'heading-sm/medium',
            color: 'header-secondary',
            children: T.type === o.Z.AVATAR_DECORATION ? g.Z.Messages.USER_SETTINGS_AVATAR_DECORATION : T.type === o.Z.PROFILE_EFFECT ? g.Z.Messages.USER_SETTINGS_PROFILE_EFFECT : null
          })
        ]
      }),
      (0, i.jsx)(l.Text, {
        variant: 'text-md/semibold',
        children: (0, b.T4)(t.amount, t.currency)
      })
    ]
  }),
  null != p && (0, i.jsx)(l.Text, {
    className: x.recipientError,
    variant: 'text-sm/normal',
    color: 'status-danger-background',
    children: p
  })
]
  });
};