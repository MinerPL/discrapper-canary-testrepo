"use strict";
n.r(t), n.d(t, {
  DiscoveryTagStyle: function() {
    return C
  },
  DiscoveryTags: function() {
    return S
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("731898"),
  u = n("599110"),
  d = n("49111"),
  c = n("579344");
let f = ["egirl", "egirls", "waifu", "dating", "nsfw", "sex", "playboy", "stupid", "harem", "playgirl", "shitcoin", "shitpost", "porno", "nudes", "sexy", "horny", "fart", "tits", "balls", "cum"],
  E = e => {
    let {
      text: t,
      onClick: n,
      className: s,
      hide: l
    } = e;
    return (0, a.jsx)("li", {
      className: i(c.tag, s, {
        [c.hide]: l
      }),
      children: (0, a.jsx)(r.Clickable, {
        className: c.tagText,
        onClick: e => {
          e.stopPropagation(), e.preventDefault(), n(e)
        },
        children: t
      })
    })
  },
  h = e => {
    let {
      tags: t,
      onTagClick: n,
      guildId: l,
      section: i
    } = e;
    return s.useEffect(() => {
      u.default.track(d.AnalyticEvents.OPEN_POPOUT, {
        type: "Discovery Tags Overflow",
        guild_id: l,
        location: {
          page: d.AnalyticsPages.GUILD_DISCOVERY,
          section: i
        }
      })
    }, [l, i]), (0, a.jsx)(r.Dialog, {
      className: c.overflowTagsPopout,
      children: (0, a.jsx)("ul", {
        children: t.map(e => (0, a.jsx)(E, {
          onClick: () => n(e),
          className: c.tagAlt,
          text: e
        }, e))
      })
    })
  },
  _ = e => {
    let {
      className: t,
      count: n
    } = e;
    return (0, a.jsx)(r.Popout, {
      renderPopout: () => (0, a.jsx)(h, {
        ...e
      }),
      position: "right",
      align: "top",
      closeOnScroll: !0,
      children: e => (0, a.jsx)(E, {
        className: t,
        ...e,
        text: "+".concat(n)
      })
    })
  },
  C = {
    DEFAULT: c.tagDefault,
    LIGHT: c.tagLight,
    ALT: c.tagAlt
  },
  S = e => {
    let {
      tags: t,
      onTagClick: n,
      className: l,
      discoveryTagStyle: r = C.DEFAULT,
      hideOverflow: u = !1,
      guildId: d,
      section: h
    } = e, {
      ref: S,
      width: I
    } = (0, o.default)(), [m, p] = s.useState(null), T = t.filter(e => !f.includes(e.toLowerCase()));
    return s.useLayoutEffect(() => {
      if (null == S.current || null == I || 0 === I) return;
      let e = 0,
        t = 0,
        n = I - 40 - 4;
      for (let a = 0; a < T.length; a++) {
        let s = S.current.children[a],
          l = s.clientWidth;
        if (t += l + 4, a === T.length - 1 ? t > n + 40 : t > n) break;
        e++
      }
      p(t => e <= T.length ? e : t)
    }, [I, S, T]), (0, a.jsxs)("ul", {
      ref: S,
      className: i(c.tagContainer, l, {
        [c.invisible]: null == m
      }),
      children: [T.map((e, t) => (0, a.jsx)(E, {
        className: r,
        onClick: () => n(e),
        hide: null != m && t >= m,
        text: e
      }, e)), !u && null != m && m < T.length && (0, a.jsx)(_, {
        className: r,
        onTagClick: n,
        tags: T.slice(m),
        count: T.length - m,
        guildId: d,
        section: h
      })]
    })
  }