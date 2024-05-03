"use strict";
a.r(t), a("47120"), a("411104");
var l = a("735250"),
  s = a("470079"),
  n = a("442837"),
  i = a("481060"),
  r = a("570140"),
  d = a("57513"),
  u = a("689241"),
  c = a("447273"),
  o = a("51025"),
  h = a("672971"),
  p = a("812206"),
  I = a("703656"),
  f = a("173747"),
  A = a("850840"),
  L = a("391690"),
  T = a("285952"),
  _ = a("366695"),
  N = a("424218"),
  m = a("94692"),
  E = a("981631"),
  P = a("689938"),
  C = a("22877");

function S(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class g extends s.Component {
  fetchInstallSize() {
    let {
      applicationId: e,
      branchId: t,
      buildId: a,
      manifestIds: l,
      buildSizeKB: s
    } = this.props;
    null != a && null != l && null == s && r.default.wait(() => {
      (0, u.fetchBuildSize)(e, t, a, l)
    })
  }
  componentDidMount() {
    let {
      applicationId: e,
      branchId: t,
      buildId: a,
      manifestIds: l
    } = this.props;
    null == a || null == l ? (0, d.fetchLiveBuild)(e, t) : this.fetchInstallSize()
  }
  componentDidUpdate(e) {
    (this.props.buildId !== e.buildId || this.props.manifestIds !== e.manifestIds) && this.fetchInstallSize()
  }
  componentWillUnmount() {
    this.isUnmounted = !0
  }
  renderButton() {
    let {
      buildId: e
    } = this.props, {
      hasError: t,
      hasAcceptedNeccessaryTerms: a
    } = this.state;
    return (0, l.jsx)(i.Button, {
      disabled: t || null == e || !a,
      color: i.Button.Colors.GREEN,
      onClick: this.handleInstall,
      children: P.default.Messages.GAME_ACTION_BUTTON_INSTALL
    })
  }
  render() {
    let {
      application: e,
      buildSizeKB: t,
      transitionState: a
    } = this.props, {
      selectedInstallationPath: s,
      isInstalling: n
    } = this.state, r = null != e && e.getSplashURL(440);
    return (0, l.jsxs)(i.ModalRoot, {
      transitionState: a,
      size: i.ModalSize.SMALL,
      "aria-label": P.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
      children: [null != r ? (0, l.jsx)("div", {
        className: C.splash,
        style: {
          backgroundImage: "url(".concat(r, ")")
        }
      }) : null, (0, l.jsxs)(i.ModalHeader, {
        justify: T.default.Justify.BETWEEN,
        children: [(0, l.jsx)(T.default.Child, {
          grow: 1,
          children: (0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            children: P.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE
          })
        }), (0, l.jsx)(T.default.Child, {
          grow: 0,
          children: (0, l.jsx)(i.ModalCloseButton, {
            onClick: this.close
          })
        })]
      }), (0, l.jsxs)(i.ModalContent, {
        children: [(0, l.jsxs)(T.default, {
          align: T.default.Align.CENTER,
          children: [(0, l.jsx)(_.default, {
            game: e,
            size: _.default.Sizes.MEDIUM,
            className: C.gameIcon
          }), (0, l.jsx)("div", {
            className: C.gameName,
            children: null != e && e.name
          }), null != t ? (0, l.jsx)("div", {
            className: C.installSize,
            children: (0, N.formatSize)(t, {
              useKibibytes: !0
            })
          }) : null]
        }), (0, l.jsx)("div", {
          className: C.divider
        }), (0, l.jsx)(m.default, {
          autoFocus: !0,
          className: C.selector,
          value: s,
          requiredDiskKB: t,
          onChange: this.handleChangePath
        }), (0, l.jsx)(h.default, {
          eulaId: e.eulaId,
          applicationName: e.name,
          disabled: n,
          onChange: this.handlePurchaseTermsChange,
          className: C.terms
        })]
      }), (0, l.jsx)(i.ModalFooter, {
        children: this.renderButton()
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      selectedInstallationPath: this.props.defaultInstallationPath,
      hasError: !1,
      isInstalling: !1,
      hasAcceptedNeccessaryTerms: !1
    }), S(this, "isUnmounted", !1), S(this, "handleChangePath", (e, t) => {
      this.setState({
        selectedInstallationPath: e,
        hasError: t
      })
    }), S(this, "install", (e, t) => {
      let {
        application: a,
        branchId: l,
        analyticsLocation: s
      } = this.props;
      if (null == a) return null;
      (0, o.installApplication)({
        application: a,
        branchId: l,
        buildId: e,
        manifestIds: t,
        installationPath: this.state.selectedInstallationPath,
        analyticsLocation: s
      }), (0, I.transitionTo)(E.Routes.APPLICATION_LIBRARY), this.close()
    }), S(this, "handleInstall", () => {
      let {
        application: e,
        buildId: t,
        manifestIds: a,
        hasPreviouslyAcceptedStoreTerms: l
      } = this.props;
      if (null != t && null != a) !l && (0, c.acceptPurchaseTerms)(), null != e && null != e.eulaId && (0, c.acceptEULA)(e.eulaId), this.install(t, a);
      else throw Error("Unexpected missing build info for non-premium product")
    }), S(this, "handlePurchaseTermsChange", e => {
      this.setState({
        hasAcceptedNeccessaryTerms: e
      })
    }), S(this, "close", () => {
      this.props.onClose()
    })
  }
}
t.default = n.default.connectStores([f.default, L.default, A.default, p.default], e => {
  let {
    applicationId: t,
    branchId: a
  } = e, l = f.default.getTargetBuildId(t, a);
  return {
    application: p.default.getApplication(t),
    defaultInstallationPath: L.default.defaultInstallationPath,
    buildId: l,
    manifestIds: f.default.getTargetManifests(t, a),
    buildSizeKB: null != l ? f.default.getBuildSize(l) : null,
    hasPreviouslyAcceptedStoreTerms: A.default.hasAcceptedStoreTerms
  }
})(g)