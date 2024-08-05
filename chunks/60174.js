n.d(t, {
  X: function() {
return M;
  }
}), n(789020), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(954955),
  o = n.n(l),
  c = n(507274),
  u = n(481060),
  d = n(130402),
  _ = n(466794),
  E = n(659215),
  I = n(222677),
  m = n(995774),
  T = n(931651),
  h = n(594174),
  N = n(630388),
  C = n(74538),
  f = n(566006),
  p = n(981631),
  g = n(185923),
  S = n(474936),
  A = n(689938),
  R = n(716862),
  O = n(372178);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class M extends s.Component {
  render() {
let {
  type: e,
  message: t,
  className: n,
  children: s,
  useChatFontScaling: a
} = this.props, {
  isReactionPickerActive: l
} = this.state, o = t.state === p.yb.SENDING, c = e === f.O.BURST;
if (o || (0, N.yE)(t.flags, p.iLy.EPHEMERAL))
  return null;
let E = h.default.getCurrentUser(),
  I = (0, C.I5)(E),
  m = c ? A.Z.Messages.ADD_BURST_REACTION : A.Z.Messages.ADD_REACTION;
!I && c && (m = (0, i.jsx)(_.X, {
  tooltipText: A.Z.Messages.ADD_BURST_REACTION
}));
let T = a ? O : R;
return (0, i.jsx)(u.Popout, {
  shouldShow: l,
  onRequestClose: this.handleReactionPickerToggle,
  renderPopout: this.renderReactionPopout,
  position: 'right',
  children: (e, t) => {
    let {
      isShown: a
    } = t;
    return (0, i.jsx)(u.TooltipContainer, {
      text: m,
      color: u.TooltipColors.PRIMARY,
      'aria-label': c ? A.Z.Messages.ADD_BURST_REACTION : A.Z.Messages.ADD_REACTION,
      tooltipClassName: T.__invalid_addReactionTooltip,
      children: (0, i.jsxs)(u.Clickable, {
        ...e,
        onClick: e => {
          this.handleAddReactionClick(e);
        },
        onMouseEnter: () => (0, d.x)(g.qR.AddReactionPopoutMouseEntered),
        onFocus: () => (0, d.x)(g.qR.AddReactionPopoutFocused),
        className: r()(T.reactionBtn, {
          [T.active]: a
        }, n),
        children: [
          c ? (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(u.SuperReactionIcon, {
              size: 'sm',
              color: 'currentColor',
              className: T.icon
            })
          }) : (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(u.ReactionIcon, {
              size: 'sm',
              color: 'currentColor',
              className: T.icon
            })
          }),
          s
        ]
      })
    });
  }
});
  }
  constructor(...e) {
super(...e), x(this, 'state', {
  isReactionPickerActive: !1
}), x(this, 'onAddReaction', (e, t) => {
  if (null == e)
    return;
  let {
    channel: n,
    message: i,
    isForumToolbar: s
  } = this.props;
  (0, I.rU)(n.id, i.id, (0, m.g1)(e), s ? I.TW.FORUM_TOOLBAR : I.TW.MESSAGE_INLINE_BUTTON, {
    burst: t
  });
}), x(this, 'handleReactionPickerToggle', () => {
  this.setState(e => ({
    isReactionPickerActive: !e.isReactionPickerActive
  }));
}), x(this, 'handleAddReactionClick', e => {
  let {
    type: t,
    channel: n
  } = this.props;
  e.stopPropagation();
  let i = h.default.getCurrentUser();
  t === f.O.BURST && !(0, C.I5)(i) && (0, E.openBurstReactionsUpsellModal)({
    analytics: {
      type: S.cd.BURST_REACTION_UPSELL,
      page: null != n.getGuildId() ? p.ZY5.GUILD_CHANNEL : p.ZY5.DM_CHANNEL,
      section: (0, m.s4)(n),
      object: p.qAy.INLINE_REACTION_PICKER_UPSELL
    }
  }), this.handleReactionPickerToggle();
}), x(this, 'renderReactionPopout', e => {
  let {
    closePopout: t
  } = e, {
    type: n,
    channel: s,
    message: a
  } = this.props, r = {
    openPopoutType: 'message_reaction_emoji_picker',
    ...n === f.O.BURST && {
      openPopoutType: 'message_super_reaction_emoji_picker',
      page: null != s.getGuildId() ? p.ZY5.GUILD_CHANNEL : p.ZY5.DM_CHANNEL,
      section: (0, m.s4)(s),
      object: p.qAy.REACTION_RAIL
    }
  }, l = (0, i.jsx)(T.$, {
    closePopout: t,
    channel: s,
    onSelectEmoji: (e, n, i) => {
      this.onAddReaction(e, i), n && (i ? o()(t, 150)() : t());
    },
    analyticsOverride: r,
    messageId: a.id
  });
  return (0, i.jsx)(c.M.Consumer, {
    children: e => e ? (0, i.jsx)(u.Dialog, {
      'aria-label': A.Z.Messages.REACTION_PICKER,
      children: l
    }) : l
  });
});
  }
}