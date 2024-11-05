n(47120), n(789020);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(264229),
    c = n(981631);
let d = new Map(),
    f = new Map(),
    _ = {};
function h(e, t) {
    var n;
    e = null != e ? e : '';
    let r = (0, u.fU)(e),
        i = d.get(e),
        a =
            null != i
                ? {
                      state: c.r2o.RESOLVING,
                      ...i
                  }
                : {
                      state: c.r2o.RESOLVING,
                      code: r.baseCode
                  };
    t(a),
        (d = new Map(d)).set(e, a),
        (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null &&
            (_ = {
                ..._,
                [a.guild.id]: e
            });
}
function p(e) {
    return h(e.code, (t) => {
        t.state = 'banned' in e && e.banned ? c.r2o.BANNED : c.r2o.EXPIRED;
    });
}
class m extends (r = o.ZP.Store) {
    getInvite(e) {
        return d.get(e);
    }
    getInviteError(e) {
        return f.get(e);
    }
    getInvites() {
        return d;
    }
    getInviteKeyForGuildId(e) {
        return _[e];
    }
}
(s = 'InviteStore'),
    (a = 'displayName') in (i = m)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new m(l.Z, {
        INVITE_RESOLVE: function (e) {
            let { code: t } = e,
                n = (0, u.fU)(t);
            (d = new Map(d)).set(t, {
                code: n.baseCode,
                state: c.r2o.RESOLVING
            });
        },
        INVITE_RESOLVE_SUCCESS: function (e) {
            return h(e.code, (t) => {
                var n, r;
                (t.state = c.r2o.RESOLVED), (t.guild = e.invite.guild), (t.channel = e.invite.channel), (t.inviter = e.invite.inviter), (t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null), (t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null), (t.target_type = e.invite.target_type), (t.target_user = e.invite.target_user), (t.target_application = e.invite.target_application), (t.expires_at = e.invite.expires_at), (t.stage_instance = e.invite.stage_instance), (t.friends_count = e.invite.friends_count), (t.is_contact = e.invite.is_contact), (t.guild_scheduled_event = e.invite.guild_scheduled_event), (t.type = e.invite.type), (t.flags = e.invite.flags);
            });
        },
        INVITE_RESOLVE_FAILURE: p,
        INSTANT_INVITE_REVOKE_SUCCESS: p,
        FRIEND_INVITE_CREATE_SUCCESS: function (e) {
            return h(e.invite.code, (t) => {
                (t.state = c.r2o.RESOLVED), (t.inviter = e.invite.inviter);
            });
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
            e.invites.forEach((e) =>
                h(e.code, (e) => {
                    e.state = c.r2o.EXPIRED;
                })
            );
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            return h(e.invite.code, (t) => {
                var n, r;
                (t.state = c.r2o.RESOLVED), (t.guild = e.invite.guild), (t.channel = e.invite.channel), (t.inviter = e.invite.inviter), (t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null), (t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null), (t.target_type = e.invite.target_type), (t.target_user = e.invite.target_user), (t.target_application = e.invite.target_application), (t.stage_instance = e.invite.stage_instance), (t.guild_scheduled_event = e.invite.guild_scheduled_event), (t.type = e.invite.type);
            });
        },
        INVITE_ACCEPT: function (e) {
            return h(e.code, (e) => {
                e.state = c.r2o.ACCEPTING;
            });
        },
        INVITE_ACCEPT_SUCCESS: function (e) {
            return h(e.code, (t) => {
                (t.state = c.r2o.ACCEPTED),
                    (t.guild = e.invite.guild),
                    (t.new_member = e.invite.new_member),
                    (t.channel = {
                        ...t.channel,
                        ...e.invite.channel
                    });
            });
        },
        INVITE_ACCEPT_FAILURE: function (e) {
            return (
                f.set(e.code, e.error),
                h(e.code, (e) => {
                    e.state = c.r2o.ERROR;
                })
            );
        },
        INVITE_APP_OPENING: function (e) {
            return h(e.code, (e) => {
                e.state = c.r2o.APP_OPENING;
            });
        },
        INVITE_APP_OPENED: function (e) {
            return h(e.code, (e) => {
                e.state = c.r2o.APP_OPENED;
            });
        },
        INVITE_APP_NOT_OPENED: function (e) {
            return h(e.code, (e) => {
                e.state = c.r2o.APP_NOT_OPENED;
            });
        }
    }));
