"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("287734"),
  d = n("40851"),
  c = n("358221"),
  f = n("659580"),
  h = n("793865"),
  m = n("575175"),
  p = n("258609"),
  E = n("74299"),
  C = n("924301"),
  g = n("459502"),
  S = n("856691"),
  _ = n("889161"),
  T = n("923973"),
  I = n("829750"),
  A = n("189771"),
  v = n("294629"),
  N = n("793319"),
  x = n("560688"),
  M = n("390322"),
  R = n("871499"),
  L = n("386000"),
  y = n("25827"),
  O = n("314897"),
  j = n("131951"),
  P = n("496675"),
  D = n("944486"),
  b = n("594174"),
  U = n("125015"),
  F = n("389320"),
  w = n("696202"),
  k = n("398246"),
  H = n("372662"),
  B = n("740624"),
  G = n("250183"),
  V = n("87128"),
  W = n("881824"),
  Y = n("471253"),
  z = n("922482"),
  Z = n("200498"),
  K = n("146085"),
  X = n("88751"),
  q = n("427679"),
  Q = n("71275"),
  J = n("600518"),
  $ = n("485287"),
  ee = n("754277"),
  et = n("719100"),
  en = n("184805"),
  ea = n("643632"),
  el = n("270295"),
  es = n("981631"),
  ei = n("689938"),
  er = n("305644");

function eo(e) {
  let {
    channel: t,
    appContext: n
  } = e;
  if ((0, et.default)(t)) {
    (0, W.openEndStageModal)(t, n);
    return
  }
  u.default.disconnect()
}

function eu(e) {
  var t, n;
  let {
    channel: l
  } = e, s = (0, en.default)(l.id), [i, o] = (0, el.default)(l), u = (0, r.useStateFromStores)([P.default], () => P.default.can(es.Permissions.REQUEST_TO_SPEAK, l));
  if (s) return null;
  return (0, a.jsx)(R.CenterControlButton, {
    isActive: i,
    label: (t = i, n = u, t ? ei.default.Messages.AUDIENCE_LOWER_HAND : n ? ei.default.Messages.AUDIENCE_RAISE_HAND_CTA : ei.default.Messages.AUDIENCE_RAISE_HAND_NO_PERMISSION),
    iconComponent: () => (0, a.jsx)(B.default, {
      className: i ? er.raisedHandButtonIconActive : er.raisedHandButtonIcon
    }),
    onClick: o,
    className: er.buttonSpacing,
    disabled: !u && !i
  })
}
let ed = l.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([D.default], () => D.default.getVoiceChannelId() === t.id, [t.id]);
  return (0, a.jsxs)("div", {
    className: er.container,
    children: [(0, a.jsx)(em, {
      channelId: t.id
    }), n ? (0, a.jsx)(eu, {
      channel: t
    }) : null, (0, a.jsx)(ef, {
      channel: t
    })]
  })
});

function ec(e) {
  let {
    onClick: t
  } = e;
  return (0, a.jsx)(o.Button, {
    size: o.Button.Sizes.MEDIUM,
    color: er.primaryButtonColor,
    className: i()(er.buttonSpacing, er.buttonWithTextButton),
    onClick: t,
    children: (0, a.jsxs)("div", {
      className: er.buttonWithTextInnerContainer,
      children: [(0, a.jsx)(H.default, {
        height: 24,
        width: 24,
        className: er.buttonWithTextIcon
      }), (0, a.jsx)(o.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: ei.default.Messages.MODERATOR_RAISE_OWN_HAND
      })]
    })
  })
}

