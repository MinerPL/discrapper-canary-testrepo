"use strict";
s.r(t), s.d(t, {
  BlockedPaymentsContentModal: function() {
    return h
  },
  BlockedPaymentsContentSettings: function() {
    return A
  },
  BlockedPaymentsWarning: function() {
    return I
  }
});
var n = s("735250");
s("470079");
var r = s("803997"),
  a = s.n(r),
  i = s("692547"),
  l = s("780384"),
  u = s("481060"),
  o = s("410030"),
  c = s("285952"),
  d = s("759231"),
  p = s("63063"),
  f = s("211242"),
  C = s("981631"),
  E = s("689938"),
  _ = s("504329"),
  P = s("51125"),
  N = s("47268");

function m(e) {
  let {
    className: t
  } = e, s = (0, o.default)(), r = (0, l.isThemeDark)(s) ? P : N;
  return (0, n.jsxs)("div", {
    className: a()(_.container, t),
    children: [(0, n.jsx)(u.Heading, {
      className: _.header,
      variant: "heading-xl/semibold",
      children: E.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, n.jsxs)(u.Text, {
      className: _.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, n.jsx)("p", {
        children: E.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, n.jsx)("p", {
        children: E.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: p.default.getArticleURL(C.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, n.jsx)("img", {
      src: r,
      className: _.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function A() {
  return (0, n.jsx)(m, {
    className: _.settings
  })
}

function h(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.ModalHeader, {
      className: _.blockedPaymentsModalHeader,
      justify: c.default.Justify.END,
      children: (0, n.jsx)(u.ModalCloseButton, {
        onClick: t
      })
    }), (0, n.jsx)(u.ModalContent, {
      className: _.blockedPaymentsModalContent,
      children: (0, n.jsx)(m, {
        className: _.modal
      })
    })]
  })
}

function I(e) {
  let {
    className: t
  } = e;
  return (0, f.useBlockedPaymentsConfig)() ? (0, n.jsxs)(u.Card, {
    className: a()(_.blockedPaymentsWarning, t),
    type: u.Card.Types.CUSTOM,
    children: [(0, n.jsx)(d.default, {
      className: _.blockedPaymentsWarningIcon,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }), (0, n.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: E.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: p.default.getArticleURL(C.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}