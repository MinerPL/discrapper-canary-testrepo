n.d(t, {
  Z: function() {
return r;
  }
});
var s = n(470079),
  i = n(570140);

function r(e) {
  let t = (0, s.useRef)(e);
  (0, s.useEffect)(() => {
t.current = e;
  }, [e]), (0, s.useEffect)(() => {
if (__OVERLAY__) {
  function e(e) {
    e.locked && t.current();
  }
  return i.Z.subscribe('OVERLAY_SET_INPUT_LOCKED', e), () => {
    i.Z.unsubscribe('OVERLAY_SET_INPUT_LOCKED', e);
  };
}
  }, []);
}