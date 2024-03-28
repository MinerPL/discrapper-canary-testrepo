"use strict";
l.r(t), l.d(t, {
  default: function() {
    return et
  }
});
var a = l("735250"),
  s = l("470079"),
  n = l("803997"),
  i = l.n(n),
  r = l("442837"),
  u = l("481060"),
  o = l("230711"),
  d = l("812206"),
  c = l("605436"),
  f = l("924557"),
  m = l("954564"),
  S = l("98131"),
  E = l("594190"),
  C = l("695346"),
  _ = l("494620"),
  g = l("592125"),
  N = l("650774"),
  h = l("430824"),
  x = l("131951"),
  I = l("944486"),
  p = l("594174"),
  A = l("449224"),
  R = l("285952"),
  T = l("366695"),
  v = l("346656"),
  L = l("169278"),
  M = l("759231"),
  j = l("360001"),
  O = l("626135"),
  D = l("823379"),
  P = l("63063"),
  G = l("358085"),
  b = l("653255"),
  U = l("989941"),
  F = l("618407"),
  k = l("586290"),
  y = l("233037"),
  w = l("810013"),
  B = l("537135"),
  V = l("641115"),
  H = l("143135"),
  W = l("70722"),
  z = l("981631"),
  K = l("526761"),
  Y = l("689938"),
  Q = l("534079"),
  Z = l("223318");

function J(e) {
  let {
    selectedSource: t,
    selectSource: l,
    sourceChanged: s,
    onChangeSource: n
  } = e, i = (0, r.useStateFromStores)([E.default, A.default], () => (0, G.isWindows)() ? (0, U.default)(E.default, A.default) : null), o = (0, r.useStateFromStores)([d.default], () => (null == i ? void 0 : i.id) != null ? d.default.getApplication(i.id) : null), c = (0, r.useStateFromStores)([E.default], () => E.default.getRunningGames()), f = (0, r.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(D.isNotNullish), [c]), m = null;
  if (null != t ? m = t.name : null != i && (m = i.name), null == m) return null;
  let S = (0, H.default)(i, t, c),
    C = s ? f.find(e => {
      let {
        id: t
      } = e;
      return t === (null == S ? void 0 : S.id)
    }) : o,
    _ = null != t && t.id.startsWith("screen") ? L.default : j.default;
  return (0, a.jsx)(u.FormItem, {
    title: Y.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
    className: Z.modalContent,
    titleClassName: Z.formItemTitleVerySlim,
    children: (0, a.jsxs)(B.default, {
      children: [null != C ? (0, a.jsx)(T.default, {
        game: C,
        size: T.default.Sizes.XSMALL,
        className: Q.selectedIcon
      }) : (0, a.jsx)(_, {
        className: Q.selectedIcon
      }), (0, a.jsx)("span", {
        className: Q.ellipsisText,
        children: m
      }), l ? (0, a.jsx)(u.Button, {
        className: Q.changeButton,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        onClick: n,
        children: Y.default.Messages.CHANGE
      }) : null]
    })
  })
}

function X(e) {
  let {
    onChange: t,
    guildId: l
  } = e, s = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(l));
  return null == s ? (t(), null) : (0, a.jsx)(u.FormItem, {
    title: Y.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
    className: Z.modalContent,
    titleClassName: Z.formItemTitle,
    children: (0, a.jsxs)(B.default, {
      children: [(0, a.jsx)(v.default, {
        guild: s,
        size: v.default.Sizes.SMALLER,
        className: Q.selectedIcon
      }), (0, a.jsx)("span", {
        className: Q.ellipsisText,
        children: s.toString()
      }), (0, a.jsx)(u.Button, {
        className: Q.changeButton,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        onClick: t,
        children: Y.default.Messages.CHANGE
      })]
    })
  })
}

