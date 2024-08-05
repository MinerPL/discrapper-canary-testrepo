n.d(t, {
  Y: function() {
return r;
  }
}), n(789020), n(47120);
var r, i, a, s = n(735250),
  o = n(470079),
  l = n(120356),
  u = n.n(l),
  c = n(512722),
  d = n.n(c),
  _ = n(780384),
  E = n(481060),
  f = n(438139),
  h = n(410030),
  p = n(726542),
  m = n(925329),
  I = n(810568),
  T = n(168524),
  g = n(565138),
  S = n(833858),
  A = n(223135),
  N = n(707409),
  v = n(769654),
  O = n(750154),
  R = n(285952),
  C = n(514342),
  y = n(936195),
  D = n(806519),
  L = n(768581),
  b = n(630388),
  M = n(153066),
  P = n(740265),
  U = n(122810),
  w = n(833664),
  x = n(503438),
  G = n(802856),
  k = n(420660),
  B = n(39628),
  F = n(701488),
  V = n(981631),
  H = n(689938),
  Z = n(240545);

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(a = r || (r = {})).USER_POPOUT = 'UserPopout', a.USER_POPOUT_V2 = 'UserPopoutV2', a.ACTIVITY_FEED = 'ActivityFeed', a.PROFILE = 'Profile', a.PROFILE_V2 = 'ProfileV2', a.STREAM_PREVIEW = 'StreamPreview', a.VOICE_CHANNEL = 'VoiceChannel', a.SIMPLIFIED_PROFILE = 'SimplifiedProfile', a.BITE_SIZE_POPOUT = 'BiteSizePopout';
let j = {
StreamPreview: [
  108,
  60
],
UserPopout: [
  108,
  60
],
UserPopoutV2: [
  108,
  60
],
BiteSizePopout: [
  108,
  60
],
VoiceChannel: [
  108,
  60
],
Profile: [
  162,
  90
],
ProfileV2: [
  162,
  90
],
SimplifiedProfile: [
  162,
  90
],
ActivityFeed: [
  900,
  500
]
  },
  {
getAssetImage: W
  } = n(81063),
  K = (0, f.Z)(class extends o.PureComponent {
render() {
  return (0, s.jsx)('div', {
    className: Z.timestamp,
    children: this.props.message
  });
}
  });

function z(e) {
  let {
activity: t
  } = e, n = null;
  return (0, x.Z)(t) && (n = V.ABu.SPOTIFY), null != t.platform && [
V.M7m.PS4,
V.M7m.PS5
  ].includes(t.platform) && (n = V.ABu.PLAYSTATION), n;
}

