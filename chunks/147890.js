"use strict";
n.r(e), n.d(e, {
  goHome: function() {
    return s
  },
  goSearch: function() {
    return f
  },
  goToAppDirectory: function() {
    return a
  },
  goToApplication: function() {
    return u
  },
  goToApplicationSection: function() {
    return d
  },
  goToCategory: function() {
    return C
  },
  replaceAppDirectoryURLWith: function() {
    return h
  }
}), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var r = n("703656"),
  i = n("626135"),
  c = n("34674"),
  o = n("132871"),
  l = n("981631");
let a = t => {
    let {
      view: e = o.ApplicationDirectoryViews.HOME,
      guildId: n,
      applicationId: r,
      applicationSection: c,
      entrypoint: a
    } = t, C = {
      ...a,
      pathname: window.location.pathname
    };
    switch (i.default.track(l.AnalyticEvents.APP_DIRECTORY_OPENED, {
        source: null == C ? void 0 : C.name
      }), (0, o.resetApplicationDirectoryHistory)(), (0, o.setEntrypoint)(C), null != n && (0, o.setGuildId)(n), e === o.ApplicationDirectoryViews.APPLICATION && null == r && (e = o.ApplicationDirectoryViews.HOME), e) {
      case o.ApplicationDirectoryViews.HOME:
        s();
        break;
      case o.ApplicationDirectoryViews.SEARCH:
        f();
        break;
      case o.ApplicationDirectoryViews.APPLICATION:
        null != r && (null != c ? d({
          applicationId: r,
          section: c
        }) : u({
          applicationId: r
        }))
    }
  },
  s = () => {
    let t = {
      previousView: (0, o.getCurrentView)()
    };
    (0, r.transitionTo)(l.Routes.APPLICATION_DIRECTORY, {
      state: t
    })
  },
  u = t => {
    let {
      applicationId: e
    } = t, n = {
      previousView: (0, o.getCurrentView)()
    };
    (0, r.transitionTo)(l.Routes.APPLICATION_DIRECTORY_PROFILE(e), {
      state: n
    })
  },
  d = t => {
    let {
      applicationId: e,
      section: n
    } = t, i = {
      previousView: (0, o.getCurrentView)()
    };
    (0, r.transitionTo)(l.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(e, n), {
      state: i
    })
  },
  f = function() {
    let {
      query: t,
      categoryId: e,
      page: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = new URLSearchParams, c = {
      previousView: (0, o.getCurrentView)()
    };
    null != t && i.set("q", t), null != e && i.set("category_id", e.toString()), null != n && i.set("page", n.toString()), (0, r.transitionTo)(l.Routes.APPLICATION_DIRECTORY_SEARCH, {
      search: i.toString(),
      state: c
    })
  },
  C = t => {
    let {
      categoryId: e
    } = t;
    f({
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