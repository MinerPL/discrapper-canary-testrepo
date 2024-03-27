"use strict";
l.r(t), l.d(t, {
  default: function() {
    return et
  }
});
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  r = l.n(s),
  i = l("446674"),
  u = l("77078"),
  o = l("79112"),
  d = l("299285"),
  c = l("454273"),
  f = l("56947"),
  m = l("187001"),
  S = l("504219"),
  C = l("161454"),
  E = l("845579"),
  h = l("216503"),
  N = l("42203"),
  g = l("525065"),
  _ = l("305961"),
  p = l("42887"),
  I = l("18494"),
  x = l("697218"),
  v = l("703370"),
  A = l("145131"),
  T = l("953109"),
  R = l("476263"),
  L = l("267675"),
  M = l("423487"),
  j = l("233437"),
  O = l("599110"),
  D = l("449008"),
  P = l("701909"),
  U = l("773336"),
  w = l("767960"),
  G = l("375202"),
  b = l("916262"),
  y = l("75974"),
  V = l("359812"),
  H = l("273405"),
  k = l("326620"),
  F = l("985997"),
  B = l("16750"),
  W = l("706530"),
  z = l("49111"),
  Z = l("397336"),
  Y = l("782340"),
  K = l("481252"),
  Q = l("961523");

function X(e) {
  let {
    selectedSource: t,
    selectSource: l,
    sourceChanged: a,
    onChangeSource: s
  } = e, r = (0, i.useStateFromStores)([C.default, v.default], () => (0, U.isWindows)() ? (0, G.default)(C.default, v.default) : null), o = (0, i.useStateFromStores)([d.default], () => (null == r ? void 0 : r.id) != null ? d.default.getApplication(r.id) : null), c = (0, i.useStateFromStores)([C.default], () => C.default.getRunningGames()), f = (0, i.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(D.isNotNullish), [c]), m = null;
  if (null != t ? m = t.name : null != r && (m = r.name), null == m) return null;
  let S = (0, B.default)(r, t, c),
    E = a ? f.find(e => {
      let {
        id: t
      } = e;
      return t === (null == S ? void 0 : S.id)
    }) : o,
    h = null != t && t.id.startsWith("screen") ? L.default : j.default;
  return (0, n.jsx)(u.FormItem, {
    title: Y.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
    className: Q.modalContent,
    titleClassName: Q.formItemTitleVerySlim,
    children: (0, n.jsxs)(k.default, {
      children: [null != E ? (0, n.jsx)(T.default, {
        game: E,
        size: T.default.Sizes.XSMALL,
        className: K.selectedIcon
      }) : (0, n.jsx)(h, {
        className: K.selectedIcon
      }), (0, n.jsx)("span", {
        className: K.ellipsisText,
        children: m
      }), l ? (0, n.jsx)(u.Button, {
        className: K.changeButton,
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
  } = e, a = (0, i.useStateFromStores)([_.default], () => _.default.getGuild(l));
  return null == a ? (t(), null) : (0, n.jsx)(u.FormItem, {
    title: Y.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
    className: Q.modalContent,
    titleClassName: Q.formItemTitle,
    children: (0, n.jsxs)(k.default, {
      children: [(0, n.jsx)(R.default, {
        guild: a,
        size: R.default.Sizes.SMALLER,
        className: K.selectedIcon
      }), (0, n.jsx)("span", {
        className: K.ellipsisText,
        children: a.toString()
      }), (0, n.jsx)(u.Button, {
        className: K.changeButton,
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
  return (0, n.jsxs)(A.default, {
    align: A.default.Align.CENTER,
    className: K.warning,
    children: [(0, n.jsx)(M.default, {
      className: K.warningIcon
    }), (0, n.jsx)(u.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function $(e) {
  let {
    guildId: t
  } = e, l = (0, i.useStateFromStores)([g.default], () => {
    var e;
    return null !== (e = g.default.getMemberCount(t)) && void 0 !== e ? e : 0
  }), s = E.NotifyFriendsOnGoLive.useSetting(), o = a.useCallback((e, t) => {
    E.NotifyFriendsOnGoLive.updateSetting(t), O.default.track(z.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []), d = l >= 2 && l <= W.STREAM_NOTIFY_GUILD_MAX_SIZE;
  return d ? (0, n.jsx)(u.FormItem, {
    className: r(Q.modalContent, K.checkboxRow),
    children: (0, n.jsx)(u.Checkbox, {
      value: !!s,
      type: u.Checkbox.Types.INVERTED,
      onChange: o,
      children: (0, n.jsx)(u.Text, {
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
  } = e, s = a.useCallback((e, t) => {
    l(t)
  }, [l]);
  return (0, n.jsx)(u.FormItem, {
    className: r(Q.modalContent, K.checkboxRow),
    children: (0, n.jsx)(u.Checkbox, {
      value: t,
      type: u.Checkbox.Types.INVERTED,
      onChange: s,
      children: (0, n.jsx)(u.Text, {
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
    selectedPreset: r,
    selectedResolution: u,
    sourceChanged: d,
    selectedGuildId: C,
    targetGuildPremiumTier: E,
    selectSource: g,
    selectGuild: _,
    sound: v,
    onClose: A,
    onChangeSelectedFPS: T,
    onChangeSelectedResolution: R,
    onChangeSelectedPreset: L,
    onChangeSelectedChannelId: M,
    onChangeSource: j,
    onChangeAudioDevice: O,
    onChangeGuild: D,
    onChangeSound: G,
    isAnimationDone: k
  } = e, B = (0, i.useStateFromStores)([I.default, N.default], () => N.default.getChannel(I.default.getVoiceChannelId())), W = (0, i.useStateFromStores)([w.default], () => w.default.GPUDriversOutdated), Q = (0, i.useStateFromStores)([w.default], () => w.default.problematicGPUDriver), et = (0, i.useStateFromStores)([x.default], () => x.default.getCurrentUser()), el = (0, f.useEnableClips)(), en = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !el
  }), ea = (0, b.default)();
  null != t && t.id.startsWith("screen") && !p.default.supportsScreenSoundshare() && (ea = Y.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
  let es = el ? (0, n.jsx)(S.default, {
      guildId: C,
      isAnimationDone: k
    }) : en ? (0, n.jsx)(m.default, {}) : void 0,
    er = !!(null == t ? void 0 : t.id.startsWith("camera")),
    ei = null != et && et.verified && !et.bot,
    eu = null != B && !(0, c.isPrivateGuildChannel)(B),
    eo = !(0, i.useStateFromStores)([p.default], () => p.default.getHardwareH264());
  return (0, n.jsxs)(a.Fragment, {
    children: [er ? (0, n.jsx)(y.default, {
      selectedSource: t,
      onChangeVideoDeviceSource: j,
      onChangeAudioDevice: O
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(X, {
        selectSource: g,
        sourceChanged: d,
        onChangeSource: j,
        selectedSource: t
      }), null != ea ? (0, n.jsx)(q, {
        text: ea
      }) : null, (0, U.isWindows)() && null != t && t.id.startsWith("screen") && null == ea ? (0, n.jsx)(ee, {
        enabled: v,
        onChange: G
      }) : null]
    }), _ && null != C ? (0, n.jsx)(J, {
      guildId: C,
      onChange: D
    }) : null, null != B ? (0, n.jsx)(H.default, {
      channel: B
    }) : (0, n.jsx)(V.default, {
      guildId: C,
      selectedChannelId: s,
      onChangeSelectedChannelId: M
    }), null != C && ei && eu ? (0, n.jsx)($, {
      guildId: C
    }) : null, W ? (0, n.jsx)(q, {
      text: Y.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
    }) : null, Q ? (0, n.jsx)(q, {
      text: Y.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
        helpCenterLink: P.default.getArticleURL(z.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, eo && (0, n.jsx)(h.default, {
      look: h.InfoBoxLooks.WARNING,
      className: K.hardwareWarning,
      children: Y.default.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
        onClick: () => {
          A(), o.default.open(z.UserSettingsSections.VOICE, null, {
            scrollPosition: Z.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, n.jsx)(F.default, {
      selectedPreset: r,
      selectedFPS: l,
      selectedResolution: u,
      targetGuildPremiumTier: E,
      onClose: A,
      onFPSChange: T,
      onResolutionChange: R,
      onPresetChange: L,
      captureDeviceSelected: er
    }), es]
  })
}