n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(481060),
    o = n(797258),
    c = n(374129),
    d = n(639351),
    u = n(565473),
    _ = n(927923),
    E = n(689938),
    h = n(490599);
function m(e) {
    let { platform: t } = e;
    return t === _.YE.XBOX ? (0, i.jsx)(d.Z, { className: h.icon }) : t === _.YE.PLAYSTATION ? (0, i.jsx)(c.Z, { className: h.icon }) : null;
}
function I(e) {
    let { voiceState: t, awaitingRemoteSessionInfo: n } = e,
        a = null != n ? (0, u.y)(n.type) : null,
        c = (0, r.e7)([o.Z], () => {
            var e, n;
            return null === (e = o.Z.getSessionById(null !== (n = null == t ? void 0 : t.sessionId) && void 0 !== n ? n : '')) || void 0 === e ? void 0 : e.clientInfo.os;
        }),
        d = null != a ? a : c;
    if (null == d || !_.al.has(d)) return null;
    let I = null != n,
        g = I ? (d === _.YE.XBOX ? E.Z.Messages.XBOX_TRANSFERRING_ELLIPSIS : E.Z.Messages.PLAYSTATION_TRANSFERRING_ELLIPSIS) : d === _.YE.XBOX ? E.Z.Messages.XBOX_REMOTE_CONNECTED.format() : E.Z.Messages.PLAYSTATION_REMOTE_CONNECTED.format();
    return (0, i.jsxs)('div', {
        className: s()(h.root, I ? h.connecting : h.connected),
        children: [
            (0, i.jsx)(m, { platform: d }),
            (0, i.jsx)(l.Text, {
                color: I ? 'header-primary' : 'always-white',
                variant: 'text-xs/medium',
                children: g
            })
        ]
    });
}
