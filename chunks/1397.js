"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("893776"),
  d = n("528963"),
  c = n("749210"),
  f = n("607070"),
  h = n("391650"),
  m = n("693546"),
  p = n("881952"),
  E = n("305325"),
  C = n("246364"),
  g = n("937111"),
  S = n("270801"),
  _ = n("652730"),
  T = n("41776"),
  I = n("657352"),
  A = n("33154"),
  v = n("144114"),
  N = n("703656"),
  x = n("210887"),
  M = n("606956"),
  R = n("271383"),
  L = n("430824"),
  y = n("607744"),
  O = n("496675"),
  j = n("594174"),
  P = n("700785"),
  D = n("862679"),
  b = n("981631"),
  U = n("815660"),
  F = n("689938"),
  w = n("218022");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class H extends l.PureComponent {
  componentDidMount() {
    let {
      isFollowable: e,
      channelFollowingUsersSeen: t,
      channel: n
    } = this.props;
    e && null == t && d.default.fetchChannelFollowerStats(n.id)
  }
  componentDidUpdate(e) {
    let {
      shouldShowLurkerModeSuccessPopout: t,
      guild: n,
      showMemberVerificationModal: a
    } = this.props;
    !a && !e.shouldShowLurkerModeSuccessPopout && t && null != n && this.setState({
      shouldShowLurkerModeSuccessPopout: !0
    })
  }
  render() {
    let {
      isFollowable: e,
      isLurking: t,
      notClaimed: s,
      notPhoneVerified: i,
      notEmailVerified: r,
      newMember: u,
      memberDeadline: d,
      newAccount: c,
      accountDeadline: f,
      theme: h,
      children: m,
      canSendMessages: p,
      channelFollowingUsersSeen: E,
      showLurkerModeUpsellPopout: g,
      showMemberVerificationModal: S,
      useReducedMotion: _,
      isStaff: T,
      guildJoinRequest: I
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: A,
      shouldShowLurkerModeSuccessPopout: v
    } = this.state, N = {
      theme: h,
      useReducedMotion: _
    };
    if (e && !p) N.message = F.default.Messages.FOLLOW_NEWS_CHAT_INPUT_MESSAGE, null != E && E >= 1e3 && (N.subtitle = F.default.Messages.FOLLOW_NEWS_CHAT_INPUT_SUBTITLE.format({
      count: (1e3 * Math.floor(E / 1e3)).toLocaleString()
    })), N.buttonText = F.default.Messages.FOLLOW, N.onButtonClick = this.handleFollowAnnouncement, N.imageSrc = n("485195"), t && (N.onSecondaryButtonClick = this.handleJoinServer, N.secondaryButtonText = F.default.Messages.LURKER_MODE_CHAT_INPUT_BUTTON);
    else if (s) N.message = F.default.Messages.GUILD_VERIFICATION_TEXT_NOT_CLAIMED, N.buttonText = F.default.Messages.CLAIM_ACCOUNT, N.onButtonClick = S ? this.handleShowMemberVerification : this.handleClaimAccount, N.imageSrc = n("102811");
    else if (S) switch (null == I ? void 0 : I.applicationStatus) {
      case C.GuildJoinRequestApplicationStatuses.SUBMITTED:
        N.message = F.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, N.subtitle = F.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE, N.buttonText = F.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, N.onButtonClick = this.handleCancelApplication, N.imageSrc = n("281958");
        break;
      case C.GuildJoinRequestApplicationStatuses.REJECTED:
        N.message = F.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, N.buttonText = F.default.Messages.MEMBER_VERIFICATION_LEARN_MORE, N.onButtonClick = this.handleViewApplicationRejection, N.imageSrc = n("809844");
        break;
      default:
        N.message = F.default.Messages.MEMBER_VERIFICATION_CHAT_BLOCKER_TEXT, N.buttonText = F.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA, N.buttonColor = o.ButtonColors.BRAND, N.onButtonClick = this.handleShowMemberVerification;
        N.animationSrc = () => n.e("26176").then(n.t.bind(n, "737848", 19)).then(e => {
          let {
            default: t
          } = e;
          return t
        })
    } else i && !T ? (N.message = F.default.Messages.GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED, N.buttonText = F.default.Messages.VERIFY_PHONE, N.onButtonClick = this.handleVerifyPhone, N.imageSrc = n("98063")) : r ? (N.message = F.default.Messages.GUILD_VERIFICATION_TEXT_NOT_VERIFIED, N.buttonText = F.default.Messages.RESEND_VERIFICATION_EMAIL, N.onButtonClick = this.handleResendVerification, N.imageSrc = n("102811")) : u ? (N.message = F.default.Messages.GUILD_VERIFICATION_TEXT_MEMBER_AGE.format({
      min: b.VerificationCriteria.MEMBER_AGE
    }), N.countdown = d) : c && (N.message = F.default.Messages.GUILD_VERIFICATION_TEXT_ACCOUNT_AGE.format({
      min: b.VerificationCriteria.ACCOUNT_AGE
    }), N.countdown = f);
    return (0, a.jsx)(o.Popout, {
      position: "top",
      align: "left",
      shouldShow: v,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: !1
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, a.jsx)(D.default, {
        ...N,
        children: (0, a.jsxs)(l.Fragment, {
          children: [this.renderMemberVerificationSuccessModal(), g ? (0, a.jsx)(o.Popout, {
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: A,
            position: "top",
            children: e => (0, a.jsx)(o.Clickable, {
              ...e,
              className: w.clickableChannelTextArea,
              onClick: this.handleTextAreaClick,
              children: m
            })
          }) : m]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), k(this, "state", {
      submitting: !1,
      shouldShowLurkerModeUpsellPopout: !1,
      shouldShowLurkerModeSuccessPopout: !1
    }), k(this, "renderSuccessPopout", e => {
      let {
        closePopout: t
      } = e, {
        guild: n
      } = this.props;
      return i()(null != n, "This guildID cannot be null"), (0, a.jsx)(I.default, {
        onClose: t,
        guild: n
      })
    }), k(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, o.openModal)(t => (0, a.jsx)(o.ConfirmModal, {
        header: F.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
        confirmText: F.default.Messages.CONFIRM,
        cancelText: F.default.Messages.CANCEL,
        onConfirm: () => m.default.removeGuildJoinRequest(e.id),
        confirmButtonColor: o.Button.Colors.BRAND,
        ...t,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: F.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
        })
      }))
    }), k(this, "handleViewApplicationRejection", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("3378")]).then(n.bind(n, "76075"));
        return n => (0, a.jsx)(t, {
          guildId: e.id,
          ...n
        })
      })
    }), k(this, "handleShowMemberVerification", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, E.openMemberVerificationModal)(e.id)
    }), k(this, "handleClaimAccount", () => {
      h.openClaimAccountModal()
    }), k(this, "handleVerifyPhone", () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540"), n.e("7954")]).then(n.bind(n, "607018"));
        return t => (0, a.jsx)(e, {
          reason: v.ChangePhoneReason.GUILD_PHONE_REQUIRED,
          ...t
        })
      }, {
        modalKey: U.PHONE_VERIFICATION_MODAL_KEY
      })
    }), k(this, "handleResendVerification", () => {
      var e;
      u.default.verifyResend();
      let t = null === (e = j.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
      null != t && (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
        ...e,
        header: F.default.Messages.VERIFICATION_EMAIL_TITLE,
        confirmText: F.default.Messages.OKAY,
        confirmButtonColor: o.Button.Colors.BRAND,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: F.default.Messages.VERIFICATION_EMAIL_BODY.format({
            email: t
          })
        })
      }))
    }), k(this, "handleTextAreaClick", () => {
      let {
        showLurkerModeUpsellPopout: e
      } = this.props;
      this.setState({
        shouldShowLurkerModeUpsellPopout: e
      })
    }), k(this, "handleJoinServer", async () => {
      this.setState({
        submitting: !0
      });
      let e = this.props.channel.getGuildId();
      try {
        await c.default.joinGuild(e, {
          source: b.JoinGuildSources.CHAT_INPUT_BLOCKER
        })
      } catch {
        this.setState({
          submitting: !1
        })
      }
    }), k(this, "handleGoBack", () => {
      this.setState({
        submitting: !0
      }), (0, N.getHistory)().goBack()
    }), k(this, "handleFollowAnnouncement", () => {
      let {
        channel: e
      } = this.props;
      (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("83816")]).then(n.bind(n, "720589"));
        return n => (0, a.jsx)(t, {
          channel: e,
          ...n
        })
      })
    }), k(this, "closeLurkerModeUpsellPopout", () => {
      this.setState({
        shouldShowLurkerModeUpsellPopout: !1
      })
    }), k(this, "renderLurkerModeUpsellPopout", () => {
      let {
        guild: e
      } = this.props;
      return i()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, a.jsx)(A.default, {
        type: A.LurkerModeUpsellPopoutTypes.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), k(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? void 0 : t.applicationStatus) === C.GuildJoinRequestApplicationStatuses.APPROVED;
      if (null == e || null == t || !n || (0, p.isApprovedAndAcked)(t)) return null;
      let l = () => m.default.ackUserGuildJoinRequest(e.id, t.id);
      return (0, a.jsx)(o.Modal, {
        renderModal: t => (0, a.jsx)(S.default, {
          ...t,
          onAccept: l,
          guildName: e.name
        }),
        onCloseRequest: l
      })
    })
  }
}

