t.d(n, {
  Z: function() {
return k;
  }
});
var i = t(735250),
  l = t(470079),
  r = t(120356),
  s = t.n(r),
  o = t(392711),
  c = t(772848),
  a = t(873546),
  C = t(481060),
  u = t(425493),
  d = t(612226),
  p = t(714338),
  h = t(782568),
  f = t(252618),
  m = t(434404),
  E = t(677726),
  v = t(703656),
  A = t(671533),
  g = t(626135),
  Z = t(63063),
  x = t(674588),
  _ = t(463571),
  L = t(887706),
  M = t(132871),
  N = t(147890),
  j = t(981631),
  R = t(420212),
  y = t(689938),
  I = t(108421);
let T = Z.Z.getArticleURL(j.BhN.APP_DIRECTORY_HEADER_LEARN_MORE);

function O(e) {
  let {
onClose: n
  } = e, t = l.useRef(null);
  return (0, i.jsx)('div', {
ref: t,
className: I.closeWrapper,
children: (0, i.jsx)(C.FocusRingScope, {
  containerRef: t,
  children: (0, i.jsx)('div', {
    className: I.closeContent,
    children: (0, i.jsx)(u.Z, {
      className: I.closeIcon,
      closeAction: n,
      keybind: 'ESC'
    })
  })
})
  });
}

function P(e) {
  let {
onTitleClick: n,
showsLearnMoreCta: t,
guildId: r,
children: o
  } = e, c = (0, i.jsxs)(l.Fragment, {
children: [
  (0, i.jsx)(E.Z, {
    title: y.Z.Messages.APP_DIRECTORY
  }),
  t && (0, i.jsx)(C.Anchor, {
    onClick: function() {
      g.default.track(j.rMx.APP_DIRECTORY_CTA_CLICKED, {
        cta: 'directory-help-center',
        current_page: M.ApplicationDirectoryViews.HOME,
        guild_id: r
      }), (0, h.Z)(T);
    },
    children: y.Z.Messages.LEARN_MORE
  })
]
  });
  return (0, i.jsxs)('div', {
className: I.header,
children: [
  null != n ? (0, i.jsx)(_.Z, {
    href: j.Z5c.APPLICATION_DIRECTORY,
    children: (0, i.jsx)(C.Clickable, {
      onClick: n,
      className: s()(I.titleContainer, I.clickable),
      children: c
    })
  }) : (0, i.jsx)('div', {
    className: I.titleContainer,
    children: c
  }),
  o
]
  });
}

function D(e) {
  let n, {
view: t,
onClick: l
  } = e;
  if (null == t)
return null;
  switch (t.type) {
case M.ApplicationDirectoryViews.HOME:
  n = y.Z.Messages.HOME;
  break;
case M.ApplicationDirectoryViews.SEARCH:
  n = y.Z.Messages.SEARCH;
  break;
case M.ApplicationDirectoryViews.APPLICATION:
  var r;
  n = null !== (r = null == t ? void 0 : t.applicationName) && void 0 !== r ? r : y.Z.Messages.BACK;
  break;
default:
  n = y.Z.Messages.BACK;
  }
  return (0, i.jsxs)(C.Clickable, {
className: I.back,
onClick: l,
children: [
  (0, i.jsx)(A.Z, {
    direction: A.Z.Directions.LEFT,
    className: I.backIcon
  }),
  (0, i.jsx)(C.Heading, {
    className: I.backHeader,
    variant: 'heading-sm/semibold',
    children: n
  })
]
  });
}
let S = (0, o.debounce)(e => {
  let {
scrollTop: n,
scrollOffset: t,
scrollHeight: i,
location: l,
guildId: r,
sessionId: s
  } = e;
  n > 0 && g.default.track(j.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
scroll_visible_percentile: (n + t) / i,
guild_id: r,
location: l,
directory_session_id: s
  });
}, 200);

function k(e) {
  let {
children: n
  } = e, t = l.useRef(null), r = (0, L.Z)(), o = (0, M.useApplicationDirectoryHistory)(e => e.guildId), u = (0, M.useApplicationDirectoryHistory)(e => e.entrypoint), h = (0, M.useApplicationDirectoryHistory)(e => e.trackedOpenedFromExternalEntrypoint), E = (0, M.getCurrentView)(), A = (0, M.getPreviousView)(), Z = l.useRef(), _ = (null == E ? void 0 : E.type) !== M.ApplicationDirectoryViews.HOME, T = (null == E ? void 0 : E.type) === M.ApplicationDirectoryViews.APPLICATION ? null == E ? void 0 : E.applicationId : void 0;
  (0, f.Tt)({
location: y.Z.Messages.APP_DIRECTORY
  });
  let k = (null == E ? void 0 : E.type) !== M.ApplicationDirectoryViews.HOME && null != A;
  l.useEffect(() => {
!h && null == u && (g.default.track(j.rMx.APP_DIRECTORY_OPENED, {
  source: M.ApplicationDirectoryEntrypointNames.EXTERNAL
}), (0, M.setTrackedOpenedFromExternalEntrypoint)(!0));
  }, [
u,
h
  ]), l.useEffect(() => {
if (r)
  return p.Z.setLayout(d.ZP), p.Z.enable(), () => p.Z.disable();
  }, [r]), l.useEffect(() => {
x.CP();
  }, []), l.useEffect(() => {
r && x.g5();
  }, [r]), l.useEffect(() => {
Z.current = (0, c.Z)();
  }, [
null == E ? void 0 : E.type,
T
  ]);
  let H = l.useCallback(() => {
var e, n;
(0, v.uL)(null !== (e = null == u ? void 0 : u.pathname) && void 0 !== e ? e : ''), null != u && u.name === M.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != o && m.Z.open(o, null !== (n = u.guildSettingsSection) && void 0 !== n ? n : void 0);
  }, [
u,
o
  ]);
  return l.useEffect(() => {
let e = e => {
  e.key === R.vn.ESCAPE && (e.stopPropagation(), H());
};
return document.addEventListener('keydown', e), () => {
  document.removeEventListener('keydown', e);
};
  }, [H]), (0, i.jsx)(i.Fragment, {
children: (0, i.jsx)(C.AdvancedScroller, {
  className: s()(I.directoryContainer, {
    [I.directoryContainerMobile]: a.tq,
    [I.directoryContainerTablet]: a.Em
  }),
  ref: t,
  onScroll: () => {
    var e, n, i;
    return S({
      scrollTop: null === (e = t.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
      scrollOffset: null === (n = t.current) || void 0 === n ? void 0 : n.getScrollerState().offsetHeight,
      scrollHeight: null === (i = t.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
      location: null == E ? void 0 : E.type,
      guildId: o,
      sessionId: Z.current
    });
  },
  children: (0, i.jsxs)('div', {
    className: I.content,
    children: [
      (0, i.jsx)(P, {
        onTitleClick: _ ? N.goHome : void 0,
        showsLearnMoreCta: (null == E ? void 0 : E.type) === M.ApplicationDirectoryViews.HOME,
        guildId: o,
        children: r ? (0, i.jsx)(O, {
          onClose: H
        }) : null
      }),
      k && (0, i.jsx)(D, {
        view: A,
        onClick: () => {
          (0, v.op)();
        }
      }),
      n
    ]
  })
})
  });
}