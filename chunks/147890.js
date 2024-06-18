"use strict";
n.r(t), n.d(t, {
  goHome: function() {
    return _
  },
  goSearch: function() {
    return I
  },
  goToAppDirectory: function() {
    return u
  },
  goToApplication: function() {
    return d
  },
  goToApplicationSection: function() {
    return c
  },
  goToApplicationStoreSku: function() {
    return E
  },
  goToCategory: function() {
    return T
  },
  replaceAppDirectoryURLWith: function() {
    return h
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(703656),
  r = n(626135),
  s = n(34674),
  o = n(132871),
  a = n(272242),
  l = n(981631);
let u = e => {
    let {
      view: t = o.ApplicationDirectoryViews.HOME,
      guildId: n,
      applicationId: i,
      applicationSection: s,
      entrypoint: u,
      skuId: T
    } = e, h = {
      ...u,
      pathname: window.location.pathname
    };
    switch (r.default.track(l.rMx.APP_DIRECTORY_OPENED, {
        source: null == h ? void 0 : h.name
      }), (0, o.resetApplicationDirectoryHistory)(), (0, o.setEntrypoint)(h), null != n && (0, o.setGuildId)(n), t === o.ApplicationDirectoryViews.APPLICATION && null == i && (t = o.ApplicationDirectoryViews.HOME), t) {
      case o.ApplicationDirectoryViews.HOME:
        _();
        break;
      case o.ApplicationDirectoryViews.SEARCH:
        I();
        break;
      case o.ApplicationDirectoryViews.APPLICATION:
        if (null != i) {
          if (null != s) {
            if (s === a.ApplicationDirectoryProfileSections.STORE && null != T) {
              E({
                applicationId: i,
                skuId: T
              });
              break
            }
            c({
              applicationId: i,
              section: s
            });
            break
          }
          d({
            applicationId: i
          })
        }
    }
  },
  _ = () => {
    let e = {
      previousView: (0, o.getCurrentView)()
    };
    (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY, {
      state: e
    })
  },
  d = e => {
    let {
      applicationId: t
    } = e, n = {
      previousView: (0, o.getCurrentView)()
    };
    (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE(t), {
      state: n
    })
  },
  c = e => {
    let {
      applicationId: t,
      section: n
    } = e, r = {
      previousView: (0, o.getCurrentView)()
    };
    (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
      state: r
    })
  },
  E = e => {
    let {
      applicationId: t,
      skuId: n
    } = e, r = {
      previousView: (0, o.getCurrentView)()
    };
    (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
      state: r
    })
  },
  I = function() {
    let {
      query: e,
      categoryId: t,
      page: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = new URLSearchParams, s = {
      previousView: (0, o.getCurrentView)()
    };
    null != e && r.set("q", e), null != t && r.set("category_id", t.toString()), null != n && r.set("page", n.toString()), (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_SEARCH, {
      search: r.toString(),
      state: s
    })
  },
  T = e => {
    let {
      categoryId: t
    } = e;
    I({
      categoryId: null != t ? t : s.MU
    })
  },
  h = e => {
    let {
      location: {
        state: t
      }
    } = (0, i.s1)();
    (0, i.dL)(e, t)
  }