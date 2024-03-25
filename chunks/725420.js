"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  r = a("917351"),
  s = a("446674"),
  i = a("750028"),
  d = a("77078"),
  o = a("716241"),
  u = a("355313"),
  c = a("845579"),
  S = a("872173"),
  f = a("305961"),
  A = a("651879"),
  T = a("655518"),
  _ = a("882278"),
  E = a("754493"),
  I = a("5920"),
  g = a("835236"),
  R = a("844153"),
  h = a("49111"),
  m = a("606762"),
  D = a("782340"),
  v = a("557257");

function C(e) {
  let {
    headerText: t = D.default.Messages.BROADCASTING_SETTINGS,
    buttonCTA: a = D.default.Messages.BROADCAST_SETTINGS_SAVE,
    transitionState: C,
    onClose: x,
    onSave: N
  } = e, L = (0, I.useBroadcastingStoredSelectedTags)(), [B, w] = n.useState(L), [M, p] = n.useState(""), O = c.BroadcastAllowFriends.useSetting(), [y, U] = n.useState(null == O || O), b = c.BroadcastAutoBroadcast.useSetting(), [G, j] = n.useState(b), [F, k] = n.useState(!1), [P, H] = n.useState(!1), V = (0, E.useSelfBroadcast)(), Y = (0, _.default)(null == V ? void 0 : V.channelId), z = n.useMemo(() => O !== y || !(0, r.isEqual)(L, B) || b !== G, [O, y, L, B, b, G]), W = null != N, X = n.useMemo(() => y || Object.keys(B[m.RowType.USER]).length > 0 || Object.keys(B[m.RowType.GUILD]).length > 0, [y, B]), q = !X && null != V || !X && W || !z && !W, Q = n.useMemo(() => "@" === M.trim().charAt(0), [M]), J = (0, s.useStateFromStoresArray)([f.default], () => f.default.getGuildIds()), K = (0, I.useFilteredGuilds)(J), Z = n.useMemo(() => K.map(e => e.id), [K]), [$, ee] = (0, I.useBroadcastingPrivacyAudience)(Q, function(e) {
    var t;
    let a = (t = M.trim(), Q ? t.slice(1) : t),
      l = RegExp("".concat(T.default.escape(a)), "i");
    return l.test(e)
  }, y);

  function et() {
    var e;
    null == N || N();
    let [t, a] = er();
    o.default.trackWithMetadata(h.AnalyticEvents.BROADCAST_SETTINGS_UPDATED, {
      auto_broadcast: G,
      broadcast_to_all_friends: y,
      num_allowed_users_in_broadcast: a.length,
      allowed_users: a,
      num_guilds_in_broadcast: t.length,
      guilds: t,
      num_viewers_in_broadcast: Y.length,
      current_viewers: null !== (e = Y.map(e => e.id)) && void 0 !== e ? e : [],
      started_broadcast: W
    })
  }

  function ea(e) {
    p(e)
  }

  function el(e, t) {
    let a = (0, u.getFullRowId)(t);
    w(l => {
      let n = {
        ...l
      };
      return n[e] = {
        ...n[e]
      }, a in n[e] ? delete n[e][a] : n[e][a] = (0, I.selectedTagFromRowData)(t), n
    })
  }

  function en(e, t) {
    w(a => {
      let l = {
        ...a
      };
      return l[e] = {
        ...l[e]
      }, delete l[e][t], l
    })
  }

  function er() {
    let e = new Set,
      t = new Set;
    Object.values(B[m.RowType.USER]).forEach(e => {
      let {
        row: a
      } = e;
      return t.add(a.id)
    }), Object.values(B[m.RowType.GUILD]).forEach(t => {
      let {
        row: a
      } = t;
      return e.add(a.id)
    });
    let a = (0, I.sanitizeAllowedGuildIds)(Array.from(e)),
      l = (0, I.sanitizeAllowedUserIds)(Array.from(t));
    return [a, l]
  }
  return n.useEffect(() => {
    o.default.trackWithMetadata(h.AnalyticEvents.OPEN_MODAL, {
      type: W ? "Start Broadcast" : "Update Broadcast"
    })
  }, [W]), n.useEffect(() => {
    let e = (0, r.chunk)(Z, 100);
    e.forEach(e => {
      A.default.requestMembers(e, M.trim())
    })
  }, [Z, M]), (0, l.jsxs)(d.ModalRoot, {
    transitionState: C,
    children: [(0, l.jsx)(d.Heading, {
      variant: "heading-xl/semibold",
      className: v.header,
      children: t
    }), (0, l.jsx)(d.ModalCloseButton, {
      onClick: x,
      className: v.close
    }), (0, l.jsxs)(d.ModalContent, {
      className: v.content,
      paddingFix: !1,
      children: [(0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: v.description,
        children: D.default.Messages.BROADCASTING_DESCRIPTION
      }), (0, l.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H5,
        className: v.title,
        children: D.default.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
      }), (0, l.jsxs)("div", {
        className: v.switch,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: D.default.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
        }), (0, l.jsx)(d.Switch, {
          checked: y,
          onChange: e => {
            U(e)
          }
        })]
      }), (0, l.jsx)(g.default, {
        selectedTags: B[m.RowType.USER],
        query: M,
        onQueryChange: ea,
        onClickRow: e => el(m.RowType.USER, e),
        onRemoveTag: e => en(m.RowType.USER, e),
        title: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
        hintText: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
          count: R.BROADCASTING_MAX_ALLOWED_USER_IDS
        }),
        placeholderText: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
        users: $,
        expanded: F,
        setExpanded: e => {
          ea(""), k(e), H(!1)
        },
        maxCount: R.BROADCASTING_MAX_ALLOWED_USER_IDS
      }), (0, l.jsx)(g.default, {
        selectedTags: B[m.RowType.GUILD],
        query: M,
        onQueryChange: ea,
        onClickRow: e => el(m.RowType.GUILD, e),
        onRemoveTag: e => en(m.RowType.GUILD, e),
        title: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
        hintText: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
          count: R.BROADCASTING_MAX_ALLOWED_GUILD_IDS
        }),
        placeholderText: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
        guilds: ee,
        expanded: P,
        setExpanded: e => {
          ea(""), H(e), k(!1)
        },
        maxCount: R.BROADCASTING_MAX_ALLOWED_GUILD_IDS
      }), (0, l.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H5,
        className: v.title,
        children: D.default.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
      }), (0, l.jsxs)("div", {
        className: v.switch,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: D.default.Messages.AUTO_BROADCAST_TOGGLE
        }), (0, l.jsx)(d.Switch, {
          checked: G,
          onChange: j
        })]
      })]
    }), (0, l.jsx)(d.ModalFooter, {
      children: (0, l.jsx)(d.Button, {
        disabled: q,
        onClick: function() {
          if (!q) {
            if (z) {
              let [e, t] = er();
              S.PreloadedUserSettingsActionCreators.updateAsync("broadcast", a => {
                a.allowedGuildIds = e, a.allowedUserIds = t, a.allowFriends = i.BoolValue.create({
                  value: y
                }), a.autoBroadcast = i.BoolValue.create({
                  value: G
                }), et(), x()
              }, S.UserSettingsDelay.INFREQUENT_USER_ACTION);
              return
            }
            et(), x()
          }
        },
        children: a
      })
    })]
  })
}