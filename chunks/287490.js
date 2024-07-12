s.d(t, {
  Z: function() {
return N;
  }
}), s(47120), s(653041);
var n = s(735250),
  a = s(470079),
  i = s(392711),
  r = s.n(i),
  o = s(442837),
  l = s(481060),
  c = s(492435),
  d = s(353926),
  _ = s(430824),
  E = s(499533),
  u = s(878209),
  T = s(987338),
  I = s(21501);

function S(e, t) {
  return e.map((e, s) => ({
label: 'object' == typeof t ? t[s] : E.Z.getExperimentBucketName(e),
value: e
  }));
}

function N() {
  let e = (0, o.cj)([d.Z], () => d.Z.getAllExperimentOverrideDescriptors()),
t = (0, o.cj)([d.Z], () => d.Z.getRegisteredExperiments()),
[s, i] = a.useState(''),
r = (0, u.Ro)((0, u.Tc)((0, u.Cg)(t), e), s);
  return (0, n.jsxs)(l.FormSection, {
tag: l.FormTitleTags.H1,
title: 'Experiments',
children: [
  (0, n.jsx)(l.SearchBar, {
    size: l.SearchBar.Sizes.LARGE,
    query: s,
    onChange: i,
    onClear: () => i('')
  }),
  r.length > 0 ? r.map(t => {
    let s = t.experiment.type === T.xY.GUILD ? m : C;
    return (0, n.jsx)(s, {
      experiment: t.experiment,
      experimentId: t.id,
      overrideDescriptor: e[t.id]
    }, t.id);
  }) : (0, n.jsx)('div', {
    className: I.emptyState,
    children: (0, n.jsx)(l.Heading, {
      variant: 'heading-md/semibold',
      children: 'No Experiments Found'
    })
  })
]
  });
}

function C(e) {
  var t;
  let {
experiment: s,
experimentId: i,
overrideDescriptor: _
  } = e, [E, u] = a.useState(null != _), [N, C] = a.useState(!1), m = a.useCallback(() => {
u(e => !e);
  }, []), A = (0, o.e7)([d.Z], () => d.Z.getUserExperimentDescriptor(i)), h = (0, o.e7)([d.Z], () => d.Z.getLoadedUserExperiment(i)), g = (0, o.e7)([d.Z], () => r().sortBy(d.Z.getRecentExposures(T.xY.USER, i), e => {
let [t, s] = e;
return -s;
  }).map(e => {
let [t, s] = e;
return ''.concat(new Date(s).toLocaleString(), ' (').concat(t, ')');
  })), O = (0, n.jsx)(l.Clickable, {
onClick: m,
children: (0, n.jsxs)(l.FormTitle, {
  tag: l.FormTitleTags.H3,
  className: I.title,
  children: [
    (0, n.jsxs)('div', {
      children: [
        (0, n.jsx)('span', {
          children: s.title
        }),
        (0, n.jsx)(l.Text, {
          color: 'text-muted',
          variant: 'text-sm/normal',
          children: i
        })
      ]
    }),
    (0, n.jsx)('span', {
      className: I.experimentDate,
      children: 'User'
    })
  ]
})
  });
  return E ? (0, n.jsxs)('div', {
className: I.group,
children: [
  (0, n.jsxs)(l.FormSection, {
    children: [
      O,
      (0, n.jsxs)('div', {
        children: [
          (0, n.jsx)(l.FormItem, {
            title: 'Bucket Override',
            children: (0, n.jsx)(l.SingleSelect, {
              value: null != _ ? _.bucket : null,
              clearable: null != _,
              options: S(s.buckets, s.description),
              onChange: e => {
                (0, c.rX)(i, e);
              }
            })
          }),
          'string' == typeof s.description ? (0, n.jsx)('div', {
            className: I.description,
            children: (0, n.jsx)(l.FormText, {
              type: l.FormTextTypes.DESCRIPTION,
              children: s.description
            })
          }) : null
        ]
      }),
      (0, n.jsxs)('div', {
        className: I.description,
        children: [
          (0, n.jsxs)(l.FormText, {
            type: l.FormTextTypes.DESCRIPTION,
            children: [
              'Current assigned to bucket ',
              null !== (t = null == A ? void 0 : A.bucket) && void 0 !== t ? t : T.NZ.NOT_ELIGIBLE
            ]
          }),
          null == h ? (0, n.jsx)(l.FormText, {
            type: l.FormTextTypes.DESCRIPTION,
            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
          }) : null
        ]
      }),
      N ? (0, n.jsxs)('div', {
        children: [
          (0, n.jsx)(l.FormTitle, {
            tag: 'h5',
            className: I.debugTitle,
            children: 'Server Descriptor'
          }),
          (0, n.jsx)(l.Text, {
            variant: 'code',
            className: I.pre,
            children: null == h ? 'None' : JSON.stringify(h, void 0, 2)
          }),
          (0, n.jsx)(l.FormTitle, {
            tag: 'h5',
            className: I.debugTitle,
            children: 'Override Descriptor'
          }),
          (0, n.jsx)(l.Text, {
            variant: 'code',
            className: I.pre,
            children: null == _ ? 'None' : JSON.stringify(_, void 0, 2)
          }),
          (0, n.jsx)(l.FormTitle, {
            tag: 'h5',
            className: I.debugTitle,
            children: 'Recent Exposures'
          }),
          (0, n.jsx)(l.Text, {
            variant: 'code',
            className: I.pre,
            children: 0 === g.length ? 'None' : g.join('\n')
          })
        ]
      }) : (0, n.jsx)(l.Button, {
        className: I.debugButton,
        size: l.Button.Sizes.SMALL,
        look: l.Button.Looks.BLANK,
        onClick: () => C(!0),
        children: 'More Details \xBB'
      })
    ]
  }),
  (0, n.jsx)(l.FormDivider, {
    className: I.divider
  })
]
  }) : (0, n.jsx)('div', {
className: I.group,
children: (0, n.jsx)(l.FormSection, {
  children: O
})
  });
}

