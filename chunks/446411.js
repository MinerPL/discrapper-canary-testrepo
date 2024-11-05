t.d(l, {
    BC: function () {
        return O;
    },
    ZP: function () {
        return G;
    }
}),
    t(47120),
    t(653041);
var n,
    i = t(200651),
    r = t(192379),
    a = t(120356),
    s = t.n(a),
    o = t(892814),
    d = t(481060),
    u = t(399654),
    m = t(370298),
    h = t(95398),
    c = t(947849),
    p = t(768494),
    b = t(624195),
    g = t(44824),
    v = t(124347),
    f = t(283756),
    x = t(169525),
    I = t(94396),
    _ = t(785992),
    y = t(400266),
    w = t(592125),
    C = t(52824),
    E = t(626135),
    T = t(585483),
    S = t(55935),
    N = t(408433),
    M = t(956664),
    j = t(468846),
    A = t(401419),
    k = t(249458),
    H = t(981631),
    F = t(217702),
    L = t(388032),
    V = t(269625),
    B = t(275703),
    R = t(554034),
    P = t(287847);
function W(e, l, t) {
    return (
        l in e
            ? Object.defineProperty(e, l, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[l] = t),
        e
    );
}
function O(e) {
    var l, t;
    let { className: n, iframeWrapperClassName: a, maxWidth: o, maxHeight: d, thumbnail: u, video: m, provider: h, allowFullScreen: c = !0, responsive: p = !1, renderImageComponent: b, renderVideoComponent: g, renderLinkComponent: v, playable: x = !0, autoPlay: I = !1, autoMute: _, volume: y, onPlay: w, onPause: E, onEnded: S, onControlsHide: N, onControlsShow: A, onVolumeChange: k, onMute: F, href: L, placeholder: B, placeholderVersion: R, sourceMetadata: P } = e,
        [W, O] = r.useState(I),
        D = null != m && null == m.proxyURL,
        G = r.useCallback(() => O(!1), [O]),
        Z = (e) => {
            e.preventDefault(), e.stopPropagation(), null == w || w(!1), O(!0), D && (T.S.dispatch(H.CkL.VIDEO_EMBED_PLAYBACK_STARTED), T.S.subscribeOnce(H.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G));
        };
    r.useEffect(
        () => () => {
            D && T.S.unsubscribe(H.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G);
        },
        [D, G]
    );
    let { width: U, height: q } = u;
    null != m && ((U = m.width), (q = m.height));
    let z = (0, M.Tj)({
        width: U,
        height: q,
        maxWidth: o,
        maxHeight: d
    });
    (U = Math.max(z.width, 150)), (q = Math.max(z.height, 144));
    let X = (0, C.q)(u);
    if (null != m && null != m.proxyURL)
        return (0, i.jsx)('div', {
            className: s()(V.embedVideo, n),
            children: g({
                poster: X,
                src: m.proxyURL,
                placeholder: B,
                placeholderVersion: R,
                width: U,
                height: q,
                responsive: p,
                autoPlay: I,
                onEnded: S,
                naturalWidth: m.width,
                naturalHeight: m.height,
                onVolumeChange: k,
                playable: x,
                autoMute: _,
                volume: y,
                onPlay: w,
                onPause: E,
                onMute: F,
                onControlsHide: N,
                onControlsShow: A,
                sourceMetadata: P
            })
        });
    if (W && null != m) {
        let e;
        let l = !0 === _ || ('function' == typeof _ && _()),
            t = {
                width: U,
                height: q
            },
            r = {
                width: U,
                height: q
            };
        if (p) {
            let l = 0 !== U ? q / U : 1;
            (t = {
                maxWidth: o,
                maxHeight: d,
                width: void 0,
                height: void 0
            }),
                (r = {
                    paddingBottom: ''.concat(100 * l, '%'),
                    maxWidth: U
                }),
                (e = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    maxWidth: U,
                    maxHeight: q
                });
        }
        return (0, i.jsx)('div', {
            className: n,
            style: t,
            children: (0, i.jsx)('div', {
                className: s()(V.embedVideo, a),
                style: r,
                children: (0, i.jsx)(j.ZP, {
                    provider: h,
                    src: m.url,
                    style: e,
                    width: U,
                    height: q,
                    allowFullScreen: c,
                    autoMute: l
                })
            })
        });
    }
    return (0, i.jsxs)('div', {
        className: s()(V.embedVideo, n),
        style: p
            ? { maxWidth: U }
            : {
                  width: U,
                  height: q
              },
        children: [
            b({
                src: X,
                width: U,
                height: q,
                maxWidth: U,
                maxHeight: q,
                responsive: p,
                containerClassName: V.embedVideoImageComponent,
                imageClassName: V.embedVideoImageComponentInner,
                placeholder: B,
                placeholderVersion: R,
                onClick: x && null != m ? Z : null,
                sourceMetadata: P
            }),
            (0, i.jsx)('div', {
                className: V.embedVideoActions,
                children: (0, i.jsx)('div', {
                    className: V.centerContent,
                    children: x
                        ? (0, i.jsx)(f.Z, {
                              onPlay: null != m ? Z : null,
                              externalURL: L,
                              renderLinkComponent: v,
                              messageId: null == P ? void 0 : null === (l = P.message) || void 0 === l ? void 0 : l.id,
                              channelId: null == P ? void 0 : null === (t = P.message) || void 0 === t ? void 0 : t.channel_id
                          })
                        : null
                })
            })
        ]
    });
}
function D(e) {
    let { className: l, href: t, autoPlay: n, maxWidth: r, maxHeight: a, thumbnail: o, video: d, renderImageComponent: u, responsive: m, alt: h, disableAltTextDisplay: c = !1, playable: p = !0, hiddenSpoilers: b, placeholder: v, placeholderVersion: f, sourceMetadata: x } = e;
    return (0, i.jsx)(g.Z, {
        className: s()(V.embedVideo, l),
        original: t,
        poster: (0, C.q)(o),
        src: (0, C.q)(d),
        alt: h,
        width: o.width,
        height: o.height,
        naturalHeight: d.height,
        naturalWidth: d.width,
        maxWidth: r,
        maxHeight: a,
        responsive: m,
        autoPlay: n,
        playable: p,
        renderImageComponent: u,
        hiddenSpoilers: b,
        disableAltTextDisplay: c,
        placeholder: v,
        placeholderVersion: f,
        sourceMetadata: x
    });
}
class G extends (n = r.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: l },
                renderLinkComponent: t,
                message: n
            } = this.props;
        return null == l
            ? null
            : (0, i.jsx)('div', {
                  className: s()(V.embedProvider, V.embedMargin),
                  children:
                      null != l.url
                          ? t({
                                className: V.embedLink,
                                href: l.url,
                                tabIndex: e ? 0 : -1,
                                children: l.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == n ? void 0 : n.id,
                                channelId: null == n ? void 0 : n.channel_id
                            })
                          : (0, i.jsx)('span', { children: l.name })
              });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: l },
                renderLinkComponent: t,
                message: n
            } = this.props;
        return null == l
            ? null
            : (0, i.jsxs)('div', {
                  className: s()(V.embedAuthor, V.embedMargin),
                  children: [
                      null != l.iconProxyURL
                          ? (0, i.jsx)('img', {
                                alt: '',
                                className: V.embedAuthorIcon,
                                src: l.iconProxyURL
                            })
                          : null,
                      null != l.url
                          ? t({
                                className: V.embedAuthorNameLink,
                                href: l.url,
                                tabIndex: e ? 0 : -1,
                                children: l.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == n ? void 0 : n.id,
                                channelId: null == n ? void 0 : n.channel_id
                            })
                          : (0, i.jsx)('span', {
                                className: V.embedAuthorName,
                                children: l.name
                            })
                  ]
              });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: n, message: r } = this.props,
            { rawTitle: a, url: o } = l;
        return null == a
            ? null
            : (0, i.jsx)('div', {
                  className: s()(V.embedTitle, V.embedMargin),
                  children:
                      null != o
                          ? t({
                                className: V.embedTitleLink,
                                href: o,
                                tabIndex: e ? 0 : -1,
                                children: n(l, a),
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == r ? void 0 : r.id,
                                channelId: null == r ? void 0 : r.channel_id
                            })
                          : n(l, a)
              });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, i.jsx)('div', {
                  className: s()(V.embedDescription, V.embedMargin),
                  children: l(e, t, !1)
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: l },
                maxThumbnailWidth: t,
                maxThumbnailHeight: n,
                renderImageComponent: r,
                autoPlayGif: a
            } = this.props,
            { sourceMetadata: s } = this.state;
        return null == l
            ? null
            : (0, i.jsx)(k.G.Consumer, {
                  children: (i) => {
                      let { disableAnimations: o } = i;
                      return r({
                          containerClassName: V.embedThumbnail,
                          src: (0, C.q)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
                          maxHeight: n,
                          shouldLink: e,
                          autoPlay: a && !o,
                          sourceMetadata: s
                      });
                  }
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: l } = e;
        if (null == l || 0 === l.length) return null;
        let t = [],
            n = null;
        return (
            l.forEach((l) => {
                let { rawName: i, rawValue: r, inline: a } = l;
                !a && null != n && (t.push(n), (n = null)), null == n && (n = []), n.push([this.props.renderTitle(e, i), this.props.renderDescription(e, r, !0)]), (3 === n.length || !a) && (t.push(n), (n = null));
            }),
            null != n && t.push(n),
            (0, i.jsx)('div', {
                className: V.embedFields,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, n) => {
                        let [r, a] = e;
                        return (0, i.jsxs)(
                            'div',
                            {
                                className: V.embedField,
                                style: {
                                    gridColumn: (function (e, l) {
                                        let t = 12 / l,
                                            n = e * t;
                                        return ''.concat(n + 1, ' / ').concat(n + t + 1);
                                    })(n, t)
                                },
                                children: [
                                    (0, i.jsx)('div', {
                                        className: V.embedFieldName,
                                        children: r
                                    }),
                                    (0, i.jsx)('div', {
                                        className: V.embedFieldValue,
                                        children: a
                                    })
                                ]
                            },
                            ''.concat(l, '-').concat(n)
                        );
                    });
                })
            })
        );
    }
    renderImages() {
        let { hiddenSpoiler: e = !1, isVisible: l = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: t } = this.props,
            { maxMediaHeight: n } = this.state;
        if (null == t.images) return null;
        let [r, a, s, o] = t.images.map((n) =>
            this.renderImage({
                hiddenSpoiler: e,
                isVisible: l,
                image: n,
                isGalleryImage: !0,
                allImages: t.images
            })
        );
        return null == r && null == a && null == s && null == o
            ? null
            : (0, i.jsxs)('div', {
                  className: V.embedGalleryImagesWrapper,
                  style: { height: n },
                  children: [
                      (0, i.jsxs)('div', {
                          className: V.embedGallerySide,
                          children: [r, null != o && s]
                      }),
                      (0, i.jsxs)('div', {
                          className: V.embedGallerySide,
                          children: [a, null == o && null != s && s, null != o && o]
                      })
                  ]
              });
    }
    renderImageHoverButtons(e) {
        let { mimeType: l, downloadURL: t, isVisualMediaType: n, channelId: r } = e;
        return (0, i.jsx)('div', {
            className: s()(B.hoverButtonGroup, {
                [B.nonMediaMosaicItem]: !n,
                [B.forceShowHover]: this.state.showImageAppMenu
            }),
            children: (0, i.jsx)(m.Z, {
                toggleShowMenu: () => {
                    this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
                },
                showMenu: this.state.showImageAppMenu,
                channelId: r,
                className: s()(B.hoverButton, { [B.selected]: this.state.showImageAppMenu }),
                imageUrl: t,
                mimeType: l
            })
        });
    }
    handleImageHover(e, l, t) {
        if (t) {
            if (e && !this.state.isImageHovered) {
                var n, i;
                this.setState({ isImageHovered: !0 });
                let e = w.Z.getChannel(null === (n = this.props.message) || void 0 === n ? void 0 : n.channel_id);
                this.props.showImageRecs &&
                    (0, u.a)({
                        channelId: null !== (i = null == e ? void 0 : e.id) && void 0 !== i ? i : '',
                        location: o.I.CONTEXTUAL_IMAGE,
                        withCommands: !0
                    }),
                    E.default.track(H.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs
                    });
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
        }
    }
    renderImage() {
        var e, l, t, n;
        let { hiddenSpoiler: r = !1, isVisible: a = !0, image: o, isGalleryImage: d = !1, alt: u = L.intl.string(L.t.X4IxWF), allImages: m = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: h, className: b, autoPlayGif: g } = this.props,
            { maxMediaWidth: f, maxMediaHeight: x, sourceMetadata: _ } = this.state;
        if (null == o) return null;
        let y = (0, C.q)(o),
            w =
                null == m
                    ? {}
                    : (0, I._)(
                          m.map((e) => ({
                              ...(0, p.Hv)(e, _, 'IMAGE'),
                              original: e.url,
                              srcIsAnimated: e.srcIsAnimated
                          }))
                      ),
            E = v.ZP.isAnimated({
                src: (0, C.q)(o),
                original: o.url,
                animated: !1
            }),
            T = {
                containerClassName: s()(b, {
                    [V.embedMedia]: !d,
                    [V.embedImage]: !d,
                    [V.galleryImage]: d
                }),
                imageContainerClassName: d ? V.galleryImageContainer : void 0,
                imageClassName: d ? V.embedGalleryImageElement : void 0,
                src: (0, C.q)(o),
                alt: u,
                responsive: !0,
                limitResponsiveWidth: !d,
                width: o.width,
                height: o.height,
                maxWidth: f,
                maxHeight: x,
                original: o.url,
                shouldLink: a,
                disableAltTextDisplay: !0,
                hiddenSpoilers: r,
                placeholder: o.placeholder,
                placeholderVersion: o.placeholderVersion,
                srcIsAnimated: o.srcIsAnimated
            };
        y in w && (T.onClick = w[y]);
        let S = null !== (n = null === (e = o.url.split('.').pop()) || void 0 === e ? void 0 : e.split('?')[0]) && void 0 !== n ? n : '';
        'jpg' === S && (S = 'jpeg');
        let N = null != o && !v.uo.test(null == o ? void 0 : o.url) && !(o.srcIsAnimated && v.YG.test(null == o ? void 0 : o.url)),
            M =
                !0 !== this.props.isSearchResult &&
                a &&
                (null === (l = this.props.message) || void 0 === l ? void 0 : l.channel_id) != null &&
                (null === (t = this.props.message) || void 0 === t ? void 0 : t.channel_id) !== void 0 &&
                N &&
                !(function (e) {
                    return null != e && (e.width <= F.OF || e.height <= F.OF);
                })(o) &&
                null != S;
        return (0, i.jsx)(c.h.Consumer, {
            children: (e) =>
                (0, i.jsx)(
                    k.G.Consumer,
                    {
                        children: (l) => {
                            let { disableAnimations: t } = l;
                            return h({
                                ...T,
                                autoPlay: g && !t && !r,
                                renderAccessory: E ? e : null,
                                onMouseEnter: () => this.handleImageHover(!0, o, M),
                                onMouseLeave: () => this.handleImageHover(!1, o, M),
                                renderAdjacentContent: () => {
                                    var e, l;
                                    return !0 === this.props.showImageRecs && M
                                        ? this.renderImageHoverButtons({
                                              mimeType: ['image', S],
                                              downloadURL: null !== (l = o.proxyURL) && void 0 !== l ? l : o.url,
                                              isVisualMediaType: null != o,
                                              channelId: null === (e = this.props.message) || void 0 === e ? void 0 : e.channel_id
                                          })
                                        : null;
                                },
                                sourceMetadata: _
                            });
                        }
                    },
                    o.url
                )
        });
    }
    renderVideo() {
        let { gifv: e = !1, isVisible: l = !0, hiddenSpoiler: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: n, thumbnail: r, video: a, provider: s },
                renderVideoComponent: o,
                renderImageComponent: d,
                renderLinkComponent: u,
                allowFullScreen: m,
                autoPlayGif: h,
                obscureReason: c
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: b, sourceMetadata: g } = this.state;
        if (null == n || null == r) return null;
        if (e)
            return null == a
                ? null
                : (0, i.jsx)(k.G.Consumer, {
                      children: (e) => {
                          let { disableAnimations: s } = e;
                          return (0, i.jsx)(D, {
                              className: V.embedMedia,
                              href: n,
                              thumbnail: r,
                              video: a,
                              maxWidth: p,
                              maxHeight: b,
                              responsive: !0,
                              autoPlay: !t && h && !s && l,
                              renderImageComponent: d,
                              playable: l,
                              hiddenSpoilers: t,
                              disableAltTextDisplay: null != c,
                              placeholder: a.placeholder,
                              placeholderVersion: a.placeholderVersion,
                              sourceMetadata: g
                          });
                      }
                  });
        return (0, i.jsx)(O, {
            className: V.embedMedia,
            href: n,
            allowFullScreen: m,
            thumbnail: r,
            video: a,
            provider: null == s ? void 0 : s.name,
            maxWidth: p,
            maxHeight: b,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: o,
            renderLinkComponent: u,
            onControlsShow: () => {
                this.setState({ videoControlsShown: !0 });
            },
            onControlsHide: () => {
                this.setState({ videoControlsShown: !1 });
            },
            playable: l && !t,
            placeholder: null == a ? void 0 : a.placeholder,
            placeholderVersion: null == a ? void 0 : a.placeholderVersion,
            sourceMetadata: g
        });
    }
    renderFooter() {
        let { footer: e, timestamp: l } = this.props.embed;
        if (null != e) {
            let t = null != e.iconProxyURL && '' !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
            return (0, i.jsxs)('div', {
                className: s()(V.embedFooter, V.embedMargin),
                children: [
                    null != t
                        ? (0, i.jsx)('img', {
                              alt: '',
                              className: V.embedFooterIcon,
                              src: t
                          })
                        : null,
                    (0, i.jsxs)('span', {
                        className: V.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != l
                                ? (0, i.jsx)('span', {
                                      className: V.embedFooterSeparator,
                                      children: '\u2022'
                                  })
                                : null,
                            null != l ? (0, S.Y4)(l) : null
                        ]
                    })
                ]
            });
        }
        if (null != l)
            return (0, i.jsx)('div', {
                className: s()(V.embedFooter, V.embedMargin),
                children: (0, i.jsx)('span', {
                    className: V.embedFooterText,
                    children: (0, S.Y4)(l)
                })
            });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
        switch (l.type) {
            case H.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: t
                });
            case H.hBH.VIDEO:
            default:
                if (null != l.video)
                    return this.renderVideo({
                        gifv: !1,
                        hiddenSpoiler: e,
                        isVisible: t
                    });
                if (null != l.images)
                    return this.renderImages({
                        hiddenSpoiler: e,
                        isVisible: t
                    });
                return this.renderImage({
                    hiddenSpoiler: e,
                    isVisible: t,
                    image: l.image,
                    alt: l.rawTitle
                });
        }
    }
    renderAll() {
        let e, l;
        let { embed: t, hideMedia: n } = this.props,
            { isVisible: i } = this.state,
            r = this.renderProvider(i),
            a = this.renderAuthor(i),
            s = this.renderTitle(i);
        switch (t.type) {
            case H.hBH.IMAGE:
            case H.hBH.VIDEO:
            case H.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        !n && (l = this.renderMedia(!i));
        let d = this.renderFooter(),
            u = null == l;
        return (
            t.type === H.hBH.RICH && (u = null == t.video),
            {
                provider: r,
                author: a,
                title: s,
                description: e,
                thumbnail: !n && u ? this.renderThumbnail(i) : null,
                fields: o,
                media: l,
                footer: d
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: l, images: t, video: n, type: i, thumbnail: r }
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: s } = this.state,
            o = null != l ? l : n;
        if (null == o) return;
        let { width: d } = (0, M.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: a,
            maxHeight: s
        });
        if (!e && (i === H.hBH.VIDEO || d >= 300)) return d + 32;
        if (i === H.hBH.RICH && void 0 !== t) return 520;
        if (i === H.hBH.GIFV) {
            var u, m, h, c;
            let { width: e } = (0, M.Tj)({
                width: null !== (m = null !== (u = null == n ? void 0 : n.width) && void 0 !== u ? u : null == r ? void 0 : r.width) && void 0 !== m ? m : 0,
                height: null !== (c = null !== (h = null == n ? void 0 : n.height) && void 0 !== h ? h : null == r ? void 0 : r.height) && void 0 !== c ? c : 0,
                maxWidth: a,
                maxHeight: s
            });
            return e;
        }
    }
    isInline() {
        let { hideMedia: e, embed: l } = this.props;
        return !e && (0, N.dY)(l);
    }
    renderSuppressButton(e) {
        return (0, i.jsx)(d.Clickable, {
            focusProps: { offset: { bottom: 4 } },
            className: V.embedSuppressButton,
            onClick: e,
            'aria-label': L.intl.string(L.t.GT3fNz),
            children: (0, i.jsx)(d.XSmallIcon, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return e.type === H.hBH.IMAGE || e.type === H.hBH.VIDEO || e.type === H.hBH.GIFV || ((e.type === H.hBH.RICH || e.type === H.hBH.ARTICLE) && (null != e.video || null != e.image));
    }
    getEmbedColor(e) {
        let { color: l } = this.props.embed;
        return (null != l && '#ffffff' === l.toLowerCase()) || e ? void 0 : l;
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: l, images: t, video: n, type: i }
            } = this.props,
            { maxMediaWidth: r, maxMediaHeight: a } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let s = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === s && void 0 === t && i !== H.hBH.RICH) {
            let e = null != l ? l : n;
            if (void 0 !== e) {
                let { width: l } = (0, M.Tj)({
                    width: e.width,
                    height: e.height,
                    maxWidth: r,
                    maxHeight: a
                });
                s = l;
            }
        }
        return {
            maxWidth: void 0 === s ? 'max-content' : s,
            justifySelf: 'auto'
        };
    }
    render() {
        var e;
        let { embed: l, obscureReason: t, className: n } = this.props;
        return null != l.provider && A.j.includes(l.provider.name)
            ? (0, i.jsx)(A.Z, {
                  embed: l,
                  className: n
              })
            : (0, _.Z)(l)
              ? (0, i.jsx)(y.Z, {
                    embed: l,
                    className: n
                })
              : (null === (e = l.provider) || void 0 === e ? void 0 : e.name) === 'Amazon Music' && l.type === H.hBH.RICH
                ? (0, i.jsx)(b.Z, {
                      embed: l,
                      className: n
                  })
                : this.isInline()
                  ? null != t
                      ? (0, i.jsx)(h.Z, {
                            type: h.Z.Types.ATTACHMENT,
                            reason: t,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!0),
                            obscurityControlClassName: s()({ [V.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
                            children: this.renderInlineMediaEmbed
                        })
                      : this.renderInlineMediaEmbed()
                  : null != t
                    ? (0, i.jsx)(h.Z, {
                          type: h.Z.Types.EMBED,
                          onReveal: this.onReveal,
                          onToggleObscurity: this.onToggleObscurity,
                          reason: t,
                          isSingleMosaicItem: !0,
                          containerStyles: this.getSpoilerStyles(!1),
                          children: this.renderEmbedContent
                      })
                    : this.renderEmbedContent();
    }
    constructor(...e) {
        var l;
        super(...e),
            (l = this),
            W(this, 'state', {
                isVisible: null == this.props.obscureReason,
                videoControlsShown: !1,
                isImageHovered: !1,
                showImageAppMenu: !1,
                sourceMetadata: {
                    message: this.props.message,
                    identifier: {
                        type: 'embed',
                        embedIndex: this.props.embedIndex
                    }
                },
                ...(0, N.vP)(this.props.embed)
            }),
            W(this, 'onReveal', () => {
                this.setState({ isVisible: !0 });
            }),
            W(this, 'onToggleObscurity', () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            W(this, 'renderInlineMediaEmbed', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: t, className: n } = l.props,
                    r = l.getMaxWidth(!0);
                return (0, i.jsx)('div', {
                    'aria-hidden': e,
                    className: s()(V.inlineMediaEmbed, n, {
                        [V.spoilerAttachment]: t === x.wk.SPOILER,
                        [V.hiddenExplicitAttachment]: null != t && [x.wk.EXPLICIT_CONTENT, x.wk.POTENTIAL_EXPLICIT_CONTENT].includes(t),
                        [V.isHidden]: e,
                        [V.justifyAuto]: l.usesJustifiedAutoStyle(),
                        [P.embedFlexGrow]: null != r
                    }),
                    style: { maxWidth: r },
                    children: l.renderMedia(e)
                });
            }),
            W(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: t, onSuppressEmbed: n, obscureReason: r } = l.props,
                    { provider: a, author: o, title: d, description: u, fields: m, thumbnail: h, media: c, footer: p } = l.renderAll();
                return (0, i.jsx)('article', {
                    className: s()(t, P.embedFlexGrow, V.embedFull, R.markup, {
                        [V.isHidden]: e,
                        [V.spoilerEmbed]: r === x.wk.SPOILER,
                        [V.hiddenExplicitEmbed]: null != r && [x.wk.EXPLICIT_CONTENT, x.wk.POTENTIAL_EXPLICIT_CONTENT].includes(r),
                        [V.justifyAuto]: l.usesJustifiedAutoStyle()
                    }),
                    'aria-hidden': e,
                    style: {
                        borderColor: l.getEmbedColor(e),
                        maxWidth: l.getMaxWidth(!1)
                    },
                    children: (0, i.jsx)('div', {
                        className: V.gridContainer,
                        children: (0, i.jsxs)('div', {
                            className: s()({
                                [V.grid]: !0,
                                [V.hasThumbnail]: null != h
                            }),
                            children: [null != n ? l.renderSuppressButton(n) : null, a, o, d, u, m, c, h, p]
                        })
                    })
                });
            });
    }
}
W(G, 'defaultProps', {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0
});
