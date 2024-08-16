n(411104), n(724458), n(653041), n(733860), n(47120), n(789020);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(846519),
    c = n(780384),
    d = n(481060),
    u = n(570140),
    _ = n(659429),
    E = n(496929),
    h = n(558381),
    m = n(410575),
    I = n(224336),
    g = n(730749),
    p = n(666743),
    T = n(115130),
    S = n(812206),
    f = n(770146),
    C = n(600164),
    N = n(811066),
    A = n(252618),
    v = n(100159),
    Z = n(646288),
    L = n(984370),
    O = n(706454),
    R = n(210887),
    x = n(430824),
    b = n(496675),
    P = n(525395),
    M = n(558314),
    D = n(580130),
    y = n(55563),
    j = n(551428),
    U = n(695103),
    G = n(451478),
    k = n(626135),
    w = n(572004),
    B = n(630388),
    H = n(937615),
    V = n(73346),
    F = n(3570),
    Y = n(689796),
    W = n(15470),
    z = n(506648),
    K = n(449275),
    q = n(445986),
    Q = n(119520),
    X = n(450233),
    J = n(726581),
    $ = n(74153),
    ee = n(125930),
    et = n(178071),
    en = n(176055),
    ei = n(843445),
    ea = n(981631),
    es = n(186901),
    er = n(689938),
    el = n(398479);
