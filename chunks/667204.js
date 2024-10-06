n.d(t, {
    Z: function () {
        return Z;
    },
    d: function () {
        return j;
    }
}),
    n(653041),
    n(47120),
    n(390547),
    n(627494),
    n(757143);
var r = n(512722),
    i = n.n(r),
    a = n(570140),
    s = n(904245),
    o = n(166459),
    l = n(232567),
    u = n(911969),
    c = n(673750),
    d = n(687294),
    _ = n(367907),
    E = n(465343),
    f = n(339085),
    h = n(906411),
    p = n(633302),
    I = n(603721),
    m = n(188597),
    T = n(3148),
    S = n(48854),
    g = n(346479),
    A = n(706454),
    N = n(430824),
    O = n(117530),
    R = n(594174),
    v = n(403182),
    C = n(823379),
    L = n(861990),
    y = n(555573),
    D = n(174212),
    b = n(456007),
    M = n(10718),
    P = n(998698),
    U = n(895924),
    w = n(581364),
    x = n(689079),
    G = n(981631),
    k = n(959517),
    B = n(689938);
let F = (e, t) => {
        var n;
        return null == e ? void 0 : null === (n = e.find((e) => e.displayName === t)) || void 0 === n ? void 0 : n.value;
    },
    V = function (e, t, n) {
        var r, i;
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (e) => e;
        if (e.name === (null === (r = n.autocomplete) || void 0 === r ? void 0 : r.name)) return n.autocomplete.query;
        if ('' === t) return null;
        let s = D.Z.getAutocompleteLastChoices(n.channel.id, e.name);
        return null != s ? (null !== (i = F(s, t)) && void 0 !== i ? i : a(t)) : a(t);
    },
    H = (e) => {
        let t = e.toLowerCase() === x.WO.toLowerCase(),
            n = e.toLowerCase() === x.Lu.toLowerCase();
        return t || n ? t : null;
    };
