s.d(n, {
    Z: function () {
        return o;
    }
});
var t = s(735250);
s(470079);
var l = s(481060), i = s(358085), a = s(998502), r = s(689938);
function o(e, n) {
    return i.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, t.jsx)(l.MenuItem, {
        id: 'copy',
        label: r.Z.Messages.COPY,
        hint: (0, i.isMac)() ? '\u2318C' : 'Ctrl+C',
        action: () => {
            a.ZP.copy(e), null == n || n.focus();
        }
    }) : null;
}
