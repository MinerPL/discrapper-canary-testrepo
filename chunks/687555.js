r(47120), r(653041);
var t = r(735250),
  a = r(470079),
  i = r(120356),
  n = r.n(i),
  l = r(512722),
  C = r.n(l),
  o = r(597312),
  d = r(442837),
  c = r(481060),
  _ = r(232567),
  x = r(461745),
  p = r(434650),
  h = r(210887),
  f = r(51144),
  u = r(281494),
  R = r(276444),
  m = r(529840),
  E = r(689938),
  j = r(391003),
  L = r(724531),
  g = r(99713),
  S = r(334202),
  A = r(7234);

function M(e) {
  let {
numOfSelectedUsers: s
  } = e, r = (0, d.e7)([R.Z], () => R.Z.getReferralsRemaining());
  C()(null != r, 'Referrals remaining should not be null');
  let a = r - s,
i = E.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
  numReferrals: r
});
  return a < r && (i = E.Z.Messages.REFERRAL_PROGRAM_SELECT_MORE_FRIEND.format({
numFriends: a
  }), 1 === a && (i = E.Z.Messages.REFERRAL_PROGRAM_SELECT_ONE_MORE_FRIEND), 0 === a && (i = E.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECTION_HIT_LIMIT.format({
numReferrals: r
  }))), (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsxs)('div', {
    className: j.title,
    children: [
      (0, t.jsx)(Z, {
        className: j.titleImage
      }),
      (0, t.jsx)(c.Heading, {
        variant: 'heading-xl/bold',
        children: E.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })
    ]
  }),
  (0, t.jsx)(c.Text, {
    className: j.description,
    variant: 'text-md/medium',
    color: 'header-secondary',
    children: i
  })
]
  });
}

function N() {
  return (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)('div', {
    className: j.title,
    children: (0, t.jsx)(c.Heading, {
      variant: 'heading-xl/bold',
      children: E.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
    })
  }),
  (0, t.jsx)(c.Text, {
    className: j.description,
    variant: 'text-md/medium',
    color: 'header-secondary',
    children: E.Z.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
  })
]
  });
}

function F() {
  return (0, t.jsx)('div', {
className: j.erroredContent,
children: (0, t.jsx)(c.Image, {
  src: S,
  width: 225,
  height: 160
})
  });
}

