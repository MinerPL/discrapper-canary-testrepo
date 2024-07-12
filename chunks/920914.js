s(47120), s(653041), s(773603);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(704215),
  c = s(692547),
  d = s(780384),
  _ = s(481060),
  E = s(570140),
  u = s(457330),
  T = s(497321),
  I = s(23551),
  S = s(468026),
  N = s(410030),
  C = s(726542),
  m = s(122021),
  A = s(275759),
  h = s(231757),
  g = s(323588),
  O = s(605236),
  p = s(553795),
  R = s(430824),
  x = s(771845),
  M = s(246946),
  D = s(797717),
  f = s(346656),
  P = s(626135),
  L = s(63063),
  Z = s(706454),
  b = s(349728),
  v = s(494620),
  j = s(205266),
  B = s(216153),
  U = s(981631),
  G = s(856651),
  F = s(921944),
  y = s(689938),
  V = s(374265),
  Y = s(549856);
let w = e => {
  var t, s;
  let a, {
  integration: i
} = e,
{
  isJoining: r,
  joinErrorMessage: l,
  showJoinErrorMessage: c
} = (0, o.cj)([p.Z], () => ({
  isJoining: p.Z.isJoining(i.id),
  joinErrorMessage: '' === p.Z.joinErrorMessage(i.id) ? y.Z.Messages.ERROR : p.Z.joinErrorMessage(i.id),
  showJoinErrorMessage: void 0 !== p.Z.joinErrorMessage(i.id)
}), [i.id]),
d = null != (0, o.e7)([R.Z], () => R.Z.getGuild(i.guild.id), [i.guild.id]);
  return !d && (a = (0, n.jsx)(_.Button, {
size: _.ButtonSizes.SMALL,
onClick: function() {
  u.Z.joinServer(i.id, () => {});
},
disabled: r,
children: (0, n.jsx)('span', {
  children: r ? y.Z.Messages.JOINING_GUILD : y.Z.Messages.JOIN_GUILD
})
  })), (0, n.jsxs)('div', {
className: V.integrationWrapper,
children: [
  (0, n.jsxs)('div', {
    className: V.integration,
    children: [
      (0, n.jsx)(f.Z, {
        size: f.Z.Sizes.SMALL,
        guild: i.guild,
        className: V.guildIcon
      }),
      (0, n.jsxs)('div', {
        className: V.integrationInner,
        children: [
          (0, n.jsx)(_.Text, {
            variant: 'text-md/semibold',
            color: 'header-primary',
            children: i.guild.toString()
          }),
          (0, n.jsx)(_.Anchor, {
            href: null === (s = C.Z.get(i.type)) || void 0 === s ? void 0 : null === (t = s.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(s, i.account),
            children: (0, n.jsx)(_.Text, {
              variant: 'text-xs/normal',
              color: 'header-secondary',
              children: i.account.name
            })
          })
        ]
      }),
      a
    ]
  }),
  c && (0, n.jsx)(_.Text, {
    variant: 'text-xs/normal',
    color: 'text-danger',
    className: V.integrationError,
    children: l
  })
]
  });
};

function k(e) {
  var t, s, i;
  let r, o, l, {
  onDisconnect: E,
  account: T,
  theme: I,
  locale: N
} = e,
[O, p] = a.useState(T.friendSync),
[R, x] = a.useState(T.visibility),
[M, f] = a.useState(T.metadataVisibility),
[P, Z] = a.useState(T.showActivity),
[F, Y] = a.useState(null),
[k, H] = a.useState(null),
[W, K] = a.useState(!1),
[z, Q] = a.useState([]),
X = (0, m.rR)(T.type),
q = C.Z.get(X);
  a.useEffect(() => {
p(T.friendSync), x(T.visibility), f(T.metadataVisibility), Z(T.showActivity);
  }, [T]), a.useEffect(() => {
if (!1 !== T.verified)
  null != F && (x(F), u.Z.setVisibility(T.type, T.id, F), Y(null)), null != k && (f(k), u.Z.setMetadataVisibility(T.type, T.id, k), H(null));
  }, [T]);

  function J() {
(0, h.Z)({
  platformType: T.type,
  location: 'User Settings'
});
  }

  function $() {
let e = C.Z.get(T.type),
  t = y.Z.Messages.DISCONNECT_ACCOUNT_BODY;
(0, b.Z)(T) && (t = (0, n.jsxs)(n.Fragment, {
  children: [
    t,
    (0, n.jsx)(v.Z, {
      className: V.infoBox,
      children: y.Z.Messages.CONNECTED_ACCOUNT_IS_AUTHORIZED_APP_DISCONNECT_WARNING.format({
        platformName: e.name
      })
    })
  ]
})), (0, _.openModal)(s => (0, n.jsx)(S.default, {
  title: y.Z.Messages.DISCONNECT_ACCOUNT_TITLE.format({
    name: e.name
  }),
  body: t,
  confirmText: y.Z.Messages.DISCONNECT_ACCOUNT,
  cancelText: y.Z.Messages.CANCEL,
  onConfirm: E,
  ...s
}));
  }

  function ee(e) {
let {
  verified: t
} = T, s = e ? 1 : 0;
if (e && !t) {
  Y(s), (0, h.Z)({
    platformType: T.type,
    location: 'User Settings'
  });
  return;
}
x(s), u.Z.setVisibility(T.type, T.id, s);
  }

  function et(e) {
let {
  verified: t
} = T, s = e ? 1 : 0;
if (e && !t) {
  H(s), (0, h.Z)({
    platformType: T.type,
    location: 'User Settings'
  });
  return;
}
f(s), u.Z.setMetadataVisibility(T.type, T.id, s);
  }

  function es(e) {
p(e), u.Z.setFriendSync(T.type, T.id, e);
  }

  function en(e) {
Z(e), u.Z.setShowActivity(T.type, T.id, e);
  }
  return (0, n.jsxs)('div', {
className: V.connection,
children: [
  function(e) {
    var t;
    let s = C.Z.get(e.type),
      a = C.Z.get(X),
      i = '1' === (null !== (t = e.metadata) && void 0 !== t ? t : {})[G.PC.TWITTER_VERIFIED],
      r = null;
    return s.type === U.ABu.TWITTER && i && (r = (0, n.jsx)(_.Tooltip, {
      text: y.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER,
      children: e => (0, n.jsx)(D.Z, {
        ...e,
        className: V.connectionAccountLabelVerified,
        color: c.Z.unsafe_rawColors.TWITTER.css,
        children: (0, n.jsx)(_.CheckmarkSmallIcon, {
          size: 'xs',
          color: c.Z.unsafe_rawColors.WHITE_500.css
        })
      })
    })), (0, n.jsxs)('div', {
      className: V.connectionHeader,
      children: [
        (0, n.jsx)('img', {
          alt: a.name,
          className: V.connectionIcon,
          src: (0, d.wj)(I) ? a.icon.darkSVG : a.icon.lightSVG
        }),
        (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(_.Text, {
              color: 'header-primary',
              variant: 'text-md/semibold',
              className: V.connectionAccountValue,
              children: (0, n.jsxs)('div', {
                className: V.connectionAccountLabelContainer,
                children: [
                  e.name,
                  r
                ]
              })
            }),
            (0, n.jsx)(_.Text, {
              variant: 'text-xs/normal',
              color: 'header-secondary',
              className: V.connectionAccountLabel,
              children: a.name
            })
          ]
        }),
        (0, n.jsx)(_.Clickable, {
          className: V.connectionDelete,
          onClick: $,
          'aria-label': y.Z.Messages.SERVICE_CONNECTIONS_DISCONNECT,
          focusProps: {
            offset: {
              top: -4,
              left: -4,
              right: -4
            }
          },
          children: (0, n.jsx)(_.CloseSmallIcon, {
            size: 'xs',
            color: 'currentColor'
          })
        })
      ]
    });
  }(T),
  (t = T).twoWayLink ? null : t.type === U.ABu.XBOX ? (0, n.jsx)('div', {
    className: V.upsellWrapper,
    children: (0, n.jsx)(B.Y, {})
  }) : t.type === U.ABu.PLAYSTATION ? (0, n.jsx)('div', {
    className: V.upsellWrapper,
    children: (0, n.jsx)(j.t, {})
  }) : null,
  function(e) {
    var t;
    let s = null !== (t = e.metadata) && void 0 !== t ? t : {},
      a = null,
      i = (0, A.FI)(s[G.PC.CREATED_AT], N);
    switch (e.type) {
      case U.ABu.REDDIT:
        a = (0, g.oP)(s, V.metadataItem);
        break;
      case U.ABu.STEAM:
        a = (0, g.Dq)(s, V.metadataItem);
        break;
      case U.ABu.TWITTER:
        a = (0, g.rJ)(s, V.metadataItem);
        break;
      case U.ABu.EBAY:
        a = (0, g.ul)(s, V.metadataItem);
        break;
      case U.ABu.PAYPAL:
        a = (0, g.li)(s, V.metadataItem);
        break;
      case U.ABu.TIKTOK:
        a = (0, g.hf)(s, V.metadataItem);
    }
    null !== i && (null == a && (a = []), null == a || a.push((0, n.jsx)(_.Text, {
      variant: 'text-xs/normal',
      color: 'interactive-active',
      className: V.connectedAccountVanityMetadataCreatedAt,
      children: y.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
        date: i
      })
    }, 'member-since')));
    let r = z.includes(e.id),
      o = y.Z.Messages.REFRESH;
    if (null == a || 0 === a.length) {
      if (!0 !== C.Z.get(e.type).hasMetadata)
        return null;
      a = [
        (0, n.jsx)(_.TextBadge, {
          className: V.connectionMetadataUpsellTag,
          text: y.Z.Messages.NEW
        }, 'badge'),
        (0, n.jsx)(_.Text, {
          variant: 'text-xs/normal',
          className: V.connectionMetadataUpsellDescription,
          children: y.Z.Messages.CONNECTED_ACCOUNT_ADD_DETAILS_DESCRIPTION.format({
            helpdeskUrl: L.Z.getArticleURL(U.BhN.CONNECTION_DETAILS)
          })
        }, 'label')
      ], o = y.Z.Messages.CONNECTED_ACCOUNT_ADD_DETAILS;
    }
    return r && (o = y.Z.Messages.DONE), a.push((0, n.jsx)(_.Button, {
      className: V.metadataRefreshButton,
      color: r ? _.Button.Colors.GREEN : _.Button.Colors.BRAND,
      size: _.Button.Sizes.SMALL,
      submitting: W,
      disabled: r,
      onClick: r ? void 0 : () => {
        K(!0), u.Z.refresh(e.type, e.id).finally(() => {
          setTimeout(() => {
            z.push(e.id), Q(z), K(!1);
          }, 2000);
        });
      },
      children: o
    }, 'refresh-button')), (0, n.jsx)('div', {
      className: V.metadataContainer,
      children: a
    });
  }(T),
  (s = q, U.BFP.has(T.type) && (r = (0, n.jsx)(_.FormSwitch, {
    className: V.connectionOptionSwitch,
    hideBorder: !0,
    value: O,
    onChange: es,
    children: (0, n.jsx)(_.Text, {
      variant: 'text-sm/semibold',
      children: y.Z.Messages.SYNC_FRIENDS
    })
  })), U.vbS.has(T.type) && (o = (0, n.jsx)(_.FormSwitch, {
    className: V.connectionOptionSwitch,
    hideBorder: !0,
    value: P,
    onChange: en,
    children: (0, n.jsx)(_.Text, {
      variant: 'text-sm/semibold',
      children: y.Z.Messages.DISPLAY_ACTIVITY.format({
        platform: s.name
      })
    })
  })), (null === (i = C.Z.get(T.type)) || void 0 === i ? void 0 : i.hasMetadata) === !0 && (l = (0, n.jsx)(_.FormSwitch, {
    className: V.connectionOptionSwitch,
    hideBorder: !0,
    value: 1 === M,
    onChange: et,
    disabled: 1 !== R || null == T.metadata,
    children: (0, n.jsx)(_.Text, {
      variant: 'text-sm/semibold',
      children: y.Z.Messages.DISPLAY_DETAILS_ON_PROFILE
    })
  })), (0, n.jsx)('div', {
    className: V.connectionOptionsWrapper,
    children: (0, n.jsxs)('div', {
      className: V.connectionOptions,
      children: [
        (0, n.jsx)(_.FormSwitch, {
          className: V.connectionOptionSwitch,
          hideBorder: !0,
          value: 1 === R,
          onChange: ee,
          children: (0, n.jsx)(_.Text, {
            variant: 'text-sm/semibold',
            children: y.Z.Messages.DISPLAY_ON_PROFILE
          })
        }),
        l,
        o,
        r
      ]
    })
  })),
  function() {
    if (T.revoked || T.integrations.length > 0)
      return (0, n.jsx)(_.FormDivider, {
        className: V.connectedAccountSeparator
      });
  }(),
  T.revoked ? (0, n.jsx)(_.FormItem, {
    className: V.integrationsWrapper,
    children: (0, n.jsx)(_.FormText, {
      className: V.integrationRevoked,
      children: y.Z.Messages.CONNECTED_ACCOUNT_REVOKED.format({
        onReconnect: J
      })
    })
  }) : T.integrations.length > 0 ? (0, n.jsxs)(_.FormItem, {
    className: V.integrationsWrapper,
    children: [
      (0, n.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        children: (0, n.jsx)(_.Text, {
          variant: 'text-xs/semibold',
          children: y.Z.Messages.SUB_ENABLED_SERVERS
        })
      }),
      (0, n.jsx)('div', {
        children: T.integrations.map(e => (0, n.jsx)(w, {
          integration: e
        }, e.id))
      })
    ]
  }) : void 0
]
  });
}

