t.d(n, {
  Z: function() {
return o;
  }
});
var i = t(990547),
  l = t(442837),
  a = t(213609),
  r = t(541099),
  s = t(312871);

function o(e) {
  let {
applicationId: n,
sectionName: t,
sectionPosition: o
  } = e, c = (0, l.e7)([r.Z], () => r.Z.entrypoint());
  return {
trackItemImpressionRef: (0, s.Z)({
  onVisible: () => {
    (0, a.h)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.APP_LAUNCHER_ITEM,
      properties: {
        application_id: n,
        section_name: t,
        section_position: o,
        source: c
      }
    });
  },
  threshold: 1
})
  };
}