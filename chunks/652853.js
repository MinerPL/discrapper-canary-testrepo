"use strict";
n.d(t, {
  X: function() {
    return u
  },
  z: function() {
    return _
  }
});
var i, r = n(735250),
  s = n(470079),
  o = n(541049),
  a = n(231338);
let l = s.createContext({
  profileType: null,
  theme: null !== (i = (0, o.Z)()) && void 0 !== i ? i : a.BR.DARK,
  primaryColor: null,
  secondaryColor: null
});

function u(e) {
  let {
    profileType: t,
    theme: n,
    primaryColor: i,
    secondaryColor: o,
    children: a
  } = e, u = s.useMemo(() => ({
    profileType: t,
    theme: n,
    primaryColor: i,
    secondaryColor: o
  }), [t, n, i, o]);
  return (0, r.jsx)(l.Provider, {
    value: u,
    children: a
  })
}
let _ = () => s.useContext(l)