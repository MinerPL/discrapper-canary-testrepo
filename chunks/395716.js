n.d(s, {
  Z: function() {
return u;
  }
}), n(47120);
var a = n(735250),
  t = n(470079),
  r = n(442837),
  l = n(481060),
  i = n(287734),
  o = n(592125),
  c = n(693546),
  d = n(689938);

function u(e) {
  let {
joinRequest: s
  } = e, [n, u] = t.useState(!1), I = (0, r.e7)([o.Z], () => o.Z.getChannel(s.interviewChannelId)), E = t.useCallback(() => {
(0, l.showToast)((0, l.createToast)(d.Z.Messages.ERROR_GENERIC_TITLE, l.ToastType.FAILURE));
  }, []), _ = t.useCallback(async () => {
if (null != I) {
  i.default.selectPrivateChannel(I.id);
  return;
}
if (!n) {
  u(!0);
  try {
    await c.Z.createOrEnterJoinRequestInterview(s.joinRequestId);
  } catch {
    E();
  } finally {
    u(!1);
  }
}
  }, [
I,
s.joinRequestId,
E,
n
  ]);
  return (0, a.jsx)(l.Button, {
color: l.Button.Colors.BRAND,
submitting: n,
onClick: _,
children: d.Z.Messages.CLAN_DM_APPLICANT
  });
}