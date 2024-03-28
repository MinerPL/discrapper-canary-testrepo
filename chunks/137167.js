"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  n = a("392711"),
  r = a("442837"),
  i = a("381499"),
  o = a("481060"),
  d = a("367907"),
  u = a("971628"),
  c = a("695346"),
  S = a("675478"),
  f = a("430824"),
  T = a("892880"),
  A = a("226951"),
  m = a("498058"),
  _ = a("158631"),
  g = a("644148"),
  R = a("243980"),
  E = a("995923"),
  h = a("981631"),
  x = a("71080"),
  I = a("689938"),
  v = a("752250");

function D(e) {
  let {
    headerText: t = I.default.Messages.BROADCASTING_SETTINGS,
    buttonCTA: a = I.default.Messages.BROADCAST_SETTINGS_SAVE,
    transitionState: D,
    onClose: M,
    onSave: p
  } = e, C = (0, g.useBroadcastingStoredSelectedTags)(), [N, w] = s.useState(C), [L, y] = s.useState(""), b = c.BroadcastAllowFriends.useSetting(), [U, O] = s.useState(null == b || b), G = c.BroadcastAutoBroadcast.useSetting(), [j, B] = s.useState(G), [F, k] = s.useState(!1), [z, H] = s.useState(!1), P = (0, _.useSelfBroadcast)(), X = (0, m.default)(null == P ? void 0 : P.channelId), W = s.useMemo(() => b !== U || !(0, n.isEqual)(C, N) || G !== j, [b, U, C, N, G, j]), V = null != p, q = s.useMemo(() => U || Object.keys(N[x.RowType.USER]).length > 0 || Object.keys(N[x.RowType.GUILD]).length > 0, [U, N]), Q = !q && null != P || !q && V || !W && !V, Y = s.useMemo(() => "@" === L.trim().charAt(0), [L]), J = (0, r.useStateFromStoresArray)([f.default], () => f.default.getGuildIds()), Z = (0, g.useFilteredGuilds)(J), K = s.useMemo(() => Z.map(e => e.id), [Z]), [$, ee] = (0, g.useBroadcastingPrivacyAudience)(Y, function(e) {
    var t;
    let a = (t = L.trim(), Y ? t.slice(1) : t);
    return RegExp("".concat(A.default.escape(a)), "i").test(e)
  }, U);

  function et() {
    var e;
    null == p || p();
    let [t, a] = en();
    d.default.trackWithMetadata(h.AnalyticEvents.BROADCAST_SETTINGS_UPDATED, {
      auto_broadcast: j,
      broadcast_to_all_friends: U,
      num_allowed_users_in_broadcast: a.length,
      allowed_users: a,
      num_guilds_in_broadcast: t.length,
      guilds: t,
      num_viewers_in_broadcast: X.length,
      current_viewers: null !== (e = X.map(e => e.id)) && void 0 !== e ? e : [],
      started_broadcast: V
    })
  }

  function ea(e) {
    y(e)
  }

  function el(e, t) {
    let a = (0, u.getFullRowId)(t);
    w(l => {
      let s = {
        ...l
      };
      return s[e] = {
        ...s[e]
      }, a in s[e] ? delete s[e][a] : s[e][a] = (0, g.selectedTagFromRowData)(t), s
    })
  }

  function es(e, t) {
    w(a => {
      let l = {
        ...a
      };
      return l[e] = {
        ...l[e]
      }, delete l[e][t], l
    })
  }

  function en() {
    let e = new Set,
      t = new Set;
    Object.values(N[x.RowType.USER]).forEach(e => {
      let {
        row: a
      } = e;
      return t.add(a.id)
    }), Object.values(N[x.RowType.GUILD]).forEach(t => {
      let {
        row: a
      } = t;
      return e.add(a.id)
    });
    let a = (0, g.sanitizeAllowedGuildIds)(Array.from(e));
    return [a, (0, g.sanitizeAllowedUserIds)(Array.from(t))]
  }
  return s.useEffect(() => {
    d.default.trackWithMetadata(h.AnalyticEvents.OPEN_MODAL, {
      type: V ? "Start Broadcast" : "Update Broadcast"
    })
  }, [V]), s.useEffect(() => {
    (0, n.chunk)(K, 100).forEach(e => {
      T.default.requestMembers(e, L.trim())
    })
  }, [K, L]), (0, l.jsxs)(o.ModalRoot, {
    transitionState: D,
    children: [(0, l.jsx)(o.Heading, {
      variant: "heading-xl/semibold",
      className: v.header,
      children: t
    }), (0, l.jsx)(o.ModalCloseButton, {
      onClick: M,
      className: v.close
    }), (0, l.jsxs)(o.ModalContent, {
      className: v.content,
      paddingFix: !1,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: v.description,
        children: I.default.Messages.BROADCASTING_DESCRIPTION
      }), (0, l.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: v.title,
        children: I.default.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
      }), (0, l.jsxs)("div", {
        className: v.switch,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: I.default.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
        }), (0, l.jsx)(o.Switch, {
          checked: U,
          onChange: e => {
            O(e)
          }
        })]
      }), (0, l.jsx)(R.default, {
        selectedTags: N[x.RowType.USER],
        query: L,
        onQueryChange: ea,
        onClickRow: e => el(x.RowType.USER, e),
        onRemoveTag: e => es(x.RowType.USER, e),
        title: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
        hintText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
          count: E.BROADCASTING_MAX_ALLOWED_USER_IDS
        }),
        placeholderText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
        users: $,
        expanded: F,
        setExpanded: e => {
          ea(""), k(e), H(!1)
        },
        maxCount: E.BROADCASTING_MAX_ALLOWED_USER_IDS
      }), (0, l.jsx)(R.default, {
        selectedTags: N[x.RowType.GUILD],
        query: L,
        onQueryChange: ea,
        onClickRow: e => el(x.RowType.GUILD, e),
        onRemoveTag: e => es(x.RowType.GUILD, e),
        title: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
        hintText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
          count: E.BROADCASTING_MAX_ALLOWED_GUILD_IDS
        }),
        placeholderText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
        guilds: ee,
        expanded: z,
        setExpanded: e => {
          ea(""), H(e), k(!1)
        },
        maxCount: E.BROADCASTING_MAX_ALLOWED_GUILD_IDS
      }), (0, l.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: v.title,
        children: I.default.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
      }), (0, l.jsxs)("div", {
        className: v.switch,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: I.default.Messages.AUTO_BROADCAST_TOGGLE
        }), (0, l.jsx)(o.Switch, {
          checked: j,
          onChange: B
        })]
      })]
    }), (0, l.jsx)(o.ModalFooter, {
      children: (0, l.jsx)(o.Button, {
        disabled: Q,
        onClick: function() {
          if (!Q) {
            if (W) {
              let [e, t] = en();
              S.PreloadedUserSettingsActionCreators.updateAsync("broadcast", a => {
                a.allowedGuildIds = e, a.allowedUserIds = t, a.allowFriends = i.BoolValue.create({
                  value: U
                }), a.autoBroadcast = i.BoolValue.create({
                  value: j
                }), et(), M()
              }, S.UserSettingsDelay.INFREQUENT_USER_ACTION);
              return
            }
            et(), M()
          }
        },
        children: a
      })
    })]
  })
}