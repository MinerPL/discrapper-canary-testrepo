"use strict";
i.r(t), i.d(t, {
  default: function() {
    return K
  }
}), i("653041"), i("47120");
var n = i("735250"),
  a = i("470079"),
  s = i("120356"),
  l = i.n(s),
  o = i("392711"),
  r = i.n(o),
  u = i("913527"),
  d = i.n(u),
  c = i("748780"),
  h = i("866442"),
  f = i("442837"),
  m = i("692547"),
  p = i("481060"),
  g = i("980568"),
  T = i("560768"),
  S = i("812206"),
  v = i("243778"),
  E = i("843693"),
  R = i("246642"),
  I = i("921227"),
  N = i("314897"),
  C = i("430824"),
  _ = i("496675"),
  x = i("699516"),
  O = i("885110"),
  j = i("300429"),
  A = i("111583"),
  M = i("594174"),
  b = i("451478"),
  y = i("199882"),
  L = i("626135"),
  P = i("585483"),
  U = i("70956"),
  w = i("823379"),
  F = i("5192"),
  D = i("981631"),
  B = i("689938"),
  k = i("857983");

function H(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let V = [];
class G extends a.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        fadeIn: !0
      }), this.timeout = null, this.logShownEventIfNeeded()
    }, 100)
  }
  componentDidUpdate() {
    this.logShownEventIfNeeded()
  }
  logShownEventIfNeeded() {
    let e = this.props.activity.application_id;
    null != e && -1 === V.indexOf(e) && (L.default.track(D.AnalyticEvents.SHOW_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: e
    }), V.push(e))
  }
  componentWillUnmount() {
    null !== this.timeout && clearTimeout(this.timeout)
  }
  render() {
    let {
      activity: e
    } = this.props;
    return (0, n.jsxs)("div", {
      className: l()(k.activityInviteEducation, {
        [k.activityInviteEducationFadeIn]: this.state.fadeIn
      }),
      children: [(0, n.jsx)("div", {
        className: k.activityInviteEducationArrow
      }), (0, n.jsx)("span", {
        children: B.default.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
          game: e.name,
          dismissOnClick: this.handleDismissInviteEducation
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), H(this, "state", {
      fadeIn: !1
    }), H(this, "timeout", null), H(this, "handleDismissInviteEducation", () => {
      let {
        activity: e
      } = this.props;
      null != e && null != e.application_id && g.default.dismissForApplicationId(e.application_id)
    })
  }
}

function z(e) {
  let {
    channel: t,
    guild: i
  } = e;
  return (0, n.jsx)(v.default, {
    contentTypes: [],
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      return null
    }
  })
}
class W extends a.PureComponent {
  componentDidMount() {
    P.ComponentDispatch.subscribe(D.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
  }
  componentWillUnmount() {
    P.ComponentDispatch.unsubscribe(D.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
  }
  getCooldownTextStyle() {
    let {
      color: e
    } = this.state, {
      baseTextColor: t,
      activeTextColor: i
    } = this.props;
    return {
      color: e.interpolate({
        inputRange: [0, 1],
        outputRange: [t, (0, h.hex2rgb)(i, .9)]
      })
    }
  }
  render() {
    let e;
    let {
      guildId: t,
      activity: i,
      showInviteEducation: a,
      isFocused: s,
      typingUsers: o,
      className: u,
      slowmodeCooldownGuess: h,
      isBypassSlowmode: f,
      channel: m,
      isThreadCreation: g,
      renderDots: T,
      poggermodeEnabled: S,
      isComboing: v
    } = this.props, {
      rateLimitPerUser: E
    } = m, I = M.default.getCurrentUser(), N = C.default.getGuild(t), _ = E > 0, O = g ? [] : r()(o).keys().filter(e => e !== (null == I ? void 0 : I.id)).reject(e => x.default.isBlocked(e)).map(e => M.default.getUser(e)).filter(w.isNotNullish).map(e => F.default.getName(t, this.props.channel.id, e)).value();
    if (0 === O.length && !_ && !v) return a && null != i ? (0, n.jsx)(G, {
      activity: i,
      isFocused: s
    }) : (0, n.jsx)(z, {
      channel: m,
      guild: N
    });
    let j = "",
      A = null,
      b = "";
    if (_) {
      if (A = (0, n.jsx)(y.default, {
          className: k.slowModeIcon,
          width: 16,
          height: 16
        }), E >= U.default.Seconds.HOUR) {
        let e = Math.floor(E / U.default.Seconds.HOUR),
          t = Math.floor((E - e * U.default.Seconds.HOUR) / U.default.Seconds.MINUTE),
          i = E - e * U.default.Seconds.HOUR - t * U.default.Seconds.MINUTE;
        b = B.default.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
          hours: e,
          minutes: t,
          seconds: i
        })
      } else if (E >= 60) {
        let e = Math.floor(E / 60);
        b = B.default.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
          minutes: e,
          seconds: E - 60 * e
        })
      } else b = B.default.Messages.CHANNEL_SLOWMODE_DESC.format({
        seconds: E
      });
      if (!f && h > 0) {
        let e = d().duration(h);
        if (h > U.default.Millis.HOUR) {
          let t = "".concat(e.minutes()).padStart(2, "0"),
            i = "".concat(e.seconds()).padStart(2, "0");
          j = "".concat(e.hours(), ":").concat(t, ":").concat(i)
        } else {
          let t = "".concat(e.seconds()).padStart(2, "0");
          j = "".concat(e.minutes(), ":").concat(t)
        }
      } else 0 === O.length && (j = f ? B.default.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : B.default.Messages.CHANNEL_SLOWMODE_DESC_SHORT)
    }
    let [L, P, D] = O;
    return e = 0 === O.length ? "" : 1 === O.length ? B.default.Messages.ONE_USER_TYPING.format({
      a: L
    }) : 2 === O.length ? B.default.Messages.TWO_USERS_TYPING.format({
      a: L,
      b: P
    }) : 3 === O.length ? B.default.Messages.THREE_USERS_TYPING.format({
      a: L,
      b: P,
      c: D
    }) : B.default.Messages.SEVERAL_USERS_TYPING, (0, n.jsxs)("div", {
      className: l()(k.typing, {
        "stop-animation": !s,
        [k.isComboing]: S && v
      }, u),
      children: [(0, n.jsxs)("div", {
        className: k.typingDots,
        children: [O.length > 0 && !1 !== T && (0, n.jsx)(p.Dots, {
          className: k.ellipsis,
          dotRadius: 3.5,
          themed: !0
        }), (0, n.jsx)("span", {
          className: k.text,
          "aria-live": "polite",
          "aria-atomic": !0,
          children: e
        })]
      }), _ && (0, n.jsx)(p.Tooltip, {
        text: b,
        children: e => (0, n.jsxs)(c.default.div, {
          style: this.getCooldownTextStyle(),
          className: k.cooldownWrapper,
          ...e,
          children: [j, A]
        })
      }), S && v && (0, n.jsx)(R.default, {
        channelId: m.id
      })]
    })
  }
  constructor(...e) {
    super(...e), H(this, "state", {
      color: new c.default.Value(0)
    }), H(this, "emphasizeSlowmodeCooldown", () => {
      let {
        color: e
      } = this.state;
      c.default.sequence([c.default.timing(e, {
        toValue: 1,
        duration: 100,
        easing: c.default.Easing.quad
      }), c.default.timing(e, {
        delay: 250,
        toValue: 0,
        duration: 100,
        easing: c.default.Easing.quad
      })]).start()
    })
  }
}

