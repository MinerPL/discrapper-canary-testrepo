"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
}), l("47120"), l("653041"), l("610138"), l("216116"), l("78328"), l("815648");
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
  s = l.n(n),
  r = l("780384"),
  c = l("481060"),
  o = l("794295"),
  d = l("410030"),
  u = l("726542"),
  p = l("757698"),
  _ = l("630641"),
  m = l("626135"),
  f = l("463571"),
  h = l("887706"),
  C = l("214912"),
  g = l("290247"),
  I = l("981631"),
  A = l("689938"),
  E = l("527262");
let v = A.default.getAvailableLocales();

function x(e) {
  var t, l, a;
  let {
    onClick: n,
    url: s,
    children: c
  } = e, o = (0, d.default)(), _ = u.default.getByUrl(s), m = (0, r.isThemeDark)(o) ? null == _ ? void 0 : null === (t = _.icon) || void 0 === t ? void 0 : t.darkSVG : null == _ ? void 0 : null === (l = _.icon) || void 0 === l ? void 0 : l.lightSVG;
  return (0, i.jsx)(R, {
    icon: void 0 === m ? p.default : void 0,
    imageSrc: m,
    onClick: n,
    url: s,
    type: null !== (a = null == _ ? void 0 : _.name) && void 0 !== a ? a : "website",
    children: c
  })
}

function R(e) {
  let {
    icon: t,
    imageSrc: l,
    iconColor: a,
    url: n,
    type: r,
    children: d,
    onClick: u
  } = e, p = (0, h.default)(), _ = null;
  null != t ? _ = (0, i.jsx)(t, {
    className: E.listIcon,
    color: a,
    width: 20,
    height: 20
  }) : null != l && (_ = (0, i.jsx)("img", {
    className: E.listImage,
    src: l,
    alt: ""
  }));
  let m = (0, i.jsxs)(i.Fragment, {
    children: [_, (0, i.jsx)(c.Text, {
      className: E.listText,
      variant: "text-md/normal",
      selectable: !0,
      children: d
    })]
  });
  return (0, i.jsx)(o.default, {
    href: n,
    className: s()(E.listItem, E.linkItem),
    onClick: () => (u(n, r), !1),
    trusted: !p,
    useDefaultUnderlineStyles: !1,
    children: m
  })
}

function T(e) {
  var t, l, n;
  let {
    application: r,
    guildId: o,
    className: d,
    onViewCategory: u,
    onClickGuildWidget: h
  } = e, [T, N] = a.useState(null), P = [], y = null !== (l = null == r ? void 0 : null === (t = r.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== l ? l : [];
  a.useEffect(() => {
    var e;
    if ((null === (e = r.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
      let e = new Set(r.directory_entry.supported_locales);
      N(v.filter(t => e.has(t.value)).map(e => e.localizedName))
    }
  }, [r.directory_entry]);
  let j = (e, t) => {
    m.default.track(I.AnalyticEvents.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
      application_id: r.id,
      guild_id: o,
      type: t,
      url: e
    })
  };
  return null != r.categories && r.categories.length > 0 && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
    }), (0, i.jsx)("div", {
      className: E.categories,
      children: (null !== (n = r.categories) && void 0 !== n ? n : []).map(e => {
        let t = new URLSearchParams;
        return t.set("category_id", e.id.toString()), (0, i.jsx)(f.default, {
          href: "".concat(I.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(t),
          children: (0, i.jsx)(c.Clickable, {
            className: E.category,
            onClick: () => u(e),
            children: (0, i.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              children: e.name
            })
          })
        }, e.id)
      })
    })]
  })), null != T && T.length > 0 && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
    }), (0, i.jsx)(g.default, {
      supportedLanguages: T
    })]
  })), (null != r.terms_of_service_url || null != r.privacy_policy_url || y.length > 0) && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
    }), y.map((e, t) => (0, i.jsx)(x, {
      url: e.url,
      onClick: j,
      children: e.name
    }, t)), null != r.terms_of_service_url ? (0, i.jsx)(R, {
      icon: p.default,
      onClick: j,
      url: r.terms_of_service_url,
      type: "tos",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
    }) : null, null != r.privacy_policy_url ? (0, i.jsx)(R, {
      icon: _.default,
      onClick: j,
      url: r.privacy_policy_url,
      type: "policy",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
    }) : null]
  })), null != r.guild && r.guild.features.includes(I.GuildFeatures.DISCOVERABLE) && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
    }), (0, i.jsx)(C.default, {
      guild: r.guild,
      onClick: h
    })]
  })), (0, i.jsx)("div", {
    className: s()(E.sidebar, d),
    children: P.length > 0 ? (0, i.jsx)(i.Fragment, {
      children: P.map((e, t) => (0, i.jsx)("div", {
        className: E.section,
        children: e
      }, t))
    }) : null
  })
}