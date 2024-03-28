"use strict";
l.r(t), l.d(t, {
  openCreateGuildModal: function() {
    return _
  },
  updateCreateGuildModal: function() {
    return I
  }
});
var n = l("735250");
l("470079");
var s = l("481060"),
  a = l("390885"),
  r = l("626135"),
  i = l("299402"),
  o = l("675999"),
  u = l("981631"),
  c = l("630724");

function d(e, t, l, s) {
  return (0, n.jsx)(i.default, {
    onSuccess: t => {
      a.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.SUCCESS), e.onClose(), null == s || s(t)
    },
    onSlideChange: e => (function(e, t) {
      switch (e) {
        case o.CreateGuildSlideTypes.GUILD_TEMPLATES:
          a.default.flowStepOrStart(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.GUILD_TEMPLATES), r.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Create Guild Templates",
            location: t
          });
          break;
        case o.CreateGuildSlideTypes.CUSTOMIZE_GUILD:
          a.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.GUILD_CREATE), r.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Create Guild Step 2",
            location: t
          });
          break;
        case o.CreateGuildSlideTypes.CREATION_INTENT:
          r.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Server Intent Discovery",
            location: t
          });
          break;
        case o.CreateGuildSlideTypes.JOIN_GUILD:
          a.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.JOIN_GUILD), r.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Join Guild",
            location: t
          })
      }
    })(e, l),
    initialSlide: t,
    hasJoinButton: !0,
    ...e
  })
}
let _ = e => {
    let {
      initialSlide: t,
      location: l,
      onSuccess: n
    } = e;
    (0, s.openModal)(e => d(e, t, l, n), {
      modalKey: o.CREATE_GUILD_MODAL_KEY
    })
  },
  I = e => {
    let {
      slide: t,
      location: l
    } = e;
    (0, s.updateModal)(o.CREATE_GUILD_MODAL_KEY, e => d(e, t, l))
  }