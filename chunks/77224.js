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
  let [n, a] = t, o = [];
  if (!i.aj.isType(n, 'line') || null == n.codeBlockState)
return o;
  let {
hljsTypes: s,
isStyledCodeBlockLine: l
  } = n.codeBlockState;
  if (null == s || 0 === s.length || !l)
return [];
  for (let t of s) {
let s = n.children.map(e => i.LC.isText(e) ? e.text : null);
o.push({
  hljsTypes: t.types,
  anchor: (0, r.t)(e, a, s, t.start),
  focus: (0, r.t)(e, a, s, t.end)
});
  }
  return o;
}