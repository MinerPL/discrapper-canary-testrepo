"use strict";
n.r(t), n.d(t, {
  useExpandableTextContainer: function() {
    return o
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("204727");

function o() {
  let [e, t] = a.useState(!1);
  return {
    isTruncated: e,
    ExpandableTextContainer: a.memo(function(e) {
      let {
        showAll: n = !1,
        className: a,
        children: l,
        lineClamp: o = 2
      } = e;
      return (0, s.jsx)("div", {
        ref: e => {
          null != e && t(e.scrollHeight - e.clientHeight > 1)
        },
        className: i()(r.lineClamp, a),
        style: n ? void 0 : {
          lineClamp: o,
          WebkitLineClamp: o
        },
        children: l
      })
    })
  }
}