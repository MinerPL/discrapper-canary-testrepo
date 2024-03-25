"use strict";
n.r(t), n.d(t, {
  useExpandableTextContainer: function() {
    return o
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("676837");

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
          if (null != e) {
            let n = e.scrollHeight - e.clientHeight > 1;
            t(n)
          }
        },
        className: i(r.lineClamp, a),
        style: n ? void 0 : {
          lineClamp: o,
          WebkitLineClamp: o
        },
        children: l
      })
    })
  }
}