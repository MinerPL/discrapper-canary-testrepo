"use strict";
n.d(t, {
  Z: function() {
    return et
  }
});
var l = n(735250),
  s = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(442837),
  o = n(481060),
  u = n(230711),
  c = n(812206),
  d = n(605436),
  m = n(924557),
  E = n(954564),
  _ = n(98131),
  S = n(594190),
  h = n(695346),
  g = n(494620),
  Z = n(592125),
  C = n(650774),
  f = n(430824),
  N = n(131951),
  x = n(944486),
  I = n(594174),
  A = n(449224),
  T = n(285952),
  v = n(366695),
  R = n(346656),
  L = n(169278),
  p = n(759231),
  M = n(360001),
  j = n(626135),
  O = n(823379),
  P = n(63063),
  D = n(358085),
  G = n(653255),
  U = n(989941),
  w = n(618407),
  b = n(586290),
  y = n(233037),
  k = n(810013),
  B = n(537135),
  H = n(641115),
  V = n(143135),
  F = n(70722),
  W = n(981631),
  z = n(526761),
  K = n(689938),
  Y = n(29707),
  q = n(555066);

function Q(e) {
  let {
    selectedSource: t,
    selectSource: n,
    sourceChanged: s,
    onChangeSource: a
  } = e, i = (0, r.e7)([S.ZP, A.Z], () => (0, D.isWindows)() ? (0, U.Z)(S.ZP, A.Z) : null), u = (0, r.e7)([c.Z], () => (null == i ? void 0 : i.id) != null ? c.Z.getApplication(i.id) : null), d = (0, r.e7)([S.ZP], () => S.ZP.getRunningGames()), m = (0, r.Wu)([c.Z], () => d.map(e => null != e.id ? c.Z.getApplication(e.id) : null).filter(O.lm), [d]), E = null;
  if (null != t ? E = t.name : null != i && (E = i.name), null == E) return null;
  let _ = (0, V.Z)(i, t, d),
    h = s ? m.find(e => {
      let {
        id: t
      } = e;
      return t === (null == _ ? void 0 : _.id)
    }) : u,
    g = null != t && t.id.startsWith("screen") ? L.Z : M.Z;
  return (0, l.jsx)(o.FormItem, {
    title: K.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
    className: q.modalContent,
    titleClassName: q.formItemTitleVerySlim,
    children: (0, l.jsxs)(B.Z, {
      children: [null != h ? (0, l.jsx)(v.Z, {
        game: h,
        size: v.Z.Sizes.XSMALL,
        className: Y.selectedIcon
      }) : (0, l.jsx)(g, {
        className: Y.selectedIcon
      }), (0, l.jsx)("span", {
        className: Y.ellipsisText,
        children: E
      }), n ? (0, l.jsx)(o.Button, {
        className: Y.changeButton,
        color: o.Button.Colors.PRIMARY,
        size: o.Button.Sizes.SMALL,
        onClick: a,
        children: K.Z.Messages.CHANGE
      }) : null]
    })
  })
}

function J(e) {
  let {
    onChange: t,
    guildId: n
  } = e, s = (0, r.e7)([f.Z], () => f.Z.getGuild(n));
  return null == s ? (t(), null) : (0, l.jsx)(o.FormItem, {
    title: K.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
    className: q.modalContent,
    titleClassName: q.formItemTitle,
    children: (0, l.jsxs)(B.Z, {
      children: [(0, l.jsx)(R.Z, {
        guild: s,
        size: R.Z.Sizes.SMALLER,
        className: Y.selectedIcon
      }), (0, l.jsx)("span", {
        className: Y.ellipsisText,
        children: s.toString()
      }), (0, l.jsx)(o.Button, {
        className: Y.changeButton,
        color: o.Button.Colors.PRIMARY,
        size: o.Button.Sizes.SMALL,
        onClick: t,
        children: K.Z.Messages.CHANGE
      })]
    })
  })
}

