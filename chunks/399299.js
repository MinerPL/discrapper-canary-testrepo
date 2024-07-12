t.d(n, {
  Z: function() {
return q;
  }
});
var l = t(735250),
  s = t(470079),
  a = t(120356),
  i = t.n(a),
  r = t(442837),
  o = t(481060),
  u = t(230711),
  c = t(812206),
  d = t(605436),
  m = t(924557),
  E = t(954564),
  _ = t(98131),
  S = t(594190),
  g = t(695346),
  h = t(494620),
  C = t(592125),
  N = t(650774),
  Z = t(430824),
  I = t(131951),
  x = t(944486),
  f = t(594174),
  A = t(449224),
  R = t(285952),
  T = t(366695),
  v = t(346656),
  L = t(626135),
  M = t(823379),
  p = t(63063),
  O = t(358085),
  j = t(653255),
  P = t(989941),
  D = t(618407),
  G = t(586290),
  U = t(233037),
  b = t(810013),
  w = t(537135),
  B = t(641115),
  y = t(143135),
  V = t(70722),
  k = t(981631),
  H = t(526761),
  W = t(689938),
  F = t(829800),
  z = t(1871);

function K(e) {
  let {
selectedSource: n,
selectSource: t,
sourceChanged: s,
onChangeSource: a
  } = e, i = (0, r.e7)([
S.ZP,
A.Z
  ], () => (0, O.isWindows)() ? (0, P.Z)(S.ZP, A.Z) : null), u = (0, r.e7)([c.Z], () => (null == i ? void 0 : i.id) != null ? c.Z.getApplication(i.id) : null), d = (0, r.e7)([S.ZP], () => S.ZP.getRunningGames()), m = (0, r.Wu)([c.Z], () => d.map(e => null != e.id ? c.Z.getApplication(e.id) : null).filter(M.lm), [d]), E = null;
  if (null != n ? E = n.name : null != i && (E = i.name), null == E)
return null;
  let _ = (0, y.Z)(i, n, d),
g = s ? m.find(e => {
  let {
    id: n
  } = e;
  return n === (null == _ ? void 0 : _.id);
}) : u,
h = null != n && n.id.startsWith('screen') ? o.ScreenIcon : o.BrowserIcon;
  return (0, l.jsx)(o.FormItem, {
title: W.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
className: z.modalContent,
titleClassName: z.formItemTitleVerySlim,
children: (0, l.jsxs)(w.Z, {
  children: [
    null != g ? (0, l.jsx)(T.Z, {
      game: g,
      size: T.Z.Sizes.XSMALL,
      className: F.selectedIcon
    }) : (0, l.jsx)(h, {
      className: F.selectedIcon
    }),
    (0, l.jsx)('span', {
      className: F.ellipsisText,
      children: E
    }),
    t ? (0, l.jsx)(o.Button, {
      className: F.changeButton,
      color: o.Button.Colors.PRIMARY,
      size: o.Button.Sizes.SMALL,
      onClick: a,
      children: W.Z.Messages.CHANGE
    }) : null
  ]
})
  });
}

function Y(e) {
  let {
onChange: n,
guildId: t
  } = e, s = (0, r.e7)([Z.Z], () => Z.Z.getGuild(t));
  return null == s ? (n(), null) : (0, l.jsx)(o.FormItem, {
title: W.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
className: z.modalContent,
titleClassName: z.formItemTitle,
children: (0, l.jsxs)(w.Z, {
  children: [
    (0, l.jsx)(v.Z, {
      guild: s,
      size: v.Z.Sizes.SMALLER,
      className: F.selectedIcon
    }),
    (0, l.jsx)('span', {
      className: F.ellipsisText,
      children: s.toString()
    }),
    (0, l.jsx)(o.Button, {
      className: F.changeButton,
      color: o.Button.Colors.PRIMARY,
      size: o.Button.Sizes.SMALL,
      onClick: n,
      children: W.Z.Messages.CHANGE
    })
  ]
})
  });
}

function J(e) {
  let {
text: n
  } = e;
  return (0, l.jsxs)(R.Z, {
align: R.Z.Align.CENTER,
className: F.warning,
children: [
  (0, l.jsx)(o.CircleExclamationPointIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    color: 'currentColor',
    className: F.warningIcon
  }),
  (0, l.jsx)(o.Text, {
    color: 'none',
    variant: 'text-xs/normal',
    children: n
  })
]
  });
}

