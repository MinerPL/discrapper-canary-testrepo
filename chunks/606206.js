"use strict";
let s;
l.r(t), l("47120"), l("653041"), l("411104");
var n, a, r, u, o = l("442837"),
  i = l("570140"),
  c = l("278323"),
  d = l("212819"),
  p = l("933557"),
  m = l("592125"),
  A = l("430824"),
  T = l("293273"),
  h = l("158776"),
  f = l("699516"),
  E = l("594174"),
  I = l("55589"),
  C = l("981631");
let N = [d.AutocompleterResultTypes.TEXT_CHANNEL, d.AutocompleterResultTypes.GROUP_DM, d.AutocompleterResultTypes.USER],
  _ = null,
  y = null,
  v = [],
  R = [];

function g(e) {
  v = [...v, e], R = R.map(e => ({
    ...e,
    sent: v.includes(e.data.record.id)
  })), O.emitChange()
}

function L() {
  _ = null, null != s && (s.destroy(), s = null), null != y && y()
}

function S() {
  let e = null != _ && null != _.application_id ? T.default.getApplicationActivity(_.application_id) : null;
  if (null != _ && (null == e || null == e.party || null == e.party.id)) return L()
}
class M extends(n = o.default.Store) {
  initialize() {
    this.waitFor(T.default)
  }
  getActivity() {
    return _
  }
  getQuery() {
    var e;
    return null !== (e = null == s ? void 0 : s.query) && void 0 !== e ? e : ""
  }
  getResults() {
    return R
  }
}
u = "ActivityInviteModalStore", (r = "displayName") in(a = M) ? Object.defineProperty(a, r, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[r] = u;
let O = new M(i.default, {
  ACTIVITY_INVITE_MODAL_OPEN: function(e) {
    _ = e.activity, y = e.resolve, v = [], null == s && (s = new d.default((e, t) => {
      var l;
      return l = e, void(R = ("" === t.trim() ? function() {
        let e = [];
        return I.default.getPrivateChannelIds().forEach(t => {
          let l = m.default.getChannel(t);
          if (null != l) {
            if (l.type === C.ChannelTypes.DM) {
              let t = l.getRecipientId(),
                s = null != t ? E.default.getUser(t) : null;
              null != s && e.push({
                type: d.AutocompleterResultTypes.USER,
                record: s,
                score: 0
              })
            } else l.isMultiUserDM() && e.push({
              type: d.AutocompleterResultTypes.GROUP_DM,
              record: l,
              score: 0
            })
          }
        }), e
      }() : l).map(e => {
        switch (e.type) {
          case d.AutocompleterResultTypes.USER: {
            let {
              record: t
            } = e;
            return {
              type: d.AutocompleterResultTypes.USER,
              sent: v.includes(t.id),
              status: h.default.getStatus(t.id),
              data: e
            }
          }
          case d.AutocompleterResultTypes.TEXT_CHANNEL: {
            let {
              record: t
            } = e, l = m.default.getChannel(t.parent_id), s = A.default.getGuild(t.guild_id);
            return {
              type: d.AutocompleterResultTypes.TEXT_CHANNEL,
              sent: v.includes(t.id),
              categoryName: null != l ? (0, p.computeChannelName)(l, E.default, f.default) : "",
              guildName: null != s ? s.toString() : "",
              data: e
            }
          }
          case d.AutocompleterResultTypes.GROUP_DM: {
            let {
              record: t
            } = e;
            return {
              type: d.AutocompleterResultTypes.GROUP_DM,
              sent: v.includes(t.id),
              data: e
            }
          }
          default:
            throw Error("Unknown Result Type: ".concat(e.type))
        }
      }), O.emitChange())
    }, N, 100)), s.search("")
  },
  ACTIVITY_INVITE_MODAL_QUERY: function(e) {
    let {
      query: t
    } = e;
    null != s && s.search(t)
  },
  ACTIVITY_INVITE_MODAL_SEND: function(e) {
    if (null == _) return;
    let t = e.channelId,
      l = e.userId;
    null != t ? c.default.sendActivityInvite({
      channelId: t,
      type: C.ActivityActionTypes.JOIN,
      activity: _,
      location: "Channel Text Area - Invite to Join Modal"
    }).then(() => g(t)) : null != l && c.default.sendActivityInviteUser({
      userId: l,
      type: C.ActivityActionTypes.JOIN,
      activity: _,
      location: "Channel Text Area - Invite to Join Modal"
    }).then(() => g(l))
  },
  ACTIVITY_INVITE_MODAL_CLOSE: L,
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    return !!t && null != _ && (L(), !0)
  },
  LOCAL_ACTIVITY_UPDATE: S,
  RPC_APP_DISCONNECTED: S
});
t.default = O