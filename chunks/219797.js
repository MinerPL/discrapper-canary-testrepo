n.d(t, {
    L9: function () {
        return O;
    },
    ZK: function () {
        return x;
    },
    d4: function () {
        return R;
    },
    dS: function () {
        return p;
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
}),
    n(789020);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(993365),
    l = n(981729),
    o = n(481060),
    c = n(543651),
    u = n(394779),
    d = n(519320),
    _ = n(592125),
    E = n(52824),
    I = n(630388),
    m = n(591759),
    T = n(850908),
    h = n(524444),
    N = n(981631),
    f = n(689938),
    C = n(789714);
function p(e) {
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
        renderForwardComponent: (0, u.s)(e.message, {
            type: 'attachment',
            attachmentId: t.id
        })
    });
}
function g(e) {
    let t = e.item.originalItem,
        n = a.useCallback(() => {
            var e;
            return (0, I.yE)(null !== (e = t.flags) && void 0 !== e ? e : 0, N.J0y.IS_CLIP)
                ? (0, i.jsxs)(l.DY, {
                      text: f.Z.Messages.CLIPS_BETA_TAG_HOVER,
                      className: C.clipPill,
                      children: [
                          (0, i.jsx)(o.ClipsIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, i.jsx)(r.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: f.Z.Messages.CLIP_TAG
                          })
                      ]
                  })
                : null;
        }, [t]),
        s = m.Z.toURLSafe(t.proxy_url);
    return null == s
        ? null
        : (s.searchParams.append('format', 'jpeg'),
          (0, h.lV)({
              ...e,
              alt: t.description,
              poster: s.toString(),
              fileSize: t.size,
              fileName: (0, T.Z)(t),
              src: t.url,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholder_version,
              renderOverlayContent: n,
              renderForwardComponent: (0, u.s)(e.message, {
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
    let { message: t, item: n } = e,
        i = n.originalItem,
        s = a.useCallback(
            (e, n, a) => {
                var s;
                (0, d.tb)(t.id, null !== (s = i.duration_secs) && void 0 !== s ? s : null, n, t.author.id);
            },
            [t, i.duration_secs]
        ),
        r = a.useCallback(
            (e, n) => {
                var a;
                (0, d.EW)(t.id, null !== (a = i.duration_secs) && void 0 !== a ? a : null, e, t.author.id, n);
            },
            [t, i.duration_secs]
        ),
        l = a.useCallback(
            (e) => {
                var n;
                (0, d.Np)(t.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null);
            },
            [t]
        );
    return (0, h.wj)({
        ...e,
        fileSize: i.size,
        fileName: (0, T.Z)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: s,
        onPause: r,
        onError: l
    });
}
function R(e) {
    let t = e.item.originalItem;
    return (0, h.xi)({
        ...e,
        url: t.url,
        fileName: (0, T.Z)(t),
        fileSize: t.size,
        contentType: t.content_type
    });
}
function x(e) {
    let t = e.item.originalItem;
    return (0, h.ur)({
        ...e,
        url: t.url,
        fileName: (0, T.Z)(t),
        fileSize: t.size
    });
}
function O(e) {
    if ('CLIP' === e.item.type)
        return (0, i.jsx)(M, {
            attachment: e.item.originalItem,
            message: e.message
        });
    return null;
}
function M(e) {
    var t;
    let { attachment: n, message: a } = e,
        r = a.channel_id,
        l = (0, s.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getBasicChannel(r)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: o, clip_participants: u, title: d, application: E } = n;
    return (0, i.jsx)(c.Z, {
        createdAt: null != o ? Date.parse(o) : void 0,
        participantIds:
            null !==
                (t =
                    null == u
                        ? void 0
                        : u.map((e) => {
                              let { id: t } = e;
                              return t;
                          })) && void 0 !== t
                ? t
                : [],
        applicationId: null == E ? void 0 : E.id,
        title: d,
        guildId: l
    });
}
