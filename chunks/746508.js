n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(512722),
  o = n.n(l),
  c = n(613828),
  d = n(442837),
  u = n(592471),
  _ = n(864094),
  h = n(75735),
  E = n(382600),
  m = n(481060),
  I = n(846027),
  g = n(239091),
  p = n(925549),
  T = n(284056),
  S = n(730749),
  f = n(2052),
  C = n(40851),
  N = n(317381),
  A = n(596040),
  v = n(588580),
  Z = n(374065),
  L = n(451576),
  O = n(938655),
  R = n(403404),
  x = n(100527),
  b = n(906732),
  P = n(158631),
  M = n(793865),
  D = n(933557),
  y = n(600164),
  j = n(258609),
  U = n(446226),
  G = n(935261),
  k = n(74299),
  w = n(803647),
  B = n(142497),
  H = n(810788),
  V = n(160404),
  F = n(703656),
  Y = n(917405),
  W = n(641015),
  z = n(848543),
  K = n(565799),
  q = n(501655),
  Q = n(71275),
  X = n(600518),
  J = n(485287),
  $ = n(754277),
  ee = n(590415),
  et = n(695346),
  en = n(738436),
  ei = n(829750),
  ea = n(189771),
  es = n(544384),
  er = n(560688),
  el = n(127608),
  eo = n(76021),
  ec = n(173507),
  ed = n(25827),
  eu = n(199902),
  e_ = n(314897),
  eh = n(592125),
  eE = n(430824),
  em = n(819640),
  eI = n(131951),
  eg = n(496675),
  ep = n(19780),
  eT = n(699516),
  eS = n(594174),
  ef = n(979651),
  eC = n(938475),
  eN = n(626135),
  eA = n(63063),
  ev = n(51144),
  eZ = n(870569),
  eL = n(345243),
  eO = n(594117),
  eR = n(226323),
  ex = n(981631),
  eb = n(190378),
  eP = n(689938),
  eM = n(902569),
  eD = n(549856);

function ey(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function ej(e) {
  let t = e.currentTarget;
  eN.default.track(ex.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
text: t.text,
href: t.href,
location: {
  section: ex.jXE.NOISE_CANCELLATION_POPOUT
}
  });
}

function eU() {
  let e = a.useRef(null);
  (0, m.useFocusLock)(e), a.useEffect(() => {
eN.default.track(ex.rMx.OPEN_POPOUT, {
  type: ex.jXE.NOISE_CANCELLATION_POPOUT
});
  }, []);
  let t = (0, d.e7)([eI.Z], () => eI.Z.getNoiseCancellation());
  return (0, i.jsxs)('div', {
ref: e,
className: eM.noiseCancellationPopout,
children: [
  (0, i.jsx)(m.FormSwitch, {
    hideBorder: !0,
    className: eD.marginBottom4,
    value: t,
    onChange: () => I.Z.setNoiseCancellation(!t, {
      section: ex.jXE.NOISE_CANCELLATION_POPOUT
    }),
    note: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
    children: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_HEADER
  }),
  (0, i.jsx)(T.Z, {
    title: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
    notchBackground: T._.BLACK,
    buttonTest: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_TEST,
    buttonStop: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_STOP,
    buttonClassName: eM.micTestButton,
    buttonColor: m.Button.Colors.PRIMARY,
    location: {
      section: ex.jXE.NOISE_CANCELLATION_POPOUT
    }
  }),
  (0, i.jsx)(m.FormTitle, {
    tag: m.FormTitleTags.H5,
    className: r()(eD.marginBottom8, eD.marginTop20),
    children: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
  }),
  (0, i.jsxs)(y.Z, {
    justify: y.Z.Justify.BETWEEN,
    className: eM.__invalid_footer,
    children: [
      (0, i.jsx)(m.Anchor, {
        href: ex.EYA.KRISP,
        onClick: e => ej(e),
        children: (0, i.jsx)('div', {
          className: eM.krispLogo
        })
      }),
      (0, i.jsx)(m.Anchor, {
        href: eA.Z.getArticleURL(ex.BhN.NOISE_SUPPRESSION),
        className: eM.krispLink,
        onClick: e => ej(e),
        children: eP.Z.Messages.LEARN_MORE
      })
    ]
  })
]
  });
}

