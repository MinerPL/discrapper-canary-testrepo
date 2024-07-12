n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(470079),
  l = n(914010);

function r(e) {
  i.useLayoutEffect(() => {
let t = null;

function n() {
  let n = l.Z.getGuildId();
  if (n !== t)
    t = null != n ? n : null, e(null != n ? n : null, !1);
}
return l.Z.addChangeListener(n), n(), () => {
  l.Z.removeChangeListener(n);
};
  }, [e]);
}