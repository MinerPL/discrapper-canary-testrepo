"use strict";
n(47120), n(724458), n(653041), n(390547);
var i = n(392711),
  r = n.n(i),
  s = n(302454),
  o = n.n(s),
  a = n(933557),
  l = n(339085),
  u = n(633302),
  _ = n(428595),
  d = n(594199),
  c = n(467798),
  E = n(601070),
  I = n(695346),
  T = n(592125),
  h = n(984933),
  S = n(271383),
  f = n(430824),
  N = n(496675),
  A = n(699516),
  m = n(246946),
  O = n(594174),
  R = n(483360),
  C = n(176354),
  p = n(51144),
  g = n(981631),
  L = n(185923),
  v = n(689938);

function D(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  if (t[0] !== e) return null;
  let r = t.substr(e.length);
  return n.sortBy(e => {
    let {
      text: t
    } = e;
    return -t.length
  }).filter(e => {
    let {
      text: n
    } = e;
    return 1 === t.toLowerCase().indexOf(n.toLowerCase())
  }).sortBy(e => {
    let {
      text: t
    } = e;
    return t === r ? 0 : 1
  }).map(t => {
    let {
      id: n,
      text: r
    } = t;
    return [e + r, n, i]
  }).first()
}

function M(e) {
  return {
    order: e.order,
    match: e.match,
    parse: t => ({
      type: e.type,
      content: t[0]
    })
  }
}

