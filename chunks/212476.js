n.d(t, {
  c: function() {
return s;
  }
});
var i = n(470079),
  a = n(444317);

function s() {
  let e = i.useRef(new a.Z()),
t = i.useCallback(t => {
  e.current.handleScroll(t);
}, []);
  return {
scrollPosition: e.current.scrollPosition,
onScroll: t
  };
}