n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(399606),
  l = n(481060),
  r = n(346486),
  o = n(69882),
  c = n(815790),
  u = n(893966),
  d = n(776767),
  h = n(689938),
  m = n(446926);

function p(e) {
  let {
member: t
  } = e, n = t.userId, p = t.guildId, _ = (0, s.e7)([u.Z], () => u.Z.getEnhancedMember(p, n), [
n,
p
  ]), f = (null != _ ? _ : t).unusualDMActivityUntil, E = a.useCallback(e => {
if (null == e)
  return null;
let t = new Date(e).getTime();
return (0, c.fv)(t, c.jq.JOINED_AT);
  }, []), g = a.useMemo(() => null == t ? null : E(f), [
t,
E,
f
  ]), C = a.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), I = a.useMemo(() => null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return null != f || C ? (0, i.jsx)(l.FormItem, {
title: h.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
titleClassName: m.infoTitle,
children: (0, i.jsxs)(d.WM, {
  children: [
    null != f && (0, i.jsx)(d._2, {
      icon: (0, i.jsx)(l.ChatWarningIcon, {
        size: 'custom',
        color: 'currentColor',
        width: d.Mn,
        height: d.Mn
      }),
      name: (0, i.jsx)(l.Text, {
        variant: 'text-sm/semibold',
        color: 'text-normal',
        children: h.Z.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY
      }),
      description: (0, i.jsx)(l.Text, {
        variant: 'text-sm/semibold',
        color: 'text-normal',
        children: g
      })
    }),
    C && null != I && (0, i.jsx)(d._2, {
      icon: (0, i.jsx)(l.ClockWarningIcon, {
        size: 'custom',
        color: 'currentColor',
        width: d.Mn,
        height: d.Mn
      }),
      name: (0, i.jsx)(l.Text, {
        variant: 'text-sm/semibold',
        color: 'text-normal',
        children: h.Z.Messages.GUILD_COMMUNICATION_DISABLED_ON_MEMBER
      }),
      description: (0, i.jsx)(l.Text, {
        variant: 'text-sm/semibold',
        color: 'text-normal',
        children: (0, i.jsx)(r.Z, {
          deadline: I,
          showUnits: !0,
          stopAtOneSec: !0
        })
      })
    })
  ]
})
  }) : null;
}