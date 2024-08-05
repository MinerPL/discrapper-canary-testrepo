n(47120);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(512722),
  o = n.n(s),
  c = n(442837),
  u = n(704215),
  d = n(692547),
  h = n(481060),
  p = n(988298),
  _ = n(475179),
  f = n(925549),
  m = n(872810),
  g = n(438139),
  C = n(730749),
  I = n(607070),
  E = n(566620),
  N = n(317381),
  x = n(620662),
  S = n(835473),
  v = n(67212),
  Z = n(757454),
  T = n(552740),
  L = n(933557),
  A = n(311352),
  b = n(730417),
  M = n(524347),
  R = n(853197),
  O = n(616360),
  y = n(858064),
  P = n(594190),
  j = n(925329),
  D = n(810568),
  U = n(168524),
  G = n(569545),
  w = n(382182),
  k = n(74299),
  B = n(914923),
  H = n(165393),
  V = n(989941),
  F = n(803647),
  W = n(690221),
  Y = n(231664),
  z = n(759198),
  K = n(131704),
  q = n(199902),
  Q = n(314897),
  J = n(592125),
  X = n(984933),
  $ = n(430824),
  ee = n(131951),
  et = n(496675),
  en = n(158776),
  ei = n(699516),
  el = n(944486),
  er = n(885110),
  ea = n(594174),
  es = n(449224),
  eo = n(672752),
  ec = n(976401),
  eu = n(333454),
  ed = n(864441),
  eh = n(368666),
  ep = n(626135),
  e_ = n(358085),
  ef = n(793224),
  em = n(978769),
  eg = n(981631),
  eC = n(918559),
  eI = n(702512),
  eE = n(689938),
  eN = n(115851);

