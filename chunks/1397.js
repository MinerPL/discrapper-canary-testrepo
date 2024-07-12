n.d(t, {
  Z: function() {
return F;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(512722),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(893776),
  d = n(528963),
  u = n(749210),
  h = n(607070),
  p = n(391650),
  m = n(645896),
  _ = n(353093),
  f = n(717057),
  E = n(693546),
  C = n(881952),
  g = n(305325),
  I = n(246364),
  x = n(937111),
  T = n(270801),
  v = n(652730),
  N = n(41776),
  S = n(657352),
  Z = n(33154),
  A = n(144114),
  M = n(703656),
  b = n(210887),
  R = n(237904),
  j = n(271383),
  L = n(430824),
  P = n(607744),
  O = n(496675),
  y = n(594174),
  D = n(700785),
  k = n(862679),
  U = n(981631),
  w = n(815660),
  B = n(689938),
  H = n(305157);

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class V extends a.PureComponent {
  componentDidMount() {
let {
  isFollowable: e,
  channelFollowingUsersSeen: t,
  channel: n
} = this.props;
e && null == t && d.Z.fetchChannelFollowerStats(n.id);
  }
  componentDidUpdate(e) {
let {
  shouldShowLurkerModeSuccessPopout: t,
  guild: n,
  showMemberVerificationModal: i,
  clanInfo: a
} = this.props;
if (!i && !e.shouldShowLurkerModeSuccessPopout && t && null != n) {
  if ((0, _.EJ)(n) && null == a)
    return;
  this.setState({
    shouldShowLurkerModeSuccessPopout: !0
  });
}
  }
  render() {
let {
  isFollowable: e,
  isLurking: t,
  notClaimed: l,
  notPhoneVerified: s,
  notEmailVerified: r,
  newMember: c,
  memberDeadline: d,
  newAccount: u,
  accountDeadline: h,
  theme: p,
  children: m,
  canSendMessages: _,
  channelFollowingUsersSeen: f,
  showLurkerModeUpsellPopout: E,
  showMemberVerificationModal: C,
  useReducedMotion: g,
  isStaff: x,
  guildJoinRequest: T
} = this.props, {
  shouldShowLurkerModeUpsellPopout: v,
  shouldShowLurkerModeSuccessPopout: N
} = this.state, S = {
  theme: p,
  useReducedMotion: g
};
if (e && !_) {
  if (S.message = B.Z.Messages.FOLLOW_NEWS_CHAT_INPUT_MESSAGE, null != f && f >= 1000) {
    let e = 1000 * Math.floor(f / 1000);
    S.subtitle = B.Z.Messages.FOLLOW_NEWS_CHAT_INPUT_SUBTITLE.format({
      count: e.toLocaleString()
    });
  }
  S.buttonText = B.Z.Messages.FOLLOW, S.onButtonClick = this.handleFollowAnnouncement, S.imageSrc = n(485195), t && (S.onSecondaryButtonClick = this.handleJoinServer, S.secondaryButtonText = B.Z.Messages.LURKER_MODE_CHAT_INPUT_BUTTON);
} else if (l)
  S.message = B.Z.Messages.GUILD_VERIFICATION_TEXT_NOT_CLAIMED, S.buttonText = B.Z.Messages.CLAIM_ACCOUNT, S.onButtonClick = C ? this.handleShowMemberVerification : this.handleClaimAccount, S.imageSrc = n(102811);
else if (C)
  switch (null == T ? void 0 : T.applicationStatus) {
    case I.wB.SUBMITTED:
      S.message = B.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, S.subtitle = B.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE, S.buttonText = B.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, S.onButtonClick = this.handleCancelApplication, S.imageSrc = n(281958);
      break;
    case I.wB.REJECTED:
      S.message = B.Z.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, S.buttonText = B.Z.Messages.MEMBER_VERIFICATION_LEARN_MORE, S.onButtonClick = this.handleViewApplicationRejection, S.imageSrc = n(809844);
      break;
    default:
      S.message = B.Z.Messages.MEMBER_VERIFICATION_CHAT_BLOCKER_TEXT, S.buttonText = B.Z.Messages.MEMBER_VERIFICATION_NOTICE_CTA, S.buttonColor = o.ButtonColors.BRAND, S.onButtonClick = this.handleShowMemberVerification;
      S.animationSrc = () => n.e('26176').then(n.t.bind(n, 737848, 19)).then(e => {
        let {
          default: t
        } = e;
        return t;
      });
  }
else
  s && !x ? (S.message = B.Z.Messages.GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED, S.buttonText = B.Z.Messages.VERIFY_PHONE, S.onButtonClick = this.handleVerifyPhone, S.imageSrc = n(98063)) : r ? (S.message = B.Z.Messages.GUILD_VERIFICATION_TEXT_NOT_VERIFIED, S.buttonText = B.Z.Messages.RESEND_VERIFICATION_EMAIL, S.onButtonClick = this.handleResendVerification, S.imageSrc = n(102811)) : c ? (S.message = B.Z.Messages.GUILD_VERIFICATION_TEXT_MEMBER_AGE.format({
    min: U.YeM.MEMBER_AGE
  }), S.countdown = d) : u && (S.message = B.Z.Messages.GUILD_VERIFICATION_TEXT_ACCOUNT_AGE.format({
    min: U.YeM.ACCOUNT_AGE
  }), S.countdown = h);
return (0, i.jsx)(o.Popout, {
  position: 'top',
  align: 'left',
  shouldShow: N,
  onRequestClose: () => this.setState({
    shouldShowLurkerModeSuccessPopout: !1
  }),
  renderPopout: this.renderSuccessPopout,
  children: e => (0, i.jsx)(k.Z, {
    ...S,
    children: (0, i.jsxs)(a.Fragment, {
      children: [
        this.renderMemberVerificationSuccessModal(),
        E ? (0, i.jsx)(o.Popout, {
          renderPopout: this.renderLurkerModeUpsellPopout,
          shouldShow: v,
          position: 'top',
          children: e => (0, i.jsx)(o.Clickable, {
            ...e,
            className: H.clickableChannelTextArea,
            onClick: this.handleTextAreaClick,
            children: m
          })
        }) : m
      ]
    })
  })
});
  }
  constructor(...e) {
super(...e), G(this, 'state', {
  submitting: !1,
  shouldShowLurkerModeUpsellPopout: !1,
  shouldShowLurkerModeSuccessPopout: !1
}), G(this, 'renderSuccessPopout', e => {
  let {
    closePopout: t
  } = e, {
    guild: n
  } = this.props;
  return s()(null != n, 'This guildID cannot be null'), (0, i.jsx)(S.Z, {
    onClose: t,
    guild: n
  });
}), G(this, 'handleCancelApplication', () => {
  let {
    guild: e
  } = this.props;
  if (null != e)
    (0, o.openModal)(t => (0, i.jsx)(o.ConfirmModal, {
      header: B.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
      confirmText: B.Z.Messages.CONFIRM,
      cancelText: B.Z.Messages.CANCEL,
      onConfirm: () => E.Z.removeGuildJoinRequest(e.id),
      confirmButtonColor: o.Button.Colors.BRAND,
      ...t,
      children: (0, i.jsx)(o.Text, {
        variant: 'text-md/normal',
        children: B.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
      })
    }));
}), G(this, 'handleViewApplicationRejection', () => {
  let {
    guild: e
  } = this.props;
  if (null != e)
    (0, o.openModalLazy)(async () => {
      let {
        default: t
      } = await n.e('3378').then(n.bind(n, 76075));
      return n => (0, i.jsx)(t, {
        guildId: e.id,
        ...n
      });
    });
}), G(this, 'handleShowMemberVerification', () => {
  let {
    guild: e
  } = this.props;
  null != e && (0, g.hk)(e.id);
}), G(this, 'handleClaimAccount', () => {
  p.j();
}), G(this, 'handleVerifyPhone', () => {
  (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('76540'),
      n.e('56931')
    ]).then(n.bind(n, 607018));
    return t => (0, i.jsx)(e, {
      reason: A.L.GUILD_PHONE_REQUIRED,
      ...t
    });
  }, {
    modalKey: w.M
  });
}), G(this, 'handleResendVerification', () => {
  var e;
  c.Z.verifyResend();
  let t = null === (e = y.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
  null != t && (0, o.openModal)(e => (0, i.jsx)(o.ConfirmModal, {
    ...e,
    header: B.Z.Messages.VERIFICATION_EMAIL_TITLE,
    confirmText: B.Z.Messages.OKAY,
    confirmButtonColor: o.Button.Colors.BRAND,
    children: (0, i.jsx)(o.Text, {
      variant: 'text-md/normal',
      children: B.Z.Messages.VERIFICATION_EMAIL_BODY.format({
        email: t
      })
    })
  }));
}), G(this, 'handleTextAreaClick', () => {
  let {
    showLurkerModeUpsellPopout: e
  } = this.props;
  this.setState({
    shouldShowLurkerModeUpsellPopout: e
  });
}), G(this, 'handleJoinServer', async () => {
  this.setState({
    submitting: !0
  });
  let e = this.props.channel.getGuildId();
  try {
    await u.Z.joinGuild(e, {
      source: U.vtS.CHAT_INPUT_BLOCKER
    });
  } catch {
    this.setState({
      submitting: !1
    });
  }
}), G(this, 'handleGoBack', () => {
  this.setState({
    submitting: !0
  }), (0, M.s1)().goBack();
}), G(this, 'handleFollowAnnouncement', () => {
  let {
    channel: e
  } = this.props;
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await n.e('54642').then(n.bind(n, 720589));
    return n => (0, i.jsx)(t, {
      channel: e,
      ...n
    });
  });
}), G(this, 'closeLurkerModeUpsellPopout', () => {
  this.setState({
    shouldShowLurkerModeUpsellPopout: !1
  });
}), G(this, 'renderLurkerModeUpsellPopout', () => {
  let {
    guild: e
  } = this.props;
  return s()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'), (0, i.jsx)(Z.Z, {
    type: Z.s.CHAT,
    guild: e,
    closePopout: this.closeLurkerModeUpsellPopout
  });
}), G(this, 'renderMemberVerificationSuccessModal', () => {
  let {
    guild: e,
    guildJoinRequest: t
  } = this.props, n = (null == t ? void 0 : t.applicationStatus) === I.wB.APPROVED;
  if (null == e || null == t || !n || (0, C.d3)(t))
    return null;
  let a = () => {
    E.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
  };
  return (0, _.EJ)(e) ? (0, i.jsx)(o.Modal, {
    renderModal: t => (0, i.jsx)(f.Z, {
      ...t,
      onAccept: a,
      guildId: e.id
    }),
    onCloseRequest: a
  }) : (0, i.jsx)(o.Modal, {
    renderModal: t => (0, i.jsx)(T.Z, {
      ...t,
      onAccept: a,
      guildName: e.name
    }),
    onCloseRequest: a
  });
});
  }
}

