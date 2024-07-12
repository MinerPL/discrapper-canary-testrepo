t.r(n), t.d(n, {
  default: function() {
return J;
  }
}), t(47120), t(536091);
var o, c, a = t(735250),
  s = t(470079),
  l = t(120356),
  i = t.n(l),
  r = t(512722),
  d = t.n(r),
  C = t(392711),
  u = t.n(C),
  N = t(442837),
  _ = t(692547),
  h = t(780384),
  T = t(481060),
  O = t(457330),
  E = t(749210),
  m = t(230711),
  x = t(99690),
  p = t(410030),
  S = t(726542),
  A = t(367907),
  I = t(277800),
  v = t(471445),
  M = t(335191),
  f = t(706454),
  g = t(598077),
  j = t(314897),
  L = t(592125),
  k = t(553795),
  y = t(271383),
  G = t(496675),
  R = t(467679),
  Z = t(259580),
  U = t(626135),
  D = t(228643),
  P = t(275759),
  b = t(231757),
  B = t(753194),
  w = t(225104),
  F = t(458034),
  H = t(856651),
  V = t(981631),
  Y = t(689938),
  z = t(852826);

function K(e) {
  let {
platformType: n,
className: t
  } = e, o = (0, p.ZP)(), c = S.Z.get(n);
  return (0, a.jsx)('img', {
src: (0, h.ap)(o) ? c.icon.lightSVG : c.icon.darkSVG,
alt: '',
className: i()(z.platformIcon, t)
  });
}

function q(e) {
  let {
channel: n,
className: t
  } = e, o = (0, v.KS)(n);
  return (0, a.jsxs)('div', {
className: i()(z.channelName, t),
children: [
  null != o ? (0, a.jsx)(o, {
    className: z.channelNameIcon
  }) : null,
  (0, a.jsx)(T.Heading, {
    variant: 'heading-lg/semibold',
    color: 'text-normal',
    className: z.channelNameText,
    children: n.name
  })
]
  });
}

function Q(e) {
  let n, {
  connectionType: t,
  connectionMetadataField: o,
  operator: c,
  value: s,
  result: l,
  description: i
} = e,
r = null;
  if (null != i)
switch (c) {
  case H.iO.LESS_THAN:
    r = Y.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
      description: i,
      count: Math.max(0, Number(s) - 1)
    });
    break;
  case H.iO.GREATER_THAN:
    r = Y.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
      description: i,
      count: Math.max(0, Number(s) + 1)
    });
    break;
  default:
    r = i;
}
  else {
let e;
switch (c) {
  case H.iO.EQUAL:
    e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_BE, t === V.ABu.PAYPAL && o === H.PC.PAYPAL_VERIFIED && (e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_A);
    break;
  case H.iO.NOT_EQUAL:
    e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_NOT_BE;
    break;
  case H.iO.LESS_THAN:
    e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_MOST;
    break;
  case H.iO.GREATER_THAN:
    e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_LEAST;
    break;
  case void 0:
  case null:
    return null;
}
if (null == (r = (0, P.n_)({
    connectionType: t,
    connectionMetadataField: o,
    operator: c,
    operatorText: e,
    value: s
  })))
  return null;
  }
  return n = l ? 'header-secondary' : 'text-danger', (0, a.jsx)(T.Text, {
variant: 'text-xs/normal',
color: n,
className: z.connectionsCheck,
children: r
  });
}

