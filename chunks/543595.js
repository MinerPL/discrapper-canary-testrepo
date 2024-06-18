"use strict";
n.d(t, {
  Y: function() {
    return i
  }
}), n(789020), n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(512722),
  d = n.n(_),
  c = n(780384),
  E = n(481060),
  I = n(438139),
  T = n(410030),
  h = n(726542),
  S = n(740265),
  f = n(122810),
  N = n(833664),
  A = n(503438),
  m = n(802856),
  O = n(420660),
  R = n(539746),
  C = n(833858),
  p = n(223135),
  g = n(769654),
  L = n(750154),
  v = n(768581),
  D = n(630388),
  M = n(153066),
  P = n(672938),
  y = n(285952),
  U = n(366695),
  b = n(346656),
  G = n(514342),
  w = n(366966),
  k = n(936195),
  B = n(692437),
  x = n(632184),
  V = n(806519),
  Z = n(981631),
  H = n(701488),
  F = n(689938),
  Y = n(217833);

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).USER_POPOUT = "UserPopout", s.USER_POPOUT_V2 = "UserPopoutV2", s.ACTIVITY_FEED = "ActivityFeed", s.PROFILE = "Profile", s.PROFILE_V2 = "ProfileV2", s.STREAM_PREVIEW = "StreamPreview", s.VOICE_CHANNEL = "VoiceChannel", s.SIMPLIFIED_PROFILE = "SimplifiedProfile", s.BITE_SIZE_POPOUT = "BiteSizePopout";
let W = {
    StreamPreview: [108, 60],
    UserPopout: [108, 60],
    UserPopoutV2: [108, 60],
    BiteSizePopout: [108, 60],
    VoiceChannel: [108, 60],
    Profile: [162, 90],
    ProfileV2: [162, 90],
    SimplifiedProfile: [162, 90],
    ActivityFeed: [900, 500]
  },
  {
    getAssetImage: K
  } = n(81063),
  z = (0, I.Z)(class extends a.PureComponent {
    render() {
      return (0, o.jsx)("div", {
        className: Y.timestamp,
        children: this.props.message
      })
    }
  });

function q(e) {
  let {
    activity: t
  } = e, n = null;
  return (0, A.Z)(t) && (n = Z.ABu.SPOTIFY), null != t.platform && [Z.M7m.PS4, Z.M7m.PS5].includes(t.platform) && (n = Z.ABu.PLAYSTATION), n
}

