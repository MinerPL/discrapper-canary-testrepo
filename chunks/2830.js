"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n.n(r),
  o = n("446674"),
  d = n("77078"),
  c = n("76813"),
  f = n("992207"),
  h = n("374014"),
  m = n("336804"),
  p = n("311197"),
  E = n("830251"),
  g = n("170643"),
  S = n("550410"),
  C = n("124824"),
  _ = n("640553"),
  I = n("104815"),
  T = n("925674"),
  v = n("331759"),
  x = n("63260"),
  N = n("422736"),
  A = n("280168"),
  M = n("664336"),
  R = n("68148"),
  j = n("980423"),
  L = n("191145"),
  y = n("598785"),
  O = n("226735"),
  P = n("340513"),
  D = n("99795"),
  b = n("49111"),
  U = n("782340"),
  w = n("963405");

function F(e) {
  let {
    channelId: t,
    guildId: n
  } = e, l = Date.now(), s = (0, o.useStateFromStores)([A.default, L.default], () => u(A.default.getSpeakers()).map(e => L.default.getParticipant(t, e)).filter(e => null != e && e.type === D.ParticipantTypes.USER && e.speaking && !(0, E.default)(e)).sortBy(e => -A.default.getSpeakingDuration(e.user.id, l)).slice(0, 3).value());
  return 0 === s.length ? null : (0, a.jsx)(a.Fragment, {
    children: s.map((e, t) => (0, a.jsx)(d.Tooltip, {
      position: "bottom",
      color: d.Tooltip.Colors.GREY,
      text: U.default.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
        username: e.user.username
      }),
      children: l => (0, a.jsx)(R.default, {
        ...l,
        className: i(w.speaker, {
          [w.last]: t === s.length - 1
        }),
        user: e.user,
        speaking: !0,
        collapsed: !0,
        guildId: n
      })
    }, e.id))
  })
}

function V(e) {
  let {
    inPopout: t,
    channel: n,
    appContext: s,
    inCall: i,
    isChatOpen: r,
    exitFullScreen: u
  } = e, E = n.id, {
    voiceParticipantsHidden: A,
    selectedParticipant: R,
    userParticipantCount: U
  } = (0, o.useStateFromStoresObject)([L.default], () => ({
    selectedParticipant: L.default.getSelectedParticipant(E),
    voiceParticipantsHidden: L.default.getVoiceParticipantsHidden(E),
    userParticipantCount: L.default.getUserParticipantCount(E)
  }), [E]), V = (0, y.default)(n), {
    preventIdle: k,
    allowIdle: H
  } = (0, S.usePreventIdle)("popup"), B = [];
  if (V) {
    let e = (null == R ? void 0 : R.type) === D.ParticipantTypes.STREAM ? (0, h.decodeStreamKey)(R.id) : void 0,
      t = (null == R ? void 0 : R.type) === D.ParticipantTypes.ACTIVITY ? R.id : void 0;
    B.push((0, a.jsx)(v.default, {
      className: w.button,
      channel: n,
      applicationId: t,
      stream: e,
      exitFullScreen: u,
      analyticsLocation: n.type === b.ChannelTypes.GUILD_VOICE ? b.AnalyticsPages.GUILD_CHANNEL : b.AnalyticsPages.DM_CHANNEL
    }, "invite-button"))
  }
  return A && B.push((0, a.jsx)(F, {
    channelId: E,
    guildId: n.guild_id
  }, "current-speaker")), B.push((0, a.jsx)(f.default, {
    className: w.button,
    channelId: E
  }, "clips-enabled-indicator")), (null == R ? void 0 : R.type) === D.ParticipantTypes.STREAM && (B.push((0, a.jsx)(g.default, {
    className: w.button,
    participant: R
  }, "warning")), B.push((0, a.jsx)(m.default, {
    size: j.default.Sizes.LARGE,
    className: w.button,
    participant: R,
    showQuality: !0
  }, "live-indicator"))), A && B.push((0, a.jsx)(d.Popout, {
    position: "bottom",
    renderPopout: () => (0, a.jsx)(C.default, {
      children: (0, a.jsx)(P.default, {
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
        count: U,
        key: "call-members",
        className: w.button
      })
    }
  }, "call-members-popout")), i && B.push(null != R ? (0, a.jsx)(T.default, {
    className: w.button,
    channelId: E
  }, "deselect-participant") : (0, a.jsx)(N.default, {
    className: w.button,
    channelId: E,
    isHorizontal: !0
  }, "select-participant")), !t && B.push((0, a.jsx)(c.default, {
    className: w.button
  }, "clips")), B.push((0, a.jsx)(p.default, {
    onOpen: k,
    onClose: H,
    className: w.button
  }, "recents")), B.push((0, a.jsx)(d.Popout, {
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(C.default, {
        children: (0, a.jsx)(O.default, {
          channelId: E,
          onClose: t,
          appContext: s,
          exitFullScreen: u
        })
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, l.createElement)(I.default, {
        ...e,
        key: "more-options",
        isActive: n,
        className: w.lastButton
      })
    }
  }, "more-options-popout")), !r && (B.push((0, a.jsx)(M.default.Divider, {
    className: w.divider
  }, "divider")), B.push((0, a.jsx)(_.ChatButton, {
    channelId: n.id,
    className: w.chatButtonSpacer,
    disabled: !0
  }, "chat-spacer"))), (0, a.jsx)(a.Fragment, {
    children: B
  })
}