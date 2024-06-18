"use strict";
n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(581051),
  o = n(353381),
  a = n(993365),
  l = n(481060),
  u = n(240991),
  _ = n(810090),
  d = n(283442),
  c = n(783097),
  E = n(591204),
  I = n(689938),
  T = n(113046),
  h = n(946278);

function S(e) {
  var t;
  let {
    channel: n,
    application: r,
    videoUrl: s,
    imageCoverUrl: o,
    sectionName: l
  } = e, u = null != s || null != o, d = (null !== (t = r.description) && void 0 !== t ? t : "").length > 0;
  return (0, i.jsxs)("div", {
    className: T.container,
    children: [(0, i.jsx)(f, {
      channel: n,
      application: r,
      sectionName: l
    }), u || d ? (0, i.jsxs)("div", {
      className: T.profileAndVideoContainer,
      children: [u ? (0, i.jsx)("div", {
        className: T.videoContainer,
        children: (0, i.jsx)(_.Z, {
          loop: !0,
          autoPlay: !0,
          muted: !0,
          className: d ? T.videoWithOverview : T.videoNoOverview,
          src: s,
          poster: o
        })
      }) : null, d ? (0, i.jsxs)("div", {
        className: u ? T.overviewContainerWithVideo : T.overviewContainerNoVideo,
        children: [(0, i.jsx)(a.x, {
          variant: "text-sm/semibold",
          children: I.Z.Messages.OVERVIEW
        }), (0, i.jsx)(N, {
          application: r
        })]
      }) : null]
    }) : null]
  })
}

function f(e) {
  let {
    channel: t,
    application: n,
    sectionName: r
  } = e, s = (0, c.ye)({
    application: n
  }), o = t.isThread(), a = (0, d.Z)({
    applicationId: n.id,
    channel: t
  });
  return (0, i.jsx)("div", {
    className: T.titleContainer,
    children: (0, i.jsxs)("div", {
      className: T.titleInnerContainer,
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-xl/extrabold",
        children: n.name
      }), s ? (0, i.jsx)(E.Z, {
        channel: t,
        application: n,
        disabled: o,
        sectionName: r,
        commandName: a
      }) : null]
    })
  })
}

function N(e) {
  let {
    application: t
  } = e, [n, _] = r.useState(!1), d = r.useMemo(() => {
    var e;
    return (0, u.YP)(null !== (e = t.description) && void 0 !== e ? e : "")
  }, [t]), {
    ref: c,
    lineCount: E
  } = function() {
    let e = r.useRef(null),
      [t, n] = r.useState(null);
    return r.useEffect(() => {
      let t = e.current;
      if (null === t || 0 === t.clientHeight) return;
      let i = parseInt(getComputedStyle(t).lineHeight);
      if (!isNaN(i)) n(Math.max(Math.floor(t.clientHeight / i)))
    }, []), {
      ref: e,
      lineCount: t
    }
  }();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.x, {
      ref: c,
      className: h.markup,
      variant: "text-sm/medium",
      lineClamp: n ? void 0 : 3,
      children: d
    }), null != E && E >= 3 ? (0, i.jsxs)(l.Clickable, {
      className: T.expandableDescriptionClickable,
      onClick: () => {
        _(e => !e)
      },
      children: [(0, i.jsx)(a.x, {
        ref: c,
        variant: "text-sm/semibold",
        color: "text-brand",
        children: n ? I.Z.Messages.APP_LAUNCHER_SHOW_LESS : I.Z.Messages.APP_LAUNCHER_SHOW_MORE
      }), n ? (0, i.jsx)(o.u, {
        width: 18,
        height: 18,
        color: l.tokens.colors.TEXT_BRAND
      }) : (0, i.jsx)(s.C, {
        width: 18,
        height: 18,
        color: l.tokens.colors.TEXT_BRAND
      })]
    }) : null]
  })
}