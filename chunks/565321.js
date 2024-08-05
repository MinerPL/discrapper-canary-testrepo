t(47120);
var a = t(735250),
  r = t(470079),
  i = t(481060),
  s = t(881052),
  o = t(484455),
  l = t(592286),
  c = t(689938),
  d = t(672060);
n.Z = function(e) {
  let {
guildId: n,
onSave: t,
formDescription: u
  } = e, [m, _] = r.useState(null), [C, f] = r.useState(u), h = r.useRef(!1), x = r.useRef(!1);
  r.useEffect(() => () => {
x.current = !0;
  }, []);
  let g = r.useCallback(async () => {
if (!h.current) {
  _(null);
  try {
    await t(n, C);
  } catch (e) {
    if (x.current)
      return;
    _(new s.Hx(e).getAnyErrorMessage());
  } finally {
    if (x.current)
      return;
    h.current = !1;
  }
}
  }, [
C,
n,
t
  ]);
  return (0, a.jsxs)(o.Z, {
title: c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
children: [
  (0, a.jsx)(i.TextArea, {
    className: d.fieldBackground,
    maxLength: l.Us,
    value: null != C ? C : '',
    placeholder: c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
    onChange: e => {
      f(e);
    },
    onBlur: g,
    autosize: !0
  }),
  null != m && '' !== m ? (0, a.jsx)(i.Text, {
    className: d.errorText,
    variant: 'text-xs/normal',
    color: 'text-danger',
    children: m
  }) : null
]
  });
};