function F(e) {
  var t, n;
  let {
channel: l,
children: s
  } = e, o = l.getGuildId(), c = (0, r.e7)([L.Z], () => L.Z.getGuild(o)), d = (0, r.e7)([P.Z], () => P.Z.getCheck(o)), u = l.type === U.d4z.GUILD_ANNOUNCEMENT && null != c && c.hasFeature(U.oNc.NEWS), p = (0, r.e7)([R.Z], () => u ? R.Z.getFollowerStatsForChannel(l.id) : null), f = (0, r.e7)([N.Z], () => N.Z.isLurking(o)), E = (0, r.e7)([y.default], () => y.default.getCurrentUser()), g = null !== (t = null == E ? void 0 : E.isStaff()) && void 0 !== t && t, T = (0, r.e7)([j.ZP], () => {
var e, t;
return null != E && null !== (t = null === (e = j.ZP.getMember(o, E.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
  }), S = !!(null == c ? void 0 : c.hasVerificationGate()), Z = (T || d.notClaimed) && S, A = (0, r.e7)([v.Z], () => v.Z.shouldShowPopout(o)), M = (0, r.e7)([O.Z], () => O.Z.can(U.Plq.SEND_MESSAGES, l)), k = (0, r.e7)([x.Z], () => x.Z.getRequest(o)), [w, B] = (0, m.L_)(o), H = (0, m.Cc)(o), G = (null == k ? void 0 : k.applicationStatus) === I.wB.APPROVED;
  a.useEffect(() => {
if (!(!(0, _.EJ)(c) || !G || (0, C.d3)(k)) && null == H)
  B();
  }, [
c,
G,
k,
H
  ]);
  let F = {
...d,
guild: c,
isLurking: f,
isFollowable: u,
shouldShowLurkerModeSuccessPopout: A,
showLurkerModeUpsellPopout: f && null != c && D.Uu(U.Plq.SEND_MESSAGES, l),
theme: b.Z.theme,
canSendMessages: M,
channelFollowingUsersSeen: null != p ? p.usersSeenEver : null,
hasVerificationGate: S,
showMemberVerificationModal: Z,
guildJoinRequestStatus: null !== (n = null == k ? void 0 : k.applicationStatus) && void 0 !== n ? n : I.wB.STARTED,
guildJoinRequest: k,
useReducedMotion: h.Z.useReducedMotion,
isStaff: g,
isLoading: w,
clanInfo: H
  };
  return (0, i.jsx)(V, {
...F,
channel: l,
children: s
  });
}