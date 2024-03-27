"use strict";
a.r(t), a.d(t, {
  selectedTagFromRowData: function() {
    return m
  },
  useFilteredGuilds: function() {
    return D
  },
  useBroadcastingPrivacyAudience: function() {
    return x
  },
  useBroadcastingStoredSelectedTags: function() {
    return N
  },
  sanitizeAllowedGuildIds: function() {
    return L
  },
  sanitizeAllowedUserIds: function() {
    return B
  }
}), a("424973"), a("222007");
var l = a("884691"),
  n = a("627445"),
  r = a.n(n),
  s = a("446674"),
  i = a("137223"),
  d = a("355313"),
  o = a("845579"),
  u = a("271938"),
  c = a("42203"),
  S = a("525065"),
  f = a("26989"),
  A = a("305961"),
  T = a("27618"),
  _ = a("677099"),
  E = a("697218"),
  I = a("299039"),
  g = a("158998"),
  R = a("844153"),
  h = a("606762");

function m(e) {
  let t;
  return e.rowType === h.RowType.USER ? t = {
    type: i.RichTagTypes.USER,
    label: e.name,
    avatar: e.avatarURL
  } : e.rowType === h.RowType.GUILD && (t = {
    type: i.RichTagTypes.GUILD,
    label: e.name,
    guild: e.guild
  }), r(null != t, "RowData must be a guild or a user"), {
    display: t,
    row: e
  }
}

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = (0, s.useStateFromStoresArray)([A.default, S.default], () => {
      let a = [];
      return e.forEach(e => {
        var l;
        let n = A.default.getGuild(e),
          r = null !== (l = S.default.getMemberCount(e)) && void 0 !== l ? l : R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT;
        null != n && r < R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT && (null == t ? void 0 : t(n.name)) && a.push(n)
      }), a
    }, [e, t]);
  return a
}

function v(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = D(e, t),
    n = l.useMemo(() => a.map(e => ({
      rowType: h.RowType.GUILD,
      name: e.name,
      id: e.id,
      disabled: !1,
      guild: e,
      key: "".concat(h.RowType.GUILD, ":").concat(e.id)
    })), [a]);
  return n
}

function C(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return e.filter(e => null != e && (null == t ? void 0 : t(e.username))).map(e => ({
    rowType: h.RowType.USER,
    name: g.default.getUserTag(e),
    id: e.id,
    disabled: a && T.default.isFriend(e.id),
    avatarURL: e.getAvatarURL(null, 24),
    key: "".concat(h.RowType.USER, ":").concat(e.id)
  }))
}

function x(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = arguments.length > 2 ? arguments[2] : void 0,
    n = (0, s.useStateFromStores)([_.default], () => _.default.getFlattenedGuildIds()),
    r = v(n, t),
    i = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0,
        t = arguments.length > 1 ? arguments[1] : void 0,
        a = arguments.length > 2 ? arguments[2] : void 0,
        n = (0, s.useStateFromStoresArray)([T.default], () => T.default.getFriendIDs()),
        r = D(t),
        i = (0, s.useStateFromStores)([u.default], () => u.default.getId()),
        d = (0, s.useStateFromStores)([f.default], () => f.default.getMemberVersion()),
        o = l.useMemo(() => {
          let e = new Set(n);
          return r.forEach(t => {
            let a = f.default.getMemberIds(t.id);
            a.forEach(t => {
              !e.has(t) && !T.default.isBlocked(t) && e.add(t)
            })
          }), e
        }, [r, n, d]),
        S = (0, s.useStateFromStoresArray)([E.default], () => [...o].map(e => E.default.getUser(e)), [o]),
        A = S.filter(e => null != e && !e.bot && e.id !== i).sort((e, t) => {
          let a = c.default.getChannel(c.default.getDMFromUserId(null == e ? void 0 : e.id)),
            l = c.default.getChannel(c.default.getDMFromUserId(null == t ? void 0 : t.id));
          return I.default.compare(null == a ? void 0 : a.lastMessageId, null == l ? void 0 : l.lastMessageId) > 0 ? -1 : 1
        });
      return C(A, e, a)
    }(t, n, a);
  return [i, e ? [] : r]
}

function N() {
  let e = o.BroadcastAllowedGuildIds.useSetting(),
    t = o.BroadcastAllowedUserIds.useSetting(),
    a = {},
    l = {};
  if (v(e).forEach(e => {
      let t = (0, d.getFullRowId)(e);
      a[t] = m(e)
    }), t.length > 0) {
    let e = t.map(e => E.default.getUser(e)).filter(e => null != e);
    C(e).map(e => {
      let t = (0, d.getFullRowId)(e);
      l[t] = m(e)
    })
  }
  return {
    [h.RowType.GUILD]: a,
    [h.RowType.USER]: l
  }
}

function L(e) {
  let t = u.default.getId(),
    a = e;
  return a.length > R.BROADCASTING_MAX_ALLOWED_GUILD_IDS && (a = a.slice(0, R.BROADCASTING_MAX_ALLOWED_GUILD_IDS)), a = a.filter(e => {
    var a;
    return f.default.isMember(e, t) && (null !== (a = S.default.getMemberCount(e)) && void 0 !== a ? a : R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT) < R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT
  })
}

function B(e) {
  let t = e;
  return t.length > R.BROADCASTING_MAX_ALLOWED_USER_IDS && (t = t.slice(0, R.BROADCASTING_MAX_ALLOWED_USER_IDS)), t
}