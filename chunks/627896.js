"use strict";
i.r(t), i.d(t, {
  useNewBadgeOverflowAware: function() {
    return a
  }
}), i("47120");
var n = i("470079");

function a(e, t, i) {
  let a = n.useRef(null),
    [s, l] = n.useState(!1),
    o = n.useCallback(() => {
      if (e && null !== a.current) {
        var i;
        l((null === (i = a.current) || void 0 === i ? void 0 : i.offsetHeight) > 2.5 * t)
      }
    }, [l, e, t]);
  return n.useLayoutEffect(() => {
    o()
  }, [o, e, i]), {
    postTitleRef: a,
    isNewBadgeOverflow: s
  }
}