"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eE
  }
}), s("70102"), s("808653"), s("424973"), s("843762"), s("222007"), s("702976");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  i = s.n(n),
  l = s("446674"),
  o = s("862337"),
  u = s("819855"),
  d = s("77078"),
  c = s("913144"),
  _ = s("599560"),
  E = s("316718"),
  T = s("55620"),
  I = s("901582"),
  f = s("790219"),
  R = s("151540"),
  S = s("86621"),
  m = s("984376"),
  N = s("84460"),
  A = s("299285"),
  p = s("69927"),
  C = s("791160"),
  g = s("661579"),
  O = s("539938"),
  P = s("915639"),
  M = s("161778"),
  h = s("305961"),
  L = s("957255"),
  x = s("71010"),
  D = s("290877"),
  v = s("437712"),
  U = s("552712"),
  b = s("698041"),
  j = s("167726"),
  B = s("471671"),
  G = s("895530"),
  y = s("145131"),
  k = s("519311"),
  H = s("83900"),
  F = s("216422"),
  w = s("547896"),
  K = s("599110"),
  W = s("306160"),
  V = s("568734"),
  Y = s("153160"),
  z = s("271560"),
  X = s("778043"),
  Q = s("128430"),
  Z = s("824021"),
  J = s("542480"),
  q = s("308518"),
  $ = s("590177"),
  ee = s("704861"),
  et = s("503278"),
  es = s("23985"),
  ea = s("572158"),
  er = s("374266"),
  en = s("951765"),
  ei = s("729199"),
  el = s("75576"),
  eo = s("49111"),
  eu = s("492249"),
  ed = s("782340"),
  ec = s("434576");
