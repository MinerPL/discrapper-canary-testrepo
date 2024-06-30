n(47120), n(724458), n(653041), n(390547);
var r = n(392711), i = n.n(r), a = n(302454), o = n.n(a), s = n(933557), l = n(339085), u = n(633302), c = n(428595), d = n(594199), _ = n(467798), E = n(601070), f = n(695346), h = n(592125), p = n(984933), m = n(271383), I = n(430824), T = n(496675), g = n(699516), S = n(246946), A = n(594174), N = n(483360), v = n(176354), O = n(51144), R = n(981631), C = n(185923), y = n(689938);
function D(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e)
        return null;
    let i = t.substr(e.length);
    return n.sortBy(e => {
        let {text: t} = e;
        return -t.length;
    }).filter(e => {
        let {text: n} = e;
        return 1 === t.toLowerCase().indexOf(n.toLowerCase());
    }).sortBy(e => {
        let {text: t} = e;
        return t === i ? 0 : 1;
    }).map(t => {
        let {
            id: n,
            text: i
        } = t;
        return [
            e + i,
            n,
            r
        ];
    }).first();
}
function L(e) {
    return {
        order: e.order,
        match: e.match,
        parse: t => ({
            type: e.type,
            content: t[0]
        })
    };
}
function b(e) {
    return {
        match: o().anyScopeRegex(e),
        parse: e => ({
            type: 'text',
            content: e[0]
        })
    };
}
let M = c.Z.RULES, P = d.ZP, U = /^<@!?(\d+)>/, w = /^<@&(\d+)>/, x = /^<#(\d+)>/, G = /^<a?:(\w+):(\d+)>/, k = /(@everyone|@here|@Clyde)\b/, B = {
        link: L(o().defaultRules.link),
        autolink: L(o().defaultRules.autolink),
        url: L(o().defaultRules.url),
        inlineCode: L(M.inlineCode),
        codeBlock: L(M.codeBlock),
        rawUserMention: b(U),
        rawRoleMention: b(w),
        rawChannelMention: b(x),
        rawEmoji: b(G),
        mention: {
            match(e, t, n) {
                let r = n.split(' ').pop() + e;
                if (/^[^ ]+@[^ ]+\.[^ .]+/.test(r))
                    return null;
                let i = D('@', e, t.users, 'mention');
                if (i || (i = D('@', e, t.mentionableRoles, 'roleMention')))
                    return i;
                if (!(i = D('@', e, t.users.map(e => ({
                        ...e,
                        text: e.text.split('#')[0]
                    })), 'mention')))
                    return null;
                let a = k.exec(e);
                if (null != a && i[0].length <= a[0].length)
                    return null;
                if ('' === n) {
                    let t = _.v.exec(e);
                    if (null != t && i[0].length <= t[0].length)
                        return null;
                }
                return i;
            },
            parse(e) {
                let [, t, n] = e, r = '@';
                return 'roleMention' === n && (r += '&'), {
                    type: n,
                    content: '<'.concat(r).concat(t, '>')
                };
            }
        },
        channel: {
            match: (e, t) => function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (t[0] !== e)
                    return null;
                if ('"' !== t[1])
                    return D(e, t, n, r);
                let i = 2;
                for (; i < t.length; i++) {
                    if ('\\' === t[i]) {
                        i++;
                        continue;
                    }
                    if ('"' === t[i])
                        break;
                }
                let a = t.substring(0, i + 1), o = (0, s.mA)(t.substring(2, i));
                return n.sortBy(e => {
                    let {text: t} = e;
                    return -t.length;
                }).filter(e => {
                    let {text: t} = e;
                    return o === t;
                }).map(e => {
                    let {id: t} = e;
                    return [
                        a,
                        t,
                        r
                    ];
                }).first();
            }('#', e, t.channels),
            parse: e => ({
                type: 'text',
                content: '<#'.concat(e[1], '>')
            })
        },
        emoticon: {
            match(e, t, n) {
                if (!f.ev.getSetting() || 0 !== n.length && !/\s$/.test(n))
                    return null;
                let r = u.ZP.EMOJI_SHORTCUT_RE.exec(e);
                return null == r || r[0].length !== e.length && ' ' !== e[r[0].length] && '\n' !== e[r[0].length] ? null : r;
            },
            parse: e => ({
                type: 'emoticon',
                content: u.ZP.convertShortcutToName(e[1]),
                isShortcut: !0
            })
        },
        emoji: {
            order: M.emoji.order,
            match: e => u.ZP.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [r, i] = e, {customEmoji: a} = n, o = Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
                if (null != o) {
                    var s;
                    return {
                        type: 'customEmoticon',
                        content: '<'.concat(!0 === o.animated ? 'a' : '', ':').concat(null !== (s = o.originalName) && void 0 !== s ? s : o.name, ':').concat(o.id, '>'),
                        emoji: o
                    };
                }
                return {
                    type: 'text',
                    content: r
                };
            }
        },
        customEmoticons: {
            match(e, t) {
                var n, r;
                return null !== (r = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== r ? r : null;
            },
            parse(e, t, n) {
                let [r, i] = e, {emojiContext: a} = n, o = a.getEmoticonByName(i);
                return null != o ? {
                    type: 'customEmoticon',
                    content: '<'.concat(!0 === o.animated ? 'a' : '', ':').concat(o.name, ':').concat(o.id, '>'),
                    emoji: o
                } : {
                    type: 'text',
                    content: r
                };
            }
        },
        text: {
            ...P,
            match: (e, t) => 'string' == typeof t.textExclusions && '' !== t.textExclusions ? (0, d.T9)(t.textExclusions).exec(e) : null != P.match ? P.match(e, t, '') : null
        }
    }, F = {
        inlineCode: L(M.inlineCode),
        codeBlock: L(M.codeBlock),
        mention: {
            match: o().anyScopeRegex(U),
            parse(e, t, n) {
                let {isNotification: r} = n, i = A.default.getUser(e[1]);
                if (null == i)
                    return { content: e[0] };
                let a = O.ZP.getUserTag(i, { identifiable: r && S.Z.enabled ? 'never' : 'always' });
                if (!r)
                    return { content: '@'.concat(a) };
                {
                    let e = O.ZP.getGlobalName(i);
                    return { content: null != e ? '@'.concat(e) : '@'.concat(a) };
                }
            }
        },
        roleMention: {
            match: o().anyScopeRegex(w),
            parse(e, t, n) {
                let {guild: r} = n;
                if (null != r) {
                    let t = I.Z.getRoles(r.id)[e[1]];
                    if (null != t)
                        return { content: '@'.concat(t.name) };
                }
                return { content: e[0] };
            }
        },
        channel: {
            match: o().anyScopeRegex(x),
            parse(e) {
                let t = h.Z.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, s.F6)(t, A.default, g.Z, !0, !0) };
            }
        },
        emoji: {
            match: o().anyScopeRegex(G),
            parse(e, t, n) {
                let [r, i, a] = e, {guild: o} = n, s = l.Z.getDisambiguatedEmojiContext(o ? o.id : null).getById(a), u = null != s ? s.name : i;
                return { content: ':'.concat(u, ':') };
            }
        },
        soundboard: {
            match: o().anyScopeRegex(/^<sound:(\d+)>/),
            parse(e) {
                let [t, n] = e;
                return { content: '<sound:'.concat(n, '>') };
            }
        },
        spoiler: {
            match: o().anyScopeRegex(R.$92),
            parse: () => ({ content: '<'.concat(y.Z.Messages.SPOILER.toLowerCase(), '>') })
        },
        staticRouteLink: {
            match: o().anyScopeRegex(R.PEY),
            parse: e => ({ content: '<id:'.concat(e[1], '>') })
        },
        timestamp: {
            ...M.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return { content: M.timestamp.parse(...t).formatted };
            }
        },
        text: { ...P }
    };
