"use strict";
t.r(s), t.d(s, {
  default: function() {
    return f
  }
});
var a = t("37983");
t("884691");
var r = t("819855"),
  l = t("77078"),
  n = t("841098"),
  i = t("181114"),
  o = t("216422"),
  u = t("782340"),
  c = t("515925"),
  d = t("940420"),
  m = t("591726"),
  f = function(e) {
    let {
      churnUserDiscountOffer: s,
      onDiscountClaim: t,
      onContinue: f
    } = e, p = (0, n.default)(), C = (0, r.isThemeDark)(p) ? d : m;
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
            src: C,
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
              children: [(0, a.jsxs)(i.default, {
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