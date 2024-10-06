t.d(n, {
    O: function () {
        return _;
    }
}),
    t(47120),
    t(789020);
var i = t(735250),
    o = t(470079),
    l = t(120356),
    s = t.n(l),
    a = t(892814),
    r = t(481060),
    u = t(399654),
    d = t(162609),
    m = t(370298),
    c = t(95398),
    h = t(167080),
    I = t(163268),
    x = t(25610),
    g = t(947849),
    p = t(124347),
    C = t(976853),
    f = t(592125),
    M = t(626135),
    T = t(630388),
    j = t(956664),
    v = t(169525),
    E = t(499376),
    y = t(217702),
    N = t(981631),
    w = t(689938),
    O = t(526675),
    A = t(275703);
function _(e, n) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, E.aw)(e, n),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type
    };
}
let L = (e) => {
    let n,
        t,
        l,
        { mimeType: a, downloadURL: u, onRemoveItem: d, showDownload: c, showImageAppPicker: I, isVisualMediaType: x, channelId: g } = e;
    c &&
        (n = (0, i.jsx)(r.Tooltip, {
            text: w.Z.Messages.DOWNLOAD,
            children: (e) =>
                (0, i.jsx)(h.Z, {
                    ...e,
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    className: A.hoverButton,
                    iconClassName: O.downloadHoverButtonIcon,
                    focusProps: { offset: 2 },
                    href: u,
                    mimeType: a
                })
        })),
        null != d &&
            (t = (0, i.jsx)(r.Tooltip, {
                text: w.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
                children: (e) =>
                    (0, i.jsx)(r.Clickable, {
                        ...e,
                        className: s()(A.hoverButton, O.removeMosaicItemHoverButton),
                        focusProps: { offset: 2 },
                        onClick: d,
                        'aria-label': w.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                        children: (0, i.jsx)(r.TrashIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    })
            }));
    let [p, C] = o.useState(!1),
        f = o.useCallback(() => C((e) => !e), []);
    return (I &&
        (l = (0, i.jsx)(m.Z, {
            toggleShowMenu: f,
            showMenu: p,
            channelId: g,
            className: s()(A.hoverButton, { [A.selected]: p }),
            imageUrl: u,
            mimeType: a
        })),
    null == t && null == n && null == l)
        ? null
        : (0, i.jsxs)('div', {
              className: s()(A.hoverButtonGroup, {
                  [A.nonMediaMosaicItem]: !x,
                  [A.forceShowHover]: p
              }),
              children: [l, n, t]
          });
};
function S(e) {
    var n;
    let { message: t, item: l, autoPlayGif: m, canRemoveItem: c, onRemoveItem: h, onClick: I, onContextMenu: x, onPlay: v, renderImageComponent: E, renderVideoComponent: A, renderAudioComponent: _, renderPlaintextFilePreview: S, renderGenericFileComponent: V, className: b, imgContainerClassName: F, imgClassName: P, focusable: k, hiddenSpoilers: D, mediaLayoutType: G, maxWidth: H, maxHeight: R, hasFooter: B, useFullWidth: W, isVisualMediaType: Z, onVideoControlsShow: U, onVideoControlsHide: X, isSearchResult: q } = e,
        { width: z, height: J, spoiler: Y, type: $, contentType: K } = l,
        [Q, ee] = o.useState(!1),
        [en, et] = o.useState(!1),
        ei = t.getChannelId(),
        eo = f.Z.getChannel(ei),
        el = (0, C.Z)(ei),
        es = d.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        ea = o.useMemo(() => (null != K && -1 !== K.indexOf('/') ? K.split('/') : ['unknown', 'unknown']), [K]),
        er = l.originalItem,
        eu = 'IMAGE' === $ && !p.uo.test(l.downloadUrl) && !(p.YG.test(l.downloadUrl) && (0, T.yE)(null !== (n = er.flags) && void 0 !== n ? n : 0, N.J0y.IS_ANIMATED)),
        ed = !1;
    if (Z) {
        (null == z || null == J) && (ed = !0);
        let e = (0, j.Dc)({
            width: null != z ? z : 0,
            height: null != J ? J : 0,
            maxWidth: y.mT,
            maxHeight: y.Jj
        });
        !W && (e * (null != z ? z : 0) < y.OF || e * (null != J ? J : 0) < y.OF) && (ed = !0);
    }
    let em = o.useCallback(() => {
            h(l);
        }, [l, h]),
        ec = o.useCallback(
            (e) => {
                if (eu && !ed && !0 !== q) {
                    if (e && !en) {
                        if ((et(!0), es)) {
                            var n;
                            (0, u.a)({
                                channelId: null !== (n = null == eo ? void 0 : eo.id) && void 0 !== n ? n : '',
                                location: a.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        M.default.track(N.rMx.IMAGE_HOVERED, {
                            guild_id: null == eo ? void 0 : eo.guild_id,
                            channel_id: null == eo ? void 0 : eo.id,
                            image_recommendations_shown: es
                        });
                    } else !e && en && et(!1);
                }
            },
            [en, eo, es, eu, ed, q]
        ),
        eh = o.useCallback(() => {
            if (G === y.hV.MOSAIC) {
                let e = (!el && ['VIDEO', 'CLIP', 'AUDIO'].includes($)) || 'OTHER' === $;
                return ed
                    ? null
                    : !Q &&
                          (0, i.jsx)(L, {
                              mimeType: ea,
                              downloadURL: l.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: eu && es && !0 !== q,
                              onRemoveItem: c ? em : void 0,
                              isVisualMediaType: Z,
                              channelId: ei
                          });
            }
            return (
                c &&
                (0, i.jsx)(r.Clickable, {
                    className: Y ? O.spoilerRemoveMosaicItemButton : O.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => h(l),
                    'aria-label': w.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                    children: (0, i.jsx)(r.XSmallIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [G, c, Y, $, Z, Q, l, ea, em, h, es, el, ei, eu, ed, q]);
    switch ($) {
        case 'IMAGE':
            return (0, i.jsx)(g.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(E, {
                        item: l,
                        message: t,
                        width: z,
                        height: J,
                        autoPlay: m && !D,
                        onClick: I,
                        onContextMenu: x,
                        shouldHideMediaOptions: el,
                        renderAccessory: e,
                        renderAdjacentContent: eh,
                        containerClassName: b,
                        className: F,
                        imageClassName: P,
                        shouldLink: k,
                        hiddenSpoilers: D,
                        responsive: !0,
                        mediaLayoutType: G,
                        maxWidth: H,
                        maxHeight: R,
                        useFullWidth: W,
                        onMouseEnter: () => ec(!0),
                        onMouseLeave: () => ec(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, i.jsx)(A, {
                item: l,
                message: t,
                width: z,
                height: J,
                onClick: I,
                onContextMenu: x,
                renderAdjacentContent: eh,
                naturalWidth: z,
                naturalHeight: J,
                className: s()(b, { [O.hasFooter]: B }),
                playable: k,
                responsive: !0,
                mediaLayoutType: G,
                maxWidth: H,
                maxHeight: R,
                useFullWidth: W,
                mimeType: ea,
                onControlsShow: U,
                onControlsHide: X,
                downloadable: !el,
                mediaPlayerClassName: B ? O.hasFooter : void 0
            });
        case 'AUDIO':
            return (0, i.jsx)(_, {
                item: l,
                message: t,
                className: b,
                playable: k,
                mimeType: ea,
                renderAdjacentContent: eh,
                onVolumeShow: () => ee(!0),
                onVolumeHide: () => ee(!1),
                onPlay: v
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, i.jsx)(S, {
                item: l,
                message: t,
                className: b,
                onClick: I,
                onContextMenu: x,
                renderAdjacentContent: eh
            });
        case 'OTHER':
            return (0, i.jsx)(V, {
                item: l,
                message: t,
                className: b,
                onClick: I,
                onContextMenu: x,
                renderAdjacentContent: eh
            });
        case 'INVALID':
            return null;
    }
}
n.Z = function (e) {
    var n;
    let { className: t, item: l, message: a, getObscureReason: r, useFullWidth: u, mediaLayoutType: d, isSingleMosaicItem: m, footer: h, ...g } = e,
        { width: p, height: C, type: f } = l,
        M = r(l, (0, x.V)(a.channel_id, a.author.id)),
        [T, N] = o.useState(null != M),
        w = d === y.hV.MOSAIC,
        A = !w && ((null != p && p < 200) || (null != C && C < 50));
    let _ = 'IMAGE' === (n = f) || 'VIDEO' === n,
        L = (0, E.R_)(f),
        V = m && null != M && (0, I.bR)(p, C),
        [b, F] = o.useState(!1),
        P = () => {
            F(!0);
        },
        k = () => {
            F(!1);
        },
        D = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(S, {
                ...g,
                item: l,
                message: a,
                getObscureReason: r,
                hiddenSpoilers: e,
                className: s()(t, O.mosaicItemContent, {
                    [O.obscured]: T && !A,
                    [O.hiddenSpoiler]: T && M === v.wk.SPOILER,
                    [O.hiddenExplicit]: T && null != M && [v.wk.EXPLICIT_CONTENT, v.wk.POTENTIAL_EXPLICIT_CONTENT].includes(M),
                    [O.hiddenMosaicItem]: T && e,
                    [O.inline]: T && A
                }),
                focusable: !e,
                mediaLayoutType: d,
                hasFooter: null != h,
                useFullWidth: !!V || u,
                isVisualMediaType: L,
                onVideoControlsShow: P,
                onVideoControlsHide: k
            });
        };
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(O.mosaicItem, {
                [O.mosaicItemNoJustify]: _,
                [O.mosaicItemFullWidth]: u,
                [O.mosaicItemMediaMosaic]: w,
                [O.hideOverflow]: w && L,
                [O.mosaicItemWithFooter]: null != h
            }),
            children: [
                null != M
                    ? (0, i.jsx)(c.Z, {
                          type: c.Z.Types.ATTACHMENT,
                          inline: A,
                          reason: M,
                          isSingleMosaicItem: m,
                          obscured: T,
                          containerStyles: (function (e, n, t) {
                              if (!n) return;
                              let i = e.width;
                              if (void 0 !== e.width && void 0 !== e.height) {
                                  let { width: n } = (0, j.Tj)({
                                      width: e.width,
                                      height: e.height,
                                      maxWidth: 400,
                                      maxHeight: 300
                                  });
                                  i = n;
                              }
                              return {
                                  ...(t !== y.hV.MOSAIC && { maxWidth: null != i ? i : '400px' }),
                                  width: '100%',
                                  height: '100%',
                                  justifySelf: 'auto'
                              };
                          })(l, _, d),
                          obscurityControlClassName: s()({ [O.obscureVideoSpacing]: 'VIDEO' === f && m && !T && b }),
                          onToggleObscurity: () => N((e) => !e),
                          children: (e) => D(e)
                      })
                    : D(),
                h
            ]
        })
    });
};
