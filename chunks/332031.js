i.d(n, {
    Z: function () {
        return r;
    }
});
var l = i(735250);
i(470079);
var t = i(442837),
    s = i(481060),
    a = i(655922),
    o = i(158776),
    u = i(981631),
    d = i(689938);
function r(e) {
    let n = (0, t.e7)([o.Z], () => (0, a.Z)(o.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)), [e]);
    return null == n
        ? null
        : (0, l.jsx)(s.MenuItem, {
              id: 'watch-stream',
              label: d.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, '_blank')
          });
}
