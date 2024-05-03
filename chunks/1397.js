"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
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
  m = n("645896"),
  p = n("353093"),
  E = n("717057"),
  C = n("693546"),
  g = n("881952"),
  S = n("305325"),
  _ = n("246364"),
  T = n("937111"),
  I = n("270801"),
  A = n("652730"),
  N = n("41776"),
  v = n("657352"),
  x = n("33154"),
  M = n("144114"),
  R = n("703656"),
  L = n("210887"),
  y = n("606956"),
  O = n("271383"),
  j = n("430824"),
  P = n("607744"),
  D = n("496675"),
  b = n("594174"),
  U = n("700785"),
  F = n("862679"),
  w = n("981631"),
  k = n("815660"),
  H = n("689938"),
  B = n("610083");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class V extends l.PureComponent {
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
      showMemberVerificationModal: a,
      clanInfo: l
    } = this.props;
    if (!a && !e.shouldShowLurkerModeSuccessPopout && t && null != n) {
      if ((0, p.isGuildAClan)(n) && null == l) return;
      this.setState({
        shouldShowLurkerModeSuccessPopout: !0
      })
    }
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
      showLurkerModeUpsellPopout: C,
      showMemberVerificationModal: g,
      useReducedMotion: S,
      isStaff: T,
      guildJoinRequest: I
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: A,
      shouldShowLurkerModeSuccessPopout: N
    } = this.state, v = {
      theme: h,
      useReducedMotion: S
    };
    if (e && !p) v.message = H.default.Messages.FOLLOW_NEWS_CHAT_INPUT_MESSAGE, null != E && E >= 1e3 && (v.subtitle = H.default.Messages.FOLLOW_NEWS_CHAT_INPUT_SUBTITLE.format({
      count: (1e3 * Math.floor(E / 1e3)).toLocaleString()
    })), v.buttonText = H.default.Messages.FOLLOW, v.onButtonClick = this.handleFollowAnnouncement, v.imageSrc = n("485195"), t && (v.onSecondaryButtonClick = this.handleJoinServer, v.secondaryButtonText = H.default.Messages.LURKER_MODE_CHAT_INPUT_BUTTON);
    else if (s) v.message = H.default.Messages.GUILD_VERIFICATION_TEXT_NOT_CLAIMED, v.buttonText = H.default.Messages.CLAIM_ACCOUNT, v.onButtonClick = g ? this.handleShowMemberVerification : this.handleClaimAccount, v.imageSrc = n("102811");
    else if (g) switch (null == I ? void 0 : I.applicationStatus) {
      case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
        v.message = H.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, v.subtitle = H.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE, v.buttonText = H.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, v.onButtonClick = this.handleCancelApplication, v.imageSrc = n("281958");
        break;
      case _.GuildJoinRequestApplicationStatuses.REJECTED:
        v.message = H.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, v.buttonText = H.default.Messages.MEMBER_VERIFICATION_LEARN_MORE, v.onButtonClick = this.handleViewApplicationRejection, v.imageSrc = n("809844");
        break;
      default:
        v.message = H.default.Messages.MEMBER_VERIFICATION_CHAT_BLOCKER_TEXT, v.buttonText = H.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA, v.buttonColor = o.ButtonColors.BRAND, v.onButtonClick = this.handleShowMemberVerification;
        v.animationSrc = () => n.e("26176").then(n.t.bind(n, "737848", 19)).then(e => {
          let {
            default: t
          } = e;
          return t
        })
    } else i && !T ? (v.message = H.default.Messages.GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED, v.buttonText = H.default.Messages.VERIFY_PHONE, v.onButtonClick = this.handleVerifyPhone, v.imageSrc = n("98063")) : r ? (v.message = H.default.Messages.GUILD_VERIFICATION_TEXT_NOT_VERIFIED, v.buttonText = H.default.Messages.RESEND_VERIFICATION_EMAIL, v.onButtonClick = this.handleResendVerification, v.imageSrc = n("102811")) : u ? (v.message = H.default.Messages.GUILD_VERIFICATION_TEXT_MEMBER_AGE.format({
      min: w.VerificationCriteria.MEMBER_AGE
    }), v.countdown = d) : c && (v.message = H.default.Messages.GUILD_VERIFICATION_TEXT_ACCOUNT_AGE.format({
      min: w.VerificationCriteria.ACCOUNT_AGE
    }), v.countdown = f);
    return (0, a.jsx)(o.Popout, {
      position: "top",
      align: "left",
      shouldShow: N,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: !1
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, a.jsx)(F.default, {
        ...v,
        children: (0, a.jsxs)(l.Fragment, {
          children: [this.renderMemberVerificationSuccessModal(), C ? (0, a.jsx)(o.Popout, {
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: A,
            position: "top",
            children: e => (0, a.jsx)(o.Clickable, {
              ...e,
              className: B.clickableChannelTextArea,
              onClick: this.handleTextAreaClick,
              children: m
            })
          }) : m]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), G(this, "state", {
      submitting: !1,
      shouldShowLurkerModeUpsellPopout: !1,
      shouldShowLurkerModeSuccessPopout: !1
    }), G(this, "renderSuccessPopout", e => {
      let {
        closePopout: t
      } = e, {
        guild: n
      } = this.props;
      return i()(null != n, "This guildID cannot be null"), (0, a.jsx)(v.default, {
        onClose: t,
        guild: n
      })
    }), G(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, o.openModal)(t => (0, a.jsx)(o.ConfirmModal, {
        header: H.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
        confirmText: H.default.Messages.CONFIRM,
        cancelText: H.default.Messages.CANCEL,
        onConfirm: () => C.default.removeGuildJoinRequest(e.id),
        confirmButtonColor: o.Button.Colors.BRAND,
        ...t,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: H.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
        })
      }))
    }), G(this, "handleViewApplicationRejection", () => {
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
    }), G(this, "handleShowMemberVerification", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, S.openMemberVerificationModal)(e.id)
    }), G(this, "handleClaimAccount", () => {
      h.openClaimAccountModal()
    }), G(this, "handleVerifyPhone", () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540"), n.e("7954")]).then(n.bind(n, "607018"));
        return t => (0, a.jsx)(e, {
          reason: M.ChangePhoneReason.GUILD_PHONE_REQUIRED,
          ...t
        })
      }, {
        modalKey: k.PHONE_VERIFICATION_MODAL_KEY
      })
    }), G(this, "handleResendVerification", () => {
      var e;
      u.default.verifyResend();
      let t = null === (e = b.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
      null != t && (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
        ...e,
        header: H.default.Messages.VERIFICATION_EMAIL_TITLE,
        confirmText: H.default.Messages.OKAY,
        confirmButtonColor: o.Button.Colors.BRAND,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: H.default.Messages.VERIFICATION_EMAIL_BODY.format({
            email: t
          })
        })
      }))
    }), G(this, "handleTextAreaClick", () => {
      let {
        showLurkerModeUpsellPopout: e
      } = this.props;
      this.setState({
        shouldShowLurkerModeUpsellPopout: e
      })
    }), G(this, "handleJoinServer", async () => {
      this.setState({
        submitting: !0
      });
      let e = this.props.channel.getGuildId();
      try {
        await c.default.joinGuild(e, {
          source: w.JoinGuildSources.CHAT_INPUT_BLOCKER
        })
      } catch {
        this.setState({
          submitting: !1
        })
      }
    }), G(this, "handleGoBack", () => {
      this.setState({
        submitting: !0
      }), (0, R.getHistory)().goBack()
    }), G(this, "handleFollowAnnouncement", () => {
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
    }), G(this, "closeLurkerModeUpsellPopout", () => {
      this.setState({
        shouldShowLurkerModeUpsellPopout: !1
      })
    }), G(this, "renderLurkerModeUpsellPopout", () => {
      let {
        guild: e
      } = this.props;
      return i()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, a.jsx)(x.default, {
        type: x.LurkerModeUpsellPopoutTypes.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), G(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? void 0 : t.applicationStatus) === _.GuildJoinRequestApplicationStatuses.APPROVED;
      if (null == e || null == t || !n || (0, g.isApprovedAndAcked)(t)) return null;
      let l = () => {
        C.default.ackUserGuildJoinRequest(e.id, t.joinRequestId)
      };
      return (0, p.isGuildAClan)(e) ? (0, a.jsx)(o.Modal, {
        renderModal: t => (0, a.jsx)(E.default, {
          ...t,
          onAccept: l,
          guildId: e.id
        }),
        onCloseRequest: l
      }) : (0, a.jsx)(o.Modal, {
        renderModal: t => (0, a.jsx)(I.default, {
          ...t,
          onAccept: l,
          guildName: e.name
        }),
        onCloseRequest: l
      })
    })
  }
}

