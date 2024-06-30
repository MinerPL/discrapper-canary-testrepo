n(411104), n(724458), n(653041), n(733860), n(47120), n(789020);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(442837), o = n(846519), c = n(780384), d = n(481060), u = n(570140), _ = n(659429), E = n(496929), h = n(558381), I = n(410575), m = n(224336), p = n(730749), g = n(666743), T = n(115130), S = n(812206), C = n(252618), N = n(100159), f = n(646288), A = n(984370), Z = n(706454), L = n(210887), v = n(430824), O = n(496675), R = n(525395), x = n(558314), P = n(580130), b = n(55563), M = n(551428), D = n(695103), y = n(451478), j = n(378720), U = n(285952), G = n(760397), w = n(626135), k = n(572004), B = n(630388), H = n(937615), V = n(73346), F = n(3570), Y = n(689796), W = n(15470), z = n(506648), K = n(449275), q = n(445986), Q = n(119520), X = n(450233), J = n(726581), $ = n(74153), ee = n(125930), et = n(178071), en = n(176055), ei = n(843445), es = n(981631), ea = n(186901), er = n(689938), el = n(91060);
function eo(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class ec extends s.PureComponent {
    get isChannelType() {
        return null != this.props.channel;
    }
    componentDidMount() {
        let {
            sku: e,
            storeListing: t,
            isFetchingEntitlements: n,
            shouldFetchStatistics: i,
            didFetchEntitlements: s,
            location: a,
            fetchStoreListing: r
        } = this.props;
        if (null != a.state) {
            let {
                analyticsSource: e,
                analyticsProperties: t
            } = a.state;
            this._analyticsSource = e, this._extraAnalyticsProperties = t;
        } else
            this._analyticsSource = es.SaU;
        (null == t || t.isSlimDirectoryVersion()) && r(), null != e && (!n && !s && (0, E.yD)(e.applicationId), i && u.Z.wait(() => (0, _.$)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug();
    }
    componentDidUpdate(e) {
        let {
            locale: t,
            sku: n,
            shouldFetchStatistics: i,
            skuId: s,
            storeListingId: a,
            slug: r,
            storeListing: l,
            fetchStoreListing: o
        } = this.props;
        if (l !== e.storeListing && null != l && (0, F.s)(ea.jE.STORE_LISTING, {
                skuId: s,
                slug: r
            }), (t !== e.locale || s !== e.skuId) && o(), i && !e.shouldFetchStatistics) {
            if (null == n)
                throw Error('Unexpected missing sku');
            u.Z.wait(() => (0, _.$)(n.applicationId));
        }
        (s !== e.skuId || a !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug();
    }
    componentWillUnmount() {
        this.showCopyLinkTextTimeout.stop();
        let {
            analyticsContext: {
                loadId: e,
                loadDate: t
            }
        } = this.props;
        null != t && w.default.track(es.rMx.STORE_LISTING_EXITED, {
            load_id: e,
            duration_ms: Date.now() - t
        });
    }
    replaceUrlWithSlug() {
    }
    trackViewed() {
        let {
            sku: e,
            storeListing: t,
            hasFetchedNews: n,
            analyticsContext: i
        } = this.props;
        if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || n))
            return;
        let s = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
            images: 0,
            videos: 0
        });
        w.default.track(es.rMx.STORE_LISTING_VIEWED, {
            ...this._extraAnalyticsProperties,
            load_id: i.loadId,
            has_description: null != t.description && t.description.length > 0,
            has_staff_review: null != t.staffNotes,
            carousel_image_count: s.images,
            carousel_video_count: s.videos,
            location: i.location.page,
            source: this._analyticsSource,
            ...(0, N.Z)(e, !0)
        }), this._trackedViewed = !0;
    }
    renderHeader(e, t) {
        let {
            channel: n,
            isAuthenticated: a
        } = this.props;
        return (0, i.jsx)(A.Z, {
            isAuthenticated: a,
            toolbar: this.renderHeaderToolbar(e, t),
            children: null != n ? (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(A.Z.Icon, {
                        icon: d.TagIcon,
                        'aria-label': er.Z.Messages.STORE_CHANNEL
                    }),
                    (0, i.jsx)(A.Z.Title, { children: n.name })
                ]
            }) : null != t && t.premium ? (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(A.Z.Icon, {
                        icon: d.NitroWheelIcon,
                        'aria-label': er.Z.Messages.PREMIUM
                    }),
                    (0, i.jsx)($.Z, { sku: t })
                ]
            }) : null != t ? (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(A.Z.Icon, {
                        icon: d.TagIcon,
                        'aria-label': er.Z.Messages.STORE_CHANNEL
                    }),
                    (0, i.jsx)(A.Z.Title, { children: t.name })
                ]
            }) : null
        });
    }
    parseMediaItems(e, t, n) {
        let {
            assetId: i,
            youtubeVideoId: s
        } = t;
        if (null != i) {
            let t = n.find(e => e.id === i);
            if (null != t) {
                let {
                    width: n,
                    height: i
                } = t;
                if (null == n || null == i)
                    throw Error('ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined');
                return t.mimeType.startsWith('video/') ? {
                    type: es.s9s.VIDEO,
                    thumbnailSrc: (0, V._W)(e.id, t, 1024, 'webp'),
                    src: (0, V._W)(e.id, t),
                    height: i,
                    width: n
                } : {
                    type: es.s9s.IMG,
                    src: (0, V._W)(e.id, t, 1024),
                    height: i,
                    width: n
                };
            }
        }
        if (null != s)
            return {
                type: es.s9s.YOUTUBE_VIDEO,
                youtubeVideoId: s
            };
        throw Error('Store carousel item must have one of assetId or youtubeVideoId');
    }
    renderHeaderAssets(e, t, n) {
        let {theme: s} = this.props, a = t.headerBackground, r = (0, c.ap)(s) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
        return null == a || null == r ? (0, i.jsx)('div', { className: el.noHeaderSpacer }) : (0, i.jsxs)('div', {
            className: el.headerAssets,
            children: [
                (0, i.jsx)('div', {
                    className: el.headerBackground,
                    style: { backgroundImage: 'url('.concat((0, V._W)(e.id, a, 1024, 'png'), ')') }
                }),
                (0, i.jsx)('img', {
                    className: el.headerLogo,
                    src: (0, V._W)(e.id, r, 1024, 'png'),
                    alt: n.name
                })
            ]
        });
    }
    renderWhyYouMightLikeThis(e, t) {
        return (0, i.jsx)(J.Z, {
            sku: e,
            storeListing: t,
            className: el.whyYouMightLikeIt
        });
    }
    renderVerifiedGuildInvite(e, t) {
        if (null == e.guild)
            return null;
        let {
            channel: n,
            pageSize: s
        } = this.props;
        return (0, i.jsx)(en.Z, {
            skuId: t.id,
            guild: e.guild,
            className: el.guildInvite,
            inChannel: null != n,
            pageSize: s
        });
    }
    renderFeatures(e) {
        return (0, i.jsx)(z.Z, { sku: e });
    }
    renderSystemRequirements(e) {
        return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length ? null : (0, i.jsx)(ee.Z, {
            className: el.systemRequirements,
            systemRequirements: e.systemRequirements,
            pageSize: this.props.pageSize
        });
    }
    renderDescription(e, t, n) {
        let {description: a} = t;
        if (null == a)
            throw Error('Rendering ApplicationStoreListing without description');
        return (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(j.Z, {
                    tag: 'h1',
                    children: er.Z.Messages.APPLICATION_STORE_ABOUT_HEADER.format({ name: n.name })
                }),
                (0, i.jsx)(m.Z, {}),
                (0, i.jsx)(W.Z, {
                    applicationId: e.id,
                    blurb: t.summary,
                    description: a,
                    className: el.description,
                    assets: t.assets
                })
            ]
        });
    }
    renderApplicationContentRating(e) {
        return (0, i.jsx)(Y.Z, {
            sku: e,
            className: el.contentRating
        });
    }
    renderApplicationLegalInfo(e) {
        return (0, i.jsx)(K.Z, {
            sku: e,
            className: el.legalInfo
        });
    }
    renderJsonLD() {
        let {
            sku: e,
            storeListing: t,
            application: n
        } = this.props;
        if (null == e || null == t || null == n)
            return null;
        let s = [], a = n.getSplashURL(1024);
        null != a && s.push(a), null != t.headerLogoLightTheme && s.unshift((0, V._W)(n.id, t.headerLogoLightTheme, 1024, 'jpg'));
        let r = G.Z.Product({
                name: e.name,
                description: null != e.summary && '' !== e.summary ? e.summary : t.tagline,
                image: G.Z.Product.Image(s),
                sku: e.id
            }), l = e.getPrice();
        if (null != l) {
            let {
                amount: e,
                currency: t
            } = l;
            r.offers = G.Z.Offer({
                priceCurrency: t.toUpperCase(),
                price: (0, H.T4)(e, t, { style: 'decimal' })
            });
        }
        let o = G.Z.ItemPage({ mainEntity: r });
        return (0, i.jsx)(G.Z, { data: o });
    }
    renderSmall(e, t, n) {
        return (0, i.jsxs)('div', {
            className: r()(el.listing, el.listingSmall),
            children: [
                this.renderHeaderAssets(e, t, n),
                this.renderCarousel(e, t),
                this.renderWhyYouMightLikeThis(n, t),
                this.renderDescription(e, t, n),
                this.renderVerifiedGuildInvite(t, n),
                this.renderFeatures(n),
                this.renderSystemRequirements(n),
                this.renderApplicationContentRating(n),
                this.renderApplicationLegalInfo(n)
            ]
        });
    }
    renderLarge(e, t, n) {
        return (0, i.jsxs)('div', {
            className: el.listing,
            children: [
                this.renderHeaderAssets(e, t, n),
                this.renderCarousel(e, t),
                (0, i.jsx)('div', {
                    className: el.listingLarge,
                    children: (0, i.jsxs)('div', {
                        className: el.body,
                        children: [
                            (0, i.jsxs)('div', {
                                className: el.leftColumn,
                                children: [
                                    this.renderWhyYouMightLikeThis(n, t),
                                    this.renderDescription(e, t, n),
                                    this.renderSystemRequirements(n),
                                    this.renderApplicationContentRating(n),
                                    this.renderApplicationLegalInfo(n)
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: el.rightColumn,
                                children: [
                                    this.renderVerifiedGuildInvite(t, n),
                                    this.renderFeatures(n)
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
    render() {
        let {
            application: e,
            sku: t,
            storeListing: n,
            matureAgree: a,
            isAuthenticated: r
        } = this.props;
        if (null == e || null == t || null == n || n.isSlimDirectoryVersion())
            return (0, i.jsxs)(s.Fragment, {
                children: [
                    this.renderHeader(e, t),
                    (0, i.jsx)(U.Z, {
                        align: U.Z.Align.CENTER,
                        justify: U.Z.Justify.CENTER,
                        children: (0, i.jsx)(d.Spinner, { className: el.spinner })
                    })
                ]
            });
        if (!a && t.showAgeGate) {
            let n = r ? null : (0, i.jsx)('div', {
                className: el.gatedListing,
                children: this.renderListing()
            });
            return (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(C.yY, { location: e.name }),
                    this.renderJsonLD(),
                    this.renderHeader(e, t),
                    (0, i.jsx)(Q.Z, { game: e }),
                    n
                ]
            });
        }
        return r ? (0, i.jsxs)('div', {
            className: el.listingWrapper,
            children: [
                (0, i.jsx)(C.yY, { location: e.name }),
                this.renderJsonLD(),
                (0, i.jsx)(I.Z, {
                    section: es.jXE.NAVIGATION,
                    children: this.renderHeader(e, t)
                }),
                (0, i.jsx)(I.Z, {
                    section: es.jXE.BODY,
                    children: this.renderListing()
                })
            ]
        }) : (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(C.yY, { location: e.name }),
                this.renderJsonLD(),
                this.renderHeader(e, t),
                this.renderListing()
            ]
        });
    }
    constructor(...e) {
        super(...e), eo(this, 'showCopyLinkTextTimeout', new o.V7()), eo(this, '_trackedViewed', !1), eo(this, '_analyticsSource', null), eo(this, '_extraAnalyticsProperties', null), eo(this, 'state', {
            showHeaderPurchaseUnit: !1,
            showLinkCopied: !1
        }), eo(this, 'trackCarouselScroll', (e, t, n) => {
            let {sku: i} = this.props;
            null != i && w.default.track(es.rMx.STORE_LISTING_MEDIA_SCROLLED, {
                ...(0, N.Z)(i),
                card_index: n,
                card_type: e.type === es.s9s.IMG ? 'image' : 'video'
            });
        }), eo(this, 'copyCurrentUrl', () => {
            var e;
            let {location: t} = this.props;
            (0, k.JG)((e = t.pathname, ''.concat(location.protocol, '//').concat(location.host).concat(e))), this.setState({ showLinkCopied: !0 }, () => {
                this.showCopyLinkTextTimeout.start(1500, () => {
                    this.setState({ showLinkCopied: !1 });
                });
            });
        }), eo(this, 'handleCreateInstantInvite', () => {
            let {
                channel: e,
                guild: t
            } = this.props;
            null != e && null != t && (0, d.openModalLazy)(async () => {
                let {default: s} = await Promise.all([
                    n.e('7654'),
                    n.e('30135')
                ]).then(n.bind(n, 560114));
                return n => (0, i.jsx)(s, {
                    ...n,
                    guild: t,
                    channel: e,
                    source: es.t4x.GUILD_CHANNELS
                });
            });
        }), eo(this, 'renderInviteLink', () => {
            let {
                channel: e,
                guild: t
            } = this.props;
            return null != e && null != t && (O.Z.can(es.Plq.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode) ? (0, i.jsx)(d.Button, {
                'aria-label': er.Z.Messages.CREATE_INSTANT_INVITE,
                look: d.Button.Looks.BLANK,
                size: d.Button.Sizes.NONE,
                onClick: this.handleCreateInstantInvite,
                className: el.link,
                children: (0, i.jsx)(d.LinkIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: el.linkIcon
                })
            }) : null;
        }), eo(this, 'renderCopyLink', () => {
            let {showLinkCopied: e} = this.state;
            return this.isChannelType ? this.renderInviteLink() : (0, i.jsx)(d.Tooltip, {
                text: e ? er.Z.Messages.APPLICATION_STORE_LINK_COPIED : null,
                position: 'left',
                forceOpen: e,
                children: t => {
                    let {
                        onMouseEnter: n,
                        onMouseLeave: s
                    } = t;
                    return (0, i.jsx)(d.Button, {
                        'aria-label': e ? er.Z.Messages.APPLICATION_STORE_LINK_COPIED : er.Z.Messages.COPY_LINK,
                        look: d.Button.Looks.BLANK,
                        size: d.Button.Sizes.NONE,
                        onClick: this.copyCurrentUrl,
                        onMouseEnter: n,
                        onMouseLeave: s,
                        className: el.link,
                        children: (0, i.jsx)(d.LinkIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: el.linkIcon
                        })
                    });
                }
            });
        }), eo(this, 'renderHeaderToolbar', (e, t) => {
            let {
                    isInTestMode: n,
                    slug: s,
                    storeListing: a,
                    analyticsContext: {location: l}
                } = this.props, {showHeaderPurchaseUnit: o} = this.state;
            return (0, i.jsxs)('div', {
                className: el.headerBarListing,
                children: [
                    (0, i.jsx)('div', {
                        className: el.headerSection,
                        children: n && null != t ? (0, i.jsx)(et.Z, {
                            size: et.y.Sizes.MIN,
                            dropdownSize: et.y.DropdownSizes.MEDIUM,
                            look: et.y.Looks.OUTLINED,
                            color: et.y.Colors.RED,
                            skuId: t.id,
                            className: el.testModeSelectButton,
                            currentStoreListingId: null != a ? a.id : null,
                            onStoreListingSelect: e => {
                                null != t && (0, h.yt)(t.id, {
                                    slug: s,
                                    analyticsSource: {
                                        page: l.page,
                                        section: es.jXE.NAVIGATION,
                                        object: null
                                    },
                                    storeListingId: e.id
                                });
                            }
                        }) : null
                    }),
                    (0, i.jsx)('div', {
                        className: el.headerSection,
                        children: (0, i.jsxs)('div', {
                            className: r()(el.headerPurchase, { [el.active]: o }),
                            children: [
                                null != t ? (0, f.Z)(t) : null,
                                null != e && null != t ? (0, i.jsx)('div', { children: 'deprecated!' }) : null,
                                (0, i.jsx)(X.Z, {
                                    messageStyle: X.G.SHORT,
                                    className: el.purchaseError
                                })
                            ]
                        })
                    }),
                    this.renderCopyLink()
                ]
            });
        }), eo(this, 'renderCarousel', (e, t) => {
            if (0 === t.carouselItems.length)
                return null;
            let {
                pageSize: n,
                isFocused: s
            } = this.props;
            return (0, i.jsx)(I.Z, {
                section: es.jXE.HERO,
                children: (0, i.jsx)(q.Z, {
                    pageSize: n,
                    items: t.carouselItems.map(n => this.parseMediaItems(e, n, t.assets)),
                    autoplayInterval: 8000,
                    paused: !s,
                    onIntentionalChange: this.trackCarouselScroll
                })
            });
        }), eo(this, 'renderListing', () => {
            let {
                application: e,
                storeListing: t,
                sku: n,
                pageSize: s
            } = this.props;
            return null == e || null == n || null == t || t.isSlimDirectoryVersion() ? (0, i.jsx)(U.Z, {
                align: U.Z.Align.CENTER,
                justify: U.Z.Justify.CENTER,
                children: (0, i.jsx)(d.Spinner, {})
            }) : s === ei.b.SMALL ? this.renderSmall(e, t, n) : this.renderLarge(e, t, n);
        });
    }
}
t.Z = (0, p.Z)((0, g.Z)(l.ZP.connectStores([
    x.Z,
    L.Z,
    Z.default,
    y.Z,
    M.Z,
    b.Z,
    D.Z,
    T.Z,
    S.Z,
    R.Z,
    v.Z,
    P.Z
], e => {
    let t, n, i, {
            inputSkuId: s,
            applicationId: a,
            storeListingId: r,
            isAuthenticated: l,
            channel: o
        } = e;
    if (null == a) {
        if (null == s)
            throw Error('Needs applicationId or skuId');
        t = s, null != (a = null != (n = b.Z.get(s)) ? n.applicationId : null) && (i = S.Z.getApplication(a));
    } else if (null == s) {
        if (null == a)
            throw Error('Needs applicationId or skuId');
        null != (i = S.Z.getApplication(a)) && (t = i.destinationSkuId), n = null != t ? b.Z.get(t) : null;
    }
    (null == n ? void 0 : n.flags) != null && (0, B.yE)(n.flags, es.l4R.STICKER_PACK) && (n = null);
    let c = null != a && (D.Z.inTestModeForApplication(a) || T.Z.inDevModeForApplication(a));
    return {
        skuId: t,
        application: null != a ? S.Z.getApplication(a) : null,
        isFetchingEntitlements: null != a && P.Z.applicationIdsFetching.has(a),
        didFetchEntitlements: null != a && P.Z.applicationIdsFetched.has(a),
        shouldFetchStatistics: l && null != a && R.Z.shouldFetchStatisticsForApplication(a),
        sku: n,
        isFocused: y.Z.isFocused(),
        storeListing: M.Z.getStoreListing({
            storeListingId: r,
            skuId: t,
            channelId: null != o ? o.id : null,
            isTestMode: c
        }),
        isInTestMode: null != a && c,
        matureAgree: x.Z.didMatureAgree,
        theme: L.Z.theme,
        locale: Z.default.locale,
        guild: null != o ? v.Z.getGuild(o.getGuildId()) : null
    };
})(ec)));
