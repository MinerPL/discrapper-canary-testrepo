"use strict";
s.r(t), s.d(t, {
  BlockedPaymentsContentSettings: function() {
    return A
  },
  BlockedPaymentsContentModal: function() {
    return N
  },
  BlockedPaymentsWarning: function() {
    return p
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("669491"),
  l = s("819855"),
  o = s("77078"),
  u = s("841098"),
  d = s("145131"),
  c = s("423487"),
  _ = s("701909"),
  E = s("619935"),
  T = s("49111"),
  I = s("782340"),
  f = s("872773"),
  S = s("584503"),
  R = s("45656");

function m(e) {
  let {
    className: t
  } = e, s = (0, u.default)(), r = (0, l.isThemeDark)(s) ? S : R;
  return (0, a.jsxs)("div", {
    className: i(f.container, t),
    children: [(0, a.jsx)(o.Heading, {
      className: f.header,
      variant: "heading-xl/semibold",
      children: I.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, a.jsxs)(o.Text, {
      className: f.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, a.jsx)("p", {
        children: I.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, a.jsx)("p", {
        children: I.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: _.default.getArticleURL(T.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, a.jsx)("img", {
      src: r,
      className: f.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function A() {
  return (0, a.jsx)(m, {
    className: f.settings
  })
}

function N(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.ModalHeader, {
      className: f.blockedPaymentsModalHeader,
      justify: d.default.Justify.END,
      children: (0, a.jsx)(o.ModalCloseButton, {
        onClick: t
      })
    }), (0, a.jsx)(o.ModalContent, {
      className: f.blockedPaymentsModalContent,
      children: (0, a.jsx)(m, {
        className: f.modal
      })
    })]
  })
}

function p(e) {
  let {
    className: t
  } = e, s = (0, E.useBlockedPaymentsConfig)();
  return s ? (0, a.jsxs)(o.Card, {
    className: i(f.blockedPaymentsWarning, t),
    type: o.Card.Types.CUSTOM,
    children: [(0, a.jsx)(c.default, {
      className: f.blockedPaymentsWarningIcon,
      color: n.default.unsafe_rawColors.YELLOW_300.css
    }), (0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: I.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: _.default.getArticleURL(T.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}