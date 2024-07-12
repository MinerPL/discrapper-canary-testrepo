var r = n(735250);
n(470079);
var i = n(952265),
  a = n(626135),
  o = n(863249),
  s = n(266395),
  l = n(592286),
  u = n(981631);
let c = () => {
a.default.track(u.rMx.MODAL_DISMISSED, {
  type: l.N4
});
  },
  d = e => {
a.default.track(u.rMx.OPEN_MODAL, {
  type: l.N4,
  guild_id: e
});
  };
t.Z = {
  openMemberVerificationModal(e, t) {
d(e);
let a = async t => {
  await o.Z.submitVerificationForm(e, t);
};
(0, i.ZD)(async () => {
  let {
    default: t
  } = await Promise.all([
    n.e('80026'),
    n.e('70669')
  ]).then(n.bind(n, 645264));
  return n => (0, r.jsx)(t, {
    ...n,
    guildId: e,
    onComplete: a,
    onClose: function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (!e) {
        if (s.rb.getState().hasUnsubmittedChanges) {
          (0, s.PE)(!0);
          return;
        }
        c();
      }
      n.onClose();
    }
  });
}, {
  modalKey: l.Pn,
  onCloseRequest: () => {
    c(), s.rb.getState().hasUnsubmittedChanges ? (0, s.PE)(!0) : (0, i.Mr)(l.Pn);
  },
  onCloseCallback: t
});
  },
  closeMemberVerificationModal() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
!e && c(), (0, i.Mr)(l.Pn);
  }
};