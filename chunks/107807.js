"use strict";
n.r(t), n.d(t, {
  default: function() {
    return et
  }
}), n("47120"), n("536091");
var a, l, o = n("735250"),
  s = n("470079"),
  i = n("803997"),
  c = n.n(i),
  r = n("512722"),
  d = n.n(r),
  u = n("392711"),
  C = n.n(u),
  N = n("442837"),
  T = n("692547"),
  _ = n("780384"),
  O = n("481060"),
  E = n("457330"),
  h = n("749210"),
  f = n("230711"),
  S = n("99690"),
  m = n("410030"),
  p = n("726542"),
  A = n("367907"),
  x = n("277800"),
  I = n("471445"),
  M = n("335191"),
  v = n("706454"),
  L = n("598077"),
  g = n("314897"),
  j = n("592125"),
  y = n("553795"),
  R = n("271383"),
  U = n("496675"),
  D = n("467679"),
  P = n("259580"),
  G = n("263704"),
  k = n("87888"),
  b = n("41542"),
  F = n("626135"),
  w = n("228643"),
  B = n("275759"),
  H = n("231757"),
  V = n("753194"),
  Y = n("225104"),
  z = n("458034"),
  K = n("856651"),
  Q = n("981631"),
  Z = n("689938"),
  W = n("146339");

function q(e) {
  let {
    platformType: t,
    className: n
  } = e, a = (0, m.default)(), l = p.default.get(t);
  return (0, o.jsx)("img", {
    src: (0, _.isThemeLight)(a) ? l.icon.lightSVG : l.icon.darkSVG,
    alt: "",
    className: c()(W.platformIcon, n)
  })
}

function X(e) {
  let {
    channel: t,
    className: n
  } = e, a = (0, I.getChannelIconComponent)(t);
  return (0, o.jsxs)("div", {
    className: c()(W.channelName, n),
    children: [null != a ? (0, o.jsx)(a, {
      className: W.channelNameIcon
    }) : null, (0, o.jsx)(O.Heading, {
      variant: "heading-lg/semibold",
      color: "text-normal",
      className: W.channelNameText,
      children: t.name
    })]
  })
}

function J(e) {
  let t, {
      connectionType: n,
      connectionMetadataField: a,
      operator: l,
      value: s,
      result: i,
      description: c
    } = e,
    r = null;
  if (null != c) switch (l) {
    case K.OperatorTypes.LESS_THAN:
      r = Z.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
        description: c,
        count: Math.max(0, Number(s) - 1)
      });
      break;
    case K.OperatorTypes.GREATER_THAN:
      r = Z.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
        description: c,
        count: Math.max(0, Number(s) + 1)
      });
      break;
    default:
      r = c
  } else {
    let e;
    switch (l) {
      case K.OperatorTypes.EQUAL:
        e = Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_BE, n === Q.PlatformTypes.PAYPAL && a === K.MetadataFields.PAYPAL_VERIFIED && (e = Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_A);
        break;
      case K.OperatorTypes.NOT_EQUAL:
        e = Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_NOT_BE;
        break;
      case K.OperatorTypes.LESS_THAN:
        e = Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_MOST;
        break;
      case K.OperatorTypes.GREATER_THAN:
        e = Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_LEAST;
        break;
      case void 0:
      case null:
        return null
    }
    if (null == (r = (0, B.getConnectionsCheckText)({
        connectionType: n,
        connectionMetadataField: a,
        operator: l,
        operatorText: e,
        value: s
      }))) return null
  }
  return t = i ? "header-secondary" : "text-danger", (0, o.jsx)(O.Text, {
    variant: "text-xs/normal",
    color: t,
    className: W.connectionsCheck,
    children: r
  })
}

