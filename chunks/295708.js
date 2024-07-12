n.d(t, {
  Z: function() {
return u;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(481060),
  r = n(273504),
  l = n(981631),
  o = n(689938),
  c = n(876976),
  d = n(420339);

function u(e) {
  let {
rule: t,
onChangeRule: n
  } = e, [u, _] = a.useState(t.name);
  return (0, s.jsxs)(i.FormItem, {
children: [
  (0, s.jsx)(i.Text, {
    className: d.triggerHeader,
    variant: 'text-sm/semibold',
    children: o.Z.Messages.GUILD_AUTOMOD_INPUT_FILTER_NAME
  }),
  (0, s.jsx)(i.TextInput, {
    className: c.ruleNameInput,
    onChange: e => {
      _(e), n({
        ...t,
        name: e
      });
    },
    onClick: e => e.stopPropagation(),
    onKeyPress: e => {
      e.which === l.yXg.SPACE && e.stopPropagation();
    },
    placeholder: o.Z.Messages.GUILD_AUTOMOD_INPUT_FILTER_NAME_PLACEHOLDER,
    maxLength: r.OU,
    value: u
  })
]
  });
}