function W(e) {
  var t, n;
  let {
    channel: s,
    children: i
  } = e, o = s.getGuildId(), u = (0, r.useStateFromStores)([j.default], () => j.default.getGuild(o)), d = (0, r.useStateFromStores)([P.default], () => P.default.getCheck(o)), c = s.type === w.ChannelTypes.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(w.GuildFeatures.NEWS), h = (0, r.useStateFromStores)([y.default], () => c ? y.default.getFollowerStatsForChannel(s.id) : null), E = (0, r.useStateFromStores)([N.default], () => N.default.isLurking(o)), C = (0, r.useStateFromStores)([b.default], () => b.default.getCurrentUser()), S = null !== (t = null == C ? void 0 : C.isStaff()) && void 0 !== t && t, I = (0, r.useStateFromStores)([O.default], () => {
    var e, t;
    return null != C && null !== (t = null === (e = O.default.getMember(o, C.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }), v = !!(null == u ? void 0 : u.hasVerificationGate()), x = (I || d.notClaimed) && v, M = (0, r.useStateFromStores)([A.default], () => A.default.shouldShowPopout(o)), R = (0, r.useStateFromStores)([D.default], () => D.default.can(w.Permissions.SEND_MESSAGES, s)), F = (0, r.useStateFromStores)([T.default], () => T.default.getRequest(o)), [k, H] = (0, m.useFetchClanInfo)(o), B = (0, m.useClanInfo)(o), G = (null == F ? void 0 : F.applicationStatus) === _.GuildJoinRequestApplicationStatuses.APPROVED;
  l.useEffect(() => {
    if (!(!(0, p.isGuildAClan)(u) || !G || (0, g.isApprovedAndAcked)(F))) null == B && H()
  }, [u, G, F, B]);
  let W = {
    ...d,
    guild: u,
    isLurking: E,
    isFollowable: c,
    shouldShowLurkerModeSuccessPopout: M,
    showLurkerModeUpsellPopout: E && null != u && U.canEveryoneRole(w.Permissions.SEND_MESSAGES, s),
    theme: L.default.theme,
    canSendMessages: R,
    channelFollowingUsersSeen: null != h ? h.usersSeenEver : null,
    hasVerificationGate: v,
    showMemberVerificationModal: x,
    guildJoinRequestStatus: null !== (n = null == F ? void 0 : F.applicationStatus) && void 0 !== n ? n : _.GuildJoinRequestApplicationStatuses.STARTED,
    guildJoinRequest: F,
    useReducedMotion: f.default.useReducedMotion,
    isStaff: S,
    isLoading: k,
    clanInfo: B
  };
  return (0, a.jsx)(V, {
    ...W,
    channel: s,
    children: i
  })
}