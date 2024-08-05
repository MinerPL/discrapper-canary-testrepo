n(47120);
var s = n(735250),
  a = n(470079),
  r = n(512722),
  i = n.n(r),
  l = n(399606),
  o = n(481060),
  c = n(626135),
  d = n(709054),
  _ = n(914788),
  u = n(546791),
  E = n(259756),
  T = n(785681),
  I = n(985002),
  R = n(858719),
  C = n(780985),
  g = n(880257),
  p = n(631885),
  A = n(240351),
  m = n(792258),
  N = n(657825),
  f = n(198952),
  h = n(329242),
  S = n(895328),
  M = n(292352),
  x = n(981631),
  b = n(689938),
  O = n(661624);

function P() {
  let e = a.useCallback(() => {
(0, o.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('66462').then(n.bind(n, 756226));
  return t => (0, s.jsx)(e, {
    ...t
  });
});
  }, []);
  return (0, s.jsx)(o.Clickable, {
className: O.tooltip,
onClick: e,
children: (0, s.jsx)(o.CircleInformationIcon, {
  size: 'custom',
  color: 'currentColor',
  className: O.icon,
  width: 15,
  height: 15
})
  });
}

function v(e) {
  let {
displayType: t
  } = e, n = a.useCallback(() => {
(0, o.showToast)((0, o.createToast)(b.Z.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE));
  }, []), r = (0, g.Z)(), l = (0, R.ws)(t), c = (0, R.C7)(t), {
loadMore: _,
isMoreLoading: T
  } = (0, I.G)({
onError: n
  }), C = M.tx.get(t), [p, A] = a.useState(M.iB), f = (0, E.Xi)({
location: 'family_center_activity_section_web'
  }), h = a.useCallback(() => {
A(e => e + M.iB), _(t);
  }, [
t,
_
  ]);
  i()(C, 'No text for action type');
  let S = C.sectionHeader(c),
x = a.useCallback(e => {
  let {
    row: t
  } = e, n = l[t];
  return (0, u.iB)(n) ? (0, s.jsx)(N.Z, {
    userId: n.entity_id,
    timestamp: d.default.extractTimestamp(n.event_id),
    timestampFormatter: C.timestampFormatter
  }, n.event_id) : (0, u.f0)(n) ? (0, s.jsx)(m.Z, {
    guildId: n.entity_id
  }, n.event_id) : void 0;
}, [
  l,
  C.timestampFormatter
]),
P = a.useCallback(() => (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)(o.Text, {
      className: O.sectionHeader,
      variant: 'eyebrow',
      color: 'header-secondary',
      children: S
    }),
    void 0 !== C.sectionDescription ? (0, s.jsx)(o.Text, {
      className: O.sectionDescription,
      variant: 'text-md/medium',
      color: 'text-muted',
      children: C.sectionDescription(null != r && r, f)
    }) : null
  ]
}), [
  S,
  C,
  r,
  f
]);
  if (0 === l.length)
return null;
  let v = l.slice(0, p);
  return (0, s.jsxs)('div', {
className: O.actionSection,
children: [
  P(),
  (0, s.jsx)('div', {
    className: O.actions,
    style: {
      maxHeight: 65 * v.length
    },
    children: v.map((e, t) => x({
      row: t
    }))
  }),
  v.length !== c ? (0, s.jsx)(o.Clickable, {
    className: O.loadMoreBar,
    onClick: h,
    role: 'button',
    children: T ? (0, s.jsx)(o.Spinner, {
      type: o.Spinner.Type.PULSING_ELLIPSIS,
      className: O.spinner
    }) : (0, s.jsx)(o.Text, {
      className: O.loadMore,
      variant: 'text-sm/bold',
      children: b.Z.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
        pageSize: Math.min(c - v.length, M.iB)
      })
    })
  }) : null
]
  });
}
let L = () => {
let e = (0, g.Z)(),
  t = (0, p.mq)(M.ne.ACTIVE),
  n = (0, T.o)(b.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
    activeLinks: t.length
  }), b.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
  a = (0, u.Qr)(!!e),
  r = (0, p.Rd)(a);