function q(e) {
  let {
activity: t
  } = e, n = (0, h.ZP)(), r = z({
activity: t
  });
  if (null == r)
return null;
  let i = p.Z.get(r);
  return (0, s.jsx)('img', {
alt: '',
src: (0, _.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
className: Z.platformIcon
  });
}
class Q extends(i = o.PureComponent) {
  get activity() {
let {
  activity: e,
  activityGuild: t
} = this.props;
return null != t && (null == e ? void 0 : e.type) !== V.IIU.PLAYING && (null == e ? void 0 : e.type) !== V.IIU.WATCHING && (null == e ? void 0 : e.type) !== V.IIU.LISTENING && (null == e ? void 0 : e.type) !== V.IIU.HANG_STATUS ? {
  type: V.IIU.PLAYING,
  name: H.Z.Messages.SHARING_SCREEN
} : e;
  }
  getTypeClass(e, t) {
return (0, M.l)(Z, e, this.props.type, t);
  }
  isStreamerOnTypeProfile() {
return (0, k.Z)(this.activity) && ('Profile' === this.props.type || 'ProfileV2' === this.props.type);
  }
  isStreamerOnTypeActivityFeed() {
return (0, k.Z)(this.activity) && 'ActivityFeed' === this.props.type;
  }
  renderHeader(e) {
let t;
let {
  hideHeader: n,
  activityGuild: r,
  showChannelDetails: i,
  renderHeaderAccessory: a,
  type: o
} = this.props, l = this.activity;
if (n || null == l)
  return null;
let {
  name: c
} = l;
switch (l.type) {
  case V.IIU.STREAMING:
    t = H.Z.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
      platform: [
        V.ABu.TWITCH,
        V.ABu.YOUTUBE
      ].includes(c.toLowerCase()) ? c : p.Z.get(V.ABu.TWITCH).name
    });
    break;
  case V.IIU.LISTENING:
    t = H.Z.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
      name: c
    });
    break;
  case V.IIU.WATCHING:
    t = H.Z.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
      name: c
    });
    break;
  case V.IIU.PLAYING:
    t = (0, P.Z)(l);
    break;
  case V.IIU.COMPETING:
    t = H.Z.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
      name: c
    });
}
if (null != r) {
  var d;
  t = (0, b.yE)(null !== (d = null == l ? void 0 : l.flags) && void 0 !== d ? d : 0, V.xjy.EMBEDDED) ? l.type === V.IIU.WATCHING ? H.Z.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
    guildName: r.name
  }) : H.Z.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
    guildName: r.name
  }) : H.Z.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
    server: r.name
  });
}
return (null == l ? void 0 : l.type) === V.IIU.HANG_STATUS && (t = H.Z.Messages.STATUS_LEAD_IN_JUST), (0, s.jsxs)('div', {
  className: Z.headerContainer,
  children: [
    (0, s.jsx)(E.Heading, {
      className: u()((0, M.l)(Z, 'headerText', e ? 'EmptyBody' : 'Normal')),
      variant: i ? 'text-xs/semibold' : 'eyebrow',
      color: 'ProfileV2' === o ? 'header-primary' : void 0,
      children: (0, s.jsx)(C.Z, {
        children: t
      })
    }),
    null == a ? void 0 : a()
  ]
});
  }
  renderXboxImage() {
return (0, s.jsx)('div', {
  className: Z.assets,
  children: (0, s.jsx)('img', {
    alt: '',
    src: p.Z.get(V.ABu.XBOX).icon.customPNG,
    className: u()(this.getTypeClass('assetsLargeImage', 'Xbox'))
  })
});
  }
  renderImage(e) {
var t, n, r;
let i, a;
if (e.type === V.IIU.HANG_STATUS)
  return (0, s.jsx)('div', {
    className: Z.assets,
    children: (0, s.jsx)(A.Z, {
      hangStatusActivity: e,
      className: u()(Z.assetsHangStatus, this.getTypeClass('assetsSmallImage', 'WithoutLargeImage'))
    })
  });
let {
  type: l
} = this.props, {
  assets: c,
  application_id: d
} = e;
if (null == c || null == c.large_image && null == c.small_image)
  return null;
(0, k.Z)(e) && (i = j[l]);
let _ = (0, x.Z)(e),
  f = null != c.large_image ? (0, s.jsx)('img', {
    alt: null !== (t = c.large_text) && void 0 !== t ? t : '',
    src: W(d, c.large_image, null != i ? i : [
      F.Si.LARGE,
      F.Si.LARGE
    ]),
    className: u()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? V.ABu.TWITCH : ''), {
      [null !== (n = this.getTypeClass('assetsLargeMask')) && void 0 !== n ? n : '']: null != c.small_image
    }, {
      [Z.assetsLargeImageSpotify]: _
    })
  }) : null;
if (_)
  f = (0, s.jsx)(E.Anchor, {
    onClick: this.handleOpenSpotifyAlbum,
    children: f
  });
