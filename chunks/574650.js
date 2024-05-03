"use strict";
n.r(t), n("653041"), n("47120");
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("266067"),
  r = n("613828"),
  o = n("442837"),
  u = n("481060"),
  d = n("430824"),
  c = n("914010"),
  f = n("693546"),
  E = n("305325"),
  _ = n("246364"),
  m = n("937111"),
  T = n("981631"),
  I = n("176505"),
  p = n("689938"),
  h = n("636081"),
  N = n("497748");
t.default = () => {
  var e, t;
  let a = (0, o.useStateFromStores)([c.default], () => c.default.getGuildId(), []),
    S = (0, o.useStateFromStores)([d.default], () => d.default.getGuild(a), [a]),
    C = (0, o.useStateFromStores)([m.default], () => null != a ? m.default.getRequest(a) : null, [a]),
    A = (0, r.useLocation)(),
    g = (null === (e = (0, i.matchPath)(A.pathname, T.Routes.CHANNEL(null == S ? void 0 : S.id, I.StaticChannelRoute.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
  if (null == S || !S.hasVerificationGate() || g) return null;
  let M = null !== (t = null == C ? void 0 : C.applicationStatus) && void 0 !== t ? t : _.GuildJoinRequestApplicationStatuses.STARTED,
    R = null,
    v = null,
    O = null,
    x = [h.notice, N.notice];
  switch (M) {
    case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
      R = p.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, v = p.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, O = () => {
        (0, u.openModal)(e => (0, s.jsx)(u.ConfirmModal, {
          header: p.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
          confirmText: p.default.Messages.CONFIRM,
          cancelText: p.default.Messages.CANCEL,
          onConfirm: () => f.default.removeGuildJoinRequest(S.id),
          confirmButtonColor: u.Button.Colors.BRAND,
          ...e,
          children: (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: p.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
          })
        }))
      };
      break;
    case _.GuildJoinRequestApplicationStatuses.REJECTED:
      R = p.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, v = p.default.Messages.MEMBER_VERIFICATION_LEARN_MORE, O = () => {
        (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("3378")]).then(n.bind(n, "76075"));
          return t => (0, s.jsx)(e, {
            guildId: S.id,
            ...t
          })
        })
      }, x.push(h.error);
      break;
    default:
      R = p.default.Messages.MEMBER_VERIFICATION_NOTICE_TEXT, v = p.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA, O = () => {
        (0, E.openMemberVerificationModal)(S.id)
      }
  }
  return (0, s.jsxs)("div", {
    className: l()(...x),
    children: [(0, s.jsx)(u.Text, {
      className: h.header,
      variant: "text-sm/normal",
      children: R
    }), (0, s.jsx)(u.Button, {
      className: h.button,
      look: u.Button.Looks.OUTLINED,
      color: u.Button.Colors.WHITE,
      size: u.Button.Sizes.NONE,
      onClick: O,
      children: v
    })]
  })
}