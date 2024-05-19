"use strict";
l.r(t), l.d(t, {
  default: function() {
    return et
  }
});
var a = l("735250"),
  n = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("442837"),
  u = l("481060"),
  o = l("230711"),
  d = l("812206"),
  c = l("605436"),
  f = l("924557"),
  m = l("954564"),
  S = l("98131"),
  E = l("594190"),
  _ = l("695346"),
  N = l("494620"),
  h = l("592125"),
  C = l("650774"),
  g = l("430824"),
  p = l("131951"),
  A = l("944486"),
  x = l("594174"),
  I = l("449224"),
  R = l("285952"),
  T = l("366695"),
  v = l("346656"),
  L = l("169278"),
  M = l("759231"),
  O = l("360001"),
  j = l("626135"),
  D = l("823379"),
  b = l("63063"),
  P = l("358085"),
  U = l("653255"),
  G = l("989941"),
  k = l("618407"),
  w = l("586290"),
  y = l("233037"),
  F = l("810013"),
  V = l("537135"),
  B = l("641115"),
  H = l("143135"),
  W = l("70722"),
  K = l("981631"),
  z = l("526761"),
  Y = l("689938"),
  Q = l("29707"),
  q = l("555066");

function Z(e) {
  let {
    selectedSource: t,
    selectSource: l,
    sourceChanged: n,
    onChangeSource: s
  } = e, i = (0, r.useStateFromStores)([E.default, I.default], () => (0, P.isWindows)() ? (0, G.default)(E.default, I.default) : null), o = (0, r.useStateFromStores)([d.default], () => (null == i ? void 0 : i.id) != null ? d.default.getApplication(i.id) : null), c = (0, r.useStateFromStores)([E.default], () => E.default.getRunningGames()), f = (0, r.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(D.isNotNullish), [c]), m = null;
  if (null != t ? m = t.name : null != i && (m = i.name), null == m) return null;
  let S = (0, H.default)(i, t, c),
    _ = n ? f.find(e => {
      let {
        id: t
      } = e;
      return t === (null == S ? void 0 : S.id)
    }) : o,
    N = null != t && t.id.startsWith("screen") ? L.default : O.default;
  return (0, a.jsx)(u.FormItem, {
    title: Y.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
    className: q.modalContent,
    titleClassName: q.formItemTitleVerySlim,
    children: (0, a.jsxs)(V.default, {
      children: [null != _ ? (0, a.jsx)(T.default, {
        game: _,
        size: T.default.Sizes.XSMALL,
        className: Q.selectedIcon
      }) : (0, a.jsx)(N, {
        className: Q.selectedIcon
      }), (0, a.jsx)("span", {
        className: Q.ellipsisText,
        children: m
      }), l ? (0, a.jsx)(u.Button, {
        className: Q.changeButton,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        onClick: s,
        children: Y.default.Messages.CHANGE
      }) : null]
    })
  })
}

