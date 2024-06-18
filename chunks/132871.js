"use strict";
n.r(t), n.d(t, {
  ApplicationDirectoryEntrypointNames: function() {
    return o
  },
  ApplicationDirectoryViews: function() {
    return s
  },
  getCurrentView: function() {
    return T
  },
  getPreviousView: function() {
    return I
  },
  resetApplicationDirectoryHistory: function() {
    return f
  },
  setEntrypoint: function() {
    return h
  },
  setGuildId: function() {
    return S
  },
  setTrackedOpenedFromExternalEntrypoint: function() {
    return N
  },
  useApplicationDirectoryHistory: function() {
    return E
  }
});
var i, r, s, o, a = n(266067),
  l = n(652874),
  u = n(703656),
  _ = n(264043),
  d = n(981631);
(i = s || (s = {})).HOME = "home", i.SEARCH = "search", i.APPLICATION = "application", (r = o || (o = {})).EXTERNAL = "External", r.KEYBOARD_SHORTCUT = "Keyboard Shortcut", r.APPLICATION_DIRECTORY_URL = "Application Directory URL", r.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", r.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", r.GUILD_HEADER_POPOUT = "Guild Header Popout", r.GUILD_SETTINGS = "Guild Settings", r.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", r.GUILD_CONTEXT_MENU = "Guild Context Menu";
let c = (0, l.Z)(() => ({
    guildId: null,
    entrypoint: null,
    trackedOpenedFromExternalEntrypoint: !1
  })),
  E = c;

function I() {
  let {
    location: {
      state: e
    }
  } = (0, u.s1)();
  return null == e ? void 0 : e.previousView
}

function T() {
  var e, t;
  let {
    location: {
      pathname: n
    }
  } = (0, u.s1)(), i = (0, a.LX)(n, {
    path: d.Z5c.APPLICATION_DIRECTORY,
    exact: !0
  }), r = (0, a.LX)(n, {
    path: d.Z5c.APPLICATION_DIRECTORY_SEARCH,
    exact: !0
  }), s = (0, a.LX)(n, {
    path: [d.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"), d.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", ":section")],
    exact: !0
  }), {
    applicationId: o,
    section: l
  } = null !== (e = null == s ? void 0 : s.params) && void 0 !== e ? e : {};
  if (null != i) return {
    type: "home"
  };
  if (null != r) return {
    type: "search"
  };
  if (null != s && null != o) {
    let e = null === (t = _.Z.getApplication(o)) || void 0 === t ? void 0 : t.name;
    return {
      type: "application",
      applicationId: o,
      applicationName: e,
      section: l
    }
  }
}

function h(e) {
  c.setState({
    entrypoint: e
  })
}

function S(e) {
  c.setState({
    guildId: e
  })
}

function f() {
  c.setState({
    entrypoint: null,
    guildId: null
  })
}

function N(e) {
  c.setState({
    trackedOpenedFromExternalEntrypoint: e
  })
}