function ef(e) {
  let {
    channel: t,
    onSelect: n
  } = e, l = (0, d.useAppContext)(), {
    canManageGuildEvent: s
  } = (0, _.useManageResourcePermissions)(t), u = (0, r.useStateFromStores)([q.default], () => q.default.getStageInstanceByChannel(t.id), [t.id]), c = (0, r.useStateFromStores)([C.default], () => C.default.getGuildScheduledEvent(null == u ? void 0 : u.guild_scheduled_event_id)), f = (0, r.useStateFromStores)([D.default], () => D.default.getVoiceChannelId() === t.id, [t.id]), {
    suppress: h
  } = (0, v.default)(t), m = O.default.getId(), [p] = (0, el.default)(t), E = X.default.isModerator(m, t.id), g = (0, Z.useCanModerateRequestToSpeak)(t.id), S = s(c);
  return f ? (E || S) && null != u ? (0, a.jsx)(o.Popout, {
    renderPopout: e => {
      let {
        closePopout: s
      } = e;
      return (0, a.jsx)(M.default, {
        children: (0, a.jsx)(o.Menu, {
          navId: "exit-options",
          "aria-label": ei.default.Messages.SET_STATUS,
          onClose: s,
          onSelect: n,
          children: (0, a.jsx)(o.MenuItem, {
            id: "end-stage",
            color: "danger",
            action: () => (0, W.openEndGuildEventConfirmationModal)(t, l),
            label: ei.default.Messages.END_GUILD_EVENT_FOR_EVERYONE,
            icon: w.default
          })
        })
      })
    },
    align: "center",
    position: "top",
    animation: o.Popout.Animation.FADE,
    children: (e, n) => {
      let {
        onClick: s
      } = e, {
        isShown: i
      } = n;
      return (0, a.jsx)(R.CenterControlButton, {
        className: er.buttonSpacing,
        label: ei.default.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
        color: "red",
        iconComponent: () => (0, a.jsx)(F.default, {
          height: 24,
          width: 24
        }),
        onClick: () => eo({
          channel: t,
          appContext: l
        }),
        onPopoutClick: s,
        popoutOpen: i
      })
    }
  }) : h && !g || p ? (0, a.jsx)(o.Button, {
    size: o.Button.Sizes.MEDIUM,
    color: o.Button.Colors.RED,
    className: i()(er.buttonSpacing, er.buttonWithTextButton),
    onClick: () => eo({
      channel: t,
      appContext: l
    }),
    children: (0, a.jsxs)("div", {
      className: er.buttonWithTextInnerContainer,
      children: [(0, a.jsx)(F.default, {
        height: 24,
        width: 24,
        className: er.buttonWithTextIcon
      }), (0, a.jsx)(o.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: ei.default.Messages.AUDIENCE_DISCONNECT
      })]
    })
  }) : (0, a.jsx)(R.CenterControlButton, {
    className: er.buttonSpacing,
    label: ei.default.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
    color: "red",
    iconComponent: () => (0, a.jsx)(F.default, {
      height: 24,
      width: 24
    }),
    onClick: () => eo({
      channel: t,
      appContext: l
    })
  }) : (0, a.jsx)(o.Button, {
    size: o.Button.Sizes.MEDIUM,
    color: o.Button.Colors.GREEN,
    className: i()(er.buttonSpacing, er.buttonWithTextButton),
    onClick: () => {
      var e;
      return e = t, void(0, z.connectToStage)(e)
    },
    children: (0, a.jsxs)("div", {
      className: er.buttonWithTextInnerContainer,
      children: [(0, a.jsx)(U.default, {
        height: 24,
        width: 24,
        className: er.buttonWithTextIcon
      }), (0, a.jsx)(o.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: ei.default.Messages.STAGE_CHANNEL_JOIN
      })]
    })
  })
}

function eh(e) {
  let {
    onClick: t
  } = e;
  return (0, a.jsx)(o.Button, {
    size: o.Button.Sizes.MEDIUM,
    color: er.primaryButtonColor,
    className: i()(er.buttonSpacing, er.buttonWithTextButton),
    onClick: t,
    children: (0, a.jsxs)("div", {
      className: er.buttonWithTextInnerContainer,
      children: [(0, a.jsx)(k.default, {
        height: 24,
        width: 24,
        className: er.buttonWithTextIcon
      }), (0, a.jsx)(o.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: ei.default.Messages.MOVE_ME_TO_AUDIENCE
      })]
    })
  })
}

