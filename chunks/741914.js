var i = n(392711),
  a = n.n(i),
  s = n(723454),
  r = n(428595),
  l = n(454585);
let o = a().omit(r.Z.RULES, [
'codeBlock',
'heading'
  ]),
  c = {
...s.Z,
parse: function(e, t, n) {
  var i;
  let a = s.Z.parse(e, t, n),
    r = Math.min(6, (null !== (i = n.initialHeaderLevel) && void 0 !== i ? i : 3) + a.level);
  return {
    ...a,
    level: r
  };
}
  },
  u = l.Z.combineAndInjectMentionRule(o, [
l.Z.createReactRules(l.Z.defaultReactRuleOptions),
{
  header: c
}
  ]),
  d = l.Z.reactParserFor(u);
t.Z = d;