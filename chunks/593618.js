"use strict";
n.d(t, {
  K: function() {
    return en
  },
  Z: function() {
    return ei
  }
}), n(390547), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(477690),
  d = n(481060),
  c = n(317381),
  E = n(666188),
  I = n(246364),
  T = n(746916),
  h = n(965638),
  S = n(160404),
  f = n(41776),
  N = n(777861),
  A = n(565799),
  m = n(501655),
  O = n(517334),
  R = n(344185),
  C = n(199902),
  p = n(77498),
  g = n(984933),
  L = n(607744),
  v = n(158776),
  D = n(9156),
  M = n(594174),
  P = n(938475),
  y = n(940627),
  U = n(705600),
  b = n(737688),
  G = n(242315),
  w = n(944581),
  k = n(632184),
  B = n(170039),
  x = n(761374),
  V = n(602623),
  Z = n(624138),
  H = n(510601),
  F = n(59688),
  Y = n(456774),
  j = n(718582),
  W = n(981631),
  K = n(689938),
  z = n(952972),
  q = n(81311);
let X = (0, Z.Mg)(_.Z.GUILD_TOOLTIP_ICON_SIZE),
  Q = (0, Z.Mg)(_.Z.GUILD_TOOLTIP_ICON_SIZE_V_2);

function J(e, t, n) {
  return 0 === t.length ? null : (0, i.jsxs)("div", {
    className: z.row,
    children: [(0, i.jsx)(e, {
      className: z.activityIcon
    }), (0, i.jsx)(V.Z, {
      guildId: n,
      users: t,
      max: 6
    })]
  })
}

function $(e) {
  let {
    muteConfig: t,
    className: n
  } = e;
  return (null == t ? void 0 : t.end_time) == null ? (0, i.jsx)(d.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: K.Z.Messages.FORM_LABEL_MUTED
  }) : (0, i.jsx)(N.Z, {
    muteConfig: t,
    className: n
  })
}

function ee(e) {
  var t, n, s;
  let {
    guild: a
  } = e, _ = a.id, {
    voiceUsersToShow: E,
    stageSpeakers: I,
    numStageListeners: T,
    streamUsersToShow: h,
    embeddedActivitiesUsers: S,
    gameUsers: f,
    shouldShowGameBadge: N
  } = function(e) {
    let t = e.id,
      n = (0, u.Wu)([g.ZP, R.Z], () => {
        let e = g.ZP.getChannels(t)[g.Zb].filter(e => {
          let {
            channel: t
          } = e;
          return t.type === W.d4z.GUILD_VOICE
        }).map(e => {
          let {
            channel: t
          } = e;
          return t.id
        });
        return [...e, ...Object.values(R.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
      }, [t]),
      i = (0, O.ZP)(t),
      s = r.useMemo(() => i.map(e => e.id), [i]),
      o = (0, u.e7)([P.ZP], () => P.ZP.getVoiceStates(t), [t]),
      a = l().flatMap(n, t => {
        var n;
        return t === e.afkChannelId ? [] : (null !== (n = o[t]) && void 0 !== n ? n : []).map(e => {
          let {
            user: t
          } = e;
          return t
        })
      }),
      _ = (0, u.Wu)([A.Z], () => l().flatMap(s, t => t === e.afkChannelId ? [] : A.Z.getMutableParticipants(t, m.pV.SPEAKER).filter(e => e.type === m.Ui.VOICE).map(e => {
        let {
          user: t
        } = e;
        return t
      }))),
      d = (0, u.e7)([A.Z], () => {
        let e = 0;
        for (let t of s) e += A.Z.getParticipantCount(t, m.pV.AUDIENCE);
        return e
      }),
      E = (0, u.Wu)([C.Z], () => C.Z.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId), [t]),
      I = (0, u.Wu)([v.Z, p.Z], () => a.filter(e => v.Z.getActivities(e.id, t).some(e => (null == e ? void 0 : e.application_id) != null && null != p.Z.getDetectableGame(null == e ? void 0 : e.application_id)))),
      T = (0, H.kM)("Guild Tooltip", !1),
      h = T ? I.map(e => e.id) : [],
      S = (0, u.Wu)([c.ZP], () => c.ZP.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds)), [t]),
      f = (0, u.Wu)([M.default], () => S.map(e => M.default.getUser(e)), [S]),
      N = (0, u.Wu)([M.default], () => E.map(e => M.default.getUser(e)), [E]),
      L = a.filter(e => !E.includes(e.id) && !S.includes(e.id) && !h.includes(e.id)),
      D = N.filter(e => null != e && !S.includes(e.id)),
      y = _.length > 0 || L.length > 0 || D.length > 0 || f.length > 0;
    return {
      voiceUsersToShow: L,
      stageSpeakers: _,
      numStageListeners: d,
      streamUsersToShow: D,
      embeddedActivitiesUsers: f,
      gameUsers: I,
      shouldShowGameBadge: T,
      hasActivity: y
    }
  }(a), L = J(b.Z, f, _), y = J(k.Z, E, _);
  let U = (t = _, n = I, s = T, 0 === n.length ? null : (0, i.jsxs)("div", {
      className: z.row,
      children: [(0, i.jsx)(B.Z, {
        className: z.activityIcon
      }), (0, i.jsx)(V.Z, {
        guildId: t,
        users: n,
        max: 3
      }), (0, i.jsxs)("div", {
        className: z.stageListenerPill,
        children: [(0, i.jsx)(G.Z, {
          width: 16,
          height: 16
        }), (0, i.jsx)(d.Text, {
          className: z.stageListenerCount,
          color: "text-normal",
          variant: "text-xs/normal",
          children: s
        })]
      })]
    })),
    Z = J(x.Z, h, _),
    F = J(w.Z, S, _),
    {
      isMuted: Y,
      muteConfig: j
    } = (0, u.cj)([D.ZP], () => ({
      isMuted: D.ZP.isMuted(_),
      muteConfig: D.ZP.getMuteConfig(_)
    }), [_]);
  return null != L && H.ZP.trackExposure({
    location: "Guild Tooltip"
  }), (0, i.jsxs)(i.Fragment, {
    children: [U, y, Z, N && L, F, Y ? (0, i.jsx)($, {
      muteConfig: j,
      className: o()(z.muteText, {
        [z.muteTextWithActivity]: null != y || null != Z
      })
    }) : null]
  })
}

