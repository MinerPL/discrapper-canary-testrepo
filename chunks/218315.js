"use strict";
n(47120), n(789020);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(147913),
  o = n(160404),
  a = n(314897),
  l = n(592125),
  u = n(271383),
  _ = n(914010),
  d = n(630388),
  c = n(526120),
  E = n(563534),
  I = n(734893),
  T = n(846121),
  h = n(931261),
  S = n(460347),
  f = n(372897);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class A extends s.Z {
  constructor(...e) {
    super(...e), N(this, "onboardingCompleteGuilds", new Set), N(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      MESSAGE_CREATE: e => this.handleMessageSend(e),
      THREAD_CREATE: e => this.handleThreadCreate(e)
    }), N(this, "handlePostConnectionOpen", () => {
      let e = _.Z.getGuildId();
      null != e && this._getOrLoadOnboardingMemberActions(e)
    }), N(this, "handleGuildMemberUpdate", e => {
      let {
        flags: t,
        user: s,
        guildId: o
      } = e;
      if (s.id === a.default.getId()) {
        if (!this.onboardingCompleteGuilds.has(o) && (0, d.yE)(null != t ? t : 0, f.q.COMPLETED_HOME_ACTIONS)) {
          var l, u;
          this.onboardingCompleteGuilds.add(o);
          let e = null !== (u = null === (l = E.Z.getNewMemberActions(o)) || void 0 === l ? void 0 : l.length) && void 0 !== u ? u : 0;
          if (0 === e) return;
          (0, r.openModalLazy)(async () => {
            let {
              default: t
            } = await Promise.all([n.e("99387"), n.e("92339")]).then(n.bind(n, 184100));
            return n => (0, i.jsx)(t, {
              ...n,
              initialPercent: (e - 1) / e,
              numActions: e
            })
          })
        }
      }
    }), N(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      this.onboardingCompleteGuilds.delete(t.id)
    }), N(this, "handleChannelSelect", async e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null == t || null == n) return;
      let {
        memberActions: i,
        completedActions: r
      } = await this._getOrLoadOnboardingMemberActions(t), s = null == i ? void 0 : i.find(e => e.channelId === n);
      (null == r ? void 0 : r[n]) !== !0 && null != s && s.actionType === I.oi.VIEW && (0, c.Oh)(t, n)
    }), N(this, "handleMessageSend", e => {
      var t;
      let {
        guildId: n,
        channelId: i,
        message: r
      } = e;
      if (null == n || null == i || (null === (t = r.author) || void 0 === t ? void 0 : t.id) !== a.default.getId()) return;
      let s = l.Z.getChannel(i);
      (null == s ? void 0 : s.isForumPost()) && (null == s ? void 0 : s.parent_id) != null && this._completeChatAction(n, s.parent_id), this._completeChatAction(n, i)
    }), N(this, "handleThreadCreate", e => {
      var t;
      let {
        channel: n,
        isNewlyCreated: i
      } = e;
      if (!!i && null != n.parent_id && !!(null === (t = l.Z.getChannel(n.parent_id)) || void 0 === t ? void 0 : t.isForumLikeChannel())) n.ownerId === a.default.getId() && this._completeChatAction(n.guild_id, n.parent_id)
    }), N(this, "_completeChatAction", async (e, t) => {
      let {
        memberActions: n,
        completedActions: i
      } = await this._getOrLoadOnboardingMemberActions(e), r = null == n ? void 0 : n.find(e => e.channelId === t);
      (null == i ? void 0 : i[t]) !== !0 && null != r && r.actionType === I.oi.CHAT && (0, c.Oh)(e, t)
    }), N(this, "_getOrLoadOnboardingMemberActions", async e => {
      var t, n;
      let i = (0, h.s)(e),
        r = o.Z.isFullServerPreview(e);
      if (!i && !r) return {};
      let s = u.ZP.getSelfMember(e);
      if (null == s || !(0, S.m)(null !== (t = s.joinedAt) && void 0 !== t ? t : void 0, null !== (n = s.flags) && void 0 !== n ? n : void 0)) return {};
      let [a, l] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e, s), this._getOrLoadMemberActions(e, s)]);
      return {
        memberActions: a,
        completedActions: l
      }
    }), N(this, "_getOrLoadOnboardingHomeSettings", async (e, t) => {
      var n, i;
      let r = E.Z.getNewMemberActions(e),
        s = E.Z.getIsLoading(e);
      if (!(null == r && !s && (0, S.m)(null !== (n = t.joinedAt) && void 0 !== n ? n : void 0, null !== (i = t.flags) && void 0 !== i ? i : void 0))) return r;
      {
        let t = await (0, c.cP)(e);
        return null == t ? void 0 : t.newMemberActions
      }
    }), N(this, "_getOrLoadMemberActions", async (e, t) => {
      var n;
      let {
        completedActions: i,
        loading: r
      } = T.Z.getState(e);
      return null == i && !r && (0, d.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, f.q.STARTED_HOME_ACTIONS) ? await (0, c.Fg)(e) : i
    })
  }
}
t.Z = new A