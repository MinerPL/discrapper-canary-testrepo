n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250);
n(470079);
var a = n(685072),
    s = n(287734),
    r = n(15274),
    l = n(389303),
    o = n(881824),
    c = n(719100),
    d = n(870569),
    u = n(689938),
    _ = n(209263);
function E(e) {
    let { tooltipText: t, onClick: n } = e,
        s = (0, a.K)();
    return (0, i.jsx)(d.Z, {
        innerClassName: _.button,
        tooltipText: t,
        onClick: n,
        ...s.events,
        icon: s.Component
    });
}
function h(e) {
    let { channel: t } = e;
    return (0, i.jsx)(E, {
        tooltipText: u.Z.Messages.AUDIENCE_DISCONNECT,
        onClick: () => {
            if ((0, c.Z)(t)) {
                (0, o.Us)(t);
                return;
            }
            s.default.disconnect();
        }
    });
}
function m(e) {
    let { channel: t } = e;
    return (0, i.jsx)(E, {
        tooltipText: u.Z.Messages.DISCONNECT_SELF,
        onClick: () => {
            if ((0, l.Z)(t)) {
                (0, r.lC)(t);
                return;
            }
            s.default.disconnect();
        }
    });
}
function I(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, i.jsx)(h, { channel: t }) : (0, i.jsx)(m, { channel: t });
}
