"use strict";
t.r(s), t.d(s, {
  default: function() {
    return U
  }
}), t("47120"), t("411104");
var i = t("735250"),
  l = t("470079"),
  r = t("512722"),
  a = t.n(r),
  o = t("442837"),
  n = t("481060"),
  u = t("197115"),
  d = t("318661"),
  c = t("735336"),
  f = t("747074"),
  P = t("192133"),
  p = t("131640"),
  E = t("158776"),
  M = t("594174"),
  T = t("153124"),
  I = t("626135"),
  m = t("981631"),
  S = t("474936"),
  A = t("228168"),
  _ = t("689938"),
  y = t("151546");

function U(e) {
  let s, {
      transitionState: t,
      avatarSrc: r,
      bannerSrc: U,
      onSubscribe: v,
      onClose: R
    } = e,
    b = (0, o.useStateFromStores)([M.default], () => {
      let e = M.default.getCurrentUser();
      return a()(null != e, "PremiumProfilePreviewModal: user cannot be undefined"), e
    }),
    h = (0, d.default)(b.id),
    [x, L] = (0, o.useStateFromStoresArray)([E.default], () => [E.default.findActivity(b.id, e => e.type === m.ActivityTypes.CUSTOM_STATUS), E.default.getStatus(b.id)]),
    j = (0, T.useUID)();
  if (l.useEffect(() => {
      I.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: S.PremiumUpsellTypes.ANIMATED_AVATAR_PREVIEW_GIF_MODAL
      })
    }, []), null != r && null != U) throw Error("Invalid Preview Modal Configuration!");
  if (null != r) s = _.default.Messages.PREMIUM_PREVIEW_JOIN_AVATAR;
  else if (null != U) s = _.default.Messages.PREMIUM_PREVIEW_JOIN_BANNER;
  else throw Error("Invalid Preview Modal Configuration!");
  return (0, i.jsx)(n.ModalRoot, {
    className: y.premiumProfilePreviewModal,
    transitionState: t,
    size: n.ModalSize.SMALL,
    "aria-labelledby": j,
    children: (0, i.jsxs)("div", {
      className: y.premiumProfilePreviewContent,
      children: [(0, i.jsxs)(f.default, {
        className: y.userPopoutContainer,
        user: b,
        profileType: A.UserProfileTypes.POPOUT,
        children: [(0, i.jsx)(c.default, {
          bannerSrc: U,
          user: b,
          displayProfile: h,
          onClose: () => {},
          profileType: A.UserProfileTypes.POPOUT,
          showPremiumBadgeUpsell: !1,
          isHovering: !1,
          allowEdit: !1
        }), (0, i.jsx)(p.UserPopoutAvatar, {
          avatarSrc: r,
          user: b,
          displayProfile: h,
          status: L,
          isMobile: !1,
          onClose: R,
          disableUserProfileLink: !0,
          hasBanner: (null == h ? void 0 : h.banner) != null,
          profileType: A.UserProfileTypes.POPOUT
        }), (0, i.jsx)(p.UserPopoutBadgeList, {
          user: b
        }), (0, i.jsx)(f.default.Inner, {
          children: (0, i.jsx)(P.default, {
            activity: null,
            customStatusActivity: x,
            displayProfile: h,
            user: b,
            onClose: () => {},
            canDM: !1
          })
        })]
      }), (0, i.jsxs)("div", {
        className: y.upsellSection,
        children: [(0, i.jsx)(n.Text, {
          className: y.joinText,
          variant: "text-sm/normal",
          children: s
        }), (0, i.jsx)(u.default, {
          buttonText: _.default.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
          subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
          className: y.premiumSubscribeButton,
          size: n.Button.Sizes.SMALL,
          premiumModalAnalyticsLocation: {
            section: m.AnalyticsSections.SETTINGS_EDIT_PROFILE,
            object: m.AnalyticsObjects.BUTTON_CTA
          },
          onSubscribeModalClose: e => {
            e && (null == v || v(), R())
          }
        }), (0, i.jsx)(n.Button, {
          onClick: R,
          size: n.Button.Sizes.SMALL,
          color: n.Button.Colors.PRIMARY,
          look: n.Button.Looks.FILLED,
          children: _.default.Messages.PREMIUM_PREVIEW_EXIT
        })]
      })]
    })
  })
}