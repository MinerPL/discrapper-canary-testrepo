"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var s, a, l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("597755"),
  d = n.n(u),
  c = n("394846"),
  E = n("171718"),
  f = n("446674"),
  _ = n("77078"),
  T = n("774146"),
  I = n("271938"),
  m = n("697218"),
  N = n("476765"),
  p = n("599110"),
  S = n("98013"),
  A = n("439932"),
  C = n("49111"),
  h = n("782340"),
  g = n("847674");
(a = s || (s = {}))[a.OSX = 0] = "OSX", a[a.WINDOWS = 1] = "WINDOWS", a[a.LINUX = 2] = "LINUX", a[a.IOS = 3] = "IOS", a[a.ANDROID = 4] = "ANDROID";
let M = [{
    getOs: () => h.default.Messages.PLATFORM_MACOS,
    icon: g.apple,
    url: () => (0, S.makeDesktopDownloadURL)("osx", !1),
    platformKey: 0
  }, {
    getOs: () => h.default.Messages.PLATFORM_WINDOWS,
    icon: g.windows,
    url: () => (0, S.makeDesktopDownloadURL)("win", !1),
    platformKey: 1
  }, {
    getOs: () => h.default.Messages.PLATFORM_LINUX,
    icon: g.linux,
    url: [{
      url: () => (0, S.makeDesktopDownloadURL)("linux", !1, "deb"),
      getText: () => h.default.Messages.DEB
    }, {
      url: () => (0, S.makeDesktopDownloadURL)("linux", !1, "tar.gz"),
      getText: () => h.default.Messages.TAR_GZ
    }],
    platformKey: 2
  }],
  O = [{
    getOs: () => h.default.Messages.PLATFORM_IOS,
    icon: g.ios,
    url: () => C.DownloadLinks.IOS,
    platformKey: 3
  }, {
    getOs: () => h.default.Messages.PLATFORM_ANDROID,
    icon: g.android,
    url: () => C.DownloadLinks.ANDROID,
    platformKey: 4
  }],
  R = (0, A.getThemeClass)(C.ThemeTypes.LIGHT),
  L = e => {
    let {
      url: t,
      text: n,
      onClick: s
    } = e;
    return (0, l.jsx)(_.Anchor, {
      useDefaultUnderlineStyles: !1,
      href: t,
      className: g.downloadButton,
      onClick: s,
      children: n
    })
  },
  v = e => {
    let t, {
        platform: n,
        onClick: s,
        onMouseEnter: a,
        isActive: i,
        claimed: r
      } = e,
      {
        getOs: u,
        icon: d,
        url: c,
        platformKey: E
      } = n,
      f = u(),
      T = o(g.icon, d);
    if (Array.isArray(c)) t = c.map((e, t) => {
      let n = r ? e.url() : "";
      return (0, l.jsx)(L, {
        url: n,
        onClick: () => s(f),
        text: e.getText()
      }, "".concat(n, "-").concat(t))
    });
    else {
      let e = r ? c() : void 0;
      t = (0, l.jsx)(L, {
        url: e,
        onClick: () => s(f),
        text: h.default.Messages.DOWNLOAD
      })
    }
    return (0, l.jsx)("li", {
      className: o(g.platform, {
        [g.active]: i
      }),
      onMouseEnter: () => a(E),
      children: (0, l.jsxs)("div", {
        className: g.contentWrapper,
        children: [(0, l.jsxs)("div", {
          className: g.iconWrap,
          children: [(0, l.jsx)("div", {
            className: T
          }), (0, l.jsx)("div", {
            className: o(g.active, T)
          })]
        }), (0, l.jsxs)("div", {
          children: [(0, l.jsx)(_.Heading, {
            className: g.platformName,
            variant: "heading-lg/semibold",
            children: f
          }), (0, l.jsx)("div", {
            className: o(g.downloadButtons, {
              [g.list]: Array.isArray(t)
            }),
            children: t
          })]
        })]
      })
    })
  };

function P(e) {
  let {
    source: t,
    onClose: n,
    transitionState: s
  } = e, a = (0, f.useStateFromStores)([m.default], () => m.default.getCurrentUser()), r = (0, f.useStateFromStores)([I.default], () => I.default.getFingerprint()), u = null == a || a.isClaimed(), [S, A] = i.useState(function() {
    var e;
    switch (null === (e = d.os) || void 0 === e ? void 0 : e.family) {
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

  function L(e) {
    (null != E.getToken() || null != r) && p.default.track(C.AnalyticEvents.DOWNLOAD_APP, {
      platform: e,
      ptb: !1,
      released: !0,
      has_e_mail: u,
      referring_location: t,
      qr_code: !1
    }), !u && (n(), T.openClaimAccountModal())
  }

  function P(e) {
    A(e)
  }
  i.useEffect(() => {
    p.default.track(C.AnalyticEvents.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: t
      }
    })
  }, [t]);
  let D = (0, N.useUID)();
  return (0, l.jsx)(_.ModalRoot, {
    className: o(g.downloadApps, R),
    transitionState: s,
    "aria-labelledby": D,
    children: (0, l.jsx)("div", {
      className: g.inner,
      children: (0, l.jsxs)(_.HeadingLevel, {
        component: (0, l.jsx)(_.HiddenVisually, {
          children: (0, l.jsx)(_.H, {
            id: D,
            children: h.default.Messages.DOWNLOAD_APP
          })
        }),
        children: [(0, l.jsx)(_.ModalCloseButton, {
          onClick: n,
          className: g.modalCloseButton
        }), !c.isMobile && (0, l.jsx)("div", {
          className: g.platformsWrap,
          children: (0, l.jsx)(_.HeadingLevel, {
            component: (0, l.jsx)(_.Heading, {
              variant: "heading-lg/semibold",
              className: g.header,
              children: h.default.Messages.DOWNLOAD_DESKTOP_TITLE
            }),
            children: (0, l.jsx)("ul", {
              className: g.platforms,
              children: M.map(e => (0, l.jsx)(v, {
                isActive: S === e.platformKey,
                platform: e,
                onClick: L,
                onMouseEnter: P,
                claimed: u
              }, e.platformKey))
            })
          })
        }), (0, l.jsx)("div", {
          className: g.platformsWrap,
          children: (0, l.jsxs)(_.HeadingLevel, {
            component: (0, l.jsx)(l.Fragment, {
              children: !c.isMobile && (0, l.jsx)(_.Heading, {
                variant: "heading-lg/semibold",
                className: g.header,
                children: h.default.Messages.DOWNLOAD_MOBILE_TITLE
              })
            }),
            children: [(0, l.jsx)("ul", {
              className: g.platforms,
              children: O.map(e => (0, l.jsx)(v, {
                isActive: S === e.platformKey,
                platform: e,
                onClick: L,
                onMouseEnter: P,
                claimed: u
              }, e.platformKey))
            }), (0, l.jsx)(_.Text, {
              className: g.footer,
              variant: "text-sm/normal",
              children: h.default.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
            })]
          })
        })]
      })
    })
  })
}