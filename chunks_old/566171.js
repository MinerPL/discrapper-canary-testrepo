"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("917351"),
  o = s.n(r),
  d = s("446674"),
  u = s("769846"),
  c = s("77078"),
  E = s("583367"),
  _ = s("145079"),
  I = s("900938"),
  T = s("735201"),
  S = s("26989"),
  f = s("697218"),
  m = s("773309"),
  N = s("533403"),
  g = s("427459"),
  h = s("159885"),
  C = s("49111"),
  R = s("782340"),
  x = s("69339");
let L = (0, h.cssValueToNumber)(u.default.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class O extends l.Component {
  componentDidMount() {
    this.measure();
    let {
      guildId: e
    } = this.props;
    null != e && (0, E.fetchAppliedGuildBoostsForGuild)(e), window.addEventListener("resize", this.measure)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.measure)
  }
  componentDidUpdate() {
    if (null == this.state.tierPositions) !Object.values(this.tierRefs).some(e => null == e) && this.measure()
  }
  getSubscriptionCount() {
    let {
      subscriptions: e
    } = this.props;
    return null != e ? e.length : 0
  }
  renderProgressBar(e) {
    let {
      tierPositions: t
    } = this.state, {
      guildId: s
    } = this.props, l = this.getSubscriptionCount();
    if (null == t || null == s) return null;
    let n = {
        numRequired: 0,
        y: 0,
        key: m.FIRST_TIER_KEY
      },
      i = (0, g.getAppliedGuildBoostsRequired)(s),
      r = e.map(e => {
        var s;
        return {
          numRequired: i[e.tier],
          name: (0, g.getTierName)(e.tier),
          y: null !== (s = t[e.tier]) && void 0 !== s ? s : 0,
          key: e.tier
        }
      });
    return (0, a.jsx)(m.default, {
      className: l > 0 ? x.progressWithSubscriptions : x.progress,
      progress: l,
      tiers: [n, ...r],
      initialAnimationDelay: 500,
      onAnimatedTierMaker: this.handleAnimatedTier
    })
  }
  renderTierNone() {
    return (0, a.jsxs)("div", {
      className: x.tierDefaultUnlocked,
      ref: this.defaultTierRef,
      children: [(0, a.jsx)(c.FormText, {
        type: c.FormText.Types.LABEL_BOLD,
        children: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_NONE
      }), (0, a.jsx)(c.FormText, {
        type: c.FormText.Types.DESCRIPTION,
        className: x.tierDefaultUnlockedDescription,
        children: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_DESCRIPTION_NONE
      })]
    })
  }
  renderSubscribers() {
    let {
      subscribers: e,
      subscriberCount: t,
      guildId: s
    } = this.props;
    return (0, a.jsxs)("div", {
      ref: this.defaultTierRef,
      className: x.subscribers,
      children: [(0, a.jsx)(N.default, {
        guildId: null != s ? s : void 0,
        users: e,
        renderUser: this.renderSubscriber,
        renderMoreUsers: this.renderMoreSubscribers,
        max: 5
      }), (0, a.jsx)("div", {
        className: x.subscriberCount,
        children: R.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_COUNT_SUBSCRIBERS.format({
          count: t
        })
      })]
    })
  }
  render() {
    let {
      guildId: e,
      renderTier: t,
      subscriptions: s,
      subscriberCount: l,
      tiers: n
    } = this.props;
    if (null == s) return (0, a.jsx)(c.Spinner, {
      type: c.Spinner.Type.SPINNING_CIRCLE
    });
    if (null == e) return null;
    let i = (0, g.getAppliedGuildBoostsRequired)(e);
    return (0, a.jsx)("div", {
      children: (0, a.jsxs)("div", {
        className: x.content,
        children: [this.renderProgressBar(n), (0, a.jsxs)("div", {
          className: x.tiers,
          children: [0 === l ? this.renderTierNone() : this.renderSubscribers(), n.map((s, a, l) => t({
            tier: s,
            tiers: l,
            tierIndex: a,
            onSetRef: this.setTierRef,
            isAnimatedTo: i[this.state.animatedTier] >= i[s.tier],
            subscriptionCount: this.getSubscriptionCount(),
            guildId: e
          }))]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this.tierRefs = {}, this.defaultTierRef = l.createRef(), this.state = {
      tierPositions: null,
      animatedTier: C.BoostedGuildTiers.NONE
    }, this.measure = () => {
      let {
        subscriberCount: e
      } = this.props, t = this.defaultTierRef.current;
      if (null == t) return;
      let {
        top: s
      } = t.getBoundingClientRect(), a = {};
      for (let [t, l] of Object.entries(this.tierRefs)) {
        if (null == l) return;
        let {
          top: n
        } = l.getBoundingClientRect(), i = e > 0 ? L : 0;
        a[t] = n - s + 32 - i
      }
      this.setState({
        tierPositions: a
      })
    }, this.setTierRef = (e, t) => {
      this.tierRefs[t.tier] = e
    }, this.handleAnimatedTier = e => {
      this.setState({
        animatedTier: e.key
      })
    }, this.renderSubscriber = (e, t, s) => {
      var l;
      return null == e ? null : (0, a.jsx)(c.Tooltip, {
        text: (0, a.jsx)(_.default, {
          user: e.user,
          nick: e.nick
        }),
        "aria-label": null !== (l = e.nick) && void 0 !== l ? l : e.user.tag,
        children: s => (0, a.jsx)(c.Avatar, {
          ...s,
          tabIndex: -1,
          src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
          className: i(x.avatar, t, null != t ? x.subscriberMask : null),
          size: c.AvatarSizes.SIZE_32
        })
      }, s)
    }, this.renderSubscribersPopout = () => (0, a.jsx)(c.Scroller, {
      className: x.subscribersPopout,
      children: this.props.subscribers.map(e => (0, a.jsxs)("div", {
        className: x.subscribersPopoutUser,
        children: [(0, a.jsx)(c.Avatar, {
          src: e.user.getAvatarURL(this.props.guildId, 32),
          "aria-label": e.user.username,
          size: c.AvatarSizes.SIZE_32,
          className: x.avatar
        }), (0, a.jsx)("div", {
          className: x.subscribersPopoutUsername,
          children: (0, a.jsx)(_.default, {
            user: e.user,
            nick: e.nick
          })
        })]
      }, e.user.id))
    }), this.renderMoreSubscribers = (e, t, s) => (0, a.jsx)(c.Popout, {
      renderPopout: this.renderSubscribersPopout,
      position: "bottom",
      autoInvert: !1,
      children: t => (0, a.jsx)("div", {
        className: x.moreSubscribers,
        ...t,
        children: e
      })
    }, s)
  }
}
let A = d.default.connectStores([I.default, f.default, T.default, S.default], () => {
  let e = I.default.getGuildId(),
    t = null != e ? T.default.getAppliedGuildBoostsForGuild(e) : null,
    s = o(null != t ? t : []).uniqBy(e => e.userId),
    a = s.map(t => ({
      user: f.default.getUser(t.userId),
      nick: S.default.getNick(e, t.userId)
    })).filter(e => null != e.user).value();
  return {
    guildId: e,
    subscriptions: t,
    subscribers: a,
    subscriberCount: s.size()
  }
})(O);
var p = A