"use strict";
s.r(a), s.d(a, {
  default: function() {
    return u
  }
});
var t = s("735250"),
  i = s("470079"),
  n = s("803997"),
  l = s.n(n),
  d = s("481060"),
  r = s("235449"),
  c = s("300234"),
  o = s("751624");

function u(e) {
  let {
    guildId: a,
    goToThread: s
  } = e, n = (0, r.useActiveGuildThreads)(a), u = i.useCallback(e => {
    let a = n[e.row];
    return (0, t.jsx)(c.default, {
      threadId: a,
      goToThread: s,
      showChannelName: !0
    }, "".concat(e.section, "-").concat(e.row))
  }, [n, s]);
  return (0, t.jsx)(d.List, {
    className: l()(o.list, o.activeThreadsList),
    fade: !0,
    sections: [n.length],
    renderSection: () => null,
    sectionHeight: 0,
    rowHeight: 80,
    renderRow: u,
    chunkSize: 20
  })
}