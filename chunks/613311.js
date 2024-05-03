"use strict";
s.r(t), s("411104"), s("724458"), s("653041"), s("733860"), s("47120"), s("789020");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("846519"),
  u = s("780384"),
  d = s("481060"),
  c = s("570140"),
  _ = s("659429"),
  E = s("496929"),
  T = s("558381"),
  I = s("410575"),
  R = s("404133"),
  f = s("224336"),
  S = s("730749"),
  m = s("666743"),
  A = s("115130"),
  N = s("812206"),
  p = s("252618"),
  g = s("100159"),
  C = s("646288"),
  P = s("984370"),
  O = s("706454"),
  M = s("210887"),
  h = s("430824"),
  L = s("496675"),
  x = s("525395"),
  v = s("558314"),
  b = s("580130"),
  D = s("55563"),
  U = s("551428"),
  j = s("695103"),
  y = s("451478"),
  B = s("378720"),
  G = s("285952"),
  k = s("760397"),
  H = s("757698"),
  F = s("466111"),
  w = s("548420"),
  K = s("626135"),
  W = s("572004"),
  V = s("630388"),
  Y = s("937615"),
  z = s("73346"),
  X = s("3570"),
  Q = s("689796"),
  Z = s("15470"),
  J = s("506648"),
  q = s("449275"),
  $ = s("445986"),
  ee = s("119520"),
  et = s("450233"),
  es = s("726581"),
  ea = s("954385"),
  er = s("125930"),
  ei = s("178071"),
  en = s("176055"),
  el = s("843445"),
  eo = s("981631"),
  eu = s("186901"),
  ed = s("689938"),
  ec = s("276550");

