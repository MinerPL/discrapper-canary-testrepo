r.d(t, {
  Z: function() {
return T;
  }
}), r(47120);
var a = r(735250),
  n = r(470079),
  i = r(120356),
  o = r.n(i),
  l = r(544891),
  c = r(704215),
  s = r(481060),
  d = r(937579),
  u = r(675478),
  h = r(295226),
  m = r(572004),
  g = r(74538),
  p = r(246992),
  b = r(981631),
  f = r(474936),
  y = r(979756),
  x = r(751544);
let k = async () => {
  try {
let {
  body: e
} = await l.tn.get({
  url: b.ANM.USER_OFFER_IDS
});
return e;
  } catch (e) {
return [];
  }
}, v = async (e, t) => {
  try {
await l.tn.post({
  url: b.ANM.CREATE_USER_OFFER(e, t)
});
  } catch {} finally {
await (0, d.T)();
  }
}, _ = async (e, t) => {
  try {
await l.tn.del({
  url: b.ANM.DELETE_USER_OFFER(e, t)
});
  } catch {} finally {
await (0, d.T)();
  }
}, C = async (e, t) => {
  try {
await l.tn.post({
  url: b.ANM.UNACK_USER_OFFER(e, t)
});
  } catch {} finally {
await (0, d.T)();
  }
}, w = async () => {
  try {
let {
  body: e
} = await l.tn.get({
  url: b.ANM.USER_OFFERS
});
return e;
  } catch (e) {
return {
  trial: [],
  discount: []
};
  }
}, j = async () => {
  try {
await l.tn.del({
  url: b.ANM.USER_OFFERS
});
  } catch {} finally {
await h.Z.forceReset(), await (0, d.T)();
  }
};

function N(e) {
  var t, r, i, l;
  let {
offer: c,
offerOptions: u,
forceRefetch: h
  } = e, [p, b] = n.useState(!1), [y, k] = n.useState(!1), [v, w] = n.useState(!1), [j, N] = n.useState(!1);
  n.useEffect(() => {
v && N(!0);
let e = setTimeout(() => {
  N(!1);
}, 500);
return () => {
  clearTimeout(e);
};
  }, [v]);
  let {
id: S,
expires_at: T,
redeemed_at: I,
trial_id: E,
subscription_trial: Z
  } = c, R = null !== (r = null === (t = u.find(e => {
let {
  value: t
} = e;
return t === E;
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : 'Unknown', B = null != T, O = null != T && new Date(T).getTime() < Date.now(), P = (null == Z ? void 0 : Z.sku_id) === f.Si.TIER_0, L = async () => {
w(!0), B ? await C(S, 'trial') : await (0, d.a)(c), h(), w(!1);
  };
  n.useEffect(() => {
if (p) {
  let e = setTimeout(() => {
    b(!1);
  }, 3000);
  return () => {
    clearTimeout(e);
  };
}
if (y) {
  let e = setTimeout(() => {
    k(!1);
  }, 3000);
  return () => {
    clearTimeout(e);
  };
}
  }, [
p,
y
  ]);
  let A = 'Active';
  return B && (A = 'Acknowledged'), O && (A = 'Expired'), (0, a.jsxs)('div', {
className: o()(x.card, P ? x.gradientWrapperTier0 : x.gradientWrapperTier2),
children: [
  (0, a.jsxs)('div', {
    className: o()(x.row, x.nameRow),
    children: [
      (0, a.jsx)(s.Heading, {
        variant: 'heading-lg/semibold',
        color: 'always-white',
        children: R
      }),
      (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          w(!0), await _(S, 'trial'), h(), w(!1);
        },
        children: (0, a.jsx)(s.TrashIcon, {
          size: 'md',
          color: 'currentColor',
          className: o()(x.icon, x.trashIcon)
        })
      })
    ]
  }),
  (0, a.jsxs)(s.Clickable, {
    className: o()(x.row, x.idRow),
    onClick: () => {
      (0, m.JG)(S), b(!0);
    },
    children: [
      (0, a.jsxs)(s.Text, {
        variant: 'eyebrow',
        color: 'always-white',
        children: [
          'Offer: ',
          S
        ]
      }),
      p ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: 'md',
        color: 'currentColor',
        className: o()(x.icon, x.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: 'xs',
        color: 'currentColor',
        className: x.icon
      })
    ]
  }),
  (0, a.jsxs)(s.Clickable, {
    className: o()(x.row, x.idRow),
    onClick: () => {
      (0, m.JG)(E), k(!0);
    },
    children: [
      (0, a.jsxs)(s.Text, {
        variant: 'eyebrow',
        color: 'always-white',
        children: [
          'Trial: ',
          E
        ]
      }),
      y ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: 'md',
        color: 'currentColor',
        className: o()(x.icon, x.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: 'xs',
        color: 'currentColor',
        className: x.icon
      })
    ]
  }),
  (0, a.jsx)('div', {
    children: (0, a.jsxs)(s.Text, {
      variant: 'eyebrow',
      color: 'always-white',
      children: [
        'Trial Length:',
        ' ',
        (0, g.if)({
          intervalType: null !== (i = null == Z ? void 0 : Z.interval) && void 0 !== i ? i : f.rV.MONTH,
          intervalCount: null !== (l = null == Z ? void 0 : Z.interval_count) && void 0 !== l ? l : 1,
          capitalize: !1
        })
      ]
    })
  }),
  (0, a.jsxs)('div', {
    className: x.badgeContainer,
    children: [
      (0, a.jsx)(s.Clickable, {
        onClick: L,
        className: o()(x.badge, x.clickable, {
          [x.acked]: B,
          [x.expired]: O
        }),
        children: (0, a.jsx)(s.Text, {
          variant: 'eyebrow',
          color: 'Acknowledged' === A ? void 0 : 'always-white',
          children: A
        })
      }),
      null != I && (0, a.jsx)('div', {
        className: o()(x.badge, x.__invalid_badgeBottom, x.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: 'eyebrow',
          color: 'always-white',
          children: 'Redeemed'
        })
      })
    ]
  }),
  (0, a.jsx)('div', {
    className: o()(x.loadingContainer, {
      [x.isLoading]: v || j
    }),
    children: (0, a.jsx)(s.Spinner, {})
  })
]
  });
}

