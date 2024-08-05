s(653041), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(658722),
  l = s.n(o),
  c = s(243814),
  d = s(442837),
  _ = s(921072),
  E = s(1561),
  u = s(481060),
  T = s(384275),
  I = s(230711),
  S = s(497321),
  N = s(468026),
  C = s(566620),
  m = s(317381),
  A = s(979200),
  g = s(713938),
  h = s(881998),
  O = s(246946),
  p = s(285952),
  R = s(768581),
  x = s(49012),
  M = s(210887),
  f = s(436267),
  D = s(494620),
  P = s(981631),
  L = s(689938),
  b = s(756576),
  Z = s(549856);
let v = d.ZP.connectStores([M.Z], () => ({
  theme: M.Z.theme
}))(u.EmptyState);

function j(e) {
  let {
application: t
  } = e;
  return (0, n.jsxs)('div', {
className: b.twoWayWarning,
children: [
  (0, n.jsx)(u.CircleInformationIcon, {
    size: 'md',
    color: 'currentColor',
    className: b.twoWayWarningIcon
  }),
  (0, n.jsx)(u.Text, {
    color: 'text-normal',
    variant: 'text-sm/medium',
    children: L.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
      applicationName: t.name,
      onConnectionPress: () => I.Z.setSection(P.jXE.SETTINGS_CONNECTIONS)
    })
  })
]
  });
}
let B = e => {
let {
  disclosure: t
} = e;
return a.useMemo(() => {
  switch (t) {
    case _.u$.IP_LOCATION:
      return (0, n.jsx)(u.GlobeEarthIcon, {
        size: 'md',
        color: 'currentColor',
        className: b.disclosureIcon
      });
    case _.u$.DISPLAYS_ADVERTISEMENTS:
      return (0, n.jsx)(u.EmbedIcon, {
        className: b.disclosureIcon
      });
    default:
      return (0, n.jsx)(u.CircleInformationIcon, {
        className: b.disclosureIcon
      });
  }
}, [t]);
  },
  U = e => {
let {
  scopes: t,
  application: s,
  onDelete: a,
  disclosures: i
} = e, o = () => {
  let e = L.Z.Messages.DELETE_APP_CONFIRM_MSG;
  return (0, f.Z)(s.id) && (e = (0, n.jsxs)(n.Fragment, {
    children: [
      e,
      (0, n.jsx)(D.Z, {
        className: b.infoBox,
        children: L.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
          applicationName: s.name
        })
      })
    ]
  })), (0, u.openModal)(t => (0, n.jsx)(N.default, {
    title: L.Z.Messages.DEAUTHORIZE_APP,
    body: e,
    confirmText: L.Z.Messages.DEAUTHORIZE,
    cancelText: L.Z.Messages.CANCEL,
    onConfirm: a,
    ...t
  }));
}, l = () => {
  null != s.terms_of_service_url && (0, x.q)({
    href: s.terms_of_service_url,
    shouldConfirm: !0
  });
}, d = () => {
  null != s.privacy_policy_url && (0, x.q)({
    href: s.privacy_policy_url,
    shouldConfirm: !0
  });
}, _ = (0, f.O)(s.id);
return (0, n.jsx)(u.Card, {
  className: r()(b.authedApp, Z.marginBottom8),
  outline: !0,
  children: (0, n.jsxs)(u.HeadingLevel, {
    component: (() => {
      let e = R.ZP.getApplicationIconURL({
          id: s.id,
          icon: s.icon
        }),
        t = null != e ? (0, n.jsx)(p.Z.Child, {
          className: b.appAvatar,
          grow: 0,
          children: (0, n.jsx)('img', {
            src: e,
            alt: ''
          })
        }) : null;
      return (0, n.jsxs)(p.Z, {
        className: r()(b.__invalid_header, Z.marginBottom20),
        children: [
          (0, n.jsxs)(p.Z, {
            className: b.headerInfo,
            children: [
              t,
              (0, n.jsx)(p.Z.Child, {
                children: (0, n.jsx)(u.Heading, {
                  variant: 'text-sm/semibold',
                  children: s.name
                })
              })
            ]
          }),
          (0, n.jsx)(p.Z.Child, {
            wrap: !0,
            grow: 0,
            children: (0, n.jsx)(u.Button, {
              color: u.ButtonColors.RED,
              look: u.ButtonLooks.OUTLINED,
              size: u.ButtonSizes.SMALL,
              onClick: o,
              children: L.Z.Messages.DEAUTHORIZE
            })
          })
        ]
      });
    })(),
    children: [
      (() => {
        if (null != s.description && '' !== s.description)
          return (0, n.jsx)(u.FormItem, {
            faded: !0,
            title: L.Z.Messages.ABOUT_THIS_APP,
            children: (0, n.jsx)(u.FormText, {
              children: s.description
            })
          });
      })(),
      (() => {
        if (null != s.terms_of_service_url || null != s.privacy_policy_url)
          return (0, n.jsxs)('div', {
            className: b.tosPrivacy,
            children: [
              null != s.terms_of_service_url ? (0, n.jsxs)(E.P, {
                tag: 'a',
                onClick: l,
                className: b.tos,
                children: [
                  (0, n.jsx)(u.FormText, {
                    className: b.link,
                    children: L.Z.Messages.AUTHORIZED_APPS_TERMS_OF_SERVICE
                  }),
                  (0, n.jsx)(u.LinkExternalSmallIcon, {
                    className: b.externalLinkIcon,
                    color: 'var(--text-link)'
                  })
                ]
              }) : null,
              null != s.privacy_policy_url ? (0, n.jsxs)('div', {
                className: b.privacy,
                children: [
                  null != s.terms_of_service_url ? (0, n.jsx)('div', {
                    className: b.divider
                  }) : null,
                  (0, n.jsxs)(E.P, {
                    tag: 'a',
                    onClick: d,
                    className: b.privacy,
                    children: [
                      (0, n.jsx)(u.FormText, {
                        className: b.link,
                        children: L.Z.Messages.AUTHORIZED_APPS_PRIVACY_POLICY
                      }),
                      (0, n.jsx)(u.LinkExternalSmallIcon, {
                        className: b.externalLinkIcon,
                        color: 'var(--text-link)'
                      })
                    ]
                  })
                ]
              }) : null
            ]
          });
      })(),
      (() => {
        let e = [];
        for (let s of t)
          e.push((0, g.jW)(s, t)), s === c.x.APPLICATIONS_COMMANDS && e.push(L.Z.Messages.SCOPE_DM_YOU);
        if (e.length > 0 || null != i && i.length > 0)
          return (0, n.jsx)(u.FormItem, {
            faded: !0,
            title: L.Z.Messages.PERMISSIONS,
            className: Z.marginTop20,
            children: (0, n.jsxs)('ul', {
              children: [
                e.map((e, t) => (0, n.jsxs)('li', {
                  className: r()(b.permission, Z.marginTop8),
                  children: [
                    (0, n.jsx)('i', {
                      className: b.permissionCheckmark
                    }),
                    (0, n.jsx)(u.FormText, {
                      children: e
                    })
                  ]
                }, t)),
                null == i ? void 0 : i.map((t, s) => {
                  let a = (0, A.PM)(t);
                  return null != a ? (0, n.jsxs)('li', {
                    className: r()(b.permission, Z.marginTop8),
                    children: [
                      (0, n.jsx)(B, {
                        disclosure: t
                      }),
                      (0, n.jsx)(u.FormText, {
                        children: a
                      })
                    ]
                  }, s + e.length) : null;
                })
              ]
            })
          });
      })(),
      _ && (0, n.jsx)(j, {
        application: s
      })
    ]
  })
});
  };
