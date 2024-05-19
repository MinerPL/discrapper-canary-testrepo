"use strict";
n.r(t), n.d(t, {
  getCategoryIcon: function() {
    return K
  },
  getClickHandler: function() {
    return Z
  },
  getJoinButton: function() {
    return X
  },
  getSubtitle: function() {
    return z
  },
  useCardTitle: function() {
    return Y
  },
  useCount: function() {
    return j
  },
  useImage: function() {
    return W
  }
}), n("47120");
var i = n("735250");
n("470079");
var r = n("831209"),
  a = n("442837"),
  s = n("481060"),
  o = n("812206"),
  l = n("557135"),
  u = n("66999"),
  d = n("15274"),
  _ = n("217804"),
  c = n("703656"),
  E = n("881824"),
  I = n("922482"),
  T = n("565799"),
  f = n("501655"),
  S = n("427679"),
  h = n("592125"),
  A = n("271383"),
  m = n("496675"),
  N = n("594174"),
  p = n("979651"),
  O = n("366695"),
  C = n("305878"),
  R = n("119828"),
  g = n("737688"),
  L = n("158010"),
  v = n("944581"),
  D = n("645284"),
  M = n("632184"),
  y = n("170039"),
  P = n("26290"),
  U = n("51144"),
  b = n("59688"),
  G = n("623552"),
  w = n("718582"),
  k = n("126134"),
  B = n("981631"),
  V = n("765305"),
  x = n("689938"),
  F = n("181096");

function H(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = N.default.getUser(e);
      if (null == n) return null;
      let r = A.default.getNick(i, n.id);
      return null !== (t = null != r ? r : U.default.getGlobalName(n)) && void 0 !== t ? t : U.default.getUserTag(n)
    }).filter(e => null != e)),
    a = r.length;
  if (a > 0) return 1 === a ? r[0] : (2 === a ? x.default.Messages.USER_SUMMARY_TWO : 3 === a ? x.default.Messages.USER_SUMMARY_THREE : x.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: a - 3
  })
}

function Y(e, t) {
  let {
    category: n
  } = e, i = (0, w.useSortUserIdsByAffinity)(n === k.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), r = (0, w.useSortUserIdsByAffinity)(n === k.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), s = (0, w.useSortUserIdsByAffinity)(n === k.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), o = (0, a.useStateFromStores)([h.default], () => {
    let t = n === k.CardCategory.HANGOUT || n === k.CardCategory.GAMING ? e.channelId : n === k.CardCategory.EVENT ? e.event.channel_id : n === k.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : null;
    return h.default.getChannel(t)
  }), {
    usersToShow: l
  } = (0, w.useGetEventCardUsers)(o), u = new Set;
  n === k.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
    u = new Set([...u, ...e.userIds])
  });
  let d = (0, w.useSortUserIdsByAffinity)(n === k.CardCategory.EMBEDDED_ACTIVITY ? [...u] : []);
  switch (n) {
    case k.CardCategory.HANGOUT: {
      let n = e.isStage ? l.map(e => e.id) : [],
        a = H(n.length > 0 ? n : r.length > 0 ? r : i, t);
      if (e.isStage) {
        var _, c;
        return null !== (c = null === (_ = S.default.getStageInstanceByChannel(e.channelId)) || void 0 === _ ? void 0 : _.topic) && void 0 !== c ? c : a
      }
      return a
    }
    case k.CardCategory.EVENT:
      return e.event.name;
    case k.CardCategory.EMBEDDED_ACTIVITY:
      return H(d, t);
    case k.CardCategory.GAMING:
      return H(s, t);
    default:
      return null
  }
}

function j(e) {
  let {
    category: t
  } = e, n = (0, a.useStateFromStores)([h.default], () => {
    let n = t === k.CardCategory.HANGOUT || t === k.CardCategory.GAMING ? e.channelId : t === k.CardCategory.EVENT ? e.event.channel_id : t === k.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : null;
    return h.default.getChannel(n)
  }), {
    audienceCount: i
  } = (0, w.useGetEventCardUsers)(n);
  switch (t) {
    case k.CardCategory.EVENT:
      if (null != i) return [{
        icon: y.default,
        count: i
      }];
      return [];
    case k.CardCategory.HANGOUT:
      let {
        streamUserIds: r, userIds: s, channelId: o, isStage: l
      } = e;
      if (l) {
        var u;
        return [{
          icon: y.default,
          count: null !== (u = T.default.getParticipantCount(o, f.StageChannelParticipantNamedIndex.AUDIENCE)) && void 0 !== u ? u : 0
        }]
      }
      if (r.length > 0) return [{
        icon: L.default,
        count: s.length > 0 ? s.length : null
      }];
      return [];
    case k.CardCategory.EMBEDDED_ACTIVITY:
      return [{
        icon: L.default,
        count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
      }, {
        icon: D.default,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }];
    case k.CardCategory.GAMING:
      return [{
        icon: L.default,
        count: e.voiceStates.length > 0 ? e.voiceStates.length : null
      }, {
        icon: D.default,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }];
    default:
      return []
  }
}

