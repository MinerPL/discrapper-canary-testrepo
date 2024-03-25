"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("77078"),
  i = s("837899"),
  r = s("425190"),
  o = s("183866"),
  d = s("464847"),
  u = s("782340"),
  c = s("958268");

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