n(47120), n(653041);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(215569),
  o = n(481060),
  c = n(140710),
  u = n(566006),
  d = n(60174),
  _ = n(453687),
  E = n(434624),
  I = n(287151),
  m = n(689938),
  T = n(716862),
  h = n(372178);
let N = (e, t) => null == e && null == t || e === t,
  C = (e, t) => e.findIndex(e => N(e.emoji.id, null == t ? void 0 : t.id) && N(e.emoji.name, null == t ? void 0 : t.name)),
  f = (e, t) => {
if (null == t)
  return e;
let n = C(e, t);
return n < 0 ? e : [
  e[n],
  ...e.slice(0, n),
  ...e.slice(n + 1)
];
  };
class p extends s.PureComponent {
  static getDerivedStateFromProps(e, t) {
let n = e.message.reactions.length;
return 0 === t.reactionsCount && n > 0 ? {
  disableTransitionAppear: !1,
  reactionsCount: n
} : t.reactionsCount !== n ? {
  reactionsCount: n
} : null;
  }
  render() {
let {
  message: e,
  disableReactionCreates: t,
  disableReactionUpdates: n,
  isLurking: s,
  isGuest: a,
  isPendingMember: N,
  isForumToolbar: C,
  channel: f,
  className: p,
  forceAddReactions: g,
  reactionClassName: S,
  useChatFontScaling: A,
  forceHideReactionCreates: R,
  remainingReactions: O,
  combinedReactions: x,
  visibleReactionsCount: M
} = this.props, {
  disableTransitionAppear: v
} = this.state, L = A ? h : T, Z = M > 0;
if (!Z && !g)
  return null;
let {
  enabled: P
} = c.Z.getCurrentConfig({
  location: 'message_reactions'
}, {
  autoTrackExposure: !0
}), D = P && Z;
return (0, i.jsxs)(l.W, {
  component: 'div',
  className: r()(L.reactions, p),
  transitionAppear: !v,
  role: 'group',
  transitionLeave: !1,
  id: (0, _.bY)(e),
  onMouseEnter: () => this.setState({
    isHovered: !0
  }),
  onMouseLeave: () => this.setState({
    isHovered: !1
  }),
  children: [
    (0, i.jsx)(E.l, {
      reactions: x,
      message: e,
      readOnly: n,
      isLurking: s,
      isGuest: a,
      isPendingMember: N,
      isForumToolbar: C,
      useChatFontScaling: A,
      className: S
    }),
    O > 0 && (0, i.jsx)(o.Clickable, {
      onClick: t => {
        t.stopPropagation(), (0, I.op)(f, e);
      },
      className: r()(L.reaction, S, L.remainingReactions),
      'aria-label': m.Z.Messages.ADD_REACTION,
      children: (0, i.jsxs)(o.Text, {
        className: L.reactionInner,
        variant: 'text-sm/normal',
        children: [
          '+',
          O
        ]
      })
    }),
    !t && !R && (0, i.jsx)(d.X, {
      type: u.O.NORMAL,
      message: e,
      channel: f,
      useChatFontScaling: A,
      isHovered: this.state.isHovered,
      className: r()({
        [L.forceShow]: g && !Z || D,
        [L.forceShowLook]: g || D
      })
    })
  ]
});
  }
  constructor(...e) {
var t, n, i;
super(...e), t = this, n = 'state', i = {
  disableTransitionAppear: !0,
  reactionsCount: this.props.message.reactions.length,
  isHovered: !1
}, n in t ? Object.defineProperty(t, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = i;
  }
}
t.Z = e => {
  let {
message: t,
maxReactions: n,
hoistReaction: a
  } = e, {
combinedReactions: r,
remainingReactions: l,
visibleReactionsCount: o
  } = s.useMemo(() => {
let e = [],
  i = f(t.reactions, a),
  s = null != n && n < i.length ? i.slice(0, n) : i,
  r = i.length - s.length,
  l = i.length;
return s.forEach(t => {
  t.burst_count > 0 && e.push({
    ...t,
    type: u.O.BURST
  }), t.count > 0 && e.push({
    ...t,
    type: u.O.NORMAL
  }), null != t.me_vote && --l;
}), {
  combinedReactions: e,
  visibleReactionsCount: l,
  remainingReactions: r
};
  }, [
a,
n,
t.reactions
  ]);
  return (0, i.jsx)(p, {
...e,
visibleReactionsCount: o,
combinedReactions: r,
remainingReactions: l
  });
};