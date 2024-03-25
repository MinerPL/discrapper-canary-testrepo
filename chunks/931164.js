"use strict";
A.r(t), A.d(t, {
  default: function() {
    return c
  }
});
var a = A("917351"),
  l = A.n(a),
  n = A("270926"),
  r = A("888198"),
  s = A("367376");
let i = l.omit(r.default.RULES, ["codeBlock", "heading"]),
  o = {
    ...n.default,
    parse: function(e, t, A) {
      var a;
      let l = n.default.parse(e, t, A),
        r = null !== (a = A.initialHeaderLevel) && void 0 !== a ? a : 3,
        s = Math.min(6, r + l.level);
      return {
        ...l,
        level: s
      }
    }
  },
  d = s.default.combineAndInjectMentionRule(i, [s.default.createReactRules(s.default.defaultReactRuleOptions), {
    header: o
  }]),
  u = s.default.reactParserFor(d);
var c = u