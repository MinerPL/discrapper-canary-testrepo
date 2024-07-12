var n = t(392711),
  a = t.n(n),
  r = t(723454),
  s = t(428595),
  o = t(454585);
let l = a().omit(s.Z.RULES, [
'codeBlock',
'heading'
  ]),
  i = {
...r.Z,
parse: function(e, A, t) {
  var n;
  let a = r.Z.parse(e, A, t),
    s = Math.min(6, (null !== (n = t.initialHeaderLevel) && void 0 !== n ? n : 3) + a.level);
  return {
    ...a,
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