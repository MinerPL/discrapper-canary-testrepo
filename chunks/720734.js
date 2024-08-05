n.d(t, {
  Z: function() {
return ej;
  }
}), n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(704215),
  c = n(846519),
  d = n(400354),
  u = n(652844),
  _ = n(789639),
  h = n(481060),
  E = n(355467),
  I = n(239091),
  m = n(230711),
  g = n(410575),
  p = n(941129),
  T = n(83200),
  S = n(634894),
  f = n(586902),
  C = n(570928),
  N = n(1585),
  A = n(304761),
  v = n(865427),
  Z = n(571250),
  L = n(628581),
  O = n(55311),
  R = n(575175),
  x = n(64220),
  b = n(377171),
  P = n(676035),
  M = n(427217),
  D = n(605236),
  y = n(243778),
  j = n(730417),
  U = n(524347),
  G = n(853197),
  k = n(810280),
  w = n(60762),
  B = n(258609),
  H = n(278464),
  V = n(331541),
  F = n(332473),
  Y = n(240504),
  W = n(637906),
  z = n(39370),
  K = n(19199),
  q = n(111653),
  Q = n(866483),
  X = n(14357),
  J = n(393333),
  $ = n(763296),
  ee = n(640806),
  et = n(484459),
  en = n(584427),
  ei = n(52538),
  ea = n(331187),
  es = n(879815),
  er = n(294629),
  el = n(314897),
  eo = n(592125),
  ec = n(819640),
  ed = n(131951),
  eu = n(19780),
  e_ = n(885110),
  eh = n(246946),
  eE = n(594174),
  eI = n(78839),
  em = n(285952),
  eg = n(976401),
  ep = n(333454),
  eT = n(864441),
  eS = n(626135),
  ef = n(768581),
  eC = n(572004),
  eN = n(70956),
  eA = n(374023),
  ev = n(51144),
  eZ = n(998502),
  eL = n(981631),
  eO = n(215023),
  eR = n(702512),
  ex = n(689938),
  eb = n(614493);

function eP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let eM = eZ.ZP.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
  eD = 30 * eN.Z.Millis.DAY;
