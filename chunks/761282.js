"use strict";
n.r(t), n.d(t, {
  createBody: function() {
    return u
  },
  createHeader: function() {
    return o
  },
  shouldShowActivity: function() {
    return d
  }
});
var l = n("735250");
n("470079");
var a = n("261600"),
  s = n("157925"),
  i = n("83701");
let r = {
  [s.STAGE_APPLICATION_ID]: new a.StageChannelNowPlayingDelegate
};

function o(e) {
  var t;
  let n = e.application_id;
  if (null == n) return;
  let l = r[n];
  if (null != l && (null === (t = l.shouldShow) || void 0 === t ? void 0 : t.call(l, e)) !== !1) return l.createHeader(e)
}

function u(e) {
  var t;
  let n = e.application_id;
  if (null == n) return;
  let a = r[n];
  if ((null == a ? void 0 : a.body) != null && (null === (t = a.shouldShow) || void 0 === t ? void 0 : t.call(a, e)) !== !1) {
    let t = a.body;
    return (0, l.jsx)("section", {
      className: i.section,
      children: (0, l.jsx)(t, {
        activity: e
      })
    }, "delegate-".concat(n))
  }
}

function d(e) {
  var t;
  let n = e.application_id;
  if (null == n) return !0;
  let l = r[n];
  return null == l || (null === (t = l.shouldShow) || void 0 === t ? void 0 : t.call(l, e)) !== !1
}