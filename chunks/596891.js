"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(92114),
  l = n(194359),
  u = n(367907),
  _ = n(592125),
  d = n(699516),
  c = n(9156),
  E = n(594174),
  I = n(621600),
  T = n(82554),
  h = n(981631),
  S = n(689938),
  f = n(40834);
t.Z = e => {
  let {
    userId: t,
    reportId: n,
    reportName: N,
    showBlock: A,
    showMute: m
  } = e, O = _.Z.getDMFromUserId(t), R = (0, s.e7)([c.ZP], () => null == O ? null : c.ZP.isChannelMuted(null, O)), [C, p] = r.useState(null != R && R), [g, L] = r.useState(!1), v = (0, s.e7)([E.default], () => E.default.getUser(t), [t]), D = (0, s.e7)([d.Z], () => d.Z.getRelationshipType(t), [t]) === h.OGo.BLOCKED;
  r.useEffect(() => {
    L(D)
  }, [D]);
  let M = r.useCallback(() => {
      L(!0), u.ZP.trackWithMetadata(h.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
        other_user_id: t,
        report_id: n
      }), l.Z.addRelationship({
        userId: t,
        context: {
          location: "ReportMenuBlockUser-iOS"
        },
        type: h.OGo.BLOCKED
      })
    }, [t, n]),
    P = r.useCallback(() => {
      null != O && (p(!0), u.ZP.trackWithMetadata(h.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
        other_user_id: t,
        report_id: n
      }), a.Z.updateChannelOverrideSettings(null, O, {
        muted: !0
      }, I.ZB.Muted))
    }, [O, t, n]),
    y = N === T.b.USER,
    U = y ? S.Z.Messages.REPORTS_MUTE_USER_ELEMENT_DESCRIPTION : S.Z.Messages.MOBILE_REPORTS_MUTE_ELEMENT_DESCRIPTION,
    b = y ? S.Z.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : S.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION,
    G = y ? S.Z.Messages.REPORTS_BLOCK_AND_MUTE_USER_ELEMENT_DESCRIPTION : S.Z.Messages.MOBILE_REPORTS_BLOCK_AND_MUTE_ELEMENT_DESCRIPTION,
    w = m || A;
  return null != v && w ? (0, i.jsxs)("div", {
    className: f.container,
    children: [(0, i.jsx)(o.Text, {
      className: f.description,
      variant: "text-sm/normal",
      children: A && m ? G : A ? b : U
    }), (0, i.jsxs)("div", {
      className: f.userContainer,
      children: [(0, i.jsxs)("div", {
        className: f.userInfo,
        children: [(0, i.jsx)(o.Avatar, {
          size: o.AvatarSizes.SIZE_32,
          src: v.getAvatarURL(void 0, 32),
          className: f.avatar,
          "aria-label": v.username
        }), (0, i.jsx)(o.Text, {
          className: f.userName,
          variant: "text-sm/semibold",
          children: v.username
        }), !v.isPomelo() && (0, i.jsxs)(o.Text, {
          variant: "text-sm/normal",
          children: ["#", v.discriminator]
        })]
      }), (0, i.jsxs)("div", {
        className: f.actionButtonsContainer,
        children: [m && (0, i.jsx)(o.Button, {
          onClick: P,
          disabled: C,
          size: o.Button.Sizes.SMALL,
          color: o.Button.Colors.PRIMARY,
          children: C ? S.Z.Messages.MUTED : S.Z.Messages.MUTE
        }), A && (0, i.jsx)(o.Button, {
          onClick: M,
          disabled: g,
          size: o.Button.Sizes.SMALL,
          color: o.Button.Colors.RED,
          children: g ? S.Z.Messages.BLOCKED : S.Z.Messages.BLOCK
        })]
      })]
    })]
  }) : null
}