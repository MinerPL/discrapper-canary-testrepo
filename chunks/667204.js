n.d(t, {
    Z: function () {
        return V;
    },
    d: function () {
        return Z;
    }
}), n(653041), n(47120), n(390547), n(627494), n(757143);
var r = n(512722), i = n.n(r), a = n(570140), o = n(904245), s = n(166459), l = n(232567), u = n(911969), c = n(673750), d = n(687294), _ = n(367907), E = n(465343), f = n(339085), h = n(906411), p = n(633302), m = n(603721), I = n(188597), T = n(3148), g = n(346479), S = n(706454), A = n(430824), N = n(117530), v = n(594174), O = n(403182), R = n(823379), C = n(861990), y = n(555573), D = n(174212), L = n(456007), b = n(10718), M = n(895924), P = n(581364), U = n(689079), w = n(981631), x = n(959517), G = n(689938);
let k = (e, t) => {
        var n;
        return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value;
    }, B = function (e, t, n) {
        var r, i;
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e;
        if (e.name === (null === (r = n.autocomplete) || void 0 === r ? void 0 : r.name))
            return n.autocomplete.query;
        if ('' === t)
            return null;
        let o = D.Z.getAutocompleteLastChoices(n.channel.id, e.name);
        return null != o ? null !== (i = k(o, t)) && void 0 !== i ? i : a(t) : a(t);
    }, F = e => {
        let t = e.toLowerCase() === U.WO.toLowerCase(), n = e.toLowerCase() === U.Lu.toLowerCase();
        return t || n ? t : null;
    };
