"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
  }
}), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("448105"),
  o = s.n(r),
  d = s("446674"),
  u = s("77078"),
  c = s("776466"),
  S = s("79112"),
  E = s("642950"),
  T = s("135230"),
  f = s("550766"),
  _ = s("191225"),
  m = s("29479"),
  g = s("250404"),
  h = s("102985"),
  N = s("941886"),
  I = s("145131"),
  p = s("810567"),
  C = s("266926"),
  A = s("315102"),
  O = s("161778"),
  x = s("101787"),
  R = s("216503"),
  M = s("49111"),
  D = s("843455"),
  v = s("782340"),
  L = s("660747"),
  P = s("890957");
let j = d.default.connectStores([O.default], () => ({
  theme: O.default.theme
}))(N.default);

function b(e) {
  let {
    application: t
  } = e;
  return (0, a.jsxs)("div", {
    className: L.twoWayWarning,
    children: [(0, a.jsx)(C.default, {
      className: L.twoWayWarningIcon
    }), (0, a.jsx)(u.Text, {
      color: "text-normal",
      variant: "text-sm/medium",
      children: v.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
        applicationName: t.name,
        onConnectionPress: () => S.default.setSection(M.AnalyticsSections.SETTINGS_CONNECTIONS)
      })
    })]
  })
}
let U = e => {
  let {
    scopes: t,
    application: s,
    onDelete: n
  } = e, l = () => {
    let e = v.default.Messages.DELETE_APP_CONFIRM_MSG;
    return (0, x.default)(s.id) && (e = (0, a.jsxs)(a.Fragment, {
      children: [e, (0, a.jsx)(R.default, {
        className: L.infoBox,
        children: v.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
          applicationName: s.name
        })
      })]
    })), (0, u.openModal)(t => (0, a.jsx)(T.default, {
      title: v.default.Messages.DEAUTHORIZE_APP,
      body: e,
      confirmText: v.default.Messages.DEAUTHORIZE,
      cancelText: v.default.Messages.CANCEL,
      onConfirm: n,
      ...t
    }))
  }, r = (0, x.useShouldWarnAuthorizedAppTwoWay)(s.id);
  return (0, a.jsx)(u.Card, {
    className: i(L.authedApp, P.marginBottom8),
    outline: !0,
    children: (0, a.jsxs)(u.HeadingLevel, {
      component: (() => {
        let e = A.default.getApplicationIconURL({
            id: s.id,
            icon: s.icon
          }),
          t = null != e ? (0, a.jsx)(I.default.Child, {
            className: L.appAvatar,
            grow: 0,
            children: (0, a.jsx)("img", {
              src: e,
              alt: ""
            })
          }) : null;
        return (0, a.jsxs)(I.default, {
          className: i(L.header, P.marginBottom20),
          children: [(0, a.jsxs)(I.default, {
            className: L.headerInfo,
            children: [t, (0, a.jsx)(I.default.Child, {
              children: (0, a.jsx)(u.Heading, {
                variant: "text-sm/semibold",
                children: s.name
              })
            })]
          }), (0, a.jsx)(I.default.Child, {
            wrap: !0,
            grow: 0,
            children: (0, a.jsx)(u.Button, {
              className: L.deleteApp,
              color: u.ButtonColors.RED,
              look: u.ButtonLooks.OUTLINED,
              size: u.ButtonSizes.SMALL,
              onClick: l,
              children: v.default.Messages.DEAUTHORIZE
            })
          })]
        })
      })(),
      children: [(() => {
        if (null != s.description && "" !== s.description) return (0, a.jsx)(u.FormItem, {
          faded: !0,
          title: v.default.Messages.ABOUT_THIS_APP,
          children: (0, a.jsx)(u.FormText, {
            children: s.description
          })
        })
      })(), (() => {
        let e = [];
        for (let s of t) e.push((0, m.getScopeName)(s, t)), s === D.OAuth2Scopes.APPLICATIONS_COMMANDS && e.push(v.default.Messages.SCOPE_DM_YOU);
        if (e.length > 0) return (0, a.jsx)(u.FormItem, {
          faded: !0,
          title: v.default.Messages.PERMISSIONS,
          className: P.marginTop20,
          children: (0, a.jsx)("ul", {
            children: e.map((e, t) => (0, a.jsxs)("li", {
              className: i(L.permission, P.marginTop8),
              children: [(0, a.jsx)("i", {
                className: L.permissionCheckmark
              }), (0, a.jsx)(u.FormText, {
                children: e
              })]
            }, t))
          })
        })
      })(), r && (0, a.jsx)(b, {
        application: s
      })]
    })
  })
};
var y = () => {
  let e = (0, d.useStateFromStores)([h.default], () => h.default.hidePersonalInformation),
    t = (0, d.useStateFromStores)([g.default], () => g.default.getApps()),
    l = (0, d.useStateFromStores)([_.default], () => _.default.getSelfEmbeddedActivities());
  n.useEffect(() => {
    c.default.fetch()
  }, []);
  let i = e => {
      let {
        id: t,
        application: s
      } = e;
      c.default.delete(t);
      let a = l.get(s.id);
      null != a && (0, f.stopEmbeddedActivity)({
        channelId: a.channelId,
        applicationId: s.id
      })
    },
    [r, S] = n.useState(""),
    T = e => {
      S(e)
    },
    m = () => {
      S("")
    },
    I = () => (0, a.jsx)("div", {
      className: L.searchContainer,
      children: (0, a.jsx)(p.default, {
        size: p.default.Sizes.MEDIUM,
        query: r,
        onChange: T,
        onClear: m,
        placeholder: v.default.Messages.INTEGRATIONS_SEARCH,
        "aria-label": v.default.Messages.INTEGRATIONS_SEARCH
      })
    }),
    C = (e, t) => (0, a.jsxs)(j, {
      className: L.marginTop20,
      children: [(0, a.jsx)(N.EmptyStateImage, {
        darkSrc: s("541956"),
        lightSrc: s("301037"),
        width: 380,
        height: 282
      }), (0, a.jsx)(N.EmptyStateText, {
        note: e,
        children: t
      })]
    }),
    A = n.useMemo(() => {
      let e = r.trim().toLowerCase();
      return "" === e || null == t ? t : t.length < 100 ? t.filter(t => o(e, t.application.name.toLowerCase())) : t.filter(t => t.application.name.toLowerCase().includes(e))
    }, [t, r]);
  return e ? (0, a.jsx)(E.default, {}) : (0, a.jsx)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: v.default.Messages.AUTHORIZED_APPS,
    children: (0, a.jsx)(u.HeadingLevel, {
      component: (0, a.jsx)(u.FormNotice, {
        className: P.marginBottom40,
        type: u.CardTypes.PRIMARY,
        title: v.default.Messages.APPLICATIONS_AND_CONNECTIONS,
        body: v.default.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
      }),
      children: null == t || null == A ? (0, a.jsx)(u.Spinner, {
        className: P.marginTop20,
        type: u.Spinner.Type.SPINNING_CIRCLE
      }) : 0 === t.length ? C(v.default.Messages.NO_AUTHORIZED_APPS_NOTE, v.default.Messages.NO_AUTHORIZED_APPS) : 0 === A.length ? (0, a.jsxs)(a.Fragment, {
        children: [I(), C(null, v.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [I(), A.sort((e, t) => e.application.name.localeCompare(t.application.name)).map(e => (0, a.jsx)(U, {
          onDelete: () => i(e),
          ...e
        }, e.id))]
      })
    })
  })
}