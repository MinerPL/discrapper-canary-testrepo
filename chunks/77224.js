n.d(t, {
  Z: function() {
return a;
  }
}), n(47120), n(653041);
var r = n(341702),
  i = n(887490);

function a(e, t) {
  if (i.bN.areStylesDisabled(e))
return [];
  let [n, a] = t, s = [];
  if (!i.aj.isType(n, 'line') || null == n.codeBlockState)
return s;
  let {
hljsTypes: o,
isStyledCodeBlockLine: l
  } = n.codeBlockState;
  if (null == o || 0 === o.length || !l)
return [];
  for (let t of o) {
let o = n.children.map(e => i.LC.isText(e) ? e.text : null);
s.push({
  hljsTypes: t.types,
  anchor: (0, r.t)(e, a, o, t.start),
  focus: (0, r.t)(e, a, o, t.end)
});
  }
  return s;
}