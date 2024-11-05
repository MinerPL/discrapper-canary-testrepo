n.d(t, {
    ZP: function () {
        return h;
    },
    k$: function () {
        return p;
    },
    n0: function () {
        return _;
    },
    p6: function () {
        return f;
    },
    rs: function () {
        return d;
    }
}),
    n(47120),
    n(757143),
    n(865427);
var r = n(830121),
    i = n(202131),
    a = n(454585);
n(665430);
var s = n(55406),
    o = n(408433),
    l = n(981631);
let u = new Set([l.hBH.IMAGE, l.hBH.GIFV]),
    c = new Set(['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler']);
function d(e, t) {
    let n = f({
            channelId: e.channel_id,
            messageId: e.id,
            renderOptions: t
        }),
        r = null != e.webhookId;
    return {
        ...n,
        allowLinks: r || n.allowLinks,
        allowEmojiLinks: r,
        mentionChannels: e.mentionChannels
    };
}
function f(e) {
    let { channelId: t, messageId: n, renderOptions: r } = e;
    return {
        channelId: t,
        messageId: n,
        allowLinks: !!r.allowLinks,
        allowDevLinks: !!r.allowDevLinks,
        formatInline: !!r.formatInline,
        noStyleAndInteraction: !!r.noStyleAndInteraction,
        allowHeading: !!r.allowHeading,
        allowList: !!r.allowList,
        previewLinkTarget: !!r.previewLinkTarget,
        disableAnimatedEmoji: !!r.disableAnimatedEmoji,
        isInteracting: !!r.isInteracting,
        allowEmojiLinks: !1,
        disableAutoBlockNewlines: !0,
        mentionChannels: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: r.viewingChannelId,
        forceWhite: !!r.forceWhite
    };
}
function _(e, t, n) {
    return {
        hasSpoilerEmbeds: !1,
        content: a.Z.reactParserFor(s.Z.getDefaultRules(t))(e.content, !1, null != n ? { changeLog: n } : {})
    };
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (e, t, n) {
        var a;
        let { toAST: s = !1, hideSimpleEmbedContent: l = !0, formatInline: f = !1, postProcessor: _, shouldFilterKeywords: h, contentMessage: p } = n,
            g = !1,
            v = (null != p ? p : t).content,
            I = e(
                h
                    ? (0, i.N)(v, {
                          escapeReplacement: !0,
                          messageId: t.id,
                          channelId: t.channel_id,
                          authorId: null === (a = t.author) || void 0 === a ? void 0 : a.id
                      })
                    : v,
                !0,
                d(t, n),
                (e, n) => (
                    !Array.isArray(e) && (e = [e]),
                    l &&
                        (e = (function (e, t) {
                            if (1 !== e.length || 1 !== t.length) return e;
                            let n = e[0],
                                r = t[0];
                            return ('link' === n.type || 'attachmentLink' === n.type) && u.has(r.type) && (0, o.dY)(r) ? [] : e;
                        })(e, (null != p ? p : t).embeds)),
                    !f &&
                        (e = (function (e, t) {
                            return t ? m(e) : ('paragraph' === e[0].type && e[0].content instanceof Array && (e[0].content = m(e[0].content)), e);
                        })(e, n)),
                    (e = (function (e) {
                        let t = e.some((e) => 'link' !== e.type || !1);
                        return e.filter((e) => {
                            let n = 'link' === e.type,
                                i = (0, r.el)(e.target);
                            return !(n && null != i && !t);
                        });
                    })(e)),
                    t.embeds.length > 0 &&
                        (g = (function (e, t) {
                            return t ? E(e) : 'paragraph' === e[0].type && e[0].content instanceof Array && E(e[0].content);
                        })(e, n)),
                    f &&
                        (e = (function e(t) {
                            return (
                                t.forEach((t) => {
                                    c.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : (t.content = t.content.replace(/\n/g, ' ')));
                                }),
                                t
                            );
                        })(e)),
                    null != _ && (e = _(e, n)),
                    e
                )
            );
        return {
            hasSpoilerEmbeds: g,
            content: I
        };
    })(t.formatInline ? a.Z.parseInlineReply : a.Z.parse, e, t);
}
function p(e, t, n) {
    var r;
    return (
        (r = a.Z.parseAutoModerationSystemMessage),
        r(
            e,
            !0,
            {
                allowLinks: !1,
                allowDevLinks: !1,
                allowEmojiLinks: !1,
                mentionChannels: [],
                isInteracting: !1,
                formatInline: !1,
                noStyleAndInteraction: !1,
                allowHeading: !1,
                allowList: !1,
                disableAutoBlockNewlines: !0,
                highlightWord: t,
                disableAnimatedEmoji: !1,
                channelId: n,
                muted: !1
            },
            (e) => (!Array.isArray(e) && (e = [e]), e)
        )
    );
}
function m(e) {
    if (e.some((e) => 'emoji' !== e.type && 'customEmoji' !== e.type && 'soundboard' !== e.type && ('string' != typeof e.content || '' !== e.content.trim()) && !0)) return e;
    let t = 0;
    return (e.forEach((e) => {
        if ((('emoji' === e.type || 'customEmoji' === e.type || 'soundboard' === e.type) && (t += 1), t > 30)) return !1;
    }),
    t > 30)
        ? e
        : (e.forEach((e) => {
              e.jumboable = !0;
          }),
          e);
}
function g(e, t) {
    if (e instanceof Array) return e.some((e) => g(e, t));
    let n = t(e);
    if (null != n) return n;
    if (e.content instanceof Array) return g(e.content, t);
    if (e.items instanceof Array) return e.items.some((e) => g(e, t));
    else return !1;
}
function E(e) {
    return g(e, (e) => ('spoiler' === e.type ? g(e, (e) => 'link' === e.type || 'attachmentLink' === e.type || null) : null));
}
