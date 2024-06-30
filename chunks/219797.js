n.d(t, {
    L9: function () {
        return R;
    },
    ZK: function () {
        return O;
    },
    d4: function () {
        return x;
    },
    dS: function () {
        return C;
    },
    jY: function () {
        return A;
    },
    q7: function () {
        return S;
    },
    vZ: function () {
        return g;
    }
}), n(789020);
var i = n(735250), a = n(470079), s = n(442837), l = n(993365), r = n(981729), o = n(481060), c = n(543651), d = n(394779), u = n(519320), _ = n(592125), E = n(52824), m = n(630388), I = n(591759), T = n(850908), h = n(524444), N = n(981631), f = n(689938), p = n(559266);
function C(e) {
    let t = e.item.originalItem;
    return (0, h.Yi)({
        ...e,
        alt: t.description,
        src: (0, E.q)({
            proxyURL: t.proxy_url,
            url: t.url
        }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        renderForwardComponent: (0, d.s)(e.message, {
            type: 'attachment',
            attachmentId: t.id
        })
    });
}
function g(e) {
    let t = e.item.originalItem, n = a.useCallback(() => {
            var e;
            return (0, m.yE)(null !== (e = t.flags) && void 0 !== e ? e : 0, N.J0y.IS_CLIP) ? (0, i.jsxs)(r.DY, {
                text: f.Z.Messages.CLIPS_BETA_TAG_HOVER,
                className: p.clipPill,
                children: [
                    (0, i.jsx)(o.ClipsIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, i.jsx)(l.x, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: f.Z.Messages.CLIP_TAG
                    })
                ]
            }) : null;
        }, [t]), s = I.Z.toURLSafe(t.proxy_url);
    return null == s ? null : (s.searchParams.append('format', 'jpeg'), (0, h.lV)({
        ...e,
        alt: t.description,
        poster: s.toString(),
        fileSize: t.size,
        fileName: (0, T.Z)(t),
        src: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        renderOverlayContent: n,
        renderForwardComponent: (0, d.s)(e.message, {
            type: 'attachment',
            attachmentId: t.id
        })
    }));
}
function S(e) {
    let t = e.item.originalItem;
    return (0, h.hX)({
        ...e,
        fileSize: t.size,
        fileName: (0, T.Z)(t),
        src: t.url
    });
}
function A(e) {
    let {
            message: t,
            item: n
        } = e, i = n.originalItem, s = a.useCallback((e, n, a) => {
            var s;
            (0, u.tb)(t.id, null !== (s = i.duration_secs) && void 0 !== s ? s : null, n, t.author.id);
        }, [
            t,
            i.duration_secs
        ]), l = a.useCallback((e, n) => {
            var a;
            (0, u.EW)(t.id, null !== (a = i.duration_secs) && void 0 !== a ? a : null, e, t.author.id, n);
        }, [
            t,
            i.duration_secs
        ]), r = a.useCallback(e => {
            var n;
            (0, u.Np)(t.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null);
        }, [t]);
    return (0, h.wj)({
        ...e,
        fileSize: i.size,
        fileName: (0, T.Z)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: s,
        onPause: l,
        onError: r
    });
}
function x(e) {
    let t = e.item.originalItem;
    return (0, h.xi)({
        ...e,
        url: t.url,
        fileName: (0, T.Z)(t),
        fileSize: t.size,
        contentType: t.content_type
    });
}
function O(e) {
    let t = e.item.originalItem;
    return (0, h.ur)({
        ...e,
        url: t.url,
        fileName: (0, T.Z)(t),
        fileSize: t.size
    });
}
function R(e) {
    if ('CLIP' === e.item.type)
        return (0, i.jsx)(M, {
            attachment: e.item.originalItem,
            message: e.message
        });
    return null;
}
function M(e) {
    var t;
    let {
            attachment: n,
            message: a
        } = e, l = a.channel_id, r = (0, s.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getBasicChannel(l)) || void 0 === e ? void 0 : e.guild_id;
        }), {
            clip_created_at: o,
            clip_participants: d,
            title: u,
            application: E
        } = n;
    return (0, i.jsx)(c.Z, {
        createdAt: null != o ? Date.parse(o) : void 0,
        participantIds: null !== (t = null == d ? void 0 : d.map(e => {
            let {id: t} = e;
            return t;
        })) && void 0 !== t ? t : [],
        applicationId: null == E ? void 0 : E.id,
        title: u,
        guildId: r
    });
}
