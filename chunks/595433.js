n.d(t, {
  H: function() {
return r;
  }
}), n(47120);
var a = n(470079),
  s = n(481060);

function r() {
  let [e, t] = a.useState(!0);
  return {
transitions: (0, s.useTransition)(e, {
  keys: e => e ? 'shown' : 'hidden',
  config: l,
  from: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  leave: {
    opacity: 0
  },
  unique: !0
}),
setVisible: t
  };
}
let l = {
  mass: 1,
  tension: 250,
  friction: 18,
  clamp: !0
};