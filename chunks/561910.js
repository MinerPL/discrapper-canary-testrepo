"use strict";
t.r(s), t("47120");
var a = t("735250"),
  o = t("470079"),
  l = t("481060"),
  n = t("809206"),
  i = t("100527"),
  r = t("906732"),
  c = t("197115"),
  d = t("155433"),
  A = t("626135"),
  u = t("981631"),
  M = t("474936"),
  E = t("689938"),
  L = t("674120");
s.default = e => {
  let {
    imgURI: s,
    transitionState: t,
    onClose: T,
    onChangeAvatar: _
  } = e, [m, S] = o.useState(!1), [R, h] = o.useState(!1), {
    analyticsLocations: I,
    sourceAnalyticsLocations: x
  } = (0, r.default)(i.default.PREMIUM_UPSELL), U = async () => {
    S(!0);
    let e = await (0, n.saveAccountChanges)({
      avatar: s
    });
    if (null == e ? void 0 : e.ok)(0, n.setPendingAvatar)(void 0);
    else {
      var t;
      (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null && (0, d.showInvalidUsernameToast)()
    }
    S(!1), T()
  };
  return o.useEffect(() => {
    A.default.track(u.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: M.PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL,
      location_stack: x
    })
  }, [x]), (0, a.jsx)(r.AnalyticsLocationProvider, {
    value: I,
    children: (0, a.jsxs)(l.ModalRoot, {
      transitionState: t,
      size: l.ModalSize.SMALL,
      "aria-label": E.default.Messages.IMAGE,
      children: [(0, a.jsxs)(l.ModalContent, {
        className: L.modalContent,
        paddingFix: !1,
        orientation: "horizontal",
        children: [(0, a.jsx)(l.ModalHeader, {
          separator: !1,
          className: L.header,
          children: (0, a.jsx)(l.FormTitle, {
            tag: l.FormTitleTags.H1,
            children: E.default.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR
          })
        }), (0, a.jsx)(l.Text, {
          color: "text-normal",
          variant: "text-md/normal",
          children: E.default.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR_SUBTITLE
        }), (0, a.jsxs)("div", {
          className: L.promo,
          children: [(0, a.jsx)(l.Text, {
            color: "text-normal",
            variant: "text-sm/semibold",
            className: L.promoText,
            children: E.default.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR_TEXT
          }), (0, a.jsx)(c.default, {
            submitting: R,
            premiumModalAnalyticsLocation: {
              section: u.AnalyticsSections.AVATAR_UPSELL_MODAL,
              object: u.AnalyticsObjects.BUTTON_CTA
            },
            size: l.Button.Sizes.SMALL,
            color: l.Button.Colors.GREEN,
            onClick: () => {
              h(!0)
            },
            onSubscribeModalClose: e => {
              h(!1), e && (U(), T())
            },
            buttonText: E.default.Messages.PREMIUM_REQUIRED_GET_NITRO
          })]
        })]
      }), (0, a.jsxs)(l.ModalFooter, {
        className: L.modalFooter,
        children: [(0, a.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.PRIMARY,
          size: l.ButtonSizes.SMALL,
          onClick: _,
          children: E.default.Messages.CHANGE_AVATAR_A11Y_LABEL
        }), (0, a.jsxs)("div", {
          className: L.modalFooterActions,
          children: [(0, a.jsx)(l.Button, {
            className: L.cancelButton,
            look: l.Button.Looks.LINK,
            color: l.Button.Colors.PRIMARY,
            size: l.ButtonSizes.SMALL,
            onClick: T,
            children: E.default.Messages.AVATAR_UPLOAD_CANCEL
          }), (0, a.jsx)(l.Button, {
            size: l.ButtonSizes.SMALL,
            onClick: U,
            submitting: m,
            children: E.default.Messages.SAVE_CHANGES
          })]
        })]
      }), (0, a.jsx)(l.Avatar, {
        src: s,
        "aria-hidden": !0,
        className: L.avatar,
        size: l.AvatarSizes.SIZE_120
      })]
    })
  })
}