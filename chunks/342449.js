t.d(n, {
  Z: function() {
return m;
  }
}), t(47120);
var a = t(735250),
  s = t(470079),
  l = t(683860),
  r = t(481060),
  i = t(235449),
  o = t(487894),
  c = t(300234),
  d = t(689938),
  u = t(92475);
let h = new Set();

function m(e) {
  let {
channel: n,
startThread: t,
goToThread: m
  } = e, {
joinedThreadIds: E,
unjoinedThreadIds: f
  } = (0, i.FO)(n), {
threadIds: Z,
canLoadMore: x,
loading: T,
loadMore: v
  } = (0, i.qQ)(n, l.z.LATEST_ACTIVITY, h), _ = s.useRef(null);
  (0, i.r7)();
  let R = s.useCallback(e => {
  let n = 0 === e.section ? E : 1 === e.section ? f : Z;
  return (0, a.jsx)(c.Z, {
    threadId: n[e.row],
    goToThread: m
  }, ''.concat(e.section, '-').concat(e.row));
}, [
  Z,
  E,
  f,
  m
]),
j = s.useCallback(e => 0 === e.section ? (0, a.jsx)(g, {
  text: d.Z.Messages.THREAD_BROWSER_JOINED_HEADER.format({
    count: E.length
  })
}, e.section) : 1 === e.section ? (0, a.jsx)(g, {
  text: d.Z.Messages.THREAD_BROWSER_OTHER_HEADER.format({
    count: f.length
  })
}, e.section) : (0, a.jsx)(g, {
  text: d.Z.Messages.THREAD_BROWSER_ARCHIVED_HEADER
}, e.section), [
  E.length,
  f.length
]),
N = s.useCallback(e => 1 === e && E.length > 0 ? 64 : 2 === e && (E.length > 0 || f.length > 0) ? 64 : 32, [
  E.length,
  f.length
]),
S = s.useCallback(() => {
  var e;
  let n = null === (e = _.current) || void 0 === e ? void 0 : e.getScrollerState();
  if (null == n)
    return;
  let t = n.scrollTop + n.offsetHeight;
  n.scrollHeight - t < 200 && v();
}, [v]);
  if (0 === E.length && 0 === f.length && 0 === Z.length)
return T ? (0, a.jsx)('div', {
  className: u.list,
  children: (0, a.jsx)(r.Spinner, {
    className: u.spinner
  })
}) : (0, a.jsx)('div', {
  className: u.list,
  children: (0, a.jsx)(o.Z, {
    channel: n,
    header: d.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
    startThread: t
  })
});
  return (0, a.jsx)(r.List, {
ref: _,
className: u.list,
fade: !0,
sections: [
  E.length,
  f.length,
  Z.length
],
sectionHeight: N,
rowHeight: 80,
renderRow: R,
renderSection: j,
chunkSize: 20,
onScroll: x ? S : void 0
  });
}

function g(e) {
  let {
text: n
  } = e;
  return (0, a.jsx)(r.Text, {
color: 'header-secondary',
variant: 'text-xs/bold',
className: u.sectionHeader,
children: n
  });
}