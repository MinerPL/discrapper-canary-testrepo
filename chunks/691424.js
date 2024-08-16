n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(302454),
    l = n(481060),
    u = n(794295),
    c = n(663993),
    d = n(95398),
    _ = n(339085),
    E = n(779699),
    f = n(359875),
    h = n(124072),
    p = n(695503),
    m = n(628692),
    I = n(590956),
    T = n(703656),
    g = n(430824),
    S = n(572004),
    A = n(900849),
    N = n(746878),
    v = n(285063),
    O = n(943362),
    R = n(551452),
    C = n(69626),
    y = n(142990),
    D = n(532901),
    L = n(981631),
    b = n(176505),
    M = n(689938),
    P = n(910212),
    U = n(594402);
n(567552);
function w(e) {
    let { text: t } = e,
        [n, a] = i.useState(!1);
    return (0, r.jsx)(l.Clickable, {
        onClick: () => {
            try {
                (0, S.JG)(t), a(!0);
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
let x = {
    blockQuote: {
        react: (e, t, n) =>
            (0, r.jsxs)(
                'div',
                {
                    className: P.blockquoteContainer,
                    children: [(0, r.jsx)('div', { className: P.blockquoteDivider }), (0, r.jsx)('blockquote', { children: t(e.content, n) })]
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
                    children: (0, N.S)(e, t, n)
                },
                n.key
            )
    },
    codeBlock: {
        react(e, t, i) {
            let a = () =>
                (0, r.jsx)('code', {
                    className: s()(U.scrollbarGhostHairline, 'hljs'),
                    children: (0, N.S)(e, t, i)
                });
            return (0, r.jsx)(
                'pre',
                {
                    children: (0, r.jsxs)('div', {
                        className: P.codeContainer,
                        children: [
                            S.wS
                                ? (0, r.jsx)('div', {
                                      className: P.codeActions,
                                      children: (0, r.jsx)(w, { text: e.content })
                                  })
                                : null,
                            (0, r.jsx)(c.GI, {
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
                                                  className: s()(U.scrollbarGhostHairline, 'hljs', n.language),
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
                d.Z,
                {
                    type: d.Z.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) => (null == e || e.type !== u.Z || t ? e : i.cloneElement(e, { tabIndex: -1 })),
                    children: () => t(e.content, n)
                },
                n.key
            )
    },
    soundboard: {
        react: (e) =>
            (0, r.jsx)(m.Z, {
                channelId: e.channelId,
                soundId: e.soundId,
                jumbo: e.jumboable
            })
    },
    staticRouteLink: {
        react(e, t, n) {
            let i = () => {
                !(function (e, t) {
                    let n = g.Z.getGuild(e);
                    if (null == e || null == n || !n.hasFeature(L.oNc.COMMUNITY)) return;
                    let r = {
                            home: b.oC.GUILD_HOME,
                            browse: b.oC.CHANNEL_BROWSER,
                            customize: b.oC.CUSTOMIZE_COMMUNITY,
                            guide: b.oC.GUILD_HOME
                        }[t],
                        i = g.Z.getGuild(e);
                    if ((null == i ? void 0 : i.joinedAt) == null) {
                        A.Ub(e, {}, { channelId: r });
                        return;
                    }
                    (0, T.uL)(L.Z5c.CHANNEL(e, r));
                })(e.guildId, e.channelId);
            };
            if (!(0, N.k)(e.channelId)) return null;
            let a = ''.concat(e.channelId);
            switch (e.channelId) {
                case b.HY.GUILD_HOME:
                case b.HY.SERVER_GUIDE:
                    a = M.Z.Messages.SERVER_GUIDE;
                    break;
                case b.HY.CHANNEL_BROWSER:
                    a = M.Z.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
                    break;
                case b.HY.CUSTOMIZE_COMMUNITY:
                    a = M.Z.Messages.CHANNELS_AND_ROLES;
            }
            return (0, r.jsx)(
                l.Tooltip,
                {
                    text: a,
                    position: 'top',
                    children: (a) => {
                        let { onMouseEnter: s, onMouseLeave: o } = a;
                        return (0, r.jsx)(
                            h.Z,
                            {
                                role: 'link',
                                onClick: i,
                                onMouseEnter: s,
                                onMouseLeave: o,
                                className: 'channelMention',
                                iconType: e.channelId,
                                children: t(e.content, n)
                            },
                            n.key
                        );
                    }
                },
                n.key
            );
        }
    },
    timestamp: { react: (e, t, n) => (0, r.jsx)(v.Z, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let r = e.ordered ? 'ol' : 'ul',
                i = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(r, ''.concat(n.key), {
                start: e.start,
                className: n.formatInline ? P.inlineFormat : null,
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
                className: n.formatInline ? P.inlineFormat : null
            });
        }
    },
    guild: {
        react: (e, t, n) => {
            let i = g.Z.getGuild(e.guildId);
            return (0, r.jsx)(
                f.Z,
                {
                    guild: i,
                    children: (0, N.S)(e, t, n)
                },
                n.key
            );
        }
    },
    channel: {
        react: (e, t, n) =>
            (0, r.jsx)(
                E.Z,
                {
                    iconType: e.iconType,
                    children: (0, N.S)(e, t, n)
                },
                n.key
            )
    },
    message: { react: (e, t, n) => (0, r.jsx)(p.Z, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let r = (0, o.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, o.reactElement)('small', (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: r,
                className: n.formatInline ? P.inlineFormat : null
            });
        }
    }
};
function G(e) {
    return {
        ...x,
        link: (0, D.Z)(e),
        devLink: (0, y.Z)(e),
        emoji: (function (e) {
            let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
            return {
                react(e, i, a) {
                    let { key: s } = a;
                    return e.src
                        ? (0, r.jsx)(
                              I.c,
                              {
                                  node: e,
                                  tooltipPosition: t,
                                  enableClick: n
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
                    let { key: s, guildId: o, isInteracting: l } = a,
                        u = _.ZP.getDisambiguatedEmojiContext(o).getById(e.emojiId);
                    if (null != u) {
                        let t = u.require_colons;
                        e = {
                            ...e,
                            name: t ? ':'.concat(u.name, ':') : u.name
                        };
                    }
                    return (0, r.jsx)(
                        I.Y,
                        {
                            isInteracting: l,
                            node: e,
                            tooltipPosition: t,
                            enableClick: n
                        },
                        s
                    );
                }
            };
        })(e),
        channelMention: (0, R.Z)(e),
        commandMention: (0, C.ZP)(e),
        attachmentLink: (0, O.Z)(e)
    };
}
