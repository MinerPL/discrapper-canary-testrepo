n(47120), n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(692547),
    o = n(481060),
    c = n(600164),
    u = n(424678),
    d = n(184301),
    _ = n(237583),
    E = n(598077),
    I = n(63063),
    m = n(153066),
    T = n(51144),
    h = n(620662),
    N = n(994339),
    f = n(503438),
    C = n(981631),
    p = n(616922),
    g = n(689938),
    S = n(862810);
function A(e, t, n) {
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
class R extends a.PureComponent {
    render() {
        let { member: e, className: t, guildId: n } = this.props;
        return (0, i.jsx)(o.Popout, {
            renderPopout: this.renderUserPopout,
            position: 'left',
            preload: () => (0, d.Z)(e.user.id, e.user.getAvatarURL(n, 80), { guildId: n }),
            children: (a) => {
                var s;
                return (0, i.jsx)(o.Tooltip, {
                    text: e.unknownUser ? null : null !== (s = e.nick) && void 0 !== s ? s : T.ZP.getName(e.user),
                    children: (s) =>
                        (0, i.jsx)(o.Clickable, {
                            className: e.unknownUser ? S.partyMember : S.partyMemberKnown,
                            ...s,
                            ...a,
                            children: (0, i.jsx)(o.Avatar, {
                                src: e.user.getAvatarURL(n, 24),
                                size: o.AvatarSizes.SIZE_24,
                                className: r()(S.partyAvatar, t),
                                'aria-label': e.user.username
                            })
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'renderUserPopout', (e) => {
                let { renderUserPopout: t, member: n } = this.props;
                return n.unknownUser ? null : t(n.user, e);
            });
    }
}
class x extends a.PureComponent {
    isDeadInvite() {
        let { isPreview: e, message: t, activity: n, applicationId: i } = this.props;
        return !e && !(null != t && (0, N.Z)(n, t, i));
    }
    getPartySize() {
        let { activity: e } = this.props;
        return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size;
    }
    getActionableMode() {
        return [C.mFx.LISTEN, C.mFx].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? 'Actionable' : 'NotActionable';
    }
    isInParty() {
        let { activity: e, myPartyId: t, isPreview: n } = this.props;
        return !n && null != e && null != e.party && t === e.party.id;
    }
    isPartyFull() {
        let [e, t] = this.getPartySize();
        return e > -1 && e >= t;
    }
    hasPartySize() {
        let [e, t] = this.getPartySize();
        return e > -1 && t > -1;
    }
    isActionType(e) {
        return this.props.activityActionType === e;
    }
    canJoin() {
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: i } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(C.mFx.JOIN) || !(0, h.Z)(e, C.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || i || !n || this.isInParty()) && !0);
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(C.mFx.JOIN_REQUEST) || !(0, h.Z)(e, C.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull()) && !0);
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: i } = this.props;
        return !!t || (!((!this.isActionType(C.mFx.LISTEN) && !this.isActionType(C.mFx.WATCH)) || this.isDeadInvite() || !(0, h.Z)(e, C.xjy.SYNC) || i || !n || this.isInParty()) && !0);
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, p.Ps)(e) ? C.BhN.SPOTIFY_CONNECTION : C.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case C.mFx.LISTEN:
                return g.Z.Messages.INVITE_EMBED_INVITE_TO_LISTEN.format({ name: t });
            case C.mFx.WATCH:
                return g.Z.Messages.INVITE_EMBED_INVITE_TO_WATCH.format({ name: t });
            case C.mFx.JOIN:
                return g.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN_GROUP;
            case C.mFx.JOIN_REQUEST:
            default:
                return g.Z.Messages.INVITE_EMBED_ASK_TO_JOIN;
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: a, isInBrowser: s, name: r, activity: l } = this.props,
            [c, d] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case C.mFx.LISTEN:
                    return g.Z.Messages.INVITE_EMBED_LISTEN_HAS_ENDED;
                case C.mFx.WATCH:
                    return g.Z.Messages.INVITE_EMBED_WATCH_HAS_ENDED;
                case C.mFx.JOIN:
                case C.mFx.JOIN_REQUEST:
                default:
                    return g.Z.Messages.INVITE_EMBED_GAME_HAS_ENDED;
            }
        if (s && !a && e === C.mFx.JOIN) return g.Z.Messages.INVITE_EMBED_JOIN_VIA_DESKTOP_APP;
        if (this.isActionType(C.mFx.LISTEN) || this.isActionType(C.mFx.WATCH))
            return null != l && null != l.details && null != l.state && (0, f.Z)(l)
                ? [
                      (0, i.jsx)(
                          'div',
                          {
                              className: S.details,
                              children: (0, i.jsx)(o.Anchor, {
                                  className: S.textLink,
                                  onClick: this.handleOpenSpotifyTrack,
                                  children: l.details
                              })
                          },
                          'details'
                      ),
                      (0, i.jsx)(
                          'div',
                          {
                              className: S.state,
                              children: g.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                                  artists: l.state,
                                  artistsHook: (e, t) =>
                                      null != l.state
                                          ? (0, i.jsx)(
                                                u.Z,
                                                {
                                                    artists: l.state,
                                                    linkClassName: S.textLink,
                                                    canOpen: null != l.sync_id,
                                                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                                                },
                                                t
                                            )
                                          : null
                              })
                          },
                          'state'
                      )
                  ]
                : this.isActionType(C.mFx.LISTEN)
                  ? g.Z.Messages.USER_ACTIVITY_LISTEN_ALONG
                  : g.Z.Messages.USER_ACTIVITY_WATCH_ALONG;
        return this.isActionType(C.mFx.JOIN_REQUEST) ? (this.isPartyFull() ? g.Z.Messages.INVITE_EMBED_FULL_GROUP : g.Z.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({ number: d - c })) : this.isInParty() ? g.Z.Messages.INVITE_EMBED_IN_GROUP : t || n || a ? (this.isPartyFull() ? g.Z.Messages.INVITE_EMBED_FULL_GROUP : this.hasPartySize() ? g.Z.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({ number: d - c }) : g.Z.Messages.JOIN) : g.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: r });
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: a, partyId: s, activity: r, message: l, renderSpotifyJoinButton: c, renderCustomButton: u } = this.props,
            d = {
                className: S.actionButton,
                size: o.Button.Sizes.SMALL
            },
            _ = null != u ? u(d) : null;
        return null != _
            ? _
            : !this.isDeadInvite() && this.isActionType(C.mFx.LISTEN) && null != s && null != l && null != r && (0, p.Ps)(s)
              ? c({
                    ...d,
                    activity: r,
                    user: l.author
                })
              : (0, i.jsx)(o.Button, {
                    ...d,
                    ...(() => {
                        if (!t && e && !this.isDeadInvite())
                            return {
                                children: g.Z.Messages.USER_ACTIVITY_ACTION_DOWNLOAD_APP,
                                onClick: this.handleDownloadApp
                            };
                        if (this.canJoin())
                            return {
                                children: g.Z.Messages.JOIN,
                                onClick: this.handleJoin
                            };
                        if (this.canSync())
                            return {
                                children: g.Z.Messages.JOIN,
                                onClick: this.handleSync
                            };
                        if (this.canSendInvite())
                            return {
                                children: g.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                                onClick: this.handleInvite,
                                disabled: a
                            };
                        return {
                            children: this.isActionType(C.mFx.JOIN_REQUEST) ? g.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN : g.Z.Messages.JOIN,
                            disabled: !0
                        };
                    })(),
                    color: (e || n) && !this.isDeadInvite() ? o.Button.Colors.GREEN : o.Button.Colors.PRIMARY,
                    submitting: this.props.isLoading
                });
    }
    renderMoreUsers(e, t, n) {
        return (0, i.jsx)(
            'div',
            {
                className: S.moreUsers,
                children: e
            },
            n
        );
    }
    renderParty() {
        let { partyId: e, partyMembers: t, hideParty: n, guildId: a } = this.props,
            [s, r] = this.getPartySize(),
            l = this.hasPartySize() || this.isActionType(C.mFx.LISTEN) || this.isActionType(C.mFx.WATCH);
        if (null == e || this.isDeadInvite() || !l || n) return null;
        let o = [...t],
            c = Math.min(s, 6);
        for (; o.length < c; )
            o.push({
                user: new E.Z({ discriminator: '0005' }),
                unknownUser: !0
            });
        let u = Math.min(r, 106);
        for (; o.length < u; ) o.push(null);
        return (0, i.jsx)(_.Z, {
            guildId: a,
            className: S.partyMembers,
            users: o,
            max: r > 0 ? Math.min(r, 6) : 6,
            renderUser: this.renderUser,
            renderMoreUsers: this.renderMoreUsers
        });
    }
    render() {
        let { className: e, coverImage: t, name: n, activity: a } = this.props,
            s = this.isActionType(C.mFx.JOIN) || this.isActionType(C.mFx.JOIN_REQUEST),
            u = this.isDeadInvite(),
            d = null;
        null == t || null == a || s
            ? !s && u && (d = (0, i.jsx)('div', { className: S.artworkSpotifySessionEnded }))
            : (d = (0, i.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, m.l)(S, 'artwork', this.getActionableMode())
              }));
        let _ = null != a && null != d && null != a.assets && null != a.assets.large_text && '' !== a.assets.large_text && !u && (0, f.Z)(a) ? a.assets.large_text : null,
            E =
                null != _
                    ? (0, i.jsx)(o.Tooltip, {
                          text: _,
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, i.jsx)(o.Anchor, {
                                  onClick: this.handleOpenSpotifyAlbum,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: d
                              });
                          }
                      })
                    : d;
        return (0, i.jsxs)('div', {
            className: r()(S.invite, e),
            children: [
                (0, i.jsx)('div', {
                    className: S.coverImageWrapper,
                    children: (0, i.jsx)('div', {
                        className: r()((0, m.l)(S, 'coverImage', this.getActionableMode()), null != d ? S.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, i.jsxs)(c.Z, {
                    className: S.fullHeight,
                    children: [
                        (0, i.jsxs)(c.Z, {
                            direction: c.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)('div', {
                                    className: S.header,
                                    children: this.renderHeaderText()
                                }),
                                (0, i.jsx)(c.Z.Child, {
                                    className: S.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, i.jsxs)(c.Z, {
                                    align: c.Z.Align.END,
                                    children: [
                                        (0, i.jsxs)(c.Z, {
                                            align: c.Z.Align.CENTER,
                                            className: S.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == d && s
                                            ? (0, i.jsx)('div', {
                                                  className: S.name,
                                                  children: n
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        E
                    ]
                }),
                (0, i.jsx)(o.Anchor, {
                    href: I.Z.getArticleURL(this.getHelpdeskArticleURL()),
                    className: S.helpIcon,
                    children: (0, i.jsx)(o.CircleQuestionIcon, {
                        color: l.Z.unsafe_rawColors.PRIMARY_300.css,
                        size: 'xxs'
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'handleJoin', () => {
                let { onJoin: e } = this.props;
                null == e || e();
            }),
            A(this, 'handleInvite', () => {
                let { onInvite: e } = this.props;
                null == e || e();
            }),
            A(this, 'handleSync', () => {
                let { onSync: e } = this.props;
                null == e || e();
            }),
            A(this, 'handleDownloadApp', () => {
                let { onDownloadApp: e } = this.props;
                null == e || e();
            }),
            A(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                null != e && (null == t || t(e));
            }),
            A(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, message: i } = this.props;
                null != t && null != i && (null == n || n(t, i.author.id, e));
            }),
            A(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, message: n } = this.props;
                null != e && null != n && (null == t || t(e, n.author.id));
            }),
            A(this, 'renderUser', (e, t, n) => {
                let { renderUserPopout: a, guildId: s } = this.props;
                return null != e
                    ? (0, i.jsx)(
                          R,
                          {
                              member: e,
                              renderUserPopout: a,
                              className: t,
                              guildId: s
                          },
                          n
                      )
                    : (0, i.jsx)('div', { className: r()(S.partyMemberEmpty, t) }, n);
            });
    }
}
t.Z = x;
