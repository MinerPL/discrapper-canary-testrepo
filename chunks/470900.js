"use strict";
n.r(t), n.d(t, {
  GuildRow: function() {
    return T
  },
  default: function() {
    return I
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("442837"),
  r = n("780384"),
  o = n("481060"),
  u = n("239091"),
  d = n("37234"),
  c = n("410030"),
  f = n("44315"),
  h = n("920440"),
  m = n("346656"),
  p = n("51144"),
  E = n("621853"),
  C = n("981631"),
  g = n("689938"),
  S = n("521170"),
  _ = n("100214");

function T(e) {
  let {
    guild: t,
    nick: n,
    theme: l,
    onSelect: i,
    onContextMenu: u,
    user: d
  } = e, c = d.hasAvatarForGuild(t.id);
  return (0, a.jsxs)(o.Clickable, {
    focusProps: {
      offset: {
        right: 8
      }
    },
    className: S.listRow,
    onClick: () => i(t.id),
    onContextMenu: e => u(e, t),
    children: [(0, a.jsx)(m.default, {
      tabIndex: -1,
      guild: t,
      showBadge: !0,
      className: s()(S.listAvatar, null == t.icon ? _.guildAvatarWithoutIcon : null),
      badgeStrokeColor: (0, f.getColor)((0, r.isThemeDark)(l) ? C.Color.PRIMARY_600 : C.Color.WHITE_500),
      size: m.default.Sizes.MEDIUM,
      active: !0
    }), (0, a.jsxs)("div", {
      className: S.listRowContent,
      children: [(0, a.jsx)("div", {
        className: S.listName,
        children: t.toString()
      }), c || null != n ? (0, a.jsxs)("div", {
        className: _.guildNick,
        children: [c && (0, a.jsx)(o.Avatar, {
          src: d.getAvatarURL(t.id, 16),
          size: o.AvatarSizes.SIZE_16,
          className: _.guildAvatar,
          "aria-hidden": !0
        }), null != n ? n : p.default.getName(d)]
      }) : null]
    })]
  })
}

function I(e) {
  let t, {
      user: l,
      onClose: s
    } = e,
    r = (0, i.useStateFromStores)([E.default], () => E.default.getMutualGuilds(l.id)),
    f = (0, c.default)();

  function m(e) {
    (0, h.transitionToGuild)(e), s(), (0, d.popLayer)()
  }

  function p(e, t) {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("24267"), n.e("33053"), n.e("51238"), n.e("75475"), n.e("85093"), n.e("16114"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("95003"), n.e("69760"), n.e("33213"), n.e("70173")]).then(n.bind(n, "545135"));
      return n => (0, a.jsx)(e, {
        ...n,
        guild: t
      })
    })
  }
  return t = null == r || 0 === r.length ? (0, a.jsxs)("div", {
    className: S.empty,
    children: [(0, a.jsx)("div", {
      className: S.emptyIconGuilds
    }), (0, a.jsx)("div", {
      className: S.emptyText,
      children: g.default.Messages.NO_MUTUAL_GUILDS
    })]
  }) : r.map(e => {
    let {
      guild: t,
      nick: n
    } = e;
    return (0, a.jsx)(T, {
      user: l,
      guild: t,
      nick: n,
      theme: f,
      onSelect: m,
      onContextMenu: p
    }, t.id)
  }), (0, a.jsx)(o.ScrollerThin, {
    className: S.listScroller,
    fade: !0,
    children: t
  })
}