function X(e) {
  let {
    activity: t
  } = e, n = (0, T.ZP)(), i = q({
    activity: t
  });
  if (null == i) return null;
  let r = h.Z.get(i);
  return (0, o.jsx)("img", {
    alt: "",
    src: (0, c.ap)(n) ? r.icon.lightSVG : r.icon.darkSVG,
    className: Y.platformIcon
  })
}
class Q extends(r = a.PureComponent) {
  get activity() {
    let {
      activity: e,
      activityGuild: t
    } = this.props;
    return null != t && (null == e ? void 0 : e.type) !== Z.IIU.PLAYING && (null == e ? void 0 : e.type) !== Z.IIU.WATCHING && (null == e ? void 0 : e.type) !== Z.IIU.LISTENING && (null == e ? void 0 : e.type) !== Z.IIU.HANG_STATUS ? {
      type: Z.IIU.PLAYING,
      name: F.Z.Messages.SHARING_SCREEN
    } : e
  }
  getTypeClass(e, t) {
    return (0, M.l)(Y, e, this.props.type, t)
  }
  isStreamerOnTypeProfile() {
    return (0, O.Z)(this.activity) && ("Profile" === this.props.type || "ProfileV2" === this.props.type)
  }
  isStreamerOnTypeActivityFeed() {
    return (0, O.Z)(this.activity) && "ActivityFeed" === this.props.type
  }
  renderHeader(e) {
    let t;
    let {
      hideHeader: n,
      activityGuild: i,
      showChannelDetails: r,
      renderHeaderAccessory: s,
      type: a
    } = this.props, l = this.activity;
    if (n || null == l) return null;
    let {
      name: _
    } = l;
    switch (l.type) {
      case Z.IIU.STREAMING:
        t = F.Z.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
          platform: [Z.ABu.TWITCH, Z.ABu.YOUTUBE].includes(_.toLowerCase()) ? _ : h.Z.get(Z.ABu.TWITCH).name
        });
        break;
      case Z.IIU.LISTENING:
        t = F.Z.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
          name: _
        });
        break;
      case Z.IIU.WATCHING:
        t = F.Z.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
          name: _
        });
        break;
      case Z.IIU.PLAYING:
        t = (0, S.Z)(l);
        break;
      case Z.IIU.COMPETING:
        t = F.Z.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
          name: _
        })
    }
    if (null != i) {
      var d;
      t = (0, D.yE)(null !== (d = null == l ? void 0 : l.flags) && void 0 !== d ? d : 0, Z.xjy.EMBEDDED) ? l.type === Z.IIU.WATCHING ? F.Z.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
        guildName: i.name
      }) : F.Z.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
        guildName: i.name
      }) : F.Z.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
        server: i.name
      })
    }
    return (null == l ? void 0 : l.type) === Z.IIU.HANG_STATUS && (t = F.Z.Messages.STATUS_LEAD_IN_JUST), (0, o.jsxs)("div", {
      className: Y.headerContainer,
      children: [(0, o.jsx)(E.Heading, {
        className: u()((0, M.l)(Y, "headerText", e ? "EmptyBody" : "Normal")),
        variant: r ? "text-xs/semibold" : "eyebrow",
        color: "ProfileV2" === a ? "header-primary" : void 0,
        children: (0, o.jsx)(G.Z, {
          children: t
        })
      }), null == s ? void 0 : s()]
    })
  }
  renderXboxImage() {
    return (0, o.jsx)("div", {
      className: Y.assets,
      children: (0, o.jsx)("img", {
        alt: "",
        src: h.Z.get(Z.ABu.XBOX).icon.customPNG,
        className: u()(this.getTypeClass("assetsLargeImage", "Xbox"))
      })
    })
  }
  renderImage(e) {
    var t, n, i;
    let r, s;
    if (e.type === Z.IIU.HANG_STATUS) return (0, o.jsx)("div", {
      className: Y.assets,
      children: (0, o.jsx)(p.Z, {
        hangStatusActivity: e,
        className: u()(Y.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
      })
    });
    let {
      type: l
    } = this.props, {
      assets: _,
      application_id: d
    } = e;
    if (null == _ || null == _.large_image && null == _.small_image) return null;
    (0, O.Z)(e) && (r = W[l]);
    let c = (0, A.Z)(e),
      I = null != _.large_image ? (0, o.jsx)("img", {
        alt: null !== (t = _.large_text) && void 0 !== t ? t : "",
        src: K(d, _.large_image, null != r ? r : [H.Si.LARGE, H.Si.LARGE]),
        className: u()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? Z.ABu.TWITCH : ""), {
          [null !== (n = this.getTypeClass("assetsLargeMask")) && void 0 !== n ? n : ""]: null != _.small_image
        }, {
          [Y.assetsLargeImageSpotify]: c
        })
      }) : null;
    if (c) I = (0, o.jsx)(E.Anchor, {
      onClick: this.handleOpenSpotifyAlbum,
      children: I
    });
    else if ((0, L.dS)(e)) {
      let t = (0, L.rq)(e);
      if (null == t) return null;
      I = (0, o.jsx)(V.ZP, {
        mask: V.ZP.Masks.SQUIRCLE,
        width: H.Si.SMALL,
        height: H.Si.SMALL,
        children: (0, o.jsx)("img", {
          src: null !== (i = v.ZP.getGuildIconURL({
            id: t.guildId,
            icon: _.small_image,
            size: H.Si.SMALL
          })) && void 0 !== i ? i : void 0,
          className: Y.assetsLargeImageVoiceChannel,
          alt: ""
        })
      })
    }
    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (I = (0, o.jsxs)("div", {
      className: Y.twitchImageContainer,
      children: [(0, o.jsxs)("div", {
        className: Y.twitchImageOverlay,
        children: [(0, o.jsx)(E.H, {
          className: Y.streamName,
          children: e.name
        }), (0, o.jsx)("div", {
          className: Y.streamGame,
          children: F.Z.Messages.STREAMER_PLAYING.format({
            game: e.details
          })
        })]
      }), (0, o.jsx)(E.Anchor, {
        className: Y.twitchBackgroundImage,
        href: e.url,
        children: I
      })]
    })), !(0, L.dS)(e) && null != _.small_image && (s = (0, o.jsx)(E.Tooltip, {
      text: "" !== _.small_text ? _.small_text : null,
      position: "top",
      children: e => {
        var t;
        return (0, o.jsx)("img", {
          alt: null !== (t = _.small_text) && void 0 !== t ? t : "",
          src: K(d, _.small_image, [H.Si.SMALL, H.Si.SMALL]),
          className: this.getTypeClass("assetsSmallImage", null == I ? "WithoutLargeImage" : void 0),
          ...e
        })
      }
    })), null == I) ? (0, o.jsx)("div", {
      className: Y.assets,
      children: s
    }) : (0, o.jsxs)("div", {
      className: Y.assets,
      children: [(0, o.jsx)(E.Tooltip, {
        text: null != _.large_text ? _.large_text : null,
        position: "top",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return null != I ? a.cloneElement(I, {
            onMouseEnter: t,
            onMouseLeave: n
          }) : null
        }
      }), s]
    })
  }
  renderGameImage(e) {
    let {
      user: t,
      type: n,
      application: i,
      activityGuild: r
    } = this.props;
    return null != e.assets || (0, f.Z)(e) || e.type !== Z.IIU.PLAYING || "ActivityFeed" === n || t.bot ? null : null == i && null != r ? (0, o.jsx)("div", {
      className: u()(Y.gameIcon, Y.screenshareIcon)
    }) : (0, o.jsx)(U.Z, {
      className: Y.gameIcon,
      game: i
    })
  }
  renderName(e) {
    let {
      user: t,
      application: n,
      hideName: i
    } = this.props;
    if (i) return null;
    let {
      details: r,
      type: s
    } = e;
    if (s === Z.IIU.CUSTOM_STATUS) return null;
    let a = (0, N.Z)(e),
      l = e.name,
      _ = l;
    if (s === Z.IIU.HANG_STATUS ? _ = (0, C.O8)(e) : a && null != n ? _ = (0, o.jsx)("span", {
        className: Y.activityName,
        children: _
      }) : !a && (l = r, _ = r, (0, A.Z)(e) && null != e.sync_id && null != r ? _ = (0, o.jsx)(E.Anchor, {
        className: Y.bodyLink,
        onClick: this.handleOpenSpotifyTrack,
        children: r
      }) : (0, L.dS)(e) && (_ = e.name)), null == _) return null;
    let d = null != q({
      activity: e
    }) && "BiteSizePopout" === this.props.type;
    return (0, o.jsx)(E.Text, {
      title: l,
      variant: "text-sm/semibold",
      className: u()((0, M.l)(Y, "name", t.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal"), d && Y.namePlatformIconMarginBiteSizePopout),
      children: _
    })
  }
  renderDetails(e) {
    let t;
    let {
      details: n,
      state: i
    } = e, {
      activityGuild: r
    } = this.props, s = n, a = n;
    if (e.type === Z.IIU.CUSTOM_STATUS) s = i;
    else if (e.type === Z.IIU.HANG_STATUS) s = null != r ? F.Z.Messages.HANG_STATUS_LOCATION.format({
      guildName: r.name
    }) : null, t = null != r ? () => {
      (0, g.X)(r.id)
    } : void 0;
    else if (!(0, N.Z)(e)) {
      if (a = s = i, (0, A.Z)(e) && null != i) s = F.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: a,
        artistsHook: (t, n) => (0, o.jsx)(k.Z, {
          artists: i,
          linkClassName: Y.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, n)
      });
      else if ((0, L.dS)(e)) {
        var l;
        s = null === (l = e.assets) || void 0 === l ? void 0 : l.small_text
      }
    }
    return null == s || 0 === s.length ? null : ((0, O.Z)(e) && (s = F.Z.Messages.STREAMER_PLAYING.format({
      game: s
    })), null != t) ? (0, o.jsx)(E.Clickable, {
      onClick: t,
      title: null != a ? a : void 0,
      className: Y.clickableDetails,
      children: s
    }) : (0, o.jsx)("div", {
      title: null != a ? a : void 0,
      className: (0, O.Z)(e) || (0, A.Z)(e) ? Y.detailsWrap : Y.details,
      children: s
    })
  }
  renderChannelDetails(e) {
    let {
      activityGuild: t,
      showChannelDetails: n,
      channel: i
    } = this.props;
    return n && null != t ? null == i ? (0, o.jsx)("div", {
      className: (0, O.Z)(e) || (0, A.Z)(e) ? Y.detailsWrap : Y.details,
      children: F.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
        guildName: t.name
      })
    }) : (0, o.jsxs)("div", {
      className: u()((0, O.Z)(e) || (0, A.Z)(e) ? Y.detailsWrap : Y.details, Y.guildDetails),
      children: [(0, o.jsx)(b.Z, {
        guild: t,
        size: b.Z.Sizes.SMOL,
        className: Y.guildIcon
      }), (0, o.jsx)(B.Z, {
        width: 12,
        height: 12
      }), (0, o.jsxs)("div", {
        className: Y.voiceChannelInfo,
        children: [(0, o.jsx)(x.Z, {
          width: 12,
          height: 12
        }), (0, o.jsx)(E.Text, {
          variant: "text-xs/normal",
          children: null == i ? void 0 : i.name
        })]
      })]
    }) : null
  }
  renderTimePlayed(e) {
    let {
      activityGuild: t
    } = this.props;
    if (!(0, N.Z)(e) || (0, A.Z)(e)) return null;
    let {
      timestamps: n
    } = e;
    return null == n ? null : (0, f.Z)(e) ? (0, o.jsx)(z, {
      timestamps: n
    }) : (0, o.jsx)(w.ZP, {
      start: n.start,
      location: w.ZP.Locations.USER_ACTIVITY,
      className: Y.playTime,
      isApplicationStreaming: null != t
    })
  }
  renderTimeBar(e) {
    if (!(0, A.Z)(e)) return null;
    let {
      timestamps: t
    } = e;
    if (null == t) return null;
    let {
      start: n,
      end: i
    } = t;
    return null == n || null == i ? null : (0, o.jsx)(P.Z, {
      start: n,
      end: i,
      className: this.getTypeClass("timeBar"),
      themed: "VoiceChannel" === this.props.type || "UserPopout" === this.props.type || "UserPopoutV2" === this.props.type || "ProfileV2" === this.props.type || "SimplifiedProfile" === this.props.type || "BiteSizePopout" === this.props.type
    })
  }
  renderState(e, t) {
    var n, i;
    let r;
    let {
      state: s,
      party: a,
      assets: l
    } = e, u = s, _ = u;
    return (!(0, N.Z)(e) && (_ = u = null == l ? void 0 : l.large_text, (0, A.Z)(e) && null != u && (u = F.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
      album: _,
      albumHook: (t, n) => null != e.sync_id && null != _ ? (0, o.jsx)(E.Anchor, {
        className: Y.bodyLink,
        onClick: this.handleOpenSpotifyAlbum,
        children: _
      }, n) : _
    }))), null != u && 0 !== u.length && e.type !== Z.IIU.CUSTOM_STATUS || (0, L.dS)(e)) ? ((null == a ? void 0 : a.size) == null && [H.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : "") ? r = F.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: "0",
      max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
    }) : (0, L.dS)(e) && (null == a ? void 0 : a.size) != null ? r = F.Z.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
      numSpeakers: a.size[0],
      numListeners: a.size[1] - a.size[0]
    }) : (null == a ? void 0 : a.size) != null && a.size.length >= 2 && (r = F.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: a.size[0],
      max: a.size[1]
    })), (0, o.jsxs)("div", {
      className: Y.state,
      children: [(0, o.jsx)("span", {
        title: _,
        children: u
      }), null != r ? (0, o.jsxs)("span", {
        children: [" ", r]
      }) : null]
    })) : null
  }
  render() {
    let e;
    let {
      type: t,
      renderActions: i,
      className: r,
      application: s,
      showReactions: a,
      onOpenGameProfile: l,
      canSeeGameProfile: _
    } = this.props, d = this.activity;
    if (null == d || d.type === Z.IIU.CUSTOM_STATUS) return null;
    let c = "UserPopout" === t || "UserPopoutV2" === t || "BiteSizePopout" === t,
      I = "Profile" === t || "ProfileV2" === t || "SimplifiedProfile" === t,
      T = "ActivityFeed" === t,
      h = "StreamPreview" === t,
      S = !1;
    (0, m.Z)(d) ? (e = this.renderXboxImage(), S = !0) : null == (e = this.renderImage(d)) && (S = null != (e = this.renderGameImage(d)));
    let f = this.renderName(d),
      N = this.renderDetails(d),
      A = this.renderState(d, s),
      O = this.renderTimePlayed(d),
      R = this.renderChannelDetails(d),
      C = null != i ? i() : null,
      p = this.renderTimeBar(d),
      g = null != d.application_id && _,
      L = ![e, f, N, A, O, p, C].some(e => null != e);
    return (0, o.jsxs)("div", {
      className: u()(this.getTypeClass("activity"), r),
      children: [this.renderHeader(L), (0, o.jsx)("div", {
        className: u()(S ? Y.bodyAlignCenter : Y.bodyNormal, a && !c && !h && Y.wrap),
        children: (0, o.jsxs)("div", {
          className: Y.activityDetails,
          children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, o.jsxs)(y.Z.Child, {
            className: u()((0, M.l)(Y, "content", S ? "GameImage" : null != e ? "Images" : "NoImages", t)),
            children: [(0, o.jsxs)(E.Clickable, {
              className: u()(g && Y.openGameProfile),
              onClick: g ? () => {
                (0, E.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("99387"), n.e("47403"), n.e("62038"), n.e("7613"), n.e("31141")]).then(n.bind(n, 644941));
                  return t => {
                    var n;
                    return (0, o.jsx)(e, {
                      applicationId: null !== (n = null == d ? void 0 : d.application_id) && void 0 !== n ? n : "",
                      ...t
                    })
                  }
                }), null == l || l()
              } : void 0,
              children: [f, N, A, O]
            }), R, c || h ? null : p, T ? C : null]
          }), I ? (0, o.jsx)("div", {
            className: Y.actions,
            children: C
          }) : null]
        })
      }), c ? p : null, c || h ? C : null, (0, o.jsx)(X, {
        activity: d
      })]
    })
  }
  constructor(...e) {
    super(...e), j(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      d()(null != e, "Spotify activity was null"), null == t || t(e)
    }), j(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        user: i
      } = this.props;
      d()(null != t, "Spotify activity was null"), null == n || n(t, i.id, e)
    }), j(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        user: n
      } = this.props;
      d()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
    })
  }
}
j(Q, "Types", i);
let J = e => {
  let t = (0, R.x)("UserActivity");
  return (0, o.jsx)(Q, {
    ...e,
    canSeeGameProfile: t
  })
};
J.Types = i, t.Z = J