i.d(n, {
  Z: function() {
return b;
  }
}), i(47120), i(653041), i(610138), i(216116), i(78328), i(815648);
var t = i(735250),
  a = i(470079),
  r = i(120356),
  o = i.n(r),
  l = i(780384),
  s = i(481060),
  c = i(794295),
  d = i(410030),
  u = i(726542),
  _ = i(626135),
  p = i(463571),
  m = i(887706),
  I = i(214912),
  f = i(290247),
  g = i(981631),
  h = i(689938),
  C = i(784987);
let v = h.Z.getAvailableLocales();

function E(e) {
  var n, i, a;
  let {
onClick: r,
url: o,
children: c
  } = e, _ = (0, d.ZP)(), p = u.Z.getByUrl(o), m = (0, l.wj)(_) ? null == p ? void 0 : null === (n = p.icon) || void 0 === n ? void 0 : n.darkSVG : null == p ? void 0 : null === (i = p.icon) || void 0 === i ? void 0 : i.lightSVG;
  return (0, t.jsx)(x, {
icon: void 0 === m ? s.LinkIcon : void 0,
imageSrc: m,
onClick: r,
url: o,
type: null !== (a = null == p ? void 0 : p.name) && void 0 !== a ? a : 'website',
children: c
  });
}

function x(e) {
  let {
icon: n,
imageSrc: i,
iconColor: a,
url: r,
type: l,
children: d,
onClick: u
  } = e, _ = (0, m.Z)(), p = null;
  null != n ? p = (0, t.jsx)(n, {
className: C.listIcon,
color: null != a ? a : 'currentColor',
width: 20,
height: 20,
size: 'custom'
  }) : null != i && (p = (0, t.jsx)('img', {
className: C.listImage,
src: i,
alt: ''
  }));
  let I = (0, t.jsxs)(t.Fragment, {
children: [
  p,
  (0, t.jsx)(s.Text, {
    className: C.listText,
    variant: 'text-md/normal',
    selectable: !0,
    children: d
  })
]
  });
  return (0, t.jsx)(c.Z, {
href: r,
className: o()(C.listItem, C.linkItem),
onClick: () => (u(r, l), !1),
trusted: !_,
useDefaultUnderlineStyles: !1,
children: I
  });
}

function b(e) {
  var n, i, r;
  let {
application: l,
guildId: c,
className: d,
onViewCategory: u,
onClickGuildWidget: m
  } = e, [b, A] = a.useState(null), P = [], T = null !== (i = null == l ? void 0 : null === (n = l.directory_entry) || void 0 === n ? void 0 : n.external_urls) && void 0 !== i ? i : [];
  a.useEffect(() => {
var e;
if ((null === (e = l.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
  let e = new Set(l.directory_entry.supported_locales);
  A(v.filter(n => e.has(n.value)).map(e => e.localizedName));
}
  }, [l.directory_entry]);
  let R = (e, n) => {
_.default.track(g.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
  application_id: l.id,
  guild_id: c,
  type: n,
  url: e
});
  };
  return null != l.categories && l.categories.length > 0 && P.push((0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(s.Heading, {
    className: C.sectionHeader,
    variant: 'eyebrow',
    children: h.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
  }),
  (0, t.jsx)('div', {
    className: C.categories,
    children: (null !== (r = l.categories) && void 0 !== r ? r : []).map(e => {
      let n = new URLSearchParams();
      return n.set('category_id', e.id.toString()), (0, t.jsx)(p.Z, {
        href: ''.concat(g.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(n),
        children: (0, t.jsx)(s.Clickable, {
          className: C.category,
          onClick: () => u(e),
          children: (0, t.jsx)(s.Text, {
            variant: 'text-sm/normal',
            color: 'header-primary',
            children: e.name
          })
        })
      }, e.id);
    })
  })
]
  })), null != b && b.length > 0 && P.push((0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(s.Heading, {
    className: C.sectionHeader,
    variant: 'eyebrow',
    children: h.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
  }),
  (0, t.jsx)(f.Z, {
    supportedLanguages: b
  })
]
  })), (null != l.terms_of_service_url || null != l.privacy_policy_url || T.length > 0) && P.push((0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(s.Heading, {
    className: C.sectionHeader,
    variant: 'eyebrow',
    children: h.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
  }),
  T.map((e, n) => (0, t.jsx)(E, {
    url: e.url,
    onClick: R,
    children: e.name
  }, n)),
  null != l.terms_of_service_url ? (0, t.jsx)(x, {
    icon: s.LinkIcon,
    onClick: R,
    url: l.terms_of_service_url,
    type: 'tos',
    children: h.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
  }) : null,
  null != l.privacy_policy_url ? (0, t.jsx)(x, {
    icon: s.LockIcon,
    onClick: R,
    url: l.privacy_policy_url,
    type: 'policy',
    children: h.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
  }) : null
]
  })), null != l.guild && l.guild.features.includes(g.oNc.DISCOVERABLE) && P.push((0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(s.Heading, {
    className: C.sectionHeader,
    variant: 'eyebrow',
    children: h.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
  }),
  (0, t.jsx)(I.Z, {
    guild: l.guild,
    onClick: m
  })
]
  })), (0, t.jsx)('div', {
className: o()(C.sidebar, d),
children: P.length > 0 ? (0, t.jsx)(t.Fragment, {
  children: P.map((e, n) => (0, t.jsx)('div', {
    className: C.section,
    children: e
  }, n))
}) : null
  });
}