else if ((0, O.dS)(e)) {
  let t = (0, O.rq)(e);
  if (null == t)
    return null;
  f = (0, s.jsx)(D.ZP, {
    mask: D.ZP.Masks.SQUIRCLE,
    width: F.Si.SMALL,
    height: F.Si.SMALL,
    children: (0, s.jsx)('img', {
      src: null !== (r = L.ZP.getGuildIconURL({
        id: t.guildId,
        icon: c.small_image,
        size: F.Si.SMALL
      })) && void 0 !== r ? r : void 0,
      className: Z.assetsLargeImageVoiceChannel,
      alt: ''
    })
  });
}
return (this.isStreamerOnTypeActivityFeed() && null != e.url && '' !== e.url && (f = (0, s.jsxs)('div', {
  className: Z.twitchImageContainer,
  children: [
    (0, s.jsxs)('div', {
      className: Z.twitchImageOverlay,
      children: [
        (0, s.jsx)(E.H, {
          className: Z.streamName,
          children: e.name
        }),
        (0, s.jsx)('div', {
          className: Z.streamGame,
          children: H.Z.Messages.STREAMER_PLAYING.format({
            game: e.details
          })
        })
      ]
    }),
    (0, s.jsx)(E.Anchor, {
      className: Z.twitchBackgroundImage,
      href: e.url,
      children: f
    })
  ]
})), !(0, O.dS)(e) && null != c.small_image && (a = (0, s.jsx)(E.Tooltip, {
  text: '' !== c.small_text ? c.small_text : null,
  position: 'top',
  children: e => {
    var t;
    return (0, s.jsx)('img', {
      alt: null !== (t = c.small_text) && void 0 !== t ? t : '',
      src: W(d, c.small_image, [
        F.Si.SMALL,
        F.Si.SMALL
      ]),
      className: this.getTypeClass('assetsSmallImage', null == f ? 'WithoutLargeImage' : void 0),
      ...e
    });
  }
})), null == f) ? (0, s.jsx)('div', {
  className: Z.assets,
  children: a
}) : (0, s.jsxs)('div', {
  className: Z.assets,
  children: [
    (0, s.jsx)(E.Tooltip, {
      text: null != c.large_text ? c.large_text : null,
      position: 'top',
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: n
        } = e;
        return null != f ? o.cloneElement(f, {
          onMouseEnter: t,
          onMouseLeave: n
        }) : null;
      }
    }),
    a
  ]
});
  }
  renderGameImage(e) {
let {
  user: t,
  type: n,
  application: r,
  activityGuild: i
} = this.props;
return null != e.assets || (0, U.Z)(e) || e.type !== V.IIU.PLAYING || 'ActivityFeed' === n || t.bot ? null : null == r && null != i ? (0, s.jsx)('div', {
  className: u()(Z.gameIcon, Z.screenshareIcon)
}) : (0, s.jsx)(m.Z, {
  className: Z.gameIcon,
  game: r
});
  }
  renderName(e) {
let {
  user: t,
  application: n,
  hideName: r
} = this.props;
if (r)
  return null;
let {
  details: i,
  type: a
} = e;
if (a === V.IIU.CUSTOM_STATUS)
  return null;
let o = (0, w.Z)(e),
  l = e.name,
  c = l;
if (a === V.IIU.HANG_STATUS ? c = (0, S.O8)(e) : o && null != n ? c = (0, s.jsx)('span', {
    className: Z.activityName,
    children: c
  }) : !o && (l = i, c = i, (0, x.Z)(e) && null != e.sync_id && null != i ? c = (0, s.jsx)(E.Anchor, {
    className: Z.bodyLink,
    onClick: this.handleOpenSpotifyTrack,
    children: i
  }) : (0, O.dS)(e) && (c = e.name)), null == c)
  return null;
let d = null != z({
  activity: e
}) && 'BiteSizePopout' === this.props.type;
return (0, s.jsx)(E.Text, {
  title: l,
  variant: 'text-sm/semibold',
  className: u()((0, M.l)(Z, 'name', t.bot || this.isStreamerOnTypeProfile() ? 'wrap' : 'normal'), d && Z.namePlatformIconMarginBiteSizePopout),
  children: c
});
  }
  renderDetails(e) {
let t;
let {
  details: n,
  state: r
} = e, {
  activityGuild: i
} = this.props, a = n, o = n;
if (e.type === V.IIU.CUSTOM_STATUS)
  a = r;
else if (e.type === V.IIU.HANG_STATUS)
  a = null != i ? H.Z.Messages.HANG_STATUS_LOCATION.format({
    guildName: i.name
  }) : null, t = null != i ? () => {
    (0, v.X)(i.id);
  } : void 0;
else if (!(0, w.Z)(e)) {
  if (o = a = r, (0, x.Z)(e) && null != r)
    a = H.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
      artists: o,
      artistsHook: (t, n) => (0, s.jsx)(y.Z, {
        artists: r,
        linkClassName: Z.bodyLink,
        canOpen: null != e.sync_id,
        onOpenSpotifyArtist: this.handleOpenSpotifyArtist
      }, n)
    });
  else if ((0, O.dS)(e)) {
    var l;
    a = null === (l = e.assets) || void 0 === l ? void 0 : l.small_text;
  }
}
return null == a || 0 === a.length ? null : ((0, k.Z)(e) && (a = H.Z.Messages.STREAMER_PLAYING.format({
  game: a
})), null != t) ? (0, s.jsx)(E.Clickable, {
  onClick: t,
  title: null != o ? o : void 0,
  className: Z.clickableDetails,
  children: a
}) : (0, s.jsx)('div', {
  title: null != o ? o : void 0,
  className: (0, k.Z)(e) || (0, x.Z)(e) ? Z.detailsWrap : Z.details,
  children: a
});
  }
  renderChannelDetails(e) {
let {
  activityGuild: t,
  showChannelDetails: n,
  channel: r
} = this.props;
return n && null != t ? null == r ? (0, s.jsx)('div', {
  className: (0, k.Z)(e) || (0, x.Z)(e) ? Z.detailsWrap : Z.details,
  children: H.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: t.name
  })
}) : (0, s.jsxs)('div', {
  className: u()((0, k.Z)(e) || (0, x.Z)(e) ? Z.detailsWrap : Z.details, Z.guildDetails),
  children: [
    (0, s.jsx)(g.Z, {
      guild: t,
      size: g.Z.Sizes.SMOL,
      className: Z.guildIcon
    }),
    (0, s.jsx)(E.ChevronSmallRightIcon, {
      size: 'xxs',
      color: 'currentColor'
    }),
    (0, s.jsxs)('div', {
      className: Z.voiceChannelInfo,
      children: [
        (0, s.jsx)(E.VoiceNormalIcon, {
          size: 'xxs',
          color: 'currentColor'
        }),
        (0, s.jsx)(E.Text, {
          variant: 'text-xs/normal',
          children: null == r ? void 0 : r.name
        })
      ]
    })
  ]
}) : null;
  }
  renderTimePlayed(e) {
let {
  activityGuild: t
} = this.props;
if (!(0, w.Z)(e) || (0, x.Z)(e))
  return null;
let {
  timestamps: n
} = e;
return null == n ? null : (0, U.Z)(e) ? (0, s.jsx)(K, {
  timestamps: n
}) : (0, s.jsx)(N.ZP, {
  start: n.start,
  location: N.ZP.Locations.USER_ACTIVITY,
  className: Z.playTime,
  isApplicationStreaming: null != t
});
  }
  renderTimeBar(e) {
if (!(0, x.Z)(e))
  return null;
let {
  timestamps: t
} = e;
if (null == t)
  return null;
let {
  start: n,
  end: r
} = t;
return null == n || null == r ? null : (0, s.jsx)(B.Z, {
  start: n,
  end: r,
  className: this.getTypeClass('timeBar'),
  themed: 'VoiceChannel' === this.props.type || 'UserPopout' === this.props.type || 'UserPopoutV2' === this.props.type || 'ProfileV2' === this.props.type || 'SimplifiedProfile' === this.props.type || 'BiteSizePopout' === this.props.type
});
  }
  renderState(e, t) {
var n, r;
let i;
let {
  state: a,
  party: o,
  assets: l
} = e, u = a, c = u;
return (!(0, w.Z)(e) && (c = u = null == l ? void 0 : l.large_text, (0, x.Z)(e) && null != u && (u = H.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
  album: c,
  albumHook: (t, n) => null != e.sync_id && null != c ? (0, s.jsx)(E.Anchor, {
    className: Z.bodyLink,
    onClick: this.handleOpenSpotifyAlbum,
    children: c
  }, n) : c
}))), null != u && 0 !== u.length && e.type !== V.IIU.CUSTOM_STATUS || (0, O.dS)(e)) ? ((null == o ? void 0 : o.size) == null && [F.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '') ? i = H.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
  count: '0',
  max: null !== (r = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== r ? r : 0
}) : (0, O.dS)(e) && (null == o ? void 0 : o.size) != null ? i = H.Z.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
  numSpeakers: o.size[0],
  numListeners: o.size[1] - o.size[0]
}) : (null == o ? void 0 : o.size) != null && o.size.length >= 2 && (i = H.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
  count: o.size[0],
  max: o.size[1]
})), (0, s.jsxs)('div', {
  className: Z.state,
  children: [
    (0, s.jsx)('span', {
      title: c,
      children: u
    }),
    null != i ? (0, s.jsxs)('span', {
      children: [
        ' ',
        i
      ]
    }) : null
  ]
})) : null;
  }
  render() {
let e;
let {
  type: t,
  renderActions: n,
  className: r,
  application: i,
  showReactions: a,
  onClose: o,
  onOpenGameProfileModal: l
} = this.props, c = this.activity;
if (null == c || c.type === V.IIU.CUSTOM_STATUS)
  return null;
let d = 'UserPopout' === t || 'UserPopoutV2' === t || 'BiteSizePopout' === t,
  _ = 'Profile' === t || 'ProfileV2' === t || 'SimplifiedProfile' === t,
  f = 'ActivityFeed' === t,
  h = 'StreamPreview' === t,
  p = !1;
(0, G.Z)(c) ? (e = this.renderXboxImage(), p = !0) : null == (e = this.renderImage(c)) && (p = null != (e = this.renderGameImage(c)));
let m = this.renderName(c),
  I = this.renderDetails(c),
  T = this.renderState(c, i),
  g = this.renderTimePlayed(c),
  S = this.renderChannelDetails(c),
  A = null != n ? n() : null,
  N = this.renderTimeBar(c),
  v = ![
    e,
    m,
    I,
    T,
    g,
    N,
    A
  ].some(e => null != e);
return (0, s.jsxs)('div', {
  className: u()(this.getTypeClass('activity'), r),
  children: [
    this.renderHeader(v),
    (0, s.jsx)('div', {
      className: u()(p ? Z.bodyAlignCenter : Z.bodyNormal, a && !d && !h && Z.wrap),
      children: (0, s.jsxs)('div', {
        className: Z.activityDetails,
        children: [
          e,
          this.isStreamerOnTypeActivityFeed() ? null : (0, s.jsxs)(R.Z.Child, {
            className: u()((0, M.l)(Z, 'content', p ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
            children: [
              (0, s.jsxs)(E.Clickable, {
                className: u()(null != l && Z.openGameProfile),
                onClick: null != l ? () => {
                  l(), null == o || o();
                } : void 0,
                children: [
                  m,
                  I,
                  T,
                  g
                ]
              }),
              S,
              d || h ? null : N,
              f ? A : null
            ]
          }),
          _ ? (0, s.jsx)('div', {
            className: Z.actions,
            children: A
          }) : null
        ]
      })
    }),
    d ? N : null,
    d || h ? A : null,
    (0, s.jsx)(q, {
      activity: c
    })
  ]
});
  }
  constructor(...e) {
super(...e), Y(this, 'handleOpenSpotifyTrack', () => {
  let {
    activity: e,
    onOpenSpotifyTrack: t
  } = this.props;
  d()(null != e, 'Spotify activity was null'), null == t || t(e);
}), Y(this, 'handleOpenSpotifyArtist', e => {
  let {
    activity: t,
    onOpenSpotifyArtist: n,
    user: r
  } = this.props;
  d()(null != t, 'Spotify activity was null'), null == n || n(t, r.id, e);
}), Y(this, 'handleOpenSpotifyAlbum', () => {
  let {
    activity: e,
    onOpenSpotifyAlbum: t,
    user: n
  } = this.props;
  d()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
});
  }
}
Y(Q, 'Types', r);
let X = e => {
  var t, n, r;
  let i = (0, T.Z)({
location: 'UserActivity',
applicationId: null !== (r = null === (t = e.application) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null === (n = e.activity) || void 0 === n ? void 0 : n.application_id,
source: I.m1.UserProfile,
sourceUserId: e.user.id,
trackEntryPointImpression: !0
  });
  return (0, s.jsx)(Q, {
...e,
onOpenGameProfileModal: i
  });
};
X.Types = r, t.Z = X;