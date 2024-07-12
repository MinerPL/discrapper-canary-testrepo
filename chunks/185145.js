n.d(t, {
  T: function() {
return f;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(481060),
  s = n(545594),
  r = n(314897),
  o = n(271383),
  c = n(373791),
  d = n(322937),
  u = n(134049),
  h = n(893732),
  p = n(590433),
  m = n(689938),
  _ = n(243483);

function f(e) {
  let {
guild: t,
disabledUntil: n
  } = e, [f, E] = (0, u.i)(t.id), C = (0, a.e7)([
o.ZP,
r.default
  ], () => o.ZP.getMember(t.id, r.default.getId()), [t.id]);
  return (0, d.$)(C), (0, i.jsxs)('div', {
children: [
  f ? (0, i.jsx)(h.Z, {
    onClose: () => E(t.id),
    guildName: t.name
  }) : null,
  (0, i.jsx)(s.i, {
    bannerIcon: (0, i.jsx)(l.ClockWarningIcon, {
      size: 'md',
      color: 'currentColor',
      className: _.bannerIcon
    }),
    bannerHeader: m.Z.Messages.GUILD_COMMUNICATION_DISABLED_NOTICE_HEADER,
    bannerSubtext: m.Z.Messages.GUILD_COMMUNICATION_DISABLED_CHAT_NOTICE_DESCRIPTION.format({
      link: p.cu
    }),
    containerStyles: _.bannerContainer,
    headerStyles: _.bannerHeader,
    children: (0, i.jsx)(l.Text, {
      variant: 'text-sm/semibold',
      children: (0, i.jsx)(c.Z, {
        deadline: new Date(n),
        showUnits: !0,
        stopAtOneSec: !0
      })
    })
  })
]
  });
}