function W(e) {
  let {
eligibilityStatesGroups: n,
onPlatformConnect: t,
onPlatformConnected: o
  } = e, [c, l] = s.useState({}), [r, C] = s.useState(0), [N, h] = s.useState(null), [O, E] = s.useState(null), m = s.useMemo(() => u().flatten(n), [n]), p = s.useMemo(() => u().groupBy(m, e => ''.concat(e.connection_type).concat(null != e.application_id ? ':'.concat(e.application_id) : '')), [m]);
  s.useEffect(() => C(Date.now()), [m]), s.useEffect(() => {
if (null == N)
  return;
let e = p[''.concat(N).concat(null != O ? ':'.concat(O.id) : '')];
if (null != e)
  e.every(e => e.result) && o(N, O);
  }, [
p,
N,
O,
o
  ]);
  let A = (0, T.useToken)(_.Z.unsafe_rawColors.GREEN_330).hex();
  return (0, a.jsx)(a.Fragment, {
children: Object.keys(p).sort((e, n) => {
  let t = p[e].every(e => e.result),
    o = p[n].every(e => e.result);
  return !0 === t && !1 === o ? 1 : !1 === t && !0 === o ? -1 : 0;
}).map(e => {
  var n, o, s;
  let C, u, N;
  let _ = p[e],
    O = _.find(e => null == e.operator),
    m = _.filter(e => null != e.operator),
    I = (null == O || O.result) && m.every(e => e.result),
    v = _.find(e => null != e.application),
    M = S.Z.get(e),
    f = null == M || M.enabled,
    j = null == v ? void 0 : v.application,
    L = (null == j ? void 0 : j.bot) != null ? new g.Z(j.bot) : null;
  P.SJ.includes(null !== (n = null == j ? void 0 : j.id) && void 0 !== n ? n : '') ? C = (0, a.jsx)(B.Z, {
    className: z.botTag,
    color: A,
    size: 16
  }) : null != L && (C = (0, a.jsx)(R.Z, {
    className: z.botTag,
    verified: L.isVerifiedBot()
  }));
  let k = c[null !== (o = null == M ? void 0 : M.type) && void 0 !== o ? o : H.Kt],
    y = !I && null != k && k <= r;
  return u = I ? (0, a.jsx)(T.CheckmarkLargeIcon, {
    size: 'md',
    color: 'currentColor',
    className: z.connectionsChecksGroupCheckmark
  }) : y ? (0, a.jsx)(T.Button, {
    size: T.Button.Sizes.TINY,
    look: T.Button.Looks.LINK,
    color: T.Button.Colors.LINK,
    className: z.connectionsChecksGroupRetryButton,
    children: Y.Z.Messages.RETRY
  }) : f ? (0, a.jsx)(Z.Z, {
    direction: Z.Z.Directions.RIGHT,
    className: z.connectionsChecksGroupCaret
  }) : (0, a.jsx)(T.Text, {
    variant: 'text-md/medium',
    color: 'text-muted',
    children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_PLATFORM_DISABLED
  }), (null == M ? void 0 : M.type) === V.ABu.STEAM && (N = Y.Z.Messages.CONNECTIONS_STEAM_TOOLTIP), (0, a.jsxs)(T.Clickable, {
    className: i()(z.connectionsChecksGroup, I ? z.connectionsChecksGroupPassed : null, f ? null : z.connectionsChecksGroupPlatformDisabled),
    onClick: !I && f ? () => {
      var e, n, o;
      return n = null !== (e = null == M ? void 0 : M.type) && void 0 !== e ? e : H.Kt, o = j, void((0, b.Z)({
        platformType: n,
        location: 'Verified Roles Connect Accounts Modal',
        overrideUrl: null == o ? void 0 : o.role_connections_verification_url
      }), l({
        ...c,
        [n]: Date.now()
      }), h(n), E(null != o ? o : null), t());
    } : void 0,
    children: [
      !I && y ? (0, a.jsx)('div', {
        className: z.connectionsChecksGroupRequirementsNotMet,
        children: (0, a.jsx)(T.Text, {
          variant: 'text-xs/normal',
          color: 'always-white',
          children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_REQUIREMENTS_NOT_MET
        })
      }) : null,
      null != M ? (0, a.jsx)(K, {
        platformType: M.type
      }) : null,
      null != L ? (0, a.jsx)(x.Z, {
        user: L
      }) : null,
      (0, a.jsxs)('div', {
        className: z.connectionsChecksGroupTextContainer,
        children: [
          (0, a.jsxs)('div', {
            className: z.connectionsChecksGroupTextNameContainer,
            children: [
              (0, a.jsx)(T.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: null !== (s = null == M ? void 0 : M.name) && void 0 !== s ? s : null == j ? void 0 : j.name
              }),
              C,
              null != N ? (0, a.jsx)(T.Tooltip, {
                text: N,
                children: e => (0, a.jsx)(T.CircleInformationIcon, {
                  size: 'xs',
                  color: 'currentColor',
                  ...e,
                  className: z.connectionsChecksGroupTextNameInfoIcon
                })
              }) : null
            ]
          }),
          m.map(e => {
            let {
              connection_type: n,
              connection_metadata_field: t,
              operator: o,
              value: c,
              result: s,
              description: l
            } = e;
            return d()(null != t, 'connectionMetadataField is null'), d()(null != o, 'operator is null'), d()(null != c, 'value is null'), (0, a.jsx)(Q, {
              connectionType: n,
              connectionMetadataField: t,
              operator: o,
              value: c,
              result: s,
              description: l
            }, t);
          })
        ]
      }),
      u
    ]
  }, e);
})
  });
}

