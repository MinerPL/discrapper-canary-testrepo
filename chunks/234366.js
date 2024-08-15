n.d(t, {
  C8: function() {
return i;
  },
  dK: function() {
return s;
  },
  mq: function() {
return a;
  }
});
var r = n(470079),
  i = r.createContext(),
  a = r.createContext();

function s(e) {
  var t = e.children,
n = r.useState(null),
s = n[0],
o = n[1],
l = r.useRef(!1);
  r.useEffect(function() {
return function() {
  l.current = !0;
};
  }, []);
  var u = r.useCallback(function(e) {
!l.current && o(e);
  }, []);
  return r.createElement(i.Provider, {
value: s
  }, r.createElement(a.Provider, {
value: u
  }, t));
}