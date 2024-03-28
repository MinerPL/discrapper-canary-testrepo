"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("47120"), s("653041"), s("536091");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("570140"),
  E = s("275759"),
  _ = s("153124"),
  I = s("151785"),
  T = s("759231"),
  S = s("63063"),
  f = s("243730"),
  m = s("764260"),
  N = s("946724"),
  g = s("95242"),
  h = s("530198"),
  C = s("420966"),
  R = s("203377"),
  x = s("981631"),
  L = s("856651"),
  O = s("689938"),
  A = s("451173"),
  p = s("790492");
let M = (0, _.uid)();

function D(e, t) {
  return t !== E.ConnectionConfigurationRuleOperator.AND ? Object.values(o().groupBy(e, e => "".concat(e.connectionType, ":").concat(e.applicationId))) : 0 === e.length ? [] : [
    [...e]
  ]
}

function v(e) {
  let {
    handleAddVerificationClicked: t,
    locked: s
  } = e;
  return (0, a.jsxs)("div", {
    className: A.headerNoConfigContainer,
    children: [(0, a.jsx)(u.Heading, {
      className: A.headerHeading,
      variant: "eyebrow",
      children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
    }), (0, a.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({
        helpdeskArticleUrl: S.default.getArticleURL(x.HelpdeskArticles.CONNECTION_DETAILS_ADMIN)
      })
    }), (0, a.jsx)(u.Button, {
      disabled: s,
      className: A.addVerificationButton,
      size: u.Button.Sizes.MEDIUM,
      look: u.Button.Looks.FILLED,
      color: u.Button.Colors.BRAND_NEW,
      onClick: t,
      children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION
    })]
  })
}

