"use strict";
t.d(s, {
  Z: function() {
    return Z
  }
}), t(47120), t(653041), t(536091);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t.n(r),
  c = t(442837),
  d = t(481060),
  u = t(570140),
  E = t(275759),
  _ = t(153124),
  I = t(151785),
  T = t(759231),
  N = t(63063),
  m = t(243730),
  S = t(764260),
  h = t(946724),
  g = t(95242),
  x = t(530198),
  C = t(420966),
  R = t(203377),
  L = t(981631),
  O = t(856651),
  A = t(689938),
  p = t(273879),
  M = t(585512);
let f = (0, _.hQ)();

function v(e, s) {
  return s !== E.O1.AND ? Object.values(o().groupBy(e, e => "".concat(e.connectionType, ":").concat(e.applicationId))) : 0 === e.length ? [] : [
    [...e]
  ]
}

function D(e) {
  let {
    handleAddVerificationClicked: s,
    locked: t
  } = e;
  return (0, n.jsxs)("div", {
    className: p.headerNoConfigContainer,
    children: [(0, n.jsx)(d.Heading, {
      className: p.headerHeading,
      variant: "eyebrow",
      children: A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
    }), (0, n.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({
        helpdeskArticleUrl: N.Z.getArticleURL(L.BhN.CONNECTION_DETAILS_ADMIN)
      })
    }), (0, n.jsx)(d.Button, {
      disabled: t,
      className: p.addVerificationButton,
      size: d.Button.Sizes.MEDIUM,
      look: d.Button.Looks.FILLED,
      color: d.Button.Colors.BRAND,
      onClick: s,
      children: A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION
    })]
  })
}

