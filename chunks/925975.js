n.d(t, {
    g: function () {
        return E;
    }
}),
    n(47120),
    n(757143);
var i = n(302454),
    a = n.n(i),
    s = n(969812),
    l = n(904245),
    r = n(367907),
    o = n(339085),
    c = n(222677),
    u = n(995774),
    d = n(695346),
    h = n(375954),
    m = n(981631);
let p = /\\([*?+/])/g,
    _ = {
        tts: { action: () => ({ tts: d.OW.getSetting() }) },
        me: { action: (e) => ({ content: '_'.concat(e, '_') }) },
        tableflip: { action: (e) => ({ content: ''.concat(e, ' (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B').trim() }) },
        unflip: { action: (e) => ({ content: ''.concat(e, ' \u252C\u2500\u252Cノ( º _ ºノ)').trim() }) },
        shrug: { action: (e) => ({ content: ''.concat(e, ' \xAF\\_(ツ)_/\xAF').trim() }) },
        nick: {
            action(e, t) {
                let { channel: n } = t;
                if (null != n.guild_id) return s.Z.changeNickname(n.guild_id, n.id, m.ME, e), { content: '' };
            }
        },
        reaction: {
            match: a().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let { isEdit: n, channel: i } = t;
                if (n || !h.Z.hasPresent(i.id)) return;
                let a = h.Z.getMessages(i.id).last();
                if (null == a || null == a.id) return;
                let s = o.ZP.getDisambiguatedEmojiContext(i.guild_id).getByName(e.trim().slice(2, -1));
                if (null != s) return (0, c.rU)(i.id, a.id, (0, u.g1)(s)), { content: '' };
            }
        },
        searchReplace: {
            match: a().anyScopeRegex(/^s\/((?:.+?)[^\\]|.)\/(.*)/),
            action(e, t) {
                var n;
                let { isEdit: i, channel: a } = t;
                if (i) return;
                let s = h.Z.getLastEditableMessage(a.id);
                if (null == s || null == s.id) return { content: '' };
                let [, r, o] = Array.from(null !== (n = e.match(this.match.regex)) && void 0 !== n ? n : []);
                (r = r.replace(p, (e, t) => t)), (o = o.replace(p, (e, t) => t));
                let c = s.content.replace(r, o);
                return (null == c || '' === c) && 0 === s.attachments.length ? l.Z.deleteMessage(a.id, s.id) : e !== s.content && l.Z.editMessage(a.id, s.id, { content: c }), { content: '' };
            }
        },
        spoiler: { action: (e) => ({ content: (0, m.XmY)(e).trim() }) }
    };
function f(e, t, n, i) {
    return r.ZP.trackWithMetadata(m.rMx.SLASH_COMMAND_USED, { command: e }), t.action(n, i);
}
function E(e, t) {
    for (let i in _) {
        let a = _[i];
        if (null != a.match) {
            var n;
            if (null === (n = a.match.regex) || void 0 === n ? void 0 : n.test(e)) return f(i, a, e, t);
            continue;
        }
        if (d.dN.getSetting() && '/' === e[0]) {
            let n = e.split(' ');
            if (i === n[0].slice(1) && null != a.action) return f(i, a, n.slice(1).join(' '), t);
        }
    }
}
Object.setPrototypeOf(_, null);
