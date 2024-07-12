n.d(t, {
  E3: function() {
return R;
  },
  OA: function() {
return y;
  },
  tH: function() {
return C;
  }
}), n(653041);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(692547),
  l = n(780384),
  u = n(481060),
  c = n(99690),
  d = n(726542),
  _ = n(367907),
  E = n(132871),
  f = n(147890),
  h = n(122021),
  p = n(275759),
  m = n(323588),
  I = n(753194),
  T = n(598077),
  g = n(671533),
  S = n(49012),
  A = n(981631),
  N = n(856651),
  v = n(689938),
  O = n(679515);

function R(e) {
  var t, n;
  let i, a, c, {
connectedAccount: E,
theme: f,
locale: T,
userId: R,
className: C,
showMetadata: y,
showInvisibleIcon: D
  } = e;
  null == y && (y = !0);
  let L = null !== (n = E.metadata) && void 0 !== n ? n : {},
b = y ? (0, p.FI)(L[N.PC.CREATED_AT], T) : null,
M = (0, u.useToken)(s.Z.unsafe_rawColors.TWITTER).hex(),
P = v.Z.Messages.CONNECTION_VERIFIED;
  if (y)
switch (E.type) {
  case A.ABu.REDDIT:
    i = (0, m.oP)(L);
    break;
  case A.ABu.STEAM:
    i = (0, m.Dq)(L);
    break;
  case A.ABu.TWITTER:
    i = (0, m.rJ)(L), '1' === L[N.PC.TWITTER_VERIFIED] && (a = M, P = v.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER);
    break;
  case A.ABu.PAYPAL:
    i = (0, m.li)(L);
    break;
  case A.ABu.EBAY:
    i = (0, m.ul)(L);
    break;
  case A.ABu.TIKTOK:
    i = (0, m.hf)(L);
}
  let U = d.Z.get((0, h.rR)(E.type)),
w = null == U ? void 0 : null === (t = U.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(U, E);
  null != D && D ? c = (0, r.jsx)(u.EyeSlashIcon, {
size: 'md',
color: 'currentColor',
className: o()(O.__invalid_connectedAccountOpenIconContainer, O.connectedAccountHideIcon)
  }) : null != w && (c = (0, r.jsx)(u.Anchor, {
href: w,
onClick: e => {
  var t, n;
  t = E.type, n = R, (0, _.yw)(A.rMx.CONNECTED_ACCOUNT_VIEWED, {
    platform_type: t,
    other_user_id: n
  }), (0, S.q)({
    href: w,
    trusted: (null == U ? void 0 : U.type) !== A.ABu.DOMAIN
  }, e);
},
children: (0, r.jsx)(g.Z, {
  className: O.connectedAccountOpenIcon,
  direction: g.Z.Directions.RIGHT
})
  }));
  let x = (0, u.useToken)(s.Z.colors.INTERACTIVE_MUTED).hex(),
G = (0, u.useToken)(s.Z.colors.INTERACTIVE_ACTIVE).hex(),
k = E.verified ? (0, r.jsx)(I.Z, {
  className: O.connectedAccountVerifiedIcon,
  color: null != a ? a : x,
  forcedIconColor: G,
  size: 16,
  tooltipText: P
}) : null;
  return (0, r.jsxs)('div', {
className: o()(O.connectedAccountContainer, null != i && i.length > 0 || null != b ? O.connectedAccountContainerWithMetadata : null, C),
children: [
  (0, r.jsxs)('div', {
    className: O.connectedAccount,
    children: [
      (0, r.jsx)(u.Tooltip, {
        text: null == U ? void 0 : U.name,
        children: e => (0, r.jsx)('img', {
          ...e,
          alt: v.Z.Messages.IMG_ALT_LOGO.format({
            name: null == U ? void 0 : U.name
          }),
          className: O.connectedAccountIcon,
          src: (0, l.wj)(f) ? null == U ? void 0 : U.icon.darkSVG : null == U ? void 0 : U.icon.lightSVG
        })
      }),
      (0, r.jsxs)('div', {
        className: O.connectedAccountNameContainer,
        children: [
          (0, r.jsxs)('div', {
            className: O.connectedAccountName,
            children: [
              (0, r.jsxs)('div', {
                className: O.connectedAccountNameTextContainer,
                children: [
                  (0, r.jsx)(u.Tooltip, {
                    overflowOnly: !0,
                    text: E.name,
                    children: e => (0, r.jsx)(u.Text, {
                      ...e,
                      variant: 'text-md/semibold',
                      color: 'interactive-active',
                      className: O.connectedAccountNameText,
                      children: E.name
                    })
                  }),
                  k
                ]
              }),
              c
            ]
          }),
          null != b ? (0, r.jsx)(u.Text, {
            variant: 'text-xs/normal',
            color: 'header-secondary',
            children: v.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
              date: b
            })
          }) : null
        ]
      })
    ]
  }),
  null != i && i.length > 0 ? (0, r.jsx)('div', {
    className: O.connectedAccountChildren,
    children: i
  }) : null
]
  });
}

