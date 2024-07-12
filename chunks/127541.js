n.d(t, {
  Z: function() {
return s;
  }
}), n(47120);
var i = n(470079);

function s(e) {
  let [t, n] = i.useState(0), s = i.useCallback(() => {
let t = window.innerWidth;
for (let i of e) {
  let [e, s] = i;
  if (t >= e) {
    n(s);
    return;
  }
}
  }, [e]);
  return i.useEffect(() => {
s();
  }, [s]), i.useEffect(() => (window.addEventListener('resize', s), () => {
window.removeEventListener('resize', s);
  })), t;
}