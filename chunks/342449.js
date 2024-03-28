"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
}), a("47120");
var s = a("735250"),
  l = a("470079"),
  r = a("683860"),
  n = a("481060"),
  u = a("235449"),
  d = a("487894"),
  i = a("300234"),
  o = a("689938"),
  c = a("751624");
let f = new Set;

function h(e) {
  let {
    channel: t,
    startThread: a,
    goToThread: h
  } = e, {
    joinedThreadIds: T,
    unjoinedThreadIds: g
  } = (0, u.useActiveThreads)(t), {
    threadIds: C,
    canLoadMore: E,
    loading: S,
    loadMore: v
  } = (0, u.useArchivedThreads)(t, r.ThreadSortOrder.LATEST_ACTIVITY, f), x = l.useRef(null);
  (0, u.useTrackThreadBrowserTab)();
  let N = l.useCallback(e => {
      let t = 0 === e.section ? T : 1 === e.section ? g : C;
      return (0, s.jsx)(i.default, {
        threadId: t[e.row],
        goToThread: h
      }, "".concat(e.section, "-").concat(e.row))
    }, [C, T, g, h]),
    _ = l.useCallback(e => 0 === e.section ? (0, s.jsx)(m, {
      text: o.default.Messages.THREAD_BROWSER_JOINED_HEADER.format({
        count: T.length
      })
    }, e.section) : 1 === e.section ? (0, s.jsx)(m, {
      text: o.default.Messages.THREAD_BROWSER_OTHER_HEADER.format({
        count: g.length
      })
    }, e.section) : (0, s.jsx)(m, {
      text: o.default.Messages.THREAD_BROWSER_ARCHIVED_HEADER
    }, e.section), [T.length, g.length]),
    R = l.useCallback(e => 1 === e && T.length > 0 ? 64 : 2 === e && (T.length > 0 || g.length > 0) ? 64 : 32, [T.length, g.length]),
    M = l.useCallback(() => {
      var e;
      let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null == t) return;
      let a = t.scrollTop + t.offsetHeight;
      t.scrollHeight - a < 200 && v()
    }, [v]);
  if (0 === T.length && 0 === g.length && 0 === C.length) return S ? (0, s.jsx)("div", {
    className: c.list,
    children: (0, s.jsx)(n.Spinner, {
      className: c.spinner
    })
  }) : (0, s.jsx)("div", {
    className: c.list,
    children: (0, s.jsx)(d.default, {
      channel: t,
      header: o.default.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
      startThread: a
    })
  });
  return (0, s.jsx)(n.List, {
    ref: x,
    className: c.list,
    fade: !0,
    sections: [T.length, g.length, C.length],
    sectionHeight: R,
    rowHeight: 80,
    renderRow: N,
    renderSection: _,
    chunkSize: 20,
    onScroll: E ? M : void 0
  })
}

function m(e) {
  let {
    text: t
  } = e;
  return (0, s.jsx)(n.Text, {
    color: "header-secondary",
    variant: "text-xs/bold",
    className: c.sectionHeader,
    children: t
  })
}