"use strict";
l.r(t), l.d(t, {
  default: function() {
    return k
  }
});
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("392711"),
  c = l("153832"),
  o = l("873546"),
  d = l("481060"),
  u = l("425493"),
  p = l("612226"),
  _ = l("714338"),
  m = l("782568"),
  f = l("252618"),
  h = l("434404"),
  C = l("703656"),
  g = l("292665"),
  I = l("671533"),
  A = l("626135"),
  E = l("63063"),
  v = l("674588"),
  x = l("463571"),
  R = l("887706"),
  T = l("132871"),
  N = l("147890"),
  P = l("981631"),
  y = l("420212"),
  j = l("689938"),
  S = l("275614");
let O = E.default.getArticleURL(P.HelpdeskArticles.APP_DIRECTORY_HEADER_LEARN_MORE);

function L(e) {
  let {
    onClose: t
  } = e, l = a.useRef(null);
  return (0, i.jsx)("div", {
    ref: l,
    className: S.closeWrapper,
    children: (0, i.jsx)(d.FocusRingScope, {
      containerRef: l,
      children: (0, i.jsx)("div", {
        className: S.closeContent,
        children: (0, i.jsx)(u.default, {
          className: S.closeIcon,
          closeAction: t,
          keybind: "ESC"
        })
      })
    })
  })
}

function D(e) {
  let {
    onTitleClick: t,
    showsLearnMoreCta: l,
    guildId: n,
    children: r
  } = e, c = (0, i.jsxs)(a.Fragment, {
    children: [(0, i.jsx)(g.default, {
      title: j.default.Messages.APP_DIRECTORY
    }), l && (0, i.jsx)(d.Anchor, {
      onClick: function() {
        A.default.track(P.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
          cta: "directory-help-center",
          current_page: T.ApplicationDirectoryViews.HOME,
          guild_id: n
        }), (0, m.default)(O)
      },
      children: j.default.Messages.LEARN_MORE
    })]
  });
  return (0, i.jsxs)("div", {
    className: S.header,
    children: [null != t ? (0, i.jsx)(x.default, {
      href: P.Routes.APPLICATION_DIRECTORY,
      children: (0, i.jsx)(d.Clickable, {
        onClick: t,
        className: s()(S.titleContainer, S.clickable),
        children: c
      })
    }) : (0, i.jsx)("div", {
      className: S.titleContainer,
      children: c
    }), r]
  })
}

function M(e) {
  let t, {
    view: l,
    onClick: a
  } = e;
  if (null == l) return null;
  switch (l.type) {
    case T.ApplicationDirectoryViews.HOME:
      t = j.default.Messages.HOME;
      break;
    case T.ApplicationDirectoryViews.SEARCH:
      t = j.default.Messages.SEARCH;
      break;
    case T.ApplicationDirectoryViews.APPLICATION:
      var n;
      t = null !== (n = null == l ? void 0 : l.applicationName) && void 0 !== n ? n : j.default.Messages.BACK;
      break;
    default:
      t = j.default.Messages.BACK
  }
  return (0, i.jsxs)(d.Clickable, {
    className: S.back,
    onClick: a,
    children: [(0, i.jsx)(I.default, {
      direction: I.default.Directions.LEFT,
      className: S.backIcon
    }), (0, i.jsx)(d.Heading, {
      className: S.backHeader,
      variant: "heading-sm/semibold",
      children: t
    })]
  })
}
let b = (0, r.debounce)(e => {
  let {
    scrollTop: t,
    scrollOffset: l,
    scrollHeight: i,
    location: a,
    guildId: n,
    sessionId: s
  } = e;
  t > 0 && A.default.track(P.AnalyticEvents.APP_DIRECTORY_PAGE_SCROLLED, {
    scroll_visible_percentile: (t + l) / i,
    guild_id: n,
    location: a,
    directory_session_id: s
  })
}, 200);

function k(e) {
  let {
    children: t
  } = e, l = a.useRef(null), n = (0, R.default)(), r = (0, T.useApplicationDirectoryHistory)(e => e.guildId), u = (0, T.useApplicationDirectoryHistory)(e => e.entrypoint), m = (0, T.useApplicationDirectoryHistory)(e => e.trackedOpenedFromExternalEntrypoint), g = (0, T.getCurrentView)(), I = (0, T.getPreviousView)(), E = a.useRef(), x = (null == g ? void 0 : g.type) !== T.ApplicationDirectoryViews.HOME, O = (null == g ? void 0 : g.type) === T.ApplicationDirectoryViews.APPLICATION ? null == g ? void 0 : g.applicationId : void 0;
  (0, f.usePageTitle)({
    location: j.default.Messages.APP_DIRECTORY
  });
  let k = (null == g ? void 0 : g.type) !== T.ApplicationDirectoryViews.HOME && null != I;
  a.useEffect(() => {
    !m && null == u && (A.default.track(P.AnalyticEvents.APP_DIRECTORY_OPENED, {
      source: T.ApplicationDirectoryEntrypointNames.EXTERNAL
    }), (0, T.setTrackedOpenedFromExternalEntrypoint)(!0))
  }, [u, m]), a.useEffect(() => {
    if (n) return _.default.setLayout(p.default), _.default.enable(), () => _.default.disable()
  }, [n]), a.useEffect(() => {
    v.getCategories()
  }, []), a.useEffect(() => {
    n && v.fetchIntegrationApplicationIdsForMyGuilds()
  }, [n]), a.useEffect(() => {
    E.current = (0, c.v4)()
  }, [null == g ? void 0 : g.type, O]);
  let Y = a.useCallback(() => {
    var e, t;
    (0, C.transitionTo)(null !== (e = null == u ? void 0 : u.pathname) && void 0 !== e ? e : ""), null != u && u.name === T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != r && h.default.open(r, null !== (t = u.guildSettingsSection) && void 0 !== t ? t : void 0)
  }, [u, r]);
  return a.useEffect(() => {
    let e = e => {
      e.key === y.KeyboardKeysUpdated.ESCAPE && (e.stopPropagation(), Y())
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [Y]), (0, i.jsx)(i.Fragment, {
    children: (0, i.jsx)(d.AdvancedScroller, {
      className: s()(S.directoryContainer, {
        [S.directoryContainerMobile]: o.isMobile,
        [S.directoryContainerTablet]: o.isTablet
      }),
      ref: l,
      onScroll: () => {
        var e, t, i;
        return b({
          scrollTop: null === (e = l.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
          scrollOffset: null === (t = l.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
          scrollHeight: null === (i = l.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
          location: null == g ? void 0 : g.type,
          guildId: r,
          sessionId: E.current
        })
      },
      children: (0, i.jsxs)("div", {
        className: S.content,
        children: [(0, i.jsx)(D, {
          onTitleClick: x ? N.goHome : void 0,
          showsLearnMoreCta: (null == g ? void 0 : g.type) === T.ApplicationDirectoryViews.HOME,
          guildId: r,
          children: n ? (0, i.jsx)(L, {
            onClose: Y
          }) : null
        }), k && (0, i.jsx)(M, {
          view: I,
          onClick: () => {
            (0, C.back)()
          }
        }), t]
      })
    })
  })
}