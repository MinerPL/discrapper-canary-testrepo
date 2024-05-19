"use strict";
l.r(t), l.d(t, {
  GuildIconSize: function() {
    return n
  },
  default: function() {
    return E
  }
}), l("653041");
var n, i, r = l("735250"),
  a = l("470079"),
  s = l("120356"),
  o = l.n(s),
  u = l("477690"),
  c = l("481060"),
  d = l("104259"),
  C = l("806519"),
  f = l("768581"),
  p = l("624138"),
  h = l("689938"),
  m = l("636721");
(i = n || (n = {}))[i.SMALL = (0, p.cssValueToNumber)(u.default.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", i[i.LARGE = (0, p.cssValueToNumber)(u.default.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE";
let v = {
    [n.SMALL]: m.moreGuildsSmall,
    [n.LARGE]: m.moreGuildsLarge
  },
  g = {
    [n.SMALL]: m.iconSmall,
    [n.LARGE]: m.iconLarge
  };

function E(e) {
  var t, l, i;
  let {
    application: s,
    mutualGuilds: u,
    mutualGuildShownMax: p = 4,
    className: E,
    textVariant: A = "text-sm/normal",
    compact: _,
    guildIconSize: x = n.LARGE
  } = e, M = new Intl.ListFormat("en-US"), N = null !== (l = null === (t = s.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== l ? l : 0, R = null !== (i = null == u ? void 0 : u.length) && void 0 !== i ? i : 0, {
    shownMutualGuilds: L,
    hiddenMutualGuilds: y
  } = a.useMemo(() => {
    let e = [],
      t = [];
    return null == u || u.forEach(l => {
      e.length < p && null != l.icon ? e.push(l) : t.push(l)
    }), e.length === p && t.length > 0 && (t.push(e[p - 1]), e = e.slice(0, p - 1)), {
      shownMutualGuilds: e,
      hiddenMutualGuilds: t
    }
  }, [u, p]), S = y.length, I = function(e, t, l, n) {
    if (0 === t && 0 === e) return null;
    if (t > 0 && 0 === l) return h.default.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
      mutualGuildCount: t
    });
    let i = t > 0 ? h.default.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : h.default.Messages.APP_DIRECTORY_GUILD_COUNT,
      r = new Intl.NumberFormat("en-US", {
        notation: n ? "compact" : "standard",
        compactDisplay: "short"
      });
    return i.format({
      guildCount: r.format(e),
      mutualGuildCount: t,
      nonMutualGuildCount: r.format(l)
    })
  }(N, R, Math.max(0, N - R), _);
  return 0 === L.length && null == I ? null : (0, r.jsxs)("div", {
    className: o()(E, m.wrapper),
    children: [(0, r.jsx)("div", {
      className: m.icons,
      children: L.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [L.map((e, t) => {
          let l = t === L.length - 1 && 0 === S,
            n = f.default.getGuildIconURL({
              id: e.id,
              icon: e.icon,
              size: x,
              canAnimate: !1
            }),
            i = (0, r.jsx)(c.Tooltip, {
              text: e.name,
              position: "top",
              children: e => (0, r.jsx)("img", {
                ...e,
                className: o()(m.icon, g[x]),
                src: n,
                alt: ""
              })
            });
          return l ? (0, r.jsx)(a.Fragment, {
            children: i
          }, e.id) : (0, r.jsx)(C.default, {
            className: m.iconMask,
            height: x,
            width: x,
            mask: C.default.Masks.VOICE_USER_SUMMARY_ITEM,
            children: i
          }, e.id)
        }), S > 0 ? (0, r.jsx)(c.Tooltip, {
          text: h.default.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({
            appNames: M.format(y.map(e => e.name))
          }),
          position: "top",
          children: e => (0, r.jsxs)("div", {
            ...e,
            className: o()(m.moreGuilds, v[x]),
            children: ["+", S]
          })
        }) : null]
      }) : (0, r.jsx)(d.default, {
        width: x,
        height: x,
        className: m.defaultIcon
      })
    }), null != I ? (0, r.jsx)(c.Text, {
      variant: A,
      color: "header-secondary",
      children: I
    }) : null]
  })
}