"use strict";
n(757143), n(653041), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(302454),
  o = n.n(s),
  a = n(797610),
  l = n(633302),
  u = n(763296),
  _ = n(592125),
  d = n(430824),
  c = n(594174),
  E = n(5192),
  I = n(51144),
  T = n(298552),
  h = n(444758),
  S = n(723454),
  f = n(772096),
  N = n(800927),
  A = n(945884),
  m = n(594199),
  O = n(97734),
  R = n(660199),
  C = n(364458),
  p = n(981631),
  g = n(689079),
  L = n(377668),
  v = n(689938);
let D = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
  M = /^$|\n *$/,
  P = /^ *>>> ?/,
  y = /^ *> ?/gm;

function U(e) {
  let t = (0, f.yw)(e[1]);
  if (null == t) return {
    type: "text",
    content: e[1]
  };
  let {
    displayTarget: n,
    target: i
  } = t;
  return {
    type: "link",
    content: [{
      type: "text",
      content: n
    }],
    target: i,
    title: void 0
  }
}
let b = e => {
    let t = _.Z.getChannel(e);
    return null == t ? void 0 : t.getGuildId()
  },
  G = e => null != e.guildId ? d.Z.getGuild(e.guildId) : null != e.channelId ? d.Z.getGuild(b(e.channelId)) : null,
  w = {
    newline: o().defaultRules.newline,
    paragraph: o().defaultRules.paragraph,
    escape: {
      ...o().defaultRules.escape,
      match: (e, t, n) => !1 === t.allowEscape ? null : o().defaultRules.escape.match(e, t, n)
    },
    blockQuote: {
      ...o().defaultRules.blockQuote,
      requiredFirstCharacters: [" ", ">"],
      match(e, t) {
        let {
          prevCapture: n,
          inQuote: i,
          nested: r
        } = t;
        if (i || r) return null;
        if (null == n) return D.exec(e);
        let s = n[0];
        return M.test(s) ? D.exec(e) : null
      },
      parse(e, t, n) {
        let i = e[0],
          r = !!P.exec(i),
          s = r ? P : y,
          o = i.replace(s, ""),
          a = n.inQuote || !1,
          l = n.inline || !1;
        n.inQuote = !0, !r && (n.inline = !0);
        let u = t(o, n);
        return n.inQuote = a, n.inline = l, 0 === u.length && u.push({
          type: "text",
          content: " "
        }), {
          content: u,
          type: "blockQuote"
        }
      }
    },
    link: f.ZP,
    autolink: {
      ...o().defaultRules.autolink,
      parse: U
    },
    url: {
      ...o().defaultRules.url,
      requiredFirstCharacters: ["h", "s"],
      match(e, t) {
        if (!t.inline) return null;
        let n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
        if (null != n) {
          let e = 0,
            t = n[0];
          for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
            ;
            let n = t.indexOf("(", e);
            if (-1 === n) {
              t = t.slice(0, t.length - 1);
              break
            }
            e = n + 1
          }
          n[0] = n[1] = t
        }
        return n
      },
      parse: U
    },
    strong: o().defaultRules.strong,
    em: o().defaultRules.em,
    u: o().defaultRules.u,
    br: o().defaultRules.br,
    text: m.ZP,
    inlineCode: {
      ...o().defaultRules.inlineCode,
      parse(e, t, n) {
        let i = o().defaultRules.inlineCode.parse(e, t, n);
        return !0 === n.parseInlineCodeChildContent ? {
          ...i,
          validationChildContent: t(i.content, n)
        } : i
      }
    },
    emoticon: {
      order: m.ZP.order,
      requiredFirstCharacters: ["\xaf"],
      match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
      parse: e => ({
        type: "text",
        content: e[1]
      })
    },
    codeBlock: {
      order: o().defaultRules.codeBlock.order,
      requiredFirstCharacters: ["`"],
      match: e => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
      parse(e, t, n) {
        var i, r;
        return {
          lang: null !== (i = e[1]) && void 0 !== i ? i : "",
          content: null !== (r = e[2]) && void 0 !== r ? r : "",
          inQuote: n.inQuote || !1
        }
      }
    },
    roleMention: {
      order: m.ZP.order,
      requiredFirstCharacters: ["<"],
      match: e => /^<@&(\d+)>/.exec(e),
      parse(e, t, n) {
        let [i, r] = e;
        if (n.returnMentionIds) return {
          type: "roleMention",
          id: r
        };
        let s = G(n),
          o = null != s ? d.Z.getRole(s.id, r) : null;
        return null == o ? {
          type: "text",
          content: "@".concat(v.Z.Messages.UNKNOWN_ROLE_PLACEHOLDER)
        } : {
          type: "mention",
          channelId: n.channelId,
          guildId: null != s ? s.id : null,
          roleId: r,
          roleColor: o.color,
          color: o.color,
          colorString: o.colorString,
          content: [{
            type: "text",
            content: "@".concat(o.name)
          }]
        }
      }
    },
    mention: {
      order: m.ZP.order,
      requiredFirstCharacters: ["<", "@"],
      match(e, t) {
        let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
        return null != n && ("@Clyde" !== n[0] || (0, a.gJ)(G(t), _.Z.getChannel(t.channelId))) ? n : null
      },
      parse(e, t, n) {
        let i, r;
        if (n.returnMentionIds) return null == e[1] ? {
          type: "mention",
          text: e[0]
        } : {
          type: "mention",
          id: e[1]
        };
        let s = c.default.getUser(e[1]),
          o = _.Z.getChannel(n.channelId);
        if (null != s && (r = s.id, i = s.toString(), null != o)) {
          var l;
          i = null !== (l = E.ZP.getNickname(o.getGuildId(), n.channelId, s)) && void 0 !== l ? l : I.ZP.getName(s)
        }
        null == s && "@Clyde" === e[0] && (0, a.gJ)(G(n), o) && (r = L.fL);
        let u = e[1],
          d = null != u && p.Xyh.test(u.trim()),
          T = d && n.unknownUserMentionPlaceholder ? "@".concat(v.Z.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
        return {
          userId: r,
          channelId: n.channelId,
          viewingChannelId: n.viewingChannelId,
          guildId: null == o ? void 0 : o.getGuildId(),
          parsedUserId: d ? u : null,
          roleName: e[2],
          content: [{
            type: "text",
            content: null != i ? "@".concat(i) : T
          }]
        }
      }
    },
    channelMention: h.Z.channelMention,
    channelOrMessageUrl: h.Z.channelOrMessageUrl,
    mediaPostLink: h.Z.mediaPostLink,
    attachmentLink: T.Z.attachmentLink,
    commandMention: {
      order: o().defaultRules.text.order,
      requiredFirstCharacters: ["<"],
      match: e => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
      parse(e, t, n) {
        if (n.returnMentionIds) return {
          type: "commandMention",
          id: e[2]
        };
        let [, ...i] = e[1].split(" "), r = "".concat(e[2]).concat([...i].map(e => "".concat(g.oQ).concat(e)).join(""));
        return {
          channelId: n.channelId,
          commandId: e[2],
          commandName: e[1],
          commandKey: r,
          content: [{
            type: "text",
            content: "".concat(e[1])
          }]
        }
      }
    },
    emoji: {
      order: m.ZP.order,
      requiredFirstCharacters: [":"],
      match(e) {
        let t = l.ZP.EMOJI_NAME_RE.exec(e);
        return null != t && "" !== l.ZP.convertNameToSurrogate(t[1]) ? t : null
      },
      parse(e) {
        let t = l.ZP.convertNameToSurrogate(e[1]);
        return {
          type: "text",
          content: null == t || "" === t ? ":".concat(e[1], ":") : t
        }
      }
    },
    soundboard: {
      order: m.ZP.order,
      requiredFirstCharacters: ["<"],
      match: e => /^<sound:(\d+)>/.exec(e),
      parse(e, t, n) {
        var i;
        let r = e[1],
          s = u.Z.getSoundById(r),
          o = null !== (i = null == s ? void 0 : s.name) && void 0 !== i ? i : r;
        return {
          type: "soundboard",
          id: r,
          soundId: r,
          channelId: n.channelId,
          content: o
        }
      }
    },
    customEmoji: {
      order: m.ZP.order,
      requiredFirstCharacters: ["<"],
      match: e => /^<a?:(\w+):(\d+)>/.exec(e),
      parse: e => ({
        type: "text",
        content: ":".concat(e[1], ":")
      })
    },
    timestamp: {
      order: m.ZP.order - 1,
      requiredFirstCharacters: ["<"],
      match: e => R.Ay.exec(e),
      parse(e) {
        let [t, n, i] = e, r = (0, R.ZB)(n, i);
        return null == r ? {
          type: "text",
          content: t
        } : r
      }
    },
    s: {
      order: o().defaultRules.u.order,
      requiredFirstCharacters: ["~"],
      match: o().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
      parse: o().defaultRules.u.parse
    },
    spoiler: {
      order: m.ZP.order,
      requiredFirstCharacters: ["|"],
      match: e => p.$92.exec(e),
      parse: (e, t, n) => ({
        content: t(e[1], n),
        channelId: n.channelId
      })
    },
    staticRouteLink: {
      order: m.ZP.order,
      requiredFirstCharacters: ["<"],
      match: e => p.PEY.exec(e),
      parse: (e, t, n) => ({
        content: [{
          type: "text",
          content: {
            home: v.Z.Messages.SERVER_GUIDE,
            guide: v.Z.Messages.SERVER_GUIDE,
            browse: v.Z.Messages.CHANNEL_BROWSER_TITLE,
            customize: v.Z.Messages.CHANNELS_AND_ROLES
          } [e[1]]
        }],
        channelId: e[1],
        guildId: b(n.channelId),
        id: e[1]
      })
    },
    heading: S.Z,
    list: N.Z,
    subtext: A.Z
  },
  k = (0, C.Z)([w, O.Z]),
  B = r().omit(k, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext"]),
  x = r().omit(k, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink", "subtext"]),
  V = r().omit(k, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink", "subtext"]),
  Z = r().omit((0, C.Z)([k, {
    inlineCode: {
      match(e, t, n) {
        let i = k.codeBlock.match(e, t, n);
        if (null != i) return i;
        let r = k.inlineCode.match(e, t, n);
        if (null != r) return r
      }
    }
  }]), ["blockQuote", "codeBlock", "br"]),
  H = r().omit(k, ["codeBlock", "br", "blockQuote"]),
  F = r().omit(k, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline", "subtext"]),
  Y = r().omit(k, ["codeBlock", "blockQuote", "br"]),
  j = r().omit(k, ["codeBlock", "br", "inlineCode"]);

function W(e, t) {
  return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
}
let K = (0, C.Z)([{
  highlightWord: {
    order: -1,
    match(e, t) {
      if (null != t.parseDepth && t.parseDepth > 10 || null == t.highlightWord || 0 === t.highlightWord.length) return null;
      let n = e.indexOf(t.highlightWord);
      if (-1 === n) return null;
      let i = !W(e, n);
      if (i)
        do n = e.indexOf(t.highlightWord, n + 1), i = !W(e, n); while (i && -1 !== n);
      if (-1 === n) return null;
      let r = e.substring(0, n),
        s = e.substring(n + t.highlightWord.length);
      return [e, t.highlightWord, r, s]
    },
    parse(e, t, n) {
      var i;
      let r = null !== (i = n.parseDepth) && void 0 !== i ? i : 0,
        s = {
          ...n,
          parseDepth: r + 1
        },
        o = t(e[2], s),
        a = t(e[3], s);
      return [...o, {
        type: "highlight",
        content: e[1]
      }, ...a]
    }
  }
}, r().omit(k, ["url"])]);
t.Z = {
  RULES: k,
  CHANNEL_TOPIC_RULES: B,
  VOICE_CHANNEL_STATUS_RULES: x,
  EMBED_TITLE_RULES: V,
  INLINE_REPLY_RULES: Z,
  GUILD_VERIFICATION_FORM_RULES: H,
  GUILD_EVENT_RULES: Y,
  PROFILE_BIO_RULES: F,
  AUTO_MODERATION_SYSTEM_MESSAGE_RULES: K,
  NATIVE_SEARCH_RESULT_LINK_RULES: j
}