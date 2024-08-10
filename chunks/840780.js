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
  g = n(872810),
  m = n(438139),
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
  A = n(194082),
  b = n(311352),
  M = n(436774),
  R = n(730417),
  P = n(524347),
  O = n(853197),
  y = n(616360),
  j = n(858064),
  D = n(594190),
  w = n(925329),
  U = n(810568),
  G = n(168524),
  k = n(569545),
  B = n(382182),
  H = n(74299),
  V = n(914923),
  W = n(165393),
  F = n(989941),
  z = n(803647),
  Y = n(690221),
  K = n(231664),
  q = n(759198),
  Q = n(131704),
  X = n(199902),
  J = n(314897),
  $ = n(592125),
  ee = n(984933),
  et = n(430824),
  en = n(131951),
  ei = n(496675),
  el = n(158776),
  er = n(699516),
  ea = n(944486),
  es = n(885110),
  eo = n(594174),
  ec = n(449224),
  eu = n(626135),
  ed = n(358085),
  eh = n(870569),
  ep = n(345243),
  e_ = n(115530),
  ef = n(793224),
  eg = n(978769),
  em = n(981631),
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
let eS = (0, m.Z)(function(e) {
  let {
message: t
  } = e;
  return (0, i.jsx)(ep.Z, {
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
return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === em.IIU.PLAYING && (0, x.Z)(t, em.xjy.JOIN));
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
}) : eE.Z.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = h.ScreenArrowIcon, l = null != o && (0, Q.vd)(o.type) ? eE.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != a ? eE.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : eE.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, i.jsx)('div', {
  className: eN.panelButtonContainer,
  children: (0, i.jsx)(eh.Z, {
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
return this.isJoinableActivity() && null == e ? (0, i.jsx)(eh.Z, {
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
  renderPopout: () => (0, i.jsx)(j.Z, {
    partnerGame: t,
    tooltipAction: e,
    onClose: l
  }),
  children: () => (0, i.jsxs)(i.Fragment, {
    children: [
      this.state.showDropsSparkles && this.renderSparkles(),
      (0, i.jsx)(eh.Z, {
        'aria-label': eE.Z.Messages.DROPS_ENABLED,
        tooltipText: n ? null : eE.Z.Messages.DROPS_ENABLED,
        onClick: this.handleClickDropsButton,
        icon: y.Z
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
return null == e || null == t ? null : (0, i.jsx)(eh.Z, {
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
return null != e && (0, Q.vd)(e.type) ? null : (0, i.jsx)(ef.Z, {});
  }
  renderBroadcastSettingsButton() {
let {
  broadcast: e
} = this.props;
return null == e ? null : (0, i.jsx)(eg.Z, {});
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
        (0, i.jsx)(w.Z, {
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
} = (0, V.Z)(n);
return (0, i.jsxs)('div', {
  className: eN.gameWrapper,
  children: [
    e ? (0, i.jsx)(W.Z, {
      title: s
    }) : (0, i.jsx)(A.ZP, {
      look: A.ZP.Looks.GRAY,
      size: A.ZP.Sizes.SMALL,
      className: eN.liveIndicator
    }),
    (0, i.jsxs)('div', {
      className: a()(eN.info, {
        [eN.infoWithDrops]: null != t
      }),
      children: [
        (0, i.jsx)(e_.Z, {
          children: r
        }),
        null != l && (0, i.jsxs)('div', {
          className: eN.perksDemoContainer,
          children: [
            (0, i.jsx)(h.NitroWheelIcon, {
              size: 'xxs',
              color: M.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(q.Z, {
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
null != a ? (e = em.Z5c.CHANNEL(a.id, l.id), o = ''.concat(o, ' / ').concat(a.name)) : e = em.Z5c.CHANNEL(em.ME, l.id);
let c = (0, i.jsx)(Y.Z, {
  href: e,
  onClick: this.handleApplicationLinkClick,
  children: (0, i.jsx)(ep.Z, {
    className: eN.channel,
    children: o
  })
});
return (0, i.jsxs)('div', {
  className: eN.gameWrapper,
  children: [
    (0, i.jsx)(w.Z, {
      className: eN.gameIcon,
      game: t,
      size: w.Z.Sizes.SMALL
    }),
    (0, i.jsxs)('div', {
      className: eN.info,
      children: [
        (0, i.jsx)(Y.Z, {
          href: e,
          onClick: this.handleApplicationLinkClick,
          children: (0, i.jsx)(e_.Z, {
            className: eN.activityName,
            children: t.name
          })
        }),
        (0, Q.Qm)(l.type) ? c : (0, i.jsx)(eS, {
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
  } = this.props, i = null != t && (0, Q.vd)(t.type) ? t : null;
  null != i && null != n && (null == e ? (0, g.tE)({
    channelId: i.id,
    pid: n.pid
  }) : (0, v.v$)((0, k.V9)(e), n.pid));
}), ex(this, 'handleClickGoLiveButton', () => {
  let {
    guildId: e,
    channel: t,
    canStartBroadcast: l
  } = this.props, r = null != t && (0, Q.vd)(t.type) ? t : null, a = null != r ? r.getGuildId() : e;
  if ((null == r ? void 0 : r.isBroadcastChannel()) && l) {
    (0, T.D)(this.startBroadcast);
    return;
  }
  (0, h.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79477'),
      n.e('25248')
    ]).then(n.bind(n, 60594));
    return t => (0, i.jsx)(e, {
      ...t,
      selectSource: !1,
      guildId: a,
      analyticsLocation: em.Sbl.ACTIVITY_PANEL
    });
  }).then(e => {
    null != e && (this.modalKey = e);
  });
}), ex(this, 'handleClickStopStreamingButton', () => {
  let {
    stream: e,
    channel: t,
    userId: n
  } = this.props, i = null != t && (0, Q.vd)(t.type) ? t : null;
  if ((null == i ? void 0 : i.isBroadcastChannel()) && (null == i ? void 0 : i.isOwner(n))) {
    (0, T.Z)(() => (0, z.Z)(e));
    return;
  }
  (0, z.Z)(e);
}), ex(this, 'handleClickInviteButton', () => {
  let {
    activity: e,
    analyticsContext: t
  } = this.props;
  o()(null != e, 'Received null activity'), eu.default.track(em.rMx.OPEN_MODAL, {
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
  let i = (0, O.BS)(e);
  null != i && (eu.default.track(em.rMx.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
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
  return null == e ? null : (0, i.jsx)(b.Z, {});
}), ex(this, 'handleApplicationLinkClick', () => {
  var e;
  let {
    channel: t,
    embeddedActivity: n
  } = this.props;
  o()(null != t, 'Channel is null during navigation click'), o()(null != n, 'Activity null during navigation click'), (0, Q.vd)(t.type) && _.Z.selectParticipant(t.id, n.applicationId), f.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : em.ME, t.id), (0, Q.Qm)(t.type) && (0, E.tg)(eC.Ez.PANEL);
});
  }
}

function eZ(e) {
  let {
name: t,
applicationId: n
  } = e, l = (0, G.Z)({
location: 'ActivityPanelGameCard',
applicationId: n,
source: U.m1.RtcPanel,
trackEntryPointImpression: !0
  });
  return (0, i.jsx)(h.Clickable, {
onClick: l,
className: a()(null != l && eN.clickableGameName),
children: (0, i.jsx)(e_.Z, {
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
  } = e, r = (0, c.e7)([J.default], () => J.default.getId()), a = (0, c.e7)([
D.ZP,
ec.Z
  ], () => (0, F.Z)(D.ZP, ec.Z)), s = (0, c.e7)([
ea.Z,
$.Z
  ], () => $.Z.getChannel(ea.Z.getVoiceChannelId())), o = (0, c.e7)([N.ZP], () => N.ZP.getConnectedActivityChannelId()), d = (0, c.e7)([$.Z], () => $.Z.getChannel(o)), h = (0, c.e7)([et.Z], () => et.Z.getGuild(null == d ? void 0 : d.guild_id)), [p, _] = (0, c.Wu)([X.Z], () => [
X.Z.getCurrentUserActiveStream(),
X.Z.getStreamerActiveStreamMetadata()
  ]), f = (0, c.e7)([I.Z], () => I.Z.useReducedMotion), g = (0, c.e7)([P.Z], () => P.Z.getActivityPanelTooltipAction()), {
partnerGame: m,
dropsActivityPanelExperienceBlocked: C,
showDropsSparkles: E
  } = (0, R.c)(eI.X2.FORTNITE, a, u.z.QUEST_2_ENROLLMENT_TOOLTIP, u.z.QUEST_2_COMPLETION_TOOLTIP), x = (0, c.e7)([N.ZP], () => null != d ? N.ZP.getSelfEmbeddedActivityForChannel(d.id) : null), v = (0, c.e7)([
et.Z,
ei.Z,
ee.ZP
  ], () => null != s ? B.JL(s, et.Z, ei.Z, !1) : null != n && B.h_(ee.ZP.getChannels(n), et.Z, ei.Z).length > 0), [T] = (0, S.Z)([null !== (t = function() {
if (null != _ && null != _.id)
  return _.id;
if (null != a && null != a.id)
  return a.id;
if (null != x)
  return x.applicationId;
  }()) && void 0 !== t ? t : '']), A = (0, c.e7)([en.Z], () => (0, H.Z)(en.Z) && (0, ed.isWindows)()), b = (0, c.e7)([el.Z], () => null != r ? el.Z.findActivity(r, e => e.type === em.IIU.PLAYING) : null), M = null != p && p.ownerId === r && p.state !== em.jm8.ENDED, O = (0, c.e7)([es.Z], () => es.Z.getBroadcast()), y = (0, Z.Z)() && null != a, j = (0, c.e7)([
eo.default,
er.Z
  ], () => null != d ? (0, L.F6)(d, eo.default, er.Z) : void 0), w = (0, K.Z)(null == s ? void 0 : s.id, r);
  return (0, i.jsx)(ev, {
...l,
guildId: n,
canGoLive: A,
activity: b,
embeddedActivity: x,
showDropsSparkles: E,
dropsPartnerGame: m,
dropsActivityPanelExperienceBlocked: C,
userId: r,
runningGame: a,
application: T,
useReducedMotion: f,
isStreaming: M,
channel: d,
canStream: v,
dropsTooltipAction: g,
stream: p,
streamMetadata: _,
broadcast: O,
canStartBroadcast: y,
channelName: j,
guildForConnectedChannel: h,
streamQualityIndicator: w
  });
});