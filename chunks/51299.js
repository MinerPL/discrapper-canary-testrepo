"use strict";
a.r(n), a.d(n, {
  default: function() {
    return h
  }
});
var t = a("735250");
a("470079");
var l = a("803997"),
  i = a.n(l),
  s = a("512722"),
  o = a.n(s),
  r = a("481060"),
  c = a("99690"),
  d = a("23551"),
  u = a("122021"),
  p = a("689938"),
  m = a("427129");

function N(e) {
  let {
    onComplete: n,
    excludedPlatformTypes: a
  } = e, l = (0, u.usePlatforms)();
  return (0, t.jsx)("div", {
    className: m.connectionsContainer,
    children: l.filter(e => !(null == a ? void 0 : a.has(e.type))).map(e => (0, t.jsx)(d.default, {
      type: e.type,
      className: m.accountBtn,
      innerClassName: m.accountBtnInner,
      onConnect: () => n(e.type)
    }, e.type))
  })
}

function f(e) {
  let {
    integrations: n,
    onCompleteApplication: a
  } = e;
  if (null == n || null == a) return null;
  let l = n.filter(e => {
    var n;
    return (null === (n = e.application) || void 0 === n ? void 0 : n.roleConnectionsVerificationUrl) != null
  });
  return 0 === l.length ? null : (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(r.Text, {
      variant: "eyebrow",
      color: "interactive-normal",
      className: m.applicationsHeader,
      children: p.default.Messages.APPS
    }), (0, t.jsx)("div", {
      className: m.applicationsContainer,
      children: l.map(e => {
        let n = e.application;
        o()(null != n, "application is null");
        let l = null == n ? void 0 : n.bot;
        return o()(null != l, "bot is null"), (0, t.jsxs)(r.Clickable, {
          onClick: () => a(n.id),
          className: m.application,
          children: [(0, t.jsx)(c.default, {
            user: l,
            className: m.applicationIcon
          }), (0, t.jsxs)("div", {
            className: m.applicationNameContainer,
            children: [(0, t.jsx)(r.Heading, {
              variant: "heading-sm/semibold",
              className: m.applicationNameText,
              children: n.name
            }), null != n.description && n.description.length > 0 ? (0, t.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              className: m.applicationNameText,
              children: n.description
            }) : null]
          })]
        }, e.id)
      })
    })]
  })
}

function h(e) {
  let {
    transitionState: n,
    onComplete: a,
    onClose: l,
    excludedPlatformTypes: s,
    integrations: o,
    onCompleteApplication: c
  } = e;
  return (0, t.jsx)(r.ModalRoot, {
    "aria-label": p.default.Messages.CONNECTIONS_ADD_CONNECTIONS,
    size: r.ModalSize.SMALL,
    transitionState: n,
    className: i()(m.container),
    fullscreenOnMobile: !1,
    children: (0, t.jsxs)(r.ModalContent, {
      children: [(0, t.jsxs)("div", {
        className: m.header,
        children: [(0, t.jsx)(r.Heading, {
          className: m.title,
          variant: "heading-md/bold",
          children: p.default.Messages.CONNECTIONS_ADD_CONNECTIONS
        }), (0, t.jsx)(r.ModalCloseButton, {
          className: m.__invalid_closeButton,
          onClick: l
        })]
      }), (0, t.jsx)(N, {
        onComplete: function(e) {
          a(e), l()
        },
        excludedPlatformTypes: s
      }), (0, t.jsx)(f, {
        integrations: o,
        onCompleteApplication: null != c ? function(e) {
          null == c || c(e), l()
        } : void 0
      })]
    })
  })
}