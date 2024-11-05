n(47120);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(683860),
    o = n(442837),
    c = n(692547),
    d = n(481060),
    u = n(738619),
    m = n(841762),
    h = n(25610),
    g = n(406432),
    x = n(169525),
    f = n(255269),
    p = n(930282),
    C = n(524444),
    v = n(695346),
    b = n(433355),
    j = n(592125),
    _ = n(496675),
    I = n(456269),
    T = n(109590),
    N = n(368844),
    S = n(73315),
    w = n(404616),
    y = n(510060),
    E = n(983200),
    R = n(196255),
    P = n(858543),
    M = n(482062),
    k = n(883728),
    Z = n(710352),
    A = n(981631),
    L = n(388032),
    F = n(127403);
function O(e) {
    let { id: t, channel: n, goToThread: r, overrideMedia: u, className: m, coords: h, gridCoords: g, gridSectionBoundaries: x, observePostVisibilityAnalytics: p } = e,
        C = (0, o.e7)([j.Z], () => j.Z.getChannel(n.parent_id)),
        S = n.id,
        E = i.useRef(null),
        O = (0, o.e7)([b.ZP], () => b.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: z, loaded: H } = (0, T.cl)(n),
        { firstMedia: U } = (0, I.mX)({
            firstMessage: z,
            formatInline: !1,
            noStyleAndInteraction: !1
        }),
        { messageCountText: G } = (0, I.nP)(n),
        { isNew: W, hasUnreads: q } = (0, I.J$)(n),
        K = i.useRef(null),
        { handleLeftClick: X, handleRightClick: J } = (0, k.Z)({
            facepileRef: K,
            goToThread: r,
            channel: n
        });
    i.useEffect(() => {
        null == p || p(E.current, S);
    }, [p, S]);
    let Y = (0, o.e7)([_.Z], () => _.Z.can(A.Plq.MANAGE_MESSAGES, n)),
        Q = v.QK.useSetting(),
        $ = v.cC.useSetting(),
        ee = (0, f.Z)($, Y),
        et = (0, N.aU)(z, C, !1),
        [en, ea] = (0, y.rI)(h.width - 2 * y.LT),
        ei = (0, I.xw)(n, s.z.CREATION_DATE, Z.R6.POSTED_DURATION_AGO),
        er = (0, w.NN)(n),
        el = (null == z ? void 0 : z.blocked) || null == (null != u ? u : U),
        { onFocus: es, ...eo } = (0, M.nX)({
            id: t,
            row: g.row,
            column: g.column,
            section: g.section,
            boundaries: x
        }),
        ec = n.isMediaPost();
    return (0, a.jsxs)('li', {
        ref: E,
        onClick: X,
        onFocus: es,
        onContextMenu: J,
        className: l()(F.container, m, { [F.isOpen]: O }),
        style: { ...h },
        children: [
            (0, a.jsx)(d.Clickable, {
                onClick: X,
                focusProps: { ringTarget: E },
                onContextMenu: J,
                'aria-label': L.intl.formatToPlainString(L.t.pgYN6e, {
                    title: n.name,
                    count: G
                }),
                className: F.focusTarget,
                ...eo
            }),
            (0, a.jsxs)('div', {
                className: F.header,
                children: [
                    (0, a.jsxs)('div', {
                        className: F.authorRow,
                        children: [
                            (0, a.jsxs)('div', {
                                className: F.rowGroup,
                                children: [
                                    (0, a.jsx)(R.Z, {
                                        channel: n,
                                        message: z
                                    }),
                                    (0, a.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: F.postCreationTimestamp,
                                        children: ei
                                    })
                                ]
                            }),
                            W
                                ? (0, a.jsx)(d.TextBadge, {
                                      className: l()(F.newBadge),
                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                      text: L.intl.string(L.t.y2b7CA)
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(d.HeadingLevel, {
                        children: (0, a.jsx)(d.Heading, {
                            variant: 'heading-md/extrabold',
                            className: F.title,
                            color: q ? 'header-primary' : 'text-muted',
                            style: { width: ''.concat(h.width - 2 * y.I8, 'px') },
                            children: er
                        })
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: F.postBody,
                children: (0, a.jsx)(d.FocusBlock, {
                    children: el
                        ? (0, a.jsx)(V, {
                              channel: n,
                              firstMessage: z,
                              isFirstMessageLoaded: H,
                              containerWidth: h.width,
                              hasUnreads: q
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(D, {
                                      mediaAttachments: et,
                                      globalSpoilerRenderSetting: ee,
                                      containerWidth: en,
                                      containerHeight: ec ? (9 / 16) * en : ea,
                                      canAutoPlay: Q,
                                      shouldMaintainAspectRatio: ec
                                  }),
                                  (0, a.jsx)('div', {
                                      className: F.tagsRow,
                                      children: (0, a.jsx)(P.ZP, {
                                          channel: n,
                                          tagsClassName: F.tagPill
                                      })
                                  })
                              ]
                          })
                })
            }),
            (0, a.jsx)('div', {
                className: F.footer,
                children: (0, a.jsx)(d.FocusBlock, {
                    children: (0, a.jsx)(B, {
                        channel: n,
                        firstMessage: z,
                        facepileRef: K
                    })
                })
            })
        ]
    });
}
function B(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        r = (0, I.Q)(t),
        l = (null == i ? void 0 : i.reactions) != null && i.reactions.length > 0;
    return (0, a.jsxs)('div', {
        className: F.forumPostControls,
        children: [
            (0, a.jsxs)('div', {
                className: F.controlsGroup,
                children: [
                    (0, a.jsx)('div', {
                        className: F.messageCountContainer,
                        children: (0, a.jsx)(w.m9, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0
                        })
                    }),
                    r.length > 0
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)('span', {
                                      className: F.bullet,
                                      children: '\u2022'
                                  }),
                                  (0, a.jsxs)('div', {
                                      className: F.typing,
                                      children: [
                                          (0, a.jsx)(w.og, {
                                              channel: t,
                                              userIds: r,
                                              facepileRef: n
                                          }),
                                          (0, a.jsx)('div', {
                                              className: F.dots,
                                              children: (0, a.jsx)(d.Dots, {
                                                  themed: !0,
                                                  dotRadius: 2
                                              })
                                          }),
                                          (0, a.jsx)(u.Z, {
                                              channel: t,
                                              className: F.typingUsers,
                                              renderDots: !1
                                          })
                                      ]
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: F.controlsGroup,
                children: [
                    l || null == i
                        ? null
                        : (0, a.jsx)(w.kZ, {
                              firstMessage: i,
                              channel: t
                          }),
                    null == i
                        ? null
                        : (0, a.jsx)(w.au, {
                              firstMessage: i,
                              channel: t
                          })
                ]
            })
        ]
    });
}
t.Z = i.memo(function (e) {
    let { id: t, threadId: n, goToThread: i, overrideMedia: r, className: l, coords: s, gridCoords: c, gridSectionBoundaries: d, observePostVisibilityAnalytics: u } = e,
        m = (0, o.e7)([j.Z], () => j.Z.getChannel(n));
    return null == m
        ? null
        : (0, a.jsx)(O, {
              id: t,
              channel: m,
              goToThread: i,
              overrideMedia: r,
              className: l,
              coords: s,
              gridCoords: c,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d
          });
});
let z = (e) => e.preventDefault(),
    H = i.memo(function (e) {
        return (0, a.jsx)(a.Fragment, { children: (0, C.Yi)(e) });
    }),
    D = i.memo(function (e) {
        let { mediaAttachments: t, globalSpoilerRenderSetting: n, containerWidth: r, containerHeight: s, canAutoPlay: o, shouldMaintainAspectRatio: c = !1 } = e,
            { containsVideo: u, containsGif: f } = i.useMemo(() => (0, N.cp)(t), [t]),
            p = i.useMemo(() => t.slice(E.$x, E.GV), [t]),
            C = (0, E.tu)({
                numAttachments: p.length,
                containerWidth: r,
                containerHeight: s
            }),
            v = (0, E.S$)({
                imageContainerStyles: C,
                containerWidth: r,
                containerHeight: s
            }),
            b = (0, h.m)(),
            j = i.useMemo(
                () =>
                    p.map((e, t) => {
                        var i;
                        let [r, s] = (0, x.As)(e, !n, b),
                            h = (0, x.MC)(s),
                            p = {
                                ...v[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && r ? h : e.alt,
                                onClick: z,
                                shouldRenderAccessory: !f && !u
                            },
                            j = (0, g.d$)(e.src) ? ''.concat(e.src, '?format=png') : e.src,
                            _ = o && !r ? e.src : j;
                        return (0, a.jsxs)(
                            'div',
                            {
                                className: F.bodyMediaFrame,
                                style: C[t],
                                children: [
                                    c
                                        ? (0, a.jsx)(m.Z, {
                                              ...p,
                                              src: _,
                                              backgroundSrc: j,
                                              aspectRatio: p.maxWidth / p.maxHeight,
                                              alt: null !== (i = p.alt) && void 0 !== i ? i : '',
                                              className: l()(F.mediaPostContainer, { [F.obscured]: r }),
                                              imageChildClassName: F.mediaPostThumbnail
                                          })
                                        : e.src.startsWith('data:')
                                          ? (0, a.jsx)(d.Image, {
                                                ...p,
                                                className: F.mediaContainer,
                                                imageClassName: l()(F.thumbnailOverride, { [F.obscured]: r })
                                            })
                                          : (0, a.jsx)(H, {
                                                ...p,
                                                autoPlay: o && !r,
                                                containerClassName: F.mosaicMediaContainer,
                                                imageClassName: l()(F.imageCover, { [F.obscured]: r }),
                                                responsive: !0
                                            }),
                                    r &&
                                        (0, a.jsx)('div', {
                                            className: F.obscuredTagContainer,
                                            children: (0, a.jsx)(S.Z, {
                                                obscureReason: s,
                                                iconClassname: F.obscuredTag
                                            })
                                        })
                                ]
                            },
                            e.src
                        );
                    }),
                [o, f, u, n, C, v, p, c, b]
            );
        return (0, a.jsxs)('div', {
            className: F.bodyMedia,
            style: {
                width: r,
                height: s
            },
            children: [
                (0, a.jsx)(a.Fragment, { children: j }),
                (f || u) &&
                    (0, a.jsxs)('div', {
                        className: F.mediaIconsRow,
                        children: [
                            u &&
                                (0, a.jsx)(d.PlayIcon, {
                                    color: 'currentColor',
                                    size: 'custom',
                                    width: 22,
                                    height: 22,
                                    className: F.mediaIcon
                                }),
                            f &&
                                (0, a.jsx)(d.GifIcon, {
                                    size: 'custom',
                                    width: 29,
                                    height: 29,
                                    color: 'currentColor',
                                    className: F.mediaIcon
                                })
                        ]
                    }),
                t.length > E.Vn &&
                    (0, a.jsx)(U, {
                        text: (t.length - E.Vn).toString(),
                        icon: d.ImageIcon,
                        pillClassName: F.moreImagesPill,
                        iconClassName: F.moreImagesPillIcon,
                        textClassName: F.moreImagesPillText
                    })
            ]
        });
    });
function U(e) {
    let { text: t, icon: n, pillClassName: i, iconClassName: r, textClassName: l } = e;
    return (0, a.jsxs)('div', {
        className: i,
        children: [
            (0, a.jsx)(n, {
                className: r,
                color: 'currentColor'
            }),
            (0, a.jsxs)(d.Text, {
                variant: 'text-xs/medium',
                className: l,
                children: ['+', t]
            })
        ]
    });
}
function V(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: r, containerWidth: s, hasUnreads: o } = e,
        [c, u] = (0, y.rI)(s - 2 * y.LT),
        { content: m } = (0, I.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0
        }),
        { shouldRenderTagsRow: h } = (0, P.DM)({
            channel: t,
            isNew: !1
        }),
        g = i.useMemo(
            () => ({
                width: c,
                height: u
            }),
            [c, u]
        ),
        x = o ? F.textContentUnread : F.textContentRead;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: F.contentPreview,
            style: g,
            children: [
                (0, a.jsxs)('div', {
                    className: F.content,
                    children: [
                        r &&
                            null == n &&
                            (0, a.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: o ? 'header-secondary' : 'text-muted',
                                children: L.intl.string(L.t.mE3KJC)
                            }),
                        r &&
                            null != n &&
                            (0, a.jsx)(p.ZP, {
                                message: n,
                                content: m,
                                className: x
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: l()(F.textContentFooter, { [F.noTags]: !h }),
                    children: h
                        ? (0, a.jsx)(P.ZP, {
                              channel: t,
                              tagsClassName: F.tagPill,
                              className: F.__invalid_row
                          })
                        : null
                })
            ]
        })
    });
}