function H() {
  return a.useEffect(() => () => {
(0, O.EW)(l.z.NEW_CRUNCHYROLL_CONNECTION, {
  dismissAction: F.L.AUTO
});
  }, []), (0, n.jsxs)('div', {
className: V.connectContainer,
children: [
  (0, n.jsx)(_.Heading, {
    variant: 'heading-md/bold',
    color: 'interactive-active',
    className: V.connectHeader,
    children: y.Z.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_HEADER
  }),
  (0, n.jsx)(_.Text, {
    variant: 'text-xs/normal',
    color: 'header-secondary',
    children: y.Z.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_DESCRIPTION.format({
      privacyPolicyUrl: U.EYA.PRIVACY
    })
  }),
  (0, n.jsx)(K, {})
]
  });
}

function W(e) {
  let t = C.Z.get(e);
  (0, h.Z)({
platformType: t.type
  }), P.default.track(U.rMx.ACCOUNT_LINK_STEP, {
previous_step: 'desktop connections',
current_step: 'desktop oauth',
platform_type: t.type
  });
}

function K() {
  function e() {
E.Z.dispatch({
  type: 'CONNECTIONS_GRID_MODAL_SHOW',
  onComplete: W
});
  }
  let t = (0, m.fq)(),
s = (0, _.useRedesignIconContext)().enabled ? 24 : 18;
  return (0, n.jsxs)('div', {
className: V.connectionsContainer,
children: [
  t.slice(0, 10).map(e => (0, n.jsx)(I.Z, {
    type: e.type,
    className: V.__invalid_accountButton,
    innerClassName: V.accountButtonInner
  }, e.type)),
  (0, n.jsx)(_.Tooltip, {
    text: y.Z.Messages.CONNECTIONS_VIEW_MORE,
    children: t => {
      let {
        onMouseEnter: a,
        onMouseLeave: i
      } = t;
      return (0, n.jsx)('div', {
        className: r()(V.accountAddWrapper, V.__invalid_accountButton),
        children: (0, n.jsx)(_.FocusRing, {
          children: (0, n.jsx)('button', {
            onMouseEnter: a,
            onMouseLeave: i,
            className: r()(V.accountAddInner, V.accountButtonInner),
            type: 'button',
            onClick: e,
            'aria-label': y.Z.Messages.ADD_NEW_CONNECTION,
            children: (0, n.jsx)(_.ChevronSmallRightIcon, {
              size: 'custom',
              color: 'currentColor',
              height: s,
              width: s,
              'aria-label': y.Z.Messages.CONNECTIONS_VIEW_MORE
            })
          })
        })
      });
    }
  })
]
  });
}

