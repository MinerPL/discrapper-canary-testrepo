n.d(t, {
  D: function() {
return s;
  }
});
var r = n(182823),
  i = n(882932),
  a = n(251433),
  o = n(616073);

function s(e) {
  let {
value: t = 0,
minValue: n = 0,
maxValue: s = 100,
valueLabel: l,
isIndeterminate: u,
formatOptions: c = {
  style: 'percent'
}
  } = e, d = (0, r.zL)(e, {
labelable: !0
  }), {
labelProps: _,
fieldProps: E
  } = (0, a.N)({
...e,
labelElementType: 'span'
  }), f = ((t = (0, i.uZ)(t, n, s)) - n) / (s - n), h = (0, o.Ux)(c);
  if (!u && !l) {
let e = 'percent' === c.style ? f : t;
l = h.format(e);
  }
  return {
progressBarProps: (0, r.dG)(d, {
  ...E,
  'aria-valuenow': u ? void 0 : t,
  'aria-valuemin': n,
  'aria-valuemax': s,
  'aria-valuetext': u ? void 0 : l,
  role: 'progressbar'
}),
labelProps: _
  };
}