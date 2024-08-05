n.d(t, {
  Z: function() {
return a;
  }
}), n(47120);
var i = n(470079);

function a(e) {
  let [t, n] = i.useState(0), a = i.useCallback(() => {
let t = window.innerWidth;
for (let i of e) {
  let [e, a] = i;
  if (t >= e) {
    n(a);
    return;
  }
}
  }, [e]);
  return i.useEffect(() => {
a();
  }, [a]), i.useEffect(() => (window.addEventListener('resize', a), () => {
window.removeEventListener('resize', a);
  })), t;
}