function z(e) {
  let t, {
fetching: a,
accounts: i,
theme: r,
locale: o
  } = e;
  return t = a ? (0, n.jsx)(_.Spinner, {
className: Y.marginTop20,
type: _.Spinner.Type.SPINNING_CIRCLE
  }) : 0 === i.length ? (0, n.jsxs)(_.EmptyState, {
className: Y.marginTop40,
theme: r,
children: [
  (0, n.jsx)(_.EmptyStateImage, {
    darkSrc: s(703152),
    lightSrc: s(548617),
    width: 230,
    height: 220
  }),
  (0, n.jsx)(_.EmptyStateText, {
    note: y.Z.Messages.CONNECTED_ACCOUNTS_NONE,
    children: y.Z.Messages.CONNECTED_ACCOUNTS_NONE_TITLE
  })
]
  }) : i.filter(e => C.Z.isSupported(e.type)).map((e, t) => (0, n.jsx)(k, {
theme: r,
account: e,
locale: o,
onDisconnect: () => function(e) {
  let {
    type: t,
    id: s
  } = e;
  u.Z.disconnect(t, s);
}(e)
  }, t)), (0, n.jsx)(_.FormItem, {
className: V.connectionList,
children: t
  });
}
t.Z = () => {
  let e = (0, o.e7)([M.Z], () => M.Z.hidePersonalInformation),
t = (0, o.e7)([p.Z], () => p.Z.isFetching()),
s = (0, o.e7)([p.Z], () => p.Z.getAccounts()),
i = (0, N.ZP)();
  (0, o.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds());
  let r = (0, o.e7)([Z.default], () => Z.default.locale);
  return (a.useEffect(() => {
u.Z.fetch();
  }, []), e) ? (0, n.jsx)(T.Z, {}) : (0, n.jsxs)(_.FormSection, {
className: V.__invalid_connections,
tag: _.FormTitleTags.H1,
title: y.Z.Messages.CONNECTIONS,
children: [
  (0, n.jsx)(H, {}),
  (0, n.jsx)(z, {
    fetching: t,
    accounts: s,
    theme: i,
    locale: r
  })
]
  });
};