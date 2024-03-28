"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var s = a("735250"),
  l = a("470079"),
  r = a("803997"),
  n = a.n(r),
  u = a("481060"),
  d = a("487894"),
  i = a("300234"),
  o = a("689938"),
  c = a("751624");

function f(e) {
  let {
    channel: t,
    threadIds: a,
    startThread: r,
    goToThread: f
  } = e, h = l.useCallback(e => (0, s.jsx)(i.default, {
    threadId: a[e.row],
    goToThread: f
  }, "".concat(e.section, "-").concat(e.row)), [a, f]);
  return 0 === a.length ? (0, s.jsx)(d.default, {
    channel: t,
    header: o.default.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
    startThread: r
  }) : (0, s.jsx)(u.List, {
    className: n()(c.list, c.activeThreadsList),
    fade: !0,
    sections: [a.length],
    sectionHeight: 0,
    rowHeight: 80,
    renderRow: h,
    renderSection: () => null,
    chunkSize: 20
  })
}