function v(e) {
  let {
onClose: s
  } = e;
  return (0, t.jsxs)('div', {
className: j.erroredContainer,
children: [
  (0, t.jsxs)('div', {
    className: n()(j.erroredHeader, j.headerSeparator),
    children: [
      (0, t.jsx)('div', {
        className: j.title,
        children: (0, t.jsx)(c.Heading, {
          variant: 'heading-xl/bold',
          children: E.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }),
      (0, t.jsx)(c.Text, {
        className: j.description,
        variant: 'text-md/medium',
        color: 'header-secondary',
        children: E.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })
    ]
  }),
  (0, t.jsx)('div', {
    className: j.erroredContent,
    children: (0, t.jsx)(c.Image, {
      src: g,
      width: 178,
      height: 190
    })
  }),
  (0, t.jsx)('div', {
    className: n()(j.footer, j.footerSeparator),
    children: (0, t.jsx)(c.Button, {
      className: j.submit,
      onClick: () => s(),
      children: E.Z.Messages.REFERRAL_PROGRAM_CLOSE
    })
  })
]
  });
}

function y(e) {
  let {
onShare: s
  } = e, r = (0, d.e7)([R.Z], () => R.Z.getRecipientStatus()), [i, l] = a.useState([]), [C, o] = a.useState(new Set());
  return a.useEffect(() => {
(async () => {
  let e = [];
  for (let [s, t] of r)
    if (t === u.Fe.PENDING) {
      let r = await (0, _.PR)(s);
      e.push(r);
    }
  l(e);
})();
  }, [r]), (0, t.jsxs)('div', {
className: j.remindContainer,
children: [
  (0, t.jsxs)('div', {
    className: n()(j.remindHeader, j.headerSeparator),
    children: [
      (0, t.jsxs)('div', {
        className: j.title,
        children: [
          (0, t.jsx)(Z, {
            className: j.titleImage
          }),
          (0, t.jsx)(c.Heading, {
            variant: 'heading-xl/bold',
            children: E.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS
          })
        ]
      }),
      (0, t.jsx)(c.Text, {
        className: j.description,
        variant: 'text-md/medium',
        color: 'header-secondary',
        children: E.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_HEADER
      })
    ]
  }),
  (0, t.jsx)('div', {
    className: j.list,
    children: i.map(e => (0, t.jsx)(m.Z, {
      user: e,
      checked: C.has(e),
      onChange: (e, s) => {
        o(r => {
          let t = new Set(r);
          return s ? t.add(e) : t.delete(e), t;
        });
      }
    }, e.id))
  }),
  (0, t.jsx)('div', {
    className: n()(j.footer, j.footerSeparator),
    children: (0, t.jsx)(c.Button, {
      className: j.submit,
      onClick: () => s([...C.values()]),
      children: E.Z.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
    })
  })
]
  });
}

function Z(e) {
  let {
className: s
  } = e;
  return 'light' === (0, d.e7)([h.Z], () => h.Z.theme) ? (0, t.jsx)(c.Image, {
className: s,
src: L,
width: 55,
height: 38
  }) : (0, t.jsx)(c.Image, {
className: s,
src: A,
width: 55,
height: 38
  });
}
s.Z = function(e) {
  let {
onClose: s,
onShare: r
  } = e, i = (0, d.e7)([R.Z], () => R.Z.getReferralsRemaining()), l = (0, d.e7)([R.Z], () => R.Z.getRecipientStatus()), [h, L] = a.useState(0), [g, S] = a.useState(''), [A, Z] = a.useState([]), [O, I] = a.useState(!1), [w, U] = a.useState(!1), G = function(e, s) {
let [r, t] = a.useState(e);
return a.useEffect(() => {
  let r = setTimeout(() => {
    t(e);
  }, s);
  return () => {
    clearTimeout(r);
  };
}, [
  e,
  s
]), r;
  }(g, 400), [B, D] = a.useState(new Map()), [T, P] = a.useState(new Map());
  a.useEffect(() => {
b(0);
  }, [G]), C()(null != i, 'Referrals remaining should not be null');
  let b = async e => {
try {
  if (null == e)
    return;
  I(!0);
  let s = [...T.values()];
  for (let [e, r] of l)
    if (r === u.Fe.PENDING && !T.has(e)) {
      let r = await (0, _.PR)(e);
      s.push(r);
    }
  let r = await (0, u.iF)(e, G);
  Z(t => {
    let a = r.users.filter(e => !B.has(e.id));
    return (s = s.filter(e => !B.has(e.id)), 0 === e) ? [
      ...B.values(),
      ...s.values(),
      ...a
    ] : [
      ...t,
      ...a
    ];
  }), P(e => {
    let r = new Map(e);
    for (let e of s)
      r.set(e.id, e);
    return r;
  }), L(r.nextIndex);
} catch (e) {
  U(!0);
} finally {
  I(!1);
}
  }, k = (0, p.O)(e => {
e && !O && b(h);
  });
  if (w)
return (0, t.jsx)(v, {
  onClose: s
});
  if (0 === i)
return (0, t.jsx)(y, {
  onShare: r
});
  let H = G.length > 0 && 0 === A.length;
  return (0, t.jsxs)('div', {
children: [
  (0, t.jsxs)('div', {
    className: n()(j.header, j.headerSeparator),
    children: [
      H ? (0, t.jsx)(N, {}) : (0, t.jsx)(M, {
        numOfSelectedUsers: B.size
      }),
      (0, t.jsx)(x.ZP, {
        className: j.searchbar,
        size: x.ZP.Sizes.MEDIUM,
        tags: [...B.values()].map(e => f.ZP.getName(e)),
        placeholder: E.Z.Messages.REFERRAL_PROGRAM_SEARCH_FRIENDS,
        query: g,
        onRemoveTag: e => {
          D(s => {
            let r = [...s.values()][e],
              t = new Map(s);
            return t.delete(r.id), t;
          });
        },
        onQueryChange: S,
        onClear: () => S('')
      })
    ]
  }),
  H ? (0, t.jsx)(F, {}) : (0, t.jsxs)(o.w0, {
    className: j.list,
    children: [
      A.map(e => (0, t.jsx)(m.Z, {
        disabled: [...B.values()].filter(e => !T.has(e.id)).length >= i && !B.has(e.id) && !T.has(e.id),
        checked: B.has(e.id),
        user: e,
        onChange: (e, s) => {
          D(r => {
            let t = new Map(r);
            return s ? t.set(e.id, e) : t.delete(e.id), t;
          });
        }
      }, e.id)),
      O && (0, t.jsx)(c.Spinner, {}),
      (0, t.jsx)('div', {
        ref: k
      })
    ]
  }),
  (0, t.jsx)('div', {
    className: n()(j.footer, j.footerSeparator),
    children: (0, t.jsx)(c.Button, {
      className: j.submit,
      disabled: 0 === B.size && !H,
      onClick: () => {
        if (H) {
          s();
          return;
        }
        r([...B.values()]);
      },
      children: H ? E.Z.Messages.REFERRAL_PROGRAM_CLOSE : E.Z.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
    })
  })
]
  });
};