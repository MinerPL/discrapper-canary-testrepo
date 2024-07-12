s.d(n, {
  b: function() {
return r;
  }
});
var l = s(735250);
s(470079);
var t = s(481060),
  i = s(991862);

function r(e) {
  let {
currencies: n,
className: s,
children: t
  } = e;
  return n.length < 2 ? null : (0, l.jsx)('div', {
className: s,
children: t
  });
}
n.Z = function(e) {
  let {
currencies: n,
onChange: s,
selectedCurrency: r,
className: a,
disabled: c = !1
  } = e;
  if (n.length < 2)
return null;
  let o = n.map((e, n) => ({
key: n,
value: e,
label: ''.concat(e.toUpperCase(), ' - ').concat((0, i.T)(e))
  }));
  return (0, l.jsx)(t.SingleSelect, {
value: r,
options: o,
onChange: e => {
  null != e && s(e);
},
className: a,
isDisabled: c
  });
};