function P(e) {
  return {
    match: o().anyScopeRegex(e),
    parse: e => ({
      type: "text",
      content: e[0]
    })
  }
}
let y = _.Z.RULES,
  U = d.ZP,
  b = /^<@!?(\d+)>/,
  G = /^<@&(\d+)>/,
  w = /^<#(\d+)>/,
  k = /^<a?:(\w+):(\d+)>/,
  B = /(@everyone|@here|@Clyde)\b/,
  x = {
    link: M(o().defaultRules.link),
    autolink: M(o().defaultRules.autolink),
    url: M(o().defaultRules.url),
    inlineCode: M(y.inlineCode),
    codeBlock: M(y.codeBlock),
    rawUserMention: P(b),
    rawRoleMention: P(G),
    rawChannelMention: P(w),
    rawEmoji: P(k),
    mention: {
      match(e, t, n) {
        let i = n.split(" ").pop() + e;
        if (/^[^ ]+@[^ ]+\.[^ .]+/.test(i)) return null;
        let r = D("@", e, t.users, "mention");
        if (r || (r = D("@", e, t.mentionableRoles, "roleMention"))) return r;
        if (!(r = D("@", e, t.users.map(e => ({
            ...e,
            text: e.text.split("#")[0]
          })), "mention"))) return null;
        let s = B.exec(e);
        if (null != s && r[0].length <= s[0].length) return null;
        if ("" === n && (0, c.BH)()) {
          let t = c.vD.exec(e);
          if (null != t && r[0].length <= t[0].length) return null
        }
        return r
      },
      parse(e) {
        let [, t, n] = e, i = "@";
        return "roleMention" === n && (i += "&"), {
          type: n,
          content: "<".concat(i).concat(t, ">")
        }
      }
    },
    channel: {
      match: (e, t) => (function(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (t[0] !== e) return null;
        if ('"' !== t[1]) return D(e, t, n, i);
        let r = 2;
        for (; r < t.length; r++) {
          if ("\\" === t[r]) {
            r++;
            continue
          }
          if ('"' === t[r]) break
        }
        let s = t.substring(0, r + 1),
          o = (0, a.mA)(t.substring(2, r));
        return n.sortBy(e => {
          let {
            text: t
          } = e;
          return -t.length
        }).filter(e => {
          let {
            text: t
          } = e;
          return o === t
        }).map(e => {
          let {
            id: t
          } = e;
          return [s, t, i]
        }).first()
      })("#", e, t.channels),
      parse: e => ({
        type: "text",
        content: "<#".concat(e[1], ">")
      })
    },
    emoticon: {
      match(e, t, n) {
        if (!I.ev.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
        let i = u.ZP.EMOJI_SHORTCUT_RE.exec(e);
        return null == i || i[0].length !== e.length && " " !== e[i[0].length] && "\n" !== e[i[0].length] ? null : i
      },
      parse: e => ({
        type: "emoticon",
        content: u.ZP.convertShortcutToName(e[1]),
        isShortcut: !0
      })
    },
    emoji: {
      order: y.emoji.order,
      match: e => u.ZP.EMOJI_NAME_RE.exec(e),
      parse(e, t, n) {
        let [i, r] = e, {
          customEmoji: s
        } = n, o = Object.prototype.hasOwnProperty.call(s, r) ? s[r] : null;
        if (null != o) {
          var a;
          return {
            type: "customEmoticon",
            content: "<".concat(!0 === o.animated ? "a" : "", ":").concat(null !== (a = o.originalName) && void 0 !== a ? a : o.name, ":").concat(o.id, ">"),
            emoji: o
          }
        }
        return {
          type: "text",
          content: i
        }
      }
    },
    customEmoticons: {
      match(e, t) {
        var n, i;
        return null !== (i = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== i ? i : null
      },
      parse(e, t, n) {
        let [i, r] = e, {
          emojiContext: s
        } = n, o = s.getEmoticonByName(r);
        return null != o ? {
          type: "customEmoticon",
          content: "<".concat(!0 === o.animated ? "a" : "", ":").concat(o.name, ":").concat(o.id, ">"),
          emoji: o
        } : {
          type: "text",
          content: i
        }
      }
    },
    text: {
      ...U,
      match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, d.T9)(t.textExclusions).exec(e) : null != U.match ? U.match(e, t, "") : null
    }
  },
  V = {
    inlineCode: M(y.inlineCode),
    codeBlock: M(y.codeBlock),
    mention: {
      match: o().anyScopeRegex(b),
      parse(e, t, n) {
        let {
          isNotification: i
        } = n, r = O.default.getUser(e[1]);
        if (null == r) return {
          content: e[0]
        };
        let s = p.ZP.getUserTag(r, {
          identifiable: i && m.Z.enabled ? "never" : "always"
        });
        if (!i) return {
          content: "@".concat(s)
        };
        {
          let e = p.ZP.getGlobalName(r);
          return {
            content: null != e ? "@".concat(e) : "@".concat(s)
          }
        }
      }
    },
    roleMention: {
      match: o().anyScopeRegex(G),
      parse(e, t, n) {
        let {
          guild: i
        } = n;
        if (null != i) {
          let t = f.Z.getRoles(i.id)[e[1]];
          if (null != t) return {
            content: "@".concat(t.name)
          }
        }
        return {
          content: e[0]
        }
      }
    },
    channel: {
      match: o().anyScopeRegex(w),
      parse(e) {
        let t = T.Z.getChannel(e[1]);
        return {
          content: null == t ? e[0] : (0, a.F6)(t, O.default, A.Z, !0, !0)
        }
      }
    },
    emoji: {
      match: o().anyScopeRegex(k),
      parse(e, t, n) {
        let [i, r, s] = e, {
          guild: o
        } = n, a = l.Z.getDisambiguatedEmojiContext(o ? o.id : null).getById(s), u = null != a ? a.name : r;
        return {
          content: ":".concat(u, ":")
        }
      }
    },
    soundboard: {
      match: o().anyScopeRegex(/^<sound:(\d+)>/),
      parse(e) {
        let [t, n] = e;
        return {
          content: "<sound:".concat(n, ">")
        }
      }
    },
    spoiler: {
      match: o().anyScopeRegex(g.$92),
      parse: () => ({
        content: "<".concat(v.Z.Messages.SPOILER.toLowerCase(), ">")
      })
    },
    staticRouteLink: {
      match: o().anyScopeRegex(g.PEY),
      parse: e => ({
        content: "<id:".concat(e[1], ">")
      })
    },
    timestamp: {
      ...y.timestamp,
      parse() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return {
          content: y.timestamp.parse(...t).formatted
        }
      }
    },
    text: {
      ...U
    }
  };
[x, V].forEach(e => {
  Object.keys(e).forEach((t, n) => {
    e[t].order = n
  })
});
let Z = o().parserFor(x),
  H = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

