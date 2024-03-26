"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("222007");
var n = s("37983"),
  l = s("884691"),
  a = s("414456"),
  i = s.n(a),
  r = s("265586"),
  u = s("446674"),
  o = s("77078"),
  d = s("606292"),
  c = s("688318"),
  S = s("635357"),
  f = s("184900"),
  E = s("845962"),
  I = s("501768"),
  _ = s("506885"),
  p = s("697218"),
  T = s("153160"),
  C = s("426188"),
  m = s("49111"),
  A = s("782340"),
  N = s("249835"),
  h = s("513002");
let P = e => {
    let {
      avatarDecoration: t
    } = e, s = (0, u.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
      avatarDecorationSrc: l
    } = (0, c.default)({
      user: s,
      avatarDecorationOverride: t,
      size: (0, d.getDecorationSizeForAvatarSize)(o.AvatarSizes.SIZE_40)
    });
    return (0, n.jsx)("img", {
      src: l,
      alt: t.label,
      className: N.avatarDecoration
    })
  },
  g = e => {
    var t;
    let {
      profileEffect: s
    } = e, a = (0, u.useStateFromStores)([E.default], () => E.default.getProfileEffectById(s.id)), i = null != a;
    l.useEffect(() => {
      !i && (0, I.getOrFetchProfileEffects)(!0)
    }, [i]);
    let {
      accessibilityLabel: r,
      thumbnailPreviewSrc: o,
      title: d
    } = null !== (t = null == a ? void 0 : a.config) && void 0 !== t ? t : {};
    return (0, n.jsxs)("div", {
      className: N.profileEffectContainer,
      children: [(0, n.jsx)("img", {
        src: h,
        alt: r,
        className: N.profileEffectBackground
      }), (0, n.jsx)("img", {
        className: N.profileEffect,
        src: o,
        alt: d
      })]
    })
  };
var O = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: s,
    className: l
  } = e, {
    product: a
  } = (0, C.useFetchCollectiblesProduct)(t), {
    giftRecipient: d,
    giftRecipientError: c
  } = (0, S.useGiftContext)(), E = (0, u.useStateFromStores)([p.default], () => p.default.getCurrentUser());
  if (null == a || null == s) return null;
  let [I] = a.items, h = null != d && d.id !== (null == E ? void 0 : E.id);
  return (0, n.jsxs)("div", {
    className: l,
    children: [(0, n.jsxs)("div", {
      className: N.previewTitleContainer,
      children: [(0, n.jsx)(o.FormTitle, {
        className: N.previewTitle,
        children: A.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), h && (0, n.jsx)(o.Popout, {
        preload: () => (0, _.default)(d.id, d.getAvatarURL(null, 80)),
        renderPopout: e => (0, n.jsx)(f.default, {
          ...e,
          user: d,
          pendingAvatar: d.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: I.type === r.CollectiblesItemType.AVATAR_DECORATION ? I : null,
          pendingProfileEffectId: I.type === r.CollectiblesItemType.PROFILE_EFFECT ? I.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: m.NOOP,
          onBannerChange: m.NOOP,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, n.jsx)(o.Clickable, {
          ...e,
          className: N.previewLink,
          children: (0, n.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: A.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, d.id)]
    }), (0, n.jsxs)("div", {
      className: i(N.previewContainer, {
        [N.previewContainerError]: null != c
      }),
      children: [I.type === r.CollectiblesItemType.AVATAR_DECORATION && (0, n.jsx)(P, {
        avatarDecoration: I
      }), I.type === r.CollectiblesItemType.PROFILE_EFFECT && (0, n.jsx)(g, {
        profileEffect: I
      }), (0, n.jsxs)("div", {
        className: N.previewTextContainer,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: a.name
        }), (0, n.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: I.type === r.CollectiblesItemType.AVATAR_DECORATION ? A.default.Messages.USER_SETTINGS_AVATAR_DECORATION : I.type === r.CollectiblesItemType.PROFILE_EFFECT ? A.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: (0, T.formatPrice)(s.amount, s.currency)
      })]
    }), null != c && (0, n.jsx)(o.Text, {
      className: N.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: c
    })]
  })
}