"use strict";
t.d(s, {
  Z: function() {
    return l
  }
}), t(47120);
var n = t(470079),
  i = t(295141);

function l(e) {
  let [s, t] = n.useState(!0), [l, a] = n.useState(), [r, o] = n.useState(), c = n.useCallback(async e => {
    t(!0), a(void 0);
    try {
      let s = await i.HT(e);
      o(s)
    } catch (e) {
      a(e)
    } finally {
      t(!1)
    }
  }, []);
  return n.useEffect(() => {
    c(e)
  }, [e, c]), {
    isLoading: s,
    error: l,
    highlightedCreatorDetails: r
  }
}