function $(e) {
  let {
    eligibilityStatesGroups: t,
    onPlatformConnect: n,
    onPlatformConnected: a
  } = e, [l, i] = s.useState({}), [r, u] = s.useState(0), [N, _] = s.useState(null), [E, h] = s.useState(null), f = s.useMemo(() => C().flatten(t), [t]), m = s.useMemo(() => C().groupBy(f, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")), [f]);
  s.useEffect(() => u(Date.now()), [f]), s.useEffect(() => {
    if (null == N) return;
    let e = m["".concat(N).concat(null != E ? ":".concat(E.id) : "")];
    if (null != e) e.every(e => e.result) && a(N, E)
  }, [m, N, E, a]);
  let A = (0, O.useToken)(T.default.unsafe_rawColors.GREEN_330).hex();
  return (0, o.jsx)(o.Fragment, {
    children: Object.keys(m).sort((e, t) => {
      let n = m[e].every(e => e.result),
        a = m[t].every(e => e.result);
      return !0 === n && !1 === a ? 1 : !1 === n && !0 === a ? -1 : 0
    }).map(e => {
      var t, a, s;
      let u, C, N;
      let T = m[e],
        E = T.find(e => null == e.operator),
        f = T.filter(e => null != e.operator),
        x = (null == E || E.result) && f.every(e => e.result),
        I = T.find(e => null != e.application),
        M = p.default.get(e),
        v = null == I ? void 0 : I.application,
        g = (null == v ? void 0 : v.bot) != null ? new L.default(v.bot) : null;
      B.officialApplicationIds.includes(null !== (t = null == v ? void 0 : v.id) && void 0 !== t ? t : "") ? u = (0, o.jsx)(V.default, {
        className: W.botTag,
        color: A,
        size: 16
      }) : null != g && (u = (0, o.jsx)(D.default, {
        className: W.botTag,
        verified: g.isVerifiedBot()
      }));
      let j = l[null !== (a = null == M ? void 0 : M.type) && void 0 !== a ? a : K.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE],
        y = !x && null != j && j <= r;
      return C = x ? (0, o.jsx)(G.default, {
        className: W.connectionsChecksGroupCheckmark
      }) : y ? (0, o.jsx)(O.Button, {
        size: O.Button.Sizes.TINY,
        look: O.Button.Looks.LINK,
        color: O.Button.Colors.LINK,
        className: W.connectionsChecksGroupRetryButton,
        children: Z.default.Messages.RETRY
      }) : (0, o.jsx)(P.default, {
        direction: P.default.Directions.RIGHT,
        className: W.connectionsChecksGroupCaret
      }), (null == M ? void 0 : M.type) === Q.PlatformTypes.STEAM && (N = Z.default.Messages.CONNECTIONS_STEAM_TOOLTIP), (0, o.jsxs)(O.Clickable, {
        className: c()(W.connectionsChecksGroup, x ? W.connectionsChecksGroupPassed : null),
        onClick: x ? void 0 : () => {
          var e, t, a;
          return t = null !== (e = null == M ? void 0 : M.type) && void 0 !== e ? e : K.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE, a = v, void((0, H.default)({
            platformType: t,
            location: "Verified Roles Connect Accounts Modal",
            overrideUrl: null == a ? void 0 : a.role_connections_verification_url
          }), i({
            ...l,
            [t]: Date.now()
          }), _(t), h(null != a ? a : null), n())
        },
        children: [!x && y ? (0, o.jsx)("div", {
          className: W.connectionsChecksGroupRequirementsNotMet,
          children: (0, o.jsx)(O.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_REQUIREMENTS_NOT_MET
          })
        }) : null, null != M ? (0, o.jsx)(q, {
          platformType: M.type
        }) : null, null != g ? (0, o.jsx)(S.default, {
          user: g
        }) : null, (0, o.jsxs)("div", {
          className: W.connectionsChecksGroupTextContainer,
          children: [(0, o.jsxs)("div", {
            className: W.connectionsChecksGroupTextNameContainer,
            children: [(0, o.jsx)(O.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              children: null !== (s = null == M ? void 0 : M.name) && void 0 !== s ? s : null == v ? void 0 : v.name
            }), u, null != N ? (0, o.jsx)(O.Tooltip, {
              text: N,
              children: e => (0, o.jsx)(k.default, {
                ...e,
                className: W.connectionsChecksGroupTextNameInfoIcon
              })
            }) : null]
          }), f.map(e => {
            let {
              connection_type: t,
              connection_metadata_field: n,
              operator: a,
              value: l,
              result: s,
              description: i
            } = e;
            return d()(null != n, "connectionMetadataField is null"), d()(null != a, "operator is null"), d()(null != l, "value is null"), (0, o.jsx)(J, {
              connectionType: t,
              connectionMetadataField: n,
              operator: a,
              value: l,
              result: s,
              description: i
            }, n)
          })]
        }), C]
      }, e)
    })
  })
}