function eG() {
  let e = (0, d.e7)([$.Z], () => $.Z.isMuted()),
t = e ? eP.Z.Messages.STAGE_MUSIC_UNMUTE : eP.Z.Messages.STAGE_MUSIC_MUTE;
  return (0, i.jsx)(eZ.Z, {
'aria-label': t,
tooltipText: t,
icon: e ? m.MusicSlashIcon : m.MusicIcon,
onClick: () => (0, X.v)(!e)
  });
}

function ek(e) {
  let {
channel: t,
enableActivities: n,
disabled: s
  } = e, l = (0, en.Z)(), o = (0, ea.Z)(t), c = (0, d.cj)([N.ZP], () => null != N.ZP.getSelfEmbeddedActivityForChannel(t.id)), u = (0, W.Z)(t), {
reachedLimit: _,
limit: E
  } = (0, ei.Z)(t), g = a.useCallback(() => {
(0, er.Z)();
  }, []), p = (0, C.bp)(), T = a.useCallback(e => {
if (eI.Z.isVideoEnabled() === e)
  return;
let n = () => {
  var n;
  I.Z.setVideoEnabled(e), e && (0, F.uL)(ex.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : ex.ME, t.id));
};
e ? (0, ec.Z)(n, p) : n();
  }, [
t,
p
  ]), S = c || n || u, {
Component: f,
play: A,
events: v
  } = (0, h.o)(l.enabled ? 'disable' : 'enable');
  return a.useEffect(() => () => A(), [
l.enabled,
A
  ]), (0, i.jsx)(ed.Z, {
onChange: T,
onCameraUnavailable: g,
hasPermission: o,
channelLimit: E,
channelLimitReached: _,
...l,
enabled: !s && l.enabled,
children: e => {
  let {
    unavailable: t,
    active: n,
    label: a,
    iconComponent: s,
    ...l
  } = e, o = (0, i.jsx)(f, {
    size: 'custom',
    width: 20,
    height: 20,
    className: r()(eM.buttonIcon, {
      [eM.withText]: !S
    }),
    color: 'currentColor'
  });
  return (0, i.jsx)(m.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(M.Z, {
        onClose: t
      });
    },
    position: 'top',
    align: 'center',
    animation: m.Popout.Animation.FADE,
    children: (e, s) => {
      let {
        onClick: c,
        ...d
      } = e, {
        isShown: u
      } = s;
      return (0, i.jsx)(m.Tooltip, {
        text: a,
        children: e => (0, i.jsx)(m.Button, {
          ...l,
          ...e,
          ...d,
          onClick: t => {
            var n;
            l.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), u && c(t);
          },
          onMouseEnter: () => {
            var t, n;
            null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = d.onMouseEnter) || void 0 === n || n.call(d), v.onMouseEnter();
          },
          onMouseLeave: () => {
            var t;
            null === (t = e.onMouseLeave) || void 0 === t || t.call(e), v.onMouseLeave();
          },
          onContextMenu: t => {
            var n;
            c(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
          },
          size: m.Button.Sizes.SMALL,
          className: r()(eM.button, eM.buttonColor, {
            [eM.buttonActive]: n,
            [eM.fauxDisabled]: t,
            [eM.disabled]: l.disabled
          }),
          innerClassName: eM.buttonContents,
          wrapperClassName: eM.button,
          fullWidth: !0,
          children: S ? o : (0, i.jsxs)(y.Z, {
            align: y.Z.Align.CENTER,
            children: [
              o,
              eP.Z.Messages.VIDEO
            ]
          })
        })
      });
    }
  });
}
  });
}

