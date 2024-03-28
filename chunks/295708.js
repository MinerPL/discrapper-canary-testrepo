"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  i = s("273504"),
  r = s("981631"),
  o = s("689938"),
  d = s("258704"),
  u = s("568046");

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