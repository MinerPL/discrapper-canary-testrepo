"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("47120");
var s = a("735250"),
  l = a("470079"),
  r = a("803997"),
  n = a.n(r),
  u = a("442837"),
  d = a("481060"),
  i = a("496675"),
  o = a("6048"),
  c = a("465670"),
  f = a("934458"),
  h = a("346479"),
  m = a("665906"),
  T = a("91159"),
  g = a("443671"),
  C = a("342449"),
  E = a("488131"),
  S = a("124368"),
  v = a("981631"),
  x = a("689938"),
  N = a("230044");

function _(e) {
  let {
    channel: t,
    className: a,
    onClose: r
  } = e, o = (0, u.useStateFromStores)([i.default], () => i.default.can(v.Permissions.READ_MESSAGE_HISTORY, t)), _ = (0, m.useCanStartThread)(t), M = () => {
    r(), (0, E.openThreadSidebarForCreating)(t, void 0, "Thread Browser Empty State")
  }, H = l.useCallback((e, t) => {
    r(), (0, E.openThreadSidebarForViewing)(e, !t, S.OpenThreadAnalyticsLocations.BROWSER)
  }, [r]), A = function(e, t) {
    let [a, s] = l.useState(""), [r, n] = l.useState(!1), [u, d] = l.useState(!1), [i, o] = l.useState([]), c = async () => {
      if (null != a && "" !== a) {
        if (!r) {
          n(!0);
          try {
            let s = await h.default.searchThreads(e, t, a);
            d(!0), o(s)
          } finally {
            n(!1)
          }
        }
      }
    };
    return {
      query: a,
      setQuery: e => {
        s(e), 0 === e.length && d(!1)
      },
      isLoading: r,
      hasResults: u,
      submit: c,
      results: i
    }
  }(t.guild_id, t.id);
  return l.useEffect(() => {
    (0, T.trackThreadBrowserTab)()
  }, []), (0, s.jsx)("div", {
    className: n()(a, N.container),
    children: (0, s.jsx)(d.HeadingLevel, {
      component: (0, s.jsxs)("div", {
        className: N.header,
        children: [(0, s.jsx)(f.default, {
          className: N.threadIcon
        }), (0, s.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          className: N.title,
          children: x.default.Messages.THREAD_BROWSER_TITLE
        }), o ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: N.divider
          }), (0, s.jsx)(R, {
            ...A
          })]
        }) : null, (0, s.jsx)("div", {
          className: N.spacer
        }), _ ? (0, s.jsx)(d.Button, {
          size: d.Button.Sizes.MIN,
          className: N.createButton,
          onClick: () => {
            r(), (0, E.openThreadSidebarForCreating)(t, void 0, "Thread Browser Toolbar")
          },
          children: x.default.Messages.CREATE
        }) : null, (0, s.jsx)(d.Clickable, {
          className: N.closeIcon,
          onClick: r,
          "aria-label": x.default.Messages.CLOSE,
          children: (0, s.jsx)(c.default, {})
        })]
      }),
      children: A.hasResults ? (0, s.jsx)(g.default, {
        channel: t,
        startThread: M,
        goToThread: H,
        threadIds: A.results
      }) : (0, s.jsx)(C.default, {
        channel: t,
        startThread: M,
        goToThread: H
      })
    })
  })
}

function R(e) {
  let {
    query: t,
    setQuery: a,
    submit: l,
    isLoading: r
  } = e;
  return (0, s.jsx)(o.default, {
    autoFocus: !0,
    className: N.searchBox,
    query: t,
    isLoading: r,
    onChange: e => a(e),
    onClear: () => a(""),
    onKeyDown: e => "Enter" === e.key && l(),
    placeholder: x.default.Messages.SEARCH_THREAD_NAMES,
    "aria-label": x.default.Messages.SEARCH_THREAD_NAMES
  })
}