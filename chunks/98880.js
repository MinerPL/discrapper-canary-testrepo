"use strict";
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(481060),
  _ = n(778569),
  d = n(182906),
  c = n(220082),
  E = n(318661),
  I = n(768581),
  T = n(792125),
  h = n(783097),
  S = n(753972),
  f = n(231338),
  N = n(689938),
  A = n(741382);

function m(e) {
  let {
    application: t,
    look: n = "large_banner",
    isPartner: i,
    onClick: r
  } = e, {
    iconURL: a,
    name: _,
    description: d
  } = o.useMemo(() => (0, h.BQ)(t) ? {
    iconURL: I.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: t.bot,
      botIconFirst: !0
    }),
    name: t.name,
    description: t.description
  } : {
    iconURL: null,
    name: N.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
    description: N.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
  }, [t]), E = (0, c.ZP)(a, "");
  return (0, s.jsxs)(u.Clickable, {
    className: A.container,
    onClick: r,
    children: [(0, s.jsxs)("div", {
      className: l()(A.bannerImageContainer, {
        [A.mediumBanner]: "medium_banner" === n,
        [A.largeBanner]: "large_banner" === n
      }),
      children: [(0, s.jsx)(O, {
        application: t,
        fallbackColor: E
      }), i && (0, s.jsx)("div", {
        className: A.partnerLabelWrapper,
        children: (0, s.jsx)(u.Text, {
          className: (0, T.Q)(f.BR.DARK),
          variant: "text-sm/medium",
          color: "text-normal",
          children: N.Z.Messages.APP_DIRECTORY_PARTNER
        })
      })]
    }), (0, s.jsxs)("div", {
      className: A.appDetailsContainer,
      children: [null != a && (0, s.jsx)(S.Z, {
        src: a,
        className: A.icon,
        "aria-hidden": !0
      }), (0, s.jsxs)("div", {
        className: A.appDetails,
        children: [(0, s.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: _
        }), (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: d
        })]
      })]
    })]
  })
}

function O(e) {
  let {
    application: t,
    fallbackColor: n
  } = e;
  if ((0, h.BQ)(t)) {
    if ((0, h.ye)({
        application: t
      })) return (0, s.jsx)(R, {
      application: t
    });
    if (null != t.bot) return (0, s.jsx)(C, {
      bot: t.bot
    })
  }
  return (0, s.jsx)("div", {
    className: A.bannerImage,
    style: {
      backgroundColor: n
    }
  })
}

function R(e) {
  let {
    application: t
  } = e, n = (0, _.Z)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  });
  return (0, s.jsx)(d.Z, {
    imageBackground: n,
    applicationName: t.name,
    imageClassName: A.bannerImage,
    imageNotFoundClassName: A.bannerImage
  })
}

function C(e) {
  let {
    bot: t
  } = e, n = (0, E.ZP)(t.id), i = o.useMemo(() => null == n ? void 0 : n.getBannerURL({
    canAnimate: !1,
    size: 600
  }), [n]);
  return (0, s.jsx)("img", {
    src: i,
    alt: "",
    className: A.bannerImage
  })
}(i = r || (r = {})).NO_BANNER = "no_banner", i.MEDIUM_BANNER = "medium_banner", i.LARGE_BANNER = "large_banner", t.Z = m, m.Looks = r