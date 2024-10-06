n.d(t, {
    g: function () {
        return E;
    }
}),
    n(47120),
    n(757143),
    n(627494);
var i = n(302454),
    s = n.n(i),
    a = n(969812),
    l = n(904245),
    r = n(367907),
    o = n(339085),
    c = n(222677),
    u = n(995774),
    d = n(695346),
    h = n(375954),
    p = n(981631);
let m = /\\([*?+/])/g,
    _ = {
        tts: { action: () => ({ tts: d.OW.getSetting() }) },
        me: { action: (e) => ({ content: '_'.concat(e, '_') }) },
        tableflip: { action: (e) => ({ content: ''.concat(e, ' (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B').trim() }) },
        unflip: { action: (e) => ({ content: ''.concat(e, ' \u252C\u2500\u252Cノ( º _ ºノ)').trim() }) },
        shrug: { action: (e) => ({ content: ''.concat(e, ' \xAF\\_(ツ)_/\xAF').trim() }) },
        nick: {
            action(e, t) {
                let { channel: n } = t;
                if (null != n.guild_id) return a.Z.changeNickname(n.guild_id, n.id, p.ME, e), { content: '' };
            }
        },
        reaction: {
            match: s().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let { isEdit: n, channel: i } = t;
                if (n || !h.Z.hasPresent(i.id)) return;
                let s = h.Z.getMessages(i.id).last();
                if (null == s || null == s.id) return;
                let a = o.ZP.getDisambiguatedEmojiContext(i.guild_id).getByName(e.trim().slice(2, -1));
                if (null != a) return (0, c.rU)(i.id, s.id, (0, u.g1)(a)), { content: '' };
            }
        },
        searchReplace: {
            match: s().anyScopeRegex(/^s\/((?:.+?)[^\\]|.)\/(.*)/),
            action(e, t) {
                var n;
                let { isEdit: i, channel: s } = t;
                if (i) return;
                let a = h.Z.getLastEditableMessage(s.id);
                if (null == a || null == a.id) return { content: '' };
                let [, r, o] = Array.from(null !== (n = e.match(this.match.regex)) && void 0 !== n ? n : []);
                (r = r.replace(m, (e, t) => t)), (o = o.replace(m, (e, t) => t));
                let c = !1;
                o.endsWith('/g') && ((o = o.slice(0, -2)), (c = !0));
                let u = c ? a.content.replaceAll(r, o) : a.content.replace(r, o);
                return (null == u || '' === u) && 0 === a.attachments.length ? l.Z.deleteMessage(s.id, a.id) : e !== a.content && l.Z.editMessage(s.id, a.id, { content: u }), { content: '' };
            }
        },
        spoiler: { action: (e) => ({ content: (0, p.XmY)(e).trim() }) }
    };
function f(e, t, n, i) {
    return r.ZP.trackWithMetadata(p.rMx.SLASH_COMMAND_USED, { command: e }), t.action(n, i);
}
function E(e, t) {
    for (let i in _) {
        let s = _[i];
        if (null != s.match) {
            var n;
            if (null === (n = s.match.regex) || void 0 === n ? void 0 : n.test(e)) return f(i, s, e, t);
            continue;
        }
        if (d.dN.getSetting() && '/' === e[0]) {
            let n = e.split(' ');
            if (i === n[0].slice(1) && null != s.action) return f(i, s, n.slice(1).join(' '), t);
        }
    }
}
Object.setPrototypeOf(_, null);
