"use strict";
let l;
n.r(t), n("47120"), n("653041");
var a, s, i, r, o = n("442837"),
  u = n("570140"),
  d = n("413605"),
  c = n("703656"),
  f = n("131704"),
  h = n("601964"),
  C = n("592125"),
  p = n("430824"),
  m = n("701190"),
  g = n("496675"),
  E = n("594174"),
  S = n("998502"),
  _ = n("981631"),
  I = n("176505");
let N = _.AppContext.APP,
  T = !1,
  A = !1,
  L = [];

function v() {
  T = !0
}
class x extends(a = o.default.Store) {
  initialize() {
    this.waitFor(p.default, m.default, E.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? _.AppContext.OVERLAY : _.AppContext.APP;
    return !!(T && L.length > 0 && N === e)
  }
  getProps() {
    return {
      invite: L.length > 0 ? L[0][0] : null,
      error: null != l && "" !== l ? l : null,
      submitting: A
    }
  }
}
r = "InviteModalStore", (i = "displayName") in(s = x) ? Object.defineProperty(s, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = r, t.default = new x(u.default, {
  OVERLAY_INITIALIZE: v,
  CONNECTION_OPEN: v,
  CONNECTION_CLOSED: function() {
    T = !1
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) return !1;
    if (!(t.state === _.InviteStates.EXPIRED || t.state === _.InviteStates.BANNED || t.state === _.InviteStates.ERROR)) {
      let {
        channel: e,
        guild: n
      } = t;
      if (null == e) return !1;
      if ((0, f.isMultiUserDM)(e.type)) {
        if (null != C.default.getChannel(e.id)) return (0, c.transitionToGuild)(_.ME, e.id), S.default.focus(), !1
      } else {
        if (null == n) return !1;
        if (null != p.default.getGuild(n.id) && !(0, d.isStreamInvite)(t)) {
          let e = function(e) {
            if ((0, d.isRoleSubscriptionInvite)(e)) return I.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = C.default.getChannel(t.id);
              if (g.default.can(_.Permissions.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, c.transitionToGuild)(n.id, e), S.default.focus(), !1
        }
      }
    }
    if (L.some(e => {
        let [n] = e;
        return n.code === t.code
      })) return !1;
    N = e.context, A = !1;
    let n = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: l,
        state: a,
        target_type: s,
        target_user: i,
        target_application: r,
        stage_instance: o,
        type: u,
        channel: d,
        guild: c
      } = e, f = {
        code: l,
        state: a,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: s,
        target_user: i,
        target_application: r,
        stage_instance: o,
        type: u
      };
      return null != d && (f.channel = {
        ...d
      }), null != c && (f.guild = new h.default(c)), null != e.inviter && (f.inviter = {
        ...e.inviter
      }), f
    }(t);
    L.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (l = null, A = !1, L.length > 0) {
      let [, e] = L.shift();
      null != e && e()
    }
  },
  INVITE_ACCEPT: function() {
    A = !0
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    l = t, A = !1
  }
})