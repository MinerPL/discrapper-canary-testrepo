n.d(t, {
  h: function() {
return i;
  }
});
var r = n(820002);

function i(e, t, n) {
  let {
labelProps: i,
inputProps: a,
isSelected: s,
isPressed: o,
isDisabled: l,
isReadOnly: u
  } = (0, r.O)(e, t, n);
  return {
labelProps: i,
inputProps: {
  ...a,
  role: 'switch',
  checked: s
},
isSelected: s,
isPressed: o,
isDisabled: l,
isReadOnly: u
  };
}