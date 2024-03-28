"use strict";
n.r(t), n.d(t, {
  confirmAddKeyword: function() {
    return a
  },
  confirmRuleDelete: function() {
    return u
  },
  createOnPreventNavigation: function() {
    return l
  }
});
var r = n("735250");
n("470079");
var o = n("481060");

function i(e) {
  return new Promise(t => {
    (0, o.openModalLazy)(() => e(() => {
      t(!0)
    }, e => (t(!1), e())))
  })
}
let u = e => i(async (t, o) => {
    let {
      default: i
    } = await n.e("44462").then(n.bind(n, "478472"));
    return n => (0, r.jsx)(i, {
      ...n,
      ruleName: e,
      onConfirm: t,
      onClose: () => o(n.onClose),
      onCancel: () => o(n.onClose)
    })
  }),
  a = (e, t) => i(async (o, i) => {
    let {
      default: u
    } = await n.e("92575").then(n.bind(n, "601787"));
    return n => (0, r.jsx)(u, {
      ...n,
      ruleName: e,
      keyword: t,
      onConfirm: o,
      onClose: () => i(n.onClose),
      onCancel: () => i(n.onClose)
    })
  }),
  l = e => t => i(async (o, i) => {
    let {
      default: u
    } = await n.e("83613").then(n.bind(n, "449675")), a = () => {
      t(), o()
    };
    return t => (0, r.jsx)(u, {
      ruleName: e,
      ...t,
      onConfirm: a,
      onClose: () => i(t.onClose),
      onCancel: () => i(t.onClose)
    })
  })