function C(e) {
  let {
applicationRoleConnection: t,
className: n,
locale: i,
onApplicationClicked: a,
selectedGuildId: s
  } = e, l = (0, m.rm)(t, void 0, i), d = () => {
null == a || a(), (0, f.goToAppDirectory)({
  view: E.ApplicationDirectoryViews.APPLICATION,
  applicationId: t.application.id,
  guildId: s,
  entrypoint: {
    name: E.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
  }
});
  };
  return (0, r.jsxs)('div', {
className: o()(O.connectedAccountContainer, null != l && l.length > 0 ? O.connectedAccountContainerWithMetadata : null, n),
children: [
  (0, r.jsx)('div', {
    className: O.connectedAccount,
    children: (0, r.jsxs)(u.Clickable, {
      className: o()(O.connectedAccountNameContainer, O.connectedAccountNameContainerClickable),
      onClick: d,
      children: [
        null != t.platform_name ? (0, r.jsx)(u.Text, {
          variant: 'eyebrow',
          color: 'interactive-normal',
          children: t.platform_name
        }) : null,
        null != t.platform_username ? (0, r.jsx)('div', {
          className: O.connectedAccountName,
          children: (0, r.jsx)('div', {
            className: O.connectedAccountNameTextContainer,
            children: (0, r.jsx)(u.Text, {
              variant: 'text-md/semibold',
              color: 'interactive-active',
              className: O.connectedAccountNameText,
              children: t.platform_username
            })
          })
        }) : null
      ]
    })
  }),
  null != l && l.length > 0 ? (0, r.jsx)('div', {
    className: o()(O.connectedAccountChildren, O.connectedAccountChildrenNoIcon),
    children: l
  }) : null,
  (0, r.jsx)('div', {
    children: (0, r.jsx)(u.Clickable, {
      className: O.connectedAccountPoweredBy,
      onClick: d,
      children: (0, r.jsx)(u.Text, {
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: v.Z.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
          applicationHook: () => (0, r.jsxs)('div', {
            className: O.connectedAccountPoweredByText,
            children: [
              null != t.application.bot ? (0, r.jsx)(c.Z, {
                user: new T.Z(t.application.bot),
                size: u.AvatarSizes.SIZE_16
              }) : null,
              (0, r.jsx)(u.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                children: t.application.name
              })
            ]
          })
        })
      })
    })
  })
]
  });
}
let y = i.forwardRef(function(e, t) {
  let {
connectedAccounts: n,
theme: i,
locale: a,
className: s,
userId: l
  } = e;
  if (null == n || 0 === n.length)
return null;
  let u = n.filter(e => d.Z.isSupported(e.type)).map(e => (0, r.jsx)(R, {
  connectedAccount: e,
  theme: i,
  locale: a,
  userId: l
}, ''.concat(e.type, ':').concat(e.id))),
c = [],
_ = [];
  for (let e = 0; e < u.length; e++) {
let t = u[e];
e % 2 == 0 ? c.push(t) : _.push(t);
  }
  return (0, r.jsxs)('div', {
ref: t,
className: o()(O.connectedAccounts, s),
children: [
  (0, r.jsx)('div', {
    className: O.connectedAccountsColumn,
    children: c
  }),
  (0, r.jsx)('div', {
    className: O.connectedAccountsColumn,
    children: _
  })
]
  });
});