function ew(e) {
  let {
channel: t,
enableActivities: n
  } = e, a = (0, C.bp)(), {
analyticsLocations: s
  } = (0, b.ZP)(), l = a === ex.IlC.POPOUT, o = (0, Z.KF)(t.id), c = (0, Z.g5)(o), [_] = (0, d.e7)([N.ZP], () => null != t.id && '' !== t.id ? N.ZP.getEmbeddedActivitiesForChannel(t.id) : N.i6), {
userInActivity: h
  } = (0, d.cj)([N.ZP], () => ({
userInActivity: null != N.ZP.getSelfEmbeddedActivityForChannel(t.id)
  })), E = (0, f.O)(), I = (0, v.a)(), g = o !== Z.jy.CAN_LAUNCH, {
Component: p,
events: T
  } = (0, u.s)();
  return n ? (0, i.jsx)(m.Tooltip, {
text: c,
children: e => (0, i.jsxs)(m.Button, {
  ...e,
  fullWidth: !0,
  size: m.Button.Sizes.SMALL,
  ...T,
  onClick: () => {
    var n;
    T.onClick(), (0, R.Z)({
      channel: t,
      guildId: t.guild_id,
      locationObject: E.location,
      openInPopout: l,
      analyticsLocations: s,
      opensAppLauncherModal: !0
    }), null === (n = e.onClick) || void 0 === n || n.call(e);
  },
  onMouseEnter: () => {
    var t;
    T.onMouseEnter(), null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
  },
  onMouseLeave: () => {
    var t;
    T.onMouseLeave(), null == e || null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
  },
  disabled: g,
  className: r()(eM.button, eM.buttonColor, {
    [eM.buttonActive]: h || null != _,
    [eM.disabled]: g
  }),
  innerClassName: eM.buttonContents,
  wrapperClassName: eM.button,
  children: [
    I ? (0, i.jsx)(O.A, {
      top: -1,
      right: -1
    }) : null,
    (0, i.jsx)(p, {
      size: 'sm',
      color: 'currentColor',
      className: eM.buttonIcon
    })
  ]
})
  }) : null;
}

