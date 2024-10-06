n(47120);
var i,
    a = n(735250),
    s = n(470079),
    l = n(442837),
    r = n(481060),
    o = n(278323),
    c = n(224706),
    d = n(763472),
    u = n(498179),
    _ = n(276852),
    E = n(994339),
    I = n(275920),
    m = n(917621),
    T = n(431583),
    N = n(592745),
    h = n(952164),
    C = n(768419),
    p = n(456432),
    f = n(347475),
    g = n(789407),
    A = n(598077),
    S = n(757266),
    M = n(831506),
    x = n(271383),
    O = n(283595),
    R = n(293273),
    v = n(594174),
    L = n(181106),
    Z = n(417363),
    P = n(768581),
    D = n(358085),
    b = n(804739),
    j = n(410575),
    U = n(981631),
    y = n(701488);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let k = { spotify: 'Spotify' };
class G extends (i = s.PureComponent) {
    getCoverImage() {
        let { activity: e, connectedApplication: t, application: n, isPreview: i, message: a } = this.props;
        if (null != n && (i || (null != a && (0, E.Z)(e, a, n.id)))) {
            let t = (0, _.Z)(e, n.id);
            if (null != t) return t;
        }
        return null == n || n instanceof g.ZP
            ? null
            : P.ZP.getApplicationIconURL({
                  id: n.id,
                  icon: null != t ? t.coverImage : n.coverImage,
                  size: y.cc
              });
    }
    handleOpenSpotifyTrack(e) {
        (0, h.aG)(e);
    }
    handleOpenSpotifyArtist(e, t, n) {
        (0, h.d$)(e, t, n);
    }
    handleOpenSpotifyAlbum(e, t) {
        (0, h.Z5)(e, t);
    }
    shouldRenderCustomButton() {
        let { isLaunchable: e, application: t } = this.props;
        return null != t && null != t.primarySkuId && !e && D.isPlatformEmbedded;
    }
    render() {
        return (0, a.jsx)(j.Z, {
            section: j.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e),
            B(this, 'state', { sending: !1 }),
            B(this, 'handleJoin', () => {
                let { activity: e, analyticsLocations: t, userId: n, message: i, guildId: a, channelId: s } = this.props;
                if (null != e && null != n && null != i && null != e.session_id && null != e.application_id) {
                    var l, r;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: s,
                        messageId: i.id,
                        source: U.Sbl.MESSAGE_EMBED,
                        analyticsLocations: t,
                        partyId: null === (l = e.party) || void 0 === l ? void 0 : l.id
                    }),
                        (0, I.Z)({
                            type: U.q5t.JOIN,
                            source: U.Sbl.MESSAGE_EMBED,
                            userId: n,
                            guildId: a,
                            channelId: s,
                            applicationId: e.application_id,
                            partyId: null === (r = e.party) || void 0 === r ? void 0 : r.id,
                            messageId: i.id,
                            analyticsLocations: t
                        });
                }
            }),
            B(this, 'handleInvite', async () => {
                let { activity: e, channelId: t } = this.props;
                if (null != e && null != t)
                    try {
                        this.setState({ sending: !0 }),
                            await o.Z.sendActivityInvite({
                                type: U.mFx.JOIN,
                                channelId: t,
                                activity: e,
                                location: U.Sbl.MESSAGE_EMBED
                            });
                    } finally {
                        this.setState({ sending: !1 });
                    }
            }),
            B(this, 'handleSync', () => {
                let { activity: e, userId: t } = this.props;
                null != e && null != t && d.Z_(e, t);
            }),
            B(this, 'handleDownloadApp', () => {
                (0, r.openModal)((e) =>
                    (0, a.jsx)(T.default, {
                        source: 'Game Invite',
                        ...e
                    })
                );
            }),
            B(this, 'renderUserPopout', (e, t) => {
                let { channelId: n, guildId: i, message: s, analyticsLocations: l } = this.props;
                return null == n
                    ? null
                    : (0, a.jsx)(f.Z, {
                          ...t,
                          userId: e.id,
                          guildId: null != i ? i : void 0,
                          channelId: n,
                          messageId: null == s ? void 0 : s.id,
                          newAnalyticsLocations: l
                      });
            }),
            B(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, a.jsx)(p.Z, {
                    guildId: null != n ? n : void 0,
                    channelId: t,
                    source: 'Invite Embed',
                    ...e
                });
            }),
            B(this, 'renderCustomButton', (e) => {
                let { application: t } = this.props;
                return (0, a.jsx)(u.Z, {
                    ...e,
                    source: U.Sbl.MESSAGE_EMBED,
                    application: t
                });
            }),
            B(this, 'renderEmbed', () => {
                let e;
                let { activity: t, partyId: n, myPartyId: i, application: s, partyMembers: l, isPreview: r, isLaunching: o, isSender: c, activityActionType: d, className: u, channelId: _, message: E, hideParty: I, isSyncable: T, isLaunchable: N, guildId: h } = this.props;
                if (null != s) e = s.name;
                else if (null != n) {
                    let [t] = n.split(':');
                    e = k[t];
                }
                return (0, a.jsx)(m.Z, {
                    activity: t,
                    partyId: n,
                    myPartyId: i,
                    applicationId: null != s ? s.id : null,
                    name: e,
                    partyMembers: l,
                    className: u,
                    coverImage: this.getCoverImage(),
                    isPreview: r,
                    isGameLaunchable: N,
                    isLoading: o || this.state.sending,
                    activityActionType: d,
                    isInBrowser: !D.isPlatformEmbedded,
                    isSyncable: T,
                    isSender: c,
                    channelId: _,
                    guildId: null != h ? h : void 0,
                    message: E,
                    hideParty: I,
                    onJoin: this.handleJoin,
                    onInvite: this.handleInvite,
                    onSync: this.handleSync,
                    onDownloadApp: this.handleDownloadApp,
                    onOpenSpotifyTrack: this.handleOpenSpotifyTrack,
                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                    onOpenSpotifyAlbum: this.handleOpenSpotifyAlbum,
                    renderUserPopout: this.renderUserPopout,
                    renderSpotifyJoinButton: this.renderSpotifyJoinButton,
                    renderCustomButton: this.shouldRenderCustomButton() ? this.renderCustomButton : null
                });
            });
    }
}
B(G, 'defaultProps', { isPreview: !1 }),
    (t.Z = l.ZP.connectStores([C.Z, M.Z, R.Z, O.Z, N.Z, Z.Z, S.Z, L.Z, v.default, x.ZP], (e) => {
        let { activity: t, analyticsLocations: n, application: i, partyId: a, userId: s, guildId: l } = e,
            { id: r } = null != i ? i : {},
            o = null != t && null != t.party && t.party.id === a ? M.Z.getParty(t.party.id) : null,
            c = null != r ? R.Z.getApplicationActivity(r) : R.Z.findActivity((e) => e.type === U.IIU.LISTENING),
            d = !1;
        null != r && (d = L.Z.getState(r, U.mFx.JOIN) === U.OcF.LOADING);
        let u = Array.from(null != o ? o : []).map((e) => {
                let t = null != l ? x.ZP.getMember(l, e) : null,
                    n = null != t ? t.nick : null,
                    i = v.default.getUser(e),
                    a = null == i;
                return (
                    null == i && (i = new A.Z({ discriminator: '0005' })),
                    {
                        user: i,
                        unknownUser: a,
                        nick: n
                    }
                );
            }),
            _ = null != t && C.Z.canPlay(t),
            E = C.Z.getSyncingWith(),
            I = null != E && null != s && E.userId === s;
        return {
            analyticsLocations: n,
            partyMembers: u,
            connectedApplication: null != r ? S.Z.getApplication(r) : null,
            myPartyId: null != c && null != c.party ? c.party.id : null,
            isLaunching: d,
            isSyncable: _ && !I,
            isLaunchable:
                null != r &&
                (0, b.t)({
                    LibraryApplicationStore: O.Z,
                    LaunchableGameStore: N.Z,
                    DispatchApplicationStore: Z.Z,
                    ConnectedAppsStore: S.Z,
                    applicationId: r
                })
        };
    })(G));