function Z(e) {
  let {
    guild: s,
    role: t,
    locked: l,
    setSelectedSection: r,
    integrations: o
  } = e, {
    headerHeight: _,
    headerRef: Z
  } = (0, g.Z)(0), {
    scrolledToTop: j,
    handleScroll: U
  } = (0, C.V)(), G = (0, c.e7)([m.Z], () => {
    var e;
    return null === (e = m.Z.getRoleMemberCount(s.id)) || void 0 === e ? void 0 : e[t.id]
  }, [t.id, s.id]), P = (0, c.Wu)([h.Z], () => {
    var e;
    return null !== (e = h.Z.getEditedRoleConnectionConfigurationsMap().get(t.id)) && void 0 !== e ? e : []
  }), b = P.length > 1 ? E.O1.OR : E.O1.AND, B = i.useMemo(() => b === E.O1.OR ? P.flat() : null != P && P.length > 0 ? P[0] : [], [b, P]), y = i.useMemo(() => new Set(B.map(e => e.connectionType)), [B]);

  function F(e) {
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
      n = [...B];
    n.push({
      connectionType: e,
      connectionMetadataField: void 0,
      applicationId: s,
      operator: void 0,
      value: void 0
    }), (0, S.d_)(t.id, v(n, b))
  }

  function w() {
    u.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: e => F(e),
      excludedPlatformTypes: y,
      integrations: o,
      onCompleteApplication: e => F(O.Kt, e)
    })
  }
  let k = null;
  if (0 === B.length) k = (0, n.jsx)(D, {
    handleAddVerificationClicked: w,
    locked: l
  });
  else if (B.length > 0) {
    var H, V;
    let e = null;
    B.length < 10 && (e = (0, n.jsx)(d.Button, {
      className: a()(p.addVerificationButton, p.addVerificationButtonAppend),
      size: d.Button.Sizes.LARGE,
      look: d.Button.Looks.BLANK,
      color: d.Button.Colors.LINK,
      onClick: w,
      disabled: l,
      children: (0, n.jsxs)("div", {
        className: p.addVerificationButtonAppendTextContainer,
        children: [(0, n.jsx)(I.Z, {}), A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION]
      })
    })), k = (0, n.jsxs)(n.Fragment, {
      children: [(H = () => (0, S.d_)(t.id, []), V = l, (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)("div", {
          className: p.headerTitleContainer,
          children: [(0, n.jsx)("div", {
            className: p.headerTitleTextContainer,
            children: (0, n.jsx)(d.Heading, {
              variant: "eyebrow",
              children: A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
            })
          }), (0, n.jsx)(d.Button, {
            className: p.headerTitleButton,
            size: d.Button.Sizes.TINY,
            look: d.Button.Looks.LINK,
            color: d.Button.Colors.LINK,
            onClick: H,
            disabled: V,
            children: A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_CLEAR_ALL
          })]
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({
            helpdeskArticleUrl: N.Z.getArticleURL(L.BhN.CONNECTION_DETAILS_ADMIN)
          })
        })]
      })), function(e, s, t, i, l) {
        let a = v(i, E.O1.OR);
        return (0, n.jsx)(d.FormItem, {
          className: p.operatorContainer,
          title: A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_REQUIREMENTS,
          children: (0, n.jsx)(d.RadioGroup, {
            options: [{
              name: A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_OR_DESCRIPTION,
              value: E.O1.OR
            }, {
              name: A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AND_DESCRIPTION,
              value: E.O1.AND
            }],
            onChange: e => l(i, e.value),
            value: t,
            disabled: e || a.length < 2,
            "aria-labelledby": f
          })
        })
      }(l, t.id, b, B, (e, s) => (0, S.d_)(t.id, v(e, s))), function(e, s, t, i, l) {
        function a(t, n) {
          let i = [];
          for (let s of e) i.push({
            ...s
          });
          if (null == t) {
            let s = e[n];
            null !== s && null == s.connectionMetadataField && null == s.operator && null == s.value ? i = i.filter(e => null == s.applicationId ? e.connectionType !== s.connectionType : e.connectionType !== s.connectionType && e.applicationId !== s.applicationId) : i.splice(n, 1)
          } else - 1 === n ? i.push(t) : n >= 0 && (i[n] = t);
          s(i)
        }
        let r = new Map;
        for (let s of (e.forEach((e, s) => {
            let t = "".concat(e.connectionType, ":").concat(e.applicationId);
            if (r.has(t)) {
              let n = r.get(t);
              null == n || n.push({
                index: s,
                configuration: e
              })
            } else r.set(t, [{
              index: s,
              configuration: e
            }])
          }), r.values())) {
          if (s.some(e => {
              let {
                configuration: s
              } = e;
              return null == s.connectionMetadataField && null == s.operator && null == s.value
            })) continue;
          let t = {
              ...s[0].configuration,
              connectionMetadataField: void 0,
              operator: void 0,
              value: void 0
            },
            n = e.push(t);
          s.push({
            index: n - 1,
            configuration: t
          })
        }
        return (0, n.jsx)("div", {
          className: p.configurationsContainer,
          children: Array.from(r.values()).map(e => (0, n.jsx)(x.Z, {
            configurationItems: e,
            onConfigurationChange: a,
            locked: t,
            integrations: l
          }, e[0].configuration.connectionType + ":" + e[0].index))
        })
      }(B, e => (0, S.d_)(t.id, v(e, b)), l, t.id, o), e]
    })
  }
  return (0, n.jsx)(d.AdvancedScrollerAuto, {
    className: p.scroller,
    style: {
      scrollPaddingTop: _
    },
    onScroll: U,
    children: (0, n.jsxs)("div", {
      className: M.contentWidth,
      children: [(0, n.jsx)("div", {
        className: a()(M.header, M.stickyHeader, {
          [M.stickyHeaderElevated]: !j
        }),
        ref: Z,
        children: (0, n.jsx)(C.Z, {
          guild: s,
          role: t,
          selectedSection: R.ZI.VERIFICATIONS,
          setSelectedSection: r
        })
      }), (null != G ? G : 0) > 0 ? (0, n.jsxs)("div", {
        className: p.warningContainer,
        children: [(0, n.jsx)(T.Z, {
          className: p.warningIcon
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: A.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MEMBERS_WARNING
        })]
      }) : null, k]
    })
  })
}