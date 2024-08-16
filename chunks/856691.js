n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(692547),
    s = n(481060),
    l = n(40851),
    r = n(881824),
    o = n(688641),
    c = n(689938);
function u(e) {
    let { className: t, channel: n, highlight: u } = e,
        d = (0, l.bp)();
    return (0, i.jsx)(o.Z, {
        highlight: null != u && u,
        className: t,
        icon: (0, i.jsx)(s.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            height: 20,
            width: 20
        }),
        color: a.Z.unsafe_rawColors.GREEN_360.css,
        title: c.Z.Messages.STAGE_CHANNEL_START_TITLE,
        description: c.Z.Messages.STAGE_CHANNEL_START_SUBTITLE,
        onClick: function () {
            (0, r.T)(n, d);
        }
    });
}
