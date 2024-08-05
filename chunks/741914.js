var a = t(392711),
  n = t.n(a),
  r = t(723454),
  s = t(428595),
  o = t(454585);
let l = n().omit(s.Z.RULES, [
'codeBlock',
'heading'
  ]),
  i = {
...r.Z,
parse: function(e, A, t) {
  var a;
  let n = r.Z.parse(e, A, t),
    s = Math.min(6, (null !== (a = t.initialHeaderLevel) && void 0 !== a ? a : 3) + n.level);
  return {
    ...n,
    level: s
  };
}
  },
  d = o.Z.combineAndInjectMentionRule(l, [
o.Z.createReactRules(o.Z.defaultReactRuleOptions),
{
  header: i
}
  ]),
  c = o.Z.reactParserFor(d);
A.Z = c;