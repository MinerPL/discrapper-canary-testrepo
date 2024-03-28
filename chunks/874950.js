"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("913527"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("812206"),
  d = n("335615"),
  c = n("512259"),
  f = n("132580"),
  h = n("271383"),
  m = n("649974"),
  p = n("594174"),
  E = n("768581"),
  C = n("5192"),
  g = n("709054"),
  S = n("681663");

function _(e) {
  let {
    guildId: t,
    channelId: n,
    userId: l,
    game: s,
    description: i
  } = e, u = (0, r.useStateFromStores)([p.default], () => p.default.getUser(l)), d = C.default.getName(t, n, u), c = null != u ? E.default.getUserAvatarURL(u) : null;
  return (0, a.jsxs)("div", {
    className: S.userGameContainer,
    children: [(0, a.jsx)("div", {
      className: S.__invalid_userGameAvatar,
      children: (0, a.jsx)(o.Avatar, {
        src: c,
        size: o.AvatarSizes.SIZE_32,
        "aria-label": null != d ? d : ""
      })
    }), (0, a.jsxs)("div", {
      className: S.userGameInfo,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: d
      }), (0, a.jsxs)("div", {
        className: S.downToPlayDetails,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: i
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: s
        })]
      })]
    })]
  })
}

function T(e) {
  let {
    nowPlaying: t,
    guildId: n,
    channelId: l
  } = e, s = (0, r.useStateFromStores)([p.default], () => p.default.getUser(t.userId)), u = null != s ? E.default.getUserAvatarURL(s) : null, d = C.default.getName(n, l, s), c = i().duration(i()().diff(i()(Number(t.startedPlaying)))).humanize(), f = null != t.activity.details ? "".concat(t.activity.details, " - ").concat(c) : c;
  return (0, a.jsxs)("div", {
    className: S.userGameContainer,
    children: [(0, a.jsx)("div", {
      className: S.__invalid_userGameAvatar,
      children: (0, a.jsx)(o.Avatar, {
        src: u,
        size: o.AvatarSizes.SIZE_32,
        "aria-label": null != d ? d : ""
      })
    }), (0, a.jsxs)("div", {
      className: S.userGameInfo,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: d
      }), (0, a.jsx)("div", {
        children: (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: f
        })
      })]
    })]
  })
}

function I(e) {
  let {
    game: t,
    guildId: n,
    channelId: s
  } = e, i = l.useMemo(() => g.default.keys(t).filter(e => h.default.isMember(n, e)), [t, n]), d = i.length > 0 ? t[i[0]] : null, c = null == d ? void 0 : d.activity.application_id, f = (0, r.useStateFromStores)([u.default], () => null != c ? u.default.getApplication(c) : null != d ? u.default.getApplicationByName(d.activity.name) : null);
  return 0 === i.length || null == d ? null : (0, a.jsxs)("div", {
    className: S.gameContainer,
    children: [(0, a.jsxs)("div", {
      className: S.gameHeader,
      children: [null != f && (0, a.jsx)(o.Avatar, {
        src: f.getIconURL(16),
        size: o.AvatarSizes.SIZE_16,
        "aria-label": d.activity.name
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/bold",
        color: "text-muted",
        children: d.activity.name
      })]
    }), i.map(e => (0, a.jsx)(T, {
      nowPlaying: t[e],
      guildId: n,
      channelId: s
    }, e))]
  })
}

function A(e) {
  var t;
  let {
    guildId: n,
    channel: l
  } = e, s = (0, r.useStateFromStoresArray)([m.default], () => m.default.gameIds.sort((e, t) => ~~Number(e) - ~~Number(t))), i = (0, r.useStateFromStoresObject)([m.default], () => m.default.games);
  let u = (t = n, (0, r.useStateFromStores)([c.default, h.default], () => {
    let e = h.default.getMembers(t),
      n = [];
    return e.forEach(e => {
      let t = c.default.getDownToPlay(e.userId);
      null != t && n.push(t)
    }), n
  }));
  return (0, a.jsxs)(o.ScrollerAuto, {
    className: S.container,
    children: [(0, a.jsx)(f.default, {
      className: S.alphaTag
    }), u.length > 0 ? (0, a.jsxs)("div", {
      className: S.downToPlayContainer,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/bold",
        children: "Down to Play"
      }), u.map(e => (0, a.jsx)(_, {
        guildId: n,
        channelId: l.id,
        userId: e.userId,
        description: e.description,
        game: e.game
      }, e.userId))]
    }) : null, (0, a.jsx)("div", {
      className: S.games,
      children: s.map(e => (0, a.jsx)(I, {
        game: i[e],
        guildId: n,
        channelId: l.id
      }, e))
    }), (0, a.jsx)(d.default, {
      channel: l,
      className: S.channelMembers
    })]
  })
}