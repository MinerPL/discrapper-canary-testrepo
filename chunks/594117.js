n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(685072),
    a = n(287734),
    l = n(15274),
    s = n(389303),
    o = n(881824),
    c = n(719100),
    d = n(870569),
    u = n(388032);
function h(e) {
    let { tooltipText: t, onClick: n } = e,
        a = (0, r.K)();
    return (0, i.jsx)(d.Z, {
        tooltipText: t,
        onClick: n,
        ...a.events,
        icon: a.Component
    });
}
function m(e) {
    let { channel: t } = e;
    return (0, i.jsx)(h, {
        tooltipText: u.intl.string(u.t.SMKyio),
        onClick: () => {
            if ((0, c.Z)(t)) {
                (0, o.Us)(t);
                return;
            }
            a.default.disconnect();
        }
    });
}
function p(e) {
    let { channel: t } = e;
    return (0, i.jsx)(h, {
        tooltipText: u.intl.string(u.t['6vrfgo']),
        onClick: () => {
            if ((0, s.Z)(t)) {
                (0, l.lC)(t);
                return;
            }
            a.default.disconnect();
        }
    });
}
function g(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, i.jsx)(m, { channel: t }) : (0, i.jsx)(p, { channel: t });
}
