"use strict";
n.r(e), n.d(e, {
  goHome: function() {
    return s
  },
  goSearch: function() {
    return d
  },
  goToAppDirectory: function() {
    return a
  },
  goToApplication: function() {
    return u
  },
  goToCategory: function() {
    return f
  },
  replaceAppDirectoryURLWith: function() {
    return h
  }
}), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var r = n("703656"),
  i = n("626135"),
  c = n("34674"),
  l = n("132871"),
  o = n("981631");
let a = t => {
    let {
      view: e = l.ApplicationDirectoryViews.HOME,
      guildId: n,
      applicationId: r,
      applicationSection: c,
      entrypoint: a
    } = t, f = {
      ...a,
      pathname: window.location.pathname
    };
    switch (i.default.track(o.AnalyticEvents.APP_DIRECTORY_OPENED, {
        source: null == f ? void 0 : f.name
      }), (0, l.resetApplicationDirectoryHistory)(), (0, l.setEntrypoint)(f), null != n && (0, l.setGuildId)(n), e === l.ApplicationDirectoryViews.APPLICATION && null == r && (e = l.ApplicationDirectoryViews.HOME), e) {
      case l.ApplicationDirectoryViews.HOME:
        s();
        break;
      case l.ApplicationDirectoryViews.SEARCH:
        d();
        break;
      case l.ApplicationDirectoryViews.APPLICATION:
        null != r && u({
          applicationId: r,
          section: c
        })
    }
  },
  s = () => {
    let t = {
      previousView: (0, l.getCurrentView)()
    };
    (0, r.transitionTo)(o.Routes.APPLICATION_DIRECTORY, {
      state: t
    })
  },
  u = t => {
    let {
      applicationId: e,
      section: n
    } = t, i = {
      previousView: (0, l.getCurrentView)()
    };
    (0, r.transitionTo)(o.Routes.APPLICATION_DIRECTORY_PROFILE(e, null == n ? void 0 : n.toLowerCase()), {
      state: i
    })
  },
  d = function() {
    let {
      query: t,
      categoryId: e,
      page: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = new URLSearchParams, c = {
      previousView: (0, l.getCurrentView)()
    };
    null != t && i.set("q", t), null != e && i.set("category_id", e.toString()), null != n && i.set("page", n.toString()), (0, r.transitionTo)(o.Routes.APPLICATION_DIRECTORY_SEARCH, {
      search: i.toString(),
      state: c
    })
  },
  f = t => {
    let {
      categoryId: e
    } = t;
    d({
      categoryId: null != e ? e : c.ALL_CATEGORY_ID
    })
  },
  h = t => {
    let {
      location: {
        state: e
      }
    } = (0, r.getHistory)();
    (0, r.replaceWith)(t, e)
  }