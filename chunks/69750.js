t.d(n, {
    Ld: function () {
        return N;
    },
    OB: function () {
        return E;
    },
    R_: function () {
        return v;
    },
    aw: function () {
        return O;
    },
    pU: function () {
        return w;
    }
}), t(789020), t(47120);
var i = t(735250), s = t(470079), o = t(120356), l = t.n(o), r = t(481060), a = t(163268), u = t(25610), d = t(976853), m = t(406432), c = t(169525), h = t(65838), I = t(196050), x = t(68588), p = t(941797), C = t(630388), g = t(956664), f = t(768760), j = t(981631), T = t(689938), y = t(574870);
let M = /\.(mp3|m4a|ogg|wav|flac)$/i, v = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e, N = e => 'IMAGE' === e || 'VIDEO' === e;
function E(e, n) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: O(e, n),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type
    };
}
function O(e, n) {
    let {
        filename: t,
        width: i,
        height: s
    } = e;
    if (n && null != i && i > 0 && null != s && s > 0) {
        if ((0, m.CO)(t))
            return 'IMAGE';
        if (!(0, m.NU)(t) || null == e.proxy_url)
            return 'INVALID';
        else {
            var o;
            return (0, C.yE)(null !== (o = e.flags) && void 0 !== o ? o : 0, j.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
        }
    }
    if (null != n && M.test(t) && null != e.url)
        return 'AUDIO';
    if (null != e.url && (0, h.O)(t))
        return 'PLAINTEXT_PREVIEW';
    return 'OTHER';
}
function w(e, n) {
    let {
        contentType: t,
        width: i,
        height: s
    } = e;
    if (n && i > 0 && s > 0)
        return (0, m.tw)(t) ? 'IMAGE' : (0, m.X2)(t) ? 'VIDEO' : 'INVALID';
    return 'OTHER';
}
let A = e => {
    let n, t, {
            downloadURL: s,
            downloadMimeType: o,
            onRemoveItem: a,
            isVisualMediaType: u
        } = e;
    return (null != s && null != o && (n = (0, i.jsx)(r.Tooltip, {
        text: T.Z.Messages.DOWNLOAD,
        children: e => (0, i.jsx)(I.Z, {
            ...e,
            target: '_blank',
            rel: 'noreferrer noopener',
            className: y.hoverButton,
            iconClassName: y.downloadHoverButtonIcon,
            focusProps: { offset: 2 },
            href: s,
            mimeType: o
        })
    })), null != a && (t = (0, i.jsx)(r.Tooltip, {
        text: T.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
        children: e => (0, i.jsx)(r.Clickable, {
            ...e,
            className: l()(y.hoverButton, y.removeMosaicItemHoverButton),
            focusProps: { offset: 2 },
            onClick: a,
            'aria-label': T.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
            children: (0, i.jsx)(r.TrashIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20
            })
        })
    })), null == t && null == n) ? null : (0, i.jsxs)('div', {
        className: l()(y.hoverButtonGroup, { [y.nonMediaMosaicItem]: !u }),
        children: [
            n,
            t
        ]
    });
};
function L(e) {
    let {
            message: n,
            item: t,
            autoPlayGif: o,
            canRemoveItem: a,
            onRemoveItem: u,
            onClick: m,
            onContextMenu: c,
            onPlay: h,
            renderImageComponent: I,
            renderVideoComponent: x,
            renderAudioComponent: C,
            renderPlaintextFilePreview: j,
            renderGenericFileComponent: M,
            className: v,
            imgContainerClassName: N,
            imgClassName: E,
            focusable: O,
            hiddenSpoilers: w,
            mediaLayoutType: L,
            maxWidth: V,
            maxHeight: S,
            hasFooter: F,
            useFullWidth: P,
            isVisualMediaType: _,
            onVideoControlsShow: H,
            onVideoControlsHide: D
        } = e, {
            width: B,
            height: G,
            spoiler: b,
            type: k,
            contentType: W
        } = t, [R, Z] = s.useState(!1), U = (0, d.Z)(n.getChannelId()), q = s.useMemo(() => null != W && -1 !== W.indexOf('/') ? W.split('/') : [
            'unknown',
            'unknown'
        ], [W]), z = s.useCallback(() => {
            u(t);
        }, [
            t,
            u
        ]), X = s.useCallback(() => {
            if (L === f.hV.MOSAIC) {
                let e = !U && [
                    'VIDEO',
                    'CLIP',
                    'AUDIO'
                ].includes(k) || 'OTHER' === k;
                if (_) {
                    if (null == B || null == G)
                        return null;
                    let e = (0, g.Dc)({
                        width: B,
                        height: G,
                        maxWidth: f.mT,
                        maxHeight: f.Jj
                    });
                    if (!P && (e * B < f.OF || e * G < f.OF))
                        return null;
                }
                return !R && (0, i.jsx)(A, {
                    downloadURL: e ? t.downloadUrl : void 0,
                    downloadMimeType: e ? q : void 0,
                    onRemoveItem: a ? z : void 0,
                    isVisualMediaType: _
                });
            }
            return a && (0, i.jsx)(r.Clickable, {
                className: b ? y.spoilerRemoveMosaicItemButton : y.removeMosaicItemButton,
                focusProps: { offset: { bottom: 4 } },
                onClick: () => u(t),
                'aria-label': T.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                children: (0, i.jsx)(r.CloseSmallIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            });
        }, [
            L,
            a,
            b,
            k,
            _,
            R,
            t,
            q,
            z,
            B,
            G,
            P,
            u,
            U
        ]);
    switch (k) {
    case 'IMAGE':
        return (0, i.jsx)(p.h.Consumer, {
            children: e => (0, i.jsx)(I, {
                item: t,
                message: n,
                width: B,
                height: G,
                autoPlay: o && !w,
                onClick: m,
                onContextMenu: c,
                shouldHideMediaOptions: U,
                renderAccessory: e,
                renderAdjacentContent: X,
                containerClassName: v,
                className: N,
                imageClassName: E,
                shouldLink: O,
                hiddenSpoilers: w,
                responsive: !0,
                mediaLayoutType: L,
                maxWidth: V,
                maxHeight: S,
                useFullWidth: P
            })
        });
    case 'VIDEO':
    case 'CLIP':
        return (0, i.jsx)(x, {
            item: t,
            message: n,
            width: B,
            height: G,
            onClick: m,
            onContextMenu: c,
            renderAdjacentContent: X,
            naturalWidth: B,
            naturalHeight: G,
            className: l()(v, { [y.hasFooter]: F }),
            playable: O,
            responsive: !0,
            mediaLayoutType: L,
            maxWidth: V,
            maxHeight: S,
            useFullWidth: P,
            mimeType: q,
            onControlsShow: H,
            onControlsHide: D,
            downloadable: !U,
            mediaPlayerClassName: F ? y.hasFooter : void 0
        });
    case 'AUDIO':
        return (0, i.jsx)(C, {
            item: t,
            message: n,
            className: v,
            playable: O,
            mimeType: q,
            renderAdjacentContent: X,
            onVolumeShow: () => Z(!0),
            onVolumeHide: () => Z(!1),
            onPlay: h
        });
    case 'PLAINTEXT_PREVIEW':
        return (0, i.jsx)(j, {
            item: t,
            message: n,
            className: v,
            onClick: m,
            onContextMenu: c,
            renderAdjacentContent: X
        });
    case 'OTHER':
        return (0, i.jsx)(M, {
            item: t,
            message: n,
            className: v,
            onClick: m,
            onContextMenu: c,
            renderAdjacentContent: X
        });
    case 'INVALID':
        return null;
    }
}
n.ZP = function (e) {
    var n;
    let {
            className: t,
            item: o,
            message: r,
            getObscureReason: d,
            useFullWidth: m,
            mediaLayoutType: h,
            isSingleMosaicItem: I,
            footer: p,
            ...C
        } = e, {
            width: j,
            height: T,
            type: M
        } = o, N = d(o, (0, u.V)(r.channel_id, r.author.id)), [E, O] = s.useState(null != N), w = h === f.hV.MOSAIC, A = !w && (null != j && j < 200 || null != T && T < 50);
    let V = 'IMAGE' === (n = M) || 'VIDEO' === n, S = v(M), F = I && null != N && (0, a.bR)(j, T), [P, _] = s.useState(!1), H = () => {
            _(!0);
        }, D = () => {
            _(!1);
        }, B = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(L, {
                ...C,
                item: o,
                message: r,
                getObscureReason: d,
                hiddenSpoilers: e,
                className: l()(t, y.mosaicItemContent, {
                    [y.obscured]: E && !A,
                    [y.hiddenSpoiler]: E && N === c.wk.SPOILER,
                    [y.hiddenExplicit]: E && null != N && [
                        c.wk.EXPLICIT_CONTENT,
                        c.wk.POTENTIAL_EXPLICIT_CONTENT
                    ].includes(N),
                    [y.hiddenMosaicItem]: E && e,
                    [y.inline]: E && A
                }),
                focusable: !e,
                mediaLayoutType: h,
                hasFooter: null != p,
                useFullWidth: !!F || m,
                isVisualMediaType: S,
                onVideoControlsShow: H,
                onVideoControlsHide: D
            });
        };
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: l()(y.mosaicItem, {
                [y.mosaicItemNoJustify]: V,
                [y.mosaicItemFullWidth]: m,
                [y.mosaicItemMediaMosaic]: w,
                [y.hideOverflow]: w && S,
                [y.mosaicItemWithFooter]: null != p
            }),
            children: [
                null != N ? (0, i.jsx)(x.Z, {
                    type: x.Z.Types.ATTACHMENT,
                    inline: A,
                    reason: N,
                    isSingleMosaicItem: I,
                    obscured: E,
                    containerStyles: function (e, n, t) {
                        if (!n)
                            return;
                        let i = e.width;
                        if (void 0 !== e.width && void 0 !== e.height) {
                            let {width: n} = (0, g.Tj)({
                                width: e.width,
                                height: e.height,
                                maxWidth: 400,
                                maxHeight: 300
                            });
                            i = n;
                        }
                        return {
                            ...t !== f.hV.MOSAIC && { maxWidth: null != i ? i : '400px' },
                            width: '100%',
                            height: '100%',
                            justifySelf: 'auto'
                        };
                    }(o, V, h),
                    obscurityControlClassName: l()({ [y.obscureVideoSpacing]: 'VIDEO' === M && I && !E && P }),
                    onToggleObscurity: () => O(e => !e),
                    children: e => B(e)
                }) : B(),
                p
            ]
        })
    });
};
