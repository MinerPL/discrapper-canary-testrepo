"use strict";
n.r(t), n.d(t, {
  handleLegacyCommands: function() {
    return C
  }
}), n("47120"), n("757143");
var a = n("302454"),
  l = n.n(a),
  s = n("969812"),
  i = n("904245"),
  r = n("367907"),
  o = n("339085"),
  u = n("222677"),
  d = n("995774"),
  c = n("695346"),
  f = n("375954"),
  h = n("981631");
let m = /\\([*?+/])/g,
  p = {
    tts: {
      action: () => ({
        tts: c.EnableTTSCommand.getSetting()
      })
    },
    me: {
      action: e => ({
        content: "_".concat(e, "_")
      })
    },
    tableflip: {
      action: e => ({
        content: "".concat(e, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
      })
    },
    unflip: {
      action: e => ({
        content: "".concat(e, " ┬─┬ノ( \xba _ \xbaノ)").trim()
      })
    },
    shrug: {
      action: e => ({
        content: "".concat(e, " \xaf\\_(ツ)_/\xaf").trim()
      })
    },
    nick: {
      action(e, t) {
        let {
          channel: n
        } = t;
        if (null != n.guild_id) return s.default.changeNickname(n.guild_id, n.id, h.ME, e), {
          content: ""
        }
      }
    },
    reaction: {
      match: l().anyScopeRegex(/^\+:(.+?): *$/),
      action(e, t) {
        let {
          isEdit: n,
          channel: a
        } = t;
        if (n || !f.default.hasPresent(a.id)) return;
        let l = f.default.getMessages(a.id).last();
        if (null == l || null == l.id) return;
        let s = o.default.getDisambiguatedEmojiContext(a.guild_id).getByName(e.trim().slice(2, -1));
        if (null != s) return (0, u.addReaction)(a.id, l.id, (0, d.toReactionEmoji)(s)), {
          content: ""
        }
      }
    },
    searchReplace: {
      match: l().anyScopeRegex(/^s\/((?:.+?)[^\\]|.)\/(.*)/),
      action(e, t) {
        var n;
        let {
          isEdit: a,
          channel: l
        } = t;
        if (a) return;
        let s = f.default.getLastEditableMessage(l.id);
        if (null == s || null == s.id) return {
          content: ""
        };
        let [, r, o] = Array.from(null !== (n = e.match(this.match.regex)) && void 0 !== n ? n : []);
        r = r.replace(m, (e, t) => t), o = o.replace(m, (e, t) => t);
        let u = s.content.replace(r, o);
        return (null == u || "" === u) && 0 === s.attachments.length ? i.default.deleteMessage(l.id, s.id) : e !== s.content && i.default.editMessage(l.id, s.id, {
          content: u
        }), {
          content: ""
        }
      }
    },
    spoiler: {
      action: e => ({
        content: (0, h.MARKDOWN_SPOILER_WRAPPER)(e).trim()
      })
    }
  };

function E(e, t, n, a) {
  return r.default.trackWithMetadata(h.AnalyticEvents.SLASH_COMMAND_USED, {
    command: e
  }), t.action(n, a)
}

function C(e, t) {
  for (let a in p) {
    let l = p[a];
    if (null != l.match) {
      var n;
      if (null === (n = l.match.regex) || void 0 === n ? void 0 : n.test(e)) return E(a, l, e, t);
      continue
    }
    if (c.UseLegacyChatInput.getSetting() && "/" === e[0]) {
      let n = e.split(" ");
      if (a === n[0].slice(1) && null != l.action) return E(a, l, n.slice(1).join(" "), t)
    }
  }
}
Object.setPrototypeOf(p, null)