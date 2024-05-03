"use strict";
r.r(t), r.d(t, {
  default: function() {
    return h
  }
});
var a = r("735250");
r("470079");
var i = r("120356"),
  l = r.n(i),
  n = r("481060"),
  o = r("423932"),
  s = r("601948"),
  c = r("523078"),
  d = r("949086");
let u = () => {
  Promise.all([r.e("99387"), r.e("52030"), r.e("85281")]).then(r.bind(r, "24031")).then(e => {
    let {
      openMFAModal: t
    } = e;
    t({
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
      className: l()(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(s.OverridePremiumTypeDropDown, {
        isDevTools: !0
      })
    }), (0, a.jsx)("div", {
      className: l()(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(n.Button, {
        onClick: u,
        children: "Launch MFA"
      })
    }), (0, a.jsx)("div", {
      className: l()(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(n.Button, {
        onClick: () => (0, o.default)(),
        children: "Launch Vibing Wumpus"
      })
    })]
  })
}