"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("477690"),
  c = s("481060"),
  E = s("179360"),
  _ = s("129861"),
  I = s("999382"),
  T = s("899667"),
  S = s("271383"),
  f = s("594174"),
  m = s("575000"),
  N = s("409216"),
  g = s("267642"),
  h = s("624138"),
  C = s("981631"),
  R = s("689938"),
  x = s("623898");

function L(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let O = (0, h.cssValueToNumber)(u.default.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class A extends l.Component {
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
    super(...e), L(this, "tierRefs", {}), L(this, "defaultTierRef", l.createRef()), L(this, "state", {
      tierPositions: null,
      animatedTier: C.BoostedGuildTiers.NONE
    }), L(this, "measure", () => {
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
        } = l.getBoundingClientRect(), i = e > 0 ? O : 0;
        a[t] = n - s + 32 - i
      }
      this.setState({
        tierPositions: a
      })
    }), L(this, "setTierRef", (e, t) => {
      this.tierRefs[t.tier] = e
    }), L(this, "handleAnimatedTier", e => {
      this.setState({
        animatedTier: e.key
      })
    }), L(this, "renderSubscriber", (e, t, s) => {
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
          className: i()(x.avatar, t, null != t ? x.subscriberMask : null),
          size: c.AvatarSizes.SIZE_32
        })
      }, s)
    }), L(this, "renderSubscribersPopout", () => (0, a.jsx)(c.Scroller, {
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
    })), L(this, "renderMoreSubscribers", (e, t, s) => (0, a.jsx)(c.Popout, {
      renderPopout: this.renderSubscribersPopout,
      position: "bottom",
      autoInvert: !1,
      children: t => (0, a.jsx)("div", {
        className: x.moreSubscribers,
        ...t,
        children: e
      })
    }, s))
  }
}
let p = d.default.connectStores([I.default, f.default, T.default, S.default], () => {
  let e = I.default.getGuildId(),
    t = null != e ? T.default.getAppliedGuildBoostsForGuild(e) : null,
    s = o()(null != t ? t : []).uniqBy(e => e.userId),
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
})(A);
t.default = p