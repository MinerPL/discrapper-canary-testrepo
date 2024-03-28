"use strict";
s.r(t), s("47120");
var l = s("735250"),
  n = s("470079"),
  a = s("803997"),
  i = s.n(a),
  r = s("979554"),
  u = s("442837"),
  d = s("481060"),
  o = s("1585"),
  c = s("125988"),
  f = s("987209"),
  S = s("962746"),
  E = s("25251"),
  I = s("996678"),
  C = s("484459"),
  _ = s("594174"),
  T = s("937615"),
  p = s("583434"),
  m = s("981631"),
  N = s("689938"),
  A = s("32606"),
  h = s("223223");
let g = e => {
    let {
      avatarDecoration: t
    } = e, s = (0, u.useStateFromStores)([_.default], () => _.default.getCurrentUser()), {
      avatarDecorationSrc: n
    } = (0, c.default)({
      user: s,
      avatarDecorationOverride: t,
      size: (0, o.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_40)
    });
    return (0, l.jsx)("img", {
      src: n,
      alt: t.label,
      className: A.avatarDecoration
    })
  },
  x = e => {
    var t;
    let {
      profileEffect: s
    } = e, a = (0, u.useStateFromStores)([E.default], () => E.default.getProfileEffectById(s.id)), i = null != a;
    n.useEffect(() => {
      !i && (0, I.getOrFetchProfileEffects)(!0)
    }, [i]);
    let {
      accessibilityLabel: r,
      thumbnailPreviewSrc: d,
      title: o
    } = null !== (t = null == a ? void 0 : a.config) && void 0 !== t ? t : {};
    return (0, l.jsxs)("div", {
      className: A.profileEffectContainer,
      children: [(0, l.jsx)("img", {
        src: h,
        alt: r,
        className: A.profileEffectBackground
      }), (0, l.jsx)("img", {
        className: A.profileEffect,
        src: d,
        alt: o
      })]
    })
  };
t.default = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: s,
    className: n
  } = e, {
    product: a
  } = (0, p.useFetchCollectiblesProduct)(t), {
    giftRecipient: o,
    giftRecipientError: c
  } = (0, f.useGiftContext)(), E = (0, u.useStateFromStores)([_.default], () => _.default.getCurrentUser());
  if (null == a || null == s) return null;
  let [I] = a.items, h = null != o && o.id !== (null == E ? void 0 : E.id);
  return (0, l.jsxs)("div", {
    className: n,
    children: [(0, l.jsxs)("div", {
      className: A.previewTitleContainer,
      children: [(0, l.jsx)(d.FormTitle, {
        className: A.previewTitle,
        children: N.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), h && (0, l.jsx)(d.Popout, {
        preload: () => (0, C.default)(o.id, o.getAvatarURL(null, 80)),
        renderPopout: e => (0, l.jsx)(S.default, {
          ...e,
          user: o,
          pendingAvatar: o.getAvatarURL(null, (0, d.getAvatarSize)(d.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: I.type === r.CollectiblesItemType.AVATAR_DECORATION ? I : null,
          pendingProfileEffectId: I.type === r.CollectiblesItemType.PROFILE_EFFECT ? I.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: m.NOOP,
          onBannerChange: m.NOOP,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, l.jsx)(d.Clickable, {
          ...e,
          className: A.previewLink,
          children: (0, l.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: N.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, o.id)]
    }), (0, l.jsxs)("div", {
      className: i()(A.previewContainer, {
        [A.previewContainerError]: null != c
      }),
      children: [I.type === r.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)(g, {
        avatarDecoration: I
      }), I.type === r.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)(x, {
        profileEffect: I
      }), (0, l.jsxs)("div", {
        className: A.previewTextContainer,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: a.name
        }), (0, l.jsx)(d.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: I.type === r.CollectiblesItemType.AVATAR_DECORATION ? N.default.Messages.USER_SETTINGS_AVATAR_DECORATION : I.type === r.CollectiblesItemType.PROFILE_EFFECT ? N.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, l.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: (0, T.formatPrice)(s.amount, s.currency)
      })]
    }), null != c && (0, l.jsx)(d.Text, {
      className: A.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: c
    })]
  })
}