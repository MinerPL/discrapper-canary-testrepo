i.d(n, {
    L9: function () {
        return x;
    },
    ZK: function () {
        return T;
    },
    d4: function () {
        return M;
    },
    dS: function () {
        return S;
    },
    jY: function () {
        return A;
    },
    q7: function () {
        return g;
    },
    vZ: function () {
        return v;
    }
}),
    i(789020);
var t = i(735250),
    o = i(470079),
    a = i(442837),
    c = i(993365),
    r = i(981729),
    l = i(481060),
    s = i(543651),
    d = i(394779),
    u = i(519320),
    _ = i(592125),
    f = i(52824),
    m = i(630388),
    I = i(591759),
    h = i(850908),
    p = i(524444),
    E = i(981631),
    C = i(689938),
    y = i(120131);
function S(e) {
    var n;
    let i = e.item.originalItem;
    return (0, p.Yi)({
        ...e,
        alt: i.description,
        src: (0, f.q)({
            proxyURL: i.proxy_url,
            url: i.url
        }),
        original: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, m.yE)(null !== (n = i.flags) && void 0 !== n ? n : 0, E.J0y.IS_ANIMATED),
        renderForwardComponent: (0, d.s)(e.message, {
            type: 'attachment',
            attachmentId: i.id
        })
    });
}
function v(e) {
    var n;
    let i = e.item.originalItem,
        a = o.useCallback(() => {
            var e;
            return (0, m.yE)(null !== (e = i.flags) && void 0 !== e ? e : 0, E.J0y.IS_CLIP)
                ? (0, t.jsxs)(r.DY, {
                      text: C.Z.Messages.CLIPS_BETA_TAG_HOVER,
                      className: y.clipPill,
                      children: [
                          (0, t.jsx)(l.ClipsIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, t.jsx)(c.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: C.Z.Messages.CLIP_TAG
                          })
                      ]
                  })
                : null;
        }, [i]),
        s = I.Z.toURLSafe(i.proxy_url);
    return null == s
        ? null
        : (s.searchParams.append('format', 'webp'),
          (0, p.lV)({
              ...e,
              alt: i.description,
              poster: s.toString(),
              fileSize: i.size,
              fileName: (0, h.Z)(i),
              src: i.url,
              placeholder: i.placeholder,
              placeholderVersion: i.placeholder_version,
              srcIsAnimated: (0, m.yE)(null !== (n = i.flags) && void 0 !== n ? n : 0, E.J0y.IS_ANIMATED),
              renderOverlayContent: a,
              renderForwardComponent: (0, d.s)(e.message, {
                  type: 'attachment',
                  attachmentId: i.id
              })
          }));
}
function g(e) {
    let n = e.item.originalItem;
    return (0, p.hX)({
        ...e,
        fileSize: n.size,
        fileName: (0, h.Z)(n),
        src: n.url
    });
}
function A(e) {
    let { message: n, item: i } = e,
        t = i.originalItem,
        a = o.useCallback(
            (e, i, o) => {
                var a;
                (0, u.tb)(n.id, null !== (a = t.duration_secs) && void 0 !== a ? a : null, i, n.author.id);
            },
            [n, t.duration_secs]
        ),
        c = o.useCallback(
            (e, i) => {
                var o;
                (0, u.EW)(n.id, null !== (o = t.duration_secs) && void 0 !== o ? o : null, e, n.author.id, i);
            },
            [n, t.duration_secs]
        ),
        r = o.useCallback(
            (e) => {
                var i;
                (0, u.Np)(n.id, null !== (i = null == e ? void 0 : e.message) && void 0 !== i ? i : null);
            },
            [n]
        );
    return (0, p.wj)({
        ...e,
        fileSize: t.size,
        fileName: (0, h.Z)(t),
        src: t.url,
        durationSecs: t.duration_secs,
        waveform: t.waveform,
        onPlay: a,
        onPause: c,
        onError: r
    });
}
function M(e) {
    let n = e.item.originalItem;
    return (0, p.xi)({
        ...e,
        url: n.url,
        fileName: (0, h.Z)(n),
        fileSize: n.size,
        contentType: n.content_type
    });
}
function T(e) {
    let n = e.item.originalItem;
    return (0, p.ur)({
        ...e,
        url: n.url,
        fileName: (0, h.Z)(n),
        fileSize: n.size
    });
}
function x(e) {
    if ('CLIP' === e.item.type)
        return (0, t.jsx)(O, {
            attachment: e.item.originalItem,
            message: e.message
        });
    return null;
}
function O(e) {
    var n;
    let { attachment: i, message: o } = e,
        c = o.channel_id,
        r = (0, a.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getBasicChannel(c)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: l, clip_participants: d, title: u, application: f } = i;
    return (0, t.jsx)(s.Z, {
        createdAt: null != l ? Date.parse(l) : void 0,
        participantIds:
            null !==
                (n =
                    null == d
                        ? void 0
                        : d.map((e) => {
                              let { id: n } = e;
                              return n;
                          })) && void 0 !== n
                ? n
                : [],
        applicationId: null == f ? void 0 : f.id,
        title: u,
        guildId: r
    });
}
