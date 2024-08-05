n.d(t, {
  d: function() {
return a;
  }
});
var r = n(470079),
  i = n(882932);

function a(e) {
  let [t, n] = (0, i.zk)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), a = (0, r.useCallback)(() => {
n(!0);
  }, [n]), s = (0, r.useCallback)(() => {
n(!1);
  }, [n]), o = (0, r.useCallback)(() => {
n(!t);
  }, [
n,
t
  ]);
  return {
isOpen: t,
setOpen: n,
open: a,
close: s,
toggle: o
  };
}