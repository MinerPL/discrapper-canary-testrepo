"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("77078"),
  i = s("143460"),
  r = s("49111"),
  o = s("782340"),
  d = s("146108"),
  u = s("517621");

function c(e) {
  let {
    rule: t,
    onChangeRule: s
  } = e, [c, E] = l.useState(t.name);
  return (0, a.jsxs)(n.FormItem, {
    children: [(0, a.jsx)(n.Text, {
      className: u.triggerHeader,
      variant: "text-sm/semibold",
      children: o.default.Messages.GUILD_AUTOMOD_INPUT_FILTER_NAME
    }), (0, a.jsx)(n.TextInput, {
      className: d.ruleNameInput,
      onChange: e => {
        E(e), s({
          ...t,
          name: e
        })
      },
      onClick: e => e.stopPropagation(),
      onKeyPress: e => {
        e.which === r.KeyboardKeys.SPACE && e.stopPropagation()
      },
      placeholder: o.default.Messages.GUILD_AUTOMOD_INPUT_FILTER_NAME_PLACEHOLDER,
      maxLength: i.MAX_RULE_NAME_LENGTH,
      value: c
    })]
  })
}