function S(e) {
  var t, r;
  let {
offer: i,
offerOptions: l,
forceRefetch: c
  } = e, [u, h] = n.useState(!1), [g, p] = n.useState(!1), [b, f] = n.useState(!1), [y, k] = n.useState(!1);
  n.useEffect(() => {
b && k(!0);
let e = setTimeout(() => {
  k(!1);
}, 500);
return () => {
  clearTimeout(e);
};
  }, [b]);
  let {
id: v,
expires_at: w,
applied_at: j,
discount_id: N,
discount: S
  } = i, T = null !== (r = null === (t = l.find(e => {
let {
  value: t
} = e;
return t === N;
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : 'Unknown', I = null != w, E = null != w && new Date(w).getTime() < Date.now(), Z = async () => {
f(!0), I ? await C(v, 'discount') : await (0, d.a)(void 0, i), c(), f(!1);
  };
  n.useEffect(() => {
if (u) {
  let e = setTimeout(() => {
    h(!1);
  }, 3000);
  return () => {
    clearTimeout(e);
  };
}
if (g) {
  let e = setTimeout(() => {
    p(!1);
  }, 3000);
  return () => {
    clearTimeout(e);
  };
}
  }, [
u,
g
  ]);
  let R = 'Active';
  return E && (R = 'Expired'), I && (R = 'Acknowledged'), (0, a.jsxs)('div', {
className: o()(x.card, x.discount),
children: [
  (0, a.jsxs)('div', {
    className: o()(x.row, x.nameRow),
    children: [
      (0, a.jsx)(s.Heading, {
        variant: 'heading-lg/semibold',
        color: 'text-normal',
        children: T
      }),
      (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          f(!0), await _(v, 'discount'), c(), f(!1);
        },
        children: (0, a.jsx)(s.TrashIcon, {
          size: 'md',
          color: 'currentColor',
          className: o()(x.icon, x.trashIcon)
        })
      })
    ]
  }),
  (0, a.jsxs)(s.Clickable, {
    className: o()(x.row, x.idRow),
    onClick: () => {
      (0, m.JG)(v), h(!0);
    },
    children: [
      (0, a.jsxs)(s.Text, {
        variant: 'eyebrow',
        color: 'text-normal',
        children: [
          'Offer: ',
          v
        ]
      }),
      u ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: 'md',
        color: 'currentColor',
        className: o()(x.icon, x.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: 'xs',
        color: 'currentColor',
        className: x.icon
      })
    ]
  }),
  (0, a.jsxs)(s.Clickable, {
    className: o()(x.row, x.idRow),
    onClick: () => {
      (0, m.JG)(N), p(!0);
    },
    children: [
      (0, a.jsxs)(s.Text, {
        variant: 'eyebrow',
        color: 'text-normal',
        children: [
          'Discount: ',
          N
        ]
      }),
      g ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: 'md',
        color: 'currentColor',
        className: o()(x.icon, x.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: 'xs',
        color: 'currentColor',
        className: x.icon
      })
    ]
  }),
  (0, a.jsx)('div', {
    children: (0, a.jsxs)(s.Text, {
      variant: 'eyebrow',
      color: 'text-normal',
      children: [
        S.amount,
        '% off'
      ]
    })
  }),
  (0, a.jsxs)('div', {
    className: x.badgeContainer,
    children: [
      (0, a.jsx)(s.Clickable, {
        onClick: Z,
        className: o()(x.badge, x.clickable, {
          [x.acked]: I,
          [x.expired]: E
        }),
        children: (0, a.jsx)(s.Text, {
          variant: 'eyebrow',
          color: 'Acknowledged' === R ? void 0 : 'always-white',
          children: R
        })
      }),
      null != j && (0, a.jsx)('div', {
        className: o()(x.badge, x.__invalid_badgeBottom, x.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: 'eyebrow',
          color: 'always-white',
          children: 'Applied'
        })
      })
    ]
  }),
  (0, a.jsx)('div', {
    className: o()(x.loadingContainer, {
      [x.isLoading]: b || y
    }),
    children: (0, a.jsx)(s.Spinner, {})
  })
]
  });
}

