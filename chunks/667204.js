"use strict";
n.d(t, {
  Z: function() {
    return Z
  },
  d: function() {
    return F
  }
}), n(653041), n(47120), n(390547), n(627494), n(757143);
var i = n(512722),
  r = n.n(i),
  s = n(570140),
  o = n(904245),
  a = n(166459),
  l = n(232567),
  u = n(911969),
  _ = n(673750),
  d = n(687294),
  c = n(367907),
  E = n(465343),
  I = n(339085),
  T = n(906411),
  h = n(633302),
  S = n(603721),
  f = n(188597),
  N = n(3148),
  A = n(346479),
  m = n(706454),
  O = n(430824),
  R = n(117530),
  C = n(594174),
  p = n(403182),
  g = n(823379),
  L = n(861990),
  v = n(555573),
  D = n(174212),
  M = n(456007),
  P = n(10718),
  y = n(895924),
  U = n(581364),
  b = n(689079),
  G = n(981631),
  w = n(959517),
  k = n(689938);
let B = (e, t) => {
    var n;
    return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
  },
  x = function(e, t, n) {
    var i, r;
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e;
    if (e.name === (null === (i = n.autocomplete) || void 0 === i ? void 0 : i.name)) return n.autocomplete.query;
    if ("" === t) return null;
    let o = D.Z.getAutocompleteLastChoices(n.channel.id, e.name);
    return null != o ? null !== (r = B(o, t)) && void 0 !== r ? r : s(t) : s(t)
  },
  V = e => {
    let t = e.toLowerCase() === b.WO.toLowerCase(),
      n = e.toLowerCase() === b.Lu.toLowerCase();
    return t || n ? t : null
  };
