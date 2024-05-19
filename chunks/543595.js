"use strict";
n.r(t), n.d(t, {
  Types: function() {
    return i
  }
}), n("789020"), n("47120");
var i, r, a, s = n("735250"),
  o = n("470079"),
  l = n("120356"),
  u = n.n(l),
  d = n("512722"),
  _ = n.n(d),
  c = n("780384"),
  E = n("481060"),
  I = n("438139"),
  T = n("410030"),
  f = n("726542"),
  S = n("740265"),
  h = n("122810"),
  A = n("833664"),
  m = n("503438"),
  N = n("802856"),
  p = n("420660"),
  O = n("471445"),
  C = n("833858"),
  R = n("223135"),
  g = n("769654"),
  L = n("750154"),
  v = n("768581"),
  D = n("630388"),
  M = n("153066"),
  y = n("672938"),
  P = n("285952"),
  U = n("366695"),
  b = n("346656"),
  G = n("514342"),
  w = n("366966"),
  k = n("936195"),
  B = n("692437"),
  V = n("632184"),
  x = n("806519"),
  F = n("981631"),
  H = n("701488"),
  Y = n("689938"),
  j = n("217833");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a = i || (i = {})).USER_POPOUT = "UserPopout", a.USER_POPOUT_V2 = "UserPopoutV2", a.ACTIVITY_FEED = "ActivityFeed", a.PROFILE = "Profile", a.PROFILE_V2 = "ProfileV2", a.STREAM_PREVIEW = "StreamPreview", a.VOICE_CHANNEL = "VoiceChannel", a.SIMPLIFIED_PROFILE = "SimplifiedProfile", a.BITE_SIZE_POPOUT = "BiteSizePopout";
let K = {
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
    getAssetImage: z
  } = n("81063"),
  Z = (0, I.default)(class extends o.PureComponent {
    render() {
      return (0, s.jsx)("div", {
        className: j.timestamp,
        children: this.props.message
      })
    }
  });

function X(e) {
  let {
    activity: t
  } = e, n = null;
  return (0, m.default)(t) && (n = F.PlatformTypes.SPOTIFY), null != t.platform && [F.ActivityGamePlatforms.PS4, F.ActivityGamePlatforms.PS5].includes(t.platform) && (n = F.PlatformTypes.PLAYSTATION), n
}

