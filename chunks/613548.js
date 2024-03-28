"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("320007"),
  f = n("236091"),
  h = n("569545"),
  m = n("517525"),
  p = n("141321"),
  E = n("44136"),
  C = n("651183"),
  g = n("618158"),
  S = n("390322"),
  _ = n("616286"),
  T = n("961048"),
  I = n("179424"),
  A = n("786915"),
  v = n("975146"),
  N = n("991617"),
  x = n("606304"),
  M = n("502568"),
  R = n("805009"),
  L = n("368666"),
  y = n("358221"),
  O = n("887012"),
  j = n("444253"),
  P = n("355827"),
  D = n("354459"),
  b = n("981631"),
  U = n("689938"),
  F = n("371969");

function w(e) {
  let {
    channelId: t,
    guildId: n
  } = e, l = Date.now(), s = (0, u.useStateFromStores)([x.default, y.default], () => o()(x.default.getSpeakers()).map(e => y.default.getParticipant(t, e)).filter(e => null != e && e.type === D.ParticipantTypes.USER && e.speaking && !(0, E.default)(e)).sortBy(e => -x.default.getSpeakingDuration(e.user.id, l)).slice(0, 3).value());
  return 0 === s.length ? null : (0, a.jsx)(a.Fragment, {
    children: s.map((e, t) => (0, a.jsx)(d.Tooltip, {
      position: "bottom",
      color: d.Tooltip.Colors.GREY,
      text: U.default.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
        username: e.user.username
      }),
      children: l => (0, a.jsx)(R.default, {
        ...l,
        className: i()(F.speaker, {
          [F.last]: t === s.length - 1
        }),
        user: e.user,
        speaking: !0,
        collapsed: !0,
        guildId: n
      })
    }, e.id))
  })
}

function k(e) {
  let {
    inPopout: t,
    channel: n,
    appContext: s,
    inCall: i,
    isChatOpen: r,
    exitFullScreen: o
  } = e, E = n.id, {
    voiceParticipantsHidden: x,
    selectedParticipant: R,
    userParticipantCount: U
  } = (0, u.useStateFromStoresObject)([y.default], () => ({
    selectedParticipant: y.default.getSelectedParticipant(E),
    voiceParticipantsHidden: y.default.getVoiceParticipantsHidden(E),
    userParticipantCount: y.default.getUserParticipantCount(E)
  }), [E]), k = (0, O.default)(n), {
    preventIdle: H,
    allowIdle: B
  } = (0, g.usePreventIdle)("popup"), G = [];
  if (k) {
    let e = (null == R ? void 0 : R.type) === D.ParticipantTypes.STREAM ? (0, h.decodeStreamKey)(R.id) : void 0,
      t = (null == R ? void 0 : R.type) === D.ParticipantTypes.ACTIVITY ? R.id : void 0;
    G.push((0, a.jsx)(A.default, {
      className: F.button,
      channel: n,
      applicationId: t,
      stream: e,
      exitFullScreen: o,
      analyticsLocation: n.type === b.ChannelTypes.GUILD_VOICE ? b.AnalyticsPages.GUILD_CHANNEL : b.AnalyticsPages.DM_CHANNEL
    }, "invite-button"))
  }
  return x && G.push((0, a.jsx)(w, {
    channelId: E,
    guildId: n.guild_id
  }, "current-speaker")), G.push((0, a.jsx)(f.default, {
    className: F.button,
    channelId: E
  }, "clips-enabled-indicator")), (null == R ? void 0 : R.type) === D.ParticipantTypes.STREAM && (G.push((0, a.jsx)(C.default, {
    className: F.button,
    participant: R
  }, "warning")), G.push((0, a.jsx)(m.default, {
    size: L.default.Sizes.LARGE,
    className: F.button,
    participant: R,
    showQuality: !0
  }, "live-indicator"))), x && G.push((0, a.jsx)(d.Popout, {
    position: "bottom",
    renderPopout: () => (0, a.jsx)(S.default, {
      children: (0, a.jsx)(P.default, {
        channel: n
      })
    }),
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, l.createElement)(v.default, {
        ...e,
        isActive: n,
        count: U,
        key: "call-members",
        className: F.button
      })
    }
  }, "call-members-popout")), i && G.push(null != R ? (0, a.jsx)(I.default, {
    className: F.button,
    channelId: E
  }, "deselect-participant") : (0, a.jsx)(N.default, {
    className: F.button,
    channelId: E,
    isHorizontal: !0
  }, "select-participant")), !t && G.push((0, a.jsx)(c.default, {
    className: F.button
  }, "clips")), G.push((0, a.jsx)(p.default, {
    onOpen: H,
    onClose: B,
    className: F.button
  }, "recents")), G.push((0, a.jsx)(d.Popout, {
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(S.default, {
        children: (0, a.jsx)(j.default, {
          channelId: E,
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
      return (0, l.createElement)(T.default, {
        ...e,
        key: "more-options",
        isActive: n,
        className: F.lastButton
      })
    }
  }, "more-options-popout")), !r && (G.push((0, a.jsx)(M.default.Divider, {
    className: F.divider
  }, "divider")), G.push((0, a.jsx)(_.ChatButton, {
    channelId: n.id,
    className: F.chatButtonSpacer,
    disabled: !0
  }, "chat-spacer"))), (0, a.jsx)(a.Fragment, {
    children: G
  })
}