function X(e) {
  let n, t, o, {
  account: c,
  setShowPreviewInvisibleIcon: l,
  setShowPreviewMetadata: i
} = e,
[r, d] = s.useState(c.friendSync),
[C, u] = s.useState(c.showActivity),
[N, _] = s.useState(1 === c.metadataVisibility),
[h, E] = s.useState(1 === c.visibility);
  s.useEffect(() => {
l(!h), i(N);
  }, []);
  let m = S.Z.get(c.type);
  return V.BFP.has(c.type) && (n = (0, a.jsx)(T.FormSwitch, {
className: z.accountConnectedPrivacyOptionsSwitchItem,
hideBorder: !0,
value: r,
onChange: e => {
  d(e), O.Z.setFriendSync(c.type, c.id, e);
},
children: (0, a.jsx)(T.Text, {
  variant: 'text-sm/semibold',
  children: Y.Z.Messages.SYNC_FRIENDS
})
  })), V.vbS.has(c.type) && (t = (0, a.jsx)(T.FormSwitch, {
className: z.accountConnectedPrivacyOptionsSwitchItem,
hideBorder: !0,
value: C,
onChange: e => {
  u(e), O.Z.setShowActivity(c.type, c.id, e);
},
children: (0, a.jsx)(T.Text, {
  variant: 'text-sm/semibold',
  children: Y.Z.Messages.DISPLAY_ACTIVITY.format({
    platform: m.name
  })
})
  })), !0 === m.hasMetadata && (o = (0, a.jsx)(T.FormSwitch, {
className: z.accountConnectedPrivacyOptionsSwitchItem,
hideBorder: !0,
value: N,
disabled: !h,
onChange: e => {
  i(e), _(e), O.Z.setMetadataVisibility(c.type, c.id, e ? 1 : 0);
},
children: (0, a.jsx)(T.Text, {
  variant: 'text-sm/semibold',
  children: Y.Z.Messages.DISPLAY_DETAILS_ON_PROFILE
})
  })), (0, a.jsxs)('div', {
className: z.accountConnectedPrivacyOptionsContainer,
children: [
  (0, a.jsx)(T.FormSwitch, {
    className: z.accountConnectedPrivacyOptionsSwitchItem,
    hideBorder: !0,
    value: h,
    onChange: e => {
      l(!e), E(e), O.Z.setVisibility(c.type, c.id, e ? 1 : 0);
    },
    children: (0, a.jsx)(T.Text, {
      variant: 'text-sm/semibold',
      children: Y.Z.Messages.DISPLAY_ON_PROFILE
    })
  }),
  o,
  t,
  n
]
  });
}

