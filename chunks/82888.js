"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("399606"),
  i = n("110924"),
  r = n("867176"),
  o = n("566620"),
  u = n("317381"),
  d = n("917107"),
  c = n("9145"),
  f = n("918559");

function h(e) {
  let {
    maxHeight: t,
    renderExternalHeader: n
  } = e, {
    connectedChannelId: h,
    connectedActivity: m,
    activityPanelMode: p
  } = (0, s.useStateFromStoresObject)([u.default], () => {
    var e;
    let t = u.default.getConnectedActivityChannelId();
    return {
      connectedChannelId: t,
      connectedActivity: null != t && null !== (e = u.default.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
      activityPanelMode: u.default.getActivityPanelMode()
    }
  }), E = (0, r.useIsActivitiesInTextEnabled)(h, !1, "ActivityPanelUI"), C = (0, i.default)(h);
  if (l.useEffect(() => {
      null != h && null == C && (0, o.updateFocusedActivityLayout)(f.FocusedActivityLayouts.RESIZABLE)
    }, [h, C]), !E) return null;
  let g = null == m ? void 0 : m.applicationId;
  return p !== f.ActivityPanelModes.PANEL || null == g ? null : null == h || null == m || (0, d.default)(h) || null == g ? null : (0, a.jsx)(c.default, {
    maxHeight: t,
    connectedChannelId: h,
    renderExternalHeader: n
  })
}