function eB(e) {
  let t, {
  channel: n,
  canGoLive: s,
  enableActivities: l,
  disabled: o
} = e,
c = (0, d.e7)([eS.default], () => eS.default.getCurrentUser()),
u = (0, d.Wu)([eu.Z], () => eu.Z.getAllActiveStreams()),
h = (0, ea.Z)(n),
E = n.getGuildId(),
I = (0, d.cj)([N.ZP], () => null != N.ZP.getSelfEmbeddedActivityForChannel(n.id)),
g = (0, W.Z)(n),
p = a.useCallback(() => {
  (0, eo.Z)(E, n.id, ex.jXE.ACTIVITY_PANEL);
}, [
  E,
  n.id
]),
T = u.find(e => e.ownerId === (null == c ? void 0 : c.id)),
S = (0, es.E)(n, c, u);
  t = null == T ? s ? p : el.Z : () => (0, w.Z)(T);
  let f = null != T || S.length > 0,
C = h ? eP.Z.Messages.SHARE_YOUR_SCREEN : eP.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
A = I || l || g,
v = null != T,
{
  Component: Z,
  events: L,
  play: O
} = (0, _.P)(v ? 'disable' : 'enable');
  a.useEffect(() => () => O(), [
O,
v
  ]);
  let R = (0, i.jsx)(Z, {
color: 'currentColor',
className: r()(eM.buttonIcon, {
  [eM.withText]: !A
})
  });
  return (0, i.jsx)(m.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(es.Z, {
    channel: n,
    currentUser: c,
    activeStreams: u,
    onClose: t,
    handleGoLive: s ? p : el.Z
  });
},
position: 'top',
align: 'center',
animation: m.Popout.Animation.FADE,
children: e => {
  let {
    onClick: n,
    onMouseEnter: a,
    ...s
  } = e;
  return (0, i.jsx)(m.Tooltip, {
    text: C,
    children: e => (0, i.jsx)(m.Button, {
      ...e,
      size: m.Button.Sizes.SMALL,
      onClick: i => {
        var a;
        f ? n(i) : t(), null === (a = e.onClick) || void 0 === a || a.call(e);
      },
      disabled: !h || o,
      className: r()(eM.button, eM.buttonColor, {
        [eM.buttonActive]: null != T,
        [eM.disabled]: !h || o
      }),
      ...f ? s : null,
      onMouseEnter: () => {
        var t;
        null == a || a(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), L.onMouseEnter();
      },
      onMouseLeave: () => {
        var t;
        null === (t = e.onMouseLeave) || void 0 === t || t.call(e), L.onMouseLeave();
      },
      innerClassName: eM.buttonContents,
      wrapperClassName: eM.button,
      children: A ? R : (0, i.jsxs)(y.Z, {
        align: y.Z.Align.CENTER,
        children: [
          R,
          eP.Z.Messages.GO_LIVE_SHARE_SCREEN
        ]
      })
    })
  });
}
  });
}
class eH extends a.PureComponent {
  renderConnectionStatus() {
let e;
let {
  channel: t,
  guild: n,
  rtcConnectionQuality: a,
  rtcConnectionState: s,
  rtcConnectionLastPing: r,
  hasVideo: l,
  isBroadcasting: o
} = this.props;
if (null == t)
  return null;
let d = (0, D.F6)(t, eS.default, eT.Z);
return null != n ? (e = ex.Z5c.CHANNEL(n.id, t.id), d = ''.concat(d, ' / ').concat(n.name)) : e = ex.Z5c.CHANNEL(ex.ME, t.id), o && t.isBroadcastChannel() && (d = eP.Z.Messages.BROADCASTING), (0, i.jsx)(Y.Z, {
  channelId: t.id,
  quality: a,
  state: s,
  lastPing: r,
  hasVideo: l,
  children: (0, i.jsx)(m.FocusRing, {
    children: (0, i.jsx)(c.rU, {
      to: e,
      onClick: this.handleChannelLinkClick,
      onContextMenu: this.handleChannelLinkContextMenu,
      children: (0, i.jsx)(eL.Z, {
        className: eM.channel,
        children: d
      })
    })
  })
});
  }
  renderNoiseCancellation() {
let {
  noiseCancellationActive: e,
  noiseCancellationError: t,
  hasLayers: n,
  remoteVoiceState: a,
  channel: s,
  voiceStates: r
} = this.props;
return null != a ? null : (null == s ? void 0 : s.isGuildStageVoice()) && !(null != r.find(e => e.user.id === e_.default.getId() && (0, ee.gf)(e.voiceState) === ee.xO.ON_STAGE)) && (0, J.U5)(s.id) ? (0, i.jsx)(eG, {}) : !n && t ? (0, i.jsx)(m.Tooltip, {
  text: eP.Z.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
  tooltipClassName: eM.noiseCancellationTooltip,
  forceOpen: !0,
  children: e => {
    let {
      'aria-label': t
    } = e;
    return (0, i.jsx)(eZ.Z, {
      'aria-label': t,
      tooltipText: null,
      disabled: !0,
      icon: m.WaveformSlashIcon
    });
  }
}) : (0, i.jsx)(m.Popout, {
  position: 'top',
  align: 'center',
  renderPopout: () => (0, i.jsx)(eU, {}),
  children: (t, n) => {
    let {
      isShown: a
    } = n;
    return (0, i.jsx)(eV, {
      popoutProps: t,
      isShown: a,
      noiseCancellationActive: e
    });
  }
}, 'krisp-popout');
  }
  renderVoiceStates() {
let {
  channel: e,
  voiceStates: t,
  showVoiceStates: n
} = this.props;
return null != e && n && 0 !== t.length ? (0, i.jsx)(eR.Z, {
  voiceStates: t,
  channel: e,
  className: eM.voiceUsers
}) : null;
  }
  renderChannelButtons() {
let {
  channel: e,
  canGoLive: t,
  remoteVoiceState: n,
  enableActivities: a,
  voiceStates: s,
  selfStream: l,
  isPrivateChannelWithEnabledActivities: o
} = this.props;
if (null == e || null != n)
  return null;
let c = e_.default.getId();
if (e.isGuildStageVoice()) {
  if (!(0, Q.tu)(e.guild_id) || !t)
    return null;
  let n = s.find(e => e.user.id === c);
  if (null == n || n.voiceState.suppress)
    return null;
}
let d = (e.isGuildVoice() || o) && a,
  {
    reachedLimit: u
  } = (0, ei.t)(e),
  _ = (0, Q.xJ)(e.id);
return (0, i.jsxs)('div', {
  className: eM.actionButtons,
  children: [
    (0, i.jsx)(ek, {
      channel: e,
      enableActivities: d,
      disabled: !_ && u
    }),
    (0, i.jsx)(eB, {
      channel: e,
      canGoLive: t,
      enableActivities: d,
      disabled: e.isGuildStageVoice() && (_ && null == l || !_ && u)
    }),
    (0, i.jsxs)(i.Fragment, {
      children: [
        d ? (0, i.jsx)(ew, {
          channel: e,
          enableActivities: a
        }) : null,
        (0, W.Z)(e) ? (0, i.jsx)(z.Z, {
          className: r()(eM.button, eM.buttonColor),
          innerClassName: eM.buttonContents,
          iconClassName: eM.buttonIcon,
          channel: e
        }) : null
      ]
    })
  ]
});
  }
  render() {
let {
  channel: e,
  noiseCancellationSupported: t,
  shouldShowVoicePanelIntroduction: n
} = this.props;
return null == e ? null : (0, i.jsx)(m.Popout, {
  renderPopout: this.renderVoicePanelIntroduction,
  position: 'top',
  align: 'center',
  animation: m.Popout.Animation.TRANSLATE,
  shouldShow: n,
  children: () => (0, i.jsxs)('div', {
    className: eM.container,
    children: [
      (0, i.jsxs)(y.Z, {
        className: eM.connection,
        align: y.Z.Align.CENTER,
        children: [
          (0, i.jsx)('div', {
            className: eM.inner,
            children: this.renderConnectionStatus()
          }),
          (0, i.jsxs)(y.Z, {
            grow: 0,
            shrink: 0,
            children: [
              t ? this.renderNoiseCancellation() : null,
              (0, i.jsx)(eO.Z, {
                channel: e
              })
            ]
          })
        ]
      }),
      this.renderVoiceStates(),
      this.renderChannelButtons()
    ]
  })
});
  }
  constructor(...e) {
super(...e), ey(this, 'canScreenshare', () => {
  let {
    channel: e,
    canGoLive: t
  } = this.props;
  return t && null != e && null != e.getGuildId();
}), ey(this, 'handleNoiseCancellationClicked', () => {
  let {
    noiseCancellationActive: e
  } = this.props;
  I.Z.setNoiseCancellation(!e, {
    section: ex.jXE.NOISE_CANCELLATION_POPOUT
  });
}), ey(this, 'handleGoLive', () => {
  let {
    guild: e,
    channel: t
  } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
  if (null != n)
    (0, eo.Z)(n, t.id, ex.Sbl.VOICE_PANEL);
}), ey(this, 'handleChannelLinkClick', e => {
  var t;
  let {
    guild: n,
    channel: i
  } = this.props;
  o()(null != i, 'Channel is null during navigation click'), e.stopPropagation(), p.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ex.ME, i.id);
}), ey(this, 'handleChannelLinkContextMenu', e => {
  let {
    channel: t
  } = this.props;
  (0, g.jW)(e, async () => {
    let {
      default: e
    } = await n.e('56944').then(n.bind(n, 600830));
    return n => (0, i.jsx)(e, {
      ...n,
      channel: t
    });
  });
}), ey(this, 'handleCloseVoicePanelIntroduction', () => {
  B.Kw(eb.v.VOICE_PANEL_INTRODUCTION);
}), ey(this, 'renderVoicePanelIntroduction', () => (0, i.jsxs)('div', {
  className: r()(eM.voicePanelIntroductionWrapper, 'theme-light'),
  children: [
    (0, i.jsx)(m.Heading, {
      className: eM.voicePanelIntroductionHeader,
      variant: 'heading-md/semibold',
      children: eP.Z.Messages.VOICE_PANEL_INTRODUCTION_HEADER
    }),
    (0, i.jsx)(m.Text, {
      className: eM.voicePanelIntroductionText,
      variant: 'text-sm/normal',
      children: eP.Z.Messages.VOICE_PANEL_INTRODUCTION_TEXT
    }),
    (0, i.jsx)(m.Button, {
      className: eM.voicePanelIntroductionButton,
      color: m.Button.Colors.BRAND,
      onClick: this.handleCloseVoicePanelIntroduction,
      children: eP.Z.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
    })
  ]
}));
  }
}

