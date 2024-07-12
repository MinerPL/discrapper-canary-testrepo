n.d(t, {
  Z: function() {
return h;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  r = n.n(s),
  l = n(442837),
  o = n(524437),
  c = n(481060),
  d = n(317632),
  u = n(174767),
  _ = n(240126),
  E = n(791914),
  I = n(326838),
  m = n(689938),
  T = n(13812);

function h(e) {
  let {
setTab: t,
badgeState: s,
closePopout: h
  } = e, f = (0, l.Wu)([d.Z], () => d.Z.getInvites()), p = (0, l.e7)([d.Z], () => d.Z.getInviteStatuses()), [C, g] = a.useMemo(() => r().partition(f, e => {
var t;
return (null === (t = p[e.invite_id]) || void 0 === t ? void 0 : t.joinable) !== !1 && (Date.now() - new Date(e.created_at).getTime()) / 1000 < e.ttl;
  }), [
f,
p
  ]);
  return (a.useEffect(() => {
(0, u.sJ)();
  }), 0 === f.length) ? (0, i.jsxs)('div', {
className: T.container,
children: [
  (0, i.jsx)(E.Z, {
    tab: o.X.GAME_INVITES,
    setTab: t,
    badgeState: s,
    closePopout: h
  }),
  (0, i.jsx)('div', {
    className: T.__invalid_emptyStateContainer,
    children: (0, i.jsx)(_.Z, {
      Icon: c.GameControllerIcon,
      header: m.Z.Messages.GAME_INVITES_EMPTY_STATE_TITLE,
      tip: m.Z.Messages.GAME_INVITES_EMPTY_STATE_SUBTITLE
    })
  })
]
  }) : (0, i.jsxs)('div', {
className: T.container,
children: [
  (0, i.jsx)(E.Z, {
    tab: o.X.GAME_INVITES,
    setTab: t,
    badgeState: s,
    closePopout: h,
    children: (0, i.jsx)(c.CircleIconButton, {
      className: T.__invalid_deleteButton,
      tooltip: m.Z.Messages.GAME_INVITES_DELETE_ALL,
      color: c.CircleIconButtonColors.SECONDARY,
      icon: (0, i.jsx)(c.TrashIcon, {
        size: 'xs'
      }),
      onClick: function() {
        (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e('13111').then(n.bind(n, 93756));
          return t => (0, i.jsx)(e, {
            ...t,
            onDelete: async () => {
              await t.onClose();
            }
          });
        });
      }
    })
  }),
  (0, i.jsx)(c.AdvancedScrollerThin, {
    children: (0, i.jsxs)('div', {
      className: T.invitesContainer,
      children: [
        C.length > 0 && (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(N, {
              title: m.Z.Messages.GAME_INVITES_RECENT_HEADER
            }),
            (0, i.jsx)(i.Fragment, {
              children: C.map(e => (0, i.jsx)(I.Z, {
                invite: e,
                expired: !1
              }, e.invite_id))
            })
          ]
        }),
        g.length > 0 && (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(N, {
              title: m.Z.Messages.GAME_INVITES_EXPIRED_HEADER
            }),
            (0, i.jsx)(i.Fragment, {
              children: g.map(e => (0, i.jsx)(I.Z, {
                invite: e,
                expired: !0
              }, e.invite_id))
            })
          ]
        })
      ]
    })
  })
]
  });
}

function N(e) {
  let {
title: t
  } = e;
  return (0, i.jsxs)('div', {
className: T.headerContainer,
children: [
  (0, i.jsx)(c.Text, {
    className: T.headerTitle,
    variant: 'text-xs/semibold',
    color: 'interactive-normal',
    children: t
  }),
  (0, i.jsx)('div', {
    className: T.headerDivider
  })
]
  });
}