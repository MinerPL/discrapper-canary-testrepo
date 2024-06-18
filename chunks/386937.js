"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t.n(r),
  c = t(442837),
  d = t(477690),
  u = t(481060),
  E = t(179360),
  _ = t(129861),
  I = t(999382),
  T = t(899667),
  N = t(271383),
  m = t(594174),
  S = t(575e3),
  h = t(409216),
  g = t(267642),
  x = t(624138),
  C = t(981631),
  R = t(689938),
  L = t(961414);

function O(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let A = (0, x.Mg)(d.Z.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class p extends i.Component {
  componentDidMount() {
    this.measure();
    let {
      guildId: e
    } = this.props;
    null != e && (0, E.C0)(e), window.addEventListener("resize", this.measure)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.measure)
  }
  componentDidUpdate() {
    if (!(null != this.state.tierPositions || Object.values(this.tierRefs).some(e => null == e))) this.measure()
  }
  getSubscriptionCount() {
    let {
      subscriptions: e
    } = this.props;
    return null != e ? e.length : 0
  }
  renderProgressBar(e) {
    let {
      tierPositions: s
    } = this.state, {
      guildId: t
    } = this.props, i = this.getSubscriptionCount();
    if (null == s || null == t) return null;
    let l = {
        numRequired: 0,
        y: 0,
        key: S.x
      },
      a = (0, g.vn)(t),
      r = e.map(e => {
        var t;
        return {
          numRequired: a[e.tier],
          name: (0, g.nW)(e.tier),
          y: null !== (t = s[e.tier]) && void 0 !== t ? t : 0,
          key: e.tier
        }
      });
    return (0, n.jsx)(S.Z, {
      className: i > 0 ? L.progressWithSubscriptions : L.progress,
      progress: i,
      tiers: [l, ...r],
      initialAnimationDelay: 500,
      onAnimatedTierMaker: this.handleAnimatedTier
    })
  }
  renderTierNone() {
    return (0, n.jsxs)("div", {
      className: L.tierDefaultUnlocked,
      ref: this.defaultTierRef,
      children: [(0, n.jsx)(u.FormText, {
        type: u.FormText.Types.LABEL_BOLD,
        children: R.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_NONE
      }), (0, n.jsx)(u.FormText, {
        type: u.FormText.Types.DESCRIPTION,
        className: L.tierDefaultUnlockedDescription,
        children: R.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_DESCRIPTION_NONE
      })]
    })
  }
  renderSubscribers() {
    let {
      subscribers: e,
      subscriberCount: s,
      guildId: t
    } = this.props;
    return (0, n.jsxs)("div", {
      ref: this.defaultTierRef,
      className: L.subscribers,
      children: [(0, n.jsx)(h.Z, {
        guildId: null != t ? t : void 0,
        users: e,
        renderUser: this.renderSubscriber,
        renderMoreUsers: this.renderMoreSubscribers,
        max: 5
      }), (0, n.jsx)("div", {
        className: L.subscriberCount,
        children: R.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_COUNT_SUBSCRIBERS.format({
          count: s
        })
      })]
    })
  }
  render() {
    let {
      guildId: e,
      renderTier: s,
      subscriptions: t,
      subscriberCount: i,
      tiers: l
    } = this.props;
    if (null == t) return (0, n.jsx)(u.Spinner, {
      type: u.Spinner.Type.SPINNING_CIRCLE
    });
    if (null == e) return null;
    let a = (0, g.vn)(e);
    return (0, n.jsx)("div", {
      children: (0, n.jsxs)("div", {
        className: L.content,
        children: [this.renderProgressBar(l), (0, n.jsxs)("div", {
          className: L.tiers,
          children: [0 === i ? this.renderTierNone() : this.renderSubscribers(), l.map((t, n, i) => s({
            tier: t,
            tiers: i,
            tierIndex: n,
            onSetRef: this.setTierRef,
            isAnimatedTo: a[this.state.animatedTier] >= a[t.tier],
            subscriptionCount: this.getSubscriptionCount(),
            guildId: e
          }))]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), O(this, "tierRefs", {}), O(this, "defaultTierRef", i.createRef()), O(this, "state", {
      tierPositions: null,
      animatedTier: C.Eu4.NONE
    }), O(this, "measure", () => {
      let {
        subscriberCount: e
      } = this.props, s = this.defaultTierRef.current;
      if (null == s) return;
      let {
        top: t
      } = s.getBoundingClientRect(), n = {};
      for (let [s, i] of Object.entries(this.tierRefs)) {
        if (null == i) return;
        let {
          top: l
        } = i.getBoundingClientRect(), a = e > 0 ? A : 0;
        n[s] = l - t + 32 - a
      }
      this.setState({
        tierPositions: n
      })
    }), O(this, "setTierRef", (e, s) => {
      this.tierRefs[s.tier] = e
    }), O(this, "handleAnimatedTier", e => {
      this.setState({
        animatedTier: e.key
      })
    }), O(this, "renderSubscriber", (e, s, t) => {
      var i;
      return null == e ? null : (0, n.jsx)(u.Tooltip, {
        text: (0, n.jsx)(_.Z, {
          user: e.user,
          nick: e.nick
        }),
        "aria-label": null !== (i = e.nick) && void 0 !== i ? i : e.user.tag,
        children: t => (0, n.jsx)(u.Avatar, {
          ...t,
          tabIndex: -1,
          src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
          className: a()(L.avatar, s, null != s ? L.subscriberMask : null),
          size: u.AvatarSizes.SIZE_32
        })
      }, t)
    }), O(this, "renderSubscribersPopout", () => (0, n.jsx)(u.Scroller, {
      className: L.subscribersPopout,
      children: this.props.subscribers.map(e => (0, n.jsxs)("div", {
        className: L.subscribersPopoutUser,
        children: [(0, n.jsx)(u.Avatar, {
          src: e.user.getAvatarURL(this.props.guildId, 32),
          "aria-label": e.user.username,
          size: u.AvatarSizes.SIZE_32,
          className: L.avatar
        }), (0, n.jsx)("div", {
          className: L.subscribersPopoutUsername,
          children: (0, n.jsx)(_.Z, {
            user: e.user,
            nick: e.nick
          })
        })]
      }, e.user.id))
    })), O(this, "renderMoreSubscribers", (e, s, t) => (0, n.jsx)(u.Popout, {
      renderPopout: this.renderSubscribersPopout,
      position: "bottom",
      autoInvert: !1,
      children: s => (0, n.jsx)("div", {
        className: L.moreSubscribers,
        ...s,
        children: e
      })
    }, t))
  }
}
let M = c.ZP.connectStores([I.Z, m.default, T.Z, N.ZP], () => {
  let e = I.Z.getGuildId(),
    s = null != e ? T.Z.getAppliedGuildBoostsForGuild(e) : null,
    t = o()(null != s ? s : []).uniqBy(e => e.userId),
    n = t.map(s => ({
      user: m.default.getUser(s.userId),
      nick: N.ZP.getNick(e, s.userId)
    })).filter(e => null != e.user).value();
  return {
    guildId: e,
    subscriptions: s,
    subscribers: n,
    subscriberCount: t.size()
  }
})(p);
s.Z = M