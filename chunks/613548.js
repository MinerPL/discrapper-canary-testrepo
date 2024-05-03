"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("848246"),
  d = n("442837"),
  c = n("481060"),
  f = n("320007"),
  h = n("236091"),
  m = n("569545"),
  p = n("517525"),
  E = n("386542"),
  C = n("141321"),
  g = n("44136"),
  S = n("651183"),
  _ = n("618158"),
  T = n("390322"),
  I = n("616286"),
  A = n("961048"),
  N = n("179424"),
  v = n("786915"),
  x = n("975146"),
  M = n("991617"),
  R = n("606304"),
  L = n("502568"),
  y = n("805009"),
  O = n("368666"),
  j = n("358221"),
  P = n("887012"),
  D = n("444253"),
  b = n("355827"),
  U = n("354459"),
  F = n("981631"),
  w = n("689938"),
  k = n("298110");

function H(e) {
  let {
    channelId: t,
    guildId: n
  } = e, l = Date.now(), s = (0, d.useStateFromStores)([R.default, j.default], () => o()(R.default.getSpeakers()).map(e => j.default.getParticipant(t, e)).filter(e => null != e && e.type === U.ParticipantTypes.USER && e.speaking && !(0, g.default)(e)).sortBy(e => -R.default.getSpeakingDuration(e.user.id, l)).slice(0, 3).value());
  return 0 === s.length ? null : (0, a.jsx)(a.Fragment, {
    children: s.map((e, t) => (0, a.jsx)(c.Tooltip, {
      position: "bottom",
      color: c.Tooltip.Colors.GREY,
      text: w.default.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
        username: e.user.username
      }),
      children: l => (0, a.jsx)(y.default, {
        ...l,
        className: i()(k.speaker, {
          [k.last]: t === s.length - 1
        }),
        user: e.user,
        speaking: !0,
        collapsed: !0,
        guildId: n
      })
    }, e.id))
  })
}

function B(e) {
  let {
    inPopout: t,
    channel: n,
    appContext: s,
    inCall: i,
    isChatOpen: r,
    exitFullScreen: o
  } = e, g = n.id, {
    voiceParticipantsHidden: R,
    selectedParticipant: y,
    userParticipantCount: w
  } = (0, d.useStateFromStoresObject)([j.default], () => ({
    selectedParticipant: j.default.getSelectedParticipant(g),
    voiceParticipantsHidden: j.default.getVoiceParticipantsHidden(g),
    userParticipantCount: j.default.getUserParticipantCount(g)
  }), [g]), B = (0, P.default)(n), {
    available: G,
    activated: V,
    hqStreamingState: W
  } = (0, E.usePerksDemo)(u.EntitlementFeatureNames.STREAM_HIGH_QUALITY), Y = G && V && W.hqStreamingIsEnabled, {
    preventIdle: z,
    allowIdle: K
  } = (0, _.usePreventIdle)("popup"), Z = [];
  if (B) {
    let e = (null == y ? void 0 : y.type) === U.ParticipantTypes.STREAM ? (0, m.decodeStreamKey)(y.id) : void 0,
      t = (null == y ? void 0 : y.type) === U.ParticipantTypes.ACTIVITY ? y.id : void 0;
    Z.push((0, a.jsx)(v.default, {
      className: k.button,
      channel: n,
      applicationId: t,
      stream: e,
      exitFullScreen: o,
      analyticsLocation: n.type === F.ChannelTypes.GUILD_VOICE ? F.AnalyticsPages.GUILD_CHANNEL : F.AnalyticsPages.DM_CHANNEL
    }, "invite-button"))
  }
  return R && Z.push((0, a.jsx)(H, {
    channelId: g,
    guildId: n.guild_id
  }, "current-speaker")), Z.push((0, a.jsx)(h.default, {
    className: k.button,
    channelId: g
  }, "clips-enabled-indicator")), (null == y ? void 0 : y.type) === U.ParticipantTypes.STREAM && (Z.push((0, a.jsx)(S.default, {
    className: k.button,
    participant: y
  }, "warning")), Z.push((0, a.jsx)(p.default, {
    size: O.default.Sizes.LARGE,
    className: k.button,
    participant: y,
    showQuality: !0,
    premiumIndicator: Y
  }, "live-indicator"))), R && Z.push((0, a.jsx)(c.Popout, {
    position: "bottom",
    renderPopout: () => (0, a.jsx)(T.default, {
      children: (0, a.jsx)(b.default, {
        channel: n
      })
    }),
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, l.createElement)(x.default, {
        ...e,
        isActive: n,
        count: w,
        key: "call-members",
        className: k.button
      })
    }
  }, "call-members-popout")), i && Z.push(null != y ? (0, a.jsx)(N.default, {
    className: k.button,
    channelId: g
  }, "deselect-participant") : (0, a.jsx)(M.default, {
    className: k.button,
    channelId: g,
    isHorizontal: !0
  }, "select-participant")), !t && Z.push((0, a.jsx)(f.default, {
    className: k.button
  }, "clips")), Z.push((0, a.jsx)(C.default, {
    onOpen: z,
    onClose: K,
    className: k.button
  }, "recents")), Z.push((0, a.jsx)(c.Popout, {
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(T.default, {
        children: (0, a.jsx)(D.default, {
          channelId: g,
          onClose: t,
          appContext: s,
          exitFullScreen: o
        })
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, l.createElement)(A.default, {
        ...e,
        key: "more-options",
        isActive: n,
        className: k.lastButton
      })
    }
  }, "more-options-popout")), !r && (Z.push((0, a.jsx)(L.default.Divider, {
    className: k.divider
  }, "divider")), Z.push((0, a.jsx)(I.ChatButton, {
    channelId: n.id,
    className: k.chatButtonSpacer,
    disabled: !0
  }, "chat-spacer"))), (0, a.jsx)(a.Fragment, {
    children: Z
  })
}