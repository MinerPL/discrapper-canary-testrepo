t.d(n, {
    Z: function () {
        return o;
    }
});
var a = t(735250);
t(470079);
var r = t(793030),
    s = t(689938),
    i = t(51527);
function o(e) {
    let { detectedGame: n } = e;
    return 0 === n.publishers.length
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)(r.X6, {
                      className: i.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: s.Z.Messages.GAME_PROFILE_PUBLISHER
                  }),
                  (0, a.jsx)(r.xv, {
                      variant: 'text-sm/normal',
                      children: n.publishers.join(', ')
                  })
              ]
          });
}