function W(e, t, n) {
  let {
    cardType: s
  } = b.default.getCurrentConfig({
    location: "join_button"
  }, {
    autoTrackExposure: !1
  }), l = s === k.GuildPeekCardTypes.WHAT, {
    category: u
  } = e, d = (0, a.useStateFromStores)([h.default], () => {
    let t = u === k.CardCategory.HANGOUT || u === k.CardCategory.GAMING ? e.channelId : u === k.CardCategory.EVENT ? e.event.channel_id : u === k.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : null;
    return h.default.getChannel(t)
  }), {
    usersToShow: _
  } = (0, w.useGetEventCardUsers)(d);
  switch (u) {
    case k.CardCategory.GAMING:
      let {
        games: c
      } = e;
      if (null == c[0].application_id) return (0, i.jsx)(g.default, {});
      return (0, i.jsx)(O.default, {
        game: o.default.getApplication(c[0].application_id),
        size: "xl",
        className: F.gameIcon
      });
    case k.CardCategory.EVENT:
      if (_.length > 0) return (0, i.jsx)(G.default, {
        guildId: t,
        users: _
      });
      return e.isStage ? (0, i.jsx)(y.default, {
        className: F.imageIcon
      }) : (0, i.jsx)(C.default, {
        className: F.imageIcon
      });
    case k.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: E
      } = e;
      if (null == E[0].applicationId) return (0, i.jsx)(v.default, {});
      return (0, i.jsx)(O.default, {
        game: o.default.getApplication(E[0].applicationId),
        size: "xl",
        className: F.gameIcon
      });
    case k.CardCategory.HANGOUT: {
      let {
        streamUserIds: a,
        userIds: s,
        channelHasVideo: o,
        isStage: u
      } = e;
      if (l) {
        if (u) return (0, i.jsx)(y.default, {
          className: F.imageIcon
        });
        return a.length > 0 ? (0, i.jsx)(D.default, {
          className: F.imageIcon
        }) : o ? (0, i.jsx)(R.default, {
          className: F.imageIcon
        }) : (0, i.jsx)(M.default, {
          className: F.imageIcon
        })
      }
      let d = u ? _ : [];
      if (u) {
        if (0 === d.length) return (0, i.jsx)(y.default, {
          className: F.imageIcon
        });
        return (0, i.jsx)(G.default, {
          guildId: t,
          users: d
        })
      }
      if (a.length > 0) {
        let e = e => (0, i.jsx)(P.TextBadge, {
          text: x.default.Messages.LIVE,
          color: r.default.STATUS_DANGER,
          className: e
        });
        if (null == n) return e();
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("img", {
            src: n,
            alt: "",
            height: 64,
            width: 64,
            className: F.streamPreview
          }), e(F.liveBadge)]
        })
      }
      let c = s.map(e => N.default.getUser(e)).filter(e => null != e);
      return (0, i.jsx)(G.default, {
        guildId: t,
        users: c
      })
    }
  }
}

function K(e) {
  let {
    category: t
  } = e;
  switch (t) {
    case k.CardCategory.GAMING:
      return g.default;
    case k.CardCategory.EVENT:
      return C.default;
    case k.CardCategory.EMBEDDED_ACTIVITY:
      return v.default;
    case k.CardCategory.HANGOUT: {
      let {
        streamUserIds: t,
        isStage: n
      } = e;
      if (n) return y.default;
      if (t.length > 0) return D.default;
      return M.default
    }
  }
}

