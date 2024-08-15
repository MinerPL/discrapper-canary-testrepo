n.d(t, {
  v: function() {
return p;
  }
});
var s = n(497505),
  o = n(988303),
  a = n(941348),
  r = n(658590),
  l = n(647365),
  i = n(743294);
let c = {
component: l.Z,
getCollapsedHeight: () => 40,
getPreEnrollmentExpandedHeight: () => 240,
getPostEnrollmentBackgroundImage: e => 'linear-gradient(90deg, '.concat(e.config.colors.primary, ', ').concat(e.config.colors.secondary, ')'),
getPreEnrollmentBackgroundColor: e => void 0,
canCollapseOnBlur: e => {
  var t;
  return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) == null;
},
shouldExpandOnQuestComplete: e => !0,
getVerticalPadding: () => 8
  },
  d = i.Li,
  u = {
component: a.Z,
getCollapsedHeight: e => {
  var t;
  return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null ? 66 : 40;
},
getPreEnrollmentExpandedHeight: () => 270,
getPostEnrollmentBackgroundImage: () => 'linear-gradient(90deg, '.concat(i.aY, ', ').concat(i.v6, ')'),
getPreEnrollmentBackgroundColor: e => 'var(--home-background)',
canCollapseOnBlur: e => !0,
shouldExpandOnQuestComplete: e => !1,
getVerticalPadding: () => d
  },
  p = (e, t, n) => {
var a;
let l = (null === (a = e.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null,
  i = !l && t === o.P.V2 || l && n === o.P.V2 || (0, r.a)(e),
  d = i ? u : c;
return {
  component: d.component,
  collapsedHeight: d.getCollapsedHeight(e),
  preEnrollmentExpandedHeight: d.getPreEnrollmentExpandedHeight(e),
  postEnrollmentBackgroundImage: d.getPostEnrollmentBackgroundImage(e),
  preEnrollmentBackgroundColor: d.getPreEnrollmentBackgroundColor(e),
  canCollapseOnBlur: d.canCollapseOnBlur(e),
  shouldExpandOnQuestComplete: d.shouldExpandOnQuestComplete(e),
  paddingVertical: d.getVerticalPadding(),
  trackingCtx: {
    content: i ? s.jn.QUEST_BAR_V2 : s.jn.QUEST_BAR
  }
};
  };