function J(e) {
  let {
    onChange: t,
    guildId: l
  } = e, n = (0, r.useStateFromStores)([g.default], () => g.default.getGuild(l));
  return null == n ? (t(), null) : (0, a.jsx)(u.FormItem, {
    title: Y.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
    className: q.modalContent,
    titleClassName: q.formItemTitle,
    children: (0, a.jsxs)(V.default, {
      children: [(0, a.jsx)(v.default, {
        guild: n,
        size: v.default.Sizes.SMALLER,
        className: Q.selectedIcon
      }), (0, a.jsx)("span", {
        className: Q.ellipsisText,
        children: n.toString()
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

function X(e) {
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
  } = e, l = (0, r.useStateFromStores)([C.default], () => {
    var e;
    return null !== (e = C.default.getMemberCount(t)) && void 0 !== e ? e : 0
  }), s = _.NotifyFriendsOnGoLive.useSetting(), o = n.useCallback((e, t) => {
    _.NotifyFriendsOnGoLive.updateSetting(t), j.default.track(K.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []);
  return l >= 2 && l <= W.STREAM_NOTIFY_GUILD_MAX_SIZE ? (0, a.jsx)(u.FormItem, {
    className: i()(q.modalContent, Q.checkboxRow),
    children: (0, a.jsx)(u.Checkbox, {
      value: !!s,
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
  } = e, s = n.useCallback((e, t) => {
    l(t)
  }, [l]);
  return (0, a.jsx)(u.FormItem, {
    className: i()(q.modalContent, Q.checkboxRow),
    children: (0, a.jsx)(u.Checkbox, {
      value: t,
      type: u.Checkbox.Types.INVERTED,
      onChange: s,
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
    selectedChannelId: s,
    selectedPreset: i,
    selectedResolution: u,
    sourceChanged: d,
    selectedGuildId: E,
    targetGuildPremiumTier: _,
    selectSource: C,
    selectGuild: g,
    sound: I,
    onClose: R,
    onChangeSelectedFPS: T,
    onChangeSelectedResolution: v,
    onChangeSelectedPreset: L,
    onChangeSelectedChannelId: M,
    onChangeSource: O,
    onChangeAudioDevice: j,
    onChangeGuild: D,
    onChangeSound: G,
    isAnimationDone: V
  } = e, H = (0, r.useStateFromStores)([A.default, h.default], () => h.default.getChannel(A.default.getVoiceChannelId())), W = (0, r.useStateFromStores)([U.default], () => U.default.GPUDriversOutdated), q = (0, r.useStateFromStores)([U.default], () => U.default.problematicGPUDriver), et = (0, r.useStateFromStores)([x.default], () => x.default.getCurrentUser()), el = (0, f.useEnableClips)(), ea = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !el
  }), en = (0, k.default)();
  null != t && t.id.startsWith("screen") && !p.default.supportsScreenSoundshare() && (en = Y.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
  let es = el ? (0, a.jsx)(S.default, {
      guildId: E,
      isAnimationDone: V
    }) : ea ? (0, a.jsx)(m.default, {}) : void 0,
    ei = !!(null == t ? void 0 : t.id.startsWith("camera")),
    er = null != et && et.verified && !et.bot,
    eu = null != H && !(0, c.isPrivateGuildChannel)(H),
    eo = !(0, r.useStateFromStores)([p.default], () => p.default.getHardwareH264());
  return (0, a.jsxs)(n.Fragment, {
    children: [ei ? (0, a.jsx)(w.default, {
      selectedSource: t,
      onChangeVideoDeviceSource: O,
      onChangeAudioDevice: j
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(Z, {
        selectSource: C,
        sourceChanged: d,
        onChangeSource: O,
        selectedSource: t
      }), null != en ? (0, a.jsx)(X, {
        text: en
      }) : null, (0, P.isWindows)() && null != t && t.id.startsWith("screen") && null == en ? (0, a.jsx)(ee, {
        enabled: I,
        onChange: G
      }) : null]
    }), g && null != E ? (0, a.jsx)(J, {
      guildId: E,
      onChange: D
    }) : null, null != H ? (0, a.jsx)(F.default, {
      channel: H
    }) : (0, a.jsx)(y.default, {
      guildId: E,
      selectedChannelId: s,
      onChangeSelectedChannelId: M
    }), null != E && er && eu ? (0, a.jsx)($, {
      guildId: E
    }) : null, W ? (0, a.jsx)(X, {
      text: Y.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
    }) : null, q ? (0, a.jsx)(X, {
      text: Y.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
        helpCenterLink: b.default.getArticleURL(K.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, eo && (0, a.jsx)(N.default, {
      look: N.InfoBoxLooks.WARNING,
      className: Q.hardwareWarning,
      children: Y.default.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
        onClick: () => {
          R(), o.default.open(K.UserSettingsSections.VOICE, null, {
            scrollPosition: z.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, a.jsx)(B.default, {
      selectedGuildId: E,
      selectedChannelId: s,
      selectedPreset: i,
      selectedFPS: l,
      selectedResolution: u,
      targetGuildPremiumTier: _,
      onClose: R,
      onFPSChange: T,
      onResolutionChange: v,
      onPresetChange: L,
      captureDeviceSelected: ei
    }), es]
  })
}