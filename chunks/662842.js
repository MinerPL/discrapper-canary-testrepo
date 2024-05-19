"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
}), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("442837"),
  d = n("692547"),
  c = n("481060"),
  f = n("232567"),
  E = n("100527"),
  h = n("471445"),
  _ = n("15274"),
  C = n("924301"),
  m = n("504160"),
  S = n("151864"),
  p = n("725436"),
  g = n("497656"),
  I = n("554747"),
  T = n("230900"),
  A = n("854698"),
  N = n("703656"),
  v = n("922482"),
  R = n("565799"),
  O = n("501655"),
  L = n("427679"),
  M = n("448206"),
  y = n("484459"),
  P = n("103575"),
  x = n("496675"),
  D = n("594174"),
  b = n("465670"),
  U = n("242315"),
  j = n("662868"),
  G = n("393112"),
  k = n("170039"),
  w = n("898140"),
  B = n("981631"),
  F = n("765305"),
  H = n("689938"),
  V = n("53116");
(s = a || (a = {}))[s.STAGE = 0] = "STAGE", s[s.EVENT_EXTERNAL = 1] = "EVENT_EXTERNAL", s[s.EVENT_VOICE = 2] = "EVENT_VOICE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM";

function Y(e) {
  let {
    guild: t,
    isStudyRoomNotice: n = !1
  } = e, a = (0, g.useActiveEventOrStageInstanceChannel)(t.id), s = (0, I.useGuildActiveEvent)(t.id), r = (0, u.useStateFromStores)([L.default], () => L.default.getStageInstanceByChannel(null == a ? void 0 : a.id), [a]), {
    isStageNoticeHidden: Y,
    isEventNoticeHidden: W
  } = (0, u.useStateFromStoresObject)([S.default], () => ({
    isStageNoticeHidden: S.default.isLiveChannelNoticeHidden({
      stageId: null == r ? void 0 : r.id
    }),
    isEventNoticeHidden: S.default.isLiveChannelNoticeHidden({
      eventId: null == s ? void 0 : s.id
    })
  }), [r, s]), K = null == a ? void 0 : a.id, z = (0, u.useStateFromStoresArray)([R.default], () => [...new Set(R.default.getMutableParticipants(K, O.StageChannelParticipantNamedIndex.SPEAKER).map(e => e.user))], [K]), q = (0, u.useStateFromStores)([R.default], () => null != K ? R.default.getParticipantCount(K, O.StageChannelParticipantNamedIndex.AUDIENCE) : 0, [K]), Q = (0, u.useStateFromStores)([x.default], () => x.default.can(B.Permissions.CONNECT, a)), Z = (0, M.default)(null == a ? void 0 : a.id), X = null == s ? void 0 : s.creator_id, J = (0, u.useStateFromStores)([D.default], () => D.default.getUser(X), [X]);
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
    } = e, _ = null != n && null != a && !f, S = null != t ? (0, A.getNextRecurrenceIdInEvent)(t) : null;
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
          locationIcon: (0, l.jsx)(k.default, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }),
          canListenIn: s,
          buttonText: e,
          onClose: () => (0, m.hideLiveChannelNotice)({
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
      if (t.entity_type === F.GuildScheduledEventEntityTypes.STAGE_INSTANCE && _) {
        let e = H.default.Messages.STAGE_CHANNEL_JOIN_BUTTON;
        return (null == i ? void 0 : i.speaker) ? e = H.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != i && (e = H.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
          noticeType: 0,
          title: n.topic,
          location: a.name,
          locationIcon: (0, l.jsx)(k.default, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }),
          canListenIn: s,
          buttonText: e,
          onClose: () => (0, m.hideLiveChannelNotice)({
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
      if (t.entity_type === F.GuildScheduledEventEntityTypes.EXTERNAL) {
        let e = (0, T.getLocationFromEvent)(t);
        if (null == e) return {
          noticeType: null
        };
        let n = C.default.getUserCount(t.id, S);
        return {
          noticeType: 1,
          title: t.name,
          location: (0, p.guildEventDetailsParser)(e, !0),
          locationIcon: (0, l.jsx)(G.default, {
            width: 16,
            height: 16,
            className: V.locationIcon
          }),
          canListenIn: !1,
          buttonText: H.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE,
          onClose: () => (0, m.hideLiveChannelNotice)({
            eventId: null == t ? void 0 : t.id
          }),
          users: null == r ? [] : [r],
          overflowUsers: n < 1 ? null : (0, l.jsxs)("div", {
            className: V.pill,
            children: [(0, l.jsx)(w.default, {
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
      } else if (t.entity_type === F.GuildScheduledEventEntityTypes.VOICE && null != a) {
        let e = (0, h.getChannelIconComponent)(a),
          n = C.default.getUserCount(t.id, S);
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
          onClose: () => (0, m.hideLiveChannelNotice)({
            eventId: null == t ? void 0 : t.id
          }),
          users: null == r ? [] : [r],
          overflowUsers: n < 1 ? null : (0, l.jsxs)("div", {
            className: V.pill,
            children: [(0, l.jsx)(w.default, {
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
      children: [(0, l.jsx)(j.default, {
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
        preload: () => (0, y.maybeFetchUserProfileForPopout)(e, {
          guildId: t.id
        }),
        renderPopout: n => (0, l.jsx)(P.default, {
          ...n,
          location: "LiveChannelNotice",
          userId: e.id,
          guildId: t.id,
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
      className: o()(V.title, V.live),
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
        if (ea) null != a && null != a.getGuildId() && ((0, v.connectAndOpen)(a), (0, N.transitionToGuild)(a.getGuildId(), a.id));
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