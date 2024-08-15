t(47120);
var a = t(735250);
t(470079);
var r = t(442837),
  i = t(481060),
  s = t(863249),
  o = t(616230),
  l = t(430824),
  c = t(389134),
  d = t(650461),
  u = t(689938),
  m = t(318577);
n.Z = e => {
  let {
guildId: n,
error: t,
inSettings: _ = !1
  } = e, f = (0, r.e7)([l.Z], () => l.Z.getGuild(n)), C = (0, r.e7)([
c.Z,
d.ZP
  ], () => {
var e, t;
return _ ? c.Z.getState().settings.verificationForm : null === (t = d.ZP.getStateForGuild(n)) || void 0 === t ? void 0 : null === (e = t.progress) || void 0 === e ? void 0 : e.verificationForm;
  });
  return null == f ? null : (0, a.jsxs)('div', {
className: m.slideContent,
children: [
  (0, a.jsx)(i.Heading, {
    variant: 'heading-xxl/medium',
    className: m.title,
    children: _ ? u.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP : u.Z.Messages.CLAN_SETUP_APPLICATION_TITLE
  }),
  (0, a.jsx)(i.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: m.subtitle,
    children: u.Z.Messages.CLAN_SETUP_APPLICATION_SUBTITLE
  }),
  (0, a.jsxs)('div', {
    className: m.maxWidthContainer,
    children: [
      null != t && (0, a.jsx)(i.Text, {
        variant: 'text-sm/normal',
        color: 'status-danger',
        className: m.errorText,
        children: t
      }),
      (0, a.jsx)(o.Z, {
        guild: f,
        isClanContext: !0,
        onFieldsSave: (e, n) => (s.Z.updateVerificationFormFieldsLocal(e, [...n]), Promise.resolve()),
        verificationForm: C
      })
    ]
  })
]
  });
};