t.Z = () => {
  let e = (0, d.e7)([O.Z], () => O.Z.hidePersonalInformation),
t = (0, d.e7)([h.Z], () => h.Z.getApps()),
i = (0, d.e7)([m.ZP], () => m.ZP.getSelfEmbeddedActivities());
  a.useEffect(() => {
T.Z.fetch();
  }, []);
  let r = e => {
  let {
    id: t,
    application: s
  } = e;
  T.Z.delete(t);
  let n = i.get(s.id);
  null != n && (0, C.mW)({
    channelId: n.channelId,
    applicationId: s.id
  });
},
[o, c] = a.useState(''),
_ = e => {
  c(e);
},
E = () => {
  c('');
},
I = () => (0, n.jsx)('div', {
  className: b.searchContainer,
  children: (0, n.jsx)(u.SearchBar, {
    size: u.SearchBar.Sizes.MEDIUM,
    query: o,
    onChange: _,
    onClear: E,
    placeholder: L.Z.Messages.INTEGRATIONS_SEARCH,
    'aria-label': L.Z.Messages.INTEGRATIONS_SEARCH
  })
}),
N = (e, t) => (0, n.jsxs)(v, {
  className: b.__invalid_marginTop20,
  children: [
    (0, n.jsx)(u.EmptyStateImage, {
      darkSrc: s(701972),
      lightSrc: s(818658),
      width: 380,
      height: 282
    }),
    (0, n.jsx)(u.EmptyStateText, {
      note: e,
      children: t
    })
  ]
}),
A = a.useMemo(() => {
  let e = o.trim().toLowerCase();
  return '' === e || null == t ? t : t.length < 100 ? t.filter(t => l()(e, t.application.name.toLowerCase())) : t.filter(t => t.application.name.toLowerCase().includes(e));
}, [
  t,
  o
]);
  return e ? (0, n.jsx)(S.Z, {}) : (0, n.jsx)(u.FormSection, {
tag: u.FormTitleTags.H1,
title: L.Z.Messages.AUTHORIZED_APPS,
children: (0, n.jsx)(u.HeadingLevel, {
  component: (0, n.jsx)(u.FormNotice, {
    className: Z.marginBottom40,
    type: u.CardTypes.PRIMARY,
    title: L.Z.Messages.APPLICATIONS_AND_CONNECTIONS,
    body: L.Z.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
  }),
  children: null == t || null == A ? (0, n.jsx)(u.Spinner, {
    className: Z.marginTop20,
    type: u.Spinner.Type.SPINNING_CIRCLE
  }) : 0 === t.length ? N(L.Z.Messages.NO_AUTHORIZED_APPS_NOTE, L.Z.Messages.NO_AUTHORIZED_APPS) : 0 === A.length ? (0, n.jsxs)(n.Fragment, {
    children: [
      I(),
      N(null, L.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH)
    ]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [
      I(),
      A.sort((e, t) => e.application.name.localeCompare(t.application.name)).map(e => (0, n.jsx)(U, {
        onDelete: () => r(e),
        ...e
      }, e.id))
    ]
  })
})
  });
};