function X(e) {
  let {
    text: t
  } = e;
  return (0, l.jsxs)(T.Z, {
    align: T.Z.Align.CENTER,
    className: Y.warning,
    children: [(0, l.jsx)(p.Z, {
      className: Y.warningIcon
    }), (0, l.jsx)(o.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function $(e) {
  let {
    guildId: t
  } = e, n = (0, r.e7)([C.Z], () => {
    var e;
    return null !== (e = C.Z.getMemberCount(t)) && void 0 !== e ? e : 0
  }), a = h.eo.useSetting(), u = s.useCallback((e, t) => {
    h.eo.updateSetting(t), j.default.track(W.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []);
  return n >= 2 && n <= F.tB ? (0, l.jsx)(o.FormItem, {
    className: i()(q.modalContent, Y.checkboxRow),
    children: (0, l.jsx)(o.Checkbox, {
      value: !!a,
      type: o.Checkbox.Types.INVERTED,
      onChange: u,
      children: (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: K.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
      })
    })
  }) : null
}

function ee(e) {
  let {
    enabled: t,
    onChange: n,
    screen: a
  } = e, r = s.useCallback((e, t) => {
    n(t)
  }, [n]);
  return (0, l.jsx)(o.FormItem, {
    className: i()(q.modalContent, Y.checkboxRow),
    children: (0, l.jsx)(o.Checkbox, {
      value: t,
      type: o.Checkbox.Types.INVERTED,
      onChange: r,
      children: (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: a ? K.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL : K.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL
      })
    })
  })
}

function et(e) {
  let {
    selectedSource: t,
    selectedFPS: n,
    selectedChannelId: a,
    selectedPreset: i,
    selectedResolution: o,
    sourceChanged: c,
    selectedGuildId: S,
    targetGuildPremiumTier: h,
    selectSource: C,
    selectGuild: f,
    sound: A,
    onClose: T,
    onChangeSelectedFPS: v,
    onChangeSelectedResolution: R,
    onChangeSelectedPreset: L,
    onChangeSelectedChannelId: p,
    onChangeSource: M,
    onChangeAudioDevice: j,
    onChangeGuild: O,
    onChangeSound: D,
    isAnimationDone: U
  } = e, B = (0, r.e7)([x.Z, Z.Z], () => Z.Z.getChannel(x.Z.getVoiceChannelId())), V = (0, r.e7)([G.Z], () => G.Z.GPUDriversOutdated), F = (0, r.e7)([G.Z], () => G.Z.problematicGPUDriver), q = (0, r.e7)([I.default], () => I.default.getCurrentUser()), et = (0, m.Go)(), en = (0, m.Zq)({
    autoTrackExposure: !et
  }), el = (0, w.Z)();
  null != t && t.id.startsWith("screen") && !N.Z.supportsScreenSoundshare() && (el = K.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
  let es = et ? (0, l.jsx)(_.Z, {
      guildId: S,
      isAnimationDone: U
    }) : en ? (0, l.jsx)(E.Z, {}) : void 0,
    ea = !!(null == t ? void 0 : t.id.startsWith("camera")),
    ei = null != q && q.verified && !q.bot,
    er = null != B && !(0, d.Yk)(B),
    eo = !(0, r.e7)([N.Z], () => N.Z.getHardwareH264());
  return (0, l.jsxs)(s.Fragment, {
    children: [ea ? (0, l.jsx)(b.Z, {
      selectedSource: t,
      onChangeVideoDeviceSource: M,
      onChangeAudioDevice: j
    }) : (0, l.jsxs)("div", {
      children: [(0, l.jsx)(Q, {
        selectSource: C,
        sourceChanged: c,
        onChangeSource: M,
        selectedSource: t
      }), null != el ? (0, l.jsx)(X, {
        text: el
      }) : null, null != t && null == el ? (0, l.jsx)(ee, {
        enabled: A,
        onChange: D,
        screen: t.id.startsWith("screen")
      }) : null]
    }), f && null != S ? (0, l.jsx)(J, {
      guildId: S,
      onChange: O
    }) : null, null != B ? (0, l.jsx)(k.Z, {
      channel: B
    }) : (0, l.jsx)(y.Z, {
      guildId: S,
      selectedChannelId: a,
      onChangeSelectedChannelId: p
    }), null != S && ei && er ? (0, l.jsx)($, {
      guildId: S
    }) : null, V ? (0, l.jsx)(X, {
      text: K.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
    }) : null, F ? (0, l.jsx)(X, {
      text: K.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
        helpCenterLink: P.Z.getArticleURL(W.BhN.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, eo && (0, l.jsx)(g.Z, {
      look: g.z.WARNING,
      className: Y.hardwareWarning,
      children: K.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
        onClick: () => {
          T(), u.Z.open(W.oAB.VOICE, null, {
            scrollPosition: z.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, l.jsx)(H.Z, {
      selectedGuildId: S,
      selectedChannelId: a,
      selectedPreset: i,
      selectedFPS: n,
      selectedResolution: o,
      targetGuildPremiumTier: h,
      onClose: T,
      onFPSChange: v,
      onResolutionChange: R,
      onPresetChange: L,
      captureDeviceSelected: ea
    }), es]
  })
}