function z(e) {
  var t, n, r, a, s, l, u;
  let {
    category: d
  } = e;
  switch (d) {
    case k.CardCategory.GAMING:
      let {
        games: c, channelId: E
      } = e;
      if (1 === c.length) return x.default.Messages.GAMING_IN_CHANNEL.format({
        channelName: null === (n = h.default.getChannel(E)) || void 0 === n ? void 0 : n.name,
        gameName: c[0].name
      });
      return x.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
        numGames: c.length,
        channelName: null === (t = h.default.getChannel(E)) || void 0 === t ? void 0 : t.name
      });
    case k.CardCategory.EVENT:
      let {
        event: I
      } = e, T = (0, _.getLocationDataForEvent)(I, h.default.getChannel(I.channel_id)), f = null == T ? void 0 : T.IconComponent, S = null == T ? void 0 : T.locationName;
      if (null != f && null != S) return (0, i.jsxs)("div", {
        className: F.inline,
        children: [(0, i.jsx)(f, {
          className: F.categoryIcon
        }), S]
      });
      return null;
    case k.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: A
      } = e;
      if (1 === A.length) return x.default.Messages.GAMING_IN_CHANNEL.format({
        channelName: null === (a = h.default.getChannel(A[0].channelId)) || void 0 === a ? void 0 : a.name,
        gameName: null === (s = o.default.getApplication(A[0].applicationId)) || void 0 === s ? void 0 : s.name
      });
      return x.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
        channelName: null === (r = h.default.getChannel(A[0].channelId)) || void 0 === r ? void 0 : r.name,
        numActivities: A.length
      });
    case k.CardCategory.HANGOUT: {
      let {
        streamUserIds: t,
        channelId: n
      } = e;
      if (t.length > 0) return x.default.Messages.STREAMING_IN_CHANNEL.format({
        channelName: null === (u = h.default.getChannel(n)) || void 0 === u ? void 0 : u.name
      });
      return null === (l = h.default.getChannel(n)) || void 0 === l ? void 0 : l.name
    }
    default:
      return null
  }
}

function Z(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case k.CardCategory.GAMING:
      return () => {
        (0, c.transitionToGuild)(t, e.channelId)
      };
    case k.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        (0, c.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case k.CardCategory.EVENT:
      return () => {
        (0, d.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case k.CardCategory.HANGOUT:
      return () => {
        (0, c.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function X(e, t) {
  let {
    cardType: n
  } = b.default.getCurrentConfig({
    location: "join_button"
  }, {
    autoTrackExposure: !1
  }), {
    category: r
  } = e, a = null;
  if (null == (a = r === k.CardCategory.EVENT ? e.event.channel_id : r === k.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId)) return;
  let o = p.default.isInChannel(a),
    _ = o ? x.default.Messages.GUILD_POPOUT_JOINED : x.default.Messages.JOIN,
    T = function(e, t) {
      let {
        category: n
      } = e;
      switch (n) {
        case k.CardCategory.HANGOUT:
        case k.CardCategory.GAMING:
          return () => {
            let {
              channelId: n
            } = e, i = h.default.getChannel(n);
            null != i && i.type === B.ChannelTypes.GUILD_VOICE && m.default.can(B.Permissions.CONNECT, i) && (l.default.handleVoiceConnect({
              channel: i,
              connected: p.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(t, n))
          };
        case k.CardCategory.EMBEDDED_ACTIVITY:
          return () => {
            let {
              channelId: n
            } = e.embeddedActivities[0], i = h.default.getChannel(n);
            null != i && i.type === B.ChannelTypes.GUILD_VOICE && m.default.can(B.Permissions.CONNECT, i) && (l.default.handleVoiceConnect({
              channel: i,
              connected: p.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(t, n))
          };
        case k.CardCategory.EVENT:
          return () => {
            let {
              event: t
            } = e, {
              channel_id: n,
              guild_id: i,
              entity_type: r
            } = t, a = h.default.getChannel(n);
            if (null == n || null == a || !m.default.can(B.Permissions.CONNECT, a)) {
              (0, d.openGuildEventDetails)({
                eventId: t.id
              });
              return
            }
            let s = async () => {
              let e = await (0, I.connectOrLurkStage)(i, n);
              (0, E.navigateToStage)(e)
            };
            r === V.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? s() : r === V.GuildScheduledEventEntityTypes.VOICE && (l.default.handleVoiceConnect({
              channel: a,
              connected: p.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(i, n))
          };
        default:
          return null
      }
    }(e, t),
    f = (0, i.jsx)(s.Button, {
      size: s.Button.Sizes.MIN,
      color: s.Button.Colors.GREEN,
      disabled: o,
      onClick: e => {
        e.stopPropagation(), null == T || T()
      },
      className: F.joinButton,
      children: _
    });
  return (0, i.jsx)("div", {
    className: n === k.GuildPeekCardTypes.WHAT ? F.joinButtonWhatWrapper : F.joinButtonWhoWrapper,
    children: f
  })
}