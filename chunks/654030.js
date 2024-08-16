n(47120);
var i,
    a = n(735250),
    s = n(470079),
    r = n(442837),
    l = n(481060),
    o = n(278323),
    c = n(224706),
    u = n(763472),
    d = n(498179),
    _ = n(276852),
    E = n(994339),
    I = n(275920),
    m = n(917621),
    T = n(431583),
    h = n(592745),
    N = n(952164),
    f = n(768419),
    C = n(456432),
    p = n(103575),
    g = n(789407),
    S = n(598077),
    A = n(757266),
    R = n(831506),
    x = n(271383),
    O = n(283595),
    M = n(293273),
    v = n(594174),
    L = n(181106),
    Z = n(417363),
    P = n(768581),
    b = n(358085),
    D = n(804739),
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
        (0, N.aG)(e);
    }
    handleOpenSpotifyArtist(e, t, n) {
        (0, N.d$)(e, t, n);
    }
    handleOpenSpotifyAlbum(e, t) {
        (0, N.Z5)(e, t);
    }
    shouldRenderCustomButton() {
        let { isLaunchable: e, application: t } = this.props;
        return null != t && null != t.primarySkuId && !e && b.isPlatformEmbedded;
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
                let { activity: e, analyticsLocations: t, userId: n, message: i, channelId: a } = this.props;
                if (null != e && null != n && null != i && null != e.session_id && null != e.application_id) {
                    var s;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: a,
                        messageId: i.id
                    }),
                        (0, I.Z)({
                            type: U.q5t.JOIN,
                            source: U.Sbl.MESSAGE_EMBED,
                            userId: n,
                            applicationId: e.application_id,
                            partyId: null === (s = e.party) || void 0 === s ? void 0 : s.id,
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
                null != e && null != t && u.Z_(e, t);
            }),
            B(this, 'handleDownloadApp', () => {
                (0, l.openModal)((e) =>
                    (0, a.jsx)(T.default, {
                        source: 'Game Invite',
                        ...e
                    })
                );
            }),
            B(this, 'renderUserPopout', (e, t) => {
                let { channelId: n, guildId: i, message: s, analyticsLocations: r } = this.props;
                return null == n
                    ? null
                    : (0, a.jsx)(p.Z, {
                          ...t,
                          location: 'ActivityInviteEmbed',
                          userId: e.id,
                          guildId: null != i ? i : void 0,
                          channelId: n,
                          messageId: null == s ? void 0 : s.id,
                          newAnalyticsLocations: r
                      });
            }),
            B(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, a.jsx)(C.Z, {
                    guildId: null != n ? n : void 0,
                    channelId: t,
                    source: 'Invite Embed',
                    ...e
                });
            }),
            B(this, 'renderCustomButton', (e) => {
                let { application: t } = this.props;
                return (0, a.jsx)(d.Z, {
                    ...e,
                    source: U.Sbl.MESSAGE_EMBED,
                    application: t
                });
            }),
            B(this, 'renderEmbed', () => {
                let e;
                let { activity: t, partyId: n, myPartyId: i, application: s, partyMembers: r, isPreview: l, isLaunching: o, isSender: c, activityActionType: u, className: d, channelId: _, message: E, hideParty: I, isSyncable: T, isLaunchable: h, guildId: N } = this.props;
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
                    partyMembers: r,
                    className: d,
                    coverImage: this.getCoverImage(),
                    isPreview: l,
                    isGameLaunchable: h,
                    isLoading: o || this.state.sending,
                    activityActionType: u,
                    isInBrowser: !b.isPlatformEmbedded,
                    isSyncable: T,
                    isSender: c,
                    channelId: _,
                    guildId: null != N ? N : void 0,
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
    (t.Z = r.ZP.connectStores([f.Z, R.Z, M.Z, O.Z, h.Z, Z.Z, A.Z, L.Z, v.default, x.ZP], (e) => {
        let { activity: t, analyticsLocations: n, application: i, partyId: a, userId: s, guildId: r } = e,
            { id: l } = null != i ? i : {},
            o = null != t && null != t.party && t.party.id === a ? R.Z.getParty(t.party.id) : null,
            c = null != l ? M.Z.getApplicationActivity(l) : M.Z.findActivity((e) => e.type === U.IIU.LISTENING),
            u = !1;
        null != l && (u = L.Z.getState(l, U.mFx.JOIN) === U.OcF.LOADING);
        let d = Array.from(null != o ? o : []).map((e) => {
                let t = null != r ? x.ZP.getMember(r, e) : null,
                    n = null != t ? t.nick : null,
                    i = v.default.getUser(e),
                    a = null == i;
                return (
                    null == i && (i = new S.Z({ discriminator: '0005' })),
                    {
                        user: i,
                        unknownUser: a,
                        nick: n
                    }
                );
            }),
            _ = null != t && f.Z.canPlay(t),
            E = f.Z.getSyncingWith(),
            I = null != E && null != s && E.userId === s;
        return {
            analyticsLocations: n,
            partyMembers: d,
            connectedApplication: null != l ? A.Z.getApplication(l) : null,
            myPartyId: null != c && null != c.party ? c.party.id : null,
            isLaunching: u,
            isSyncable: _ && !I,
            isLaunchable:
                null != l &&
                (0, D.t)({
                    LibraryApplicationStore: O.Z,
                    LaunchableGameStore: h.Z,
                    DispatchApplicationStore: Z.Z,
                    ConnectedAppsStore: A.Z,
                    applicationId: l
                })
        };
    })(G));