function Q(e) {
  let {
guildId: n
  } = e, t = (0, r.e7)([N.Z], () => {
var e;
return null !== (e = N.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
  }), a = g.eo.useSetting(), u = s.useCallback((e, n) => {
g.eo.updateSetting(n), L.default.track(k.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
  value: n
});
  }, []);
  return t >= 2 && t <= V.tB ? (0, l.jsx)(o.FormItem, {
className: i()(z.modalContent, F.checkboxRow),
children: (0, l.jsx)(o.Checkbox, {
  value: !!a,
  type: o.Checkbox.Types.INVERTED,
  onChange: u,
  children: (0, l.jsx)(o.Text, {
    variant: 'text-sm/normal',
    children: W.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
  })
})
  }) : null;
}

function X(e) {
  let {
enabled: n,
onChange: t,
screen: a
  } = e, r = s.useCallback((e, n) => {
t(n);
  }, [t]);
  return (0, l.jsx)(o.FormItem, {
className: i()(z.modalContent, F.checkboxRow),
children: (0, l.jsx)(o.Checkbox, {
  value: n,
  type: o.Checkbox.Types.INVERTED,
  onChange: r,
  children: (0, l.jsx)(o.Text, {
    variant: 'text-sm/normal',
    children: a ? W.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL : W.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL
  })
})
  });
}

function q(e) {
  let {
selectedSource: n,
selectedFPS: t,
selectedChannelId: a,
selectedPreset: i,
selectedResolution: o,
sourceChanged: c,
selectedGuildId: S,
targetGuildPremiumTier: g,
selectSource: N,
selectGuild: Z,
sound: A,
onClose: R,
onChangeSelectedFPS: T,
onChangeSelectedResolution: v,
onChangeSelectedPreset: L,
onChangeSelectedChannelId: M,
onChangeSource: O,
onChangeAudioDevice: P,
onChangeGuild: w,
onChangeSound: y,
isAnimationDone: V
  } = e, z = (0, r.e7)([
x.Z,
C.Z
  ], () => C.Z.getChannel(x.Z.getVoiceChannelId())), q = (0, r.e7)([j.Z], () => j.Z.GPUDriversOutdated), $ = (0, r.e7)([j.Z], () => j.Z.problematicGPUDriver), ee = (0, r.e7)([f.default], () => f.default.getCurrentUser()), en = (0, m.Go)(), et = (0, m.Zq)({
autoTrackExposure: !en
  }), el = (0, D.Z)();
  null != n && n.id.startsWith('screen') && !I.Z.supportsScreenSoundshare() && (el = W.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
  let es = en ? (0, l.jsx)(_.Z, {
  guildId: S,
  isAnimationDone: V
}) : et ? (0, l.jsx)(E.Z, {}) : void 0,
ea = !!(null == n ? void 0 : n.id.startsWith('camera')),
ei = null != ee && ee.verified && !ee.bot,
er = null != z && !(0, d.Yk)(z),
eo = !(0, r.e7)([I.Z], () => I.Z.getHardwareEncoding());
  return (0, l.jsxs)(s.Fragment, {
children: [
  ea ? (0, l.jsx)(G.Z, {
    selectedSource: n,
    onChangeVideoDeviceSource: O,
    onChangeAudioDevice: P
  }) : (0, l.jsxs)('div', {
    children: [
      (0, l.jsx)(K, {
        selectSource: N,
        sourceChanged: c,
        onChangeSource: O,
        selectedSource: n
      }),
      null != el ? (0, l.jsx)(J, {
        text: el
      }) : null,
      null != n && null == el ? (0, l.jsx)(X, {
        enabled: A,
        onChange: y,
        screen: n.id.startsWith('screen')
      }) : null
    ]
  }),
  Z && null != S ? (0, l.jsx)(Y, {
    guildId: S,
    onChange: w
  }) : null,
  null != z ? (0, l.jsx)(b.Z, {
    channel: z
  }) : (0, l.jsx)(U.Z, {
    guildId: S,
    selectedChannelId: a,
    onChangeSelectedChannelId: M
  }),
  null != S && ei && er ? (0, l.jsx)(Q, {
    guildId: S
  }) : null,
  q ? (0, l.jsx)(J, {
    text: W.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
  }) : null,
  $ ? (0, l.jsx)(J, {
    text: W.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
      helpCenterLink: p.Z.getArticleURL(k.BhN.NVIDIA_DRIVER_ISSUES)
    })
  }) : null,
  eo && (0, l.jsx)(h.Z, {
    look: h.z.WARNING,
    className: F.hardwareWarning,
    children: W.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
      onClick: () => {
        R(), u.Z.open(k.oAB.VOICE, null, {
          scrollPosition: H.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
        });
      }
    })
  }),
  (0, l.jsx)(B.Z, {
    selectedPreset: i,
    selectedFPS: t,
    selectedResolution: o,
    targetGuildPremiumTier: g,
    onClose: R,
    onFPSChange: T,
    onResolutionChange: v,
    onPresetChange: L,
    captureDeviceSelected: ea
  }),
  es
]
  });
}