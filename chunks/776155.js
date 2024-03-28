"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("47120");
var a = s("470079"),
  l = s("295141");

function n(e) {
  let [t, s] = a.useState(!0), [n, i] = a.useState(), [r, o] = a.useState(), d = a.useCallback(async e => {
    s(!0), i(void 0);
    try {
      let t = await l.fetchHighlightedCreatorGuildDetails(e);
      o(t)
    } catch (e) {
      i(e)
    } finally {
      s(!1)
    }
  }, []);
  return a.useEffect(() => {
    d(e)
  }, [e, d]), {
    isLoading: t,
    error: n,
    highlightedCreatorDetails: r
  }
}