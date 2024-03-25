"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("222007");
var n = s("37983");
s("884691");
var l = s("414456"),
  a = s.n(l),
  i = s("265586"),
  r = s("446674"),
  u = s("77078"),
  o = s("606292"),
  d = s("688318"),
  c = s("635357"),
  S = s("184900"),
  E = s("845962"),
  f = s("506885"),
  I = s("697218"),
  _ = s("153160"),
  p = s("426188"),
  T = s("49111"),
  C = s("782340"),
  m = s("249835"),
  A = s("513002");
let N = e => {
    let {
      avatarDecoration: t
    } = e, s = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
      avatarDecorationSrc: l
    } = (0, d.default)({
      user: s,
      avatarDecorationOverride: t,
      size: (0, o.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_40)
    });
    return (0, n.jsx)("img", {
      src: l,
      alt: t.label,
      className: m.avatarDecoration
    })
  },
  h = e => {
    var t;
    let {
      profileEffect: s
    } = e, l = (0, r.useStateFromStores)([E.default], () => E.default.getProfileEffectById(s.id)), {
      accessibilityLabel: a,
      thumbnailPreviewSrc: i,
      title: u
    } = null !== (t = null == l ? void 0 : l.config) && void 0 !== t ? t : {};
    return (0, n.jsxs)("div", {
      className: m.profileEffectContainer,
      children: [(0, n.jsx)("img", {
        src: A,
        alt: a,
        className: m.profileEffectBackground
      }), (0, n.jsx)("img", {
        className: m.profileEffect,
        src: i,
        alt: u
      })]
    })
  };
var P = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: s,
    className: l
  } = e, {
    product: o
  } = (0, p.useFetchCollectiblesProduct)(t), {
    giftRecipient: d,
    giftRecipientError: E
  } = (0, c.useGiftContext)(), A = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser());
  if (null == o || null == s) return null;
  let [P] = o.items, g = null != d && d.id !== (null == A ? void 0 : A.id);
  return (0, n.jsxs)("div", {
    className: l,
    children: [(0, n.jsxs)("div", {
      className: m.previewTitleContainer,
      children: [(0, n.jsx)(u.FormTitle, {
        className: m.previewTitle,
        children: C.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), g && (0, n.jsx)(u.Popout, {
        preload: () => (0, f.default)(d.id, d.getAvatarURL(null, 80)),
        renderPopout: e => (0, n.jsx)(S.default, {
          ...e,
          user: d,
          pendingAvatar: d.getAvatarURL(null, (0, u.getAvatarSize)(u.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: P.type === i.CollectiblesItemType.AVATAR_DECORATION ? P : null,
          pendingProfileEffectId: P.type === i.CollectiblesItemType.PROFILE_EFFECT ? P.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: T.NOOP,
          onBannerChange: T.NOOP,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, n.jsx)(u.Clickable, {
          ...e,
          className: m.previewLink,
          children: (0, n.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: C.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, d.id)]
    }), (0, n.jsxs)("div", {
      className: a(m.previewContainer, {
        [m.previewContainerError]: null != E
      }),
      children: [P.type === i.CollectiblesItemType.AVATAR_DECORATION && (0, n.jsx)(N, {
        avatarDecoration: P
      }), P.type === i.CollectiblesItemType.PROFILE_EFFECT && (0, n.jsx)(h, {
        profileEffect: P
      }), (0, n.jsxs)("div", {
        className: m.previewTextContainer,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/semibold",
          children: o.name
        }), (0, n.jsx)(u.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: P.type === i.CollectiblesItemType.AVATAR_DECORATION ? C.default.Messages.USER_SETTINGS_AVATAR_DECORATION : P.type === i.CollectiblesItemType.PROFILE_EFFECT ? C.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/semibold",
        children: (0, _.formatPrice)(s.amount, s.currency)
      })]
    }), null != E && (0, n.jsx)(u.Text, {
      className: m.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: E
    })]
  })
}