"use strict";
a.r(t), a("47120");
var s = a("735250"),
  l = a("470079"),
  n = a("442837"),
  r = a("481060"),
  i = a("570140"),
  u = a("57513"),
  d = a("689241"),
  o = a("447273"),
  h = a("51025"),
  c = a("230711"),
  I = a("672971"),
  A = a("94692"),
  T = a("703656"),
  f = a("283595"),
  p = a("173747"),
  _ = a("850840"),
  P = a("391690"),
  O = a("285952"),
  N = a("366695"),
  C = a("976644"),
  L = a("814225"),
  S = a("73346"),
  E = a("981631"),
  R = a("689938"),
  m = a("905475");

function g(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let M = () => [R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_1, R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_2, R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_3, R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_4];
class U extends l.Component {
  fetchInstallSize() {
    let {
      application: e,
      branchId: t,
      buildId: a,
      manifestIds: s,
      buildSizeKB: l
    } = this.props;
    null != a && null != s && null == l && i.default.wait(() => {
      (0, d.fetchBuildSize)(e.id, t, a, s)
    })
  }
  componentDidMount() {
    let {
      application: e,
      branchId: t,
      buildId: a,
      manifestIds: s,
      sku: l,
      isIAP: n
    } = this.props;
    !n && (0, L.canUserInstall)(l) && (null == a || null == s ? i.default.wait(() => (0, u.fetchLiveBuild)(e.id, t)) : this.fetchInstallSize())
  }
  componentDidUpdate(e) {
    (this.props.buildId !== e.buildId || this.props.manifestIds !== e.manifestIds) && this.fetchInstallSize()
  }
  getHeaderBlurb() {
    let {
      sku: e,
      application: t,
      isIAP: a
    } = this.props;
    if (e.isPreorder() && null != e.preorderReleaseAt) return R.default.Messages.APPLICATION_STORE_PREORDER_PURCHASE_CONFIRMATION_BLURB.format({
      applicationName: t.name,
      date: e.preorderReleaseAt.format("MMMM DD")
    });
    if (a || [E.SKUTypes.DURABLE, E.SKUTypes.CONSUMABLE].includes(e.type)) return R.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
      applicationName: t.name,
      itemName: e.name
    });
    if (e.type === E.SKUTypes.BUNDLE) return R.default.Messages.APPLICATION_STORE_BUNDLE_PURCHASE_CONFIRMATION_BLURB.format({
      name: e.name
    });
    let s = e.supportedOperatingSystems[0];
    return R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_UNSUPPORTED_OS.format({
      name: t.name,
      operatingSystem: (0, S.skuOperatingSystemToText)(s)
    })
  }
  renderInstallationHeader() {
    let {
      application: e
    } = this.props;
    return (0, s.jsx)("div", {
      className: m.blurb,
      children: R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_BLURB.format({
        name: e.name
      })
    })
  }
  renderInstallationBody() {
    let {
      isFetchingBuild: e,
      buildId: t,
      buildSizeKB: a,
      application: n
    } = this.props, {
      installPath: i,
      hasInstallPathError: u,
      hasAcceptedNeccessaryTerms: d
    } = this.state;
    return (0, s.jsxs)(l.Fragment, {
      children: [(0, s.jsx)(A.default, {
        className: m.installSelector,
        value: i,
        requiredDiskKB: a,
        onChange: this.handleInstallPathChange
      }), (0, s.jsx)(I.default, {
        eulaId: n.eulaId,
        applicationName: n.name,
        onChange: this.handlePurchaseTermsChange,
        className: m.storeTerms
      }), (0, s.jsx)(C.default, {
        className: m.confirmButton,
        disabled: u || null == t || !d,
        onClick: this.handleInstall,
        submitting: e,
        color: r.Button.Colors.GREEN,
        children: R.default.Messages.APPLICATION_STORE_PURCHASE_INSTALL_GAME
      })]
    })
  }
  renderGenericHeader() {
    return (0, s.jsx)("div", {
      className: m.blurb,
      children: this.getHeaderBlurb()
    })
  }
  renderBlurbBody() {
    let e;
    let {
      isIAP: t,
      sku: a,
      onClose: n
    } = this.props, i = n;
    return a.isPreorder() ? (e = R.default.Messages.APPLICATION_PREORDER_PURCHASE_CONFIRMATION_BUTTON, i = this.handleGoToLibrary) : e = t ? R.default.Messages.APPLICATION_IAP_PURCHASE_RETURN_TO_GAME : R.default.Messages.OKAY, (0, s.jsx)(l.Fragment, {
      children: (0, s.jsx)(r.Button, {
        className: m.confirmButton,
        onClick: i,
        children: e
      })
    })
  }
  renderBlurb() {
    let {
      sku: e,
      isIAP: t
    } = this.props;
    return t || !(0, L.canUserInstall)(e) || e.isPreorder() ? this.renderGenericHeader() : this.renderInstallationHeader()
  }
  renderBody() {
    let {
      sku: e,
      isIAP: t
    } = this.props;
    return t || !(0, L.canUserInstall)(e) || e.isPreorder() ? this.renderBlurbBody() : this.renderInstallationBody()
  }
  render() {
    let {
      application: e
    } = this.props, {
      confirmHeaderIndex: t
    } = this.state;
    return (0, s.jsxs)(O.default, {
      direction: O.default.Direction.VERTICAL,
      align: O.default.Align.CENTER,
      children: [(0, s.jsx)(N.default, {
        game: e,
        className: m.icon,
        size: N.default.Sizes.LARGE
      }), (0, s.jsx)("div", {
        className: m.header,
        children: M()[t]
      }), this.renderBlurb(), (0, s.jsx)("div", {
        className: m.divider
      }), this.renderBody()]
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      confirmHeaderIndex: Math.floor(Math.random() * M().length),
      installPath: this.props.defaultInstallationPath,
      hasInstallPathError: !1,
      hasAcceptedNeccessaryTerms: !1
    }), g(this, "handleInstallPathChange", (e, t) => {
      this.setState({
        installPath: e,
        hasInstallPathError: t
      })
    }), g(this, "handleInventoryClick", () => {
      c.default.open(E.UserSettingsSections.INVENTORY), this.props.onClose()
    }), g(this, "handleGoToLibrary", () => {
      (0, T.transitionTo)(E.Routes.APPLICATION_LIBRARY), this.props.onClose()
    }), g(this, "handleInstall", () => {
      let {
        application: e,
        branchId: t,
        buildId: a,
        hasPreviouslyAcceptedStoreTerms: s,
        manifestIds: l,
        onClose: n
      } = this.props, {
        installPath: r,
        hasInstallPathError: i
      } = this.state;
      !s && (0, o.acceptPurchaseTerms)(), null != e.eulaId && (0, o.acceptEULA)(e.eulaId), !i && null != a && null != l && (h.installApplication({
        application: e,
        branchId: t,
        buildId: a,
        manifestIds: l,
        installationPath: r,
        analyticsLocation: E.AnalyticsLocations.APPLICATION_STORE_PAYMENT_MODAL
      }), n(), (0, T.transitionTo)(E.Routes.APPLICATION_LIBRARY))
    }), g(this, "handlePurchaseTermsChange", e => {
      this.setState({
        hasAcceptedNeccessaryTerms: e
      })
    })
  }
}
t.default = n.default.connectStores([P.default, p.default, f.default, _.default], e => {
  let t, {
      application: a
    } = e,
    s = f.default.getActiveLibraryApplication(a.id);
  t = null != s ? s.id : a.id;
  let l = p.default.getTargetBuildId(a.id, t);
  return {
    defaultInstallationPath: P.default.defaultInstallationPath,
    branchId: t,
    isFetchingBuild: p.default.isFetching(a.id, t),
    buildId: l,
    manifestIds: p.default.getTargetManifests(a.id, t),
    buildSizeKB: null != l ? p.default.getBuildSize(l) : null,
    hasPreviouslyAcceptedStoreTerms: _.default.hasAcceptedStoreTerms
  }
})(U)