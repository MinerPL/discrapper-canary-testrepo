n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(475179),
    l = n(871499),
    r = n(689938);
function o(e) {
    let { channelId: t, ...n } = e;
    return (0, i.jsx)(l.Z, {
        onClick: function () {
            s.Z.selectParticipant(t, null);
        },
        label: r.Z.Messages.VIDEO_CALL_RETURN_TO_GRID,
        iconComponent: a.GridSquareIcon,
        tooltipPosition: 'bottom',
        ...n
    });
}
