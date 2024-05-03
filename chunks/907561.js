"use strict";
n.r(t), n.d(t, {
  CLAN_BANNER_HEIGHT: function() {
    return s
  },
  CLAN_BANNER_WIDTH: function() {
    return a
  },
  useClanBannerStyleInjection: function() {
    return o
  }
});
var i = n("470079"),
  r = n("153832");
let a = 262,
  s = 100;

function o(e, t) {
  let n = i.useMemo(() => "clan-banner-container-".concat((0, r.v4)()), []);
  return {
    styleContent: i.useMemo(() => {
      let i = e.map((e, t) => "--primary-".concat(t, ": ").concat(e, ";")).join("\n"),
        r = t.map((e, t) => "--secondary-".concat(t, ": ").concat(e, ";")).join("\n");
      return "#".concat(n, " {\n        ").concat(i, "\n        ").concat(r, "\n      }")
    }, [n, e, t]),
    containerId: n
  }
}