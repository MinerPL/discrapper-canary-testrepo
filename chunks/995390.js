"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
}), l("653041"), l("47120");
var n = l("470079"),
  a = l("512722"),
  s = l.n(a),
  i = l("392711"),
  r = l.n(i),
  o = l("442837"),
  d = l("139387"),
  u = l("895924"),
  c = l("581364"),
  f = l("592125"),
  m = l("430824"),
  I = l("496675"),
  T = l("594174"),
  N = l("823379"),
  E = l("905753"),
  S = l("399860"),
  g = l("981631");

function h(e, t, l) {
  let a = (0, o.useStateFromStores)([E.default], () => E.default.getApplicationPermissions()),
    i = n.useMemo(() => (function(e, t) {
      let l = {
          ...t
        },
        n = (0, c.allChannelsSentinel)(e),
        a = (0, S.toPermissionKey)(n, u.ApplicationCommandPermissionType.CHANNEL),
        s = (0, S.toPermissionKey)(e, u.ApplicationCommandPermissionType.ROLE);
      return !(s in l) && (l[s] = {
        id: e,
        permission: !0,
        type: u.ApplicationCommandPermissionType.ROLE
      }), !(a in l) && (l[a] = {
        id: n,
        permission: !0,
        type: u.ApplicationCommandPermissionType.CHANNEL
      }), l
    })(e, null != a ? a : {}), [a, e]),
    h = (0, o.useStateFromStores)([E.default], () => {
      var e;
      if (null == l) return;
      let t = E.default.getCommand(l);
      return null !== (e = null == t ? void 0 : t.permissions) && void 0 !== e ? e : {}
    }, [l]),
    p = (0, o.useStateFromStores)([E.default], () => {
      var e;
      return null == l ? E.default.getEditedApplication() : null === (e = E.default.getEditedCommand()) || void 0 === e ? void 0 : e.permissions
    }, [l]),
    _ = null != l ? l : t,
    O = null != l ? h : i,
    A = n.useMemo(() => null != p ? p : {
      ...null != O ? O : {}
    }, [p, O]),
    C = n.useMemo(() => Object.keys(A).length, [A]),
    x = n.useMemo(() => null == O || null == A ? null : !r().isEqual(O, A), [O, A]);
  return n.useEffect(() => {
    _ === t && (x ? d.default.startEditingCommandPermissions(_) : d.default.stopEditingCommandPermissions(_))
  }, [t, x, _]), {
    originalApplicationPermissions: i,
    originalCommandPermissions: h,
    editedTargetPermissions: function(e, t) {
      let l = (0, o.useStateFromStores)([m.default], () => m.default.getGuild(e), [e]);
      s()(null != l, "guild must be present to be editing its integration settings");
      let a = (0, o.useStateFromStores)([I.default], () => I.default.getHighestRole(l), [l]),
        i = (0, o.useStateFromStores)([T.default], () => {
          var e;
          return null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
        });
      s()(null != i, "useComputePermissions: currentUserId must not be null");
      let r = i === l.ownerId,
        {
          channelIds: d,
          roleIds: E,
          userIds: S
        } = n.useMemo(() => {
          let e = [],
            l = [],
            n = [];
          for (let a of Object.values(t)) a.type === u.ApplicationCommandPermissionType.CHANNEL ? e.push(a.id) : a.type === u.ApplicationCommandPermissionType.ROLE ? l.push(a.id) : a.type === u.ApplicationCommandPermissionType.USER && n.push(a.id);
          return {
            channelIds: e,
            roleIds: l,
            userIds: n
          }
        }, [t]),
        h = (0, o.useStateFromStoresObject)([f.default], () => Object.fromEntries(d.map(f.default.getChannel).filter(N.isNotNullish).map(e => [e.id, e])), [d]),
        p = (0, o.useStateFromStoresObject)([m.default], () => Object.fromEntries(E.map(t => m.default.getRole(e, t)).filter(N.isNotNullish).map(e => [e.id, e])), [E, e]),
        _ = (0, o.useStateFromStoresObject)([T.default], () => Object.fromEntries(S.map(T.default.getUser).filter(N.isNotNullish).map(e => [e.id, e])), [S]);
      return n.useMemo(() => {
        let e = l.id,
          n = (0, c.allChannelsSentinel)(l.id),
          s = {};
        for (let [i, o] of Object.entries(t)) {
          let t = !1,
            d = !1;
          if (o.type === u.ApplicationCommandPermissionType.CHANNEL) {
            let e = o.id === n,
              l = h[o.id];
            t = e || I.default.can(g.Permissions.VIEW_CHANNEL, l), d = !0
          } else if (o.type === u.ApplicationCommandPermissionType.ROLE) {
            let n = o.id === e,
              s = p[o.id];
            t = n || null != s, d = r || n || I.default.isRoleHigher(l, a, s)
          } else if (o.type === u.ApplicationCommandPermissionType.USER) {
            let e = _[o.id];
            t = null != e, d = null != e && (r || I.default.canManageUser(g.Permissions.USE_APPLICATION_COMMANDS, e, l))
          }
          s[i] = {
            ...o,
            canRead: t,
            canWrite: d
          }
        }
        return s
      }, [h, l, a, r, t, p, _])
    }(e, A),
    hasChanges: x,
    selectedPermissionCount: C
  }
}