function ex(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let eS = (0, g.Z)(function(e) {
  let {
message: t
  } = e;
  return (0, i.jsx)(eu.Z, {
children: t
  });
});
class ev extends l.PureComponent {
  componentDidUpdate(e) {
!e.dropsActivityPanelExperienceBlocked && this.props.dropsActivityPanelExperienceBlocked && this.setState({
  isDropsActivityPanelTooltipOpen: !1
});
  }
  isJoinableActivity() {
let {
  application: e,
  activity: t,
  embeddedActivity: n
} = this.props;
return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === eg.IIU.PLAYING && (0, x.Z)(t, eg.xjy.JOIN));
  }
  renderGoLiveButton() {
let e, t, n, l;
let {
  canGoLive: r,
  guildId: a,
  isStreaming: s,
  channel: o,
  canStream: c,
  runningGame: u,
  embeddedActivity: d
} = this.props;
return (null != u || null == d) && (s || r && null != u) ? (s ? (e = !1, t = this.handleClickStopStreamingButton, n = h.ScreenXIcon, l = eE.Z.Messages.STOP_STREAMING) : c ? (e = !1, t = this.handleClickGoLiveButton, n = h.ScreenArrowIcon, l = null != u ? eE.Z.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({
  game: u.name
}) : eE.Z.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = h.ScreenArrowIcon, l = null != o && (0, K.vd)(o.type) ? eE.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != a ? eE.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : eE.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, i.jsx)('div', {
  className: eN.panelButtonContainer,
  children: (0, i.jsx)(ec.Z, {
    tooltipText: l,
    disabled: e,
    onClick: t,
    icon: n
  })
})) : null;
  }
  renderInviteButton() {
let {
  embeddedActivity: e
} = this.props;
return this.isJoinableActivity() && null == e ? (0, i.jsx)(ec.Z, {
  tooltipText: eE.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
  onClick: this.handleClickInviteButton,
  icon: h.GroupPlusIcon,
  iconForeground: eN.__invalid_actionIcon
}) : null;
  }
  renderDropsButton() {
let {
  dropsTooltipAction: e,
  dropsPartnerGame: t
} = this.props;
if (null == t)
  return null;
let n = this.state.isDropsActivityPanelTooltipOpen,
  l = () => this.setState({
    isDropsActivityPanelTooltipOpen: !1
  });
return (0, i.jsx)(h.Popout, {
  shouldShow: n,
  position: 'top',
  align: 'center',
  onRequestClose: l,
  renderPopout: () => (0, i.jsx)(y.Z, {
    partnerGame: t,
    tooltipAction: e,
    onClose: l
  }),
  children: () => (0, i.jsxs)(i.Fragment, {
    children: [
      this.state.showDropsSparkles && this.renderSparkles(),
      (0, i.jsx)(ec.Z, {
        'aria-label': eE.Z.Messages.DROPS_ENABLED,
        tooltipText: n ? null : eE.Z.Messages.DROPS_ENABLED,
        onClick: this.handleClickDropsButton,
        icon: O.Z
      })
    ]
  })
});
  }
  renderLeaveEmbeddedActivityButton() {
let {
  embeddedActivity: e,
  channel: t
} = this.props;
return null == e || null == t ? null : (0, i.jsx)(ec.Z, {
  tooltipText: eE.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
  onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
  icon: h.DoorExitIcon,
  iconForeground: eN.__invalid_actionIcon
});
  }
  renderBroadcastButton() {
let {
  channel: e
} = this.props;
return null != e && (0, K.vd)(e.type) ? null : (0, i.jsx)(ef.Z, {});
  }
  renderBroadcastSettingsButton() {
let {
  broadcast: e
} = this.props;
return null == e ? null : (0, i.jsx)(em.Z, {});
  }
  renderSparkles() {
let {
  useReducedMotion: e
} = this.props;
async function t() {
  let {
    default: e
  } = await n.e('5217').then(n.t.bind(n, 801048, 19));
  return e;
}
return (0, i.jsx)('div', {
  className: eN.sparkleContainer,
  children: (0, i.jsx)(h.LottieAnimation, {
    importData: t,
    shouldAnimate: !e,
    className: eN.sparkles
  })
});
  }
  renderActions() {
let e = this.renderGoLiveButton(),
  t = this.renderDropsButton(),
  n = this.renderInviteButton(),
  l = this.renderLeaveEmbeddedActivityButton(),
  r = this.renderClipsButton(),
  a = this.renderBroadcastButton(),
  s = this.renderBroadcastSettingsButton();
return null == e && null == n && null == l ? null : (0, i.jsxs)('div', {
  className: eN.actions,
  children: [
    a,
    e,
    s,
    n,
    null == e ? l : r,
    t
  ]
});
  }
  getGameName() {
let {
  runningGame: e,
  application: t
} = this.props;
return null != t ? t.name : null != e ? e.name : eE.Z.Messages.STATUS_UNKNOWN;
  }
  renderGame() {
let {
  isStreaming: e,
  dropsPartnerGame: t,
  application: n,
  runningGame: l
} = this.props, r = this.getGameName();
return (0, i.jsxs)('div', {
  className: eN.gameWrapper,
  children: [
    (0, i.jsxs)('div', {
      className: eN.gameIconWrapper,
      children: [
        (0, i.jsx)(j.Z, {
          className: eN.gameIcon,
          game: n,
          pid: null == l ? void 0 : l.pid
        }),
        e ? (0, i.jsx)(h.VideoIcon, {
          size: 'md',
          color: 'currentColor',
          className: eN.liveBadge
        }) : null
      ]
    }),
    (0, i.jsx)('div', {
      className: a()(eN.info, {
        [eN.infoWithDrops]: null != t
      }),
      children: null != r ? (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(eZ, {
            name: r,
            applicationId: null == n ? void 0 : n.id
          }),
          null != t && (0, i.jsx)('div', {
            className: eN.dropsBadgeWrapper,
            children: (0, i.jsx)(h.TextBadge, {
              text: eE.Z.Messages.DROPS_AVAILABLE,
              color: d.Z.unsafe_rawColors.BRAND_500.css,
              className: eN.dropsBadge
            })
          })
        ]
      }) : null
    })
  ]
});
  }
  renderScreenshare() {
let {
  isStreaming: e,
  dropsPartnerGame: t,
  streamMetadata: n,
  streamQualityIndicator: l
} = this.props, {
  title: r,
  sanitizedTitle: s
} = (0, B.Z)(n);
return (0, i.jsxs)('div', {
  className: eN.gameWrapper,
  children: [
    e ? (0, i.jsx)(H.Z, {
      title: s
    }) : (0, i.jsx)(eh.ZP, {
      look: eh.ZP.Looks.GRAY,
      size: eh.ZP.Sizes.SMALL,
      className: eN.liveIndicator
    }),
    (0, i.jsxs)('div', {
      className: a()(eN.info, {
        [eN.infoWithDrops]: null != t
      }),
      children: [
        (0, i.jsx)(ed.Z, {
          children: r
        }),
        null != l && (0, i.jsxs)('div', {
          className: eN.perksDemoContainer,
          children: [
            (0, i.jsx)(h.NitroWheelIcon, {
              size: 'xxs',
              color: eo.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(z.Z, {
              className: eN.perksDemoText,
              variant: 'text-xxs/semibold',
              children: l
            })
          ]
        }),
        null != t && (0, i.jsx)('div', {
          className: eN.dropsBadgeWrapper,
          children: (0, i.jsx)(h.TextBadge, {
            text: eE.Z.Messages.DROPS_AVAILABLE,
            color: d.Z.unsafe_rawColors.BRAND_500.css,
            className: eN.dropsBadge
          })
        })
      ]
    })
  ]
});
  }
  renderEmbeddedActivity() {
let e;
let {
  application: t,
  embeddedActivity: n,
  channel: l,
  channelName: r,
  guildForConnectedChannel: a
} = this.props;
if (null == n || null == l || null == t)
  return null;
let s = {
    start: n.connectedSince
  },
  o = r;
null != a ? (e = eg.Z5c.CHANNEL(a.id, l.id), o = ''.concat(o, ' / ').concat(a.name)) : e = eg.Z5c.CHANNEL(eg.ME, l.id);
let c = (0, i.jsx)(W.Z, {
  href: e,
  onClick: this.handleApplicationLinkClick,
  children: (0, i.jsx)(eu.Z, {
    className: eN.channel,
    children: o
  })
});
return (0, i.jsxs)('div', {
  className: eN.gameWrapper,
  children: [
    (0, i.jsx)(j.Z, {
      className: eN.gameIcon,
      game: t,
      size: j.Z.Sizes.SMALL
    }),
    (0, i.jsxs)('div', {
      className: eN.info,
      children: [
        (0, i.jsx)(W.Z, {
          href: e,
          onClick: this.handleApplicationLinkClick,
          children: (0, i.jsx)(ed.Z, {
            className: eN.activityName,
            children: t.name
          })
        }),
        (0, K.Qm)(l.type) ? c : (0, i.jsx)(eS, {
          timestamps: s
        })
      ]
    })
  ]
});
  }
  render() {
let {
  canGoLive: e,
  embeddedActivity: t,
  runningGame: n,
  isStreaming: l,
  streamMetadata: r,
  className: s
} = this.props;
return l || (this.isJoinableActivity() || e) && (null != n || null != t) ? (0, i.jsx)('div', {
  className: a()(eN.panel, s),
  children: (0, i.jsxs)('div', {
    className: eN.body,
    children: [
      (() => null == n || l && (null == r ? void 0 : r.pid) == null ? null != t ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame())(),
      this.renderActions()
    ]
  })
}) : null;
  }
  constructor(...e) {
super(...e), ex(this, 'modalKey', void 0), ex(this, 'state', {
  isDropsActivityPanelTooltipOpen: !1,
  showDropsSparkles: this.props.showDropsSparkles
}), ex(this, 'startBroadcast', () => {
  let {
    stream: e,
    channel: t,
    runningGame: n
  } = this.props, i = null != t && (0, K.vd)(t.type) ? t : null;
  null != i && null != n && (null == e ? (0, m.tE)({
    channelId: i.id,
    pid: n.pid
  }) : (0, v.v$)((0, G.V9)(e), n.pid));
}), ex(this, 'handleClickGoLiveButton', () => {
  let {
    guildId: e,
    channel: t,
    canStartBroadcast: l
  } = this.props, r = null != t && (0, K.vd)(t.type) ? t : null, a = null != r ? r.getGuildId() : e;
  if ((null == r ? void 0 : r.isBroadcastChannel()) && l) {
    (0, T.D)(this.startBroadcast);
    return;
  }
  (0, h.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79477'),
      n.e('8730')
    ]).then(n.bind(n, 60594));
    return t => (0, i.jsx)(e, {
      ...t,
      selectSource: !1,
      guildId: a,
      analyticsLocation: eg.Sbl.ACTIVITY_PANEL
    });
  }).then(e => {
    null != e && (this.modalKey = e);
  });
}), ex(this, 'handleClickStopStreamingButton', () => {
  let {
    stream: e,
    channel: t,
    userId: n
  } = this.props, i = null != t && (0, K.vd)(t.type) ? t : null;
  if ((null == i ? void 0 : i.isBroadcastChannel()) && (null == i ? void 0 : i.isOwner(n))) {
    (0, T.Z)(() => (0, F.Z)(e));
    return;
  }
  (0, F.Z)(e);
}), ex(this, 'handleClickInviteButton', () => {
  let {
    activity: e,
    analyticsContext: t
  } = this.props;
  o()(null != e, 'Received null activity'), ep.default.track(eg.rMx.OPEN_MODAL, {
    type: 'Send Join Invite',
    application_id: e.application_id,
    location: t.location
  }), (0, p.h7)(e, !1);
}), ex(this, 'handleClickDropsButton', () => {
  let {
    dropsPartnerGame: e,
    dropsTooltipAction: t,
    userId: n
  } = this.props;
  if (null == e)
    return;
  let i = (0, R.BS)(e);
  null != i && (ep.default.track(eg.rMx.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
    user_id: n,
    drops_quest_id: i.dropsQuestId,
    game_id: i.dropsGameId,
    game_name: i.title.toLowerCase(),
    show_sparkles: this.state.showDropsSparkles,
    tooltip_action: t
  }), this.setState({
    isDropsActivityPanelTooltipOpen: !this.state.isDropsActivityPanelTooltipOpen,
    showDropsSparkles: !1
  }));
}), ex(this, 'handleClickLeaveEmbeddedActivityButton', (e, t) => () => {
  (0, E.mW)({
    channelId: t.id,
    applicationId: e
  });
}), ex(this, 'renderClipsButton', () => {
  let {
    stream: e
  } = this.props;
  return null == e ? null : (0, i.jsx)(A.Z, {});
}), ex(this, 'handleApplicationLinkClick', () => {
  var e;
  let {
    channel: t,
    embeddedActivity: n
  } = this.props;
  o()(null != t, 'Channel is null during navigation click'), o()(null != n, 'Activity null during navigation click'), (0, K.vd)(t.type) && _.Z.selectParticipant(t.id, n.applicationId), f.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eg.ME, t.id), (0, K.Qm)(t.type) && (0, E.tg)(eC.Ez.PANEL);
});
  }
}

