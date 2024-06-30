var i = n(735250);
n(470079);
var l = n(120356), r = n.n(l), a = n(546591), s = n(977059), o = n(689938), c = n(857665);
t.Z = function (e) {
    let {
            className: t,
            text: n
        } = e, {enabled: l} = s.c.useExperiment({ location: 'RTCConnectionStatusText' });
    return (0, i.jsx)(a.Z, {
        className: r()(t, l ? c.hoverableStatus : c.status),
        hoverText: l ? o.Z.Messages.E2EE_CALL_DETAILS : null,
        children: n
    });
};
