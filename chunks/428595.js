n(757143), n(653041), n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(302454),
    s = n.n(a),
    o = n(797610),
    l = n(633302),
    u = n(763296),
    c = n(592125),
    d = n(430824),
    _ = n(594174),
    E = n(5192),
    f = n(51144),
    h = n(298552),
    p = n(444758),
    I = n(723454),
    m = n(772096),
    T = n(800927),
    S = n(945884),
    g = n(594199),
    A = n(97734),
    N = n(303694),
    O = n(660199),
    R = n(364458),
    v = n(981631),
    C = n(689079),
    y = n(377668),
    L = n(689938);
let D = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    b = /^$|\n *$/,
    M = /^ *>>> ?/,
    P = /^ *> ?/gm;
function U(e) {
    let t = (0, m.yw)(e[1]);
    if (null == t)
        return {
            type: 'text',
            content: e[1]
        };
    let { displayTarget: n, target: r } = t;
    return {
        type: 'link',
        content: [
            {
                type: 'text',
                content: n
            }
        ],
        target: r,
        title: void 0
    };
}
let w = (e) => {
        let t = c.Z.getChannel(e);
        return null == t ? void 0 : t.getGuildId();
    },
    x = (e) => (null != e.guildId ? d.Z.getGuild(e.guildId) : null != e.channelId ? d.Z.getGuild(w(e.channelId)) : null),
    G = {
        newline: s().defaultRules.newline,
        paragraph: s().defaultRules.paragraph,
        escape: {
            ...s().defaultRules.escape,
            match: (e, t, n) => (!1 === t.allowEscape ? null : s().defaultRules.escape.match(e, t, n))
        },
        blockQuote: {
            ...s().defaultRules.blockQuote,
            requiredFirstCharacters: [' ', '>'],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return D.exec(e);
                let a = n[0];
                return b.test(a) ? D.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!M.exec(r),
                    a = i ? M : P,
                    s = r.replace(a, ''),
                    o = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), !i && (n.inline = !0);
                let u = t(s, n);
                return (
                    (n.inQuote = o),
                    (n.inline = l),
                    0 === u.length &&
                        u.push({
                            type: 'text',
                            content: ' '
                        }),
                    {
                        content: u,
                        type: 'blockQuote'
                    }
                );
            }
        },
        link: m.ZP,
        autolink: {
            ...s().defaultRules.autolink,
            parse: U
        },
        url: {
            ...s().defaultRules.url,
            requiredFirstCharacters: ['h', 's'],
            match(e, t) {
                if (!t.inline) return null;
                let n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
                if (null != n) {
                    let e = 0,
                        t = n[0];
                    for (let n = t.length - 1; n >= 0 && ')' === t[n]; n--) {
                        let n = t.indexOf('(', e);
                        if (-1 === n) {
                            t = t.slice(0, t.length - 1);
                            break;
                        }
                        e = n + 1;
                    }
                    n[0] = n[1] = t;
                }
                return n;
            },
            parse: U
        },
        strong: s().defaultRules.strong,
        em: s().defaultRules.em,
        u: s().defaultRules.u,
        br: s().defaultRules.br,
        text: g.ZP,
        inlineCode: {
            ...s().defaultRules.inlineCode,
            parse(e, t, n) {
                let r = s().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent
                    ? {
                          ...r,
                          validationChildContent: t(r.content, n)
                      }
                    : r;
            }
        },
        emoticon: {
            order: g.ZP.order,
            requiredFirstCharacters: ['\xAF'],
            match: (e) => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: e[1]
            })
        },
        codeBlock: {
            order: s().defaultRules.codeBlock.order,
            requiredFirstCharacters: ['`'],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse(e, t, n) {
                var r, i;
                return {
                    lang: null !== (r = e[1]) && void 0 !== r ? r : '',
                    content: null !== (i = e[2]) && void 0 !== i ? i : '',
                    inQuote: n.inQuote || n.formatInline || !1
                };
            }
        },
        roleMention: {
            order: g.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [r, i] = e;
                if (n.returnMentionIds)
                    return {
                        type: 'roleMention',
                        id: i
                    };
                let a = x(n),
                    s = null != a ? d.Z.getRole(a.id, i) : null;
                return null == s
                    ? {
                          type: 'text',
                          content: '@'.concat(L.Z.Messages.UNKNOWN_ROLE_PLACEHOLDER)
                      }
                    : {
                          type: 'mention',
                          channelId: n.channelId,
                          guildId: null != a ? a.id : null,
                          roleId: i,
                          roleColor: s.color,
                          roleName: '@'.concat(s.name),
                          color: s.color,
                          colorString: s.colorString,
                          content: [
                              {
                                  type: 'text',
                                  content: '@'.concat(s.name)
                              }
                          ]
                      };
            }
        },
        mention: {
            order: g.ZP.order,
            requiredFirstCharacters: ['<', '@'],
            match(e, t) {
                let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                return null != n && ('@Clyde' !== n[0] || (0, o.gJ)(x(t), c.Z.getChannel(t.channelId))) ? n : null;
            },
            parse(e, t, n) {
                let r, i;
                if (n.returnMentionIds)
                    return null == e[1]
                        ? {
                              type: 'mention',
                              text: e[0]
                          }
                        : {
                              type: 'mention',
                              id: e[1]
                          };
                let a = _.default.getUser(e[1]),
                    s = c.Z.getChannel(n.channelId);
                if (null != a && ((i = a.id), (r = a.toString()), null != s)) {
                    var l;
                    r = null !== (l = E.ZP.getNickname(s.getGuildId(), n.channelId, a)) && void 0 !== l ? l : f.ZP.getName(a);
                }
                null == a && '@Clyde' === e[0] && (0, o.gJ)(x(n), s) && (i = y.fL);
                let u = e[1],
                    d = null != u && v.Xyh.test(u.trim()),
                    h = d && n.unknownUserMentionPlaceholder ? '@'.concat(L.Z.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                return {
                    userId: i,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: null == s ? void 0 : s.getGuildId(),
                    parsedUserId: d ? u : null,
                    roleName: e[2],
                    content: [
                        {
                            type: 'text',
                            content: null != r ? '@'.concat(r) : h
                        }
                    ]
                };
            }
        },
        channelMention: p.Z.channelMention,
        channelOrMessageUrl: p.Z.channelOrMessageUrl,
        mediaPostLink: p.Z.mediaPostLink,
        attachmentLink: h.Z.attachmentLink,
        commandMention: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
            parse(e, t, n) {
                if (n.returnMentionIds)
                    return {
                        type: 'commandMention',
                        id: e[2]
                    };
                let [, ...r] = e[1].split(' '),
                    i = ''.concat(e[2]).concat([...r].map((e) => ''.concat(C.oQ).concat(e)).join(''));
                return {
                    channelId: n.channelId,
                    commandId: e[2],
                    commandName: e[1],
                    commandKey: i,
                    content: [
                        {
                            type: 'text',
                            content: ''.concat(e[1])
                        }
                    ]
                };
            }
        },
        emoji: {
            order: g.ZP.order,
            requiredFirstCharacters: [':'],
            match(e) {
                let t = l.ZP.EMOJI_NAME_RE.exec(e);
                return null != t && '' !== l.ZP.convertNameToSurrogate(t[1]) ? t : null;
            },
            parse(e) {
                let t = l.ZP.convertNameToSurrogate(e[1]);
                return {
                    type: 'text',
                    content: null == t || '' === t ? ':'.concat(e[1], ':') : t
                };
            }
        },
        soundboard: {
            order: g.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<sound:(\d+)>/.exec(e),
            parse(e, t, n) {
                var r;
                let i = e[1],
                    a = u.Z.getSoundById(i),
                    s = null !== (r = null == a ? void 0 : a.name) && void 0 !== r ? r : i;
                return {
                    type: 'soundboard',
                    id: i,
                    soundId: i,
                    channelId: n.channelId,
                    content: s
                };
            }
        },
        customEmoji: {
            order: g.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: ':'.concat(e[1], ':')
            })
        },
        timestamp: {
            order: g.ZP.order - 1,
            requiredFirstCharacters: ['<'],
            match: (e) => O.Ay.exec(e),
            parse(e) {
                let [t, n, r] = e,
                    i = (0, O.ZB)(n, r);
                return null == i
                    ? {
                          type: 'text',
                          content: t
                      }
                    : i;
            }
        },
        s: {
            order: s().defaultRules.u.order,
            requiredFirstCharacters: ['~'],
            match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: s().defaultRules.u.parse
        },
        spoiler: {
            order: g.ZP.order,
            requiredFirstCharacters: ['|'],
            match: (e) => v.$92.exec(e),
            parse: (e, t, n) => ({
                content: t(e[1], n),
                channelId: n.channelId
            })
        },
        staticRouteLink: {
            order: g.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => v.PEY.exec(e),
            parse(e, t, n) {
                var r;
                let [, i, a] = e,
                    s = (0, N.l)(i),
                    o = (0, N.W)(i, a, null === (r = x(n)) || void 0 === r ? void 0 : r.id);
                function l(e) {
                    return null == e
                        ? null
                        : [
                              {
                                  type: 'text',
                                  content: e
                              }
                          ];
                }
                return {
                    content: l(s + (null != o ? ' \u203A '.concat(o) : '')),
                    mainContent: l(s),
                    itemContent: l(o),
                    itemId: a,
                    id: i,
                    guildId: w(n.channelId),
                    channelId: i
                };
            }
        },
        heading: I.Z,
        list: T.Z,
        subtext: S.Z
    },
    k = (0, R.Z)([G, A.Z]),
    B = i().omit(k, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext']),
    F = i().omit(k, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext']),
    V = i().omit(k, ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext']),
    H = i().omit(
        (0, R.Z)([
            k,
            {
                inlineCode: {
                    match(e, t, n) {
                        let r = k.codeBlock.match(e, t, n);
                        if (null != r) return r;
                        let i = k.inlineCode.match(e, t, n);
                        if (null != i) return i;
                    }
                }
            }
        ]),
        ['blockQuote', 'codeBlock', 'br']
    ),
    Z = i().omit(k, ['codeBlock', 'br', 'blockQuote']),
    Y = i().omit(k, ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext']),
    j = i().omit(k, ['codeBlock', 'blockQuote', 'br']),
    W = i().omit(k, ['codeBlock', 'br', 'inlineCode']);
function K(e, t) {
    return 0 === e.length || 0 === t || '' === e.charAt(t - 1).trim();
}
let z = (0, R.Z)([
    {
        highlightWord: {
            order: -1,
            match(e, t) {
                if ((null != t.parseDepth && t.parseDepth > 10) || null == t.highlightWord || 0 === t.highlightWord.length) return null;
                let n = e.indexOf(t.highlightWord);
                if (-1 === n) return null;
                let r = !K(e, n);
                if (r)
                    do (n = e.indexOf(t.highlightWord, n + 1)), (r = !K(e, n));
                    while (r && -1 !== n);
                if (-1 === n) return null;
                let i = e.substring(0, n),
                    a = e.substring(n + t.highlightWord.length);
                return [e, t.highlightWord, i, a];
            },
            parse(e, t, n) {
                var r;
                let i = null !== (r = n.parseDepth) && void 0 !== r ? r : 0,
                    a = {
                        ...n,
                        parseDepth: i + 1
                    },
                    s = t(e[2], a),
                    o = t(e[3], a);
                return [
                    ...s,
                    {
                        type: 'highlight',
                        content: e[1]
                    },
                    ...o
                ];
            }
        }
    },
    i().omit(k, ['url'])
]);
t.Z = {
    RULES: k,
    CHANNEL_TOPIC_RULES: B,
    VOICE_CHANNEL_STATUS_RULES: F,
    EMBED_TITLE_RULES: V,
    INLINE_REPLY_RULES: H,
    GUILD_VERIFICATION_FORM_RULES: Z,
    GUILD_EVENT_RULES: j,
    PROFILE_BIO_RULES: Y,
    AUTO_MODERATION_SYSTEM_MESSAGE_RULES: z,
    NATIVE_SEARCH_RESULT_LINK_RULES: W
};
