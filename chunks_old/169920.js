"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("65597"),
  i = n("84339"),
  r = n("427953"),
  u = n("550766"),
  o = n("191225"),
  d = n("420444"),
  c = n("294926"),
  f = n("272505");

function h(e) {
  let {
    maxHeight: t,
    renderExternalHeader: n
  } = e, {
    connectedChannelId: h,
    connectedActivity: m,
    activityPanelMode: p
  } = (0, s.useStateFromStoresObject)([o.default], () => {
    var e;
    let t = o.default.getConnectedActivityChannelId();
    return {
      connectedChannelId: t,
      connectedActivity: null != t && null !== (e = o.default.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
      activityPanelMode: o.default.getActivityPanelMode()
    }
  }), E = (0, r.useIsActivitiesInTextEnabled)(h, "ActivityPanelUI"), g = (0, i.default)(h);
  if (l.useEffect(() => {
      null != h && null == g && (0, u.updateFocusedActivityLayout)(f.FocusedActivityLayouts.RESIZABLE)
    }, [h, g]), !E) return null;
  let S = null == m ? void 0 : m.applicationId;
  return p !== f.ActivityPanelModes.PANEL || null == S ? null : null == h || null == m || (0, d.default)(h) || null == S ? null : (0, a.jsx)(c.default, {
    maxHeight: t,
    connectedChannelId: h,
    renderExternalHeader: n
  })
}