n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(570140),
    c = n(475179),
    d = n(925549),
    _ = n(37234),
    E = n(835473),
    f = n(358221),
    h = n(928518),
    p = n(703656),
    I = n(607187),
    m = n(937995),
    T = n(366050),
    S = n(944486),
    g = n(594174),
    A = n(566620),
    N = n(317381),
    O = n(175894),
    R = n(246106),
    v = n(963614),
    C = n(917107),
    y = n(208156),
    L = n(748492),
    D = n(701488),
    b = n(918559),
    M = n(981631),
    P = n(354459),
    U = n(514978),
    w = n(582920),
    x = n(256507);
function G(e) {
    var t, n, a;
    let { channel: O, isLoading: R } = e,
        [G, k] = i.useState(!1),
        B = (0, o.e7)([N.ZP], () => N.ZP.getSelfEmbeddedActivityForChannel(O.id)),
        F = (0, o.e7)([N.ZP], () => N.ZP.getActivityPanelMode()),
        V = (0, E.q)(null == B ? void 0 : B.applicationId),
        H = null == B ? void 0 : B.launchId,
        Z = (0, o.e7)([S.Z], () => S.Z.getChannelId() === O.id),
        { dockedRect: Y, isHidden: j } = (0, o.cj)([T.Z], () => {
            let e = T.Z.pipWindow;
            return {
                dockedRect: null != e ? T.Z.getDockedRect(e.id) : null,
                isHidden: T.Z.isEmbeddedActivityHidden()
            };
        }),
        W = (0, o.e7)([h.Z], () => h.Z.getWindow(M.KJ3.CHANNEL_CALL_POPOUT)),
        {
            activityParticipant: K,
            selectedParticipant: z,
            participantsOpen: q
        } = (0, o.cj)([f.Z], () => ({
            activityParticipant: null != B ? f.Z.getParticipant(O.id, B.applicationId) : null,
            selectedParticipant: f.Z.getSelectedParticipant(O.id),
            participantsOpen: f.Z.getParticipantsOpen(O.id)
        })),
        Q = Z || null != W,
        X = (0, C.Z)(O.id),
        $ = X && (null == z ? void 0 : z.type) !== P.fO.ACTIVITY,
        J = !X && F === b.Ez.PIP,
        ee = (!Q || (Q && ($ || J) && null == Y)) && !j,
        et = ee && null != T.Z.pipVideoWindow && null != T.Z.pipActivityWindow;
    function en() {
        var e;
        null != B && c.Z.selectParticipant(O.id, B.applicationId);
        let t = null !== (e = O.getGuildId()) && void 0 !== e ? e : M.ME;
        d.Z.channelListScrollTo(t, O.id), (0, p.XU)(t, O.id), null == W && (0, _.Ou)();
    }
    function er() {
        k(!G);
    }
    i.useEffect(() => {
        if ((null == B ? void 0 : B.applicationId) != null) {
            let e = ee ? D.cE.PIP : D.cE.FOCUSED;
            u.Z.dispatch({
                type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                layoutMode: e,
                applicationId: B.applicationId
            });
        }
    }, [null == B ? void 0 : B.applicationId, ee]);
    if (null == B || null == H || (null == K && (0, C.Z)(O.id)) || null == V) return null;
    let ei = Array.from(B.userIds)
            .map((e) => g.default.getUser(e))
            .filter((e) => null != e),
        ea = {
            instance_id: null !== (a = null !== (n = B.compositeInstanceId) && void 0 !== n ? n : B.launchId) && void 0 !== a ? a : '',
            channel_id: O.id,
            location_id: null === (t = B.location) || void 0 === t ? void 0 : t.id,
            launch_id: B.launchId
        };
    return (
        null != O.guild_id && '' !== O.guild_id && (ea.guild_id = O.guild_id),
        (0, r.jsx)(m.ZP, {
            timeout: 2000,
            children: (e) => {
                var t, n, i, a, o, u, c, d;
                let { idle: _, onActive: E, onForceIdle: f } = e;
                return (0, r.jsxs)(I.Z, {
                    className: s()(U.root, {
                        [U.pipMode]: ee,
                        [x.elevationHigh]: ee,
                        [w.idle]: _ && !(null === (t = B.config) || void 0 === t ? void 0 : t.useInteractivePIP),
                        [U.pipModeShort]: ee && !G,
                        [U.pipModeTall]: ee && G,
                        [U.hidden]: j,
                        [U.multiPIPMode]: et
                    }),
                    noBorder: !ee,
                    children: [
                        (0, r.jsx)('div', {
                            className: 'theme-dark',
                            children:
                                ((i = E),
                                (a = f),
                                (o = _),
                                (u = J),
                                (c = ei),
                                ee && null != B && ((null == K ? void 0 : K.type) === P.fO.ACTIVITY || u)
                                    ? (null === (d = B.config) || void 0 === d ? void 0 : d.useInteractivePIP)
                                        ? (0, r.jsx)(L.of, {
                                              onJumpToChannel: en,
                                              applicationId: B.applicationId,
                                              channel: O,
                                              showControls: !o,
                                              onMouseDown: i,
                                              onMouseMove: i,
                                              onMouseLeave: a,
                                              onToggleHeight: er,
                                              isExpanded: G,
                                              hideExpandedButton: u
                                          })
                                        : u
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: (0, r.jsx)(L.q5, {
                                                    idle: o,
                                                    onMouseMove: i,
                                                    onMouseDown: i,
                                                    onMouseLeave: a,
                                                    onJumpToChannel: () => {
                                                        en(), (0, A.tg)(b.Ez.PANEL);
                                                    },
                                                    channel: O,
                                                    applicationId: B.applicationId,
                                                    users: c
                                                })
                                            })
                                          : null == K
                                            ? null
                                            : (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          onMouseMove: i,
                                                          onMouseDown: i,
                                                          onMouseLeave: a,
                                                          className: U.clickShield,
                                                          onDoubleClick: en
                                                      }),
                                                      (0, r.jsx)(L.YB, {
                                                          idle: o,
                                                          onMouseMove: i,
                                                          onMouseDown: i,
                                                          onMouseLeave: a,
                                                          onJumpToChannel: en,
                                                          channel: O,
                                                          applicationId: B.applicationId,
                                                          selectedParticipant: K
                                                      })
                                                  ]
                                              })
                                    : null)
                        }),
                        R
                            ? (0, r.jsx)(l.Spinner, {
                                  className: s()(U.iframe, {
                                      [U.pipModeShort]: ee && !G,
                                      [U.pipModeTall]: ee && G
                                  })
                              })
                            : (0, r.jsx)(y.J, {
                                  allowPopups: (0, v.h)(V),
                                  referrerPolicy: D.um.has(B.applicationId) ? 'no-referrer' : 'origin',
                                  url: B.url,
                                  queryParams: ea,
                                  className: s()(U.iframe, {
                                      [U.pipModeShort]: ee && !G,
                                      [U.pipModeTall]: ee && G,
                                      [U.pipNonInteractive]: ee && !(null === (n = B.config) || void 0 === n ? void 0 : n.useInteractivePIP)
                                  }),
                                  shouldRefocus: !ee && Z
                              }),
                        !ee &&
                            (0, r.jsx)(L.Ds, {
                                participantsOpen: q,
                                showToggleParticipants: !1,
                                channelId: O.id
                            })
                    ]
                });
            }
        })
    );
}
t.Z = (e) => {
    let { channel: t, ...n } = e,
        { userActivity: i, inActivity: a } = (0, R.Z)(t.id);
    return (
        (0, O.Z)({
            channel: t,
            userActivity: i
        }),
        (0, r.jsx)(G, {
            channel: t,
            isLoading: !a,
            ...n
        })
    );
};
