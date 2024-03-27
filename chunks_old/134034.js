"use strict";
t.r(r), t.d(r, {
  default: function() {
    return h
  }
});
var a = t("37983");
t("884691");
var n = t("414456"),
  i = t.n(n),
  o = t("77078"),
  l = t("15408"),
  s = t("484894"),
  c = t("769284"),
  d = t("890957");
let u = () => {
  t.el("776502").then(t.bind(t, "776502")).then(e => {
    let {
      openMFAModal: r
    } = e;
    r({
      ticket: "ticket",
      methods: [{
        type: "webauthn",
        challenge: "{}"
      }, {
        type: "totp",
        backup_codes_allowed: !0
      }, {
        type: "sms"
      }, {
        type: "password"
      }]
    }, console.log, console.error)
  })
};

function h() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: i(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(s.OverridePremiumTypeDropDown, {
        isDevTools: !0
      })
    }), (0, a.jsx)("div", {
      className: i(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(o.Button, {
        onClick: u,
        children: "Launch MFA"
      })
    }), (0, a.jsx)("div", {
      className: i(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(o.Button, {
        onClick: () => (0, l.default)(),
        children: "Launch Vibing Wumpus"
      })
    })]
  })
}