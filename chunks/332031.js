t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(735250);
t(470079);
var i = t(442837), a = t(481060), r = t(655922), u = t(158776), s = t(981631), d = t(689938);
function o(e) {
    let n = (0, i.e7)([u.Z], () => (0, r.Z)(u.Z.findActivity(e, e => e.type === s.IIU.STREAMING)), [e]);
    return null == n ? null : (0, l.jsx)(a.MenuItem, {
        id: 'watch-stream',
        label: d.Z.Messages.WATCH_STREAM,
        action: () => window.open(n, '_blank')
    });
}