function J(e) {
  let {
transitionState: n,
onClose: t,
guildId: o,
role: c
  } = e, [l, i] = s.useState(0), [r, C] = s.useState(null), [u, _] = s.useState(!1), [h, O] = s.useState(!0), [x, v] = s.useState(!1), [g, R] = s.useState(!0), [Z, P] = s.useState(!1), b = (0, N.e7)([k.Z], () => k.Z.getAccounts()), B = (0, N.e7)([j.default], () => j.default.getId()), [H, K] = s.useState(null), [Q, J] = s.useState(null), [$, ee] = s.useState(null), en = (0, p.ZP)(), et = (0, N.e7)([f.default], () => f.default.locale), eo = (0, N.e7)([y.ZP], () => y.ZP.getMember(o, B)), ec = Object.values((0, N.e7)([L.Z], () => L.Z.getMutableGuildChannelsForGuild(o))).filter(e => G.Z.can(V.Plq.VIEW_CHANNEL, e) && G.Z.can(V.Plq.SEND_MESSAGES, e) && (0, I.Z)(e).includes(c));

  function ea() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
null == t || t(), e && (0, T.closeModal)(F.s$, T.DEFAULT_MODAL_CONTEXT);
  }

  function es() {
ea(!0), m.Z.open(V.oAB.AUTHORIZED_APPS);
  }

  function el() {
ea(!0), m.Z.open(V.oAB.CONNECTIONS);
  }
  async function ei() {
v(!0), await E.Z.assignGuildRoleConnection(o, c.id);
  }

  function er() {
U.default.track(V.rMx.PASSPORT_CHALLENGE_STARTED, {
  role_id: c.id,
  ...(0, A.hH)(o)
});
  }

  function ed(e) {
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
K(e), J(n), i(1), null != n && (0, D.nj)().then(e => {
  ee(e);
}).catch(() => {});
  }
  return s.useEffect(() => {
E.Z.fetchGuildRoleConnectionsEligibility(o, c.id).then(e => {
  C(e), _(e.some(e => e.every(e => e.result))), O(!1);
});
  }, [
o,
c.id,
b
  ]), s.useEffect(() => {
U.default.track(V.rMx.PASSPORT_CHALLENGE_VIEWED, {
  role_id: c.id,
  ...(0, A.hH)(o)
});
  }, [
o,
c.id
  ]), s.useEffect(() => {
if (!!x && null != eo && !!eo.roles.includes(c.id))
  v(!1), ec.length > 0 ? i(2) : null == t || t(), U.default.track(V.rMx.PASSPORT_CHALLENGE_FINISHED, {
    role_id: c.id,
    ...(0, A.hH)(o)
  });
  }, [
x,
ec.length,
eo,
o,
c.id,
t
  ]), (0, a.jsxs)(T.ModalRoot, {
size: T.ModalSize.MEDIUM,
transitionState: n,
'aria-label': Y.Z.Messages.CONNECT_ACCOUNT_TITLE,
className: z.modalRoot,
children: [
  function() {
    switch (l) {
      case 0:
        return (0, a.jsxs)(T.ModalHeader, {
          className: z.header,
          separator: !1,
          children: [
            (0, a.jsx)('div', {
              className: z.headerText,
              children: (0, a.jsx)(T.Heading, {
                variant: 'heading-xl/extrabold',
                children: Y.Z.Messages.CONNECT_ACCOUNT_TITLE
              })
            }),
            (0, a.jsx)(T.ModalCloseButton, {
              onClick: () => ea()
            })
          ]
        });
      case 1: {
        var e, n;
        d()(null != H, 'lastPlatformConnected is null');
        let t = null !== (n = null == Q ? void 0 : Q.name) && void 0 !== n ? n : null === (e = S.Z.get(H)) || void 0 === e ? void 0 : e.name;
        return (0, a.jsxs)(T.ModalHeader, {
          className: z.header,
          separator: !1,
          children: [
            (0, a.jsx)(T.Heading, {
              variant: 'heading-xl/extrabold',
              className: z.headerText,
              children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED.format({
                platformName: t
              })
            }),
            (0, a.jsx)(T.ModalCloseButton, {
              onClick: () => ea()
            })
          ]
        });
      }
      case 2:
        return (0, a.jsxs)(T.ModalHeader, {
          className: z.header,
          separator: !1,
          children: [
            (0, a.jsx)(T.Heading, {
              variant: 'heading-xl/extrabold',
              className: z.headerText,
              children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ROLE_GRANTED
            }),
            (0, a.jsx)(T.ModalCloseButton, {
              onClick: () => ea(!0)
            })
          ]
        });
      default:
        return null;
    }
  }(),
  (0, a.jsx)(T.Sequencer, {
    step: l,
    steps: [
      0,
      1,
      2
    ],
    children: function() {
      switch (l) {
        case 0: {
          let e = null != r && r.length > 1;
          return (0, a.jsx)(T.ModalContent, {
            children: h || null == r ? (0, a.jsx)(T.Spinner, {
              className: z.connectionsChecksGroups
            }) : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(T.Text, {
                  variant: 'text-md/medium',
                  color: 'header-secondary',
                  children: e ? Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ANY.format() : Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ALL.format()
                }),
                (0, a.jsx)(T.ScrollerThin, {
                  className: z.connectionsChecksGroups,
                  children: (0, a.jsx)(W, {
                    eligibilityStatesGroups: r,
                    onPlatformConnect: er,
                    onPlatformConnected: ed
                  })
                }),
                (0, a.jsx)(T.Text, {
                  variant: 'text-xs/normal',
                  className: z.footerText,
                  color: 'header-secondary',
                  children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                    privacyPolicyUrl: V.EYA.PRIVACY,
                    onAuthorizedApplicationsClick: () => es(),
                    onConnectionsClick: () => el()
                  })
                })
              ]
            })
          });
        }
        case 1: {
          d()(null != H, 'lastPlatformConnected is null');
          let e = b.find(e => {
              let {
                type: n
              } = e;
              return H === n;
            }),
            n = null == $ ? void 0 : $.find(e => {
              let {
                application: n
              } = e;
              return n.id === (null == Q ? void 0 : Q.id);
            });
          return (0, a.jsxs)(T.ModalContent, {
            children: [
              (0, a.jsx)(T.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                  privacyPolicyUrl: V.EYA.PRIVACY,
                  onAuthorizedApplicationsClick: () => es(),
                  onConnectionsClick: () => el()
                })
              }),
              (0, a.jsx)('div', {
                className: z.accountConnectedContainer,
                children: null == e && null == n ? (0, a.jsx)(T.Spinner, {
                  className: z.accountConnectedLoading
                }) : (0, a.jsxs)(a.Fragment, {
                  children: [
                    null != e ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)('div', {
                          className: z.accountConnectedContainerChild,
                          children: [
                            (0, a.jsx)(T.Text, {
                              variant: 'eyebrow',
                              color: 'header-secondary',
                              children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                            }),
                            (0, a.jsx)(M.E3, {
                              connectedAccount: e,
                              userId: B,
                              theme: en,
                              locale: et,
                              className: z.accountConnectedPreviewConnectedUserAccount,
                              showMetadata: g,
                              showInvisibleIcon: Z
                            })
                          ]
                        }),
                        (0, a.jsxs)('div', {
                          className: z.accountConnectedContainerChild,
                          children: [
                            (0, a.jsx)(T.Text, {
                              variant: 'eyebrow',
                              color: 'header-secondary',
                              children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PRIVACY
                            }),
                            (0, a.jsx)(X, {
                              account: e,
                              setShowPreviewInvisibleIcon: P,
                              setShowPreviewMetadata: R
                            })
                          ]
                        })
                      ]
                    }) : null,
                    null != n ? (0, a.jsxs)('div', {
                      className: z.accountConnectedContainerChild,
                      children: [
                        (0, a.jsxs)('div', {
                          className: z.accountConnectedHeader,
                          children: [
                            (0, a.jsx)(T.Text, {
                              variant: 'eyebrow',
                              color: 'header-secondary',
                              children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                            }),
                            (0, a.jsx)(T.Tooltip, {
                              text: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_TOOLTIP,
                              children: e => (0, a.jsx)(T.CircleInformationIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                ...e
                              })
                            })
                          ]
                        }),
                        (0, a.jsx)(M.tH, {
                          applicationRoleConnection: n,
                          className: z.accountConnectedPreviewConnectedUserAccount,
                          locale: et
                        })
                      ]
                    }) : null
                  ]
                })
              })
            ]
          });
        }
        case 2:
          return (0, a.jsxs)(T.ModalContent, {
            children: [
              (0, a.jsxs)('div', {
                className: z.roleGranted,
                children: [
                  (0, a.jsx)(w.Z, {
                    guildId: o,
                    className: z.verifiedIcon,
                    role: c,
                    size: 24
                  }),
                  (0, a.jsx)(T.Text, {
                    variant: 'text-lg/semibold',
                    color: 'header-primary',
                    className: z.roleGrantedName,
                    children: c.name
                  })
                ]
              }),
              (0, a.jsx)(T.ScrollerThin, {
                className: z.channelsGranted,
                children: ec.map(e => (0, a.jsx)(q, {
                  channel: e
                }, e.id))
              })
            ]
          });
        default:
          return null;
      }
    }()
  }),
  function() {
    var e;
    let n = null !== (e = null == r ? void 0 : r.flat().some(e => null == e.application_id)) && void 0 !== e && e;
    switch (l) {
      case 0:
        return (0, a.jsxs)(T.ModalFooter, {
          children: [
            (0, a.jsx)(T.Button, {
              color: T.ButtonColors.BRAND,
              onClick: () => ei(),
              disabled: h || !u || x,
              children: Y.Z.Messages.FINISH
            }),
            n ? (0, a.jsx)('div', {
              className: z.manageConnectionsFooterButton,
              children: (0, a.jsx)(T.Button, {
                look: T.ButtonLooks.LINK,
                color: T.ButtonColors.LINK,
                onClick: el,
                children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
              })
            }) : null
          ]
        });
      case 1:
        return (0, a.jsx)(T.ModalFooter, {
          children: (0, a.jsx)(T.Button, {
            color: T.ButtonColors.BRAND,
            onClick: () => i(0),
            children: Y.Z.Messages.DONE
          })
        });
      default:
        return (0, a.jsxs)(T.ModalFooter, {
          children: [
            (0, a.jsx)(T.Button, {
              color: T.ButtonColors.BRAND,
              onClick: () => ea(!0),
              children: Y.Z.Messages.CLOSE
            }),
            n ? (0, a.jsx)('div', {
              className: z.manageConnectionsFooterButton,
              children: (0, a.jsx)(T.Button, {
                look: T.ButtonLooks.LINK,
                color: T.ButtonColors.LINK,
                onClick: el,
                children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
              })
            }) : null
          ]
        });
    }
  }()
]
  });
}
(c = o || (o = {}))[c.CHECKS_REQUIRED = 0] = 'CHECKS_REQUIRED', c[c.ACCOUNT_CONNECTED = 1] = 'ACCOUNT_CONNECTED', c[c.ROLE_GRANTED = 2] = 'ROLE_GRANTED';