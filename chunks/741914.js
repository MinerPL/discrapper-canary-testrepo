"use strict";
A.r(t);
var a = A("392711"),
  l = A.n(a),
  s = A("723454"),
  n = A("428595"),
  r = A("454585");
let i = l().omit(n.default.RULES, ["codeBlock", "heading"]),
  o = {
    ...s.default,
    parse: function(e, t, A) {
      var a;
      let l = s.default.parse(e, t, A),
        n = Math.min(6, (null !== (a = A.initialHeaderLevel) && void 0 !== a ? a : 3) + l.level);
      return {
        ...l,
        level: n
      }
    }
  },
  d = r.default.combineAndInjectMentionRule(i, [r.default.createReactRules(r.default.defaultReactRuleOptions), {
    header: o
  }]),
  u = r.default.reactParserFor(d);
t.default = u