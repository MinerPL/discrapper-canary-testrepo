n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), l = n(475179), s = n(871499), r = n(354459), o = n(689938);
function c(e) {
    let {
        channelId: t,
        isHorizontal: n,
        ...c
    } = e;
    return (0, i.jsx)(s.Z, {
        onClick: function () {
            l.Z.selectParticipant(t, r.dF.AUTO);
        },
        label: o.Z.Messages.VIDEO_CALL_AUTO_SELECT,
        iconComponent: n ? a.GridHorizontalIcon : a.GridVerticalIcon,
        tooltipPosition: 'bottom',
        ...c
    });
}