function ee(e) {
  let t, n, a, {
      account: l,
      setShowPreviewInvisibleIcon: i,
      setShowPreviewMetadata: c
    } = e,
    [r, d] = s.useState(l.friendSync),
    [u, C] = s.useState(l.showActivity),
    [N, T] = s.useState(1 === l.metadataVisibility),
    [_, h] = s.useState(1 === l.visibility);
  s.useEffect(() => {
    i(!_), c(N)
  }, []);
  let f = p.default.get(l.type);
  return Q.FRIEND_SYNC_PLATFORM_TYPES.has(l.type) && (t = (0, o.jsx)(O.FormSwitch, {
    className: W.accountConnectedPrivacyOptionsSwitchItem,
    hideBorder: !0,
    value: r,
    onChange: e => {
      d(e), E.default.setFriendSync(l.type, l.id, e)
    },
    children: (0, o.jsx)(O.Text, {
      variant: "text-sm/semibold",
      children: Z.default.Messages.SYNC_FRIENDS
    })
  })), Q.ACTIVITY_PLATFORM_TYPES.has(l.type) && (n = (0, o.jsx)(O.FormSwitch, {
    className: W.accountConnectedPrivacyOptionsSwitchItem,
    hideBorder: !0,
    value: u,
    onChange: e => {
      C(e), E.default.setShowActivity(l.type, l.id, e)
    },
    children: (0, o.jsx)(O.Text, {
      variant: "text-sm/semibold",
      children: Z.default.Messages.DISPLAY_ACTIVITY.format({
        platform: f.name
      })
    })
  })), !0 === f.hasMetadata && (a = (0, o.jsx)(O.FormSwitch, {
    className: W.accountConnectedPrivacyOptionsSwitchItem,
    hideBorder: !0,
    value: N,
    disabled: !_,
    onChange: e => {
      c(e), T(e), E.default.setMetadataVisibility(l.type, l.id, e ? 1 : 0)
    },
    children: (0, o.jsx)(O.Text, {
      variant: "text-sm/semibold",
      children: Z.default.Messages.DISPLAY_DETAILS_ON_PROFILE
    })
  })), (0, o.jsxs)("div", {
    className: W.accountConnectedPrivacyOptionsContainer,
    children: [(0, o.jsx)(O.FormSwitch, {
      className: W.accountConnectedPrivacyOptionsSwitchItem,
      hideBorder: !0,
      value: _,
      onChange: e => {
        i(!e), h(e), E.default.setVisibility(l.type, l.id, e ? 1 : 0)
      },
      children: (0, o.jsx)(O.Text, {
        variant: "text-sm/semibold",
        children: Z.default.Messages.DISPLAY_ON_PROFILE
      })
    }), a, n, t]
  })
}

