"use strict";
n.d(t, {
  Z: function() {
    return v
  }
}), n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(892814),
  l = n(79411),
  u = n(442837),
  _ = n(481060),
  d = n(911969),
  c = n(867176),
  E = n(566620),
  I = n(127255),
  T = n(880308),
  h = n(399654),
  S = n(844439),
  f = n(10718),
  N = n(148958),
  A = n(695676),
  m = n(98880),
  O = n(601053),
  R = n(105862),
  C = n(689079),
  p = n(689938),
  g = n(245199);
let L = [];

function v(e) {
  let {
    channel: t,
    enableRecommendations: n,
    enableRecents: s
  } = e, o = (0, c.NX)(t.id, !0, "AppLauncherHomeScreen");
  return r.useEffect(() => {
    o && (0, E.w1)({
      guildId: t.getGuildId(),
      force: !0
    })
  }, [o, t]), (0, i.jsxs)("div", {
    className: g.container,
    children: [(0, i.jsx)(D, {}), (0, i.jsx)(_.Scroller, {
      className: g.scrollableContent,
      fade: !0,
      children: (0, i.jsxs)("div", {
        children: [s && (0, i.jsx)(M, {}), (0, i.jsx)(P, {
          channel: t
        }), n && (0, i.jsx)(y, {
          channel: t
        }), (0, i.jsx)(R.Z, {})]
      })
    })]
  })
}

function D() {
  let [e, t] = r.useState(""), n = r.useMemo(() => o().debounce(e => {}, 400, {
    leading: !1,
    trailing: !0
  }), []), s = r.useCallback(e => {
    t(e), n(e)
  }, [t, n]), a = r.useCallback(() => t(""), [t]);
  return (0, i.jsx)("div", {
    className: g.searchBarContainer,
    children: (0, i.jsx)(_.SearchBar, {
      placeholder: p.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER,
      query: e,
      onChange: s,
      onClear: a,
      size: _.SearchBar.Sizes.MEDIUM
    })
  })
}

function M() {
  return null
}

function P(e) {
  let {
    channel: t
  } = e, {
    pushHistory: n
  } = (0, A.hH)(), {
    sectionDescriptors: s,
    filterSection: a
  } = f.wi(t, {
    commandType: d.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: C.tn,
    includeFrecency: !0
  });
  r.useEffect(() => {
    a(C.bi.FRECENCY)
  }, [a]);
  let l = r.useMemo(() => s.filter(e => e.id !== C.bi.FRECENCY && e.id !== C.bi.BUILT_IN), [s]),
    u = (0, N.h)(l),
    _ = r.useMemo(() => o().compact(u.map(e => {
      let {
        application: t
      } = e;
      return t
    })).map(e => ({
      application: e
    })), [u]),
    {
      items: c,
      handleViewMore: E
    } = b(p.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, m.Z.Looks.NO_BANNER, _, 8);
  return (0, i.jsx)(O.Z, {
    title: p.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
    onClickViewMore: E,
    children: c.map(e => {
      let {
        application: t,
        isPartner: r
      } = e;
      return (0, i.jsx)(m.Z, {
        application: t,
        look: m.Z.Looks.NO_BANNER,
        isPartner: r,
        onClick: e => {
          e.stopPropagation(), n({
            type: A.gc.APPLICATION,
            application: t
          })
        }
      }, t.id)
    })
  })
}

function y(e) {
  let {
    channel: t
  } = e, n = function(e) {
    let {
      channelId: t,
      location: n
    } = e;
    return r.useEffect(() => {
      (0, h.$)({
        channelId: t,
        location: n
      })
    }, [t, n]), (0, u.Wu)([S.Z], () => S.Z.getRecommendations({
      channelId: t,
      location: n
    }))
  }({
    channelId: t.id,
    location: a.I.APP_LAUNCHER_TEXT
  }), s = function(e) {
    let {
      channel: t,
      recommendationsSections: n
    } = e;
    (0, T.g)();
    let i = (0, I.Z)({
      guildId: t.getGuildId(),
      channel: t
    });
    return r.useMemo(() => {
      if (!n.some(e => e.appends_remaining_activities)) return L;
      let e = new Set;
      return n.forEach(t => {
        t.items.forEach(t => {
          null != t.application && e.add(t.application.id)
        })
      }), i.filter(t => !e.has(t.application.id))
    }, [n, i])
  }({
    channel: t,
    recommendationsSections: n
  });
  return (0, i.jsx)(i.Fragment, {
    children: n.map(e => (0, i.jsx)(U, {
      recommendationsSection: e,
      remainingActivities: s
    }, e.key))
  })
}

function U(e) {
  let {
    recommendationsSection: t,
    remainingActivities: n
  } = e, {
    pushHistory: s
  } = (0, A.hH)(), o = t.section_title, a = t.type === l.i.BANNER_CARDS ? m.Z.Looks.LARGE_BANNER : m.Z.Looks.NO_BANNER, {
    items: u,
    handleViewMore: _
  } = b(o, a, r.useMemo(() => {
    let e = t.items.map(e => {
      let {
        application: t,
        is_partner: n
      } = e;
      return {
        application: t,
        isPartner: n
      }
    });
    return t.appends_remaining_activities && e.push(...n.map(e => {
      let {
        application: t
      } = e;
      return {
        application: t
      }
    })), e
  }, [t.items, t.appends_remaining_activities, n]), 8);
  return (0, i.jsx)(O.Z, {
    title: t.section_title,
    onClickViewMore: _,
    children: u.map(e => {
      let {
        application: t,
        isPartner: n
      } = e;
      return (0, i.jsx)(m.Z, {
        application: t,
        look: a,
        onClick: e => {
          e.stopPropagation(), s({
            type: A.gc.APPLICATION,
            application: t
          })
        },
        isPartner: n
      }, t.id)
    })
  })
}

function b(e, t, n, i) {
  let {
    pushHistory: s
  } = (0, A.hH)();
  return r.useMemo(() => n.length <= i ? {
    items: n,
    handleViewMore: void 0
  } : {
    items: n.slice(0, i),
    handleViewMore: () => s({
      type: A.gc.LIST,
      title: e,
      look: t,
      items: n
    })
  }, [n, i, s, t, e])
}