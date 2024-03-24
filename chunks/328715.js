"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007");
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("446674"),
  r = n("77078"),
  u = n("308289"),
  o = n("244201"),
  d = n("204947"),
  c = n("442939"),
  f = n("207273"),
  h = n("679653"),
  m = n("619335"),
  p = n("534222"),
  E = n("822516"),
  g = n("138286"),
  S = n("539938"),
  C = n("557809"),
  _ = n("367376"),
  I = n("23033"),
  T = n("616718"),
  v = n("550410"),
  x = n("957255"),
  N = n("953109"),
  A = n("832132"),
  M = n("664336"),
  R = n("439932"),
  j = n("191145"),
  L = n("598785"),
  y = n("2830"),
  O = n("836087"),
  P = n("843624"),
  D = n("99795"),
  b = n("49111"),
  U = n("843455"),
  w = n("782340"),
  F = n("434225"),
  V = n("919163");

function k(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, l = (0, o.useAppContext)(), s = (0, i.useStateFromStores)([j.default], () => j.default.getLayout(n.id, l));
  return (0, a.jsx)(v.default, {
    children: (0, a.jsx)(O.default, {
      className: F.participants,
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: l === b.AppContext.POPOUT || s === b.ChannelLayouts.FULL_SCREEN
    })
  })
}

function H(e) {
  let {
    user: t,
    channel: n,
    stream: l,
    color: s
  } = e, i = (0, T.default)(n, t, l);
  return null == t || null == l ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.default, {
      className: F.avatar,
      size: r.AvatarSizes.SIZE_24,
      user: t,
      animate: !1
    }), (0, a.jsx)(r.Text, {
      className: F.playingText,
      variant: "text-md/medium",
      color: s,
      children: i
    })]
  })
}

function B(e) {
  let t, {
      focusedApplication: n,
      focusedParticipant: l,
      channel: s
    } = e,
    i = (0, L.default)(s, !0),
    u = (0, p.useActiveEvent)(s.id),
    o = null != u ? (0, E.getNextRecurrenceIdInEvent)(u) : null,
    c = null != u;
  if ((null == l ? void 0 : l.type) === D.ParticipantTypes.ACTIVITY) null != n && (t = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(M.default.Divider, {
      className: F.divider
    }), (0, a.jsx)(N.default, {
      game: n,
      className: F.activityIcon
    }), (0, a.jsx)(r.Text, {
      className: F.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, d.default)(n.name)
    }), i && (0, a.jsx)(k, {
      channel: s,
      focusedParticipant: l
    })]
  }));
  else if ((null == l ? void 0 : l.type) === D.ParticipantTypes.STREAM) {
    let e = l.user,
      n = l.stream;
    t = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.default.Divider, {
        className: F.divider
      }), (0, a.jsx)(H, {
        user: e,
        channel: s,
        stream: n,
        color: i ? "header-primary" : "none"
      }), i && (0, a.jsx)(k, {
        channel: s,
        focusedParticipant: l
      })]
    })
  } else c && (t = (0, a.jsx)(g.default, {
    guildEvent: u,
    recurrenceId: o
  }));
  return (0, a.jsx)("div", {
    className: F.container,
    children: t
  })
}

function G(e) {
  let {
    channel: t,
    guild: l,
    appContext: u,
    inCall: o,
    isChatOpen: d,
    exitFullScreen: p
  } = e, {
    focusedParticipant: E
  } = (0, i.useStateFromStoresObject)([j.default], () => ({
    focusedParticipant: j.default.getSelectedParticipant(t.id),
    participantsOpen: j.default.getParticipantsOpen(t.id)
  }), [t.id]), g = (0, h.default)(t), T = (0, m.default)(t), [v] = (0, c.default)((null == E ? void 0 : E.type) === D.ParticipantTypes.ACTIVITY ? [E.id] : []), N = w.default.Messages.VOICE_CHANNEL;
  t.isDM() ? N = w.default.Messages.DM : t.isGroupDM() && (N = w.default.Messages.GROUP_DM);
  let L = (0, i.useStateFromStores)([f.default], () => f.default.getChannelStatus(t)),
    O = t.isGuildVoice() && o && null != L && L.length > 0,
    k = (0, i.useStateFromStores)([x.default], () => x.default.can(b.Permissions.SET_VOICE_CHANNEL_STATUS, t)),
    H = O ? (0, a.jsx)(r.Tooltip, {
      text: w.default.Messages.VOICE_CHANNEL_SET_STATUS,
      delay: 500,
      position: "bottom",
      shouldShow: k,
      children: e => (0, a.jsxs)(r.Clickable, {
        ...e,
        className: s(F.channelStatusClickable, {
          [F.hoverable]: k
        }),
        onClick: k ? G : void 0,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          className: s(F.channelStatus, V.markup, {
            [F.hoverable]: k
          }),
          children: _.default.parseVoiceChannelStatus(L, !0, {
            channelId: t.id
          })
        }), k && (0, a.jsx)(A.default, {
          className: s(F.pencilIcon, F.hoverable),
          width: 14,
          height: 14
        })]
      })
    }) : null;

  function G() {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("843624").then(n.bind(n, "843624"));
      return n => (0, a.jsx)(e, {
        channel: t,
        ...n
      })
    }, {
      modalKey: P.VOICE_CHANNEL_STATUS_MODAL_KEY
    })
  }
  return (0, a.jsxs)("div", {
    className: F.subtitleContainer,
    children: [(0, a.jsxs)(M.default, {
      onDoubleClick: S.handleDoubleClick,
      transparent: !0,
      className: (0, R.getThemeClass)(U.ThemeTypes.DARK),
      childrenBottom: H,
      toolbar: (0, a.jsx)(y.default, {
        inPopout: u === b.AppContext.POPOUT,
        channel: t,
        appContext: u,
        inCall: o,
        isChatOpen: d,
        exitFullScreen: p
      }),
      children: [null != T ? (0, a.jsx)(M.default.Icon, {
        icon: T,
        disabled: !0,
        "aria-label": N
      }) : null, (0, a.jsx)(M.default.Title, {
        children: g
      }), (0, a.jsx)(C.HeaderGuildBreadcrumb, {
        channel: t,
        guild: l
      }), (0, a.jsx)(B, {
        focusedApplication: v,
        focusedParticipant: E,
        channel: t
      })]
    }), (0, a.jsx)(I.default, {
      channelId: t.id
    })]
  })
}