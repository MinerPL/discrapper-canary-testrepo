"use strict";
s.r(t), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("658722"),
  o = s.n(r),
  d = s("243814"),
  u = s("442837"),
  c = s("921072"),
  S = s("1561"),
  E = s("882485"),
  T = s("389507"),
  f = s("689773"),
  _ = s("481060"),
  m = s("384275"),
  g = s("230711"),
  I = s("497321"),
  h = s("468026"),
  N = s("566620"),
  p = s("317381"),
  C = s("979200"),
  A = s("713938"),
  O = s("881998"),
  x = s("246946"),
  R = s("186095"),
  M = s("285952"),
  v = s("6048"),
  L = s("950463"),
  D = s("507893"),
  P = s("768581"),
  j = s("49012"),
  b = s("210887"),
  U = s("436267"),
  y = s("494620"),
  B = s("981631"),
  G = s("689938"),
  F = s("338009"),
  k = s("611273");
let w = u.default.connectStores([b.default], () => ({
  theme: b.default.theme
}))(R.default);

function H(e) {
  let {
    application: t
  } = e;
  return (0, a.jsxs)("div", {
    className: F.twoWayWarning,
    children: [(0, a.jsx)(D.default, {
      className: F.twoWayWarningIcon
    }), (0, a.jsx)(_.Text, {
      color: "text-normal",
      variant: "text-sm/medium",
      children: G.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
        applicationName: t.name,
        onConnectionPress: () => g.default.setSection(B.AnalyticsSections.SETTINGS_CONNECTIONS)
      })
    })]
  })
}
let V = e => {
    let {
      disclosure: t
    } = e;
    return n.useMemo(() => {
      switch (t) {
        case c.ApplicationDisclosureType.IP_LOCATION:
          return (0, a.jsx)(L.default, {
            className: F.disclosureIcon
          });
        case c.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS:
          return (0, a.jsx)(T.EmbedIcon, {
            className: F.disclosureIcon
          });
        default:
          return (0, a.jsx)(E.CircleInformationIcon, {
            className: F.disclosureIcon
          })
      }
    }, [t])
  },
  Y = e => {
    let {
      scopes: t,
      application: s,
      onDelete: n,
      disclosures: l
    } = e, r = () => {
      let e = G.default.Messages.DELETE_APP_CONFIRM_MSG;
      return (0, U.default)(s.id) && (e = (0, a.jsxs)(a.Fragment, {
        children: [e, (0, a.jsx)(y.default, {
          className: F.infoBox,
          children: G.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
            applicationName: s.name
          })
        })]
      })), (0, _.openModal)(t => (0, a.jsx)(h.default, {
        title: G.default.Messages.DEAUTHORIZE_APP,
        body: e,
        confirmText: G.default.Messages.DEAUTHORIZE,
        cancelText: G.default.Messages.CANCEL,
        onConfirm: n,
        ...t
      }))
    }, o = () => {
      null != s.terms_of_service_url && (0, j.handleClick)({
        href: s.terms_of_service_url,
        shouldConfirm: !0
      })
    }, u = () => {
      null != s.privacy_policy_url && (0, j.handleClick)({
        href: s.privacy_policy_url,
        shouldConfirm: !0
      })
    }, c = (0, U.useShouldWarnAuthorizedAppTwoWay)(s.id);
    return (0, a.jsx)(_.Card, {
      className: i()(F.authedApp, k.marginBottom8),
      outline: !0,
      children: (0, a.jsxs)(_.HeadingLevel, {
        component: (() => {
          let e = P.default.getApplicationIconURL({
              id: s.id,
              icon: s.icon
            }),
            t = null != e ? (0, a.jsx)(M.default.Child, {
              className: F.appAvatar,
              grow: 0,
              children: (0, a.jsx)("img", {
                src: e,
                alt: ""
              })
            }) : null;
          return (0, a.jsxs)(M.default, {
            className: i()(F.__invalid_header, k.marginBottom20),
            children: [(0, a.jsxs)(M.default, {
              className: F.headerInfo,
              children: [t, (0, a.jsx)(M.default.Child, {
                children: (0, a.jsx)(_.Heading, {
                  variant: "text-sm/semibold",
                  children: s.name
                })
              })]
            }), (0, a.jsx)(M.default.Child, {
              wrap: !0,
              grow: 0,
              children: (0, a.jsx)(_.Button, {
                className: F.deleteApp,
                color: _.ButtonColors.RED,
                look: _.ButtonLooks.OUTLINED,
                size: _.ButtonSizes.SMALL,
                onClick: r,
                children: G.default.Messages.DEAUTHORIZE
              })
            })]
          })
        })(),
        children: [(() => {
          if (null != s.description && "" !== s.description) return (0, a.jsx)(_.FormItem, {
            faded: !0,
            title: G.default.Messages.ABOUT_THIS_APP,
            children: (0, a.jsx)(_.FormText, {
              children: s.description
            })
          })
        })(), (() => {
          if (null != s.terms_of_service_url || null != s.privacy_policy_url) return (0, a.jsxs)("div", {
            className: F.tosPrivacy,
            children: [null != s.terms_of_service_url ? (0, a.jsxs)(S.Clickable, {
              tag: "a",
              onClick: o,
              className: F.tos,
              children: [(0, a.jsx)(_.FormText, {
                className: F.link,
                children: G.default.Messages.AUTHORIZED_APPS_TERMS_OF_SERVICE
              }), (0, a.jsx)(f.LinkExternalSmallIcon, {
                className: F.externalLinkIcon,
                color: "var(--text-link)"
              })]
            }) : null, null != s.privacy_policy_url ? (0, a.jsxs)("div", {
              className: F.privacy,
              children: [null != s.terms_of_service_url ? (0, a.jsx)("div", {
                className: F.divider
              }) : null, (0, a.jsxs)(S.Clickable, {
                tag: "a",
                onClick: u,
                className: F.privacy,
                children: [(0, a.jsx)(_.FormText, {
                  className: F.link,
                  children: G.default.Messages.AUTHORIZED_APPS_PRIVACY_POLICY
                }), (0, a.jsx)(f.LinkExternalSmallIcon, {
                  className: F.externalLinkIcon,
                  color: "var(--text-link)"
                })]
              })]
            }) : null]
          })
        })(), (() => {
          let e = [];
          for (let s of t) e.push((0, A.getScopeName)(s, t)), s === d.OAuth2Scopes.APPLICATIONS_COMMANDS && e.push(G.default.Messages.SCOPE_DM_YOU);
          if (e.length > 0 || null != l && l.length > 0) return (0, a.jsx)(_.FormItem, {
            faded: !0,
            title: G.default.Messages.PERMISSIONS,
            className: k.marginTop20,
            children: (0, a.jsxs)("ul", {
              children: [e.map((e, t) => (0, a.jsxs)("li", {
                className: i()(F.permission, k.marginTop8),
                children: [(0, a.jsx)("i", {
                  className: F.permissionCheckmark
                }), (0, a.jsx)(_.FormText, {
                  children: e
                })]
              }, t)), null == l ? void 0 : l.map((t, s) => {
                let n = (0, C.getTextForDisclosure)(t);
                return null != n ? (0, a.jsxs)("li", {
                  className: i()(F.permission, k.marginTop8),
                  children: [(0, a.jsx)(V, {
                    disclosure: t
                  }), (0, a.jsx)(_.FormText, {
                    children: n
                  })]
                }, s + e.length) : null
              })]
            })
          })
        })(), c && (0, a.jsx)(H, {
          application: s
        })]
      })
    })
  };
