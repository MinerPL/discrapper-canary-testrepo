"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("399606"),
  i = n("846519"),
  r = n("481060"),
  o = n("317632"),
  u = n("174767"),
  d = n("594174"),
  c = n("689938"),
  f = n("794791");

function E(e) {
  let {
    inboxIconRef: t,
    recentsPopoutShown: n
  } = e, [E, _] = a.useState(!1), T = (0, l.useStateFromStores)([o.default], () => o.default.getLastUnseenInvite()), m = (0, l.useStateFromStores)([d.default], () => null != T ? d.default.getUser(T.inviter_id) : null);
  return (a.useEffect(() => {
    n && _(!1)
  }, [n]), a.useEffect(() => {
    if (null == T) {
      _(!1);
      return
    }(0, u.updateInviteStatus)(T), _(!0);
    let e = new i.Timeout;
    return e.start(5e3, () => {
      _(!1)
    }), () => {
      e.stop()
    }
  }, [T]), E && null != T && null != m) ? (0, s.jsxs)(r.TooltipLayer, {
    tooltipClassName: f.tooltip,
    tooltipContentClassName: f.tooltipContent,
    targetElementRef: t,
    position: "bottom",
    color: r.TooltipColors.BLACK,
    children: [(0, s.jsxs)("div", {
      className: f.iconContainer,
      children: [(0, s.jsx)("img", {
        className: f.inviteImage,
        src: T.application_asset,
        alt: "Game Invite"
      }), (0, s.jsx)("div", {
        className: f.offsetAvatarContainer,
        children: (0, s.jsx)(r.Avatar, {
          "aria-label": "Inviter",
          className: f.inviterImage,
          src: m.getAvatarURL(null, 24),
          size: r.AvatarSizes.SIZE_24
        })
      })]
    }), (0, s.jsxs)("div", {
      className: f.titleContainer,
      children: [(0, s.jsx)(r.Text, {
        className: f.__invalid_title,
        variant: "text-xs/semibold",
        children: c.default.Messages.GAME_INVITES_INVITE_FROM.format({
          username: m.username
        })
      }), (0, s.jsx)(r.Text, {
        className: f.__invalid_subtitle,
        variant: "text-xxs/medium",
        children: T.application_name
      })]
    })]
  }) : null
}