async function V(e) {
    var t, n, r, o, l, c, d, f, h, p, m, I, T, A, v;
    let {
        command: O,
        optionValues: R,
        context: C,
        commandTargetId: D,
        maxSizeCallback: b,
        commandOrigin: U = M.bB.CHAT,
        sectionName: x
    } = e;
    null == C.autocomplete && a.Z.dispatch({
        type: 'APPLICATION_COMMAND_USED',
        context: C,
        command: O,
        commandOrigin: U
    }), await g.Z.unarchiveThreadIfNecessary(C.channel.id);
    let G = [], V = [], Z = (0, P.D7)(U);
    if (null != O.options)
        for (let e of O.options) {
            if (e.type === u.jw.SUB_COMMAND || e.type === u.jw.SUB_COMMAND_GROUP || !(e.name in R))
                continue;
            let t = (null === (r = C.autocomplete) || void 0 === r ? void 0 : r.name) === e.name || void 0, n = null;
            if (e.type === u.jw.STRING) {
                let r = null !== (l = null === (o = L.li(R, e.name)) || void 0 === o ? void 0 : o.trim()) && void 0 !== l ? l : '';
                n = null != e.choices ? k(e.choices, r) : e.autocomplete ? B(e, r, C) : r, i()(null != C.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && G.push({
                    type: e.type,
                    name: e.name,
                    value: n,
                    focused: t
                });
                continue;
            }
            if (e.type === u.jw.ATTACHMENT) {
                if (null != C.autocomplete)
                    continue;
                let n = N.Z.getUpload(C.channel.id, e.name, Z);
                if (null == n)
                    continue;
                let r = V.length;
                V.push(n), G.push({
                    type: e.type,
                    name: e.name,
                    value: r,
                    focused: t
                });
                continue;
            }
            let a = L.OU(R[e.name]);
            if (i()(null != C.autocomplete || 1 === a.length, 'Option "'.concat(e.name, '" expects a single option type')), null == a[0] && !t)
                continue;
            let s = null !== (c = a[0]) && void 0 !== c ? c : {
                type: 'text',
                text: ''
            };
            switch (e.type) {
            case u.jw.CHANNEL:
                if ('channelMention' === s.type)
                    n = s.channelId;
                else if ('text' === s.type) {
                    if ((0, P.BH)(s.text))
                        n = s.text.trim();
                    else {
                        let e = (0, E.K)(s.text, null === (d = C.guild) || void 0 === d ? void 0 : d.id, C.channel.id);
                        i()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(s.text)), n = e.channelId;
                    }
                }
                break;
            case u.jw.ROLE:
                if ('roleMention' === s.type)
                    n = s.roleId;
                else if ('text' === s.type) {
                    if ((0, P.BH)(s.text))
                        n = s.text.trim();
                    else {
                        let e = (0, E.K)(s.text, null === (f = C.guild) || void 0 === f ? void 0 : f.id, C.channel.id, { allowUsers: !1 });
                        i()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(s.text)), n = e.roleId;
                    }
                } else
                    'textMention' === s.type && '@everyone' === s.text && (n = null === (h = C.guild) || void 0 === h ? void 0 : h.id);
                break;
            case u.jw.USER:
                if ('userMention' === s.type)
                    n = s.userId;
                else if ('text' === s.type) {
                    if ((0, P.BH)(s.text))
                        n = s.text.trim();
                    else {
                        let e = (0, E.K)(s.text, null === (p = C.guild) || void 0 === p ? void 0 : p.id, C.channel.id, { allowRoles: !1 });
                        i()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(s.text)), n = e.userId;
                    }
                }
                break;
            case u.jw.MENTIONABLE:
                if ('userMention' === s.type)
                    n = s.userId;
                else if ('roleMention' === s.type)
                    n = s.roleId;
                else if ('textMention' === s.type && '@everyone' === s.text)
                    n = null === (m = C.guild) || void 0 === m ? void 0 : m.id;
                else if ('text' === s.type) {
                    if ((0, P.BH)(s.text))
                        n = s.text.trim();
                    else {
                        let e = (0, E.K)(s.text, null === (I = C.guild) || void 0 === I ? void 0 : I.id, C.channel.id);
                        (null == e ? void 0 : e.type) === 'userMention' ? n = e.userId : (null == e ? void 0 : e.type) === 'roleMention' ? n = e.roleId : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? n = null === (T = C.guild) || void 0 === T ? void 0 : T.id : i()(!1, 'Failed to resolve '.concat(s.text));
                    }
                }
                break;
            case u.jw.BOOLEAN:
                'text' === s.type && (n = F(s.text.trim()));
                break;
            case u.jw.INTEGER:
                if ('text' === s.type) {
                    let t = s.text.trim();
                    n = null != e.choices ? Number(k(e.choices, t)) : e.autocomplete ? B(e, t, C, Number) : Number(L.AS(S.default.locale, t));
                }
                break;
            case u.jw.NUMBER:
                if ('text' === s.type) {
                    let t = s.text.trim();
                    n = null != e.choices ? Number(k(e.choices, t)) : e.autocomplete ? B(e, t, C, Number) : Number(L.AS(S.default.locale, t));
                }
                break;
            default:
                i()(!1, 'Unsupported option type: '.concat(e.type));
                continue;
            }
            i()(null != C.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && G.push({
                type: e.type,
                name: e.name,
                value: n,
                focused: t
            });
        }
    if (null != O.subCommandPath)
        for (let e = O.subCommandPath.length - 1; e >= 0; e -= 1) {
            let {
                name: t,
                type: n
            } = O.subCommandPath[e];
            G = [{
                    type: n,
                    name: t,
                    options: G
                }];
        }
    if (null != O.execute)
        return _.ZP.trackWithMetadata(w.rMx.APPLICATION_COMMAND_USED, {
            command_id: O.id,
            application_id: O.applicationId,
            command_type: O.type,
            location: U === M.bB.APPLICATION_LAUNCHER ? M.Vh.APP_LAUNCHER : M.Vh.SLASH_UI
        }), O.execute(G, C);
    if (O.inputType === M.iw.BUILT_IN || O.inputType === M.iw.BUILT_IN_TEXT || O.inputType === M.iw.BUILT_IN_INTEGRATION)
        return;
    let j = {
        version: O.version,
        id: null !== (A = null === (t = O.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== A ? A : O.id,
        guild_id: O.guildId,
        name: null !== (v = null === (n = O.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== v ? v : O.name,
        type: O.type,
        options: G,
        application_command: O.rootCommand
    };
    null != D && (j.target_id = D), null != C.autocomplete ? (0, y.GV)(O, C, j) : (s.Z.clearAll(C.channel.id, Z), await Y({
        applicationId: O.applicationId,
        data: j,
        context: C,
        attachments: V,
        maxSizeCallback: b,
        onMessageSuccess: () => {
            H(R);
        },
        commandDisplayName: O.displayName,
        analytics_location: U === M.bB.APPLICATION_LAUNCHER ? M.Vh.APP_LAUNCHER : M.Vh.SLASH_UI,
        sectionName: x
    }));
}
let H = e => {
        let t = Object.values(e).flatMap(e => e.map(e => 'emoji' === e.type ? new p.dy({
            type: h.B.UNICODE,
            names: [e.name.replaceAll(':', '')],
            surrogates: ''
        }) : 'customEmoji' === e.type ? f.Z.getCustomEmojiById(e.emojiId) : null).filter(R.lm));
        t.length > 0 && a.Z.dispatch({
            type: 'EMOJI_TRACK_USAGE',
            emojiUsed: t
        });
    }, Z = (e, t, n) => {
        if (e.isCommandType()) {
            let r = t.guild_id;
            null != e.interactionData && Y({
                applicationId: n,
                data: e.interactionData,
                context: {
                    channel: t,
                    guild: null != r ? A.Z.getGuild(r) : null
                }
            });
        }
    }, Y = async e => {
        var t;
        let {
                applicationId: n,
                data: r,
                context: i,
                attachments: s,
                maxSizeCallback: c,
                onMessageSuccess: d,
                commandDisplayName: _,
                analytics_location: E,
                sectionName: f
            } = e, {
                channel: h,
                guild: p
            } = i, I = h.id, g = null == p ? void 0 : p.id, S = b.Nk(i.channel, r.type, n);
        if (null == S)
            return;
        let A = null === (t = S.application) || void 0 === t ? void 0 : t.bot;
        if (null == A && null != S.botId)
            try {
                await l.PR(S.botId);
            } catch {
            }
        let N = {
            ...(0, T.ZP)({
                channelId: I,
                content: '',
                type: r.type === u.yU.CHAT ? w.uaV.CHAT_INPUT_COMMAND : w.uaV.CONTEXT_MENU_COMMAND,
                author: null != A ? A : {
                    id: S.id,
                    username: S.name,
                    discriminator: w.fo$,
                    avatar: null,
                    bot: !0
                }
            }),
            application: null == S ? void 0 : S.application,
            interaction: {
                id: r.id,
                name: r.name,
                name_localized: _,
                type: u.B8.APPLICATION_COMMAND,
                user: (0, T.pe)(v.default.getCurrentUser())
            },
            interaction_data: r
        };
        o.Z.receiveMessage(I, N, !0, { applicationId: n });
        let O = (e, t) => {
                null == t && null != e && o.Z.sendClydeError(I, e), a.Z.dispatch({
                    type: 'MESSAGE_SEND_FAILED',
                    messageId: N.id,
                    channelId: I,
                    reason: t
                });
            }, R = {
                applicationId: n,
                channelId: I,
                guildId: g,
                data: r,
                nonce: N.id,
                attachments: s,
                maxSizeCallback: c,
                analytics_location: E,
                sectionName: f
            };
        m.kz(R.nonce, {
            messageId: N.id,
            onCreate: e => {
                null != N.interaction && (N.interaction.id = e);
            },
            onFailure: (e, t) => O(e, t),
            data: {
                interactionType: u.B8.APPLICATION_COMMAND,
                channelId: I
            }
        }), null != s ? K(s, R.nonce, g, c).then(e => {
            if (!!e)
                j(R, d);
        }) : j(R, d);
    };
function j(e, t) {
    c.ZP.enqueue({
        type: c.$V.COMMAND,
        message: e
    }, n => {
        var r;
        (0, I.Sg)(e.nonce, n, e.applicationId, e.channelId, null !== (r = e.guildId) && void 0 !== r ? r : null), n.ok && null != t && t();
    });
}
async function W(e, t) {
    let n = 0, r = 0;
    for (let a of e) {
        var i;
        let e = t ? null !== (i = a.currentSize) && void 0 !== i ? i : 0 : await a.getSize();
        e > r && (r = e), n += e;
    }
    return {
        totalSize: n,
        largestUploadedFileSize: r
    };
}
async function K(e, t, n, r) {
    let i = (0, O.dg)(n), a = e => {
            null == r || r(i, e), m.yr(t, w.evJ.ENTITY_TOO_LARGE, G.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: (0, O.Ng)(i) }));
        }, {
            totalSize: o,
            largestUploadedFileSize: s
        } = await W(e, !1);
    if (s > Math.max(i, x.Y1) || o > C.zz)
        return a(s), !1;
    try {
        await (0, d.$)(e);
    } catch {
        m.yr(t, void 0, G.Z.Messages.UPLOADING_FILES_FAILED.format({ count: e.length }));
    }
    return {
        totalSize: o,
        largestUploadedFileSize: s
    } = await W(e, !0), !e.some(e => e.error === w.evJ.ENTITY_TOO_LARGE) && !(o > C.zz) || (a(s), !1);
}
