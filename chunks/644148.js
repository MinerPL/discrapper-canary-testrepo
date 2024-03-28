"use strict";
a.r(t), a.d(t, {
  sanitizeAllowedGuildIds: function() {
    return C
  },
  sanitizeAllowedUserIds: function() {
    return N
  },
  selectedTagFromRowData: function() {
    return x
  },
  useBroadcastingPrivacyAudience: function() {
    return M
  },
  useBroadcastingStoredSelectedTags: function() {
    return p
  },
  useFilteredGuilds: function() {
    return I
  }
}), a("653041"), a("47120");
var l = a("470079"),
  s = a("512722"),
  n = a.n(s),
  r = a("442837"),
  i = a("461745"),
  o = a("971628"),
  d = a("695346"),
  u = a("314897"),
  c = a("592125"),
  S = a("650774"),
  f = a("271383"),
  T = a("430824"),
  A = a("699516"),
  m = a("771845"),
  _ = a("594174"),
  g = a("709054"),
  R = a("51144"),
  E = a("995923"),
  h = a("71080");

function x(e) {
  let t;
  return e.rowType === h.RowType.USER ? t = {
    type: i.RichTagTypes.USER,
    label: e.name,
    avatar: e.avatarURL
  } : e.rowType === h.RowType.GUILD && (t = {
    type: i.RichTagTypes.GUILD,
    label: e.name,
    guild: e.guild
  }), n()(null != t, "RowData must be a guild or a user"), {
    display: t,
    row: e
  }
}

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0;
  return (0, r.useStateFromStoresArray)([T.default, S.default], () => {
    let a = [];
    return e.forEach(e => {
      var l;
      let s = T.default.getGuild(e),
        n = null !== (l = S.default.getMemberCount(e)) && void 0 !== l ? l : E.BROADCASTING_GUILDS_MAX_MEMBER_COUNT;
      null != s && n < E.BROADCASTING_GUILDS_MAX_MEMBER_COUNT && (null == t ? void 0 : t(s.name)) && a.push(s)
    }), a
  }, [e, t])
}

function v(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = I(e, t);
  return l.useMemo(() => a.map(e => ({
    rowType: h.RowType.GUILD,
    name: e.name,
    id: e.id,
    disabled: !1,
    guild: e,
    key: "".concat(h.RowType.GUILD, ":").concat(e.id)
  })), [a])
}

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return e.filter(e => null != e && (null == t ? void 0 : t(e.username))).map(e => ({
    rowType: h.RowType.USER,
    name: R.default.getUserTag(e),
    id: e.id,
    disabled: a && A.default.isFriend(e.id),
    avatarURL: e.getAvatarURL(null, 24),
    key: "".concat(h.RowType.USER, ":").concat(e.id)
  }))
}

function M(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = arguments.length > 2 ? arguments[2] : void 0,
    s = (0, r.useStateFromStores)([m.default], () => m.default.getFlattenedGuildIds()),
    n = v(s, t),
    i = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0,
        t = arguments.length > 1 ? arguments[1] : void 0,
        a = arguments.length > 2 ? arguments[2] : void 0,
        s = (0, r.useStateFromStoresArray)([A.default], () => A.default.getFriendIDs()),
        n = I(t),
        i = (0, r.useStateFromStores)([u.default], () => u.default.getId()),
        o = (0, r.useStateFromStores)([f.default], () => f.default.getMemberVersion()),
        d = l.useMemo(() => {
          let e = new Set(s);
          return n.forEach(t => {
            f.default.getMemberIds(t.id).forEach(t => {
              !e.has(t) && !A.default.isBlocked(t) && e.add(t)
            })
          }), e
        }, [n, s, o]);
      return D((0, r.useStateFromStoresArray)([_.default], () => [...d].map(e => _.default.getUser(e)), [d]).filter(e => null != e && !e.bot && e.id !== i).sort((e, t) => {
        let a = c.default.getChannel(c.default.getDMFromUserId(null == e ? void 0 : e.id)),
          l = c.default.getChannel(c.default.getDMFromUserId(null == t ? void 0 : t.id));
        return g.default.compare(null == a ? void 0 : a.lastMessageId, null == l ? void 0 : l.lastMessageId) > 0 ? -1 : 1
      }), e, a)
    }(t, s, a);
  return [i, e ? [] : n]
}

function p() {
  let e = d.BroadcastAllowedGuildIds.useSetting(),
    t = d.BroadcastAllowedUserIds.useSetting(),
    a = {},
    l = {};
  return v(e).forEach(e => {
    a[(0, o.getFullRowId)(e)] = x(e)
  }), t.length > 0 && D(t.map(e => _.default.getUser(e)).filter(e => null != e)).map(e => {
    l[(0, o.getFullRowId)(e)] = x(e)
  }), {
    [h.RowType.GUILD]: a,
    [h.RowType.USER]: l
  }
}

function C(e) {
  let t = u.default.getId(),
    a = e;
  return a.length > E.BROADCASTING_MAX_ALLOWED_GUILD_IDS && (a = a.slice(0, E.BROADCASTING_MAX_ALLOWED_GUILD_IDS)), a = a.filter(e => {
    var a;
    return f.default.isMember(e, t) && (null !== (a = S.default.getMemberCount(e)) && void 0 !== a ? a : E.BROADCASTING_GUILDS_MAX_MEMBER_COUNT) < E.BROADCASTING_GUILDS_MAX_MEMBER_COUNT
  })
}

function N(e) {
  let t = e;
  return t.length > E.BROADCASTING_MAX_ALLOWED_USER_IDS && (t = t.slice(0, E.BROADCASTING_MAX_ALLOWED_USER_IDS)), t
}