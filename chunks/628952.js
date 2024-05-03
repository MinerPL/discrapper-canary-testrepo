"use strict";
s.r(t), s("47120");
var l = s("735250");
s("470079");
var n = s("120356"),
  a = s.n(n),
  i = s("979554"),
  r = s("442837"),
  u = s("481060"),
  d = s("1585"),
  o = s("125988"),
  c = s("987209"),
  f = s("962746"),
  S = s("731896"),
  E = s("484459"),
  I = s("594174"),
  C = s("937615"),
  _ = s("583434"),
  T = s("981631"),
  p = s("689938"),
  m = s("369161"),
  N = s("223223");
let A = e => {
    let {
      avatarDecoration: t
    } = e, s = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
      avatarDecorationSrc: n
    } = (0, o.default)({
      user: s,
      avatarDecorationOverride: t,
      size: (0, d.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_40)
    });
    return (0, l.jsx)("img", {
      src: n,
      alt: t.label,
      className: m.avatarDecoration
    })
  },
  h = e => {
    var t;
    let {
      profileEffect: s
    } = e, n = (0, S.useProfileEffectPreset)(s.id), {
      accessibilityLabel: a,
      thumbnailPreviewSrc: i,
      title: r
    } = null !== (t = null == n ? void 0 : n.config) && void 0 !== t ? t : {};
    return (0, l.jsxs)("div", {
      className: m.profileEffectContainer,
      children: [(0, l.jsx)("img", {
        src: N,
        alt: a,
        className: m.profileEffectBackground
      }), (0, l.jsx)("img", {
        className: m.profileEffect,
        src: i,
        alt: r
      })]
    })
  };
t.default = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: s,
    className: n
  } = e, {
    product: d
  } = (0, _.useFetchCollectiblesProduct)(t), {
    giftRecipient: o,
    giftRecipientError: S
  } = (0, c.useGiftContext)(), N = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser());
  if (null == d || null == s) return null;
  let [g] = d.items, x = null != o && o.id !== (null == N ? void 0 : N.id);
  return (0, l.jsxs)("div", {
    className: n,
    children: [(0, l.jsxs)("div", {
      className: m.previewTitleContainer,
      children: [(0, l.jsx)(u.FormTitle, {
        className: m.previewTitle,
        children: p.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), x && (0, l.jsx)(u.Popout, {
        preload: () => (0, E.default)(o.id, o.getAvatarURL(null, 80)),
        renderPopout: e => (0, l.jsx)(f.default, {
          ...e,
          user: o,
          pendingAvatar: o.getAvatarURL(null, (0, u.getAvatarSize)(u.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: g.type === i.CollectiblesItemType.AVATAR_DECORATION ? g : null,
          pendingProfileEffectId: g.type === i.CollectiblesItemType.PROFILE_EFFECT ? g.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: T.NOOP,
          onBannerChange: T.NOOP,
          hideRecentGames: !0,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, l.jsx)(u.Clickable, {
          ...e,
          className: m.previewLink,
          children: (0, l.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: p.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, o.id)]
    }), (0, l.jsxs)("div", {
      className: a()(m.previewContainer, {
        [m.previewContainerError]: null != S
      }),
      children: [g.type === i.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)(A, {
        avatarDecoration: g
      }), g.type === i.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)(h, {
        profileEffect: g
      }), (0, l.jsxs)("div", {
        className: m.previewTextContainer,
        children: [(0, l.jsx)(u.Text, {
          variant: "text-md/semibold",
          children: d.name
        }), (0, l.jsx)(u.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: g.type === i.CollectiblesItemType.AVATAR_DECORATION ? p.default.Messages.USER_SETTINGS_AVATAR_DECORATION : g.type === i.CollectiblesItemType.PROFILE_EFFECT ? p.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, l.jsx)(u.Text, {
        variant: "text-md/semibold",
        children: (0, C.formatPrice)(s.amount, s.currency)
      })]
    }), null != S && (0, l.jsx)(u.Text, {
      className: m.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: S
    })]
  })
}