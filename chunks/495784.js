"use strict";
t.r(s);
var a = t("913527"),
  l = t.n(a),
  n = t("524437"),
  i = t("951716"),
  o = t("605236"),
  r = t("972830"),
  d = t("430824"),
  c = t("594174"),
  u = t("374023"),
  N = t("709054"),
  m = t("645792"),
  _ = t("981631"),
  E = t("921944");
s.default = {
  init(e) {
    let {
      hasModalOpen: s,
      openModal: t
    } = e;
    !u.ProcessArgs.isDisallowPopupsSet() && (0, r.addPostConnectionCallback)(() => {
      if ((0, i.default)()) return;
      let e = c.default.getCurrentUser(),
        a = null != e && 7 > l()().diff(l()(N.default.extractTimestamp(e.id)), "days"),
        r = null != Object.values(d.default.getGuilds()).find(e => e.hasFeature(_.GuildFeatures.HUB)),
        u = !(0, o.isDismissibleContentDismissed)(n.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL);
      !(a || s() || r || !u) && (0, m.backToSchoolEnabled)() && (m.default.trackExposure({
        location: "8b792a_1"
      }), t(), (0, o.requestMarkDismissibleContentAsShown)(n.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL))
    })
  },
  hideHubUpsell() {
    (0, o.markDismissibleContentAsDismissed)(n.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL, {
      dismissAction: E.ContentDismissActionType.AUTO
    })
  }
}