class ey extends a.PureComponent {
  get isCopiedStreakGodlike() {
let {
  copiedStreak: e
} = this.state;
return e >= 10;
  }
  componentDidUpdate(e) {
let {
  speakingWhileMuted: t,
  occluded: n
} = e, {
  speakingWhileMuted: i,
  occluded: a
} = this.props;
a !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
  }
  componentWillUnmount() {
this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
  }
  renderCopiedSuccess() {
let {
  copiedStreak: e
} = this.state, t = [
  ex.Z.Messages.COPY_SUCCESS_1,
  ex.Z.Messages.COPY_SUCCESS_2,
  ex.Z.Messages.COPY_SUCCESS_3,
  ex.Z.Messages.COPY_SUCCESS_4,
  ex.Z.Messages.COPY_SUCCESS_5,
  ex.Z.Messages.COPY_SUCCESS_6,
  ex.Z.Messages.COPY_SUCCESS_7,
  ex.Z.Messages.COPY_SUCCESS_8,
  ex.Z.Messages.COPY_SUCCESS_9,
  ex.Z.Messages.COPY_SUCCESS_10,
  ex.Z.Messages.COPY_SUCCESS_11
], n = Math.min(Math.max(0, e - 1), t.length - 1);
return (0, i.jsx)(h.Shaker, {
  isShaking: this.isCopiedStreakGodlike,
  children: t[n]
});
  }
  renderNameTag() {
let e;
let {
  hovered: t
} = this.state, {
  customStatusActivity: n,
  userTag: a,
  currentUser: s,
  status: r
} = this.props;
if (null == s)
  return null;
let l = ev.ZP.getName(s),
  o = null != r && r !== eL.Skl.UNKNOWN,
  c = null != n;
return (c || o && s.isPomelo()) && (e = (0, i.jsx)(C.Z, {
  hoverText: a,
  forceHover: t,
  children: c ? (0, i.jsx)(M.Z, {
    activity: n,
    emojiClassName: eb.emoji,
    className: eb.customStatus
  }) : ev.ZP.humanizeStatus(r)
})), (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)('div', {
      className: eb.panelTitleContainer,
      children: (0, i.jsx)(eT.Z, {
        children: l
      })
    }),
    (0, i.jsx)('div', {
      className: eb.panelSubtextContainer,
      children: (0, i.jsx)(ep.Z, {
        children: null != e ? e : a
      })
    })
  ]
});
  }
  renderAvatarWithPopout() {
let {
  speaking: e,
  streaming: t,
  currentUser: n,
  status: a
} = this.props;
if (null == n)
  return null;
let s = (0, ef.NZ)({
  avatarDecoration: n.avatarDecoration,
  size: (0, N.y9)(h.AvatarSizes.SIZE_32)
});
return (0, i.jsx)(g.Z, {
  object: eL.qAy.AVATAR,
  children: (0, i.jsx)(h.Popout, {
    renderPopout: e => {
      let {
        closePopout: t,
        setPopoutRef: a
      } = e;
      return (0, i.jsx)('div', {
        className: eb.accountProfilePopoutWrapper,
        children: (0, i.jsx)(V.Z, {
          currentUser: n,
          setPopoutRef: a,
          onClose: () => {
            this.handleMouseLeave(), null == t || t();
          }
        })
      });
    },
    position: 'top',
    align: 'left',
    animation: h.Popout.Animation.FADE,
    spacing: 14,
    fixed: !0,
    preload: () => (0, et.Z)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
    children: l => (0, i.jsxs)(h.Clickable, {
      ...l,
      'aria-label': ex.Z.Messages.SET_STATUS,
      className: eb.avatarWrapper,
      children: [
        (0, i.jsx)(eM, {
          size: h.AvatarSizes.SIZE_32,
          src: n.getAvatarURL(void 0, 32, !1),
          avatarDecoration: s,
          'aria-label': n.username,
          status: t ? eL.Skl.STREAMING : a,
          isSpeaking: e,
          className: eb.avatar
        }),
        (0, i.jsx)('div', {
          className: r()(eb.nameTag, {
            [eb.canCopy]: eC.wS
          }),
          children: this.renderNameTag()
        })
      ]
    })
  })
});
  }
  renderNameZone() {
let {
  currentUser: e,
  dismissibleContents: t
} = this.props;
return null == e ? null : (0, i.jsx)(i.Fragment, {
  children: (0, i.jsx)(y.Z, {
    contentTypes: t.avatar,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
        return (0, i.jsx)(x.Z, {
          markAsDismissed: n,
          children: () => this.renderAvatarWithPopout()
        });
      return this.renderAvatarWithPopout();
    }
  })
});
  }
  render() {
let {
  currentUser: e,
  selfDeaf: t,
  selfMute: n,
  awaitingRemote: a,
  serverMute: s,
  serverDeaf: r,
  suppress: l,
  dismissibleContents: c
} = this.props, {
  shouldShowSpeakingWhileMutedTooltip: d
} = this.state;
return null == e ? null : (0, i.jsxs)('div', {
  className: eb.container,
  onMouseEnter: this.handleMouseEnter,
  onMouseLeave: this.handleMouseLeave,
  children: [
    this.renderNameZone(),
    (0, i.jsxs)(em.Z, {
      grow: 0,
      className: eb.buttons,
      children: [
        (0, i.jsx)(eG, {
          selfMute: n,
          serverMute: s,
          suppress: l,
          awaitingRemote: a,
          tooltipText: d ? ex.Z.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, L.Z)(n, s, l, a),
          tooltipColor: d ? h.TooltipColors.GREEN : void 0,
          tooltipForceOpen: d || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          onClick: this.handleToggleSelfMute,
          onContextMenu: this.handleInputAudioContextMenu
        }),
        (0, i.jsx)(ek, {
          selfDeaf: t,
          serverDeaf: r,
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          awaitingRemote: a
        }),
        (0, i.jsx)(y.Z, {
          contentTypes: c.settings,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            switch (t) {
              case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                return (0, i.jsx)(h.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(z.Z, {}),
                  children: this.renderSettingsGear
                });
              case o.z.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, i.jsx)(h.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(k.Z, {
                    markAsDismissed: n,
                    partnerGame: eR.X2.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.QUEST_2_COMPLETION_TOOLTIP:
                return (0, i.jsx)(h.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(w.Z, {
                    markAsDismissed: n,
                    partnerGame: eR.X2.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, i.jsx)(h.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(ea.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, i.jsx)(h.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(Q.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, i.jsx)(h.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(X.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, i.jsx)(h.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(ee.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, i.jsx)(h.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(J.P, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                return (0, i.jsx)(h.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(ei.Z, {}),
                  children: this.renderSettingsGear
                });
              default:
                return this.renderSettingsGear();
            }
          }
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), eP(this, 'copiedTimeout', new c.V7()), eP(this, 'copiedDecayTimeout', new c.V7()), eP(this, 'speakingWhileMutedTooltipTimeout', new c.V7()), eP(this, 'state', {
  hovered: !1,
  copiedStreak: 0,
  shouldShowNametagTooltip: !1,
  shouldShowCopiedFeedback: !1,
  shouldShowSpeakingWhileMutedTooltip: !1,
  hoveringOnMute: !1
}), eP(this, 'handleToggleSelfMute', () => {
  let {
    serverMute: e,
    suppress: t
  } = this.props;
  (0, R.Z)(e, t);
}), eP(this, 'handleToggleSelfDeaf', () => {
  let {
    serverDeaf: e
  } = this.props;
  (0, O.Z)(e);
}), eP(this, 'handleOpenAccountSettings', () => {
  this.handleOpenSettings();
}), eP(this, 'handleOpenSettings', function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.oAB.ACCOUNT,
    t = arguments.length > 1 ? arguments[1] : void 0,
    n = arguments.length > 2 ? arguments[2] : void 0;
  m.Z.open(e, t, n);
}), eP(this, 'handleOpenSettingsContextMenu', e => {
  let {
    currentUser: t
  } = this.props;
  null != t && (0, I.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('96427'),
      n.e('19503'),
      n.e('15972'),
      n.e('13682'),
      n.e('15685'),
      n.e('47006'),
      n.e('32776'),
      n.e('94915'),
      n.e('33053'),
      n.e('8016'),
      n.e('50654'),
      n.e('76540'),
      n.e('68136'),
      n.e('87624'),
      n.e('22646'),
      n.e('5528'),
      n.e('43331'),
      n.e('30419'),
      n.e('18824'),
      n.e('52619'),
      n.e('83760'),
      n.e('94335')
    ]).then(n.bind(n, 923422));
    return n => (0, i.jsx)(e, {
      ...n,
      user: t,
      premiumSubscription: this.props.premiumSubscription,
      webBuildOverride: this.props.webBuildOverride
    });
  });
}), eP(this, 'handleInputAudioContextMenu', e => {
  (0, I.jW)(e, async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 659580));
    return () => (0, i.jsx)(e, {
      onClose: I.Zy,
      renderInputDevices: !0,
      renderInputModes: !0,
      renderInputVolume: !0
    });
  });
}), eP(this, 'handleOutputAudioContextMenu', e => {
  (0, I.jW)(e, async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 659580));
    return () => (0, i.jsx)(e, {
      onClose: I.Zy,
      renderOutputDevices: !0,
      renderOutputVolume: !0
    });
  });
}), eP(this, 'handleMouseEnter', () => {
  this.setState({
    hovered: !0
  });
}), eP(this, 'handleMouseLeave', () => {
  this.setState({
    hovered: !1
  });
}), eP(this, 'handleMouseEnterMute', () => {
  this.setState({
    hoveringOnMute: !0,
    shouldShowSpeakingWhileMutedTooltip: !1
  }), this.speakingWhileMutedTooltipTimeout.stop();
}), eP(this, 'handleMouseLeaveMute', () => {
  this.setState({
    hoveringOnMute: !1
  });
}), eP(this, 'handleCopyTag', () => {
  let {
    currentUser: e
  } = this.props, {
    shouldShowNametagTooltip: t,
    copiedStreak: n
  } = this.state;
  if (null == e)
    return;
  (0, eC.JG)(ev.ZP.getUserTag(e, {
    decoration: 'never',
    identifiable: 'always'
  })), eS.default.track(eL.rMx.TEXT_COPIED, {
    type: 'User Tag'
  });
  let i = {
    shouldShowCopiedFeedback: !0,
    shouldShowNametagTooltip: !0
  };
  !t && (i.copiedStreak = n + 1), this.setState(i, () => {
    this.copiedTimeout.start(1000, () => this.setState({
      shouldShowNametagTooltip: !1
    })), this.copiedDecayTimeout.start(2000, () => this.setState({
      copiedStreak: 0
    }));
  });
}), eP(this, 'handleOccludedChanged', () => {
  let {
    occluded: e
  } = this.props;
  e && this.setState({
    shouldShowNametagTooltip: !1,
    shouldShowSpeakingWhileMutedTooltip: !1
  });
}), eP(this, 'handleSpeakingWhileMutedChanged', () => {
  let {
    selfMute: e,
    serverMute: t,
    suppress: n,
    speakingWhileMuted: i,
    occluded: a
  } = this.props, {
    hoveringOnMute: s
  } = this.state;
  i ? !s && e && !t && !n && !a && this.setState({
    shouldShowSpeakingWhileMutedTooltip: !0
  }, () => {
    this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({
      shouldShowSpeakingWhileMutedTooltip: !1
    }));
  }) : (this.setState({
    shouldShowSpeakingWhileMutedTooltip: !1
  }), this.speakingWhileMutedTooltipTimeout.stop());
}), eP(this, 'renderSettingsGear', () => (0, i.jsx)(eU, {
  isEligibleForPomelo: this.props.isEligibleForPomelo,
  webBuildOverride: this.props.webBuildOverride,
  onClick: this.handleOpenAccountSettings,
  onContextMenu: this.handleOpenSettingsContextMenu
}));
  }
}

function ej() {
  var e, t;
  let n = (0, l.e7)([eE.default], () => eE.default.getCurrentUser()),
s = (0, j._g)(eR.X2.FORTNITE),
r = (0, l.e7)([el.default], () => el.default.getId()),
c = (0, P.a)(),
{
  streaming: d,
  status: u
} = (0, l.cj)([e_.Z], () => ({
  streaming: null != e_.Z.findActivity(e => e.type === eL.IIU.STREAMING),
  status: e_.Z.getStatus()
})),
_ = (0, f.Z)({
  userId: r
}),
I = ev.ZP.useUserTag(n, {
  decoration: 'never'
}),
m = (0, l.e7)([eh.Z], () => eh.Z.hidePersonalInformation),
g = (0, l.e7)([
  eu.Z,
  eo.Z
], () => {
  let e = eu.Z.getChannelId();
  return null != e ? eo.Z.getChannel(e) : null;
}),
{
  mute: C,
  selfMute: N,
  suppress: Z
} = (0, er.Z)(g),
{
  selfDeaf: L,
  deaf: O
} = (0, es.Z)(g),
R = (0, l.e7)([A.C], () => {
  var e;
  return (0, v.fD)() ? null === (e = A.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null;
}),
x = (0, l.e7)([eI.ZP], () => eI.ZP.getPremiumTypeSubscription()),
b = (0, l.e7)([ed.Z], () => ed.Z.getEverSpeakingWhileMuted()),
M = (0, l.e7)([ec.Z], () => ec.Z.hasLayers()),
y = (0, h.useModalsStore)(h.hasAnyModalOpenSelector) || M || eA.s.isDisallowPopupsSet(),
k = (0, F.b)(),
w = (0, l.e7)([B.Z], () => null != B.Z.getAwaitingRemoteSessionInfo()),
V = (0, l.e7)([U.Z], () => U.Z.isCurrentQuestCompleted),
z = (0, l.e7)([U.Z], () => U.Z.currentDropQuestGameTitle),
Q = (0, H.n)(),
X = (0, T.O)(),
J = (0, K.D)(),
ee = (0, p.u)(),
et = (0, q.t)(),
ei = (0, en.Z)(n),
ea = (null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eO.rL,
em = 'account';
  (0, S.j)({
location: em + ' auto on',
autoTrackExposure: !0
  }), (0, S.j)({
location: em + ' auto off',
autoTrackExposure: !1
  }), (0, K.o)();
  let eg = (0, l.e7)([$.Z], () => $.Z.hasHadOtherUserPlaySoundInSession()),
ep = function() {
  let e = (0, D.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
    [t, n] = (0, l.Wu)([Y.Z], () => [
      Y.Z.hasFetchedRelevance,
      Y.Z.profileThemesRelevanceExceeded
    ]),
    [i, s] = (0, l.Wu)([eI.ZP], () => [
      eI.ZP.hasFetchedMostRecentPremiumTypeSubscription(),
      eI.ZP.getMostRecentPremiumTypeSubscription()
    ]),
    {
      enabled: r
    } = W.Z.useExperiment({
      location: '08bd40_1'
    }, {
      autoTrackExposure: !0
    }),
    c = a.useMemo(() => {
      let e = new Date().getTime();
      return null != s && (s.status === eL.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < eD);
    }, [s]);
  return a.useEffect(() => {
    (async () => {
      if (e || null != n || !r)
        return;
      if (!i) {
        await (0, E.ou)();
        return;
      }
      if (!c)
        !t && await (0, E.l0)();
    })();
  }, [
    r,
    n,
    e,
    i,
    t,
    c
  ]), !e && !!r && !c && null != n && n;
}(),
eT = {
  avatar: [],
  settings: []
};
  return !y && (ep && eT.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), s && (eT.settings.push(o.z.QUEST_2_ENROLLMENT_TOOLTIP), V && z === (null === (t = (0, G.BS)(eR.X2.FORTNITE)) || void 0 === t ? void 0 : t.title) && eT.settings.push(o.z.QUEST_2_COMPLETION_TOOLTIP)), Q && X && eT.settings.push(o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING), J && (1 === ee ? eT.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eT.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), eg && eT.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), et && eT.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), ei && eT.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), ea && eT.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)), (0, i.jsx)(ey, {
currentUser: n,
customStatusActivity: c,
dismissibleContents: eT,
userTag: I,
hidePrivateData: m,
occluded: y,
premiumSubscription: x,
selfDeaf: L,
selfMute: N,
serverDeaf: O,
serverMute: C,
speaking: _,
speakingWhileMuted: b,
status: u,
streaming: d,
suppress: Z,
webBuildOverride: R,
awaitingRemote: w,
isEligibleForPomelo: k
  });
}

