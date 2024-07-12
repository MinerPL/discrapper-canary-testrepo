n.d(t, {
  X: function() {
return u;
  },
  z: function() {
return c;
  }
});
var r, i = n(735250),
  a = n(470079),
  o = n(541049),
  s = n(231338);
let l = a.createContext({
  profileType: null,
  theme: null !== (r = (0, o.Z)()) && void 0 !== r ? r : s.BR.DARK,
  primaryColor: null,
  secondaryColor: null
});

function u(e) {
  let {
profileType: t,
theme: n,
primaryColor: r,
secondaryColor: o,
children: s
  } = e, u = a.useMemo(() => ({
profileType: t,
theme: n,
primaryColor: r,
secondaryColor: o
  }), [
t,
n,
r,
o
  ]);
  return (0, i.jsx)(l.Provider, {
value: u,
children: s
  });
}
let c = () => a.useContext(l);