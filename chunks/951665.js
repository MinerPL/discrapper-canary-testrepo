"use strict";
t.d(s, {
  Z: function() {
    return E
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(86813),
  r = t(826026),
  o = t(457414),
  c = t(311173),
  d = t(689938),
  u = t(949486);

function E(e) {
  var s;
  let {
    rule: t,
    onChangeRule: E,
    collapsed: _ = !1
  } = e, [I, T] = i.useState(!_), N = i.useCallback(() => {
    T(!I)
  }, [I, T]), m = i.useCallback(e => {
    E({
      ...t,
      triggerMetadata: {
        ...t.triggerMetadata,
        regexPatterns: e
      }
    })
  }, [E, t]);
  return (0, o.S)(t.triggerType) ? (0, n.jsx)(l.Collapsible, {
    isExpanded: I,
    collapsibleContent: (0, n.jsx)(c.Z, {
      rule: t,
      onChangeText: m,
      className: u.textAreaContainer,
      initialValue: null === (s = t.triggerMetadata) || void 0 === s ? void 0 : s.regexPatterns
    }),
    className: u.collapseable,
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, n.jsx)(l.Clickable, {
        onClick: e => {
          N(), s(e)
        },
        children: (0, n.jsxs)("div", {
          className: u.header,
          children: [(0, n.jsx)(l.Heading, {
            variant: "text-sm/medium",
            children: d.Z.Messages.GUILD_AUTOMOD_REGEX_TEXTAREA_TITLE
          }), I ? (0, n.jsx)(r.Z, {
            className: u.arrow
          }) : (0, n.jsx)(a.Z, {
            className: u.arrow
          })]
        })
      })
    }
  }) : null
}