s.d(a, {
  Z: function() {
return h;
  }
});
var n = s(735250),
  o = s(470079),
  c = s(120356),
  r = s.n(c),
  i = s(481060),
  t = s(235449),
  l = s(300234),
  d = s(408447);

function h(e) {
  let {
guildId: a,
goToThread: s
  } = e, c = (0, t.nA)(a), h = o.useCallback(e => {
let a = c[e.row];
return (0, n.jsx)(l.Z, {
  threadId: a,
  goToThread: s,
  showChannelName: !0
}, ''.concat(e.section, '-').concat(e.row));
  }, [
c,
s
  ]);
  return (0, n.jsx)(i.List, {
className: r()(d.list, d.activeThreadsList),
fade: !0,
sections: [c.length],
renderSection: () => null,
sectionHeight: 0,
rowHeight: 80,
renderRow: h,
chunkSize: 20
  });
}