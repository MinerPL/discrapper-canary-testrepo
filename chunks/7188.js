n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(158631), l = n(709369), u = n(544384), c = n(76021), d = n(592125), _ = n(594174), E = n(834348), f = n(806519), h = n(74538), p = n(618158), m = n(871499), I = n(981631), T = n(474936), g = n(689938), S = n(416555);
function A(e) {
    let {className: t} = e;
    return (0, r.jsx)(o.SettingsIcon, {
        size: 'md',
        color: 'currentColor',
        className: t
    });
}
function N(e) {
    let {className: t} = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(f.ZP, {
                className: t,
                mask: f.ZP.Masks.HEADER_BAR_BADGE,
                children: (0, r.jsx)(A, {})
            }),
            (0, r.jsx)(E.Z, { className: S.badgeUpgrade })
        ]
    });
}
function v(e) {
    let {
            hideBadges: t = !1,
            stream: n,
            ...E
        } = e, f = (0, a.e7)([_.default], () => h.ZP.isPremium(_.default.getCurrentUser(), T.p9.TIER_1)), S = (0, a.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channelId)), v = i.useMemo(() => null != n ? [n] : [], [n]), O = (0, s.zW)(null == S ? void 0 : S.id), R = i.useCallback(() => {
            null != S && (0, c.Z)(S.getGuildId(), S.id, I.jXE.STREAM_SETTINGS);
        }, [S]);
    if (null == n || null == S)
        return null;
    let C = A;
    return !t && !f && (C = N), (0, r.jsx)(o.Popout, {
        position: 'top',
        renderPopout: e => {
            let {closePopout: t} = e;
            return (0, r.jsx)(p.Z, {
                children: O ? (0, r.jsx)(l.Z, { onClose: t }) : (0, r.jsx)(u.Z, {
                    channel: S,
                    currentUser: _.default.getCurrentUser(),
                    activeStreams: v,
                    onClose: t,
                    showReportOption: !0,
                    handleGoLive: R
                })
            });
        },
        animation: o.Popout.Animation.FADE,
        children: e => (0, r.jsx)(m.Z, {
            ...e,
            label: g.Z.Messages.STREAMER_SETTINGS_TITLE,
            iconComponent: C,
            ...E
        })
    });
}
