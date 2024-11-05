n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(302454),
    l = n(481060),
    u = n(570140),
    c = n(794295),
    d = n(663993),
    f = n(95398),
    _ = n(339085),
    h = n(779699),
    p = n(359875),
    m = n(124072),
    g = n(692629),
    E = n(695503),
    v = n(628692),
    I = n(590956),
    S = n(703656),
    T = n(271383),
    b = n(430824),
    y = n(572004),
    A = n(746878),
    N = n(285063),
    C = n(943362),
    R = n(551452),
    O = n(69626),
    D = n(142990),
    L = n(532901),
    x = n(981631),
    w = n(176505),
    M = n(554034),
    P = n(112864);
n(504833);
function k(e) {
    let { text: t } = e,
        [n, a] = i.useState(!1);
    return (0, r.jsx)(l.Clickable, {
        onClick: () => {
            try {
                (0, y.JG)(t), a(!0);
            } catch (e) {
                a(!1);
            }
        },
        children: n
            ? (0, r.jsx)(l.CheckmarkLargeIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, r.jsx)(l.CopyIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
    });
}
let U = {
    blockQuote: {
        react: (e, t, n) =>
            (0, r.jsxs)(
                'div',
                {
                    className: M.blockquoteContainer,
                    children: [(0, r.jsx)('div', { className: M.blockquoteDivider }), (0, r.jsx)('blockquote', { children: t(e.content, n) })]
                },
                n.key
            )
    },
    s: { react: (e, t, n) => (0, r.jsx)('s', { children: t(e.content, n) }, n.key) },
    highlight: {
        react: (e, t, n) =>
            (0, r.jsx)(
                'span',
                {
                    className: 'highlight',
                    children: e.content
                },
                n.key
            )
    },
    paragraph: { react: (e, t, n) => (0, r.jsx)('p', { children: t(e.content, n) }, n.key) },
    inlineCode: {
        react: (e, t, n) =>
            (0, r.jsx)(
                'code',
                {
                    className: 'inline',
                    children: (0, A.S)(e, t, n)
                },
                n.key
            )
    },
    codeBlock: {
        react(e, t, i) {
            let a = () =>
                (0, r.jsx)('code', {
                    className: s()(P.scrollbarGhostHairline, 'hljs'),
                    children: (0, A.S)(e, t, i)
                });
            return (0, r.jsx)(
                'pre',
                {
                    children: (0, r.jsxs)('div', {
                        className: M.codeContainer,
                        children: [
                            y.wS
                                ? (0, r.jsx)('div', {
                                      className: M.codeActions,
                                      children: (0, r.jsx)(k, { text: e.content })
                                  })
                                : null,
                            (0, r.jsx)(d.GI, {
                                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                                webpackId: 364964,
                                renderFallback: a,
                                render: (t) => {
                                    if (!(e.lang && t.hasLanguage(e.lang))) return a();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n
                                            ? a()
                                            : (0, r.jsx)('code', {
                                                  className: s()(P.scrollbarGhostHairline, 'hljs', n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value }
                                              });
                                    }
                                }
                            })
                        ]
                    })
                },
                i.key
            );
        }
    },
    text: { react: (e, t, n) => ('string' == typeof e.content ? (0, r.jsx)('span', { children: e.content }, n.key) : (0, r.jsx)('span', { children: t(e.content, n) }, n.key)) },
    spoiler: {
        react: (e, t, n) =>
            (0, r.jsx)(
                f.Z,
                {
                    type: f.Z.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) => (null == e || e.type !== c.Z || t ? e : i.cloneElement(e, { tabIndex: -1 })),
                    children: () => t(e.content, n)
                },
                n.key
            )
    },
    soundboard: {
        react: (e) =>
            (0, r.jsx)(v.ZP, {
                channelId: e.channelId,
                soundId: e.soundId,
                jumbo: e.jumboable
            })
    },
    staticRouteLink: {
        react: (e, t, n) =>
            (0, A.k)(e.id)
                ? (0, r.jsxs)(
                      m.Z,
                      {
                          role: 'link',
                          onClick: () => {
                              !(function (e, t, n) {
                                  let r = b.Z.getGuild(e);
                                  if (null == e || null == r) return;
                                  let i = (t) => {
                                      r.hasFeature(x.oNc.COMMUNITY) && (0, S.uL)(x.Z5c.CHANNEL(e, t));
                                  };
                                  switch (t) {
                                      case 'home':
                                      case 'guide':
                                          i(w.oC.GUILD_HOME);
                                          break;
                                      case 'browse':
                                          i(w.oC.CHANNEL_BROWSER);
                                          break;
                                      case 'customize':
                                          i(w.oC.CUSTOMIZE_COMMUNITY);
                                          break;
                                      case 'linked-roles':
                                          if (null != n) {
                                              let t = T.ZP.getSelfMember(e);
                                              if (null == t) return;
                                              let r = b.Z.getRoles(e)[n];
                                              null == r || t.roles.includes(r.id)
                                                  ? u.Z.dispatch({
                                                        type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                                                        guildId: e
                                                    })
                                                  : u.Z.dispatch({
                                                        type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                                                        guildId: e,
                                                        role: r
                                                    });
                                          } else
                                              u.Z.dispatch({
                                                  type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                                                  guildId: e
                                              });
                                  }
                              })(e.guildId, e.id, e.itemId);
                          },
                          className: 'channelMention',
                          iconType: e.id,
                          children: [t(e.mainContent, n), null != e.itemContent ? (0, r.jsx)(g.Z, {}) : null, null != e.itemContent ? t(e.itemContent, n) : null]
                      },
                      n.key
                  )
                : null
    },
    timestamp: { react: (e, t, n) => (0, r.jsx)(N.Z, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let r = e.ordered ? 'ol' : 'ul',
                i = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(r, ''.concat(n.key), {
                start: e.start,
                className: n.formatInline ? M.inlineFormat : null,
                style: { '--totalCharacters': i },
                children: e.items.map((e, r) => {
                    let i = (0, o.reactElement)('span', ''.concat(n.key, '-').concat(r, '-innerSpan'), { children: t(e, n) });
                    return (0, o.reactElement)('li', ''.concat(n.key, '-').concat(r) + r, { children: i });
                })
            });
        }
    },
    heading: {
        react: (e, t, n) => {
            let r = (0, o.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, o.reactElement)('h' + e.level, (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: r,
                className: n.formatInline ? M.inlineFormat : null
            });
        }
    },
    guild: {
        react: (e, t, n) => {
            let i = b.Z.getGuild(e.guildId);
            return (0, r.jsx)(
                p.Z,
                {
                    guild: i,
                    children: (0, A.S)(e, t, n)
                },
                n.key
            );
        }
    },
    channel: {
        react: (e, t, n) =>
            (0, r.jsx)(
                h.Z,
                {
                    iconType: e.iconType,
                    children: (0, A.S)(e, t, n)
                },
                n.key
            )
    },
    message: { react: (e, t, n) => (0, r.jsx)(E.Z, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let r = (0, o.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, o.reactElement)('small', (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: r,
                className: n.formatInline ? M.inlineFormat : null
            });
        }
    },
    silentPrefix: { react: () => null }
};
function G(e) {
    return {
        ...U,
        link: (0, L.Z)(e),
        devLink: (0, D.Z)(e),
        emoji: (function (e) {
            let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
            return {
                react(e, i, a) {
                    let { key: s, channelId: o, messageId: l } = a;
                    return e.src
                        ? (0, r.jsx)(
                              I.c,
                              {
                                  node: e,
                                  tooltipPosition: t,
                                  enableClick: n,
                                  channelId: o,
                                  messageId: l
                              },
                              s
                          )
                        : (0, r.jsx)('span', { children: e.surrogate }, s);
                }
            };
        })(e),
        customEmoji: (function (e) {
            let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
            return {
                react(e, i, a) {
                    let { key: s, guildId: o, channelId: l, messageId: u, isInteracting: c } = a,
                        d = _.ZP.getDisambiguatedEmojiContext(o).getById(e.emojiId);
                    if (null != d) {
                        let t = d.require_colons;
                        e = {
                            ...e,
                            name: t ? ':'.concat(d.name, ':') : d.name
                        };
                    }
                    return (0, r.jsx)(
                        I.Y,
                        {
                            isInteracting: c,
                            node: e,
                            tooltipPosition: t,
                            enableClick: n,
                            channelId: l,
                            messageId: u
                        },
                        s
                    );
                }
            };
        })(e),
        channelMention: (0, R.Z)(e),
        commandMention: (0, O.ZP)(e),
        attachmentLink: (0, C.Z)(e)
    };
}