function eU(e) {
  let {
webBuildOverride: t,
isEligibleForPomelo: n,
onClick: a,
onContextMenu: s
  } = e, r = (0, h.useRedesignIconContext)().enabled, l = null, o = h.SettingsIcon, c = (0, _.i)();
  return r ? o = null != t ? h.SettingsInfoIcon : n ? h.SettingsCircleIcon : c.Component : null != t ? l = (0, i.jsx)(h.CircleInformationIcon, {
size: 'custom',
color: 'currentColor',
width: 9,
height: 9,
className: eb.hasBuildOverride,
'aria-hidden': !0
  }) : n && (l = (0, i.jsx)(h.CircleBadge, {
color: b.Z.STATUS_DANGER,
className: eb.hasBuildOverride,
'aria-hidden': !0
  })), (0, i.jsx)(eg.Z, {
tooltipText: null != t ? ex.Z.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
  webBuildOverride: t.id
}) : ex.Z.Messages.USER_SETTINGS,
onClick: a,
onContextMenu: s,
innerClassName: null != t || n ? eb.buildOverrideButton : null,
icon: o,
...c.events,
children: l
  });
}

function eG(e) {
  let {
selfMute: t,
serverMute: n,
suppress: s,
awaitingRemote: r,
tooltipText: l,
tooltipColor: o,
tooltipForceOpen: c,
onMouseEnter: d,
onMouseLeave: _,
onClick: E,
onContextMenu: I
  } = e, m = t || s || n, {
Component: g,
play: p,
events: T
  } = (0, u.O)(m ? 'unmute' : 'mute'), S = n || s ? h.MicrophoneDenyIcon : g;
  return a.useEffect(() => () => p(), [
m,
p
  ]), (0, i.jsx)(eg.Z, {
tooltipText: l,
tooltipColor: o,
tooltipForceOpen: c,
onMouseEnter: () => {
  d(), T.onMouseEnter();
},
onMouseLeave: () => {
  _(), T.onMouseLeave();
},
icon: (0, i.jsx)(S, {
  size: 'custom',
  width: 20,
  height: 20,
  color: m ? h.tokens.colors.STATUS_DANGER : 'currentColor'
}),
iconForeground: m ? eb.strikethrough : null,
onClick: E,
onContextMenu: I,
role: 'switch',
'aria-label': ex.Z.Messages.MUTE,
'aria-checked': m,
disabled: r
  });
}

function ek(e) {
  let {
selfDeaf: t,
serverDeaf: n,
awaitingRemote: s,
onClick: l,
onContextMenu: o
  } = e, c = t || n, {
Component: u,
play: _,
events: {
  onMouseEnter: E,
  onMouseLeave: I
}
  } = (0, d.l)(c ? 'undeafen' : 'deafen'), m = n ? h.HeadphonesDenyIcon : u;
  return a.useEffect(() => () => _(), [
c,
_
  ]), (0, i.jsx)(eg.Z, {
tooltipText: (0, Z.Z)(t, n, s),
onMouseEnter: E,
onMouseLeave: I,
icon: (0, i.jsx)(m, {
  size: 'custom',
  width: 20,
  height: 20,
  color: c ? h.tokens.colors.STATUS_DANGER : 'currentColor'
}),
onClick: l,
onContextMenu: o,
innerClassName: r()({
  [eb.redIcon]: n
}),
iconForeground: c ? eb.strikethrough : null,
role: 'switch',
'aria-label': ex.Z.Messages.DEAFEN,
'aria-checked': c,
disabled: s
  });
}