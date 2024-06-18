"use strict";
t.d(s, {
  Z: function() {
    return u
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(273504),
  r = t(981631),
  o = t(689938),
  c = t(407483),
  d = t(139123);

function u(e) {
  let {
    rule: s,
    onChangeRule: t
  } = e, [u, E] = i.useState(s.name);
  return (0, n.jsxs)(l.FormItem, {
    children: [(0, n.jsx)(l.Text, {
      className: d.triggerHeader,
      variant: "text-sm/semibold",
      children: o.Z.Messages.GUILD_AUTOMOD_INPUT_FILTER_NAME
    }), (0, n.jsx)(l.TextInput, {
      className: c.ruleNameInput,
      onChange: e => {
        E(e), t({
          ...s,
          name: e
        })
      },
      onClick: e => e.stopPropagation(),
      onKeyPress: e => {
        e.which === r.yXg.SPACE && e.stopPropagation()
      },
      placeholder: o.Z.Messages.GUILD_AUTOMOD_INPUT_FILTER_NAME_PLACEHOLDER,
      maxLength: a.OU,
      value: u
    })]
  })
}