function et(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, i.jsx)(d.Text, {
    className: z.viewAsRolesWarning,
    color: "text-normal",
    variant: "text-xs/normal",
    children: function(e) {
      switch (e) {
        case I.wB.SUBMITTED:
          return K.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
        case I.wB.REJECTED:
          return K.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
        case I.wB.APPROVED:
          return K.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
        default:
          return K.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED
      }
    }(t)
  })
}

function en(e) {
  let {
    guild: t,
    includeActivity: n = !0
  } = e, r = (0, E.Z)(t), s = (0, T.E)(t.id), a = null != s ? (0, i.jsx)(et, {
    guildJoinRequestStatus: s
  }) : null, l = n ? (0, i.jsx)(ee, {
    guild: t
  }) : null, _ = (0, u.e7)([S.Z], () => S.Z.isViewingRoles(t.id)), c = (0, h.Ij)(t);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: o()(z.row, z.rowGuildName),
      children: [r ? (0, i.jsx)(U.Z, {
        guild: t,
        size: Q,
        className: z.rowIconV2
      }) : (0, i.jsx)(y.Z, {
        guild: t,
        size: X,
        className: z.rowIcon
      }), (0, i.jsx)("span", {
        className: o()(z.guildNameText, {
          [z.guildNameTextLimitedSize]: null != l
        }),
        children: t.toString()
      })]
    }), c ? (0, i.jsx)(d.Text, {
      className: z.invitesDisabledTooltip,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: K.Z.Messages.INVITES_DISABLED_TOOLTIP
    }) : null, _ ? (0, i.jsx)(d.Text, {
      className: z.viewAsRolesWarning,
      color: "text-normal",
      variant: "text-xs/normal",
      children: K.Z.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
    }) : null != a ? a : l]
  })
}

function ei(e) {
  let {
    guild: t,
    disabled: n = !1,
    "aria-label": s = !1,
    children: o,
    includeActivity: a = !0,
    isDragging: l
  } = e, _ = (0, F.o)("guilds_bar", !1), [c, E] = r.useState(!1), I = (0, j.V1)(t), {
    isUserLurking: T,
    isUnverifiedAccount: h
  } = (0, u.cj)([f.Z, L.Z], () => {
    let e = f.Z.isLurking(t.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !L.Z.getCheck(t.id).canChat
    }
  }), S = r.useMemo(() => !T && !h && a && I.length > 0, [T, h, a, I.length]), N = () => {
    S && F.Z.trackExposure({
      location: "guild_tooltip"
    })
  }, A = () => {
    E(!0), N()
  };
  return S && _ ? (0, i.jsx)("div", {
    onMouseEnter: A,
    onMouseLeave: () => E(!1),
    onFocus: A,
    onBlur: () => E(!1),
    children: (0, i.jsx)(d.Popout, {
      position: "right",
      renderPopout: e => {
        var n;
        return (0, i.jsx)(Y.Z, {
          guild: t,
          closePopout: () => E(!1),
          nudge: null !== (n = e.nudge) && void 0 !== n ? n : 0
        })
      },
      spacing: 0,
      onRequestClose: () => E(!1),
      shouldShow: !l && c,
      children: e => (0, i.jsx)("div", {
        ...e,
        children: o
      })
    })
  }) : (0, i.jsx)(d.Tooltip, {
    hideOnClick: !0,
    spacing: 20,
    position: "right",
    text: n ? null : (0, i.jsx)(en, {
      guild: t,
      includeActivity: a
    }),
    "aria-label": s,
    onTooltipShow: N,
    tooltipClassName: q.listItemTooltip,
    children: e => {
      let {
        onFocus: t,
        onBlur: n,
        ...s
      } = e;
      return (0, i.jsx)("div", {
        onFocus: t,
        onBlur: n,
        children: r.cloneElement(r.Children.only(o), {
          ...s
        })
      })
    }
  })
}