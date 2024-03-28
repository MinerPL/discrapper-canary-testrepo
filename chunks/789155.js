"use strict";
t.r(s);
var a = t("735250");
t("470079");
var r = t("780384"),
  l = t("481060"),
  i = t("410030"),
  n = t("976644"),
  o = t("466111"),
  u = t("689938"),
  c = t("406146"),
  d = t("982404"),
  m = t("299156");
s.default = function(e) {
  let {
    churnUserDiscountOffer: s,
    onDiscountClaim: t,
    onContinue: f
  } = e, p = (0, i.default)(), _ = (0, r.isThemeDark)(p) ? d : m;
  return null == s ? null : (0, a.jsxs)("div", {
    className: c.churnFooterContainer,
    children: [(0, a.jsx)("div", {
      className: c.churnFooterGlow
    }), (0, a.jsx)("div", {
      className: c.churnFooterTopBorder
    }), (0, a.jsx)("div", {
      className: c.churnFooterContent,
      children: (0, a.jsxs)("div", {
        className: c.churnFooterContentBody,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: _,
          className: c.churnFooterIcon
        }), (0, a.jsxs)("div", {
          className: c.churnFooterContentBodyInner,
          children: [(0, a.jsx)(l.Text, {
            variant: "text-md/medium",
            className: c.churnFooterCopy,
            children: u.default.Messages.CHURN_DISCOUNT_DESCRIPTION.format({
              percent: s.discount.amount,
              numMonths: s.discount.user_usage_limit
            })
          }), (0, a.jsxs)("div", {
            className: c.churnFooterCTAs,
            children: [(0, a.jsxs)(n.default, {
              className: c.churnFooterClaimCTA,
              innerClassName: c.churnFooterClaimCTAInner,
              look: l.ButtonLooks.OUTLINED,
              color: l.ButtonColors.CUSTOM,
              onClick: () => null == t ? void 0 : t(),
              children: [(0, a.jsx)(o.default, {
                height: 16,
                width: 16,
                className: c.churnFooterClaimIcon
              }), (0, a.jsx)(l.Text, {
                variant: "text-sm/semibold",
                className: c.churnFooterClaimCopy,
                children: u.default.Messages.CHURN_DISCOUNT_CLAIM
              })]
            }), (0, a.jsx)(l.Button, {
              onClick: () => null == f ? void 0 : f(),
              children: u.default.Messages.CONTINUE
            })]
          })]
        })]
      })
    })]
  })
}