"use strict";
n.r(t), n.d(t, {
  StoreEmbedWithoutDimensions: function() {
    return D
  }
}), n("47120"), n("411104");
var s, a = n("735250"),
  l = n("470079"),
  i = n("613828"),
  r = n("442837"),
  o = n("481060"),
  u = n("558381"),
  d = n("410575"),
  c = n("498179"),
  f = n("86357"),
  E = n("914602"),
  _ = n("568836"),
  T = n("730749"),
  m = n("112724"),
  I = n("812206"),
  p = n("283595"),
  h = n("558314"),
  N = n("55563"),
  S = n("551428"),
  C = n("73346"),
  A = n("981631"),
  g = n("689938"),
  M = n("179856");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class O extends(s = l.Component) {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      },
      analyticsSection: t
    } = this.props;
    return {
      ...e,
      section: null != t ? t : A.AnalyticsSections.APPLICATION_EMBED,
      object: A.AnalyticsObjects.CARD
    }
  }
  componentDidMount() {
    let {
      sku: e,
      skuId: t,
      storeListing: n
    } = this.props;
    (null == e || null == n) && (0, u.fetchStoreListingForSku)(t)
  }
  renderViewInStoreButton() {
    return (0, a.jsx)(o.Button.Link, {
      to: this.getStoreListingLocation(),
      className: M.actionButton,
      color: o.Button.Colors.GREEN,
      size: o.Button.Sizes.SMALL,
      children: g.default.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE
    })
  }
  render() {
    let {
      sku: e,
      storeListing: t,
      width: n,
      fetchFailed: s,
      renderFallback: l
    } = this.props, r = n > _.HORIZONTAL_EMBED_BREAKPOINT;
    if (null == e || null == t) return s ? l() : (0, a.jsx)(_.ResponsiveLoadingEmbedTile, {
      isHorizontal: r
    });
    return e.productLine === A.SKUProductLines.COLLECTIBLES ? (0, a.jsx)(d.default, {
      section: A.AnalyticsSections.APPLICATION_EMBED,
      children: this.renderApplicationTile(e, t)
    }) : (0, a.jsx)(d.default, {
      section: A.AnalyticsSections.APPLICATION_EMBED,
      children: (0, a.jsx)(i.Link, {
        onClick: this.handleLinkClick,
        to: this.getStoreListingLocation(),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: this.renderApplicationTile(e, t)
      })
    })
  }
  constructor(...e) {
    super(...e), R(this, "state", {
      playing: !1,
      muted: !0
    }), R(this, "handleToggleMute", () => {
      this.setState({
        muted: !this.state.muted
      })
    }), R(this, "handleMouseEnter", () => {
      this.setState({
        playing: !0
      })
    }), R(this, "handleMouseLeave", () => {
      this.setState({
        playing: !1
      })
    }), R(this, "getStoreListingLocation", () => {
      let {
        sku: e
      } = this.props;
      if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
      return (0, C.getStoreListingLocation)(e.id, {
        slug: e.slug,
        analyticsSource: this.analyticsLocation
      })
    }), R(this, "handleActionButtonClick", e => e.preventDefault()), R(this, "handleBuyButtonClick", e => e.preventDefault()), R(this, "handleLinkClick", e => {
      let {
        onEmbedClick: t
      } = this.props;
      null != t && t(e)
    }), R(this, "renderApplicationTile", (e, t) => {
      let {
        inLibrary: n,
        width: s,
        renderCustomTitle: l,
        renderCustomTagline: i,
        renderCustomMedia: r
      } = this.props, {
        playing: o,
        muted: u
      } = this.state, d = s > _.HORIZONTAL_EMBED_BREAKPOINT;
      return (0, a.jsx)(E.default, {
        sku: e,
        storeListing: t,
        playing: o,
        muted: u,
        inLibrary: n,
        onToggleMute: this.handleToggleMute,
        renderCustomActions: () => this.renderActions(e),
        renderCustomTitle: l,
        renderCustomTagline: i,
        renderCustomMedia: r,
        isHorizontal: d,
        isEmbed: !0
      })
    }), R(this, "renderActions", e => {
      let {
        inLibrary: t,
        application: n,
        skuId: s,
        libraryApplication: l,
        renderCustomActions: i
      } = this.props;
      if (null != i) return (0, a.jsx)("div", {
        className: M.tileActions,
        children: i()
      });
      if (null == n) return null;
      let r = null != n && n.primarySkuId === s,
        u = null != l && l.hasFlag(A.LibraryApplicationFlags.HIDDEN);
      return (0, a.jsxs)("div", {
        className: M.tileActions,
        children: [!r || u ? this.renderViewInStoreButton() : (0, a.jsx)(c.default, {
          application: n,
          customDisabledColor: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          className: M.actionButton,
          source: A.AnalyticsLocations.MESSAGE_EMBED,
          onClick: this.handleActionButtonClick
        }), t && !u || e.premium ? null : (0, a.jsx)(f.default, {
          type: f.default.Types.EMBED,
          sku: e,
          inLibrary: !1
        })]
      })
    })
  }
}
R(O, "defaultProps", {
  renderFallback: A.NOOP
});
let v = [N.default, h.default, p.default, S.default];

function L(e) {
  let {
    skuId: t
  } = e, n = N.default.get(t), s = null != n ? I.default.getApplication(n.applicationId) : null;
  return {
    sku: n,
    application: s,
    fetchFailed: N.default.didFetchingSkuFail(t),
    inLibrary: null != n && p.default.hasApplication(n.applicationId, n.applicationId, !0),
    storeListing: null != n ? S.default.getForSKU(n.id) : null,
    libraryApplication: null != n ? p.default.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
  }
}
let x = (0, m.default)((0, T.default)(O));
t.default = r.default.connectStores(v, L)(x);
let D = (0, T.default)(r.default.connectStores(v, L)(O))