function K(e) {
  let {
    channel: t,
    isThreadCreation: i = !1,
    ...a
  } = e, s = (0, f.useStateFromStores)([O.default], () => O.default.findActivity(e => null != e.application_id)), l = (0, f.useStateFromStores)([E.default, N.default], () => E.default.getUserCombo(N.default.getId(), t.id)), o = (0, f.useStateFromStores)([I.default, S.default], () => (0, T.default)(t, s, I.default, S.default)), r = (0, f.useStateFromStores)([j.default], () => j.default.getSlowmodeCooldownGuess(t.id, i ? j.SlowmodeType.CreateThread : j.SlowmodeType.SendMessage)), u = (0, f.useStateFromStores)([_.default], () => i ? _.default.can(D.Permissions.MANAGE_THREADS, t) : _.default.can(D.Permissions.MANAGE_CHANNELS, t) || _.default.can(D.Permissions.MANAGE_MESSAGES, t)), d = {
    ...a,
    baseTextColor: (0, p.useToken)(m.default.colors.INTERACTIVE_NORMAL).hex(),
    activeTextColor: (0, p.useToken)(m.default.colors.INTERACTIVE_NORMAL).hex(),
    showInviteEducation: o,
    activity: s,
    typingUsers: (0, f.useStateFromStores)([A.default], () => A.default.getTypingUsers(t.id)),
    isFocused: (0, f.useStateFromStores)([b.default], () => b.default.isFocused()),
    guildId: t.guild_id,
    slowmodeCooldownGuess: r,
    isComboing: null != l,
    isBypassSlowmode: u,
    channel: t,
    isThreadCreation: i
  };
  return (0, n.jsx)(W, {
    ...d
  })
}