function et(e) {
  let {
    transitionState: t,
    onClose: n,
    guildId: a,
    role: l
  } = e, [i, c] = s.useState(0), [r, u] = s.useState(null), [C, T] = s.useState(!1), [_, E] = s.useState(!0), [S, I] = s.useState(!1), [L, D] = s.useState(!0), [P, G] = s.useState(!1), k = (0, N.useStateFromStores)([y.default], () => y.default.getAccounts()), B = (0, N.useStateFromStores)([g.default], () => g.default.getId()), [H, V] = s.useState(null), [K, q] = s.useState(null), [J, et] = s.useState(null), en = (0, m.default)(), ea = (0, N.useStateFromStores)([v.default], () => v.default.locale), el = (0, N.useStateFromStores)([R.default], () => R.default.getMember(a, B)), eo = Object.values((0, N.useStateFromStores)([j.default], () => j.default.getMutableGuildChannelsForGuild(a))).filter(e => U.default.can(Q.Permissions.VIEW_CHANNEL, e) && U.default.can(Q.Permissions.SEND_MESSAGES, e) && (0, x.default)(e).includes(l));

  function es() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    null == n || n(), e && (0, O.closeModal)(z.MODAL_KEY, O.DEFAULT_MODAL_CONTEXT)
  }

  function ei() {
    es(!0), f.default.open(Q.UserSettingsSections.AUTHORIZED_APPS)
  }

  function ec() {
    es(!0), f.default.open(Q.UserSettingsSections.CONNECTIONS)
  }
  async function er() {
    I(!0), await h.default.assignGuildRoleConnection(a, l.id)
  }

  function ed() {
    F.default.track(Q.AnalyticEvents.PASSPORT_CHALLENGE_STARTED, {
      role_id: l.id,
      ...(0, A.collectGuildAnalyticsMetadata)(a)
    })
  }

  function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    V(e), q(t), c(1), null != t && (0, w.fetchUserApplicationRoleConnections)().then(e => {
      et(e)
    }).catch(() => {})
  }
  return s.useEffect(() => {
    h.default.fetchGuildRoleConnectionsEligibility(a, l.id).then(e => {
      u(e), T(e.some(e => e.every(e => e.result))), E(!1)
    })
  }, [a, l.id, k]), s.useEffect(() => {
    F.default.track(Q.AnalyticEvents.PASSPORT_CHALLENGE_VIEWED, {
      role_id: l.id,
      ...(0, A.collectGuildAnalyticsMetadata)(a)
    })
  }, [a, l.id]), s.useEffect(() => {
    S && null != el && el.roles.includes(l.id) && (I(!1), eo.length > 0 ? c(2) : null == n || n(), F.default.track(Q.AnalyticEvents.PASSPORT_CHALLENGE_FINISHED, {
      role_id: l.id,
      ...(0, A.collectGuildAnalyticsMetadata)(a)
    }))
  }, [S, eo.length, el, a, l.id, n]), (0, o.jsxs)(O.ModalRoot, {
    size: O.ModalSize.MEDIUM,
    transitionState: t,
    "aria-label": Z.default.Messages.CONNECT_ACCOUNT_TITLE,
    className: W.modalRoot,
    children: [function() {
      switch (i) {
        case 0:
          return (0, o.jsxs)(O.ModalHeader, {
            className: W.header,
            separator: !1,
            children: [(0, o.jsx)("div", {
              className: W.headerText,
              children: (0, o.jsx)(O.Heading, {
                variant: "heading-xl/extrabold",
                children: Z.default.Messages.CONNECT_ACCOUNT_TITLE
              })
            }), (0, o.jsx)(O.ModalCloseButton, {
              onClick: () => es()
            })]
          });
        case 1: {
          var e, t;
          d()(null != H, "lastPlatformConnected is null");
          let n = null !== (t = null == K ? void 0 : K.name) && void 0 !== t ? t : null === (e = p.default.get(H)) || void 0 === e ? void 0 : e.name;
          return (0, o.jsxs)(O.ModalHeader, {
            className: W.header,
            separator: !1,
            children: [(0, o.jsx)(O.Heading, {
              variant: "heading-xl/extrabold",
              className: W.headerText,
              children: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED.format({
                platformName: n
              })
            }), (0, o.jsx)(O.ModalCloseButton, {
              onClick: () => es()
            })]
          })
        }
        case 2:
          return (0, o.jsxs)(O.ModalHeader, {
            className: W.header,
            separator: !1,
            children: [(0, o.jsx)(O.Heading, {
              variant: "heading-xl/extrabold",
              className: W.headerText,
              children: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ROLE_GRANTED
            }), (0, o.jsx)(O.ModalCloseButton, {
              onClick: () => es(!0)
            })]
          });
        default:
          return null
      }
    }(), (0, o.jsx)(O.Sequencer, {
      step: i,
      steps: [0, 1, 2],
      children: function() {
        switch (i) {
          case 0: {
            let e = null != r && r.length > 1;
            return (0, o.jsx)(O.ModalContent, {
              children: _ || null == r ? (0, o.jsx)(O.Spinner, {
                className: W.connectionsChecksGroups
              }) : (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(O.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: e ? Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ANY.format() : Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ALL.format()
                }), (0, o.jsx)(O.ScrollerThin, {
                  className: W.connectionsChecksGroups,
                  children: (0, o.jsx)($, {
                    eligibilityStatesGroups: r,
                    onPlatformConnect: ed,
                    onPlatformConnected: eu
                  })
                }), (0, o.jsx)(O.Text, {
                  variant: "text-xs/normal",
                  className: W.footerText,
                  color: "header-secondary",
                  children: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                    privacyPolicyUrl: Q.MarketingURLs.PRIVACY,
                    onAuthorizedApplicationsClick: () => ei(),
                    onConnectionsClick: () => ec()
                  })
                })]
              })
            })
          }
          case 1: {
            d()(null != H, "lastPlatformConnected is null");
            let e = k.find(e => {
                let {
                  type: t
                } = e;
                return H === t
              }),
              t = null == J ? void 0 : J.find(e => {
                let {
                  application: t
                } = e;
                return t.id === (null == K ? void 0 : K.id)
              });
            return (0, o.jsxs)(O.ModalContent, {
              children: [(0, o.jsx)(O.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                  privacyPolicyUrl: Q.MarketingURLs.PRIVACY,
                  onAuthorizedApplicationsClick: () => ei(),
                  onConnectionsClick: () => ec()
                })
              }), (0, o.jsx)("div", {
                className: W.accountConnectedContainer,
                children: null == e && null == t ? (0, o.jsx)(O.Spinner, {
                  className: W.accountConnectedLoading
                }) : (0, o.jsxs)(o.Fragment, {
                  children: [null != e ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)("div", {
                      className: W.accountConnectedContainerChild,
                      children: [(0, o.jsx)(O.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                      }), (0, o.jsx)(M.ConnectedUserAccount, {
                        connectedAccount: e,
                        userId: B,
                        theme: en,
                        locale: ea,
                        className: W.accountConnectedPreviewConnectedUserAccount,
                        showMetadata: L,
                        showInvisibleIcon: P
                      })]
                    }), (0, o.jsxs)("div", {
                      className: W.accountConnectedContainerChild,
                      children: [(0, o.jsx)(O.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PRIVACY
                      }), (0, o.jsx)(ee, {
                        account: e,
                        setShowPreviewInvisibleIcon: G,
                        setShowPreviewMetadata: D
                      })]
                    })]
                  }) : null, null != t ? (0, o.jsxs)("div", {
                    className: W.accountConnectedContainerChild,
                    children: [(0, o.jsxs)("div", {
                      className: W.accountConnectedHeader,
                      children: [(0, o.jsx)(O.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                      }), (0, o.jsx)(O.Tooltip, {
                        text: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_TOOLTIP,
                        children: e => (0, o.jsx)(b.default, {
                          ...e
                        })
                      })]
                    }), (0, o.jsx)(M.ConnectedApplicationUserRoleAccount, {
                      applicationRoleConnection: t,
                      className: W.accountConnectedPreviewConnectedUserAccount,
                      locale: ea
                    })]
                  }) : null]
                })
              })]
            })
          }
          case 2:
            return (0, o.jsxs)(O.ModalContent, {
              children: [(0, o.jsxs)("div", {
                className: W.roleGranted,
                children: [(0, o.jsx)(Y.default, {
                  guildId: a,
                  className: W.verifiedIcon,
                  role: l,
                  size: 24
                }), (0, o.jsx)(O.Text, {
                  variant: "text-lg/semibold",
                  color: "header-primary",
                  className: W.roleGrantedName,
                  children: l.name
                })]
              }), (0, o.jsx)(O.ScrollerThin, {
                className: W.channelsGranted,
                children: eo.map(e => (0, o.jsx)(X, {
                  channel: e
                }, e.id))
              })]
            });
          default:
            return null
        }
      }()
    }), function() {
      var e;
      let t = null !== (e = null == r ? void 0 : r.flat().some(e => null == e.application_id)) && void 0 !== e && e;
      switch (i) {
        case 0:
          return (0, o.jsxs)(O.ModalFooter, {
            children: [(0, o.jsx)(O.Button, {
              color: O.ButtonColors.BRAND,
              onClick: () => er(),
              disabled: _ || !C || S,
              children: Z.default.Messages.FINISH
            }), t ? (0, o.jsx)("div", {
              className: W.manageConnectionsFooterButton,
              children: (0, o.jsx)(O.Button, {
                look: O.ButtonLooks.LINK,
                color: O.ButtonColors.LINK,
                onClick: ec,
                children: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
              })
            }) : null]
          });
        case 1:
          return (0, o.jsx)(O.ModalFooter, {
            children: (0, o.jsx)(O.Button, {
              color: O.ButtonColors.BRAND,
              onClick: () => c(0),
              children: Z.default.Messages.DONE
            })
          });
        default:
          return (0, o.jsxs)(O.ModalFooter, {
            children: [(0, o.jsx)(O.Button, {
              color: O.ButtonColors.BRAND,
              onClick: () => es(!0),
              children: Z.default.Messages.CLOSE
            }), t ? (0, o.jsx)("div", {
              className: W.manageConnectionsFooterButton,
              children: (0, o.jsx)(O.Button, {
                look: O.ButtonLooks.LINK,
                color: O.ButtonColors.LINK,
                onClick: ec,
                children: Z.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
              })
            }) : null]
          })
      }
    }()]
  })
}(l = a || (a = {}))[l.CHECKS_REQUIRED = 0] = "CHECKS_REQUIRED", l[l.ACCOUNT_CONNECTED = 1] = "ACCOUNT_CONNECTED", l[l.ROLE_GRANTED = 2] = "ROLE_GRANTED"