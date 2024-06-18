"use strict";
var i = n(735250);
n(470079);
var r = n(952265),
  s = n(626135),
  o = n(863249),
  a = n(266395),
  l = n(592286),
  u = n(981631);
let _ = () => {
    s.default.track(u.rMx.MODAL_DISMISSED, {
      type: l.N4
    })
  },
  d = e => {
    s.default.track(u.rMx.OPEN_MODAL, {
      type: l.N4,
      guild_id: e
    })
  };
t.Z = {
  openMemberVerificationModal(e, t) {
    d(e);
    let s = async t => {
      await o.Z.submitVerificationForm(e, t)
    };
    (0, r.ZD)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("80026"), n.e("70935")]).then(n.bind(n, 645264));
      return n => (0, i.jsx)(t, {
        ...n,
        guildId: e,
        onComplete: s,
        onClose: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!e) {
            if (a.rb.getState().hasUnsubmittedChanges) {
              (0, a.PE)(!0);
              return
            }
            _()
          }
          n.onClose()
        }
      })
    }, {
      modalKey: l.Pn,
      onCloseRequest: () => {
        _(), a.rb.getState().hasUnsubmittedChanges ? (0, a.PE)(!0) : (0, r.Mr)(l.Pn)
      },
      onCloseCallback: t
    })
  },
  closeMemberVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    !e && _(), (0, r.Mr)(l.Pn)
  }
}