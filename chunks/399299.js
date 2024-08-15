t.d(n, {
  Z: function() {
return J;
  }
});
var l = t(735250),
  s = t(470079),
  a = t(120356),
  r = t.n(a),
  i = t(442837),
  o = t(481060),
  c = t(230711),
  u = t(812206),
  d = t(605436),
  m = t(924557),
  E = t(954564),
  _ = t(98131),
  S = t(600164),
  g = t(594190),
  h = t(925329),
  C = t(565138),
  I = t(695346),
  N = t(494620),
  x = t(592125),
  Z = t(650774),
  f = t(430824),
  R = t(131951),
  A = t(944486),
  T = t(594174),
  v = t(449224),
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
  k = t(641115),
  B = t(143135),
  V = t(70722),
  y = t(981631),
  H = t(526761),
  W = t(689938),
  F = t(85586),
  z = t(458623);

function K(e) {
  let {
selectedSource: n,
selectSource: t,
sourceChanged: s,
onChangeSource: a
  } = e, r = (0, i.e7)([
g.ZP,
v.Z
  ], () => (0, O.isWindows)() ? (0, P.Z)(g.ZP, v.Z) : null), c = (0, i.e7)([u.Z], () => (null == r ? void 0 : r.id) != null ? u.Z.getApplication(r.id) : null), d = (0, i.e7)([g.ZP], () => g.ZP.getRunningGames()), m = (0, i.Wu)([u.Z], () => d.map(e => null != e.id ? u.Z.getApplication(e.id) : null).filter(M.lm), [d]), E = null;
  if (null != n ? E = n.name : null != r && (E = r.name), null == E)
return null;
  let _ = (0, B.Z)(r, n, d),
S = s ? m.find(e => {
  let {
    id: n
  } = e;
  return n === (null == _ ? void 0 : _.id);
}) : c,
C = null != n && n.id.startsWith('screen') ? o.ScreenIcon : o.BrowserIcon;
  return (0, l.jsx)(o.FormItem, {
title: W.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
className: z.modalContent,
titleClassName: z.formItemTitleVerySlim,
children: (0, l.jsxs)(w.Z, {
  children: [
    null != S ? (0, l.jsx)(h.Z, {
      game: S,
      size: h.Z.Sizes.XSMALL,
      className: F.selectedIcon
    }) : (0, l.jsx)(C, {
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
  } = e, s = (0, i.e7)([f.Z], () => f.Z.getGuild(t));
  return null == s ? (n(), null) : (0, l.jsx)(o.FormItem, {
title: W.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
className: z.modalContent,
titleClassName: z.formItemTitle,
children: (0, l.jsxs)(w.Z, {
  children: [
    (0, l.jsx)(C.Z, {
      guild: s,
      size: C.Z.Sizes.SMALLER,
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

function Q(e) {
  let {
text: n
  } = e;
  return (0, l.jsxs)(S.Z, {
align: S.Z.Align.CENTER,
className: F.warning,
children: [
  (0, l.jsx)(o.CircleWarningIcon, {
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

function X(e) {
  let {
guildId: n
  } = e, t = (0, i.e7)([Z.Z], () => {
var e;
return null !== (e = Z.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
  }), a = I.eo.useSetting(), c = s.useCallback((e, n) => {
I.eo.updateSetting(n), L.default.track(y.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
  value: n
});
  }, []);
  return t >= 2 && t <= V.tB ? (0, l.jsx)(o.FormItem, {
className: r()(z.modalContent, F.checkboxRow),
children: (0, l.jsx)(o.Checkbox, {
  value: !!a,
  type: o.Checkbox.Types.INVERTED,
  onChange: c,
  children: (0, l.jsx)(o.Text, {
    variant: 'text-sm/normal',
    children: W.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
  })
})
  }) : null;
}

function q(e) {
  let {
enabled: n,
onChange: t,
screen: a
  } = e, i = s.useCallback((e, n) => {
t(n);
  }, [t]);
  return (0, l.jsx)(o.FormItem, {
className: r()(z.modalContent, F.checkboxRow),
children: (0, l.jsx)(o.Checkbox, {
  value: n,
  type: o.Checkbox.Types.INVERTED,
  onChange: i,
  children: (0, l.jsx)(o.Text, {
    variant: 'text-sm/normal',
    children: a ? W.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL : W.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL
  })
})
  });
}

function J(e) {
  let {
selectedSource: n,
selectedFPS: t,
selectedChannelId: a,
selectedPreset: r,
selectedResolution: o,
sourceChanged: u,
selectedGuildId: S,
targetGuildPremiumTier: g,
selectSource: h,
selectGuild: C,
sound: I,
onClose: Z,
onChangeSelectedFPS: f,
onChangeSelectedResolution: v,
onChangeSelectedPreset: L,
onChangeSelectedChannelId: M,
onChangeSource: O,
onChangeAudioDevice: P,
onChangeGuild: w,
onChangeSound: B,
isAnimationDone: V
  } = e, z = (0, i.e7)([
A.Z,
x.Z
  ], () => x.Z.getChannel(A.Z.getVoiceChannelId())), J = (0, i.e7)([j.Z], () => j.Z.GPUDriversOutdated), $ = (0, i.e7)([j.Z], () => j.Z.problematicGPUDriver), ee = (0, i.e7)([T.default], () => T.default.getCurrentUser()), en = (0, m.Go)(), et = (0, m.Zq)({
autoTrackExposure: !en
  }), el = (0, D.Z)();
  null != n && n.id.startsWith('screen') && !R.Z.supportsScreenSoundshare() && (el = W.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
  let es = en ? (0, l.jsx)(_.Z, {
  guildId: S,
  isAnimationDone: V
}) : et ? (0, l.jsx)(E.Z, {}) : void 0,
ea = !!(null == n ? void 0 : n.id.startsWith('camera')),
er = null != ee && ee.verified && !ee.bot,
ei = null != z && !(0, d.Yk)(z),
eo = !(0, i.e7)([R.Z], () => R.Z.getHardwareEncoding());
  return (0, l.jsxs)(s.Fragment, {
children: [
  ea ? (0, l.jsx)(G.Z, {
    selectedSource: n,
    onChangeVideoDeviceSource: O,
    onChangeAudioDevice: P
  }) : (0, l.jsxs)('div', {
    children: [
      (0, l.jsx)(K, {
        selectSource: h,
        sourceChanged: u,
        onChangeSource: O,
        selectedSource: n
      }),
      null != el ? (0, l.jsx)(Q, {
        text: el
      }) : null,
      null != n && null == el ? (0, l.jsx)(q, {
        enabled: I,
        onChange: B,
        screen: n.id.startsWith('screen')
      }) : null
    ]
  }),
  C && null != S ? (0, l.jsx)(Y, {
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
  null != S && er && ei ? (0, l.jsx)(X, {
    guildId: S
  }) : null,
  J ? (0, l.jsx)(Q, {
    text: W.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
  }) : null,
  $ ? (0, l.jsx)(Q, {
    text: W.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
      helpCenterLink: p.Z.getArticleURL(y.BhN.NVIDIA_DRIVER_ISSUES)
    })
  }) : null,
  eo && (0, l.jsx)(N.Z, {
    look: N.z.WARNING,
    className: F.hardwareWarning,
    children: W.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
      onClick: () => {
        Z(), c.Z.open(y.oAB.VOICE, null, {
          scrollPosition: H.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
        });
      }
    })
  }),
  (0, l.jsx)(k.Z, {
    selectedPreset: r,
    selectedFPS: t,
    selectedResolution: o,
    targetGuildPremiumTier: g,
    onClose: Z,
    onFPSChange: f,
    onResolutionChange: v,
    onPresetChange: L,
    captureDeviceSelected: ea
  }),
  es
]
  });
}