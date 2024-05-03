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
  r = s("287734"),
  u = s("592125"),
  d = s("693546"),
  o = s("689938");

function c(e) {
  let {
    joinRequest: t
  } = e, [s, c] = l.useState(!1), E = (0, i.useStateFromStores)([u.default], () => u.default.getChannel(t.interviewChannelId)), I = l.useCallback(() => {
    (0, n.showToast)((0, n.createToast)(o.default.Messages.ERROR_GENERIC_TITLE, n.ToastType.FAILURE))
  }, []), T = async () => {
    if (null != E) {
      r.default.selectPrivateChannel(E.id);
      return
    }
    if (!s) {
      c(!0);
      try {
        await d.default.createOrEnterJoinRequestInterview(t.joinRequestId)
      } catch {
        I()
      } finally {
        c(!1)
      }
    }
  }, f = null == t.interviewChannelId ? o.default.Messages.CLAN_START_INTERVIEW : o.default.Messages.CLAN_JOIN_INTERVIEW;
  return (0, a.jsx)(n.Button, {
    color: n.Button.Colors.GREEN,
    submitting: s,
    onClick: T,
    children: f
  })
}