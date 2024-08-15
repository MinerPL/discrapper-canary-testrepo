n.r(t), n.d(t, {
  goHome: function() {
return c;
  },
  goSearch: function() {
return f;
  },
  goToAppDirectory: function() {
return u;
  },
  goToApplication: function() {
return d;
  },
  goToApplicationSection: function() {
return _;
  },
  goToApplicationStoreSku: function() {
return E;
  },
  goToCategory: function() {
return h;
  },
  replaceAppDirectoryURLWith: function() {
return p;
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(703656),
  i = n(626135),
  a = n(34674),
  s = n(132871),
  o = n(272242),
  l = n(981631);
let u = e => {
let {
  view: t = s.ApplicationDirectoryViews.HOME,
  guildId: n,
  applicationId: r,
  applicationSection: a,
  entrypoint: u,
  skuId: h
} = e, p = {
  ...u,
  pathname: window.location.pathname
};
switch (i.default.track(l.rMx.APP_DIRECTORY_OPENED, {
    source: null == p ? void 0 : p.name
  }), (0, s.resetApplicationDirectoryHistory)(), (0, s.setEntrypoint)(p), null != n && (0, s.setGuildId)(n), t === s.ApplicationDirectoryViews.APPLICATION && null == r && (t = s.ApplicationDirectoryViews.HOME), t) {
  case s.ApplicationDirectoryViews.HOME:
    c();
    break;
  case s.ApplicationDirectoryViews.SEARCH:
    f();
    break;
  case s.ApplicationDirectoryViews.APPLICATION:
    if (null != r) {
      if (null != a) {
        if (a === o.ApplicationDirectoryProfileSections.STORE && null != h) {
          E({
            applicationId: r,
            skuId: h
          });
          break;
        }
        _({
          applicationId: r,
          section: a
        });
        break;
      }
      d({
        applicationId: r
      });
    }
}
  },
  c = () => {
let e = {
  previousView: (0, s.getCurrentView)()
};
(0, r.uL)(l.Z5c.APPLICATION_DIRECTORY, {
  state: e
});
  },
  d = e => {
let {
  applicationId: t
} = e, n = {
  previousView: (0, s.getCurrentView)()
};
(0, r.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE(t), {
  state: n
});
  },
  _ = e => {
let {
  applicationId: t,
  section: n
} = e, i = {
  previousView: (0, s.getCurrentView)()
};
(0, r.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
  state: i
});
  },
  E = e => {
let {
  applicationId: t,
  skuId: n
} = e, i = {
  previousView: (0, s.getCurrentView)()
};
(0, r.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
  state: i
});
  },
  f = function() {
let {
  query: e,
  categoryId: t,
  page: n
} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = new URLSearchParams(), a = {
  previousView: (0, s.getCurrentView)()
};
null != e && i.set('q', e), null != t && i.set('category_id', t.toString()), null != n && i.set('page', n.toString()), (0, r.uL)(l.Z5c.APPLICATION_DIRECTORY_SEARCH, {
  search: i.toString(),
  state: a
});
  },
  h = e => {
let {
  categoryId: t
} = e;
f({
  categoryId: null != t ? t : a.MU
});
  },
  p = e => {
let {
  location: {
    state: t
  }
} = (0, r.s1)();
(0, r.dL)(e, t);
  };