"use strict";
n.r(t), n.d(t, {
  useJoinRequestButtonActions: function() {
    return u
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("693546"),
  r = n("246364"),
  o = n("689938");

function u(e, t) {
  let [u, d] = l.useState(!1), c = () => {
    (0, s.showToast)((0, s.createToast)(o.default.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
  }, f = async () => {
    if (!u && null != e && null != t) {
      d(!0);
      try {
        await i.default.updateGuildJoinRequest(e, t, r.GuildJoinRequestApplicationStatuses.APPROVED)
      } catch {
        c()
      } finally {
        d(!1)
      }
    }
  };
  return {
    approveRequest: f,
    rejectRequest: () => {
      null != e && null != t && (0, s.openModalLazy)(async () => {
        let {
          default: l
        } = await n.e("56496").then(n.bind(n, "113886"));
        return n => (0, a.jsx)(l, {
          modalProps: n,
          guildId: e,
          userId: t,
          onError: c
        })
      })
    },
    submitting: u
  }
}