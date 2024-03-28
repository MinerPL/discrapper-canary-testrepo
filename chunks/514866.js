"use strict";
t.r(r), t.d(r, {
  default: function() {
    return h
  }
});
var a = t("735250");
t("470079");
var n = t("803997"),
  i = t.n(n),
  o = t("481060"),
  l = t("423932"),
  s = t("601948"),
  c = t("85624"),
  d = t("794711");
let u = () => {
  Promise.all([t.e("99387"), t.e("52030"), t.e("85281")]).then(t.bind(t, "24031")).then(e => {
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
      className: i()(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(s.OverridePremiumTypeDropDown, {
        isDevTools: !0
      })
    }), (0, a.jsx)("div", {
      className: i()(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(o.Button, {
        onClick: u,
        children: "Launch MFA"
      })
    }), (0, a.jsx)("div", {
      className: i()(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(o.Button, {
        onClick: () => (0, l.default)(),
        children: "Launch Vibing Wumpus"
      })
    })]
  })
}