[
    B,
    F
].forEach(e => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let V = o().parserFor(B), H = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function Z(e, t, n, r) {
    let i = '';
    return e.forEach(e => {
        if (!function (e, t, n) {
                if (null != n) {
                    if ('customEmoticon' === t.type && n(t.emoji, !1), 'emoticon' === t.type || 'text' === t.type) {
                        let r;
                        let i = u.ZP.translateSurrogatesToInlineEmoji(t.content);
                        for (; null !== (r = H.exec(i));) {
                            let i;
                            null != r[1] && '' !== r[1] ? e.emojiContext && (i = e.emojiContext.getById(r[1])) : i = u.ZP.getByName(r[2]), i && n(i, t.isShortcut || !1);
                        }
                    }
                }
            }(t, e, r), 'string' == typeof e.content)
            switch (e.type) {
            case 'codeBlock':
            case 'inlineCode':
            case 'mention':
            case 'roleMention':
            case 'channel':
            case 'emoji':
                i += e.content;
                break;
            default:
                i += n(e.content);
            }
        else
            e.content.constructor === Array ? i += Z(e.content, t, n, r) : console.warn('Unknown message item type: ', e);
    }), i;
}
function Y(e) {
    let t;
    let n = null == e ? void 0 : e.getGuildId(), r = null != n ? I.Z.getGuild(n) : null, a = T.Z.can(R.Plq.MENTION_EVERYONE, e);
    t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(e => ({
        userId: e,
        nick: null
    })) : null != n ? m.ZP.getMembers(n).map(e => {
        let {
            userId: t,
            nick: n
        } = e;
        return {
            userId: t,
            nick: n
        };
    }) : [];
    let o = i()(t.reduce((e, t) => {
            let {userId: n} = t, r = A.default.getUser(n);
            return null == r ? e : (e.push({
                id: n,
                text: r.tag
            }), e);
        }, [])), s = i()(null != r ? I.Z.getRoles(r.id) : {}).values().filter(e => {
            let {mentionable: t} = e;
            return a || t;
        }).map(e => {
            let {
                id: t,
                name: n
            } = e;
            return {
                id: t,
                text: n
            };
        }), u = i()(p.ZP.getTextChannelNameDisambiguations(n)).map(e => {
            let {
                id: t,
                name: n
            } = e;
            return {
                id: t,
                text: n
            };
        }), c = null != n ? i()(N.k1).filter(e => e !== p.sH).flatMap(e => p.ZP.getChannels(n)[e].map(e => ({
            id: e.channel.id,
            text: e.channel.name
        }))).value() : [], d = E.Z.computeAllActiveJoinedThreads(n).map(e => ({
            id: e.id,
            text: e.name
        })), _ = l.Z.getDisambiguatedEmojiContext(n), f = _.getEscapedCustomEmoticonNames(), h = _.getCustomEmoji(), g = _.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: s,
        guild: r,
        users: o,
        channels: u.concat(c).concat(d),
        emojiContext: _,
        customEmoticonsRegex: g,
        customEmoji: h,
        textExclusions: f,
        disableErrorGuards: !0
    };
}
function j(e) {
    return e;
}
t.ZP = {
    parse(e, t) {
        var n, r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, o = null != a ? a : Y(e), s = {
                content: t,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
            };
        return s.content = (n = s.content, r = o, i = (t, n) => {
            v.ZP.isEmojiPremiumLocked({
                emoji: t,
                channel: e,
                intention: C.Hz.CHAT
            }) ? s.invalidEmojis.push(t) : !n && s.validNonShortcutEmojis.push(t);
        }, Z(V(n, r), r, u.ZP.translateInlineEmojiToSurrogates, i)), s;
    },
    parsePreprocessor: (e, t) => V(t, Y(e)),
    unparse(e, t, n) {
        let r = h.Z.getChannel(t), a = null != r ? r.getGuildId() : null, s = null != a ? I.Z.getGuild(a) : null, l = n ? F : i().omit(F, [
                'spoiler',
                'timestamp'
            ]), c = n ? j : u.ZP.translateSurrogatesToInlineEmoji, d = o().parserFor(l), _ = {
                inline: !0,
                guild: s,
                isNotification: n
            };
        return Z(d(e, _), _, c);
    }
};
