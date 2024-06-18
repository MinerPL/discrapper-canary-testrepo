"use strict";
n.d(t, {
  Z: function() {
    return x
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(302454),
  l = n(481060),
  u = n(794295),
  _ = n(663993),
  d = n(339085),
  c = n(590956),
  E = n(703656),
  I = n(430824),
  T = n(797053),
  h = n(68588),
  S = n(263704),
  f = n(757206),
  N = n(332870),
  A = n(750156),
  m = n(979516),
  O = n(671612),
  R = n(572004),
  C = n(900849),
  p = n(746878),
  g = n(285063),
  L = n(943362),
  v = n(551452),
  D = n(69626),
  M = n(142990),
  P = n(532901),
  y = n(981631),
  U = n(176505),
  b = n(689938),
  G = n(842648);
n(987744);
var w = n(946278);

function k(e) {
  let {
    text: t
  } = e, [n, s] = r.useState(!1);
  return (0, i.jsx)(l.Clickable, {
    onClick: () => {
      try {
        (0, R.JG)(t), s(!0)
      } catch (e) {
        s(!1)
      }
    },
    children: n ? (0, i.jsx)(S.Z, {
      width: 16,
      height: 16
    }) : (0, i.jsx)(f.Z, {
      width: 16,
      height: 16
    })
  })
}
let B = {
  blockQuote: {
    react: (e, t, n) => (0, i.jsxs)("div", {
      className: w.blockquoteContainer,
      children: [(0, i.jsx)("div", {
        className: w.blockquoteDivider
      }), (0, i.jsx)("blockquote", {
        children: t(e.content, n)
      })]
    }, n.key)
  },
  s: {
    react: (e, t, n) => (0, i.jsx)("s", {
      children: t(e.content, n)
    }, n.key)
  },
  highlight: {
    react: (e, t, n) => (0, i.jsx)("span", {
      className: "highlight",
      children: e.content
    }, n.key)
  },
  paragraph: {
    react: (e, t, n) => (0, i.jsx)("p", {
      children: t(e.content, n)
    }, n.key)
  },
  inlineCode: {
    react: (e, t, n) => (0, i.jsx)("code", {
      className: "inline",
      children: (0, p.S)(e, t, n)
    }, n.key)
  },
  codeBlock: {
    react(e, t, r) {
      let s = () => (0, i.jsx)("code", {
        className: o()(G.scrollbarGhostHairline, "hljs"),
        children: (0, p.S)(e, t, r)
      });
      return (0, i.jsx)("pre", {
        children: (0, i.jsxs)("div", {
          className: w.codeContainer,
          children: [R.wS ? (0, i.jsx)("div", {
            className: w.codeActions,
            children: (0, i.jsx)(k, {
              text: e.content
            })
          }) : null, (0, i.jsx)(_.GI, {
            createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
            webpackId: 364964,
            renderFallback: s,
            render: t => {
              if (!(e.lang && t.hasLanguage(e.lang))) return s();
              {
                let n = t.highlight(e.lang, e.content, !0);
                return null == n ? s() : (0, i.jsx)("code", {
                  className: o()(G.scrollbarGhostHairline, "hljs", n.language),
                  dangerouslySetInnerHTML: {
                    __html: n.value
                  }
                })
              }
            }
          })]
        })
      }, r.key)
    }
  },
  text: {
    react: (e, t, n) => "string" == typeof e.content ? (0, i.jsx)("span", {
      children: e.content
    }, n.key) : (0, i.jsx)("span", {
      children: t(e.content, n)
    }, n.key)
  },
  spoiler: {
    react: (e, t, n) => (0, i.jsx)(h.Z, {
      type: h.Z.Types.TEXT,
      inline: n.formatInline,
      renderTextElement: (e, t) => null == e || e.type !== u.Z || t ? e : r.cloneElement(e, {
        tabIndex: -1
      }),
      children: () => t(e.content, n)
    }, n.key)
  },
  soundboard: {
    react: e => (0, i.jsx)(O.Z, {
      channelId: e.channelId,
      soundId: e.soundId,
      jumbo: e.jumboable
    })
  },
  staticRouteLink: {
    react(e, t, n) {
      let r = () => {
        ! function(e, t) {
          let n = I.Z.getGuild(e);
          if (null == e || null == n || !n.hasFeature(y.oNc.COMMUNITY)) return;
          let i = {
              home: U.oC.GUILD_HOME,
              browse: U.oC.CHANNEL_BROWSER,
              customize: U.oC.CUSTOMIZE_COMMUNITY,
              guide: U.oC.GUILD_HOME
            } [t],
            r = I.Z.getGuild(e);
          if ((null == r ? void 0 : r.joinedAt) == null) {
            C.Ub(e, {}, {
              channelId: i
            });
            return
          }(0, E.uL)(y.Z5c.CHANNEL(e, i))
        }(e.guildId, e.channelId)
      };
      if (!(0, p.k)(e.channelId)) return null;
      let s = "".concat(e.channelId);
      switch (e.channelId) {
        case U.HY.GUILD_HOME:
        case U.HY.SERVER_GUIDE:
          s = b.Z.Messages.SERVER_GUIDE;
          break;
        case U.HY.CHANNEL_BROWSER:
          s = b.Z.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
          break;
        case U.HY.CUSTOMIZE_COMMUNITY:
          s = b.Z.Messages.CHANNELS_AND_ROLES
      }
      return (0, i.jsx)(l.Tooltip, {
        text: s,
        position: "top",
        children: s => {
          let {
            onMouseEnter: o,
            onMouseLeave: a
          } = s;
          return (0, i.jsx)(T.Z, {
            role: "link",
            onClick: r,
            onMouseEnter: o,
            onMouseLeave: a,
            className: "channelMention",
            iconType: e.channelId,
            children: t(e.content, n)
          }, n.key)
        }
      }, n.key)
    }
  },
  timestamp: {
    react: (e, t, n) => (0, i.jsx)(g.Z, {
      node: e
    }, n.key)
  },
  list: {
    react: (e, t, n) => {
      let i = e.ordered ? "ol" : "ul",
        r = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
      return (0, a.reactElement)(i, "".concat(n.key), {
        start: e.start,
        className: n.formatInline ? w.inlineFormat : null,
        style: {
          "--totalCharacters": r
        },
        children: e.items.map((e, i) => {
          let r = (0, a.reactElement)("span", "".concat(n.key, "-").concat(i, "-innerSpan"), {
            children: t(e, n)
          });
          return (0, a.reactElement)("li", "".concat(n.key, "-").concat(i) + i, {
            children: r
          })
        })
      })
    }
  },
  heading: {
    react: (e, t, n) => {
      let i = (0, a.reactElement)("span", "".concat(n.key, "-innerSpan"), {
        children: t(e.content, n)
      });
      return (0, a.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
        children: i,
        className: n.formatInline ? w.inlineFormat : null
      })
    }
  },
  guild: {
    react: (e, t, n) => {
      let r = I.Z.getGuild(e.guildId);
      return (0, i.jsx)(A.Z, {
        guild: r,
        children: (0, p.S)(e, t, n)
      }, n.key)
    }
  },
  channel: {
    react: (e, t, n) => (0, i.jsx)(N.Z, {
      iconType: e.iconType,
      children: (0, p.S)(e, t, n)
    }, n.key)
  },
  message: {
    react: (e, t, n) => (0, i.jsx)(m.Z, {}, n.key)
  },
  subtext: {
    react: (e, t, n) => (0, a.reactElement)("small", (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
      children: t(e.content, n),
      className: n.formatInline ? w.inlineFormat : null
    })
  }
};

function x(e) {
  return {
    ...B,
    link: (0, P.Z)(e),
    devLink: (0, M.Z)(e),
    emoji: function(e) {
      let {
        emojiTooltipPosition: t = "top",
        enableEmojiClick: n = !0
      } = e;
      return {
        react(e, r, s) {
          let {
            key: o
          } = s;
          return e.src ? (0, i.jsx)(c.c, {
            node: e,
            tooltipPosition: t,
            enableClick: n
          }, o) : (0, i.jsx)("span", {
            children: e.surrogate
          }, o)
        }
      }
    }(e),
    customEmoji: function(e) {
      let {
        emojiTooltipPosition: t = "top",
        enableEmojiClick: n = !0
      } = e;
      return {
        react(e, r, s) {
          let {
            key: o,
            guildId: a,
            isInteracting: l
          } = s, u = d.Z.getDisambiguatedEmojiContext(a).getById(e.emojiId);
          if (null != u) {
            let t = u.require_colons;
            e = {
              ...e,
              name: t ? ":".concat(u.name, ":") : u.name
            }
          }
          return (0, i.jsx)(c.Y, {
            isInteracting: l,
            node: e,
            tooltipPosition: t,
            enableClick: n
          }, o)
        }
      }
    }(e),
    channelMention: (0, v.Z)(e),
    commandMention: (0, D.ZP)(e),
    attachmentLink: (0, L.Z)(e)
  }
}