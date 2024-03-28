"use strict";
a.r(s), a.d(s, {
  default: function() {
    return y
  }
}), a("47120");
var t, l, n = a("735250"),
  r = a("470079"),
  i = a("803997"),
  o = a.n(i),
  c = a("525654"),
  d = a.n(c),
  u = a("873546"),
  f = a("213919"),
  p = a("442837"),
  m = a("481060"),
  x = a("391650"),
  g = a("314897"),
  O = a("594174"),
  D = a("153124"),
  h = a("626135"),
  v = a("361207"),
  N = a("792125"),
  A = a("981631"),
  j = a("689938"),
  L = a("471007");
(l = t || (t = {}))[l.OSX = 0] = "OSX", l[l.WINDOWS = 1] = "WINDOWS", l[l.LINUX = 2] = "LINUX", l[l.IOS = 3] = "IOS", l[l.ANDROID = 4] = "ANDROID";
let b = [{
    getOs: () => j.default.Messages.PLATFORM_MACOS,
    icon: L.apple,
    url: () => (0, v.makeDesktopDownloadURL)("osx", !1),
    platformKey: 0
  }, {
    getOs: () => j.default.Messages.PLATFORM_WINDOWS,
    icon: L.windows,
    url: () => (0, v.makeDesktopDownloadURL)("win", !1),
    platformKey: 1
  }, {
    getOs: () => j.default.Messages.PLATFORM_LINUX,
    icon: L.linux,
    url: [{
      url: () => (0, v.makeDesktopDownloadURL)("linux", !1, "deb"),
      getText: () => j.default.Messages.DEB
    }, {
      url: () => (0, v.makeDesktopDownloadURL)("linux", !1, "tar.gz"),
      getText: () => j.default.Messages.TAR_GZ
    }],
    platformKey: 2
  }],
  M = [{
    getOs: () => j.default.Messages.PLATFORM_IOS,
    icon: L.ios,
    url: () => A.DownloadLinks.IOS,
    platformKey: 3
  }, {
    getOs: () => j.default.Messages.PLATFORM_ANDROID,
    icon: L.android,
    url: () => A.DownloadLinks.ANDROID,
    platformKey: 4
  }],
  k = (0, N.getThemeClass)(A.ThemeTypes.LIGHT),
  S = e => {
    let {
      url: s,
      text: a,
      onClick: t
    } = e;
    return (0, n.jsx)(m.Anchor, {
      useDefaultUnderlineStyles: !1,
      href: s,
      className: L.downloadButton,
      onClick: t,
      children: a
    })
  },
  T = e => {
    let s, {
        platform: a,
        onClick: t,
        onMouseEnter: l,
        isActive: r,
        claimed: i
      } = e,
      {
        getOs: c,
        icon: d,
        url: u,
        platformKey: f
      } = a,
      p = c(),
      x = o()(L.icon, d);
    if (Array.isArray(u)) s = u.map((e, s) => {
      let a = i ? e.url() : "";
      return (0, n.jsx)(S, {
        url: a,
        onClick: () => t(p),
        text: e.getText()
      }, "".concat(a, "-").concat(s))
    });
    else {
      let e = i ? u() : void 0;
      s = (0, n.jsx)(S, {
        url: e,
        onClick: () => t(p),
        text: j.default.Messages.DOWNLOAD
      })
    }
    return (0, n.jsx)("li", {
      className: o()(L.platform, {
        [L.active]: r
      }),
      onMouseEnter: () => l(f),
      children: (0, n.jsxs)("div", {
        className: L.contentWrapper,
        children: [(0, n.jsxs)("div", {
          className: L.iconWrap,
          children: [(0, n.jsx)("div", {
            className: x
          }), (0, n.jsx)("div", {
            className: o()(L.active, x)
          })]
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(m.Heading, {
            className: L.platformName,
            variant: "heading-lg/semibold",
            children: p
          }), (0, n.jsx)("div", {
            className: o()(L.downloadButtons, {
              [L.list]: Array.isArray(s)
            }),
            children: s
          })]
        })]
      })
    })
  };

function y(e) {
  let {
    source: s,
    onClose: a,
    transitionState: t
  } = e, l = (0, p.useStateFromStores)([O.default], () => O.default.getCurrentUser()), i = (0, p.useStateFromStores)([g.default], () => g.default.getFingerprint()), c = null == l || l.isClaimed(), [v, N] = r.useState(function() {
    var e;
    switch (null === (e = d().os) || void 0 === e ? void 0 : e.family) {
      case "OS X":
        return 0;
      case "Windows":
        return 1;
      case "Ubuntu":
      case "Debian":
      case "Fedora":
      case "Red Hat":
      case "SuSE":
      case "Linux":
        return 2;
      case "iOS":
        return 3;
      case "Android":
        return 4;
      default:
        return
    }
  }());

  function S(e) {
    (null != f.getToken() || null != i) && h.default.track(A.AnalyticEvents.DOWNLOAD_APP, {
      platform: e,
      ptb: !1,
      released: !0,
      has_e_mail: c,
      referring_location: s,
      qr_code: !1
    }), !c && (a(), x.openClaimAccountModal())
  }

  function y(e) {
    N(e)
  }
  r.useEffect(() => {
    h.default.track(A.AnalyticEvents.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: s
      }
    })
  }, [s]);
  let _ = (0, D.useUID)();
  return (0, n.jsx)(m.ModalRoot, {
    className: o()(L.downloadApps, k),
    transitionState: t,
    "aria-labelledby": _,
    children: (0, n.jsx)("div", {
      className: L.inner,
      children: (0, n.jsxs)(m.HeadingLevel, {
        component: (0, n.jsx)(m.HiddenVisually, {
          children: (0, n.jsx)(m.H, {
            id: _,
            children: j.default.Messages.DOWNLOAD_APP
          })
        }),
        children: [(0, n.jsx)(m.ModalCloseButton, {
          onClick: a,
          className: L.modalCloseButton
        }), !u.isMobile && (0, n.jsx)("div", {
          className: L.platformsWrap,
          children: (0, n.jsx)(m.HeadingLevel, {
            component: (0, n.jsx)(m.Heading, {
              variant: "heading-lg/semibold",
              className: L.header,
              children: j.default.Messages.DOWNLOAD_DESKTOP_TITLE
            }),
            children: (0, n.jsx)("ul", {
              className: L.platforms,
              children: b.map(e => (0, n.jsx)(T, {
                isActive: v === e.platformKey,
                platform: e,
                onClick: S,
                onMouseEnter: y,
                claimed: c
              }, e.platformKey))
            })
          })
        }), (0, n.jsx)("div", {
          className: L.platformsWrap,
          children: (0, n.jsxs)(m.HeadingLevel, {
            component: (0, n.jsx)(n.Fragment, {
              children: !u.isMobile && (0, n.jsx)(m.Heading, {
                variant: "heading-lg/semibold",
                className: L.header,
                children: j.default.Messages.DOWNLOAD_MOBILE_TITLE
              })
            }),
            children: [(0, n.jsx)("ul", {
              className: L.platforms,
              children: M.map(e => (0, n.jsx)(T, {
                isActive: v === e.platformKey,
                platform: e,
                onClick: S,
                onMouseEnter: y,
                claimed: c
              }, e.platformKey))
            }), (0, n.jsx)(m.Text, {
              className: L.footer,
              variant: "text-sm/normal",
              children: j.default.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
            })]
          })
        })]
      })
    })
  })
}