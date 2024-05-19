"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("47120"), n("390547"), n("653041");
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  i = n("392711"),
  r = n.n(i),
  o = n("442837"),
  u = n("481060"),
  d = n("317381"),
  c = n("565799"),
  f = n("501655"),
  h = n("199902"),
  m = n("592125"),
  C = n("594174"),
  p = n("938475"),
  g = n("242315"),
  E = n("944581"),
  _ = n("632184"),
  S = n("170039"),
  I = n("761374"),
  N = n("602623"),
  T = n("823379"),
  A = n("709054"),
  L = n("853856"),
  v = n("981631"),
  x = n("689938"),
  R = n("952972"),
  M = n("81311");

function y(e, t) {
  return 0 === t.length ? null : (0, l.jsxs)("div", {
    className: R.row,
    children: [(0, l.jsx)(e, {
      className: R.activityIcon
    }), (0, l.jsx)(N.default, {
      guildId: void 0,
      users: t,
      max: 6
    })]
  })
}

function O() {
  var e, t;
  let n = (0, o.useStateFromStoresArray)([L.default, m.default], () => A.default.keys(L.default.getFavoriteChannels()).map(e => m.default.getChannel(e)).filter(T.isNotNullish)),
    a = n.map(e => e.id),
    s = n.filter(e => e.type === v.ChannelTypes.GUILD_VOICE),
    i = n.filter(e => e.type === v.ChannelTypes.GUILD_STAGE_VOICE).map(e => e.id),
    x = (0, o.useStateFromStoresArray)([p.default], () => r().flatMap(s, e => p.default.getVoiceStatesForChannel(e).map(e => {
      let {
        user: t
      } = e;
      return t
    })), [s]),
    M = (0, o.useStateFromStoresArray)([c.default], () => r().flatMap(i, e => c.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === f.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    }))),
    O = (0, o.useStateFromStores)([c.default], () => {
      let e = 0;
      for (let t of i) e += c.default.getParticipantCount(t, f.StageChannelParticipantNamedIndex.AUDIENCE);
      return e
    }),
    D = (0, o.useStateFromStoresArray)([h.default], () => h.default.getAllApplicationStreams().filter(e => a.includes(e.channelId)).map(e => e.ownerId), [a]),
    b = (0, o.useStateFromStoresArray)([d.default], () => {
      let e = d.default.getEmbeddedActivitiesByChannel(),
        t = [];
      for (let s of a) {
        var n, l;
        t.push(...null !== (l = null === (n = e.get(s)) || void 0 === n ? void 0 : n.flatMap(e => Array.from(e.userIds))) && void 0 !== l ? l : [])
      }
      return t
    }, [a]),
    j = (0, o.useStateFromStoresArray)([C.default], () => b.map(e => C.default.getUser(e)), [b]),
    P = (0, o.useStateFromStoresArray)([C.default], () => D.map(e => C.default.getUser(e)), [D]),
    G = y(_.default, x.filter(e => !D.includes(e.id) && !b.includes(e.id)));
  let U = (e = M, t = O, 0 === e.length ? null : (0, l.jsxs)("div", {
      className: R.row,
      children: [(0, l.jsx)(S.default, {
        className: R.activityIcon
      }), (0, l.jsx)(N.default, {
        guildId: void 0,
        users: e,
        max: 3
      }), (0, l.jsxs)("div", {
        className: R.stageListenerPill,
        children: [(0, l.jsx)(g.default, {
          width: 16,
          height: 16
        }), (0, l.jsx)(u.Text, {
          className: R.stageListenerCount,
          color: "text-normal",
          variant: "text-xs/medium",
          children: t
        })]
      })]
    })),
    w = y(I.default, P.filter(e => null != e && !b.includes(e.id))),
    B = y(E.default, j);
  return (0, l.jsxs)(l.Fragment, {
    children: [U, G, w, B]
  })
}

function D() {
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: s()(R.row, R.rowGuildName),
      children: (0, l.jsx)("span", {
        className: s()(R.guildNameText, R.guildNameTextLimitedSize),
        children: x.default.Messages.FAVORITES_GUILD_NAME
      })
    }), (0, l.jsx)(O, {})]
  })
}

function b(e) {
  let {
    "aria-label": t = !1,
    onShow: n,
    children: a
  } = e;
  return (0, l.jsx)(u.Tooltip, {
    hideOnClick: !0,
    spacing: 20,
    position: "right",
    text: (0, l.jsx)(D, {}),
    "aria-label": t,
    tooltipClassName: M.listItemTooltip,
    onTooltipShow: n,
    children: e => (0, l.jsx)("div", {
      ...e,
      children: a
    })
  })
}