return e && t.length > 1 ? (0, s.jsx)(o.Text, {
  variant: 'eyebrow',
  children: r
}) : (0, s.jsxs)(s.Fragment, {
  children: [
    e ? null : (0, s.jsx)(o.EyeIcon, {
      size: 'xs',
      color: 'currentColor',
      className: O.icon
    }),
    (0, s.jsx)(o.Text, {
      variant: 'eyebrow',
      children: n
    })
  ]
});
  },
  Z = e => {
let {
  userId: t,
  subText: n,
  avatarSize: a = o.AvatarSizes.SIZE_40
} = e, r = (0, C.I)(t);
return void 0 === r ? null : (0, s.jsxs)('div', {
  className: O.accountRow,
  children: [
    (0, s.jsx)(f.r, {
      user: r,
      avatarSize: a
    }),
    (0, s.jsxs)('div', {
      className: O.headerText,
      children: [
        (0, s.jsx)(h.Z, {
          user: r
        }),
        void 0 !== n ? (0, s.jsx)(o.Text, {
          variant: 'text-sm/medium',
          color: 'text-muted',
          children: n
        }) : null
      ]
    })
  ]
});
  },
  D = () => {
let e = (0, p.mq)(M.ne.ACTIVE),
  t = (0, l.e7)([_.Z], () => _.Z.getSelectedTeenId()),
  {
    selectTeenUser: n
  } = (0, I.G)({}),
  r = e.map(e => ({
    label: e.id,
    value: e.id
  })),
  i = a.useCallback(e => (0, s.jsx)(Z, {
    userId: e.value,
    avatarSize: o.AvatarSizes.SIZE_24
  }), []);
return (0, s.jsx)(o.Select, {
  className: O.select,
  renderOptionLabel: i,
  renderOptionValue: e => {
    let [t] = e;
    return i(t);
  },
  serialize: e => e,
  select: e => {
    n(e), c.default.track(x.rMx.FAMILY_CENTER_ACTION, {
      action: M.YC.SelectTeen
    });
  },
  isSelected: e => e === t,
  options: r
});
  },
  B = e => {
let {
  userId: t
} = e, n = (0, g.Z)(), a = (0, p.mq)(M.ne.ACTIVE), r = (0, u.Qr)(!!n), i = (0, p.Rd)(r);
return n && 1 !== a.length ? (0, s.jsx)(D, {}) : (0, s.jsx)(Z, {
  userId: t,
  subText: i
});
  };
t.Z = e => {
  let {
user: t
  } = e, n = Array.from(M.tx.entries()), a = (0, R.kE)(), r = (0, u.t3)(), i = (0, p.Rd)(r);
  return (0, s.jsxs)('div', {
className: O.container,
children: [
  (0, s.jsxs)('div', {
    className: O.connectedCounter,
    children: [
      (0, s.jsx)(L, {}),
      (0, s.jsx)(P, {})
    ]
  }),
  (0, s.jsxs)('div', {
    className: O.card,
    children: [
      (0, s.jsx)('div', {
        className: O.header,
        children: (0, s.jsx)(B, {
          userId: t.id
        })
      }),
      (0, s.jsxs)('div', {
        className: O.content,
        children: [
          (0, s.jsx)('div', {
            className: O.activityCounterRow,
            children: n.map(e => {
              let [t, n] = e;
              return (0, s.jsx)(A.Z, {
                displayType: t,
                header: n.tooltipHeader()
              }, 'counter-'.concat(t));
            })
          }),
          (0, s.jsx)('div', {
            className: O.activityOverview,
            children: a ? n.map(e => {
              let [t] = e;
              return (0, s.jsx)(v, {
                displayType: t
              }, ''.concat(t, '-list'));
            }) : (0, s.jsx)(S.Z, {
              className: O.emptyActivity,
              text: null != i ? i : ''
            })
          })
        ]
      })
    ]
  })
]
  });
};