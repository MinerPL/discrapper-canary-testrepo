t.d(n, {
  Z: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var s = t(481060),
  l = t(358085),
  a = t(998502),
  r = t(689938);

function o(e, n) {
  return l.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, i.jsx)(s.MenuItem, {
id: 'copy',
label: r.Z.Messages.COPY,
hint: (0, l.isMac)() ? '\u2318C' : 'Ctrl+C',
action: () => {
  a.ZP.copy(e), null == n || n.focus();
}
  }) : null;
}