function e_(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class eE extends r.PureComponent {
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
      location: i,
      fetchStoreListing: n
    } = this.props;
    if (null != i.state) {
      let {
        analyticsSource: e,
        analyticsProperties: t
      } = i.state;
      this._analyticsSource = e, this._extraAnalyticsProperties = t
    } else this._analyticsSource = eo.DIRECT_ANALYTICS_LOCATION;
    (null == t || t.isSlimDirectoryVersion()) && n(), null != e && (!s && !r && (0, E.fetchUserEntitlementsForApplication)(e.applicationId), a && c.default.wait(() => (0, _.fetchStatisticsForApplication)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentDidUpdate(e) {
    let {
      locale: t,
      sku: s,
      shouldFetchStatistics: a,
      skuId: r,
      storeListingId: i,
      slug: n,
      storeListing: l,
      fetchStoreListing: o
    } = this.props;
    if (l !== e.storeListing && null != l && (0, X.deepLinkRouteIfLandedAndNotAuthed)(eu.RPCDeepLinks.STORE_LISTING, {
        skuId: r,
        slug: n
      }), (t !== e.locale || r !== e.skuId) && o(), a && !e.shouldFetchStatistics) {
      if (null == s) throw Error("Unexpected missing sku");
      c.default.wait(() => (0, _.fetchStatisticsForApplication)(s.applicationId))
    }(r !== e.skuId || i !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug()
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
      ...(0, g.default)(e, !0)
    }), this._trackedViewed = !0
  }
  renderHeader(e, t) {
    let {
      channel: s,
      isAuthenticated: i
    } = this.props;
    return (0, a.jsx)(P.default, {
      isAuthenticated: i,
      toolbar: this.renderHeaderToolbar(e, t),
      children: null != s ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(P.default.Icon, {
          icon: w.default,
          "aria-label": ed.default.Messages.STORE_CHANNEL
        }), (0, a.jsx)(P.default.Title, {
          children: s.name
        })]
      }) : null != t && t.premium ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(P.default.Icon, {
          icon: F.default,
          "aria-label": ed.default.Messages.PREMIUM
        }), (0, a.jsx)(ea.default, {
          sku: t
        })]
      }) : null != t ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(P.default.Icon, {
          icon: w.default,
          "aria-label": ed.default.Messages.STORE_CHANNEL
        }), (0, a.jsx)(P.default.Title, {
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
    } = this.props, i = t.headerBackground, n = (0, u.isThemeLight)(r) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
    return null == i || null == n ? (0, a.jsx)("div", {
      className: ec.noHeaderSpacer
    }) : (0, a.jsxs)("div", {
      className: ec.headerAssets,
      children: [(0, a.jsx)("div", {
        className: ec.headerBackground,
        style: {
          backgroundImage: "url(".concat((0, z.getAssetURL)(e.id, i, 1024, "png"), ")")
        }
      }), (0, a.jsx)("img", {
        className: ec.headerLogo,
        src: (0, z.getAssetURL)(e.id, n, 1024, "png"),
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
    return (0, a.jsx)(en.default, {
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
      description: i
    } = t;
    if (null == i) throw Error("Rendering ApplicationStoreListing without description");
    return (0, a.jsxs)(r.Fragment, {
      children: [(0, a.jsx)(B.default, {
        tag: "h1",
        children: ed.default.Messages.APPLICATION_STORE_ABOUT_HEADER.format({
          name: s.name
        })
      }), (0, a.jsx)(f.default, {}), (0, a.jsx)(Z.default, {
        applicationId: e.id,
        blurb: t.summary,
        description: i,
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
      i = s.getSplashURL(1024);
    null != i && r.push(i), null != t.headerLogoLightTheme && r.unshift((0, z.getAssetURL)(s.id, t.headerLogoLightTheme, 1024, "jpg"));
    let n = k.default.Product({
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
      n.offers = k.default.Offer({
        priceCurrency: t.toUpperCase(),
        price: (0, Y.formatPrice)(e, t, {
          style: "decimal"
        })
      })
    }
    let o = k.default.ItemPage({
      mainEntity: n
    });
    return (0, a.jsx)(k.default, {
      data: o
    })
  }
  renderSmall(e, t, s) {
    return (0, a.jsxs)("div", {
      className: n()(ec.listing, ec.listingSmall),
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
      matureAgree: i,
      isAuthenticated: n
    } = this.props;
    if (null == e || null == t || null == s || s.isSlimDirectoryVersion()) return (0, a.jsxs)(r.Fragment, {
      children: [this.renderHeader(e, t), (0, a.jsx)(G.default, {
        align: G.default.Align.CENTER,
        justify: G.default.Justify.CENTER,
        children: (0, a.jsx)(d.Spinner, {
          className: ec.spinner
        })
      })]
    });
    if (!i && t.showAgeGate) {
      let s = n ? null : (0, a.jsx)("div", {
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
    return n ? (0, a.jsxs)("div", {
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
    super(...e), e_(this, "showCopyLinkTextTimeout", new o.Timeout), e_(this, "_trackedViewed", !1), e_(this, "_analyticsSource", null), e_(this, "_extraAnalyticsProperties", null), e_(this, "state", {
      showHeaderPurchaseUnit: !1,
      showLinkCopied: !1
    }), e_(this, "trackCarouselScroll", (e, t, s) => {
      let {
        sku: a
      } = this.props;
      null != a && K.default.track(eo.AnalyticEvents.STORE_LISTING_MEDIA_SCROLLED, {
        ...(0, g.default)(a),
        card_index: s,
        card_type: e.type === eo.CarouselMediaTypes.IMG ? "image" : "video"
      })
    }), e_(this, "copyCurrentUrl", () => {
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
    }), e_(this, "handleCreateInstantInvite", () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      null != e && null != t && (0, d.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("43643"), s.e("7654"), s.e("61939")]).then(s.bind(s, "560114"));
        return s => (0, a.jsx)(r, {
          ...s,
          guild: t,
          channel: e,
          source: eo.InstantInviteSources.GUILD_CHANNELS
        })
      })
    }), e_(this, "renderInviteLink", () => {
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
    }), e_(this, "renderCopyLink", () => {
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
    }), e_(this, "renderHeaderToolbar", (e, t) => {
      let {
        isInTestMode: s,
        slug: r,
        storeListing: i,
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
          children: s && null != t ? (0, a.jsx)(ei.default, {
            size: ei.TestModeStoreListingButtonEnums.Sizes.MIN,
            dropdownSize: ei.TestModeStoreListingButtonEnums.DropdownSizes.MEDIUM,
            look: ei.TestModeStoreListingButtonEnums.Looks.OUTLINED,
            color: ei.TestModeStoreListingButtonEnums.Colors.YELLOW,
            skuId: t.id,
            className: ec.testModeSelectButton,
            currentStoreListingId: null != i ? i.id : null,
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
            className: n()(ec.headerPurchase, {
              [ec.active]: u
            }),
            children: [null != t ? (0, C.default)(t) : null, null != e && null != t ? (0, a.jsx)(R.default, {
              wrapperClassName: ec.headerActionButton,
              applicationId: e.id,
              skuId: t.id,
              color: d.Button.Colors.GREEN,
              size: d.Button.Sizes.SMALL,
              tooltipPosition: "bottom",
              entitlementBranchId: null != i ? i.entitlementBranchId : null,
              channelId: null != l ? l.id : null,
              onStoreListing: !0
            }) : null, (0, a.jsx)(et.default, {
              messageStyle: et.MessageStyles.SHORT,
              className: ec.purchaseError
            })]
          })
        }), this.renderCopyLink()]
      })
    }), e_(this, "renderCarousel", (e, t) => {
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
    }), e_(this, "renderListing", () => {
      let {
        application: e,
        storeListing: t,
        sku: s,
        pageSize: r
      } = this.props;
      return null == e || null == s || null == t || t.isSlimDirectoryVersion() ? (0, a.jsx)(G.default, {
        align: G.default.Align.CENTER,
        justify: G.default.Justify.CENTER,
        children: (0, a.jsx)(d.Spinner, {})
      }) : r === el.PageSizes.SMALL ? this.renderSmall(e, t, s) : this.renderLarge(e, t, s)
    })
  }
}
t.default = (0, S.default)((0, m.default)(l.default.connectStores([v.default, M.default, O.default, y.default, U.default, D.default, j.default, A.default, N.default, x.default, h.default, b.default], e => {
  let t, s, a, {
    inputSkuId: r,
    applicationId: i,
    storeListingId: n,
    isAuthenticated: l,
    channel: o
  } = e;
  if (null == i) {
    if (null == r) throw Error("Needs applicationId or skuId");
    t = r, null != (i = null != (s = D.default.get(r)) ? s.applicationId : null) && (a = N.default.getApplication(i))
  } else if (null == r) {
    if (null == i) throw Error("Needs applicationId or skuId");
    null != (a = N.default.getApplication(i)) && (t = a.destinationSkuId), s = null != t ? D.default.get(t) : null
  }(null == s ? void 0 : s.flags) != null && (0, V.hasFlag)(s.flags, eo.SKUFlags.STICKER_PACK) && (s = null);
  let u = null != i && (j.default.inTestModeForApplication(i) || A.default.inDevModeForApplication(i));
  return {
    skuId: t,
    application: null != i ? N.default.getApplication(i) : null,
    isFetchingEntitlements: null != i && b.default.applicationIdsFetching.has(i),
    didFetchEntitlements: null != i && b.default.applicationIdsFetched.has(i),
    shouldFetchStatistics: l && null != i && x.default.shouldFetchStatisticsForApplication(i),
    sku: s,
    isFocused: y.default.isFocused(),
    storeListing: U.default.getStoreListing({
      storeListingId: n,
      skuId: t,
      channelId: null != o ? o.id : null,
      isTestMode: u
    }),
    isInTestMode: null != i && u,
    matureAgree: v.default.didMatureAgree,
    theme: M.default.theme,
    locale: O.default.locale,
    guild: null != o ? h.default.getGuild(o.getGuildId()) : null
  }
})(eE)))