function Q(e) {
  let {
    activity: t
  } = e, n = (0, T.default)(), i = X({
    activity: t
  });
  if (null == i) return null;
  let r = f.default.get(i);
  return (0, s.jsx)("img", {
    alt: "",
    src: (0, c.isThemeLight)(n) ? r.icon.lightSVG : r.icon.darkSVG,
    className: j.platformIcon
  })
}
class q extends(r = o.PureComponent) {
  get activity() {
    let {
      activity: e,
      activityGuild: t
    } = this.props;
    return null != t && (null == e ? void 0 : e.type) !== F.ActivityTypes.PLAYING && (null == e ? void 0 : e.type) !== F.ActivityTypes.WATCHING && (null == e ? void 0 : e.type) !== F.ActivityTypes.LISTENING && (null == e ? void 0 : e.type) !== F.ActivityTypes.HANG_STATUS ? {
      type: F.ActivityTypes.PLAYING,
      name: Y.default.Messages.SHARING_SCREEN
    } : e
  }
  getTypeClass(e, t) {
    return (0, M.getClass)(j, e, this.props.type, t)
  }
  isStreamerOnTypeProfile() {
    return (0, p.default)(this.activity) && ("Profile" === this.props.type || "ProfileV2" === this.props.type)
  }
  isStreamerOnTypeActivityFeed() {
    return (0, p.default)(this.activity) && "ActivityFeed" === this.props.type
  }
  renderHeader(e) {
    let t;
    let {
      hideHeader: n,
      activityGuild: i,
      channel: r,
      renderHeaderAccessory: a,
      type: o
    } = this.props, l = this.activity;
    if (n || null == l) return null;
    let {
      name: d
    } = l;
    switch (l.type) {
      case F.ActivityTypes.STREAMING:
        t = Y.default.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
          platform: [F.PlatformTypes.TWITCH, F.PlatformTypes.YOUTUBE].includes(d.toLowerCase()) ? d : f.default.get(F.PlatformTypes.TWITCH).name
        });
        break;
      case F.ActivityTypes.LISTENING:
        t = Y.default.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
          name: d
        });
        break;
      case F.ActivityTypes.WATCHING:
        t = Y.default.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
          name: d
        });
        break;
      case F.ActivityTypes.PLAYING:
        t = (0, S.default)(l);
        break;
      case F.ActivityTypes.COMPETING:
        t = Y.default.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
          name: d
        })
    }
    if (null != i) {
      var _;
      t = (0, D.hasFlag)(null !== (_ = null == l ? void 0 : l.flags) && void 0 !== _ ? _ : 0, F.ActivityFlags.EMBEDDED) ? l.type === F.ActivityTypes.WATCHING ? Y.default.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
        guildName: i.name
      }) : Y.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
        guildName: i.name
      }) : Y.default.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
        server: i.name
      })
    }(null == l ? void 0 : l.type) === F.ActivityTypes.HANG_STATUS && (t = Y.default.Messages.STATUS_LEAD_IN_JUST);
    let c = (0, O.getChannelIconComponent)(r, i);
    return null != r && (t = r.name), (0, s.jsxs)("div", {
      className: j.headerContainer,
      children: [null != r && null !== c ? (0, s.jsx)(c, {
        className: u()(j.icon)
      }) : null, (0, s.jsx)(E.Heading, {
        className: (0, M.getClass)(j, "headerText", e ? "EmptyBody" : "Normal"),
        variant: "eyebrow",
        color: "ProfileV2" === o ? "header-primary" : void 0,
        children: (0, s.jsx)(G.default, {
          children: t
        })
      }), null == a ? void 0 : a()]
    })
  }
  renderXboxImage() {
    return (0, s.jsx)("div", {
      className: j.assets,
      children: (0, s.jsx)("img", {
        alt: "",
        src: f.default.get(F.PlatformTypes.XBOX).icon.customPNG,
        className: u()(this.getTypeClass("assetsLargeImage", "Xbox"))
      })
    })
  }
  renderImage(e) {
    var t, n, i;
    let r, a;
    if (e.type === F.ActivityTypes.HANG_STATUS) return (0, s.jsx)("div", {
      className: j.assets,
      children: (0, s.jsx)(R.default, {
        hangStatusActivity: e,
        className: u()(j.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
      })
    });
    let {
      type: l
    } = this.props, {
      assets: d,
      application_id: _
    } = e;
    if (null == d || null == d.large_image && null == d.small_image) return null;
    (0, p.default)(e) && (r = K[l]);
    let c = (0, m.default)(e),
      I = null != d.large_image ? (0, s.jsx)("img", {
        alt: null !== (t = d.large_text) && void 0 !== t ? t : "",
        src: z(_, d.large_image, null != r ? r : [H.ImageSizes.LARGE, H.ImageSizes.LARGE]),
        className: u()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? F.PlatformTypes.TWITCH : ""), {
          [null !== (n = this.getTypeClass("assetsLargeMask")) && void 0 !== n ? n : ""]: null != d.small_image
        }, {
          [j.assetsLargeImageSpotify]: c
        })
      }) : null;
    if (c) I = (0, s.jsx)(E.Anchor, {
      onClick: this.handleOpenSpotifyAlbum,
      children: I
    });
    else if ((0, L.isStageActivity)(e)) {
      let t = (0, L.unpackStageChannelParty)(e);
      if (null == t) return null;
      I = (0, s.jsx)(x.default, {
        mask: x.default.Masks.SQUIRCLE,
        width: H.ImageSizes.SMALL,
        height: H.ImageSizes.SMALL,
        children: (0, s.jsx)("img", {
          src: null !== (i = v.default.getGuildIconURL({
            id: t.guildId,
            icon: d.small_image,
            size: H.ImageSizes.SMALL
          })) && void 0 !== i ? i : void 0,
          className: j.assetsLargeImageVoiceChannel,
          alt: ""
        })
      })
    }
    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (I = (0, s.jsxs)("div", {
      className: j.twitchImageContainer,
      children: [(0, s.jsxs)("div", {
        className: j.twitchImageOverlay,
        children: [(0, s.jsx)(E.H, {
          className: j.streamName,
          children: e.name
        }), (0, s.jsx)("div", {
          className: j.streamGame,
          children: Y.default.Messages.STREAMER_PLAYING.format({
            game: e.details
          })
        })]
      }), (0, s.jsx)(E.Anchor, {
        className: j.twitchBackgroundImage,
        href: e.url,
        children: I
      })]
    })), !(0, L.isStageActivity)(e) && null != d.small_image && (a = (0, s.jsx)(E.Tooltip, {
      text: "" !== d.small_text ? d.small_text : null,
      position: "top",
      children: e => {
        var t;
        return (0, s.jsx)("img", {
          alt: null !== (t = d.small_text) && void 0 !== t ? t : "",
          src: z(_, d.small_image, [H.ImageSizes.SMALL, H.ImageSizes.SMALL]),
          className: this.getTypeClass("assetsSmallImage", null == I ? "WithoutLargeImage" : void 0),
          ...e
        })
      }
    })), null == I) ? (0, s.jsx)("div", {
      className: j.assets,
      children: a
    }) : (0, s.jsxs)("div", {
      className: j.assets,
      children: [(0, s.jsx)(E.Tooltip, {
        text: null != d.large_text ? d.large_text : null,
        position: "top",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return null != I ? o.cloneElement(I, {
            onMouseEnter: t,
            onMouseLeave: n
          }) : null
        }
      }), a]
    })
  }
  renderGameImage(e) {
    let {
      user: t,
      type: n,
      application: i,
      activityGuild: r
    } = this.props;
    return null != e.assets || (0, h.default)(e) || e.type !== F.ActivityTypes.PLAYING || "ActivityFeed" === n || t.bot ? null : null == i && null != r ? (0, s.jsx)("div", {
      className: u()(j.gameIcon, j.screenshareIcon)
    }) : (0, s.jsx)(U.default, {
      className: j.gameIcon,
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
      type: a
    } = e;
    if (a === F.ActivityTypes.CUSTOM_STATUS) return null;
    let o = (0, A.default)(e),
      l = e.name,
      d = l;
    if (a === F.ActivityTypes.HANG_STATUS ? d = (0, C.getHangStatusText)(e) : o && null != n ? d = (0, s.jsx)("span", {
        className: j.activityName,
        children: d
      }) : !o && (l = r, d = r, (0, m.default)(e) && null != e.sync_id && null != r ? d = (0, s.jsx)(E.Anchor, {
        className: j.bodyLink,
        onClick: this.handleOpenSpotifyTrack,
        children: r
      }) : (0, L.isStageActivity)(e) && (d = e.name)), null == d) return null;
    let _ = null != X({
      activity: e
    }) && "BiteSizePopout" === this.props.type;
    return (0, s.jsx)(E.Text, {
      title: l,
      variant: "text-sm/semibold",
      className: u()((0, M.getClass)(j, "name", t.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal"), _ && j.namePlatformIconMarginBiteSizePopout),
      children: d
    })
  }
  renderDetails(e) {
    let t;
    let {
      details: n,
      state: i
    } = e, {
      activityGuild: r
    } = this.props, a = n, o = n;
    if (e.type === F.ActivityTypes.CUSTOM_STATUS) a = i;
    else if (e.type === F.ActivityTypes.HANG_STATUS) a = null != r ? Y.default.Messages.HANG_STATUS_LOCATION.format({
      guildName: r.name
    }) : null, t = null != r ? () => {
      (0, g.transitionToGuild)(r.id)
    } : void 0;
    else if (!(0, A.default)(e)) {
      if (o = a = i, (0, m.default)(e) && null != i) a = Y.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: o,
        artistsHook: (t, n) => (0, s.jsx)(k.default, {
          artists: i,
          linkClassName: j.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, n)
      });
      else if ((0, L.isStageActivity)(e)) {
        var l;
        a = null === (l = e.assets) || void 0 === l ? void 0 : l.small_text
      }
    }
    return null == a || 0 === a.length ? null : ((0, p.default)(e) && (a = Y.default.Messages.STREAMER_PLAYING.format({
      game: a
    })), null != t) ? (0, s.jsx)(E.Clickable, {
      onClick: t,
      title: null != o ? o : void 0,
      className: j.clickableDetails,
      children: a
    }) : (0, s.jsx)("div", {
      title: null != o ? o : void 0,
      className: (0, p.default)(e) || (0, m.default)(e) ? j.detailsWrap : j.details,
      children: a
    })
  }
  renderChannelDetails(e) {
    let {
      activityGuild: t,
      showChannelDetails: n,
      channel: i
    } = this.props;
    return n && null != t ? null == i ? (0, s.jsx)("div", {
      className: (0, p.default)(e) || (0, m.default)(e) ? j.detailsWrap : j.details,
      children: Y.default.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
        guildName: t.name
      })
    }) : (0, s.jsxs)("div", {
      className: u()((0, p.default)(e) || (0, m.default)(e) ? j.detailsWrap : j.details, j.guildDetails),
      children: [(0, s.jsx)(b.default, {
        guild: t,
        size: b.default.Sizes.SMOL,
        className: j.guildIcon
      }), (0, s.jsx)(B.default, {
        width: 12,
        height: 12
      }), (0, s.jsxs)("div", {
        className: j.voiceChannelInfo,
        children: [(0, s.jsx)(V.default, {
          width: 12,
          height: 12
        }), (0, s.jsx)(E.Text, {
          variant: "text-xs/semibold",
          children: null == i ? void 0 : i.name
        })]
      })]
    }) : null
  }
  renderTimePlayed(e) {
    let {
      activityGuild: t
    } = this.props;
    if (!(0, A.default)(e) || (0, m.default)(e)) return null;
    let {
      timestamps: n
    } = e;
    return null == n ? null : (0, h.default)(e) ? (0, s.jsx)(Z, {
      timestamps: n
    }) : (0, s.jsx)(w.default, {
      start: n.start,
      location: w.default.Locations.USER_ACTIVITY,
      className: j.playTime,
      isApplicationStreaming: null != t
    })
  }
  renderTimeBar(e) {
    if (!(0, m.default)(e)) return null;
    let {
      timestamps: t
    } = e;
    if (null == t) return null;
    let {
      start: n,
      end: i
    } = t;
    return null == n || null == i ? null : (0, s.jsx)(y.default, {
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
      state: a,
      party: o,
      assets: l
    } = e, u = a, d = u;
    return (!(0, A.default)(e) && (d = u = null == l ? void 0 : l.large_text, (0, m.default)(e) && null != u && (u = Y.default.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
      album: d,
      albumHook: (t, n) => null != e.sync_id && null != d ? (0, s.jsx)(E.Anchor, {
        className: j.bodyLink,
        onClick: this.handleOpenSpotifyAlbum,
        children: d
      }, n) : d
    }))), null != u && 0 !== u.length && e.type !== F.ActivityTypes.CUSTOM_STATUS || (0, L.isStageActivity)(e)) ? ((null == o ? void 0 : o.size) == null && [(0, H.POKER_NIGHT_APPLICATION_ID)].includes(null !== (n = e.application_id) && void 0 !== n ? n : "") ? r = Y.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: "0",
      max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
    }) : (0, L.isStageActivity)(e) && (null == o ? void 0 : o.size) != null ? r = Y.default.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
      numSpeakers: o.size[0],
      numListeners: o.size[1] - o.size[0]
    }) : (null == o ? void 0 : o.size) != null && o.size.length >= 2 && (r = Y.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: o.size[0],
      max: o.size[1]
    })), (0, s.jsxs)("div", {
      className: j.state,
      children: [(0, s.jsx)("span", {
        title: d,
        children: u
      }), null != r ? (0, s.jsxs)("span", {
        children: [" ", r]
      }) : null]
    })) : null
  }
  render() {
    let e;
    let {
      type: t,
      renderActions: n,
      className: i,
      application: r,
      showReactions: a
    } = this.props, o = this.activity;
    if (null == o || o.type === F.ActivityTypes.CUSTOM_STATUS) return null;
    let l = "UserPopout" === t || "UserPopoutV2" === t || "BiteSizePopout" === t,
      d = "Profile" === t || "ProfileV2" === t || "SimplifiedProfile" === t,
      _ = "ActivityFeed" === t,
      c = "StreamPreview" === t,
      E = !1;
    (0, N.default)(o) ? (e = this.renderXboxImage(), E = !0) : null == (e = this.renderImage(o)) && (E = null != (e = this.renderGameImage(o)));
    let I = this.renderName(o),
      T = this.renderDetails(o),
      f = this.renderState(o, r),
      S = this.renderTimePlayed(o),
      h = this.renderChannelDetails(o),
      A = null != n ? n() : null,
      m = this.renderTimeBar(o),
      p = ![e, I, T, f, S, m, A].some(e => null != e);
    return (0, s.jsxs)("div", {
      className: u()(this.getTypeClass("activity"), i),
      children: [this.renderHeader(p), (0, s.jsx)("div", {
        className: u()(E ? j.bodyAlignCenter : j.bodyNormal, a && !l && !c && j.wrap),
        children: (0, s.jsxs)("div", {
          className: j.activityDetails,
          children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, s.jsxs)(P.default.Child, {
            className: u()((0, M.getClass)(j, "content", E ? "GameImage" : null != e ? "Images" : "NoImages", t)),
            children: [I, T, f, S, h, l || c ? null : m, _ ? A : null]
          }), d ? (0, s.jsx)("div", {
            className: j.actions,
            children: A
          }) : null]
        })
      }), l ? m : null, l || c ? A : null, (0, s.jsx)(Q, {
        activity: o
      })]
    })
  }
  constructor(...e) {
    super(...e), W(this, "handleOpenSpotifyTrack", () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      _()(null != e, "Spotify activity was null"), null == t || t(e)
    }), W(this, "handleOpenSpotifyArtist", e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        user: i
      } = this.props;
      _()(null != t, "Spotify activity was null"), null == n || n(t, i.id, e)
    }), W(this, "handleOpenSpotifyAlbum", () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        user: n
      } = this.props;
      _()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
    })
  }
}
W(q, "Types", i), t.default = q