function q(e) {
  let {
    text: t
  } = e;
  return (0, a.jsxs)(R.default, {
    align: R.default.Align.CENTER,
    className: Q.warning,
    children: [(0, a.jsx)(M.default, {
      className: Q.warningIcon
    }), (0, a.jsx)(u.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function $(e) {
  let {
    guildId: t
  } = e, l = (0, r.useStateFromStores)([N.default], () => {
    var e;
    return null !== (e = N.default.getMemberCount(t)) && void 0 !== e ? e : 0
  }), n = C.NotifyFriendsOnGoLive.useSetting(), o = s.useCallback((e, t) => {
    C.NotifyFriendsOnGoLive.updateSetting(t), O.default.track(z.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []);
  return l >= 2 && l <= W.STREAM_NOTIFY_GUILD_MAX_SIZE ? (0, a.jsx)(u.FormItem, {
    className: i()(Z.modalContent, Q.checkboxRow),
    children: (0, a.jsx)(u.Checkbox, {
      value: !!n,
      type: u.Checkbox.Types.INVERTED,
      onChange: o,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: Y.default.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
      })
    })
  }) : null
}

function ee(e) {
  let {
    enabled: t,
    onChange: l
  } = e, n = s.useCallback((e, t) => {
    l(t)
  }, [l]);
  return (0, a.jsx)(u.FormItem, {
    className: i()(Z.modalContent, Q.checkboxRow),
    children: (0, a.jsx)(u.Checkbox, {
      value: t,
      type: u.Checkbox.Types.INVERTED,
      onChange: n,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: Y.default.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL
      })
    })
  })
}

function et(e) {
  let {
    selectedSource: t,
    selectedFPS: l,
    selectedChannelId: n,
    selectedPreset: i,
    selectedResolution: u,
    sourceChanged: d,
    selectedGuildId: E,
    targetGuildPremiumTier: C,
    selectSource: N,
    selectGuild: h,
    sound: A,
    onClose: R,
    onChangeSelectedFPS: T,
    onChangeSelectedResolution: v,
    onChangeSelectedPreset: L,
    onChangeSelectedChannelId: M,
    onChangeSource: j,
    onChangeAudioDevice: O,
    onChangeGuild: D,
    onChangeSound: U,
    isAnimationDone: B
  } = e, H = (0, r.useStateFromStores)([I.default, g.default], () => g.default.getChannel(I.default.getVoiceChannelId())), W = (0, r.useStateFromStores)([b.default], () => b.default.GPUDriversOutdated), Z = (0, r.useStateFromStores)([b.default], () => b.default.problematicGPUDriver), et = (0, r.useStateFromStores)([p.default], () => p.default.getCurrentUser()), el = (0, f.useEnableClips)(), ea = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !el
  }), es = (0, F.default)();
  null != t && t.id.startsWith("screen") && !x.default.supportsScreenSoundshare() && (es = Y.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
  let en = el ? (0, a.jsx)(S.default, {
      guildId: E,
      isAnimationDone: B
    }) : ea ? (0, a.jsx)(m.default, {}) : void 0,
    ei = !!(null == t ? void 0 : t.id.startsWith("camera")),
    er = null != et && et.verified && !et.bot,
    eu = null != H && !(0, c.isPrivateGuildChannel)(H),
    eo = !(0, r.useStateFromStores)([x.default], () => x.default.getHardwareH264());
  return (0, a.jsxs)(s.Fragment, {
    children: [ei ? (0, a.jsx)(k.default, {
      selectedSource: t,
      onChangeVideoDeviceSource: j,
      onChangeAudioDevice: O
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(J, {
        selectSource: N,
        sourceChanged: d,
        onChangeSource: j,
        selectedSource: t
      }), null != es ? (0, a.jsx)(q, {
        text: es
      }) : null, (0, G.isWindows)() && null != t && t.id.startsWith("screen") && null == es ? (0, a.jsx)(ee, {
        enabled: A,
        onChange: U
      }) : null]
    }), h && null != E ? (0, a.jsx)(X, {
      guildId: E,
      onChange: D
    }) : null, null != H ? (0, a.jsx)(w.default, {
      channel: H
    }) : (0, a.jsx)(y.default, {
      guildId: E,
      selectedChannelId: n,
      onChangeSelectedChannelId: M
    }), null != E && er && eu ? (0, a.jsx)($, {
      guildId: E
    }) : null, W ? (0, a.jsx)(q, {
      text: Y.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
    }) : null, Z ? (0, a.jsx)(q, {
      text: Y.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
        helpCenterLink: P.default.getArticleURL(z.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, eo && (0, a.jsx)(_.default, {
      look: _.InfoBoxLooks.WARNING,
      className: Q.hardwareWarning,
      children: Y.default.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
        onClick: () => {
          R(), o.default.open(z.UserSettingsSections.VOICE, null, {
            scrollPosition: K.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, a.jsx)(V.default, {
      selectedPreset: i,
      selectedFPS: l,
      selectedResolution: u,
      targetGuildPremiumTier: C,
      onClose: R,
      onFPSChange: T,
      onResolutionChange: v,
      onPresetChange: L,
      captureDeviceSelected: ei
    }), en]
  })
}