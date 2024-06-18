"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(470079),
  r = n(399606),
  s = n(745510),
  o = n(351780);

function a() {
  let {
    createMultipleConfettiAt: e
  } = i.useContext(s.h), t = (0, r.e7)([o.Z], () => o.Z.getState()), n = i.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - 7,
      maxValue: e.confettiSize + 7
    }
  }), []);
  return i.useMemo(() => ({
    fire: (i, r, s) => {
      var o, a;
      let l = (null == s ? void 0 : s.settings) != null ? {
        ...t,
        ...s.settings
      } : t;
      e(i, r, n(l), (null !== (o = null == s ? void 0 : s.count) && void 0 !== o ? o : l.confettiCount) * (null !== (a = null == s ? void 0 : s.countMultiplier) && void 0 !== a ? a : 1), {
        sprite: null == s ? void 0 : s.sprite
      })
    }
  }), [e, n, t])
}