"use strict";
n.d(t, {
  Z: function() {
    return s
  }
}), n(47120), n(653041);
var i = n(341702),
  r = n(887490);

function s(e, t) {
  if (r.bN.areStylesDisabled(e)) return [];
  let [n, s] = t, o = [];
  if (!r.aj.isType(n, "line") || null == n.codeBlockState) return o;
  let {
    hljsTypes: a,
    isStyledCodeBlockLine: l
  } = n.codeBlockState;
  if (null == a || 0 === a.length || !l) return [];
  for (let t of a) {
    let a = n.children.map(e => r.LC.isText(e) ? e.text : null);
    o.push({
      hljsTypes: t.types,
      anchor: (0, i.t)(e, s, a, t.start),
      focus: (0, i.t)(e, s, a, t.end)
    })
  }
  return o
}