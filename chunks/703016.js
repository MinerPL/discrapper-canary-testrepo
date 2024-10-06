n(757143), n(733860);
var i = n(913527),
    a = n.n(i),
    s = n(570140),
    r = n(241601),
    l = n(419363),
    o = n(933557),
    c = n(660199),
    d = n(869765),
    u = n(706454),
    _ = n(695346),
    E = n(314897),
    h = n(433355),
    m = n(592125),
    I = n(271383),
    p = n(430824),
    g = n(131951),
    T = n(292959),
    f = n(699516),
    S = n(944486),
    C = n(9156),
    N = n(594174),
    A = n(51144),
    v = n(196051),
    Z = n(441729),
    L = n(653477),
    R = n(981631),
    O = n(689938);
let x = [],
    b = null,
    M = null,
    P = null,
    D = /\|\|([\s\S]+?)\|\|/g;
function y(e, t, n, i) {
    let s = p.Z.getGuild(n),
        r = e
            .replace(D, O.Z.Messages.SPOILER)
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var i;
                let a = N.default.getUser(t);
                if (null == a) return e;
                return null !== (i = I.ZP.getNick(n, a.id)) && void 0 !== i ? i : A.ZP.getName(a);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != s ? p.Z.getRole(s.id, t) : null;
                return null != n && null != n.name ? n.name : O.Z.Messages.MESSAGE_TTS_DELETED_ROLE;
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = m.Z.getChannel(t);
                return null == n ? e : (0, o.F6)(n, N.default, f.Z);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => ''.concat(O.Z.Messages.EMOJI, ' ').concat(t))
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => '/'.concat(t))
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = c.Qh[n],
                    s = 1000 * parseInt(t, 10),
                    r = a()(s);
                return null != i ? i(r) : r.format();
            });
    return null == i
        ? O.Z.Messages.MESSAGE_TTS.format({
              username: t,
              body: r
          })
        : O.Z.Messages.MESSAGE_TTS_REPLY.format({
              username: t,
              body: r,
              replyUsername: i
          });
}
function j() {
    if (!l.Zh) return !1;
    let e = u.default.locale;
    if (null == P) {
        var t;
        P = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices();
    }
    let n = P.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e || !1);
    M = n.length > 0 ? n[0] : null;
}
async function U(e, t, n, i, a) {
    let s = l.e6(e, n);
    null !== s && (null == M && j(), t ? await (0, v.NB)() : null == b || b.removeEventListener('end', v.NB), s.addEventListener('end', v.NB), null != i && s.addEventListener('start', i), null != a && s.addEventListener('end', a), (b = s), l.iq(s, M));
}
function G(e, t, n, i, a) {
    U(e, t, a, () => {
        (0, v.Bo)(n, i);
    });
}
function w(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: a, onEnd: s } = e;
    U(t, n, i, a, s);
}
function k() {
    return null !== b && b.removeEventListener('end', v.NB), l.M9(), (b = null), !0;
}
function B(e) {
    var t, n, i;
    let { message: a, channel: s } = e,
        r = a.type === R.uaV.REPLY ? d.Z.getMessageByReference(a.messageReference) : null,
        l = (null == r ? void 0 : r.state) === d.Y.LOADED ? (null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.author) : null,
        o = null != l ? (null !== (n = I.ZP.getNick(s.guild_id, null == l ? void 0 : l.id)) && void 0 !== n ? n : A.ZP.getName(l)) : null,
        c = s.getGuildId(),
        u = null !== (i = I.ZP.getNick(c, a.author.id)) && void 0 !== i ? i : A.ZP.getName(a.author);
    return G(y(a.content, u, c, o), !0, s.id, a.id), !0;
}
function V(e) {
    var t, n, i, a, s, r;
    let { channelId: l, message: o, optimistic: c } = e;
    if (c || g.Z.isSelfDeaf()) return !1;
    let d = m.Z.getChannel(l);
    if (null == d) return !1;
    let u = S.Z.getChannelId(),
        p = h.ZP.getCurrentSidebarChannelId(u),
        N = l === u || l === p,
        v = _.OW.getSetting() && o.tts && N,
        Z = T.Z.getTTSType(),
        O = (null === (t = o.author) || void 0 === t ? void 0 : t.id) !== E.default.getId() && (Z === R.PrB.ALL_CHANNELS || (Z === R.PrB.SELECTED_CHANNEL && N));
    if ((v || O) && !f.Z.isBlockedForMessage(o)) {
        if (x.indexOf(o.id) >= 0) return !1;
        x.unshift(o.id) > 10 && x.pop();
        let e = d.getGuildId();
        if (null != e && C.ZP.getMutedChannels(e).has(l)) return !1;
        let t = null !== (s = null !== (a = I.ZP.getNick(e, null === (n = o.author) || void 0 === n ? void 0 : n.id)) && void 0 !== a ? a : A.ZP.getName(o.author)) && void 0 !== s ? s : '',
            c = o.type === R.uaV.REPLY ? (null === (i = o.referenced_message) || void 0 === i ? void 0 : i.author) : null,
            u = null != c ? (null !== (r = I.ZP.getNick(e, null == c ? void 0 : c.id)) && void 0 !== r ? r : A.ZP.getName(c)) : null;
        G(y(o.content, t, e, u), !1, d.id, o.id, L.f);
    }
    return !1;
}
function H(e) {
    let { id: t, channelId: n } = e,
        i = Z.Z.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, v.NB)(), !0);
}
function F() {
    g.Z.isSelfDeaf() && l.M9();
}
t.Z = {
    init() {
        s.Z.subscribe('SPEAK_TEXT', w), s.Z.subscribe('SPEAK_MESSAGE', B), s.Z.subscribe('STOP_SPEAKING', k), s.Z.subscribe('MESSAGE_CREATE', V), s.Z.subscribe('MESSAGE_DELETE', H), s.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', F), s.Z.subscribe('USER_SETTINGS_PROTO_UPDATE', j), (0, r.Ql)(j);
    }
};
