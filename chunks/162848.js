"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
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
  f = s("845962"),
  E = s("501768"),
  I = s("506885"),
  _ = s("697218"),
  p = s("153160"),
  T = s("426188"),
  C = s("49111"),
  m = s("782340"),
  A = s("249835"),
  N = s("513002");
let h = e => {
    let {
      avatarDecoration: t
    } = e, s = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()), {
      avatarDecorationSrc: l
    } = (0, d.default)({
      user: s,
      avatarDecorationOverride: t,
      size: (0, o.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_40)
    });
    return (0, n.jsx)("img", {
      src: l,
      alt: t.label,
      className: A.avatarDecoration
    })
  },
  P = e => {
    var t;
    let {
      profileEffect: s
    } = e, l = (0, r.useStateFromStores)([f.default], () => f.default.getProfileEffectById(s.id));
    (0, E.default)(null == l);
    let {
      accessibilityLabel: a,
      thumbnailPreviewSrc: i,
      title: u
    } = null !== (t = null == l ? void 0 : l.config) && void 0 !== t ? t : {};
    return (0, n.jsxs)("div", {
      className: A.profileEffectContainer,
      children: [(0, n.jsx)("img", {
        src: N,
        alt: a,
        className: A.profileEffectBackground
      }), (0, n.jsx)("img", {
        className: A.profileEffect,
        src: i,
        alt: u
      })]
    })
  };
var g = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: s,
    className: l
  } = e, {
    product: o
  } = (0, T.useFetchCollectiblesProduct)(t), {
    giftRecipient: d,
    giftRecipientError: f
  } = (0, c.useGiftContext)(), E = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser());
  if (null == o || null == s) return null;
  let [N] = o.items, g = null != d && d.id !== (null == E ? void 0 : E.id);
  return (0, n.jsxs)("div", {
    className: l,
    children: [(0, n.jsxs)("div", {
      className: A.previewTitleContainer,
      children: [(0, n.jsx)(u.FormTitle, {
        className: A.previewTitle,
        children: m.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), g && (0, n.jsx)(u.Popout, {
        preload: () => (0, I.default)(d.id, d.getAvatarURL(null, 80)),
        renderPopout: e => (0, n.jsx)(S.default, {
          ...e,
          user: d,
          pendingAvatar: d.getAvatarURL(null, (0, u.getAvatarSize)(u.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: N.type === i.CollectiblesItemType.AVATAR_DECORATION ? N : null,
          pendingProfileEffectId: N.type === i.CollectiblesItemType.PROFILE_EFFECT ? N.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: C.NOOP,
          onBannerChange: C.NOOP,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, n.jsx)(u.Clickable, {
          ...e,
          className: A.previewLink,
          children: (0, n.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: m.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, d.id)]
    }), (0, n.jsxs)("div", {
      className: a(A.previewContainer, {
        [A.previewContainerError]: null != f
      }),
      children: [N.type === i.CollectiblesItemType.AVATAR_DECORATION && (0, n.jsx)(h, {
        avatarDecoration: N
      }), N.type === i.CollectiblesItemType.PROFILE_EFFECT && (0, n.jsx)(P, {
        profileEffect: N
      }), (0, n.jsxs)("div", {
        className: A.previewTextContainer,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/semibold",
          children: o.name
        }), (0, n.jsx)(u.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: N.type === i.CollectiblesItemType.AVATAR_DECORATION ? m.default.Messages.USER_SETTINGS_AVATAR_DECORATION : N.type === i.CollectiblesItemType.PROFILE_EFFECT ? m.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/semibold",
        children: (0, p.formatPrice)(s.amount, s.currency)
      })]
    }), null != f && (0, n.jsx)(u.Text, {
      className: A.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: f
    })]
  })
}