function eZ(e) {
  let {
name: t,
applicationId: n
  } = e, l = (0, U.Z)({
location: 'ActivityPanelGameCard',
applicationId: n,
source: D.m1.RtcPanel,
trackEntryPointImpression: !0
  });
  return (0, i.jsx)(h.Clickable, {
onClick: l,
className: a()(null != l && eN.clickableGameName),
children: (0, i.jsx)(ed.Z, {
  className: eN.gameName,
  children: t
})
  });
}
t.Z = (0, C.Z)(function(e) {
  var t;
  let {
guildId: n,
...l
  } = e, r = (0, c.e7)([Q.default], () => Q.default.getId()), a = (0, c.e7)([
P.ZP,
es.Z
  ], () => (0, V.Z)(P.ZP, es.Z)), s = (0, c.e7)([
el.Z,
J.Z
  ], () => J.Z.getChannel(el.Z.getVoiceChannelId())), o = (0, c.e7)([N.ZP], () => N.ZP.getConnectedActivityChannelId()), d = (0, c.e7)([J.Z], () => J.Z.getChannel(o)), h = (0, c.e7)([$.Z], () => $.Z.getGuild(null == d ? void 0 : d.guild_id)), [p, _] = (0, c.Wu)([q.Z], () => [
q.Z.getCurrentUserActiveStream(),
q.Z.getStreamerActiveStreamMetadata()
  ]), f = (0, c.e7)([I.Z], () => I.Z.useReducedMotion), m = (0, c.e7)([M.Z], () => M.Z.getActivityPanelTooltipAction()), {
partnerGame: g,
dropsActivityPanelExperienceBlocked: C,
showDropsSparkles: E
  } = (0, b.c)(eI.X2.FORTNITE, a, u.z.QUEST_2_ENROLLMENT_TOOLTIP, u.z.QUEST_2_COMPLETION_TOOLTIP), x = (0, c.e7)([N.ZP], () => null != d ? N.ZP.getSelfEmbeddedActivityForChannel(d.id) : null), v = (0, c.e7)([
$.Z,
et.Z,
X.ZP
  ], () => null != s ? w.JL(s, $.Z, et.Z, !1) : null != n && w.h_(X.ZP.getChannels(n), $.Z, et.Z).length > 0), [T] = (0, S.Z)([null !== (t = function() {
if (null != _ && null != _.id)
  return _.id;
if (null != a && null != a.id)
  return a.id;
if (null != x)
  return x.applicationId;
  }()) && void 0 !== t ? t : '']), A = (0, c.e7)([ee.Z], () => (0, k.Z)(ee.Z) && (0, e_.isWindows)()), R = (0, c.e7)([en.Z], () => null != r ? en.Z.findActivity(r, e => e.type === eg.IIU.PLAYING) : null), O = null != p && p.ownerId === r && p.state !== eg.jm8.ENDED, y = (0, c.e7)([er.Z], () => er.Z.getBroadcast()), j = (0, Z.Z)() && null != a, D = (0, c.e7)([
ea.default,
ei.Z
  ], () => null != d ? (0, L.F6)(d, ea.default, ei.Z) : void 0), U = (0, Y.Z)(null == s ? void 0 : s.id, r);
  return (0, i.jsx)(ev, {
...l,
guildId: n,
canGoLive: A,
activity: R,
embeddedActivity: x,
showDropsSparkles: E,
dropsPartnerGame: g,
dropsActivityPanelExperienceBlocked: C,
userId: r,
runningGame: a,
application: T,
useReducedMotion: f,
isStreaming: O,
channel: d,
canStream: v,
dropsTooltipAction: m,
stream: p,
streamMetadata: _,
broadcast: y,
canStartBroadcast: j,
channelName: D,
guildForConnectedChannel: h,
streamQualityIndicator: U
  });
});