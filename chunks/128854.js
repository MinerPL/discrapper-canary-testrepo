n.d(l, {
  F: function() {
return s;
  },
  c: function() {
return a;
  }
}), n(411104);
var t = n(735250),
  i = n(470079);
let r = i.createContext(null);

function a() {
  let e = i.useContext(r);
  if (null == e)
throw Error('Could not find context for useMessageAccessoriesComponentContext.');
  return e;
}

function s(e) {
  let {
children: l,
...n
  } = e;
  return (0, t.jsx)(r.Provider, {
value: n,
children: l
  });
}