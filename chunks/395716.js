"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  u = s("287734"),
  r = s("592125"),
  o = s("693546"),
  d = s("689938");

function c(e) {
  let {
    joinRequest: t
  } = e, [s, c] = l.useState(!1), E = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(t.interview_channel_id)), I = l.useCallback(() => {
    (0, n.showToast)((0, n.createToast)(d.default.Messages.ERROR_GENERIC_TITLE, n.ToastType.FAILURE))
  }, []), f = async () => {
    if (null != E) {
      u.default.selectPrivateChannel(E.id);
      return
    }
    if (!s) {
      c(!0);
      try {
        await o.default.createOrEnterJoinRequestInterview(t.join_request_id)
      } catch {
        I()
      } finally {
        c(!1)
      }
    }
  }, T = null == E ? d.default.Messages.CLAN_START_INTERVIEW : d.default.Messages.CLAN_JOIN_INTERVIEW;
  return (0, a.jsx)(n.Button, {
    color: n.Button.Colors.GREEN,
    submitting: s,
    onClick: f,
    children: T
  })
}