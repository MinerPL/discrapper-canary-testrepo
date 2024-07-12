n.d(t, {
  V: function() {
return m;
  },
  Z: function() {
return N;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(442837),
  r = n(481060),
  l = n(239091),
  o = n(605436),
  c = n(741247),
  d = n(474333),
  u = n(243730),
  _ = n(852898),
  I = n(203377),
  E = n(689938),
  T = n(813679);

function m() {
  let [e, t] = a.useState(!0);
  return {
scrolledToTop: e,
handleScroll: function(e) {
  t(0 === e.currentTarget.scrollTop);
}
  };
}

function N(e) {
  let {
guild: t,
role: m,
selectedSection: N,
setSelectedSection: S
  } = e, h = a.useCallback(e => {
S(e);
  }, [S]), g = (0, i.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[m.id];
  }, [
m.id,
t.id
  ]), C = (0, o.pM)(t.id, m.id), x = (0, _.Z)(m);
  a.useEffect(() => {
C && S(I.ZI.PERMISSIONS);
  }, [
C,
S
  ]);
  let p = (0, c.useHasGuildRoleItems)(t, m);
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: T.titleContainer,
    children: [
      (0, s.jsx)(r.Text, {
        className: T.titleText,
        color: 'header-primary',
        variant: 'text-md/semibold',
        children: E.Z.Messages.ROLE_EDIT_TITLE_WITH_NAME.format({
          roleName: m.name
        })
      }),
      p ? (0, s.jsx)(r.Clickable, {
        className: T.menu,
        onClick: function(e) {
          (0, l.jW)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 741247));
            return n => (0, s.jsx)(e, {
              ...n,
              guild: t,
              role: m
            });
          });
        },
        'aria-label': E.Z.Messages.MORE_OPTIONS,
        children: (0, s.jsx)(r.MoreHorizontalIcon, {
          size: 'md',
          color: 'currentColor'
        })
      }) : null
    ]
  }),
  null != x ? (0, s.jsx)(d.Z, {
    messageType: d.Q.WARNING,
    children: x
  }) : null,
  (0, s.jsxs)(r.TabBar, {
    className: T.tabBar,
    'aria-label': E.Z.Messages.OPTIONS,
    selectedItem: N,
    type: 'top',
    look: 'brand',
    onItemSelect: h,
    children: [
      (0, s.jsx)(r.TabBar.Item, {
        className: T.tabBarItem,
        id: I.ZI.DISPLAY,
        disabled: C,
        children: E.Z.Messages.ROLE_EDIT_TAB_DISPLAY
      }),
      (0, s.jsx)(r.TabBar.Item, {
        className: T.tabBarItem,
        id: I.ZI.PERMISSIONS,
        children: E.Z.Messages.ROLE_EDIT_TAB_PERMISSIONS
      }),
      (0, s.jsx)(r.TabBar.Item, {
        className: T.tabBarItem,
        id: I.ZI.VERIFICATIONS,
        disabled: C,
        children: E.Z.Messages.ROLE_EDIT_TAB_VERIFICATION
      }),
      (0, s.jsx)(r.TabBar.Item, {
        className: T.tabBarItem,
        id: I.ZI.MEMBERS,
        disabled: C,
        children: C ? E.Z.Messages.ROLE_EDIT_TAB_MANAGE_MEMBERS : E.Z.Messages.ROLE_EDIT_TAB_MEMBERS_WITH_LIST.format({
          numMembers: String(g)
        })
      })
    ]
  })
]
  });
}