function m(e) {
  let {
experiment: t,
experimentId: s,
overrideDescriptor: i
  } = e, [E, u] = a.useState(null != i), [N, C] = a.useState(!1), m = a.useCallback(() => {
u(e => !e);
  }, []), A = (0, o.e7)([d.Z], () => d.Z.getLoadedGuildExperiment(s)), h = (0, o.e7)([d.Z], () => r().sortBy(d.Z.getRecentExposures(T.xY.GUILD, s), e => {
let [t, s] = e;
return -s;
  }).map(e => {
let [t, s] = e;
return ''.concat(new Date(s).toLocaleString(), ' (').concat(t, ')');
  })), [g, O] = (0, o.Wu)([
_.Z,
d.Z
  ], () => {
let e = r().sortBy(r().values(_.Z.getGuilds()), e => e.name.toLowerCase()),
  t = {},
  n = [];
for (let i of e) {
  var a;
  let e = d.Z.getGuildExperimentDescriptor(s, i.id),
    r = null !== (a = null == e ? void 0 : e.bucket) && void 0 !== a ? a : T.NZ.NOT_ELIGIBLE;
  !(r in t) && (t[r] = 0), t[r]++, n.push(''.concat(i.name, ': ').concat(r));
}
return [
  n,
  r()(t).keys().map(Number).sort().map(e => ''.concat(t[e], ' guilds in bucket ').concat(e)).join(', ')
];
  }), p = (0, n.jsx)(l.Clickable, {
onClick: m,
children: (0, n.jsxs)(l.FormTitle, {
  tag: l.FormTitleTags.H3,
  className: I.title,
  children: [
    (0, n.jsxs)('div', {
      children: [
        (0, n.jsx)('span', {
          children: t.title
        }),
        (0, n.jsx)(l.Text, {
          color: 'text-muted',
          variant: 'text-sm/normal',
          children: s
        })
      ]
    }),
    (0, n.jsx)('span', {
      className: I.experimentDate,
      children: 'Guild'
    })
  ]
})
  });
  return E ? (0, n.jsxs)('div', {
className: I.group,
children: [
  (0, n.jsxs)(l.FormSection, {
    children: [
      p,
      (0, n.jsxs)('div', {
        children: [
          (0, n.jsx)(l.FormItem, {
            title: 'Bucket Override',
            children: (0, n.jsx)(l.SingleSelect, {
              value: null != i ? i.bucket : null,
              clearable: null != i,
              options: S(t.buckets, t.description),
              onChange: e => {
                (0, c.rX)(s, e);
              }
            })
          }),
          'string' == typeof t.description ? (0, n.jsx)('div', {
            className: I.description,
            children: (0, n.jsx)(l.FormText, {
              type: l.FormTextTypes.DESCRIPTION,
              children: t.description
            })
          }) : null
        ]
      }),
      (0, n.jsxs)('div', {
        className: I.description,
        children: [
          (0, n.jsxs)(l.FormText, {
            type: l.FormTextTypes.DESCRIPTION,
            children: [
              'Current Assignments: ',
              O
            ]
          }),
          null == A ? (0, n.jsx)(l.FormText, {
            type: l.FormTextTypes.DESCRIPTION,
            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
          }) : null
        ]
      }),
      N ? (0, n.jsxs)('div', {
        children: [
          (0, n.jsx)(l.FormTitle, {
            tag: 'h5',
            className: I.debugTitle,
            children: 'Guild Assignments'
          }),
          (0, n.jsx)(l.Text, {
            variant: 'code',
            className: I.pre,
            children: g.join('\n')
          }),
          (0, n.jsx)(l.FormTitle, {
            tag: 'h5',
            className: I.debugTitle,
            children: 'Server Descriptor'
          }),
          (0, n.jsx)(l.Text, {
            variant: 'code',
            className: I.pre,
            children: null == A ? 'None' : JSON.stringify(A, void 0, 2)
          }),
          (0, n.jsx)(l.FormTitle, {
            tag: 'h5',
            className: I.debugTitle,
            children: 'Override Descriptor'
          }),
          (0, n.jsx)(l.Text, {
            variant: 'code',
            className: I.pre,
            children: null == i ? 'None' : JSON.stringify(i, void 0, 2)
          }),
          (0, n.jsx)(l.FormTitle, {
            tag: 'h5',
            className: I.debugTitle,
            children: 'Recent Exposures'
          }),
          (0, n.jsx)(l.Text, {
            variant: 'code',
            className: I.pre,
            children: 0 === h.length ? 'None' : h.join('\n')
          })
        ]
      }) : (0, n.jsx)(l.Button, {
        className: I.debugButton,
        size: l.Button.Sizes.SMALL,
        look: l.Button.Looks.BLANK,
        onClick: () => C(!0),
        children: 'More Details \xBB'
      })
    ]
  }),
  (0, n.jsx)(l.FormDivider, {
    className: I.divider
  })
]
  }) : (0, n.jsx)('div', {
className: I.group,
children: (0, n.jsx)(l.FormSection, {
  children: p
})
  });
}