function eV(e) {
  let {
popoutProps: t,
isShown: n,
noiseCancellationActive: s
  } = e, {
play: r,
Component: l,
events: o
  } = (0, E.P)(s ? 'disable' : 'enable');
  return a.useEffect(() => () => r(), [
s,
r
  ]), (0, i.jsx)(eZ.Z, {
...t,
onMouseEnter: () => {
  var e;
  null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter();
},
onMouseLeave: () => {
  o.onMouseLeave();
},
tooltipClassName: eM.noiseCancellationTooltip,
tooltipText: n ? null : eP.Z.Messages.NOISE_CANCELLATION_TOOLTIP,
icon: l
  });
}
t.Z = (0, S.Z)(function(e) {
  let t = (0, U.Z)(),
n = (0, d.e7)([j.Z], () => j.Z.getAwaitingRemoteSessionInfo()),
s = (0, d.e7)([eS.default], () => eS.default.getCurrentUser()),
{
  channelId: r,
  ...l
} = (0, d.cj)([ep.Z], () => null != t ? {
  channelId: t.channelId,
  rtcConnectionQuality: ex.IE4.FINE,
  rtcConnectionState: ex.hes.RTC_CONNECTED,
  rtcConnectionLastPing: 0
} : {
  channelId: ep.Z.getChannelId(),
  rtcConnectionQuality: ep.Z.getQuality(),
  rtcConnectionState: ep.Z.getState(),
  rtcConnectionLastPing: ep.Z.getLastPing()
}),
o = (0, d.e7)([eh.Z], () => eh.Z.getChannel(r), [r]),
c = null == o ? void 0 : o.getGuildId(),
u = (0, d.e7)([eE.Z], () => eE.Z.getGuild(c), [c]),
_ = (0, d.cj)([eI.Z], () => ({
  noiseCancellationSupported: eI.Z.isNoiseCancellationSupported(),
  noiseCancellationActive: eI.Z.getNoiseCancellation(),
  noiseCancellationError: eI.Z.isNoiseCancellationError(),
  canGoLive: (0, k.Z)(eI.Z)
})),
h = (0, d.e7)([
  eI.Z,
  H.Z
], () => H.Z.hasHotspot(eb.v.VOICE_PANEL_INTRODUCTION) && (0, ev.EO)(s) && !eI.Z.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
E = (0, d.e7)([ef.Z], () => null != r && ef.Z.hasVideo(r), [r]),
I = (0, d.e7)([eu.Z], () => eu.Z.getCurrentUserActiveStream()),
g = (0, d.e7)([em.Z], () => em.Z.hasLayers()),
p = (0, d.e7)([V.Z], () => V.Z.isViewingRoles(c)),
T = (0, d.e7)([eg.Z], () => p && !eg.Z.can(ex.Plq.VIEW_CHANNEL, o), [
  p,
  o
]),
S = et.Fg.useSetting(),
[f, C, N] = (0, d.Wu)([
  eC.ZP,
  K.Z
], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [
  K.Z.getMutableParticipants(o.id, q.pV.SPEAKER),
  K.Z.getParticipantsVersion(o.id),
  null
] : [
  null,
  null,
  null != o ? eC.ZP.getVoiceStatesForChannel(o) : null
], [o]),
v = a.useMemo(() => {
  var e, t;
  return null !== (t = null !== (e = null == f ? void 0 : f.map(e => {
    let {
      user: t,
      userNick: n,
      voiceState: i
    } = e;
    return {
      user: t,
      nick: n,
      voiceState: i
    };
  })) && void 0 !== e ? e : N) && void 0 !== t ? t : [];
}, [
  f,
  C,
  N
]),
[Z, O] = a.useState(!1);
  a.useEffect(() => {
(p || T) && O(!1);
  }, [
p,
T,
O
  ]);
  let {
analyticsLocations: R
  } = (0, b.ZP)(x.Z.RTC_PANEL), M = (0, A.Z)(null != c ? c : ex.lds, null == o ? void 0 : o.id), D = (0, L.Z)(null == o ? void 0 : o.id), y = (0, P.ZP)();
  return (0, i.jsx)(b.Gt, {
value: R,
children: (0, i.jsxs)('div', {
  className: eM.wrapper,
  children: [
    null != t || null != n ? (0, i.jsx)(G.Z, {
      voiceState: t,
      awaitingRemoteSessionInfo: n
    }) : null,
    (0, i.jsx)(eH, {
      ...e,
      ..._,
      ...l,
      enableActivities: M,
      remoteVoiceState: t,
      guild: u,
      channel: o,
      hasVideo: E,
      selfStream: I,
      hasLayers: g,
      voiceStates: v,
      showVoiceStates: S,
      shouldShowVoicePanelIntroduction: h,
      isPrivateChannelWithEnabledActivities: D,
      isBroadcasting: y
    }),
    !Z && p && null != c ? (0, i.jsxs)('div', {
      className: eM.viewAsRolesWarning,
      children: [
        (0, i.jsx)(m.Text, {
          variant: 'text-sm/normal',
          className: eM.viewAsRolesWarningText,
          children: T ? eP.Z.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eP.Z.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }),
        (0, i.jsx)(m.Button, {
          className: eM.viewAsRolesWarningButton,
          size: m.Button.Sizes.MIN,
          onClick: () => {
            O(!0);
          },
          children: eP.Z.Messages.DISMISS
        })
      ]
    }) : null
  ]
})
  });
});