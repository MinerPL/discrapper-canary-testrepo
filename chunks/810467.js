"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
}), n("222007");
var a, s, l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("446674"),
  d = n("669491"),
  c = n("77078"),
  f = n("327037"),
  E = n("812204"),
  h = n("419830"),
  _ = n("374021"),
  C = n("398604"),
  S = n("395869"),
  I = n("824650"),
  m = n("1339"),
  p = n("593897"),
  T = n("534222"),
  g = n("841363"),
  A = n("822516"),
  N = n("393414"),
  R = n("716214"),
  O = n("488464"),
  v = n("998716"),
  L = n("834052"),
  M = n("160870"),
  P = n("506885"),
  y = n("981601"),
  D = n("957255"),
  x = n("697218"),
  b = n("945330"),
  U = n("272339"),
  G = n("89684"),
  j = n("718550"),
  w = n("228427"),
  k = n("290581"),
  F = n("49111"),
  B = n("745049"),
  H = n("782340"),
  V = n("231663");
(s = a || (a = {}))[s.STAGE = 0] = "STAGE", s[s.EVENT_EXTERNAL = 1] = "EVENT_EXTERNAL", s[s.EVENT_VOICE = 2] = "EVENT_VOICE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM";

function Y(e) {
  let {
    guild: t,
    isStudyRoomNotice: n = !1
  } = e, a = (0, p.useActiveEventOrStageInstanceChannel)(t.id), s = (0, T.useGuildActiveEvent)(t.id), r = (0, u.useStateFromStores)([L.default], () => L.default.getStageInstanceByChannel(null == a ? void 0 : a.id), [a]), {
    isStageNoticeHidden: Y,
    isEventNoticeHidden: W
  } = (0, u.useStateFromStoresObject)([I.default], () => ({
    isStageNoticeHidden: I.default.isLiveChannelNoticeHidden({
      stageId: null == r ? void 0 : r.id
    }),
    isEventNoticeHidden: I.default.isLiveChannelNoticeHidden({
      eventId: null == s ? void 0 : s.id
    })
  }), [r, s]), K = null == a ? void 0 : a.id, z = (0, u.useStateFromStoresArray)([O.default], () => [...new Set(O.default.getMutableParticipants(K, v.StageChannelParticipantNamedIndex.SPEAKER).map(e => e.user))], [K]), q = (0, u.useStateFromStores)([O.default], () => null != K ? O.default.getParticipantCount(K, v.StageChannelParticipantNamedIndex.AUDIENCE) : 0, [K]), Q = (0, u.useStateFromStores)([D.default], () => D.default.can(F.Permissions.CONNECT, a)), Z = (0, M.default)(null == a ? void 0 : a.id), X = null == s ? void 0 : s.creator_id, J = (0, u.useStateFromStores)([x.default], () => x.default.getUser(X), [X]);
  i.useEffect(() => {
    null != X && (0, f.getUser)(X)
  }, [X]);
  let {
    noticeType: $,
    title: ee,
    location: et,
    locationIcon: en,
    canListenIn: ea,
    buttonText: es,
    users: el,
    overflowUsers: ei,
    onClose: er
  } = i.useMemo(() => (function(e) {
    let {
      guildEvent: t,
      stageInstance: n,
      activeChannel: a,
      canConnect: s,
      myRole: i,
      eventCreator: r,
      speakers: o,
      listenerCount: u,
      isEventNoticeHidden: d,
      isStageNoticeHidden: f,
      isStudyRoomNotice: E
    } = e, _ = null != n && null != a && !f, I = null != t ? (0, A.getNextRecurrenceIdInEvent)(t) : null;
    if (E && null != a) {
      let e = (0, h.getChannelIconComponent)(a);
      return {
        noticeType: 3,
        title: "\uD83D\uDCDA☕ ".concat(a.name),
        location: H.default.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
        locationIcon: null != e ? (0, l.jsx)(e, {
          width: 16,
          height: 16,
          className: V.locationIcon
        }) : null,
        canListenIn: s,
        buttonText: H.default.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
        users: [],
        overflowUsers: null
      }
    }
    if (null == t || d) {
      if (_) {
        let e = H.default.Messages.STAGE_CHANNEL_JOIN_BUTTON;
        return (null == i ? void 0 : i.speaker) ? e = H.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != i && (e = H.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
          noticeType: 0,
          title: n.topic,
          location: a.name,
          locationIcon: (0, l.jsx)(w.default, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }),
          canListenIn: s,
          buttonText: e,
          onClose: () => (0, S.hideLiveChannelNotice)({
            stageId: null == n ? void 0 : n.id
          }),
          users: o.length > 5 ? o.slice(0, 5) : o,
          overflowUsers: u < 1 ? null : (0, l.jsxs)("div", {
            className: V.pill,
            children: [(0, l.jsx)(U.default, {
              width: 12,
              height: 12,
              className: V.pillIcon
            }), (0, l.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: V.pillLabel,
              children: u
            })]
          })
        }
      }
    } else {
      if (t.entity_type === B.GuildScheduledEventEntityTypes.STAGE_INSTANCE && _) {
        let e = H.default.Messages.STAGE_CHANNEL_JOIN_BUTTON;
        return (null == i ? void 0 : i.speaker) ? e = H.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != i && (e = H.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
          noticeType: 0,
          title: n.topic,
          location: a.name,
          locationIcon: (0, l.jsx)(w.default, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }),
          canListenIn: s,
          buttonText: e,
          onClose: () => (0, S.hideLiveChannelNotice)({
            stageId: null == n ? void 0 : n.id
          }),
          users: o.length > 5 ? o.slice(0, 5) : o,
          overflowUsers: u < 1 ? null : (0, l.jsxs)("div", {
            className: V.pill,
            children: [(0, l.jsx)(U.default, {
              width: 12,
              height: 12,
              className: V.pillIcon
            }), (0, l.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: V.pillLabel,
              children: u
            })]
          })
        }
      }
      if (t.entity_type === B.GuildScheduledEventEntityTypes.EXTERNAL) {
        let e = (0, g.getLocationFromEvent)(t);
        if (null == e) return {
          noticeType: null
        };
        let n = C.default.getUserCount(t.id, I);
        return {
          noticeType: 1,
          title: t.name,
          location: (0, m.guildEventDetailsParser)(e, !0),
          locationIcon: (0, l.jsx)(j.default, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }),
          canListenIn: !1,
          buttonText: H.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE,
          onClose: () => (0, S.hideLiveChannelNotice)({
            eventId: null == t ? void 0 : t.id
          }),
          users: null == r ? [] : [r],
          overflowUsers: n < 1 ? null : (0, l.jsxs)("div", {
            className: V.pill,
            children: [(0, l.jsx)(k.default, {
              width: 12,
              height: 12,
              className: V.pillIcon
            }), (0, l.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: V.pillLabel,
              children: n
            })]
          })
        }
      } else if (t.entity_type === B.GuildScheduledEventEntityTypes.VOICE && null != a) {
        let e = (0, h.getChannelIconComponent)(a),
          n = C.default.getUserCount(t.id, I);
        return {
          noticeType: 2,
          title: t.name,
          location: a.name,
          locationIcon: null != e ? (0, l.jsx)(e, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }) : null,
          canListenIn: s,
          buttonText: H.default.Messages.GUILD_EVENT_JOIN,
          onClose: () => (0, S.hideLiveChannelNotice)({
            eventId: null == t ? void 0 : t.id
          }),
          users: null == r ? [] : [r],
          overflowUsers: n < 1 ? null : (0, l.jsxs)("div", {
            className: V.pill,
            children: [(0, l.jsx)(k.default, {
              width: 12,
              height: 12,
              className: V.pillIcon
            }), (0, l.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "header-secondary",
              className: V.pillLabel,
              children: n
            })]
          })
        }
      }
    }
    return {
      noticeType: null
    }
  })({
    guildEvent: s,
    stageInstance: r,
    activeChannel: a,
    canConnect: Q,
    myRole: Z,
    eventCreator: J,
    speakers: z,
    listenerCount: q,
    isEventNoticeHidden: W,
    isStageNoticeHidden: Y,
    isStudyRoomNotice: n
  }), [s, r, a, Q, Z, J, z, q, W, Y, n]);
  return null == $ ? null : (0, l.jsxs)("div", {
    className: V.container,
    children: [null != er ? (0, l.jsx)(c.Clickable, {
      onClick: er,
      className: V.close,
      "aria-label": H.default.Messages.DISMISS,
      children: (0, l.jsx)(b.default, {
        className: V.closeIcon
      })
    }) : null, (0, l.jsxs)("div", {
      className: V.header,
      children: [(0, l.jsx)(G.default, {
        color: d.default.unsafe_rawColors.GREEN_230.css,
        width: 16,
        height: 16
      }), (0, l.jsx)(c.Text, {
        variant: "text-xs/semibold",
        color: "text-positive",
        children: H.default.Messages.LIVE
      })]
    }), (el.length > 0 || null != ei) && (0, l.jsxs)("div", {
      className: V.participants,
      children: [el.map(e => (0, l.jsx)(c.Popout, {
        preload: () => (0, P.default)(e.id, e.getAvatarURL(t.id, 80), {
          guildId: t.id
        }),
        renderPopout: t => (0, l.jsx)(y.default, {
          ...t,
          userId: e.id,
          newAnalyticsLocations: [E.default.AVATAR]
        }),
        position: "right",
        children: n => (0, l.jsx)(c.Avatar, {
          ...n,
          src: e.getAvatarURL(t.id, 24),
          "aria-label": e.username,
          size: c.AvatarSizes.SIZE_24,
          className: V.avatar
        })
      }, e.id)), ei]
    }), (0, l.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: o(V.title, V.live),
      children: ee
    }), (0, l.jsxs)("div", {
      className: V.locationContainer,
      children: [en, (0, l.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: V.location,
        children: et
      })]
    }), ea || 1 === $ ? (0, l.jsx)(c.Button, {
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.GREEN,
      onClick: () => {
        if (ea) null != a && null != a.getGuildId() && ((0, R.connectAndOpen)(a), (0, N.transitionToGuild)(a.getGuildId(), a.id));
        else {
          if (null == s) return;
          (0, _.openGuildEventDetails)({
            eventId: s.id
          })
        }
      },
      className: V.button,
      fullWidth: !0,
      children: es
    }) : null]
  })
}