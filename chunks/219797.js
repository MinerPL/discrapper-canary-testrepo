n.d(i, {
    L9: function () {
        return w;
    },
    ZK: function () {
        return b;
    },
    d4: function () {
        return M;
    },
    dS: function () {
        return y;
    },
    jY: function () {
        return B;
    },
    q7: function () {
        return E;
    },
    vZ: function () {
        return g;
    }
}),
    n(789020);
var t = n(200651),
    o = n(192379),
    a = n(442837),
    c = n(993365),
    r = n(981729),
    l = n(481060),
    s = n(543651),
    d = n(519320),
    u = n(592125),
    m = n(52824),
    _ = n(630388),
    f = n(591759),
    p = n(850908),
    I = n(524444),
    C = n(981631),
    h = n(388032),
    v = n(120131);
function y(e) {
    var i;
    let n = e.item.originalItem;
    return (0, I.Yi)({
        ...e,
        alt: n.description,
        src: (0, m.q)({
            proxyURL: n.proxy_url,
            url: n.url
        }),
        original: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholder_version,
        srcIsAnimated: (0, _.yE)(null !== (i = n.flags) && void 0 !== i ? i : 0, C.J0y.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: 'attachment',
                attachmentId: n.id
            }
        }
    });
}
function g(e) {
    var i;
    let n = e.item.originalItem,
        a = o.useCallback(() => {
            var e;
            return (0, _.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, C.J0y.IS_CLIP)
                ? (0, t.jsxs)(r.DY, {
                      text: h.intl.string(h.t['/fgfWl']),
                      className: v.clipPill,
                      children: [
                          (0, t.jsx)(l.ClipsIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, t.jsx)(c.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: h.intl.string(h.t.oA4afH)
                          })
                      ]
                  })
                : null;
        }, [n]),
        s = f.Z.toURLSafe(n.proxy_url);
    return null == s
        ? null
        : (s.searchParams.append('format', 'webp'),
          (0, I.lV)({
              ...e,
              alt: n.description,
              poster: s.toString(),
              fileSize: n.size,
              fileName: (0, p.Z)(n),
              src: n.url,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholder_version,
              srcIsAnimated: (0, _.yE)(null !== (i = n.flags) && void 0 !== i ? i : 0, C.J0y.IS_ANIMATED),
              renderOverlayContent: a,
              sourceMetadata: {
                  message: e.message,
                  identifier: {
                      type: 'attachment',
                      attachmentId: n.id
                  }
              }
          }));
}
function E(e) {
    let i = e.item.originalItem;
    return (0, I.hX)({
        ...e,
        fileSize: i.size,
        fileName: (0, p.Z)(i),
        src: i.url
    });
}
function B(e) {
    let { message: i, item: n } = e,
        t = n.originalItem,
        a = o.useCallback(
            (e, n, o) => {
                var a;
                (0, d.tb)(i.id, null !== (a = t.duration_secs) && void 0 !== a ? a : null, n, i.author.id);
            },
            [i, t.duration_secs]
        ),
        c = o.useCallback(
            (e, n) => {
                var o;
                (0, d.EW)(i.id, null !== (o = t.duration_secs) && void 0 !== o ? o : null, e, i.author.id, n);
            },
            [i, t.duration_secs]
        ),
        r = o.useCallback(
            (e) => {
                var n;
                (0, d.Np)(i.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null);
            },
            [i]
        );
    return (0, I.wj)({
        ...e,
        fileSize: t.size,
        fileName: (0, p.Z)(t),
        src: t.url,
        durationSecs: t.duration_secs,
        waveform: t.waveform,
        onPlay: a,
        onPause: c,
        onError: r
    });
}
function M(e) {
    let i = e.item.originalItem;
    return (0, I.xi)({
        ...e,
        url: i.url,
        fileName: (0, p.Z)(i),
        fileSize: i.size,
        contentType: i.content_type
    });
}
function b(e) {
    let i = e.item.originalItem;
    return (0, I.ur)({
        ...e,
        url: i.url,
        fileName: (0, p.Z)(i),
        fileSize: i.size
    });
}
function w(e) {
    if ('CLIP' === e.item.type)
        return (0, t.jsx)(x, {
            attachment: e.item.originalItem,
            message: e.message
        });
    return null;
}
function x(e) {
    var i;
    let { attachment: n, message: o } = e,
        c = o.channel_id,
        r = (0, a.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getBasicChannel(c)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: l, clip_participants: d, title: m, application: _ } = n;
    return (0, t.jsx)(s.Z, {
        createdAt: null != l ? Date.parse(l) : void 0,
        participantIds:
            null !==
                (i =
                    null == d
                        ? void 0
                        : d.map((e) => {
                              let { id: i } = e;
                              return i;
                          })) && void 0 !== i
                ? i
                : [],
        applicationId: null == _ ? void 0 : _.id,
        title: m,
        guildId: r
    });
}