function j(e) {
  let {
    guild: t,
    role: s,
    locked: n,
    setSelectedSection: r,
    integrations: o
  } = e, {
    headerHeight: _,
    headerRef: j
  } = (0, g.default)(0), {
    scrolledToTop: G,
    handleScroll: U
  } = (0, C.useScrolledToTop)(), P = (0, d.useStateFromStores)([f.default], () => {
    var e;
    return null === (e = f.default.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[s.id]
  }, [s.id, t.id]), b = (0, d.useStateFromStoresArray)([N.default], () => {
    var e;
    return null !== (e = N.default.getEditedRoleConnectionConfigurationsMap().get(s.id)) && void 0 !== e ? e : []
  }), B = b.length > 1 ? E.ConnectionConfigurationRuleOperator.OR : E.ConnectionConfigurationRuleOperator.AND, y = l.useMemo(() => B === E.ConnectionConfigurationRuleOperator.OR ? b.flat() : null != b && b.length > 0 ? b[0] : [], [B, b]), F = l.useMemo(() => new Set(y.map(e => e.connectionType)), [y]);

  function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
      a = [...y];
    a.push({
      connectionType: e,
      connectionMetadataField: void 0,
      applicationId: t,
      operator: void 0,
      value: void 0
    }), (0, m.updateRoleConnectionConfigurations)(s.id, D(a, B))
  }

  function k() {
    c.default.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: e => H(e),
      excludedPlatformTypes: F,
      integrations: o,
      onCompleteApplication: e => H(L.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE, e)
    })
  }
  let w = null;
  if (0 === y.length) w = (0, a.jsx)(v, {
    handleAddVerificationClicked: k,
    locked: n
  });
  else if (y.length > 0) {
    var V, Y;
    let e = null;
    y.length < 10 && (e = (0, a.jsx)(u.Button, {
      className: i()(A.addVerificationButton, A.addVerificationButtonAppend),
      size: u.Button.Sizes.LARGE,
      look: u.Button.Looks.BLANK,
      color: u.Button.Colors.LINK,
      onClick: k,
      disabled: n,
      children: (0, a.jsxs)("div", {
        className: A.addVerificationButtonAppendTextContainer,
        children: [(0, a.jsx)(I.default, {}), O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION]
      })
    })), w = (0, a.jsxs)(a.Fragment, {
      children: [(V = () => (0, m.updateRoleConnectionConfigurations)(s.id, []), Y = n, (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: A.headerTitleContainer,
          children: [(0, a.jsx)("div", {
            className: A.headerTitleTextContainer,
            children: (0, a.jsx)(u.Heading, {
              variant: "eyebrow",
              children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
            })
          }), (0, a.jsx)(u.Button, {
            className: A.headerTitleButton,
            size: u.Button.Sizes.TINY,
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.LINK,
            onClick: V,
            disabled: Y,
            children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_CLEAR_ALL
          })]
        }), (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({
            helpdeskArticleUrl: S.default.getArticleURL(x.HelpdeskArticles.CONNECTION_DETAILS_ADMIN)
          })
        })]
      })), function(e, t, s, l, n) {
        let i = D(l, E.ConnectionConfigurationRuleOperator.OR);
        return (0, a.jsx)(u.FormItem, {
          className: A.operatorContainer,
          title: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_REQUIREMENTS,
          children: (0, a.jsx)(u.RadioGroup, {
            options: [{
              name: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_OR_DESCRIPTION,
              value: E.ConnectionConfigurationRuleOperator.OR
            }, {
              name: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AND_DESCRIPTION,
              value: E.ConnectionConfigurationRuleOperator.AND
            }],
            onChange: e => n(l, e.value),
            value: s,
            disabled: e || i.length < 2,
            "aria-labelledby": M
          })
        })
      }(n, s.id, B, y, (e, t) => (0, m.updateRoleConnectionConfigurations)(s.id, D(e, t))), function(e, t, s, l, n) {
        function i(s, a) {
          let l = [];
          for (let t of e) l.push({
            ...t
          });
          if (null == s) {
            let t = e[a];
            null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? l = l.filter(e => null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId) : l.splice(a, 1)
          } else - 1 === a ? l.push(s) : a >= 0 && (l[a] = s);
          t(l)
        }
        let r = new Map;
        for (let t of (e.forEach((e, t) => {
            let s = "".concat(e.connectionType, ":").concat(e.applicationId);
            if (r.has(s)) {
              let a = r.get(s);
              null == a || a.push({
                index: t,
                configuration: e
              })
            } else r.set(s, [{
              index: t,
              configuration: e
            }])
          }), r.values())) {
          if (t.some(e => {
              let {
                configuration: t
              } = e;
              return null == t.connectionMetadataField && null == t.operator && null == t.value
            })) continue;
          let s = {
              ...t[0].configuration,
              connectionMetadataField: void 0,
              operator: void 0,
              value: void 0
            },
            a = e.push(s);
          t.push({
            index: a - 1,
            configuration: s
          })
        }
        return (0, a.jsx)("div", {
          className: A.configurationsContainer,
          children: Array.from(r.values()).map(e => (0, a.jsx)(h.default, {
            configurationItems: e,
            onConfigurationChange: i,
            locked: s,
            integrations: n
          }, e[0].configuration.connectionType + ":" + e[0].index))
        })
      }(y, e => (0, m.updateRoleConnectionConfigurations)(s.id, D(e, B)), n, s.id, o), e]
    })
  }
  return (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: A.scroller,
    style: {
      scrollPaddingTop: _
    },
    onScroll: U,
    children: (0, a.jsxs)("div", {
      className: p.contentWidth,
      children: [(0, a.jsx)("div", {
        className: i()(p.header, p.stickyHeader, {
          [p.stickyHeaderElevated]: !G
        }),
        ref: j,
        children: (0, a.jsx)(C.default, {
          guild: t,
          role: s,
          selectedSection: R.GuildSettingsRoleEditSections.VERIFICATIONS,
          setSelectedSection: r
        })
      }), (null != P ? P : 0) > 0 ? (0, a.jsxs)("div", {
        className: A.warningContainer,
        children: [(0, a.jsx)(T.default, {
          className: A.warningIcon
        }), (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MEMBERS_WARNING
        })]
      }) : null, w]
    })
  })
}