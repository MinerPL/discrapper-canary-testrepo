"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("99690"),
  u = n("40851"),
  d = n("657305"),
  c = n("835473"),
  f = n("12498"),
  h = n("933557"),
  m = n("995123"),
  p = n("554747"),
  E = n("854698"),
  C = n("897669"),
  g = n("984370"),
  S = n("910611"),
  _ = n("454585"),
  T = n("134483"),
  I = n("809244"),
  A = n("618158"),
  v = n("496675"),
  N = n("366695"),
  x = n("586791"),
  M = n("502568"),
  R = n("792125"),
  L = n("358221"),
  y = n("887012"),
  O = n("613548"),
  j = n("221888"),
  P = n("339340"),
  D = n("354459"),
  b = n("981631"),
  U = n("231338"),
  F = n("689938"),
  w = n("635962"),
  k = n("931093");

function H(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, l = (0, u.useAppContext)(), s = (0, i.useStateFromStores)([L.default], () => L.default.getLayout(n.id, l));
  return (0, a.jsx)(A.default, {
    children: (0, a.jsx)(j.default, {
      className: w.participants,
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: l === b.AppContext.POPOUT || s === b.ChannelLayouts.FULL_SCREEN
    })
  })
}

function B(e) {
  let {
    user: t,
    channel: n,
    stream: l,
    color: s
  } = e, i = (0, I.default)(n, t, l);
  return null == t || null == l ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.default, {
      className: w.avatar,
      size: r.AvatarSizes.SIZE_24,
      user: t,
      animate: !1
    }), (0, a.jsx)(r.Text, {
      className: w.playingText,
      variant: "text-md/medium",
      color: s,
      children: i
    })]
  })
}

function G(e) {
  let t, {
      focusedApplication: n,
      focusedParticipant: l,
      channel: s
    } = e,
    i = (0, y.default)(s, !0),
    o = (0, p.useActiveEvent)(s.id),
    u = null != o ? (0, E.getNextRecurrenceIdInEvent)(o) : null,
    c = null != o;
  if ((null == l ? void 0 : l.type) === D.ParticipantTypes.ACTIVITY) null != n && (t = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(M.default.Divider, {
      className: w.divider
    }), (0, a.jsx)(N.default, {
      game: n,
      className: w.activityIcon
    }), (0, a.jsx)(r.Text, {
      className: w.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, d.default)(n.name)
    }), i && (0, a.jsx)(H, {
      channel: s,
      focusedParticipant: l
    })]
  }));
  else if ((null == l ? void 0 : l.type) === D.ParticipantTypes.STREAM) {
    let e = l.user,
      n = l.stream;
    t = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.default.Divider, {
        className: w.divider
      }), (0, a.jsx)(B, {
        user: e,
        channel: s,
        stream: n,
        color: i ? "header-primary" : "none"
      }), i && (0, a.jsx)(H, {
        channel: s,
        focusedParticipant: l
      })]
    })
  } else c && (t = (0, a.jsx)(C.default, {
    guildEvent: o,
    recurrenceId: u
  }));
  return (0, a.jsx)("div", {
    className: w.container,
    children: t
  })
}

function V(e) {
  let {
    channel: t,
    guild: l,
    appContext: o,
    inCall: u,
    isChatOpen: d,
    exitFullScreen: p
  } = e, {
    focusedParticipant: E
  } = (0, i.useStateFromStoresObject)([L.default], () => ({
    focusedParticipant: L.default.getSelectedParticipant(t.id),
    participantsOpen: L.default.getParticipantsOpen(t.id)
  }), [t.id]), C = (0, h.default)(t), I = (0, m.default)(t), [A] = (0, c.default)((null == E ? void 0 : E.type) === D.ParticipantTypes.ACTIVITY ? [E.id] : []), N = F.default.Messages.VOICE_CHANNEL;
  t.isDM() ? N = F.default.Messages.DM : t.isGroupDM() && (N = F.default.Messages.GROUP_DM);
  let y = (0, i.useStateFromStores)([f.default], () => f.default.getChannelStatus(t)),
    j = t.isGuildVoice() && u && null != y && y.length > 0,
    H = (0, i.useStateFromStores)([v.default], () => v.default.can(b.Permissions.SET_VOICE_CHANNEL_STATUS, t)),
    B = j ? (0, a.jsx)(r.Tooltip, {
      text: F.default.Messages.VOICE_CHANNEL_SET_STATUS,
      delay: 500,
      position: "bottom",
      shouldShow: H,
      children: e => (0, a.jsxs)(r.Clickable, {
        ...e,
        className: s()(w.channelStatusClickable, {
          [w.hoverable]: H
        }),
        onClick: H ? V : void 0,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          className: s()(w.channelStatus, k.markup, {
            [w.hoverable]: H
          }),
          children: _.default.parseVoiceChannelStatus(y, !0, {
            channelId: t.id
          })
        }), H && (0, a.jsx)(x.default, {
          className: s()(w.pencilIcon, w.hoverable),
          width: 14,
          height: 14
        })]
      })
    }) : null;

  function V() {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, "339340"));
      return n => (0, a.jsx)(e, {
        channel: t,
        ...n
      })
    }, {
      modalKey: P.VOICE_CHANNEL_STATUS_MODAL_KEY
    })
  }
  return (0, a.jsxs)("div", {
    className: w.subtitleContainer,
    children: [(0, a.jsxs)(M.default, {
      onDoubleClick: g.handleDoubleClick,
      transparent: !0,
      className: (0, R.getThemeClass)(U.ThemeTypes.DARK),
      childrenBottom: B,
      toolbar: (0, a.jsx)(O.default, {
        inPopout: o === b.AppContext.POPOUT,
        channel: t,
        appContext: o,
        inCall: u,
        isChatOpen: d,
        exitFullScreen: p
      }),
      children: [null != I ? (0, a.jsx)(M.default.Icon, {
        icon: I,
        disabled: !0,
        "aria-label": N
      }) : null, (0, a.jsx)(M.default.Title, {
        children: C
      }), (0, a.jsx)(S.HeaderGuildBreadcrumb, {
        channel: t,
        guild: l
      }), (0, a.jsx)(G, {
        focusedApplication: A,
        focusedParticipant: E,
        channel: t
      })]
    }), (0, a.jsx)(T.default, {
      channelId: t.id
    })]
  })
}