async function Z(e) {
  var t, n, i, o, l, _, d, I, T, h, S, f, N, O, C;
  let {
    command: p,
    optionValues: g,
    context: L,
    commandTargetId: D,
    maxSizeCallback: P,
    commandOrigin: b = y.bB.CHAT,
    sectionName: w
  } = e;
  null == L.autocomplete && s.Z.dispatch({
    type: "APPLICATION_COMMAND_USED",
    context: L,
    command: p,
    commandOrigin: b
  }), await A.Z.unarchiveThreadIfNecessary(L.channel.id);
  let k = [],
    Z = [],
    F = (0, U.D7)(b);
  if (null != p.options)
    for (let e of p.options) {
      if (e.type === u.jw.SUB_COMMAND || e.type === u.jw.SUB_COMMAND_GROUP || !(e.name in g)) continue;
      let t = (null === (i = L.autocomplete) || void 0 === i ? void 0 : i.name) === e.name || void 0,
        n = null;
      if (e.type === u.jw.STRING) {
        let i = null !== (l = null === (o = M.li(g, e.name)) || void 0 === o ? void 0 : o.trim()) && void 0 !== l ? l : "";
        n = null != e.choices ? B(e.choices, i) : e.autocomplete ? x(e, i, L) : i, r()(null != L.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && k.push({
          type: e.type,
          name: e.name,
          value: n,
          focused: t
        });
        continue
      }
      if (e.type === u.jw.ATTACHMENT) {
        if (null != L.autocomplete) continue;
        let n = R.Z.getUpload(L.channel.id, e.name, F);
        if (null == n) continue;
        let i = Z.length;
        Z.push(n), k.push({
          type: e.type,
          name: e.name,
          value: i,
          focused: t
        });
        continue
      }
      let s = M.OU(g[e.name]);
      if (r()(null != L.autocomplete || 1 === s.length, 'Option "'.concat(e.name, '" expects a single option type')), null == s[0] && !t) continue;
      let a = null !== (_ = s[0]) && void 0 !== _ ? _ : {
        type: "text",
        text: ""
      };
      switch (e.type) {
        case u.jw.CHANNEL:
          if ("channelMention" === a.type) n = a.channelId;
          else if ("text" === a.type) {
            if ((0, U.BH)(a.text)) n = a.text.trim();
            else {
              let e = (0, E.K)(a.text, null === (d = L.guild) || void 0 === d ? void 0 : d.id, L.channel.id);
              r()((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(a.text)), n = e.channelId
            }
          }
          break;
        case u.jw.ROLE:
          if ("roleMention" === a.type) n = a.roleId;
          else if ("text" === a.type) {
            if ((0, U.BH)(a.text)) n = a.text.trim();
            else {
              let e = (0, E.K)(a.text, null === (I = L.guild) || void 0 === I ? void 0 : I.id, L.channel.id, {
                allowUsers: !1
              });
              r()((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(a.text)), n = e.roleId
            }
          } else "textMention" === a.type && "@everyone" === a.text && (n = null === (T = L.guild) || void 0 === T ? void 0 : T.id);
          break;
        case u.jw.USER:
          if ("userMention" === a.type) n = a.userId;
          else if ("text" === a.type) {
            if ((0, U.BH)(a.text)) n = a.text.trim();
            else {
              let e = (0, E.K)(a.text, null === (h = L.guild) || void 0 === h ? void 0 : h.id, L.channel.id, {
                allowRoles: !1
              });
              r()((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(a.text)), n = e.userId
            }
          }
          break;
        case u.jw.MENTIONABLE:
          if ("userMention" === a.type) n = a.userId;
          else if ("roleMention" === a.type) n = a.roleId;
          else if ("textMention" === a.type && "@everyone" === a.text) n = null === (S = L.guild) || void 0 === S ? void 0 : S.id;
          else if ("text" === a.type) {
            if ((0, U.BH)(a.text)) n = a.text.trim();
            else {
              let e = (0, E.K)(a.text, null === (f = L.guild) || void 0 === f ? void 0 : f.id, L.channel.id);
              (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (N = L.guild) || void 0 === N ? void 0 : N.id : r()(!1, "Failed to resolve ".concat(a.text))
            }
          }
          break;
        case u.jw.BOOLEAN:
          "text" === a.type && (n = V(a.text.trim()));
          break;
        case u.jw.INTEGER:
          if ("text" === a.type) {
            let t = a.text.trim();
            n = null != e.choices ? Number(B(e.choices, t)) : e.autocomplete ? x(e, t, L, Number) : Number(M.AS(m.default.locale, t))
          }
          break;
        case u.jw.NUMBER:
          if ("text" === a.type) {
            let t = a.text.trim();
            n = null != e.choices ? Number(B(e.choices, t)) : e.autocomplete ? x(e, t, L, Number) : Number(M.AS(m.default.locale, t))
          }
          break;
        default:
          r()(!1, "Unsupported option type: ".concat(e.type));
          continue
      }
      r()(null != L.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && k.push({
        type: e.type,
        name: e.name,
        value: n,
        focused: t
      })
    }
  if (null != p.subCommandPath)
    for (let e = p.subCommandPath.length - 1; e >= 0; e -= 1) {
      let {
        name: t,
        type: n
      } = p.subCommandPath[e];
      k = [{
        type: n,
        name: t,
        options: k
      }]
    }
  if (null != p.execute) return c.ZP.trackWithMetadata(G.rMx.APPLICATION_COMMAND_USED, {
    command_id: p.id,
    application_id: p.applicationId,
    command_type: p.type,
    location: b === y.bB.APPLICATION_LAUNCHER ? y.Vh.APP_LAUNCHER : y.Vh.SLASH_UI
  }), p.execute(k, L);
  if (p.inputType === y.iw.BUILT_IN || p.inputType === y.iw.BUILT_IN_TEXT || p.inputType === y.iw.BUILT_IN_INTEGRATION) return;
  let j = {
    version: p.version,
    id: null !== (O = null === (t = p.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== O ? O : p.id,
    guild_id: p.guildId,
    name: null !== (C = null === (n = p.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== C ? C : p.name,
    type: p.type,
    options: k,
    application_command: p.rootCommand
  };
  null != D && (j.target_id = D), null != L.autocomplete ? (0, v.GV)(p, L, j) : (a.Z.clearAll(L.channel.id, F), await Y({
    applicationId: p.applicationId,
    data: j,
    context: L,
    attachments: Z,
    maxSizeCallback: P,
    onMessageSuccess: () => {
      H(g)
    },
    commandDisplayName: p.displayName,
    analytics_location: b === y.bB.APPLICATION_LAUNCHER ? y.Vh.APP_LAUNCHER : y.Vh.SLASH_UI,
    sectionName: w
  }))
}
let H = e => {
    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? new h.dy({
      type: T.B.UNICODE,
      names: [e.name.replaceAll(":", "")],
      surrogates: ""
    }) : "customEmoji" === e.type ? I.Z.getCustomEmojiById(e.emojiId) : null).filter(g.lm));
    t.length > 0 && s.Z.dispatch({
      type: "EMOJI_TRACK_USAGE",
      emojiUsed: t
    })
  },
  F = (e, t, n) => {
    if (e.isCommandType()) {
      let i = t.guild_id;
      null != e.interactionData && Y({
        applicationId: n,
        data: e.interactionData,
        context: {
          channel: t,
          guild: null != i ? O.Z.getGuild(i) : null
        }
      })
    }
  },
  Y = async e => {
    var t;
    let {
      applicationId: n,
      data: i,
      context: r,
      attachments: a,
      maxSizeCallback: _,
      onMessageSuccess: d,
      commandDisplayName: c,
      analytics_location: E,
      sectionName: I
    } = e, {
      channel: T,
      guild: h
    } = r, f = T.id, A = null == h ? void 0 : h.id, m = P.Nk(r.channel, i.type, n);
    if (null == m) return;
    let O = null === (t = m.application) || void 0 === t ? void 0 : t.bot;
    if (null == O && null != m.botId) try {
      await l.PR(m.botId)
    } catch {}
    let R = {
      ...(0, N.ZP)({
        channelId: f,
        content: "",
        type: i.type === u.yU.CHAT ? G.uaV.CHAT_INPUT_COMMAND : G.uaV.CONTEXT_MENU_COMMAND,
        author: null != O ? O : {
          id: m.id,
          username: m.name,
          discriminator: G.fo$,
          avatar: null,
          bot: !0
        }
      }),
      application: null == m ? void 0 : m.application,
      interaction: {
        id: i.id,
        name: i.name,
        name_localized: c,
        type: u.B8.APPLICATION_COMMAND,
        user: (0, N.pe)(C.default.getCurrentUser())
      },
      interaction_data: i
    };
    o.Z.receiveMessage(f, R, !0, {
      applicationId: n
    });
    let p = (e, t) => {
        null == t && null != e && o.Z.sendClydeError(f, e), s.Z.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: R.id,
          channelId: f,
          reason: t
        })
      },
      g = {
        applicationId: n,
        channelId: f,
        guildId: A,
        data: i,
        nonce: R.id,
        attachments: a,
        maxSizeCallback: _,
        analytics_location: E,
        sectionName: I
      };
    S.kz(g.nonce, {
      messageId: R.id,
      onCreate: e => {
        null != R.interaction && (R.interaction.id = e)
      },
      onFailure: (e, t) => p(e, t),
      data: {
        interactionType: u.B8.APPLICATION_COMMAND,
        channelId: f
      }
    }), null != a ? K(a, g.nonce, A, _).then(e => {
      if (!!e) j(g, d)
    }) : j(g, d)
  };

function j(e, t) {
  _.ZP.enqueue({
    type: _.$V.COMMAND,
    message: e
  }, n => {
    var i;
    (0, f.Sg)(e.nonce, n, e.applicationId, e.channelId, null !== (i = e.guildId) && void 0 !== i ? i : null), n.ok && null != t && t()
  })
}
async function W(e, t) {
  let n = 0,
    i = 0;
  for (let s of e) {
    var r;
    let e = t ? null !== (r = s.currentSize) && void 0 !== r ? r : 0 : await s.getSize();
    e > i && (i = e), n += e
  }
  return {
    totalSize: n,
    largestUploadedFileSize: i
  }
}
async function K(e, t, n, i) {
  let r = (0, p.dg)(n),
    s = e => {
      null == i || i(r, e), S.yr(t, G.evJ.ENTITY_TOO_LARGE, k.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
        maxSize: (0, p.Ng)(r)
      }))
    },
    {
      totalSize: o,
      largestUploadedFileSize: a
    } = await W(e, !1);
  if (a > Math.max(r, w.Y1) || o > L.zz) return s(a), !1;
  try {
    await (0, d.$)(e)
  } catch {
    S.yr(t, void 0, k.Z.Messages.UPLOADING_FILES_FAILED.format({
      count: e.length
    }))
  }
  return {
    totalSize: o,
    largestUploadedFileSize: a
  } = await W(e, !0), !e.some(e => e.error === G.evJ.ENTITY_TOO_LARGE) && !(o > L.zz) || (s(a), !1)
}