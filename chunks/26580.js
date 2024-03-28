"use strict";
n.r(t), n.d(t, {
  DiscoveryTagStyle: function() {
    return C
  },
  DiscoveryTags: function() {
    return m
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("393238"),
  u = n("626135"),
  d = n("981631"),
  c = n("85458");
let f = ["egirl", "egirls", "waifu", "dating", "nsfw", "sex", "playboy", "stupid", "harem", "playgirl", "shitcoin", "shitpost", "porno", "nudes", "sexy", "horny", "fart", "tits", "balls", "cum"],
  E = e => {
    let {
      text: t,
      onClick: n,
      className: s,
      hide: l
    } = e;
    return (0, a.jsx)("li", {
      className: i()(c.tag, s, {
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
  m = e => {
    let {
      tags: t,
      onTagClick: n,
      className: l,
      discoveryTagStyle: r = C.DEFAULT,
      hideOverflow: u = !1,
      guildId: d,
      section: h
    } = e, {
      ref: m,
      width: S
    } = (0, o.default)(), [I, p] = s.useState(null), T = t.filter(e => !f.includes(e.toLowerCase()));
    return s.useLayoutEffect(() => {
      if (null == m.current || null == S || 0 === S) return;
      let e = 0,
        t = 0,
        n = S - 40 - 4;
      for (let a = 0; a < T.length && (t += m.current.children[a].clientWidth + 4, a === T.length - 1 ? !(t > n + 40) : !(t > n)); a++) {
        ;
        e++
      }
      p(t => e <= T.length ? e : t)
    }, [S, m, T]), (0, a.jsxs)("ul", {
      ref: m,
      className: i()(c.tagContainer, l, {
        [c.invisible]: null == I
      }),
      children: [T.map((e, t) => (0, a.jsx)(E, {
        className: r,
        onClick: () => n(e),
        hide: null != I && t >= I,
        text: e
      }, e)), !u && null != I && I < T.length && (0, a.jsx)(_, {
        className: r,
        onTagClick: n,
        tags: T.slice(I),
        count: T.length - I,
        guildId: d,
        section: h
      })]
    })
  }