n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(570140), c = n(475179), d = n(925549), _ = n(37234), E = n(835473), f = n(358221), h = n(928518), p = n(703656), m = n(607187), I = n(937995), T = n(366050), g = n(944486), S = n(594174), A = n(566620), N = n(317381), v = n(963614), O = n(917107), R = n(208156), C = n(748492), y = n(350064), D = n(701488), L = n(918559), b = n(981631), M = n(354459), P = n(436371), U = n(910310), w = n(972667);
function x(e) {
    var t, n;
    let {
            channel: a,
            isLoading: y
        } = e, [x, G] = i.useState(!1), k = (0, s.e7)([N.ZP], () => N.ZP.getSelfEmbeddedActivityForChannel(a.id)), B = (0, s.e7)([N.ZP], () => N.ZP.getActivityPanelMode()), F = (0, E.q)(null == k ? void 0 : k.applicationId), V = null == k ? void 0 : k.launchId, H = (0, s.e7)([g.Z], () => g.Z.getChannelId() === a.id), {
            dockedRect: Z,
            isHidden: Y
        } = (0, s.cj)([T.Z], () => {
            let e = T.Z.pipWindow;
            return {
                dockedRect: null != e ? T.Z.getDockedRect(e.id) : null,
                isHidden: T.Z.isEmbeddedActivityHidden()
            };
        }), j = (0, s.e7)([h.Z], () => h.Z.getWindow(b.KJ3.CHANNEL_CALL_POPOUT)), {
            activityParticipant: W,
            selectedParticipant: K,
            participantsOpen: z
        } = (0, s.cj)([f.Z], () => ({
            activityParticipant: null != k ? f.Z.getParticipant(a.id, k.applicationId) : null,
            selectedParticipant: f.Z.getSelectedParticipant(a.id),
            participantsOpen: f.Z.getParticipantsOpen(a.id)
        })), q = H || null != j, Q = (0, O.Z)(a.id), X = Q && (null == K ? void 0 : K.type) !== M.fO.ACTIVITY, $ = !Q && B === L.Ez.PIP, J = (!q || q && (X || $) && null == Z) && !Y, ee = J && null != T.Z.pipVideoWindow && null != T.Z.pipActivityWindow;
    function et() {
        var e;
        null != k && c.Z.selectParticipant(a.id, k.applicationId);
        let t = null !== (e = a.getGuildId()) && void 0 !== e ? e : b.ME;
        d.Z.channelListScrollTo(t, a.id), (0, p.XU)(t, a.id), null == j && (0, _.Ou)();
    }
    function en() {
        G(!x);
    }
    i.useEffect(() => {
        if ((null == k ? void 0 : k.applicationId) != null) {
            let e = J ? D.cE.PIP : D.cE.FOCUSED;
            u.Z.dispatch({
                type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                layoutMode: e,
                applicationId: k.applicationId
            });
        }
    }, [
        null == k ? void 0 : k.applicationId,
        J
    ]);
    if (null == k || null == V || null == W && (0, O.Z)(a.id) || null == F)
        return null;
    let er = Array.from(k.userIds).map(e => S.default.getUser(e)).filter(e => null != e), ei = {
            instance_id: null !== (n = null !== (t = k.compositeInstanceId) && void 0 !== t ? t : k.launchId) && void 0 !== n ? n : '',
            channel_id: a.id
        };
    return null != a.guild_id && '' !== a.guild_id && (ei.guild_id = a.guild_id), (0, r.jsx)(I.ZP, {
        timeout: 2000,
        children: e => {
            var t, n, i, s, u, c, d, _;
            let {
                idle: E,
                onActive: f,
                onForceIdle: h
            } = e;
            return (0, r.jsxs)(m.Z, {
                className: o()(P.root, {
                    [P.pipMode]: J,
                    [w.elevationHigh]: J,
                    [U.idle]: E && !(null === (t = k.config) || void 0 === t ? void 0 : t.useInteractivePIP),
                    [P.pipModeShort]: J && !x,
                    [P.pipModeTall]: J && x,
                    [P.hidden]: Y,
                    [P.multiPIPMode]: ee
                }),
                noBorder: !J,
                children: [
                    (i = f, s = h, u = E, c = $, d = er, J && null != k && ((null == W ? void 0 : W.type) === M.fO.ACTIVITY || c) ? (null === (_ = k.config) || void 0 === _ ? void 0 : _.useInteractivePIP) ? (0, r.jsx)(C.of, {
                        onJumpToChannel: et,
                        applicationId: k.applicationId,
                        channel: a,
                        showControls: !u,
                        onMouseDown: i,
                        onMouseMove: i,
                        onMouseLeave: s,
                        onToggleHeight: en,
                        isExpanded: x,
                        hideExpandedButton: c
                    }) : c ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(C.q5, {
                            idle: u,
                            onMouseMove: i,
                            onMouseDown: i,
                            onMouseLeave: s,
                            onJumpToChannel: () => {
                                et(), (0, A.tg)(L.Ez.PANEL);
                            },
                            channel: a,
                            applicationId: k.applicationId,
                            users: d
                        })
                    }) : null == W ? null : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', {
                                onMouseMove: i,
                                onMouseDown: i,
                                onMouseLeave: s,
                                className: P.clickShield,
                                onDoubleClick: et
                            }),
                            (0, r.jsx)(C.YB, {
                                idle: u,
                                onMouseMove: i,
                                onMouseDown: i,
                                onMouseLeave: s,
                                onJumpToChannel: et,
                                channel: a,
                                applicationId: k.applicationId,
                                selectedParticipant: W
                            })
                        ]
                    }) : null),
                    y ? (0, r.jsx)(l.Spinner, {
                        className: o()(P.iframe, {
                            [P.pipModeShort]: J && !x,
                            [P.pipModeTall]: J && x
                        })
                    }) : (0, r.jsx)(R.J, {
                        allowPopups: (0, v.h)(F),
                        referrerPolicy: D.um.has(k.applicationId) ? 'no-referrer' : 'origin',
                        url: k.url,
                        queryParams: ei,
                        className: o()(P.iframe, {
                            [P.pipModeShort]: J && !x,
                            [P.pipModeTall]: J && x,
                            [P.pipNonInteractive]: J && !(null === (n = k.config) || void 0 === n ? void 0 : n.useInteractivePIP)
                        }),
                        shouldRefocus: !J && H
                    }),
                    !J && (0, r.jsx)(C.Ds, {
                        participantsOpen: z,
                        showToggleParticipants: !1,
                        channelId: a.id
                    })
                ]
            });
        }
    });
}
t.Z = e => {
    let {
            channel: t,
            ...n
        } = e, {isLoading: i} = (0, y.$)(t);
    return (0, r.jsx)(x, {
        channel: t,
        isLoading: i,
        ...n
    });
};