async function Z(e) {
    var t, n, r, s, l, c, d, f, h, p, I, m, T, S, N, R, v;
    let { command: C, optionValues: L, context: D, commandTargetId: M, maxSizeCallback: x, commandOrigin: k = U.bB.CHAT, sectionName: B, interactionLifecycleOptionsFactory: Z = z, source: j } = e,
        K = null !== (r = P.Z.getSource(D.channel.id)) && void 0 !== r ? r : j,
        Q = null !== (s = P.Z.getCommandOrigin(D.channel.id)) && void 0 !== s ? s : k;
    null == D.autocomplete &&
        a.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: D,
            command: C,
            commandOrigin: Q
        }),
        await g.Z.unarchiveThreadIfNecessary(D.channel.id);
    let X = [],
        $ = [],
        J = (0, w.D7)(Q);
    if (null != C.options)
        for (let e of C.options) {
            if (e.type === u.jw.SUB_COMMAND || e.type === u.jw.SUB_COMMAND_GROUP || !(e.name in L)) continue;
            let t = (null === (l = D.autocomplete) || void 0 === l ? void 0 : l.name) === e.name || void 0,
                n = null;
            if (e.type === u.jw.STRING) {
                let r = null !== (d = null === (c = b.li(L, e.name)) || void 0 === c ? void 0 : c.trim()) && void 0 !== d ? d : '';
                (n = null != e.choices ? F(e.choices, r) : e.autocomplete ? V(e, r, D) : r),
                    i()(null != D.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')),
                    null != n &&
                        X.push({
                            type: e.type,
                            name: e.name,
                            value: n,
                            focused: t
                        });
                continue;
            }
            if (e.type === u.jw.ATTACHMENT) {
                if (null != D.autocomplete) continue;
                let n = O.Z.getUpload(D.channel.id, e.name, J);
                if (null == n) continue;
                let r = $.length;
                $.push(n),
                    X.push({
                        type: e.type,
                        name: e.name,
                        value: r,
                        focused: t
                    });
                continue;
            }
            let r = b.OU(L[e.name]);
            if ((i()(null != D.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !t)) continue;
            let a =
                null !== (f = r[0]) && void 0 !== f
                    ? f
                    : {
                          type: 'text',
                          text: ''
                      };
            switch (e.type) {
                case u.jw.CHANNEL:
                    if ('channelMention' === a.type) n = a.channelId;
                    else if ('text' === a.type) {
                        if ((0, w.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (h = D.guild) || void 0 === h ? void 0 : h.id, D.channel.id);
                            i()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), (n = e.channelId);
                        }
                    }
                    break;
                case u.jw.ROLE:
                    if ('roleMention' === a.type) n = a.roleId;
                    else if ('text' === a.type) {
                        if ((0, w.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (p = D.guild) || void 0 === p ? void 0 : p.id, D.channel.id, { allowUsers: !1 });
                            i()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), (n = e.roleId);
                        }
                    } else 'textMention' === a.type && '@everyone' === a.text && (n = null === (I = D.guild) || void 0 === I ? void 0 : I.id);
                    break;
                case u.jw.USER:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('text' === a.type) {
                        if ((0, w.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (m = D.guild) || void 0 === m ? void 0 : m.id, D.channel.id, { allowRoles: !1 });
                            i()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(a.text)), (n = e.userId);
                        }
                    }
                    break;
                case u.jw.MENTIONABLE:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('roleMention' === a.type) n = a.roleId;
                    else if ('textMention' === a.type && '@everyone' === a.text) n = null === (T = D.guild) || void 0 === T ? void 0 : T.id;
                    else if ('text' === a.type) {
                        if ((0, w.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (S = D.guild) || void 0 === S ? void 0 : S.id, D.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (n = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (n = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (n = null === (N = D.guild) || void 0 === N ? void 0 : N.id) : i()(!1, 'Failed to resolve '.concat(a.text));
                        }
                    }
                    break;
                case u.jw.BOOLEAN:
                    'text' === a.type && (n = H(a.text.trim()));
                    break;
                case u.jw.INTEGER:
                    if ('text' === a.type) {
                        let t = a.text.trim();
                        n = null != e.choices ? Number(F(e.choices, t)) : e.autocomplete ? V(e, t, D, Number) : Number(b.AS(A.default.locale, t));
                    }
                    break;
                case u.jw.NUMBER:
                    if ('text' === a.type) {
                        let t = a.text.trim();
                        n = null != e.choices ? Number(F(e.choices, t)) : e.autocomplete ? V(e, t, D, Number) : Number(b.AS(A.default.locale, t));
                    }
                    break;
                default:
                    i()(!1, 'Unsupported option type: '.concat(e.type));
                    continue;
            }
            i()(null != D.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')),
                null != n &&
                    X.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
        }
    if (null != C.subCommandPath)
        for (let e = C.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = C.subCommandPath[e];
            X = [
                {
                    type: n,
                    name: t,
                    options: X
                }
            ];
        }
    if (null != C.execute)
        return (
            _.ZP.trackWithMetadata(G.rMx.APPLICATION_COMMAND_USED, {
                command_id: C.id,
                application_id: C.applicationId,
                command_type: C.type,
                location: q(Q),
                source: K
            }),
            C.execute(X, D)
        );
    if (C.inputType === U.iw.BUILT_IN || C.inputType === U.iw.BUILT_IN_TEXT || C.inputType === U.iw.BUILT_IN_INTEGRATION) return;
    let ee = {
        version: C.version,
        id: null !== (R = null === (t = C.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== R ? R : C.id,
        guild_id: C.guildId,
        name: null !== (v = null === (n = C.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== v ? v : C.untranslatedName,
        type: C.type,
        options: X,
        application_command: C.rootCommand
    };
    null != M && (ee.target_id = M),
        null != D.autocomplete
            ? (0, y.GV)(C, D, ee)
            : (o.Z.clearAll(D.channel.id, J),
              W({
                  applicationId: C.applicationId,
                  data: ee,
                  context: D,
                  attachments: $,
                  maxSizeCallback: x,
                  onMessageSuccess: () => {
                      Y(L);
                  },
                  analytics_location: q(Q),
                  sectionName: B,
                  source: K,
                  interactionLifecycleOptions: await Z(C, D, ee)
              }));
}
let Y = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    'emoji' === e.type
                        ? new p.dy({
                              type: h.B.UNICODE,
                              names: [e.name.replaceAll(':', '')],
                              surrogates: ''
                          })
                        : 'customEmoji' === e.type
                          ? f.ZP.getCustomEmojiById(e.emojiId)
                          : null
                )
                .filter(C.lm)
        );
        t.length > 0 &&
            a.Z.dispatch({
                type: 'EMOJI_TRACK_USAGE',
                emojiUsed: t
            });
    },
    j = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = {
                channel: t,
                guild: null != t.guild_id ? N.Z.getGuild(t.guild_id) : null
            };
            W({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await z(n.command, r, e.interactionData)
            });
        }
    },
    W = (e) => {
        var t;
        let { applicationId: n, data: r, context: i, attachments: a, maxSizeCallback: s, onMessageSuccess: o, analytics_location: l, sectionName: c, source: d, interactionLifecycleOptions: _ } = e,
            { channel: E, guild: f } = i,
            h = E.id,
            p = null == f ? void 0 : f.id,
            m = {
                applicationId: n,
                channelId: h,
                guildId: p,
                data: r,
                nonce: null !== (t = _.nonce) && void 0 !== t ? t : (0, S.r)(),
                attachments: a,
                maxSizeCallback: s,
                analytics_location: l,
                sectionName: c,
                source: d
            };
        I.kz(m.nonce, {
            messageId: _.messageId,
            onCreate: _.onCreate,
            onSuccess: _.onSuccess,
            onFailure: _.onFailure,
            data: {
                interactionType: u.B8.APPLICATION_COMMAND,
                channelId: h
            }
        }),
            null != a
                ? X(a, m.nonce, p, s).then((e) => {
                      if (!!e) K(m, o);
                  })
                : K(m, o);
    };
function K(e, t) {
    c.ZP.enqueue(
        {
            type: c.$V.COMMAND,
            message: e
        },
        (n) => {
            var r;
            (0, m.Sg)(e.nonce, n, e.applicationId, e.channelId, null !== (r = e.guildId) && void 0 !== r ? r : null), n.ok && null != t && t();
        }
    );
}
async function z(e, t, n) {
    var r;
    let i = M.Nk(t.channel, n.type, e.applicationId);
    if (null == i) return {};
    let o = null === (r = i.application) || void 0 === r ? void 0 : r.bot;
    if (null == o && null != i.botId)
        try {
            await l.PR(i.botId);
        } catch {}
    let c = {
        ...(0, T.ZP)({
            channelId: t.channel.id,
            content: '',
            type: n.type === u.yU.CHAT ? G.uaV.CHAT_INPUT_COMMAND : G.uaV.CONTEXT_MENU_COMMAND,
            author:
                null != o
                    ? o
                    : {
                          id: i.id,
                          username: i.name,
                          discriminator: G.fo$,
                          avatar: null,
                          bot: !0
                      }
        }),
        application: i.application,
        interaction: {
            id: n.id,
            name: n.name,
            name_localized: e.displayName,
            type: u.B8.APPLICATION_COMMAND,
            user: (0, T.pe)(R.default.getCurrentUser())
        },
        interaction_data: n
    };
    return (
        s.Z.receiveMessage(t.channel.id, c, !0, {
            applicationId: e.applicationId,
            command: e
        }),
        {
            get messageId() {
                return c.id;
            },
            get nonce() {
                return c.id;
            },
            onCreate: (e) => {
                null != c.interaction && (c.interaction.id = e);
            },
            onSuccess: () => {},
            onFailure: (n, r, i, o) => {
                null == r && null != n && s.Z.sendClydeError(t.channel.id, n);
                let l = r;
                null == l && null != o && (l = (0, m.A0)(o, e.applicationId)),
                    a.Z.dispatch({
                        type: 'MESSAGE_SEND_FAILED',
                        messageId: c.id,
                        channelId: t.channel.id,
                        reason: l
                    });
            }
        }
    );
}
function q(e) {
    switch (e) {
        case U.bB.APPLICATION_LAUNCHER:
            return U.Vh.APP_LAUNCHER;
        case U.bB.APP_LAUNCHER_APPLICATION_VIEW:
            return U.Vh.APP_LAUNCHER_APPLICATION_VIEW;
        case U.bB.IMAGE_RECS_MENU:
            return U.Vh.IMAGE_RECS_MENU;
        case U.bB.IMAGE_RECS_SUBMENU:
            return U.Vh.IMAGE_RECS_SUBMENU;
        case U.bB.ACTIVITY_INSTANCE_EMBED:
            return U.Vh.ACTIVITY_INSTANCE_EMBED;
        case U.bB.ACTIVITY_BOOKMARK_EMBED:
            return U.Vh.ACTIVITY_BOOKMARK_EMBED;
        case U.bB.MINI_SHELF:
            return U.Vh.ACTIVITIES_MINI_SHELF;
        case U.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return U.Vh.VC_TILE_ACTIVITY_SUGGESTION;
        case U.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return U.Vh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return U.Vh.SLASH_UI;
    }
}
async function Q(e, t) {
    let n = 0,
        r = 0;
    for (let a of e) {
        var i;
        let e = t ? (null !== (i = a.currentSize) && void 0 !== i ? i : 0) : await a.getSize();
        e > r && (r = e), (n += e);
    }
    return {
        totalSize: n,
        largestUploadedFileSize: r
    };
}
async function X(e, t, n, r) {
    let i = (0, v.dg)(n),
        a = (e) => {
            null == r || r(i, e), I.yr(t, G.evJ.ENTITY_TOO_LARGE, B.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: (0, v.Ng)(i) }));
        },
        { totalSize: s, largestUploadedFileSize: o } = await Q(e, !1);
    if (o > Math.max(i, k.Y1) || s > L.zz) return a(o), !1;
    try {
        await (0, d.$)(e);
    } catch {
        I.yr(t, void 0, B.Z.Messages.UPLOADING_FILES_FAILED.format({ count: e.length }));
    }
    return ({ totalSize: s, largestUploadedFileSize: o } = await Q(e, !0)), (!e.some((e) => e.error === G.evJ.ENTITY_TOO_LARGE) && !(s > L.zz)) || (a(o), !1);
}
