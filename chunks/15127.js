n.d(t, {
  Gc: function() {
return s;
  },
  ol: function() {
return o;
  },
  q3: function() {
return a;
  }
});
var r = n(735250),
  i = n(470079);
let a = i.createContext({
  titleId: void 0,
  errorId: void 0,
  error: void 0
});

function s() {
  return i.useContext(a);
}

function o(e) {
  let {
children: t,
...n
  } = e;
  return (0, r.jsx)(a.Provider, {
value: n,
children: t
  });
}