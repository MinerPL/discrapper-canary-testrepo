"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("299285"),
  d = n("61918"),
  c = n("878550"),
  f = n("740822"),
  h = n("26989"),
  m = n("1017"),
  p = n("697218"),
  E = n("315102"),
  g = n("387111"),
  S = n("299039"),
  C = n("481931");

function _(e) {
  let {
    guildId: t,
    channelId: n,
    userId: l,
    game: s,
    description: i
  } = e, o = (0, r.useStateFromStores)([p.default], () => p.default.getUser(l)), d = g.default.getName(t, n, o), c = null != o ? E.default.getUserAvatarURL(o) : null;
  return (0, a.jsxs)("div", {
    className: C.userGameContainer,
    children: [(0, a.jsx)("div", {
      className: C.userGameAvatar,
      children: (0, a.jsx)(u.Avatar, {
        src: c,
        size: u.AvatarSizes.SIZE_32,
        "aria-label": null != d ? d : ""
      })
    }), (0, a.jsxs)("div", {
      className: C.userGameInfo,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-md/semibold",
        children: d
      }), (0, a.jsxs)("div", {
        className: C.downToPlayDetails,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          children: i
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          children: s
        })]
      })]
    })]
  })
}

function I(e) {
  let {
    nowPlaying: t,
    guildId: n,
    channelId: l
  } = e, s = (0, r.useStateFromStores)([p.default], () => p.default.getUser(t.userId)), o = null != s ? E.default.getUserAvatarURL(s) : null, d = g.default.getName(n, l, s), c = i.duration(i().diff(i(Number(t.startedPlaying)))).humanize(), f = null != t.activity.details ? "".concat(t.activity.details, " - ").concat(c) : c;
  return (0, a.jsxs)("div", {
    className: C.userGameContainer,
    children: [(0, a.jsx)("div", {
      className: C.userGameAvatar,
      children: (0, a.jsx)(u.Avatar, {
        src: o,
        size: u.AvatarSizes.SIZE_32,
        "aria-label": null != d ? d : ""
      })
    }), (0, a.jsxs)("div", {
      className: C.userGameInfo,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-md/semibold",
        children: d
      }), (0, a.jsx)("div", {
        children: (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          children: f
        })
      })]
    })]
  })
}

function T(e) {
  let {
    game: t,
    guildId: n,
    channelId: s
  } = e, i = l.useMemo(() => S.default.keys(t).filter(e => h.default.isMember(n, e)), [t, n]), d = i.length > 0 ? t[i[0]] : null, c = null == d ? void 0 : d.activity.application_id, f = (0, r.useStateFromStores)([o.default], () => null != c ? o.default.getApplication(c) : null != d ? o.default.getApplicationByName(d.activity.name) : null);
  return 0 === i.length || null == d ? null : (0, a.jsxs)("div", {
    className: C.gameContainer,
    children: [(0, a.jsxs)("div", {
      className: C.gameHeader,
      children: [null != f && (0, a.jsx)(u.Avatar, {
        src: f.getIconURL(16),
        size: u.AvatarSizes.SIZE_16,
        "aria-label": d.activity.name
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/bold",
        color: "text-muted",
        children: d.activity.name
      })]
    }), i.map(e => (0, a.jsx)(I, {
      nowPlaying: t[e],
      guildId: n,
      channelId: s
    }, e))]
  })
}

function v(e) {
  var t;
  let {
    guildId: n,
    channel: l
  } = e, s = (0, r.useStateFromStoresArray)([m.default], () => m.default.gameIds.sort((e, t) => ~~Number(e) - ~~Number(t))), i = (0, r.useStateFromStoresObject)([m.default], () => m.default.games);
  let o = (t = n, (0, r.useStateFromStores)([c.default, h.default], () => {
    let e = h.default.getMembers(t),
      n = [];
    return e.forEach(e => {
      let t = c.default.getDownToPlay(e.userId);
      null != t && n.push(t)
    }), n
  }));
  return (0, a.jsxs)(u.ScrollerAuto, {
    className: C.container,
    children: [(0, a.jsx)(f.default, {
      className: C.alphaTag
    }), o.length > 0 ? (0, a.jsxs)("div", {
      className: C.downToPlayContainer,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-md/bold",
        children: "Down to Play"
      }), o.map(e => (0, a.jsx)(_, {
        guildId: n,
        channelId: l.id,
        userId: e.userId,
        description: e.description,
        game: e.game
      }, e.userId))]
    }) : null, (0, a.jsx)("div", {
      className: C.games,
      children: s.map(e => (0, a.jsx)(T, {
        game: i[e],
        guildId: n,
        channelId: l.id
      }, e))
    }), (0, a.jsx)(d.default, {
      channel: l,
      className: C.channelMembers
    })]
  })
}