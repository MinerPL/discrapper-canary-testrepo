"use strict";
t.r(l), t("47120"), t("536091");
var a = t("735250"),
  i = t("470079"),
  n = t("803997"),
  r = t.n(n),
  s = t("442837"),
  o = t("780384"),
  d = t("481060"),
  u = t("239091"),
  c = t("749210"),
  f = t("410030"),
  m = t("726542"),
  v = t("367907"),
  h = t("598077"),
  p = t("314897"),
  x = t("271383"),
  N = t("430824"),
  g = t("153124"),
  C = t("507957"),
  j = t("602623"),
  _ = t("626135"),
  R = t("63063"),
  E = t("134433"),
  S = t("225104"),
  L = t("981631"),
  O = t("689938"),
  A = t("166136"),
  I = t("943643");
l.default = function(e) {
  let {
    guildId: l,
    transitionState: n,
    onClose: b
  } = e, k = (0, s.useStateFromStores)([N.default], () => N.default.getRoles(l)), y = (0, s.useStateFromStores)([p.default], () => p.default.getId()), M = (0, s.useStateFromStores)([x.default], () => x.default.getMember(l, y)), [T, H] = i.useState([]), U = (0, f.default)(), w = (0, g.useUID)();
  if (i.useEffect(() => {
      0 !== T.length && _.default.track(L.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
        role_ids: T.map(e => {
          let {
            role_id: l
          } = e;
          return l
        }),
        ...(0, v.collectGuildAnalyticsMetadata)(l)
      })
    }, [l, T]), i.useEffect(() => {
      c.default.getGuildRoleConnectionsConfigurations(l).then(e => H(e))
    }, [l]), null == M) return null;
  let D = Object.values(k).filter(e => {
    var l;
    return (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null
  });
  return (0, a.jsxs)(d.ModalRoot, {
    transitionState: n,
    "aria-labelledby": w,
    className: A.modal,
    children: [(0, a.jsxs)(d.ModalHeader, {
      separator: !1,
      children: [(0, a.jsx)(E.default, {
        className: A.headerIcon,
        size: 24
      }), (0, a.jsx)(d.Heading, {
        variant: "text-md/medium",
        color: "header-primary",
        children: O.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
      }), (0, a.jsx)(d.ModalCloseButton, {
        className: A.modalCloseButton,
        onClick: b
      })]
    }), (0, a.jsxs)(d.ModalContent, {
      className: A.container,
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: O.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
          helpdeskArticleUrl: R.default.getArticleURL(L.HelpdeskArticles.CONNECTION_DETAILS)
        })
      }), (0, a.jsx)("div", {
        className: A.verifiedRoles,
        children: D.map(e => {
          let n = M.roles.includes(e.id),
            s = function(e) {
              let t = T.find(l => {
                let {
                  role_id: t
                } = l;
                return t === e
              });
              if (null == t) return [];
              let i = {};
              for (let e of t.rules.flat()) {
                let s;
                if (null != e.application_id) {
                  var n;
                  let i = null === (n = t.applications) || void 0 === n ? void 0 : n[e.application_id];
                  s = (null == i ? void 0 : i.bot) != null ? (0, a.jsx)("img", {
                    src: new h.default(i.bot).getAvatarURL(l, 24),
                    alt: "",
                    className: r()(A.botAvatar, I.avatar)
                  }) : null
                } else {
                  let l = m.default.get(e.connection_type);
                  s = (0, a.jsx)("img", {
                    src: (0, o.isThemeLight)(U) ? l.icon.lightSVG : l.icon.darkSVG,
                    alt: "",
                    className: I.avatar
                  })
                }
                null != s && (i["".concat(e.connection_type, ":").concat(e.application_id)] = s)
              }
              return Object.values(i)
            }(e.id);
          return (0, a.jsxs)(d.Clickable, {
            className: r()(A.verifiedRole, n ? A.verifiedRoleHasRole : null),
            onClick: n ? void 0 : () => {
              var i, n;
              return i = e, n = l, void(0, d.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([t.e("99387"), t.e("38413")]).then(t.bind(t, "107807"));
                return l => (0, a.jsx)(e, {
                  role: i,
                  guildId: n,
                  ...l
                })
              })
            },
            onContextMenu: n ? i => {
              var n, r, s;
              return n = l, r = e.id, s = i, void(0, u.openContextMenuLazy)(s, async () => {
                let {
                  default: e
                } = await t.e("60079").then(t.bind(t, "850902"));
                return l => (0, a.jsx)(e, {
                  ...l,
                  roleId: r,
                  onLeaveRole: () => c.default.unassignGuildRoleConnection(n, r)
                })
              })
            } : void 0,
            children: [n ? (0, a.jsx)("div", {
              className: A.roleCheckmark,
              children: (0, a.jsx)(C.default, {})
            }) : null, (0, a.jsx)(S.default, {
              guildId: l,
              role: e,
              size: 24
            }), (0, a.jsxs)("div", {
              className: A.verifiedRoleNameDescriptionContainer,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: A.verifiedRoleName,
                children: e.name
              }), void 0 !== e.description ? (0, a.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: A.verifiedRoleDescription,
                children: e.description
              }) : null]
            }), (0, a.jsx)(j.default, {
              showUserPopout: !1,
              guildId: l,
              users: s.map(() => null),
              renderUser: (e, l, t) => (0, a.jsx)(i.Fragment, {
                children: s[t]
              }, t),
              max: 3
            })]
          }, e.id)
        })
      })]
    })]
  })
}