function F(e, t, n, i) {
  let r = "";
  return e.forEach(e => {
    if (! function(e, t, n) {
        if (null != n) {
          if ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type) {
            let i;
            let r = u.ZP.translateSurrogatesToInlineEmoji(t.content);
            for (; null !== (i = H.exec(r));) {
              let r;
              null != i[1] && "" !== i[1] ? e.emojiContext && (r = e.emojiContext.getById(i[1])) : r = u.ZP.getByName(i[2]), r && n(r, t.isShortcut || !1)
            }
          }
        }
      }(t, e, i), "string" == typeof e.content) switch (e.type) {
      case "codeBlock":
      case "inlineCode":
      case "mention":
      case "roleMention":
      case "channel":
      case "emoji":
        r += e.content;
        break;
      default:
        r += n(e.content)
    } else e.content.constructor === Array ? r += F(e.content, t, n, i) : console.warn("Unknown message item type: ", e)
  }), r
}

function Y(e) {
  let t;
  let n = null == e ? void 0 : e.getGuildId(),
    i = null != n ? f.Z.getGuild(n) : null,
    s = N.Z.can(g.Plq.MENTION_EVERYONE, e);
  t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(e => ({
    userId: e,
    nick: null
  })) : null != n ? S.ZP.getMembers(n).map(e => {
    let {
      userId: t,
      nick: n
    } = e;
    return {
      userId: t,
      nick: n
    }
  }) : [];
  let o = r()(t.reduce((e, t) => {
      let {
        userId: n
      } = t, i = O.default.getUser(n);
      return null == i ? e : (e.push({
        id: n,
        text: i.tag
      }), e)
    }, [])),
    a = r()(null != i ? f.Z.getRoles(i.id) : {}).values().filter(e => {
      let {
        mentionable: t
      } = e;
      return s || t
    }).map(e => {
      let {
        id: t,
        name: n
      } = e;
      return {
        id: t,
        text: n
      }
    }),
    u = r()(h.ZP.getTextChannelNameDisambiguations(n)).map(e => {
      let {
        id: t,
        name: n
      } = e;
      return {
        id: t,
        text: n
      }
    }),
    _ = null != n ? r()(R.k1).filter(e => e !== h.sH).flatMap(e => h.ZP.getChannels(n)[e].map(e => ({
      id: e.channel.id,
      text: e.channel.name
    }))).value() : [],
    d = E.Z.computeAllActiveJoinedThreads(n).map(e => ({
      id: e.id,
      text: e.name
    })),
    c = l.Z.getDisambiguatedEmojiContext(n),
    I = c.getEscapedCustomEmoticonNames(),
    T = c.getCustomEmoji(),
    A = c.getCustomEmoticonRegex();
  return {
    inline: !0,
    mentionableRoles: a,
    guild: i,
    users: o,
    channels: u.concat(_).concat(d),
    emojiContext: c,
    customEmoticonsRegex: A,
    customEmoji: T,
    textExclusions: I,
    disableErrorGuards: !0
  }
}

function j(e) {
  return e
}
t.ZP = {
  parse(e, t) {
    var n, i, r;
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
      o = null != s ? s : Y(e),
      a = {
        content: t,
        tts: !1,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      };
    return a.content = (n = a.content, i = o, r = (t, n) => {
      C.ZP.isEmojiPremiumLocked({
        emoji: t,
        channel: e,
        intention: L.Hz.CHAT
      }) ? a.invalidEmojis.push(t) : !n && a.validNonShortcutEmojis.push(t)
    }, F(Z(n, i), i, u.ZP.translateInlineEmojiToSurrogates, r)), a
  },
  parsePreprocessor: (e, t) => Z(t, Y(e)),
  unparse(e, t, n) {
    let i = T.Z.getChannel(t),
      s = null != i ? i.getGuildId() : null,
      a = null != s ? f.Z.getGuild(s) : null,
      l = n ? V : r().omit(V, ["spoiler", "timestamp"]),
      _ = n ? j : u.ZP.translateSurrogatesToInlineEmoji,
      d = o().parserFor(l),
      c = {
        inline: !0,
        guild: a,
        isNotification: n
      };
    return F(d(e, c), c, _)
  }
}