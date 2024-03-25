"use strict";
n.r(t), n.d(t, {
  confirmRuleDelete: function() {
    return i
  },
  confirmAddKeyword: function() {
    return a
  },
  createOnPreventNavigation: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var o = n("77078");

function u(e) {
  return new Promise(t => {
    (0, o.openModalLazy)(() => e(() => {
      t(!0)
    }, e => (t(!1), e())))
  })
}
let i = e => u(async (t, o) => {
    let {
      default: u
    } = await n.el("609051").then(n.bind(n, "609051"));
    return n => (0, r.jsx)(u, {
      ...n,
      ruleName: e,
      onConfirm: t,
      onClose: () => o(n.onClose),
      onCancel: () => o(n.onClose)
    })
  }),
  a = (e, t) => u(async (o, u) => {
    let {
      default: i
    } = await n.el("770332").then(n.bind(n, "770332"));
    return n => (0, r.jsx)(i, {
      ...n,
      ruleName: e,
      keyword: t,
      onConfirm: o,
      onClose: () => u(n.onClose),
      onCancel: () => u(n.onClose)
    })
  }),
  l = e => t => u(async (o, u) => {
    let {
      default: i
    } = await n.el("282683").then(n.bind(n, "282683")), a = () => {
      t(), o()
    };
    return t => (0, r.jsx)(i, {
      ruleName: e,
      ...t,
      onConfirm: a,
      onClose: () => u(t.onClose),
      onCancel: () => u(t.onClose)
    })
  })