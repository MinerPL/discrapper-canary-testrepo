"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("723359"),
  i = s("231338");
t.default = {
  openNewUserAgeGateModal: e => {
    (0, n.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("49237"), s.e("99387"), s.e("66635"), s.e("20727")]).then(s.bind(s, "298237"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    }, {
      modalKey: l.NEW_USER_AGE_GATE_MODAL_KEY,
      onCloseRequest: i.NOOP,
      onCloseCallback: e
    })
  },
  openClaimAccountModal: function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = arguments.length > 1 ? arguments[1] : void 0;
    (0, n.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([s.e("99387"), s.e("31093")]).then(s.bind(s, "324239"));
      return s => (0, a.jsx)(t, {
        claimRequired: e,
        ...s
      })
    }, {
      onCloseRequest: e ? i.NOOP : null,
      onCloseCallback: t
    })
  }
}