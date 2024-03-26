"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("424973"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("966900"),
  u = n("838048"),
  d = n("359902"),
  c = n("780624"),
  f = n("77078"),
  E = n("272030"),
  h = n("899633"),
  _ = n("835040"),
  C = n("506885"),
  S = n("340906"),
  I = n("271938"),
  m = n("42887"),
  p = n("211248"),
  T = n("200639"),
  g = n("97347"),
  A = n("151185"),
  N = n("342169"),
  R = n("158998"),
  O = n("39141"),
  v = n("782340"),
  L = n("387822");
let M = {
    offset: 2
  },
  P = {
    serverDeaf: {
      icon: T.default,
      colorize: !0,
      getStatus: () => v.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: g.default,
      colorize: !0,
      getStatus: () => v.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: T.default,
      colorize: !1,
      getStatus: () => v.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: g.default,
      colorize: !1,
      getStatus: () => v.default.Messages.VOICE_CHANNEL_MUTED
    }
  },
  y = {
    serverDeaf: {
      icon: o.HeadphonesDenyIcon,
      colorize: !0,
      getStatus: () => v.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: d.MicrophoneDenyIcon,
      colorize: !0,
      getStatus: () => v.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: u.HeadphonesSlashIcon,
      colorize: !1,
      getStatus: () => v.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: c.MicrophoneSlashIcon,
      colorize: !1,
      getStatus: () => v.default.Messages.VOICE_CHANNEL_MUTED
    },
    localMute: {
      icon: d.MicrophoneDenyIcon,
      colorize: !1,
      getStatus: () => v.default.Messages.VOICE_CHANNEL_LOCAL_MUTED
    }
  };

function D(e) {
  var t, s;
  let {
    channel: l,
    user: o,
    nick: u,
    mute: d,
    deaf: c,
    serverMute: I,
    serverDeaf: p
  } = e, T = (0, r.useStateFromStores)([m.default], () => m.default.isLocalMute(o.id)), g = (0, h.default)({
    userId: o.id,
    checkSoundSharing: !0
  }), A = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0, N = o.getAvatarURL(l.guild_id, 24), D = null != u ? u : R.default.getName(o), {
    icon: x,
    colorize: b,
    getStatus: U
  } = null !== (s = function(e) {
    let {
      serverDeaf: t,
      deaf: n,
      serverMute: a,
      mute: s,
      localMute: l
    } = e, i = (0, f.useRedesignIconContext)().enabled;
    if (t) return i ? y.serverDeaf : P.serverDeaf;
    if (n) return i ? y.deaf : P.deaf;
    if (a) return i ? y.serverMute : P.serverMute;
    else if (l) return i ? y.localMute : P.mute;
    else if (s) return i ? y.mute : P.mute
  }({
    serverDeaf: p,
    deaf: c,
    serverMute: I,
    mute: d,
    localMute: T
  })) && void 0 !== s ? s : {}, G = null != U ? v.default.Messages.VOICE_PANEL_USER_TOOLTIP.format({
    userName: D,
    status: U()
  }) : D;

  function j(e) {
    null != A ? (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("834247").then(n.bind(n, "834247"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: o,
        guildId: A,
        channel: l,
        showMediaItems: !0
      })
    }) : (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("406784").then(n.bind(n, "406784"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: o,
        showMediaItems: !0
      })
    })
  }
  return (0, a.jsx)(f.Popout, {
    preload: () => (0, C.default)(o.id, o.getAvatarURL(A, 80), {
      guildId: A,
      channelId: l.id
    }),
    position: "top",
    renderPopout: e => (0, a.jsx)(S.default, {
      location: "RTCConnectionVoiceUsers",
      userId: o.id,
      guildId: A,
      channelId: l.id,
      ...e
    }),
    children: e => (0, a.jsx)(f.Tooltip, {
      text: G,
      children: t => (0, a.jsx)(f.Clickable, {
        ...t,
        ...e,
        className: L.avatarContainer,
        onContextMenu: j,
        focusProps: M,
        children: (0, a.jsx)(_.default, {
          shakeLocation: O.ShakeLocation.VOICE_USER,
          isShaking: g,
          children: (0, a.jsx)("div", {
            className: i(L.avatar, {
              [L.speaking]: g
            }),
            style: {
              backgroundImage: "url(".concat(N, ")")
            },
            children: null != x ? (0, a.jsx)(x, {
              className: i(L.avatarIconOverlay, {
                [L.avatarIconRed]: b
              }),
              color: "currentColor",
              width: 16,
              height: 16,
              foreground: L.avatarIconRed
            }) : null
          })
        })
      })
    })
  })
}

function x(e) {
  let {
    voiceStates: t,
    channel: n,
    className: l
  } = e, [o, u] = s.useState(!1), d = o ? N.default : A.default, c = (0, a.jsx)(p.default, {
    className: L.expandButton,
    onClick: () => u(!o),
    color: p.CircleIconButtonColors.PRIMARY,
    size: p.CircleIconButtonSizes.SIZE_24,
    tooltip: o ? v.default.Messages.VOICE_PANEL_HIDE_EXTRAS : v.default.Messages.VOICE_PANEL_SHOW_EXTRAS,
    icon: (0, a.jsx)(d, {
      width: 16,
      height: 16
    }),
    focusProps: M
  }), E = (0, r.useStateFromStores)([I.default], () => I.default.getId(), []), [h, _] = function(e, t) {
    let n = [];
    for (let a of e) {
      if (a.user.id !== t) {
        if (!n.some(e => e.user.id === a.user.id)) {
          if (n.length >= 7) return [n, !0];
          n.push(a)
        }
      }
    }
    return [n, !1]
  }(t, E), C = _ && o ? t : h;
  return C.length <= 0 ? null : (0, a.jsx)(f.ScrollerThin, {
    className: i(L.scroller, l),
    fade: !0,
    children: (0, a.jsxs)("div", {
      className: L.voiceUsers,
      role: "group",
      "aria-label": v.default.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
      children: [C.map(e => {
        let {
          user: t,
          nick: s,
          voiceState: l
        } = e;
        return t.id !== E ? (0, a.jsx)(D, {
          channel: n,
          user: t,
          nick: s,
          mute: l.isVoiceMuted(),
          deaf: l.isVoiceDeafened(),
          video: l.selfVideo,
          serverMute: l.mute,
          serverDeaf: l.deaf
        }, t.id) : null
      }), _ ? c : null]
    })
  })
}