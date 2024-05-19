"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  i = s("86813"),
  r = s("826026"),
  o = s("457414"),
  d = s("311173"),
  u = s("689938"),
  c = s("949486");

function E(e) {
  var t;
  let {
    rule: s,
    onChangeRule: E,
    collapsed: _ = !1
  } = e, [I, T] = l.useState(!_), S = l.useCallback(() => {
    T(!I)
  }, [I, T]), f = l.useCallback(e => {
    E({
      ...s,
      triggerMetadata: {
        ...s.triggerMetadata,
        regexPatterns: e
      }
    })
  }, [E, s]);
  return (0, o.isRegexSupported)(s.triggerType) ? (0, a.jsx)(n.Collapsible, {
    isExpanded: I,
    collapsibleContent: (0, a.jsx)(d.default, {
      rule: s,
      onChangeText: f,
      className: c.textAreaContainer,
      initialValue: null === (t = s.triggerMetadata) || void 0 === t ? void 0 : t.regexPatterns
    }),
    className: c.collapseable,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, a.jsx)(n.Clickable, {
        onClick: e => {
          S(), t(e)
        },
        children: (0, a.jsxs)("div", {
          className: c.header,
          children: [(0, a.jsx)(n.Heading, {
            variant: "text-sm/medium",
            children: u.default.Messages.GUILD_AUTOMOD_REGEX_TEXTAREA_TITLE
          }), I ? (0, a.jsx)(r.default, {
            className: c.arrow
          }) : (0, a.jsx)(i.default, {
            className: c.arrow
          })]
        })
      })
    }
  }) : null
}