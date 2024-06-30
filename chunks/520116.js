n.d(t, {
    Z: function () {
        return M;
    }
}), n(653041);
var i = n(735250), a = n(470079), s = n(913527), l = n.n(s), r = n(91192), o = n(442837), c = n(481060), d = n(135938), u = n(900164), _ = n(554838), E = n(493892), m = n(37772), I = n(695346), T = n(314897), h = n(496675), N = n(594174), f = n(132338), p = n(55935), C = n(655354), g = n(809780), S = n(981631), A = n(689938), x = n(131132);
let O = {
    left: 4,
    right: -12
};
function R(e) {
    var t;
    let {
            channel: n,
            message: s,
            compact: l,
            isGroupStart: o,
            treatSpam: d,
            gotoChannel: u
        } = e, _ = (0, r.JA)(null !== (t = s.id) && void 0 !== t ? t : ''), E = a.useCallback(e => {
            if ('ArrowLeft' === e.key) {
                var t;
                null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus();
            }
        }, [n.id]);
    return (0, i.jsx)(c.FocusRing, {
        offset: O,
        children: (0, i.jsxs)('div', {
            className: x.messageContainer,
            onKeyDown: E,
            ..._,
            children: [
                (0, i.jsx)(C.Z, {
                    className: x.jumpButton,
                    onJump: e => u(e, s.id)
                }),
                (0, i.jsx)(m.Z, {
                    id: s.id,
                    message: s,
                    channel: n,
                    className: x.message,
                    compact: l,
                    animateAvatar: !1,
                    isGroupStart: o,
                    onKeyDown: E,
                    treatSpam: d
                })
            ]
        }, s.id)
    });
}
function M(e) {
    var t, n;
    let {
            channel: a,
            channelRecord: s,
            gotoChannel: r
        } = e, {enabled: m} = d.Z.useExperiment({ location: '20e3b0_1' }, { autoTrackExposure: !1 }), C = I.jU.useSetting(), O = (0, o.e7)([h.Z], () => h.Z.can(S.Plq.CREATE_INSTANT_INVITE, s)), M = (0, E.P1)(s), v = !1, L = 0 === a.messages.length || l()(a.messages[0].timestamp).isSame(l()(), 'day'), Z = null !== (n = null === (t = N.default.getUser(T.default.getId())) || void 0 === t ? void 0 : t.hasFlag(S.xW$.SPAMMER)) && void 0 !== n && n, P = [];
    if (!a.collapsed) {
        let e = null, t = null, n = a.messages.slice(0, g.hC);
        n.forEach(n => {
            if (!(0, u.Z)(n, O)) {
                if (!L && (null == e || !e.isSame(n.timestamp, 'day'))) {
                    let t = (0, p.vc)(n.timestamp, 'LL');
                    P.push((0, i.jsx)(f.Z, {
                        className: x.divider,
                        children: t
                    }, t)), e = l()(n.timestamp);
                }
                let a = null == t || (0, _.Z)(s, t, n);
                t = n, v = v || (0, E.DQ)(n), P.push((0, i.jsx)(R, {
                    channel: s,
                    message: n,
                    compact: C,
                    isGroupStart: a,
                    treatSpam: !Z && m && (0, E.DQ)(n) && M,
                    gotoChannel: r
                }, n.id));
            }
        }), a.messages.length >= g.hC && P.push((0, i.jsxs)(c.Button, {
            color: c.Button.Colors.LINK,
            look: c.Button.Looks.LINK,
            onClick: e => r(e, n[n.length - 1].id),
            children: [
                A.Z.Messages.UNREADS_VIEW_CHANNEL,
                ' \u203A'
            ]
        }, 'view-all')), 0 === P.length && (P = [(0, i.jsx)(c.Spinner, {}, 'spinner')]);
    }
    return v && M && d.Z.trackExposure({ location: '20e3b0_2' }), (0, i.jsx)('div', {
        className: x.messages,
        children: P
    });
}