function T() {
  let [e, t] = n.useState([]), [r, i] = n.useState([]), [l, m] = n.useState(), [g, b] = n.useState(), [f, _] = n.useState([]), [C, T] = n.useState([]), [I, E] = n.useState(!0);
  n.useEffect(() => {
(0 === e.length || 0 === r.length || I) && k().then(e => {
  let r = Object.keys(e.trial).map(t => ({
      label: t,
      value: e.trial[t]
    })),
    a = Object.keys(e.discount).map(t => ({
      label: t,
      value: e.discount[t]
    }));
  t(r), i(a), null == l && m(r[0].value), null == g && b(a[0].value);
});
  }, [
e,
r,
l,
g,
I
  ]), n.useEffect(() => {
I && (E(!1), h.Z.forceReset(), (0, d.T)(), w().then(e => {
  _(e.trial.sort((e, t) => e.id.localeCompare(t.id))), T(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
}));
  }, [I]);
  let Z = async () => {
null != l && (await v(l, 'trial'), E(!0));
  }, R = async () => {
null != g && (await v(g, 'discount'), E(!0));
  }, B = async () => {
await j(), E(!0);
  };
  return (0, a.jsx)(s.ScrollerThin, {
className: o()(y.panel),
children: (0, a.jsxs)('div', {
  className: x.panelInner,
  children: [
    (0, a.jsxs)('section', {
      className: x.section,
      children: [
        (0, a.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: 'Utils'
        }),
        (0, a.jsxs)('div', {
          className: x.buttons,
          children: [
            (0, a.jsx)(s.Button, {
              size: s.Button.Sizes.SMALL,
              onClick: B,
              children: 'Clear all User Offers'
            }),
            (0, a.jsx)(s.Button, {
              size: s.Button.Sizes.SMALL,
              onClick: () => (0, u.w9)(c.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
              children: 'Clear Mobile Trials DismissibleContent'
            }),
            (0, a.jsx)(s.Button, {
              size: s.Button.Sizes.SMALL,
              onClick: () => E(!0),
              children: 'Refresh DevTools'
            })
          ]
        })
      ]
    }),
    (0, a.jsxs)('section', {
      className: x.section,
      children: [
        (0, a.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: 'Create a Trial Offer'
        }),
        (0, a.jsxs)('div', {
          className: x.inputRow,
          children: [
            (0, a.jsx)(s.Select, {
              className: x.input,
              options: e,
              isSelected: e => l === e,
              placeholder: 'Trial Type',
              serialize: e => String(e),
              select: e => m(e),
              popoutLayerContext: p.O$
            }),
            (0, a.jsx)(s.Button, {
              onClick: Z,
              children: 'Create'
            })
          ]
        })
      ]
    }),
    (0, a.jsxs)('section', {
      className: x.section,
      children: [
        (0, a.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: 'Create a Discount Offer'
        }),
        (0, a.jsxs)('div', {
          className: x.inputRow,
          children: [
            (0, a.jsx)(s.Select, {
              className: x.input,
              options: r,
              isSelected: e => g === e,
              placeholder: 'Discount Type',
              serialize: e => String(e),
              select: e => b(e),
              popoutLayerContext: p.O$
            }),
            (0, a.jsx)(s.Button, {
              onClick: R,
              children: 'Create'
            })
          ]
        })
      ]
    }),
    f.length > 0 && (0, a.jsxs)('section', {
      className: x.section,
      children: [
        (0, a.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: 'Existing Trial Offers'
        }),
        f.map(t => (0, a.jsx)(N, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => E(!0)
        }, t.id))
      ]
    }),
    C.length > 0 && (0, a.jsxs)('section', {
      className: x.section,
      children: [
        (0, a.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: 'Existing Discount Offers'
        }),
        C.map(e => (0, a.jsx)(S, {
          offer: e,
          offerOptions: r,
          forceRefetch: () => E(!0)
        }, e.id))
      ]
    })
  ]
})
  });
}