class e_ extends r.PureComponent {
  get isChannelType() {
    return null != this.props.channel
  }
  componentDidMount() {
    let {
      sku: e,
      storeListing: t,
      isFetchingEntitlements: s,
      shouldFetchStatistics: a,
      didFetchEntitlements: r,
      location: n,
      fetchStoreListing: i
    } = this.props;
    if (null != n.state) {
      let {
        analyticsSource: e,
        analyticsProperties: t
      } = n.state;
      this._analyticsSource = e, this._extraAnalyticsProperties = t
    } else this._analyticsSource = eo.DIRECT_ANALYTICS_LOCATION;
    (null == t || t.isSlimDirectoryVersion()) && i(), null != e && (!s && !r && (0, E.fetchUserEntitlementsForApplication)(e.applicationId), a && c.default.wait(() => (0, _.fetchStatisticsForApplication)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentDidUpdate(e) {
    let {
      locale: t,
      sku: s,
      shouldFetchStatistics: a,
      skuId: r,
      storeListingId: n,
      slug: i,
      storeListing: l,
      fetchStoreListing: o
    } = this.props;
    if (l !== e.storeListing && null != l && (0, X.deepLinkRouteIfLandedAndNotAuthed)(eu.RPCDeepLinks.STORE_LISTING, {
        skuId: r,
        slug: i
      }), (t !== e.locale || r !== e.skuId) && o(), a && !e.shouldFetchStatistics) {
      if (null == s) throw Error("Unexpected missing sku");
      c.default.wait(() => (0, _.fetchStatisticsForApplication)(s.applicationId))
    }(r !== e.skuId || n !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentWillUnmount() {
    this.showCopyLinkTextTimeout.stop();
    let {
      analyticsContext: {
        loadId: e,
        loadDate: t
      }
    } = this.props;
    null != t && K.default.track(eo.AnalyticEvents.STORE_LISTING_EXITED, {
      load_id: e,
      duration_ms: Date.now() - t
    })
  }
  replaceUrlWithSlug() {}
  trackViewed() {
    let {
      sku: e,
      storeListing: t,
      hasFetchedNews: s,
      analyticsContext: a
    } = this.props;
    if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || s)) return;
    let r = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
      images: 0,
      videos: 0
    });
    K.default.track(eo.AnalyticEvents.STORE_LISTING_VIEWED, {
      ...this._extraAnalyticsProperties,
      load_id: a.loadId,
      has_description: null != t.description && t.description.length > 0,
      has_staff_review: null != t.staffNotes,
      carousel_image_count: r.images,
      carousel_video_count: r.videos,
      location: a.location.page,
      source: this._analyticsSource,
      ...(0, C.default)(e, !0)
    }), this._trackedViewed = !0
  }
  renderHeader(e, t) {
    let {
      channel: s,
      isAuthenticated: n
    } = this.props;
    return (0, a.jsx)(O.default, {
      isAuthenticated: n,
      toolbar: this.renderHeaderToolbar(e, t),
      children: null != s ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(O.default.Icon, {
          icon: w.default,
          "aria-label": ed.default.Messages.STORE_CHANNEL
        }), (0, a.jsx)(O.default.Title, {
          children: s.name
        })]
      }) : null != t && t.premium ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(O.default.Icon, {
          icon: F.default,
          "aria-label": ed.default.Messages.PREMIUM
        }), (0, a.jsx)(ea.default, {
          sku: t
        })]
      }) : null != t ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(O.default.Icon, {
          icon: w.default,
          "aria-label": ed.default.Messages.STORE_CHANNEL
        }), (0, a.jsx)(O.default.Title, {
          children: t.name
        })]
      }) : null
    })
  }
  parseMediaItems(e, t, s) {
    let {
      assetId: a,
      youtubeVideoId: r
    } = t;
    if (null != a) {
      let t = s.find(e => e.id === a);
      if (null != t) {
        let {
          width: s,
          height: a
        } = t;
        if (null == s || null == a) throw Error("ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined");
        return t.mimeType.startsWith("video/") ? {
          type: eo.CarouselMediaTypes.VIDEO,
          thumbnailSrc: (0, z.getAssetURL)(e.id, t, 1024, "webp"),
          src: (0, z.getAssetURL)(e.id, t),
          height: a,
          width: s
        } : {
          type: eo.CarouselMediaTypes.IMG,
          src: (0, z.getAssetURL)(e.id, t, 1024),
          height: a,
          width: s
        }
      }
    }
    if (null != r) return {
      type: eo.CarouselMediaTypes.YOUTUBE_VIDEO,
      youtubeVideoId: r
    };
    throw Error("Store carousel item must have one of assetId or youtubeVideoId")
  }
  renderHeaderAssets(e, t, s) {
    let {
      theme: r
    } = this.props, n = t.headerBackground, i = (0, u.isThemeLight)(r) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
    return null == n || null == i ? (0, a.jsx)("div", {
      className: ec.noHeaderSpacer
    }) : (0, a.jsxs)("div", {
      className: ec.headerAssets,
      children: [(0, a.jsx)("div", {
        className: ec.headerBackground,
        style: {
          backgroundImage: "url(".concat((0, z.getAssetURL)(e.id, n, 1024, "png"), ")")
        }
      }), (0, a.jsx)("img", {
        className: ec.headerLogo,
        src: (0, z.getAssetURL)(e.id, i, 1024, "png"),
        alt: s.name
      })]
    })
  }
  renderWhyYouMightLikeThis(e, t) {
    return (0, a.jsx)(es.default, {
      sku: e,
      storeListing: t,
      className: ec.whyYouMightLikeIt
    })
  }
  renderVerifiedGuildInvite(e, t) {
    if (null == e.guild) return null;
    let {
      channel: s,
      pageSize: r
    } = this.props;
    return (0, a.jsx)(ei.default, {
      skuId: t.id,
      guild: e.guild,
      className: ec.guildInvite,
      inChannel: null != s,
      pageSize: r
    })
  }
  renderFeatures(e) {
    return (0, a.jsx)(J.default, {
      sku: e
    })
  }
  renderSystemRequirements(e) {
    return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length ? null : (0, a.jsx)(er.default, {
      className: ec.systemRequirements,
      systemRequirements: e.systemRequirements,
      pageSize: this.props.pageSize
    })
  }
  renderDescription(e, t, s) {
    let {
      description: n
    } = t;
    if (null == n) throw Error("Rendering ApplicationStoreListing without description");
    return (0, a.jsxs)(r.Fragment, {
      children: [(0, a.jsx)(G.default, {
        tag: "h1",
        children: ed.default.Messages.APPLICATION_STORE_ABOUT_HEADER.format({
          name: s.name
        })
      }), (0, a.jsx)(R.default, {}), (0, a.jsx)(Z.default, {
        applicationId: e.id,
        blurb: t.summary,
        description: n,
        className: ec.description,
        assets: t.assets
      })]
    })
  }
  renderApplicationContentRating(e) {
    return (0, a.jsx)(Q.default, {
      sku: e,
      className: ec.contentRating
    })
  }
  renderApplicationLegalInfo(e) {
    return (0, a.jsx)(q.default, {
      sku: e,
      className: ec.legalInfo
    })
  }
  renderJsonLD() {
    let {
      sku: e,
      storeListing: t,
      application: s
    } = this.props;
    if (null == e || null == t || null == s) return null;
    let r = [],
      n = s.getSplashURL(1024);
    null != n && r.push(n), null != t.headerLogoLightTheme && r.unshift((0, z.getAssetURL)(s.id, t.headerLogoLightTheme, 1024, "jpg"));
    let i = k.default.Product({
        name: e.name,
        description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
        image: k.default.Product.Image(r),
        sku: e.id
      }),
      l = e.getPrice();
    if (null != l) {
      let {
        amount: e,
        currency: t
      } = l;
      i.offers = k.default.Offer({
        priceCurrency: t.toUpperCase(),
        price: (0, Y.formatPrice)(e, t, {
          style: "decimal"
        })
      })
    }
    let o = k.default.ItemPage({
      mainEntity: i
    });
    return (0, a.jsx)(k.default, {
      data: o
    })
  }
  renderSmall(e, t, s) {
    return (0, a.jsxs)("div", {
      className: i(ec.listing, ec.listingSmall),
      children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderVerifiedGuildInvite(t, s), this.renderFeatures(s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
    })
  }
  renderLarge(e, t, s) {
    return (0, a.jsxs)("div", {
      className: ec.listing,
      children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), (0, a.jsx)("div", {
        className: ec.listingLarge,
        children: (0, a.jsxs)("div", {
          className: ec.body,
          children: [(0, a.jsxs)("div", {
            className: ec.leftColumn,
            children: [this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
          }), (0, a.jsxs)("div", {
            className: ec.rightColumn,
            children: [this.renderVerifiedGuildInvite(t, s), this.renderFeatures(s)]
          })]
        })
      })]
    })
  }
  render() {
    let {
      application: e,
      sku: t,
      storeListing: s,
      matureAgree: n,
      isAuthenticated: i
    } = this.props;
    if (null == e || null == t || null == s || s.isSlimDirectoryVersion()) return (0, a.jsxs)(r.Fragment, {
      children: [this.renderHeader(e, t), (0, a.jsx)(y.default, {
        align: y.default.Align.CENTER,
        justify: y.default.Justify.CENTER,
        children: (0, a.jsx)(d.Spinner, {
          className: ec.spinner
        })
      })]
    });
    if (!n && t.showAgeGate) {
      let s = i ? null : (0, a.jsx)("div", {
        className: ec.gatedListing,
        children: this.renderListing()
      });
      return (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(p.AppPageTitle, {
          location: e.name
        }), this.renderJsonLD(), this.renderHeader(e, t), (0, a.jsx)(ee.default, {
          game: e
        }), s]
      })
    }
    return i ? (0, a.jsxs)("div", {
      className: ec.listingWrapper,
      children: [(0, a.jsx)(p.AppPageTitle, {
        location: e.name
      }), this.renderJsonLD(), (0, a.jsx)(I.default, {
        section: eo.AnalyticsSections.NAVIGATION,
        children: this.renderHeader(e, t)
      }), (0, a.jsx)(I.default, {
        section: eo.AnalyticsSections.BODY,
        children: this.renderListing()
      })]
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(p.AppPageTitle, {
        location: e.name
      }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
    })
  }
  constructor(...e) {
    super(...e), this.showCopyLinkTextTimeout = new o.Timeout, this._trackedViewed = !1, this._analyticsSource = null, this._extraAnalyticsProperties = null, this.state = {
      showHeaderPurchaseUnit: !1,
      showLinkCopied: !1
    }, this.trackCarouselScroll = (e, t, s) => {
      let {
        sku: a
      } = this.props;
      null != a && K.default.track(eo.AnalyticEvents.STORE_LISTING_MEDIA_SCROLLED, {
        ...(0, C.default)(a),
        card_index: s,
        card_type: e.type === eo.CarouselMediaTypes.IMG ? "image" : "video"
      })
    }, this.copyCurrentUrl = () => {
      var e;
      let {
        location: t
      } = this.props;
      (0, W.copy)((e = t.pathname, "".concat(location.protocol, "//").concat(location.host).concat(e))), this.setState({
        showLinkCopied: !0
      }, () => {
        this.showCopyLinkTextTimeout.start(1500, () => {
          this.setState({
            showLinkCopied: !1
          })
        })
      })
    }, this.handleCreateInstantInvite = () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      null != e && null != t && (0, d.openModalLazy)(async () => {
        let {
          default: r
        } = await s.el("310688").then(s.bind(s, "310688"));
        return s => (0, a.jsx)(r, {
          ...s,
          guild: t,
          channel: e,
          source: eo.InstantInviteSources.GUILD_CHANNELS
        })
      })
    }, this.renderInviteLink = () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      return null != e && null != t && (L.default.can(eo.Permissions.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode) ? (0, a.jsx)(d.Button, {
        "aria-label": ed.default.Messages.CREATE_INSTANT_INVITE,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        onClick: this.handleCreateInstantInvite,
        className: ec.link,
        children: (0, a.jsx)(H.default, {
          className: ec.linkIcon
        })
      }) : null
    }, this.renderCopyLink = () => {
      let {
        showLinkCopied: e
      } = this.state;
      return this.isChannelType ? this.renderInviteLink() : (0, a.jsx)(d.Tooltip, {
        text: e ? ed.default.Messages.APPLICATION_STORE_LINK_COPIED : null,
        position: "left",
        forceOpen: e,
        children: t => {
          let {
            onMouseEnter: s,
            onMouseLeave: r
          } = t;
          return (0, a.jsx)(d.Button, {
            "aria-label": e ? ed.default.Messages.APPLICATION_STORE_LINK_COPIED : ed.default.Messages.COPY_LINK,
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            onClick: this.copyCurrentUrl,
            onMouseEnter: s,
            onMouseLeave: r,
            className: ec.link,
            children: (0, a.jsx)(H.default, {
              className: ec.linkIcon
            })
          })
        }
      })
    }, this.renderHeaderToolbar = (e, t) => {
      let {
        isInTestMode: s,
        slug: r,
        storeListing: n,
        channel: l,
        analyticsContext: {
          location: o
        }
      } = this.props, {
        showHeaderPurchaseUnit: u
      } = this.state;
      return (0, a.jsxs)("div", {
        className: ec.headerBarListing,
        children: [(0, a.jsx)("div", {
          className: ec.headerSection,
          children: s && null != t ? (0, a.jsx)(en.default, {
            size: en.TestModeStoreListingButtonEnums.Sizes.MIN,
            dropdownSize: en.TestModeStoreListingButtonEnums.DropdownSizes.MEDIUM,
            look: en.TestModeStoreListingButtonEnums.Looks.OUTLINED,
            color: en.TestModeStoreListingButtonEnums.Colors.YELLOW,
            skuId: t.id,
            className: ec.testModeSelectButton,
            currentStoreListingId: null != n ? n.id : null,
            onStoreListingSelect: e => {
              null != t && (0, T.goToSKUStoreListing)(t.id, {
                slug: r,
                analyticsSource: {
                  page: o.page,
                  section: eo.AnalyticsSections.NAVIGATION,
                  object: null
                },
                storeListingId: e.id
              })
            }
          }) : null
        }), (0, a.jsx)("div", {
          className: ec.headerSection,
          children: (0, a.jsxs)("div", {
            className: i(ec.headerPurchase, {
              [ec.active]: u
            }),
            children: [null != t ? (0, g.default)(t) : null, null != e && null != t ? (0, a.jsx)(f.default, {
              wrapperClassName: ec.headerActionButton,
              applicationId: e.id,
              skuId: t.id,
              color: d.Button.Colors.GREEN,
              size: d.Button.Sizes.SMALL,
              tooltipPosition: "bottom",
              entitlementBranchId: null != n ? n.entitlementBranchId : null,
              channelId: null != l ? l.id : null,
              onStoreListing: !0
            }) : null, (0, a.jsx)(et.default, {
              messageStyle: et.MessageStyles.SHORT,
              className: ec.purchaseError
            })]
          })
        }), this.renderCopyLink()]
      })
    }, this.renderCarousel = (e, t) => {
      if (0 === t.carouselItems.length) return null;
      let {
        pageSize: s,
        isFocused: r
      } = this.props;
      return (0, a.jsx)(I.default, {
        section: eo.AnalyticsSections.HERO,
        children: (0, a.jsx)($.default, {
          pageSize: s,
          items: t.carouselItems.map(s => this.parseMediaItems(e, s, t.assets)),
          autoplayInterval: 8e3,
          paused: !r,
          onIntentionalChange: this.trackCarouselScroll
        })
      })
    }, this.renderListing = () => {
      let {
        application: e,
        storeListing: t,
        sku: s,
        pageSize: r
      } = this.props;
      return null == e || null == s || null == t || t.isSlimDirectoryVersion() ? (0, a.jsx)(y.default, {
        align: y.default.Align.CENTER,
        justify: y.default.Justify.CENTER,
        children: (0, a.jsx)(d.Spinner, {})
      }) : r === el.PageSizes.SMALL ? this.renderSmall(e, t, s) : this.renderLarge(e, t, s)
    }
  }
}
var eE = (0, S.default)((0, m.default)(l.default.connectStores([D.default, M.default, P.default, B.default, b.default, U.default, j.default, N.default, A.default, x.default, h.default, v.default], e => {
  let t, s, a, {
    inputSkuId: r,
    applicationId: n,
    storeListingId: i,
    isAuthenticated: l,
    channel: o
  } = e;
  if (null == n) {
    if (null == r) throw Error("Needs applicationId or skuId");
    t = r, null != (n = null != (s = U.default.get(r)) ? s.applicationId : null) && (a = A.default.getApplication(n))
  } else if (null == r) {
    if (null == n) throw Error("Needs applicationId or skuId");
    null != (a = A.default.getApplication(n)) && (t = a.destinationSkuId), s = null != t ? U.default.get(t) : null
  }(null == s ? void 0 : s.flags) != null && (0, V.hasFlag)(s.flags, eo.SKUFlags.STICKER_PACK) && (s = null);
  let u = null != n && (j.default.inTestModeForApplication(n) || N.default.inDevModeForApplication(n));
  return {
    skuId: t,
    application: null != n ? A.default.getApplication(n) : null,
    isFetchingEntitlements: null != n && v.default.applicationIdsFetching.has(n),
    didFetchEntitlements: null != n && v.default.applicationIdsFetched.has(n),
    shouldFetchStatistics: l && null != n && x.default.shouldFetchStatisticsForApplication(n),
    sku: s,
    isFocused: B.default.isFocused(),
    storeListing: b.default.getStoreListing({
      storeListingId: i,
      skuId: t,
      channelId: null != o ? o.id : null,
      isTestMode: u
    }),
    isInTestMode: null != n && u,
    matureAgree: D.default.didMatureAgree,
    theme: M.default.theme,
    locale: P.default.locale,
    guild: null != o ? h.default.getGuild(o.getGuildId()) : null
  }
})(e_)))