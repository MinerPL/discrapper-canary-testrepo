n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(704215),
  o = n(481060),
  l = n(980591),
  u = n(100527),
  c = n(906732),
  d = n(243778),
  _ = n(970731),
  E = n(594174),
  f = n(785717),
  h = n(27144),
  p = n(652853),
  m = n(171368),
  I = n(228168),
  T = n(921944),
  g = n(689938),
  S = n(915108),
  A = n(881828);
let N = 32;

function v(e) {
  let {
user: t,
children: n,
onClose: v
  } = e, {
analyticsLocations: O
  } = (0, c.ZP)(u.Z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP), {
context: R
  } = (0, f.KZ)(), {
profileType: C,
primaryColor: y
  } = (0, p.z)(), {
selfPastActivityEnabled: D
  } = (0, h.z)({
location: 'UserProfileActivityEducationTooltipPopout'
  }), L = (0, a.e7)([E.default], () => {
var e;
return (null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
  }), b = D && L && C === I.y0.BITE_SIZE, [M, P] = i.useState(!1);
  (0, l.Z)(() => P(!0), b ? 200 : null);
  let U = M ? [s.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP] : [],
[w, x] = (0, d.US)(U),
G = () => {
  (0, m.openUserProfileModal)({
    userId: t.id,
    section: I.oh.ACTIVITY,
    sourceAnalyticsLocations: O,
    ...R
  }), null == v || v();
};
  return (0, r.jsx)(o.Popout, {
shouldShow: null != w,
spacing: null != y ? N : 28,
renderPopout: e => {
  let {
    position: t,
    closePopout: n,
    setPopoutRef: i
  } = e;
  return (0, r.jsx)(o.Dialog, {
    ref: i,
    children: (0, r.jsx)(_.ZP, {
      header: g.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_EDUCATION_TOOLTIP_HEADER,
      content: g.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_EDUCATION_TOOLTIP_BODY,
      className: S.tooltip,
      asset: (0, r.jsx)('img', {
        alt: '',
        src: A,
        className: S.asset
      }),
      buttonCTA: g.Z.Messages.CHECK_IT_OUT,
      secondaryButtonCTA: g.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS,
      buttonProps: {
        color: o.ButtonColors.BRAND_INVERTED,
        size: o.Button.Sizes.SMALL
      },
      secondaryButtonProps: {
        color: o.ButtonColors.BRAND,
        size: o.Button.Sizes.SMALL
      },
      buttonLayout: _._F.STACKED,
      caretPosition: 'right' === t ? _.DF.LEFT_TOP : _.DF.RIGHT_TOP,
      onClick: G,
      onSecondaryClick: n,
      markAsDismissed: x
    })
  });
},
children: e => n({
  ...e,
  onAutoDismiss: () => x(T.L.AUTO_DISMISS)
})
  });
}