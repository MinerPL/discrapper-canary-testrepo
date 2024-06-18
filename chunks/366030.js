"use strict";
n.d(t, {
  Z: function() {
    return x
  }
}), n(536091), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(512722),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(692547),
  d = n(780384),
  c = n(481060),
  E = n(749210),
  I = n(99690),
  T = n(410030),
  h = n(726542),
  S = n(367907),
  f = n(906732),
  N = n(171368),
  A = n(598077),
  m = n(271383),
  O = n(467679),
  R = n(263704),
  C = n(626135),
  p = n(275759),
  g = n(107484),
  L = n(977392),
  v = n(134433),
  D = n(753194),
  M = n(458034),
  P = n(856651),
  y = n(981631),
  U = n(228168),
  b = n(689938),
  G = n(259383);

function w(e) {
  let t, {
    connectionType: n,
    connectionMetadataField: r,
    operator: s,
    value: o,
    description: a
  } = e;
  if (null != a) switch (s) {
    case P.iO.LESS_THAN:
      t = b.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
        description: a,
        count: Math.max(0, Number(o) - 1)
      });
      break;
    case P.iO.GREATER_THAN:
      t = b.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
        description: a,
        count: Math.max(0, Number(o) + 1)
      });
      break;
    default:
      t = a
  } else t = (0, p.n_)({
    connectionType: n,
    connectionMetadataField: r,
    operator: s,
    value: o
  });
  return null == t ? null : (0, i.jsxs)("div", {
    className: G.popoutCheck,
    children: [(0, i.jsx)(R.Z, {
      className: G.popoutCheckIcon
    }), (0, i.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: t
    })]
  })
}

function k(e) {
  let {
    eligibilityStates: t
  } = e, n = (0, T.ZP)(), r = (0, c.useToken)(_.Z.unsafe_rawColors.GREEN_330).hex(), s = l().groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
  return (0, i.jsx)(i.Fragment, {
    children: Object.keys(s).map(e => {
      var t, a;
      let l;
      let u = s[e],
        _ = u.filter(e => null != e.operator),
        E = u.find(e => null != e.application),
        T = h.Z.get(e),
        S = null == E ? void 0 : E.application,
        f = (null == S ? void 0 : S.bot) != null ? new A.Z(S.bot) : null;
      return p.SJ.includes(null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : "") ? l = (0, i.jsx)(D.Z, {
        className: G.botTag,
        color: r,
        size: 16
      }) : null != f && (l = (0, i.jsx)(O.Z, {
        className: G.botTag,
        verified: f.isVerifiedBot()
      })), (0, i.jsxs)("div", {
        className: G.popoutChecksGroup,
        children: [(0, i.jsxs)("div", {
          className: G.popoutCheckGroupName,
          children: [null != T ? (0, i.jsx)("img", {
            src: (0, d.wj)(n) ? T.icon.darkSVG : T.icon.lightSVG,
            alt: "",
            className: G.popoutCheckGroupPlatformIcon
          }) : null, null != f ? (0, i.jsx)(I.Z, {
            user: f,
            size: c.AvatarSizes.SIZE_20,
            className: G.popoutCheckGroupPlatformIcon
          }) : null, (0, i.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: null !== (a = null == T ? void 0 : T.name) && void 0 !== a ? a : null == S ? void 0 : S.name
          }), l]
        }), _.map(e => {
          let {
            connection_type: t,
            connection_metadata_field: n,
            operator: r,
            value: s,
            description: a
          } = e;
          return o()(null != n, "connectionMetadataField is null"), o()(null != r, "operator is null"), o()(null != s, "value is null"), (0, i.jsx)(w, {
            connectionType: t,
            connectionMetadataField: n,
            operator: r,
            value: s,
            description: a
          }, "".concat(t, ":").concat(n, ":").concat(r, ":").concat(s))
        })]
      }, e)
    })
  })
}

function B(e) {
  let t, {
    onGetRolesClicked: n,
    onOpenProfile: s,
    eligibilityStates: o,
    userId: a,
    roleId: l,
    channelId: _,
    guildId: d
  } = e;
  r.useEffect(() => {
    C.default.track(y.rMx.PASSPORT_ROLE_POPOUT_VIEWED, {
      other_user_id: a,
      role_id: l,
      ...(0, S.JS)(_),
      ...(0, S.hH)(d)
    })
  }, [a, l, _, d]);
  let E = (0, u.e7)([m.ZP], () => {
    var e, t;
    return null !== (t = null === (e = m.ZP.getSelfMember(d)) || void 0 === e ? void 0 : e.roles.includes(l)) && void 0 !== t && t
  }, [d, l]);
  return t = 1 === o.length && 1 === o[0].length ? b.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === o.length ? b.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : b.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format(), (0, i.jsxs)("div", {
    className: G.popout,
    children: [(0, i.jsx)("div", {
      className: G.popoutHeaderContainer,
      children: (0, i.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        className: G.popoutHeaderText,
        children: t
      })
    }), (0, i.jsx)("div", {
      className: G.popoutChecks,
      children: (0, i.jsx)(k, {
        eligibilityStates: o.flat()
      })
    }), (0, i.jsxs)("div", {
      className: G.buttonContainer,
      children: [E ? null : (0, i.jsx)(c.Button, {
        className: G.getRolesButton,
        onClick: n,
        children: b.Z.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
      }), (0, i.jsx)(c.Button, {
        className: G.viewConnectionsButton,
        color: c.Button.Colors.PRIMARY,
        onClick: s,
        children: b.Z.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
      })]
    })]
  })
}

function x(e) {
  let {
    userId: t,
    messageId: n,
    guild: s,
    channel: a
  } = e, {
    analyticsLocations: l
  } = (0, f.ZP)(), _ = (0, L.Z)(s, t, a.id, !0), d = (0, u.e7)([g.Z], () => g.Z.getGuildRoleConnectionEligibility(null == _ ? void 0 : _.id)), [I, T] = r.useState(null == d);
  if (null == _) return null;
  async function h() {
    if (o()(null != _, "visibleConnectionsRole is null"), !!I && null == d) await E.Z.fetchGuildRoleConnectionsEligibility(s.id, _.id), T(!1)
  }
  return (0, i.jsx)(c.LazyPopout, {
    onRequestOpen: h,
    renderPopout: function() {
      return Promise.resolve(e => {
        let {
          closePopout: r
        } = e;
        return null == d ? (0, i.jsx)(i.Fragment, {}) : (o()(null != _, "visibleConnectionsRole is null"), (0, i.jsx)(B, {
          eligibilityStates: d,
          userId: t,
          roleId: _.id,
          channelId: a.id,
          guildId: s.id,
          onGetRolesClicked: () => {
            (0, M.Am)(s.id)
          },
          onOpenProfile: () => {
            (0, N.openUserProfileModal)({
              userId: t,
              messageId: n,
              guildId: s.id,
              channelId: a.id,
              roleId: _.id,
              section: U.oh.USER_INFO_CONNECTIONS,
              sourceAnalyticsLocations: l,
              analyticsLocation: {
                section: y.jXE.CHANNEL
              }
            }), r()
          }
        }))
      })
    },
    align: "top",
    nudgeAlignIntoViewport: !0,
    children: e => (0, i.jsx)(c.Tooltip, {
      text: b.Z.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
      children: t => (0, i.jsxs)("div", {
        className: G.badge,
        ...t,
        ...e,
        children: [(0, i.jsx)(v.Z, {
          className: G.badgeVerifiedIcon,
          size: 16,
          color: _.colorString
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "header-primary",
          className: G.roleName,
          children: _.name
        })]
      })
    })
  })
}