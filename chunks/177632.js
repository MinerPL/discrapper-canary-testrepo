"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("759843"),
  i = n("65597"),
  r = n("77078"),
  o = n("327037"),
  u = n("428958"),
  d = n("330387"),
  c = n("476765"),
  f = n("49111"),
  E = n("782340"),
  h = n("955811");

function _(e) {
  let {
    transitionState: t
  } = e, _ = (0, i.useStateFromStores)([d.default], () => d.default.getAction()), [C, S] = s.useState(!1), I = (0, c.useUID)();
  async function m() {
    if (S(!0), _ === f.UserRequiredActions.AGREEMENTS) {
      let e = await (0, o.acceptAgreements)();
      S(e)
    }
    return null
  }
  return (0, u.default)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: _
    }
  }, {}, []), (0, a.jsxs)(r.ModalRoot, {
    "aria-labelledby": I,
    transitionState: t,
    children: [(0, a.jsx)("div", {
      id: I
    }), (0, a.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, a.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: E.default.Messages.NEW_TERMS_TITLE
      })
    }), (0, a.jsxs)(r.ModalContent, {
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: _ === f.UserRequiredActions.AGREEMENTS ? E.default.Messages.TERMS_OF_SERVICE_UPDATE_03_27_2023_DESCRIPTION.format() : null
      }), (0, a.jsxs)("div", {
        className: h.container,
        children: [(0, a.jsxs)("ul", {
          className: h.links,
          children: [(0, a.jsx)("li", {
            children: E.default.Messages.TERMS_OF_SERVICE.format({
              url: f.MarketingURLs.TERMS
            })
          }), (0, a.jsx)("li", {
            children: E.default.Messages.PAID_SERVICES_TERMS.format({
              url: f.MarketingURLs.PAID_TERMS
            })
          }), (0, a.jsx)("li", {
            children: E.default.Messages.PRIVACY_POLICY.format({
              url: f.MarketingURLs.PRIVACY
            })
          }), (0, a.jsx)("li", {
            children: E.default.Messages.COMMUNITY_GUIDELINES.format({
              url: f.MarketingURLs.GUIDELINES
            })
          })]
        }), (0, a.jsx)("img", {
          className: h.image,
          alt: "",
          src: n("275974")
        })]
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        className: h.agreementDescription,
        children: E.default.Messages.TERMS_OF_SERVICE_AGREEMENT_DESCRIPTION
      })]
    }), (0, a.jsx)(r.ModalFooter, {
      children: (0, a.jsx)(r.Button, {
        submitting: C,
        onClick: m,
        color: r.Button.Colors.GREEN,
        children: E.default.Messages.AGREE
      })
    })]
  })
}