function eo(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class ec extends a.PureComponent {
    get isChannelType() {
        return null != this.props.channel;
    }
    componentDidMount() {
        let { sku: e, storeListing: t, isFetchingEntitlements: n, shouldFetchStatistics: i, didFetchEntitlements: a, location: s, fetchStoreListing: r } = this.props;
        if (null != s.state) {
            let { analyticsSource: e, analyticsProperties: t } = s.state;
            (this._analyticsSource = e), (this._extraAnalyticsProperties = t);
        } else this._analyticsSource = ea.SaU;
        (null == t || t.isSlimDirectoryVersion()) && r(), null != e && (!n && !a && (0, E.yD)(e.applicationId), i && u.Z.wait(() => (0, _.$)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug();
    }
    componentDidUpdate(e) {
        let { locale: t, sku: n, shouldFetchStatistics: i, skuId: a, storeListingId: s, slug: r, storeListing: l, fetchStoreListing: o } = this.props;
        if (
            (l !== e.storeListing &&
                null != l &&
                (0, F.s)(es.jE.STORE_LISTING, {
                    skuId: a,
                    slug: r
                }),
            (t !== e.locale || a !== e.skuId) && o(),
            i && !e.shouldFetchStatistics)
        ) {
            if (null == n) throw Error('Unexpected missing sku');
            u.Z.wait(() => (0, _.$)(n.applicationId));
        }
        (a !== e.skuId || s !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug();
    }
    componentWillUnmount() {
        this.showCopyLinkTextTimeout.stop();
        let {
            analyticsContext: { loadId: e, loadDate: t }
        } = this.props;
        null != t &&
            k.default.track(ea.rMx.STORE_LISTING_EXITED, {
                load_id: e,
                duration_ms: Date.now() - t
            });
    }
    replaceUrlWithSlug() {}
    trackViewed() {
        let { sku: e, storeListing: t, hasFetchedNews: n, analyticsContext: i } = this.props;
        if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || n)) return;
        let a = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
            images: 0,
            videos: 0
        });
        k.default.track(ea.rMx.STORE_LISTING_VIEWED, {
            ...this._extraAnalyticsProperties,
            load_id: i.loadId,
            has_description: null != t.description && t.description.length > 0,
            has_staff_review: null != t.staffNotes,
            carousel_image_count: a.images,
            carousel_video_count: a.videos,
            location: i.location.page,
            source: this._analyticsSource,
            ...(0, v.Z)(e, !0)
        }),
            (this._trackedViewed = !0);
    }
    renderHeader(e, t) {
        let { channel: n, isAuthenticated: s } = this.props;
        return (0, i.jsx)(L.Z, {
            isAuthenticated: s,
            toolbar: this.renderHeaderToolbar(e, t),
            children:
                null != n
                    ? (0, i.jsxs)(a.Fragment, {
                          children: [
                              (0, i.jsx)(L.Z.Icon, {
                                  icon: d.TagIcon,
                                  'aria-label': er.Z.Messages.STORE_CHANNEL
                              }),
                              (0, i.jsx)(L.Z.Title, { children: n.name })
                          ]
                      })
                    : null != t && t.premium
                      ? (0, i.jsxs)(a.Fragment, {
                            children: [
                                (0, i.jsx)(L.Z.Icon, {
                                    icon: d.NitroWheelIcon,
                                    'aria-label': er.Z.Messages.PREMIUM
                                }),
                                (0, i.jsx)($.Z, { sku: t })
                            ]
                        })
                      : null != t
                        ? (0, i.jsxs)(a.Fragment, {
                              children: [
                                  (0, i.jsx)(L.Z.Icon, {
                                      icon: d.TagIcon,
                                      'aria-label': er.Z.Messages.STORE_CHANNEL
                                  }),
                                  (0, i.jsx)(L.Z.Title, { children: t.name })
                              ]
                          })
                        : null
        });
    }
    parseMediaItems(e, t, n) {
        let { assetId: i, youtubeVideoId: a } = t;
        if (null != i) {
            let t = n.find((e) => e.id === i);
            if (null != t) {
                let { width: n, height: i } = t;
                if (null == n || null == i) throw Error('ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined');
                return t.mimeType.startsWith('video/')
                    ? {
                          type: ea.s9s.VIDEO,
                          thumbnailSrc: (0, V._W)(e.id, t, 1024, 'webp'),
                          src: (0, V._W)(e.id, t),
                          height: i,
                          width: n
                      }
                    : {
                          type: ea.s9s.IMG,
                          src: (0, V._W)(e.id, t, 1024),
                          height: i,
                          width: n
                      };
            }
        }
        if (null != a)
            return {
                type: ea.s9s.YOUTUBE_VIDEO,
                youtubeVideoId: a
            };
        throw Error('Store carousel item must have one of assetId or youtubeVideoId');
    }
    renderHeaderAssets(e, t, n) {
        let { theme: a } = this.props,
            s = t.headerBackground,
            r = (0, c.ap)(a) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
        return null == s || null == r
            ? (0, i.jsx)('div', { className: el.noHeaderSpacer })
            : (0, i.jsxs)('div', {
                  className: el.headerAssets,
                  children: [
                      (0, i.jsx)('div', {
                          className: el.headerBackground,
                          style: { backgroundImage: 'url('.concat((0, V._W)(e.id, s, 1024, 'png'), ')') }
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
        if (null == e.guild) return null;
        let { channel: n, pageSize: a } = this.props;
        return (0, i.jsx)(en.Z, {
            skuId: t.id,
            guild: e.guild,
            className: el.guildInvite,
            inChannel: null != n,
            pageSize: a
        });
    }
    renderFeatures(e) {
        return (0, i.jsx)(z.Z, { sku: e });
    }
    renderSystemRequirements(e) {
        return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length
            ? null
            : (0, i.jsx)(ee.Z, {
                  className: el.systemRequirements,
                  systemRequirements: e.systemRequirements,
                  pageSize: this.props.pageSize
              });
    }
    renderDescription(e, t, n) {
        let { description: s } = t;
        if (null == s) throw Error('Rendering ApplicationStoreListing without description');
        return (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(f.Z, {
                    tag: 'h1',
                    children: er.Z.Messages.APPLICATION_STORE_ABOUT_HEADER.format({ name: n.name })
                }),
                (0, i.jsx)(I.Z, {}),
                (0, i.jsx)(W.Z, {
                    applicationId: e.id,
                    blurb: t.summary,
                    description: s,
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
        let { sku: e, storeListing: t, application: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let a = [],
            s = n.getSplashURL(1024);
        null != s && a.push(s), null != t.headerLogoLightTheme && a.unshift((0, V._W)(n.id, t.headerLogoLightTheme, 1024, 'jpg'));
        let r = N.Z.Product({
                name: e.name,
                description: null != e.summary && '' !== e.summary ? e.summary : t.tagline,
                image: N.Z.Product.Image(a),
                sku: e.id
            }),
            l = e.getPrice();
        if (null != l) {
            let { amount: e, currency: t } = l;
            r.offers = N.Z.Offer({
                priceCurrency: t.toUpperCase(),
                price: (0, H.T4)(e, t, { style: 'decimal' })
            });
        }
        let o = N.Z.ItemPage({ mainEntity: r });
        return (0, i.jsx)(N.Z, { data: o });
    }
    renderSmall(e, t, n) {
        return (0, i.jsxs)('div', {
            className: r()(el.listing, el.listingSmall),
            children: [this.renderHeaderAssets(e, t, n), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
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
                                children: [this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
                            }),
                            (0, i.jsxs)('div', {
                                className: el.rightColumn,
                                children: [this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n)]
                            })
                        ]
                    })
                })
            ]
        });
    }
    render() {
        let { application: e, sku: t, storeListing: n, matureAgree: s, isAuthenticated: r } = this.props;
        if (null == e || null == t || null == n || n.isSlimDirectoryVersion())
            return (0, i.jsxs)(a.Fragment, {
                children: [
                    this.renderHeader(e, t),
                    (0, i.jsx)(C.Z, {
                        align: C.Z.Align.CENTER,
                        justify: C.Z.Justify.CENTER,
                        children: (0, i.jsx)(d.Spinner, { className: el.spinner })
                    })
                ]
            });
        if (!s && t.showAgeGate) {
            let n = r
                ? null
                : (0, i.jsx)('div', {
                      className: el.gatedListing,
                      children: this.renderListing()
                  });
            return (0, i.jsxs)(a.Fragment, {
                children: [(0, i.jsx)(A.yY, { location: e.name }), this.renderJsonLD(), this.renderHeader(e, t), (0, i.jsx)(Q.Z, { game: e }), n]
            });
        }
        return r
            ? (0, i.jsxs)('div', {
                  className: el.listingWrapper,
                  children: [
                      (0, i.jsx)(A.yY, { location: e.name }),
                      this.renderJsonLD(),
                      (0, i.jsx)(m.Z, {
                          section: ea.jXE.NAVIGATION,
                          children: this.renderHeader(e, t)
                      }),
                      (0, i.jsx)(m.Z, {
                          section: ea.jXE.BODY,
                          children: this.renderListing()
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  children: [(0, i.jsx)(A.yY, { location: e.name }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
              });
    }
    constructor(...e) {
        super(...e),
            eo(this, 'showCopyLinkTextTimeout', new o.V7()),
            eo(this, '_trackedViewed', !1),
            eo(this, '_analyticsSource', null),
            eo(this, '_extraAnalyticsProperties', null),
            eo(this, 'state', {
                showHeaderPurchaseUnit: !1,
                showLinkCopied: !1
            }),
            eo(this, 'trackCarouselScroll', (e, t, n) => {
                let { sku: i } = this.props;
                null != i &&
                    k.default.track(ea.rMx.STORE_LISTING_MEDIA_SCROLLED, {
                        ...(0, v.Z)(i),
                        card_index: n,
                        card_type: e.type === ea.s9s.IMG ? 'image' : 'video'
                    });
            }),
            eo(this, 'copyCurrentUrl', () => {
                var e;
                let { location: t } = this.props;
                (0, w.JG)(((e = t.pathname), ''.concat(location.protocol, '//').concat(location.host).concat(e))),
                    this.setState({ showLinkCopied: !0 }, () => {
                        this.showCopyLinkTextTimeout.start(1500, () => {
                            this.setState({ showLinkCopied: !1 });
                        });
                    });
            }),
            eo(this, 'handleCreateInstantInvite', () => {
                let { channel: e, guild: t } = this.props;
                null != e &&
                    null != t &&
                    (0, d.openModalLazy)(async () => {
                        let { default: a } = await Promise.all([n.e('7654'), n.e('66633')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, i.jsx)(a, {
                                ...n,
                                guild: t,
                                channel: e,
                                source: ea.t4x.GUILD_CHANNELS
                            });
                    });
            }),
            eo(this, 'renderInviteLink', () => {
                let { channel: e, guild: t } = this.props;
                return null != e && null != t && (b.Z.can(ea.Plq.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode)
                    ? (0, i.jsx)(d.Button, {
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
                      })
                    : null;
            }),
            eo(this, 'renderCopyLink', () => {
                let { showLinkCopied: e } = this.state;
                return this.isChannelType
                    ? this.renderInviteLink()
                    : (0, i.jsx)(d.Tooltip, {
                          text: e ? er.Z.Messages.APPLICATION_STORE_LINK_COPIED : null,
                          position: 'left',
                          forceOpen: e,
                          children: (t) => {
                              let { onMouseEnter: n, onMouseLeave: a } = t;
                              return (0, i.jsx)(d.Button, {
                                  'aria-label': e ? er.Z.Messages.APPLICATION_STORE_LINK_COPIED : er.Z.Messages.COPY_LINK,
                                  look: d.Button.Looks.BLANK,
                                  size: d.Button.Sizes.NONE,
                                  onClick: this.copyCurrentUrl,
                                  onMouseEnter: n,
                                  onMouseLeave: a,
                                  className: el.link,
                                  children: (0, i.jsx)(d.LinkIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: el.linkIcon
                                  })
                              });
                          }
                      });
            }),
            eo(this, 'renderHeaderToolbar', (e, t) => {
                let {
                        isInTestMode: n,
                        slug: a,
                        storeListing: s,
                        analyticsContext: { location: l }
                    } = this.props,
                    { showHeaderPurchaseUnit: o } = this.state;
                return (0, i.jsxs)('div', {
                    className: el.headerBarListing,
                    children: [
                        (0, i.jsx)('div', {
                            className: el.headerSection,
                            children:
                                n && null != t
                                    ? (0, i.jsx)(et.Z, {
                                          size: et.y.Sizes.MIN,
                                          dropdownSize: et.y.DropdownSizes.MEDIUM,
                                          look: et.y.Looks.OUTLINED,
                                          color: et.y.Colors.RED,
                                          skuId: t.id,
                                          className: el.testModeSelectButton,
                                          currentStoreListingId: null != s ? s.id : null,
                                          onStoreListingSelect: (e) => {
                                              null != t &&
                                                  (0, h.yt)(t.id, {
                                                      slug: a,
                                                      analyticsSource: {
                                                          page: l.page,
                                                          section: ea.jXE.NAVIGATION,
                                                          object: null
                                                      },
                                                      storeListingId: e.id
                                                  });
                                          }
                                      })
                                    : null
                        }),
                        (0, i.jsx)('div', {
                            className: el.headerSection,
                            children: (0, i.jsxs)('div', {
                                className: r()(el.headerPurchase, { [el.active]: o }),
                                children: [
                                    null != t ? (0, Z.Z)(t) : null,
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
            }),
            eo(this, 'renderCarousel', (e, t) => {
                if (0 === t.carouselItems.length) return null;
                let { pageSize: n, isFocused: a } = this.props;
                return (0, i.jsx)(m.Z, {
                    section: ea.jXE.HERO,
                    children: (0, i.jsx)(q.Z, {
                        pageSize: n,
                        items: t.carouselItems.map((n) => this.parseMediaItems(e, n, t.assets)),
                        autoplayInterval: 8000,
                        paused: !a,
                        onIntentionalChange: this.trackCarouselScroll
                    })
                });
            }),
            eo(this, 'renderListing', () => {
                let { application: e, storeListing: t, sku: n, pageSize: a } = this.props;
                return null == e || null == n || null == t || t.isSlimDirectoryVersion()
                    ? (0, i.jsx)(C.Z, {
                          align: C.Z.Align.CENTER,
                          justify: C.Z.Justify.CENTER,
                          children: (0, i.jsx)(d.Spinner, {})
                      })
                    : a === ei.b.SMALL
                      ? this.renderSmall(e, t, n)
                      : this.renderLarge(e, t, n);
            });
    }
}
t.Z = (0, g.Z)(
    (0, p.Z)(
        l.ZP.connectStores([M.Z, R.Z, O.default, G.Z, j.Z, y.Z, U.Z, T.Z, S.Z, P.Z, x.Z, D.Z], (e) => {
            let t,
                n,
                i,
                { inputSkuId: a, applicationId: s, storeListingId: r, isAuthenticated: l, channel: o } = e;
            if (null == s) {
                if (null == a) throw Error('Needs applicationId or skuId');
                (t = a), null != (s = null != (n = y.Z.get(a)) ? n.applicationId : null) && (i = S.Z.getApplication(s));
            } else if (null == a) {
                if (null == s) throw Error('Needs applicationId or skuId');
                null != (i = S.Z.getApplication(s)) && (t = i.destinationSkuId), (n = null != t ? y.Z.get(t) : null);
            }
            (null == n ? void 0 : n.flags) != null && (0, B.yE)(n.flags, ea.l4R.STICKER_PACK) && (n = null);
            let c = null != s && (U.Z.inTestModeForApplication(s) || T.Z.inDevModeForApplication(s));
            return {
                skuId: t,
                application: null != s ? S.Z.getApplication(s) : null,
                isFetchingEntitlements: null != s && D.Z.applicationIdsFetching.has(s),
                didFetchEntitlements: null != s && D.Z.applicationIdsFetched.has(s),
                shouldFetchStatistics: l && null != s && P.Z.shouldFetchStatisticsForApplication(s),
                sku: n,
                isFocused: G.Z.isFocused(),
                storeListing: j.Z.getStoreListing({
                    storeListingId: r,
                    skuId: t,
                    channelId: null != o ? o.id : null,
                    isTestMode: c
                }),
                isInTestMode: null != s && c,
                matureAgree: M.Z.didMatureAgree,
                theme: R.Z.theme,
                locale: O.default.locale,
                guild: null != o ? x.Z.getGuild(o.getGuildId()) : null
            };
        })(ec)
    )
);
