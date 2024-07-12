n(789020);
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(630388),
  r = n(402148),
  l = n(981631),
  o = n(689938),
  c = n(166904);
t.Z = e => {
  let {
role: t
  } = e;
  return (0, i.yE)(t.flags, l.aO5.IN_PROMPT) ? (0, r.F)(t) ? (0, s.jsxs)('div', {
className: c.notice,
children: [
  (0, s.jsx)(a.CircleExclamationPointIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    color: 'currentColor',
    className: c.noticeIconPowerful
  }),
  (0, s.jsx)(a.Text, {
    variant: 'text-sm/normal',
    children: o.Z.Messages.ROLE_IN_PROMPT_POWERFUL_NOTICE_TEXT
  })
]
  }) : (0, s.jsxs)('div', {
className: c.notice,
children: [
  (0, s.jsx)(a.CircleExclamationPointIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    color: 'currentColor',
    className: c.noticeIcon
  }),
  (0, s.jsx)(a.Text, {
    variant: 'text-sm/normal',
    children: o.Z.Messages.ROLE_IN_PROMPT_NOTICE_TEXT
  })
]
  }) : null;
};