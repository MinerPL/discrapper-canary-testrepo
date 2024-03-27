"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007"), n("834022");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  l = n.n(s),
  a = n("446674"),
  o = n("819855"),
  u = n("77078"),
  c = n("272030"),
  d = n("851387"),
  f = n("841098"),
  h = n("376556"),
  E = n("716241"),
  v = n("766274"),
  m = n("271938"),
  p = n("26989"),
  S = n("305961"),
  C = n("476765"),
  _ = n("486952"),
  N = n("811305"),
  T = n("599110"),
  A = n("701909"),
  g = n("339023"),
  I = n("602658"),
  R = n("49111"),
  y = n("782340"),
  x = n("431480"),
  b = n("856614"),
  P = function(e) {
    let {
      guildId: t,
      transitionState: s,
      onClose: P
    } = e, L = (0, a.useStateFromStores)([S.default], () => S.default.getRoles(t)), M = (0, a.useStateFromStores)([m.default], () => m.default.getId()), O = (0, a.useStateFromStores)([p.default], () => p.default.getMember(t, M)), [j, V] = r.useState([]), D = (0, f.default)(), w = (0, C.useUID)();
    if (r.useEffect(() => {
        0 !== j.length && T.default.track(R.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
          role_ids: j.map(e => {
            let {
              role_id: t
            } = e;
            return t
          }),
          ...(0, E.collectGuildAnalyticsMetadata)(t)
        })
      }, [t, j]), r.useEffect(() => {
        d.default.getGuildRoleConnectionsConfigurations(t).then(e => V(e))
      }, [t]), null == O) return null;
    let U = Object.values(L).filter(e => {
      var t;
      return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
    });
    return (0, i.jsxs)(u.ModalRoot, {
      transitionState: s,
      "aria-labelledby": w,
      className: x.modal,
      children: [(0, i.jsxs)(u.ModalHeader, {
        separator: !1,
        children: [(0, i.jsx)(g.default, {
          className: x.headerIcon,
          size: 24
        }), (0, i.jsx)(u.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          children: y.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
        }), (0, i.jsx)(u.ModalCloseButton, {
          className: x.modalCloseButton,
          onClick: P
        })]
      }), (0, i.jsxs)(u.ModalContent, {
        className: x.container,
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: y.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
            helpdeskArticleUrl: A.default.getArticleURL(R.HelpdeskArticles.CONNECTION_DETAILS)
          })
        }), (0, i.jsx)("div", {
          className: x.verifiedRoles,
          children: U.map(e => {
            let s = O.roles.includes(e.id),
              a = function(e) {
                let n = j.find(t => {
                  let {
                    role_id: n
                  } = t;
                  return n === e
                });
                if (null == n) return [];
                let r = {};
                for (let e of n.rules.flat()) {
                  let a;
                  if (null != e.application_id) {
                    var s;
                    let r = null === (s = n.applications) || void 0 === s ? void 0 : s[e.application_id];
                    a = (null == r ? void 0 : r.bot) != null ? (0, i.jsx)("img", {
                      src: new(0, v.default)(r.bot).getAvatarURL(t, 24),
                      alt: "",
                      className: l(x.botAvatar, b.avatar)
                    }) : null
                  } else {
                    let t = h.default.get(e.connection_type);
                    a = (0, i.jsx)("img", {
                      src: (0, o.isThemeLight)(D) ? t.icon.lightSVG : t.icon.darkSVG,
                      alt: "",
                      className: b.avatar
                    })
                  }
                  null != a && (r["".concat(e.connection_type, ":").concat(e.application_id)] = a)
                }
                return Object.values(r)
              }(e.id);
            return (0, i.jsxs)(u.Clickable, {
              className: l(x.verifiedRole, s ? x.verifiedRoleHasRole : null),
              onClick: s ? void 0 : () => {
                var r, s;
                return r = e, s = t, void(0, u.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await n.el("572579").then(n.bind(n, "572579"));
                  return t => (0, i.jsx)(e, {
                    role: r,
                    guildId: s,
                    ...t
                  })
                })
              },
              onContextMenu: s ? r => {
                var s, l, a;
                return s = t, l = e.id, a = r, void(0, c.openContextMenuLazy)(a, async () => {
                  let {
                    default: e
                  } = await n.el("232006").then(n.bind(n, "232006"));
                  return t => (0, i.jsx)(e, {
                    ...t,
                    roleId: l,
                    onLeaveRole: () => d.default.unassignGuildRoleConnection(s, l)
                  })
                })
              } : void 0,
              children: [s ? (0, i.jsx)("div", {
                className: x.roleCheckmark,
                children: (0, i.jsx)(_.default, {})
              }) : null, (0, i.jsx)(I.default, {
                guildId: t,
                role: e,
                size: 24
              }), (0, i.jsxs)("div", {
                className: x.verifiedRoleNameDescriptionContainer,
                children: [(0, i.jsx)(u.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  className: x.verifiedRoleName,
                  children: e.name
                }), void 0 !== e.description ? (0, i.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  className: x.verifiedRoleDescription,
                  children: e.description
                }) : null]
              }), (0, i.jsx)(N.default, {
                showUserPopout: !1,
                guildId: t,
                users: a.map(() => null),
                renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, {
                  children: a[n]
                }, n),
                max: 3
              })]
            }, e.id)
          })
        })]
      })]
    })
  }