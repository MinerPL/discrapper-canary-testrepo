t.d(n, {
  Z: function() {
return r;
  }
});
var i = t(990547),
  l = t(213609),
  a = t(312871);

function r(e) {
  let {
sectionName: n,
numItems: t,
numVisibleItems: r
  } = e;
  return {
trackSectionImpressionRef: (0, a.Z)({
  onVisible: () => {
    (0, l.h)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.APP_LAUNCHER_SECTION,
      properties: {
        section_name: n,
        num_items: t,
        num_visible_items: r
      }
    });
  },
  threshold: 1
})
  };
}