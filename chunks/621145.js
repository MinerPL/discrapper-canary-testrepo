t.d(i, {
    Z: function () {
        return P;
    }
}),
    t(47120),
    t(773603);
var n = t(200651),
    a = t(192379),
    l = t(392711),
    o = t(442837),
    s = t(481060),
    r = t(640108),
    c = t(406432),
    d = t(169525),
    m = t(786761),
    u = t(499376),
    h = t(3148),
    p = t(492593),
    x = t(219797),
    f = t(524444),
    g = t(884182),
    v = t(25015),
    j = t(963550),
    C = t(845080),
    _ = t(594174),
    N = t(956664),
    A = t(709054),
    E = t(236289),
    y = t(788080),
    T = t(800530),
    I = t(981631),
    S = t(217702),
    w = t(530124);
let k = (e, i, t, n) => {
        let a = e.attachments.map((e) => {
            var t, n, a, l;
            let o = {
                ...e,
                filename: (0, y.eS)(e),
                size: 0,
                proxy_url: e.url
            };
            if (!((0, c.CO)(e.filename) || (0, c.NU)(e.filename))) return o;
            return {
                ...o,
                width: null !== (a = null === (t = i[e.id]) || void 0 === t ? void 0 : t.width) && void 0 !== a ? a : T.Sv,
                height: null !== (l = null === (n = i[e.id]) || void 0 === n ? void 0 : n.height) && void 0 !== l ? l : T.EY
            };
        });
        return (0, m.e5)({
            ...(0, h.ZP)({
                author:
                    null != t
                        ? t
                        : {
                              id: '',
                              avatar: void 0,
                              discriminator: '0000',
                              username: n
                          },
                nonce: e.id,
                content: e.content,
                type: I.uaV.DEFAULT,
                channelId: I.lds
            }),
            timestamp: new Date(A.default.extractTimestamp(e.id)).toISOString(),
            attachments: a,
            state: I.yb.SENT
        });
    },
    L = (e) => {
        let { message: i } = e,
            { attachments: t } = i;
        if (0 === t.length) return null;
        let a = (e, i, t) => {
                let a = T.Sv,
                    o = T.EY;
                if (null != i.width && null != i.height) {
                    let e = (0, N.Dc)({
                        width: i.width,
                        height: i.height,
                        maxWidth: T.Sv,
                        maxHeight: T.EY
                    });
                    (a = (0, l.clamp)(Math.round(i.width * e), 0, T.Sv)), (o = (0, l.clamp)(Math.round(i.height * e), 0, T.EY));
                }
                return (0, n.jsx)('div', {
                    style: {
                        width: t ? a : '100%',
                        height: t ? o : '100%'
                    },
                    children: (0, n.jsx)(r.ZP, {
                        className: e.className,
                        forceExternal: !1,
                        src: i.url,
                        width: t ? a : '100%',
                        height: t ? o : '100%',
                        responsive: !0,
                        volume: e.volume,
                        autoPlay: !1,
                        autoMute: !1,
                        type: r.ZP.Types.VIDEO,
                        mediaLayoutType: e.mediaLayoutType,
                        fileName: i.filename,
                        fileSize: null == i.size ? void 0 : i.size.toString(),
                        playable: !0,
                        renderLinkComponent: f.iT,
                        onClick: e.onClick,
                        onPlay: e.onPlay,
                        onEnded: e.onEnded,
                        onVolumeChange: e.onVolumeChange,
                        onMute: e.onMute,
                        downloadable: !1
                    })
                });
            },
            o = 1 === t.length;
        function s(e, i) {
            return (0, d.dn)(e.originalItem, i);
        }
        return (0, n.jsx)('div', {
            className: w.classificationEvidenceMessageAttachment,
            children: (0, n.jsx)(g.Z, {
                items: t.map((e) => ({
                    item: {
                        uniqueId: e.id,
                        originalItem: e,
                        type: (0, u.aw)(e, !0),
                        downloadUrl: e.proxy_url,
                        height: e.height,
                        width: e.width,
                        spoiler: e.spoiler,
                        contentType: e.content_type
                    },
                    message: i,
                    mediaLayoutType: S.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: o,
                    onRemoveItem: l.noop,
                    renderVideoComponent: (i) => a(i, e, o),
                    renderImageComponent: (e) =>
                        (0, n.jsx)(x.dS, {
                            ...e,
                            hiddenSpoilers: !0,
                            shouldHideMediaOptions: !0,
                            shouldLink: !1
                        }),
                    renderAudioComponent: x.q7,
                    renderPlaintextFilePreview: x.d4,
                    renderGenericFileComponent: x.ZK,
                    renderMosaicItemFooter: x.L9,
                    getObscureReason: s,
                    gifFavoriteButton: () => null
                }))
            })
        });
    };
function P(e) {
    var i;
    let { flaggedContent: t } = e,
        l = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        [r, d] = a.useState({}),
        [m, u] = a.useState(!0),
        h = (0, o.e7)([E.Z], () => E.Z.getUsername()),
        x = t[0],
        f = k(x, r, l, h),
        g = (0, v.Z)(f, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1
        });
    return (a.useEffect(() => {
        Promise.all(
            x.attachments
                .filter((e) => {
                    let { filename: i } = e;
                    return (0, c.CO)(i) || (0, c.NU)(i);
                })
                .map((e) => {
                    var i;
                    return ((i = e),
                    new Promise((e, t) => {
                        if ((0, c.CO)(i.filename)) {
                            let n = new Image();
                            (n.src = i.url),
                                (n.onload = () => {
                                    e(n);
                                }),
                                (n.onerror = () => {
                                    t();
                                });
                        } else if ((0, c.NU)(i.filename)) {
                            let n = document.createElement('video');
                            (n.src = i.url),
                                (n.onloadedmetadata = () => {
                                    let i = n.videoWidth;
                                    e({
                                        width: i,
                                        height: n.videoHeight
                                    });
                                }),
                                (n.onerror = () => {
                                    t();
                                });
                        } else
                            e({
                                width: 0,
                                height: 0
                            });
                    })).then((i) =>
                        d((t) => ({
                            ...t,
                            [e.id]: i
                        }))
                    );
                })
        ).finally(() => u(!1));
    }, [x.attachments]),
    '' === f.content && 0 === f.attachments.length)
        ? null
        : (0, n.jsx)('div', {
              className: w.classificationEvidenceCard,
              children: m
                  ? (0, n.jsx)(s.Spinner, {})
                  : (0, n.jsx)(p.Z, {
                        compact: !1,
                        childrenHeader: (0, C.Z)({
                            author: {
                                ...l,
                                colorString: '',
                                nick: null !== (i = null == l ? void 0 : l.username) && void 0 !== i ? i : h
                            },
                            message: f,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1
                        }),
                        childrenAccessories: (0, n.jsx)(L, { message: f }),
                        childrenMessageContent: (0, j.Z)({ message: f }, g.content),
                        hasThread: !1,
                        hasReply: !1
                    })
          });
}
