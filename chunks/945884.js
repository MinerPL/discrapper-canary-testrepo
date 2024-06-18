"use strict";
var i = n(302454),
  r = n.n(i),
  s = n(777547);
let o = /\n$/,
  a = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
  l = {
    order: r().defaultRules.heading.order,
    requiredFirstCharacters: ["-"],
    match: (e, t, n) => {
      let {
        showSubtextMarkdown: r
      } = s.m.getCurrentConfig({
        location: "MarkupSubtextRule"
      });
      return r ? null == n || "" === n || null != n.match(o) ? (0, i.anyScopeRegex)(a)(e, t, n) : null : null
    },
    parse: function(e, t, n) {
      return {
        content: (0, i.parseInline)(t, e[1].trim(), n)
      }
    }
  };
t.Z = l