t.default = () => {
  let e = (0, u.useStateFromStores)([x.default], () => x.default.hidePersonalInformation),
    t = (0, u.useStateFromStores)([O.default], () => O.default.getApps()),
    l = (0, u.useStateFromStores)([p.default], () => p.default.getSelfEmbeddedActivities());
  n.useEffect(() => {
    m.default.fetch()
  }, []);
  let i = e => {
      let {
        id: t,
        application: s
      } = e;
      m.default.delete(t);
      let a = l.get(s.id);
      null != a && (0, N.stopEmbeddedActivity)({
        channelId: a.channelId,
        applicationId: s.id
      })
    },
    [r, d] = n.useState(""),
    c = e => {
      d(e)
    },
    S = () => {
      d("")
    },
    E = () => (0, a.jsx)("div", {
      className: F.searchContainer,
      children: (0, a.jsx)(v.default, {
        size: v.default.Sizes.MEDIUM,
        query: r,
        onChange: c,
        onClear: S,
        placeholder: G.default.Messages.INTEGRATIONS_SEARCH,
        "aria-label": G.default.Messages.INTEGRATIONS_SEARCH
      })
    }),
    T = (e, t) => (0, a.jsxs)(w, {
      className: F.__invalid_marginTop20,
      children: [(0, a.jsx)(R.EmptyStateImage, {
        darkSrc: s("701972"),
        lightSrc: s("818658"),
        width: 380,
        height: 282
      }), (0, a.jsx)(R.EmptyStateText, {
        note: e,
        children: t
      })]
    }),
    f = n.useMemo(() => {
      let e = r.trim().toLowerCase();
      return "" === e || null == t ? t : t.length < 100 ? t.filter(t => o()(e, t.application.name.toLowerCase())) : t.filter(t => t.application.name.toLowerCase().includes(e))
    }, [t, r]);
  return e ? (0, a.jsx)(I.default, {}) : (0, a.jsx)(_.FormSection, {
    tag: _.FormTitleTags.H1,
    title: G.default.Messages.AUTHORIZED_APPS,
    children: (0, a.jsx)(_.HeadingLevel, {
      component: (0, a.jsx)(_.FormNotice, {
        className: k.marginBottom40,
        type: _.CardTypes.PRIMARY,
        title: G.default.Messages.APPLICATIONS_AND_CONNECTIONS,
        body: G.default.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
      }),
      children: null == t || null == f ? (0, a.jsx)(_.Spinner, {
        className: k.marginTop20,
        type: _.Spinner.Type.SPINNING_CIRCLE
      }) : 0 === t.length ? T(G.default.Messages.NO_AUTHORIZED_APPS_NOTE, G.default.Messages.NO_AUTHORIZED_APPS) : 0 === f.length ? (0, a.jsxs)(a.Fragment, {
        children: [E(), T(null, G.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [E(), f.sort((e, t) => e.application.name.localeCompare(t.application.name)).map(e => (0, a.jsx)(Y, {
          onDelete: () => i(e),
          ...e
        }, e.id))]
      })
    })
  })
}