function em(e) {
  let {
    channelId: t
  } = e, n = (0, r.useStateFromStores)([ee.default], () => ee.default.isMuted()), l = (0, $.useShowStageMusicMuteButton)(t), s = (0, r.useStateFromStores)([ee.default], () => ee.default.shouldPlay());
  return l ? (0, a.jsx)(R.CenterControlButton, {
    isActive: n,
    className: er.buttonSpacing,
    label: n ? ei.default.Messages.STAGE_MUSIC_UNMUTE : ei.default.Messages.STAGE_MUSIC_MUTE,
    iconComponent: () => n ? (0, a.jsx)(V.default, {
      height: 24,
      width: 24
    }) : (0, a.jsx)(G.default, {
      height: 24,
      width: 24
    }),
    onClick: () => (0, J.updateStageMusicMuted)(!n)
  }) : (0, a.jsx)(R.CenterControlButton, {
    isActive: s,
    className: er.buttonSpacing,
    label: s ? ei.default.Messages.STAGE_MUSIC_MUTE : ei.default.Messages.STAGE_MUSIC_UNMUTE,
    iconComponent: () => s ? (0, a.jsx)(G.default, {
      height: 24,
      width: 24
    }) : (0, a.jsx)(V.default, {
      height: 24,
      width: 24
    }),
    onClick: () => (0, J.updateStageMusicShouldPlay)(!s)
  })
}
let ep = l.memo(function(e) {
  let {
    channel: t
  } = e, {
    suppress: n,
    selfMute: l,
    mute: s
  } = (0, v.default)(t), u = (0, Z.useCanModerateRequestToSpeak)(t.id), d = (0, r.useStateFromStores)([p.default], () => null != p.default.getAwaitingRemoteSessionInfo()), {
    cameraUnavailable: C,
    enabled: g
  } = (0, T.default)(), S = (0, A.default)(t), {
    limit: _,
    reachedLimit: R
  } = (0, I.default)(t), O = (0, r.useStateFromStores)([b.default], () => b.default.getCurrentUser()), P = (0, r.useStateFromStores)([j.default], () => (0, E.default)(j.default)), U = (0, r.useStateFromStores)([D.default], () => D.default.getVoiceChannelId() === t.id, [t.id]), F = (0, r.useStateFromStores)([c.default], () => c.default.getStreamParticipants(t.id)[0], [t.id]), w = (0, Q.useStageHasMedia)(t.id), k = _ > 0, H = R && !w || null != F && F.user.id !== (null == O ? void 0 : O.id);
  if (null == O) return null;
  let B = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, a.jsx)(M.default, {
          children: (0, a.jsx)(h.default, {
            onClose: t
          })
        })
      },
      position: "top",
      align: "center",
      animation: o.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: n
        } = e, {
          isShown: l
        } = t;
        return (0, a.jsx)(y.default, {
          centerButton: !0,
          hasPermission: S,
          enabled: g,
          cameraUnavailable: C,
          onChange: N.handleToggleVideo,
          onCameraUnavailable: x.default,
          channelLimitReached: R,
          channelLimit: _,
          popoutOpen: l,
          onPopoutClick: n
        })
      }
    }), (0, a.jsx)(N.GoLiveButton, {
      channel: t,
      currentUser: O,
      exitFullScreen: () => null,
      canGoLive: P,
      hasPermission: S,
      disabled: H
    })]
  });
  return (0, a.jsxs)("div", {
    className: er.container,
    children: [(0, a.jsx)(em, {
      channelId: t.id
    }), U && (0, a.jsx)(eu, {
      channel: t
    }), U && !n ? (0, a.jsxs)("div", {
      className: i()(er.avControls, er.buttonSpacing),
      children: [k && _ > 0 && B, (0, a.jsx)(o.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(M.default, {
            children: (0, a.jsx)(f.default, {
              onClose: t,
              renderInputDevices: !0,
              renderOutputDevices: !0
            })
          })
        },
        align: "center",
        position: "top",
        animation: o.Popout.Animation.FADE,
        children: (e, t) => {
          let {
            onClick: i
          } = e, {
            isShown: r
          } = t;
          return (0, a.jsx)(L.default, {
            centerButton: !0,
            onPopoutClick: i,
            selfMute: l,
            serverMute: s,
            suppress: n,
            popoutOpen: r,
            onClick: () => (0, m.default)(s, n),
            awaitingRemote: d
          })
        }
      })]
    }) : null, U && u && n && (0, a.jsx)(ec, {
      onClick: () => (0, Y.audienceAckRequestToSpeak)(t, !1)
    }), U && !n && (0, a.jsx)(eh, {
      onClick: () => (0, Y.moveSelfToAudience)(t)
    }), (0, a.jsx)(ef, {
      channel: t
    })]
  })
});

function eE(e) {
  let {
    channel: t
  } = e;
  return (0, a.jsxs)("div", {
    className: er.container,
    children: [(0, a.jsx)(em, {
      channelId: t.id
    }), (0, a.jsx)(ef, {
      channel: t
    })]
  })
}
t.default = l.memo(function(e) {
  let {
    channel: t,
    isOnStartStageScreen: n
  } = e, l = (0, en.default)(t.id), s = (0, Z.useCanModerateRequestToSpeak)(t.id), i = (0, r.useStateFromStores)([P.default], () => P.default.can(K.MODERATE_STAGE_CHANNEL_PERMISSIONS, t), [t]), o = (0, ea.default)(t.id), u = (0, r.useStateFromStores)([c.default], () => null != t ? c.default.getSelectedParticipant(t.id) : null), d = !o && null == u;
  return n ? (0, a.jsx)(eE, {
    channel: t
  }) : l || s ? (0, a.jsxs)("div", {
    className: er.containerColumn,
    children: [(0, a.jsxs)("div", {
      className: er.eventPrompts,
      children: [d ? (0, a.jsx)(g.default, {
        channelId: null == t ? void 0 : t.id
      }) : null, (0, a.jsx)("div", {
        className: er.separator
      }), d && i ? (0, a.jsx)(S.default, {
        highlight: !0,
        channel: t
      }) : null, (0, a.jsx)("div", {
        className: er.separator
      })]
    }), (0, a.jsx)(ep, {
      channel: t
    })]
  }) : (0, a.jsx)(ed, {
    channel: t
  })
})