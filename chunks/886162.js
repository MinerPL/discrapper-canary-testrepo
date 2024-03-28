"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("990547"),
  i = n("399606"),
  r = n("481060"),
  o = n("232567"),
  u = n("213609"),
  d = n("23434"),
  c = n("153124"),
  f = n("981631"),
  E = n("689938"),
  h = n("861929");

function _(e) {
  let {
    transitionState: t
  } = e, _ = (0, i.useStateFromStores)([d.default], () => d.default.getAction()), [C, m] = s.useState(!1), S = (0, c.useUID)();
  async function I() {
    return m(!0), _ === f.UserRequiredActions.AGREEMENTS && m(await (0, o.acceptAgreements)()), null
  }
  return (0, u.default)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: _
    }
  }, {}, []), (0, a.jsxs)(r.ModalRoot, {
    "aria-labelledby": S,
    transitionState: t,
    children: [(0, a.jsx)("div", {
      id: S
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
          src: n("146714")
        })]
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        className: h.agreementDescription,
        children: E.default.Messages.TERMS_OF_SERVICE_AGREEMENT_DESCRIPTION
      })]
    }), (0, a.jsx)(r.ModalFooter, {
      children: (0, a.jsx)(r.Button, {
        submitting: C,
        onClick: I,
        color: r.Button.Colors.GREEN,
        children: E.default.Messages.AGREE
      })
    })]
  })
}