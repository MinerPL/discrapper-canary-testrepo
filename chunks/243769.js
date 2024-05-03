"use strict";
n.r(t), n("47120"), n("653041");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("692547"),
  o = n("481060"),
  u = n("620662"),
  d = n("994339"),
  c = n("503438"),
  f = n("484459"),
  E = n("598077"),
  _ = n("63063"),
  m = n("153066"),
  T = n("51144"),
  I = n("285952"),
  p = n("936195"),
  h = n("409216"),
  N = n("885442"),
  S = n("981631"),
  C = n("616922"),
  A = n("689938"),
  g = n("981146");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class R extends a.PureComponent {
  render() {
    let {
      member: e,
      className: t,
      guildId: n
    } = this.props;
    return (0, s.jsx)(o.Popout, {
      renderPopout: this.renderUserPopout,
      position: "left",
      preload: () => (0, f.maybeFetchUserProfileForPopout)(e.user.id, e.user.getAvatarURL(n, 80), {
        guildId: n
      }),
      children: a => {
        var l;
        return (0, s.jsx)(o.Tooltip, {
          text: e.unknownUser ? null : null !== (l = e.nick) && void 0 !== l ? l : T.default.getName(e.user),
          children: l => (0, s.jsx)(o.Clickable, {
            className: e.unknownUser ? g.partyMember : g.partyMemberKnown,
            ...l,
            ...a,
            children: (0, s.jsx)(o.Avatar, {
              src: e.user.getAvatarURL(n, 24),
              size: o.AvatarSizes.SIZE_24,
              className: i()(g.partyAvatar, t),
              "aria-label": e.user.username
            })
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), M(this, "renderUserPopout", e => {
      let {
        renderUserPopout: t,
        member: n
      } = this.props;
      return n.unknownUser ? null : t(n.user, e)
    })
  }
}
class v extends a.PureComponent {
  isDeadInvite() {
    let {
      isPreview: e,
      message: t,
      activity: n,
      applicationId: s
    } = this.props;
    return !e && !(null != t && (0, d.default)(n, t, s))
  }
  getPartySize() {
    let {
      activity: e
    } = this.props;
    return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size
  }
  getActionableMode() {
    return [S.ActivityActionTypes.LISTEN, (0, S.ActivityActionTypes)].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? "Actionable" : "NotActionable"
  }
  isInParty() {
    let {
      activity: e,
      myPartyId: t,
      isPreview: n
    } = this.props;
    return !n && null != e && null != e.party && t === e.party.id
  }
  isPartyFull() {
    let [e, t] = this.getPartySize();
    return e > -1 && e >= t
  }
  hasPartySize() {
    let [e, t] = this.getPartySize();
    return e > -1 && t > -1
  }
  isActionType(e) {
    return this.props.activityActionType === e
  }
  canJoin() {
    let {
      activity: e,
      isPreview: t,
      isGameLaunchable: n,
      isInBrowser: s
    } = this.props;
    return !!t || !(this.isDeadInvite() || !this.isActionType(S.ActivityActionTypes.JOIN) || !(0, u.default)(e, S.ActivityFlags.JOIN) || !this.hasPartySize() || this.isPartyFull() || s || !n || this.isInParty()) && !0
  }
  canSendInvite() {
    let {
      activity: e,
      isPreview: t
    } = this.props;
    return !!t || !(this.isDeadInvite() || !this.isActionType(S.ActivityActionTypes.JOIN_REQUEST) || !(0, u.default)(e, S.ActivityFlags.JOIN) || !this.hasPartySize() || this.isPartyFull()) && !0
  }
  canSync() {
    let {
      activity: e,
      isPreview: t,
      isSyncable: n,
      isInBrowser: s
    } = this.props;
    return !!t || !(!this.isActionType(S.ActivityActionTypes.LISTEN) && !this.isActionType(S.ActivityActionTypes.WATCH) || this.isDeadInvite() || !(0, u.default)(e, S.ActivityFlags.SYNC) || s || !n || this.isInParty()) && !0
  }
  getHelpdeskArticleURL() {
    let {
      partyId: e
    } = this.props;
    return null != e && (0, C.isSpotifyParty)(e) ? S.HelpdeskArticles.SPOTIFY_CONNECTION : S.HelpdeskArticles.RICH_PRESENCE_INTRODUCTION
  }
  renderHeaderText() {
    let {
      activityActionType: e,
      name: t
    } = this.props;
    switch (e) {
      case S.ActivityActionTypes.LISTEN:
        return A.default.Messages.INVITE_EMBED_INVITE_TO_LISTEN.format({
          name: t
        });
      case S.ActivityActionTypes.WATCH:
        return A.default.Messages.INVITE_EMBED_INVITE_TO_WATCH.format({
          name: t
        });
      case S.ActivityActionTypes.JOIN:
        return A.default.Messages.INVITE_EMBED_INVITE_TO_JOIN_GROUP;
      case S.ActivityActionTypes.JOIN_REQUEST:
      default:
        return A.default.Messages.INVITE_EMBED_ASK_TO_JOIN
    }
  }
  renderPartyStatus() {
    let {
      activityActionType: e,
      isGameLaunchable: t,
      isSyncable: n,
      isPreview: a,
      isInBrowser: l,
      name: i,
      activity: r
    } = this.props, [u, d] = this.getPartySize();
    if (this.isDeadInvite()) switch (e) {
      case S.ActivityActionTypes.LISTEN:
        return A.default.Messages.INVITE_EMBED_LISTEN_HAS_ENDED;
      case S.ActivityActionTypes.WATCH:
        return A.default.Messages.INVITE_EMBED_WATCH_HAS_ENDED;
      case S.ActivityActionTypes.JOIN:
      case S.ActivityActionTypes.JOIN_REQUEST:
      default:
        return A.default.Messages.INVITE_EMBED_GAME_HAS_ENDED
    }
    if (l && !a && e === S.ActivityActionTypes.JOIN) return A.default.Messages.INVITE_EMBED_JOIN_VIA_DESKTOP_APP;
    if (this.isActionType(S.ActivityActionTypes.LISTEN) || this.isActionType(S.ActivityActionTypes.WATCH)) return null != r && null != r.details && null != r.state && (0, c.default)(r) ? [(0, s.jsx)("div", {
      className: g.details,
      children: (0, s.jsx)(o.Anchor, {
        className: g.textLink,
        onClick: this.handleOpenSpotifyTrack,
        children: r.details
      })
    }, "details"), (0, s.jsx)("div", {
      className: g.state,
      children: A.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: r.state,
        artistsHook: (e, t) => null != r.state ? (0, s.jsx)(p.default, {
          artists: r.state,
          linkClassName: g.textLink,
          canOpen: null != r.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, t) : null
      })
    }, "state")] : this.isActionType(S.ActivityActionTypes.LISTEN) ? A.default.Messages.USER_ACTIVITY_LISTEN_ALONG : A.default.Messages.USER_ACTIVITY_WATCH_ALONG;
    return this.isActionType(S.ActivityActionTypes.JOIN_REQUEST) ? this.isPartyFull() ? A.default.Messages.INVITE_EMBED_FULL_GROUP : A.default.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({
      number: d - u
    }) : this.isInParty() ? A.default.Messages.INVITE_EMBED_IN_GROUP : t || n || a ? this.isPartyFull() ? A.default.Messages.INVITE_EMBED_FULL_GROUP : this.hasPartySize() ? A.default.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({
      number: d - u
    }) : A.default.Messages.JOIN : A.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
      name: i
    })
  }
  renderActionButton() {
    let {
      isInBrowser: e,
      isPreview: t,
      isGameLaunchable: n,
      isSender: a,
      partyId: l,
      activity: i,
      message: r,
      renderSpotifyJoinButton: u,
      renderCustomButton: d
    } = this.props, c = {
      className: g.actionButton,
      size: o.Button.Sizes.SMALL
    }, f = null != d ? d(c) : null;
    return null != f ? f : !this.isDeadInvite() && this.isActionType(S.ActivityActionTypes.LISTEN) && null != l && null != r && null != i && (0, C.isSpotifyParty)(l) ? u({
      ...c,
      activity: i,
      user: r.author
    }) : (0, s.jsx)(o.Button, {
      ...c,
      ...(() => {
        if (!t && e && !this.isDeadInvite()) return {
          children: A.default.Messages.USER_ACTIVITY_ACTION_DOWNLOAD_APP,
          onClick: this.handleDownloadApp
        };
        if (this.canJoin()) return {
          children: A.default.Messages.JOIN,
          onClick: this.handleJoin
        };
        if (this.canSync()) return {
          children: A.default.Messages.JOIN,
          onClick: this.handleSync
        };
        if (this.canSendInvite()) return {
          children: A.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
          onClick: this.handleInvite,
          disabled: a
        };
        return {
          children: this.isActionType(S.ActivityActionTypes.JOIN_REQUEST) ? A.default.Messages.INVITE_EMBED_INVITE_TO_JOIN : A.default.Messages.JOIN,
          disabled: !0
        }
      })(),
      color: (e || n) && !this.isDeadInvite() ? o.Button.Colors.GREEN : o.Button.Colors.PRIMARY,
      submitting: this.props.isLoading
    })
  }
  renderMoreUsers(e, t, n) {
    return (0, s.jsx)("div", {
      className: g.moreUsers,
      children: e
    }, n)
  }
  renderParty() {
    let {
      partyId: e,
      partyMembers: t,
      hideParty: n,
      guildId: a
    } = this.props, [l, i] = this.getPartySize(), r = this.hasPartySize() || this.isActionType(S.ActivityActionTypes.LISTEN) || this.isActionType(S.ActivityActionTypes.WATCH);
    if (null == e || this.isDeadInvite() || !r || n) return null;
    let o = [...t],
      u = Math.min(l, 6);
    for (; o.length < u;) o.push({
      user: new E.default({
        discriminator: "0005"
      }),
      unknownUser: !0
    });
    let d = Math.min(i, 106);
    for (; o.length < d;) o.push(null);
    return (0, s.jsx)(h.default, {
      guildId: a,
      className: g.partyMembers,
      users: o,
      max: i > 0 ? Math.min(i, 6) : 6,
      renderUser: this.renderUser,
      renderMoreUsers: this.renderMoreUsers
    })
  }
  render() {
    let {
      className: e,
      coverImage: t,
      name: n,
      activity: a
    } = this.props, l = this.isActionType(S.ActivityActionTypes.JOIN) || this.isActionType(S.ActivityActionTypes.JOIN_REQUEST), u = this.isDeadInvite(), d = null;
    null == t || null == a || l ? !l && u && (d = (0, s.jsx)("div", {
      className: g.artworkSpotifySessionEnded
    })) : d = (0, s.jsx)("img", {
      alt: "",
      src: t,
      className: (0, m.getClass)(g, "artwork", this.getActionableMode())
    });
    let f = null != a && null != d && null != a.assets && null != a.assets.large_text && "" !== a.assets.large_text && !u && (0, c.default)(a) ? a.assets.large_text : null,
      E = null != f ? (0, s.jsx)(o.Tooltip, {
        text: f,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, s.jsx)(o.Anchor, {
            onClick: this.handleOpenSpotifyAlbum,
            onMouseEnter: t,
            onMouseLeave: n,
            children: d
          })
        }
      }) : d;
    return (0, s.jsxs)("div", {
      className: i()(g.invite, e),
      children: [(0, s.jsx)("div", {
        className: g.coverImageWrapper,
        children: (0, s.jsx)("div", {
          className: i()((0, m.getClass)(g, "coverImage", this.getActionableMode()), null != d ? g.blurred : null),
          style: {
            backgroundImage: null != t ? "url('".concat(t, "')") : void 0
          }
        })
      }), (0, s.jsxs)(I.default, {
        className: g.fullHeight,
        children: [(0, s.jsxs)(I.default, {
          direction: I.default.Direction.VERTICAL,
          children: [(0, s.jsx)("div", {
            className: g.header,
            children: this.renderHeaderText()
          }), (0, s.jsx)(I.default.Child, {
            className: g.partyStatus,
            children: this.renderPartyStatus()
          }), (0, s.jsxs)(I.default, {
            align: I.default.Align.END,
            children: [(0, s.jsxs)(I.default, {
              align: I.default.Align.CENTER,
              className: g.actionAndParty,
              basis: 0,
              style: {
                marginRight: 0
              },
              children: [this.renderActionButton(), this.renderParty()]
            }), null == d && l ? (0, s.jsx)("div", {
              className: g.name,
              children: n
            }) : null]
          })]
        }), E]
      }), (0, s.jsx)(o.Anchor, {
        href: _.default.getArticleURL(this.getHelpdeskArticleURL()),
        className: g.helpIcon,
        children: (0, s.jsx)(N.default, {
          color: r.default.unsafe_rawColors.PRIMARY_300.css,
          width: 12,
          height: 12
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), M(this, "handleJoin", () => {
      let {
        onJoin: e
      } = this.props;
      null == e || e()
    }), M(this, "handleInvite", () => {
      let {
        onInvite: e
      } = this.props;
      null == e || e()
    }), M(this, "handleSync", () => {
      let {
        onSync: e
      } = this.props;
      null == e || e()
    }), M(this, "handleDownloadApp", () => {
      let {
        onDownloadApp: e
      } = this.props;
      null == e || e()
    }), M(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      null != e && (null == t || t(e))
    }), M(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        message: s
      } = this.props;
      null != t && null != s && (null == n || n(t, s.author.id, e))
    }), M(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        message: n
      } = this.props;
      null != e && null != n && (null == t || t(e, n.author.id))
    }), M(this, "renderUser", (e, t, n) => {
      let {
        renderUserPopout: a,
        guildId: l
      } = this.props;
      return null != e ? (0, s.jsx)(R, {
        member: e,
        renderUserPopout: a,
        className: t,
        guildId: l
      }, n) : (0, s.jsx)("div", {
        className: i()(g.partyMemberEmpty, t)
      }, n)
    })
  }
}
t.default = v