function B(e) {
  var t, n;
  let {
    channel: l,
    children: s
  } = e, i = l.getGuildId(), o = (0, r.useStateFromStores)([L.default], () => L.default.getGuild(i)), u = (0, r.useStateFromStores)([y.default], () => y.default.getCheck(i)), d = l.type === b.ChannelTypes.GUILD_ANNOUNCEMENT && null != o && o.hasFeature(b.GuildFeatures.NEWS), c = (0, r.useStateFromStores)([M.default], () => d ? M.default.getFollowerStatsForChannel(l.id) : null), h = (0, r.useStateFromStores)([T.default], () => T.default.isLurking(i)), m = (0, r.useStateFromStores)([j.default], () => j.default.getCurrentUser()), p = null !== (t = null == m ? void 0 : m.isStaff()) && void 0 !== t && t, E = (0, r.useStateFromStores)([R.default], () => {
    var e, t;
    return null != m && null !== (t = null === (e = R.default.getMember(i, m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }), S = !!(null == o ? void 0 : o.hasVerificationGate()), I = (E || u.notClaimed) && S, A = (0, r.useStateFromStores)([_.default], () => _.default.shouldShowPopout(i)), v = (0, r.useStateFromStores)([O.default], () => O.default.can(b.Permissions.SEND_MESSAGES, l)), N = (0, r.useStateFromStores)([g.default], () => g.default.getRequest(i)), D = {
    ...u,
    guild: o,
    isLurking: h,
    isFollowable: d,
    shouldShowLurkerModeSuccessPopout: A,
    showLurkerModeUpsellPopout: h && null != o && P.canEveryoneRole(b.Permissions.SEND_MESSAGES, l),
    theme: x.default.theme,
    canSendMessages: v,
    channelFollowingUsersSeen: null != c ? c.usersSeenEver : null,
    hasVerificationGate: S,
    showMemberVerificationModal: I,
    guildJoinRequestStatus: null !== (n = null == N ? void 0 : N.applicationStatus) && void 0 !== n ? n : C.GuildJoinRequestApplicationStatuses.STARTED,
    guildJoinRequest: N,
    useReducedMotion: f.default.useReducedMotion,
    isStaff: p
  };
  return (0, a.jsx)(H, {
    ...D,
    channel: l,
    children: s
  })
}