n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(557711),
    a = n(620662),
    s = n(503438),
    o = n(981631),
    l = n(120297);
function u(e) {
    let { activity: t, user: n, guildId: u, channelId: c, source: d, look: _, color: E, onAction: f } = e;
    return null != t && (0, a.Z)(t, o.xjy.SYNC) && (0, s.Z)(t)
        ? (0, r.jsx)(
              i.Z,
              {
                  className: l.button,
                  size: l.buttonSize,
                  look: _,
                  color: E,
                  user: n,
                  activity: t,
                  guildId: null != u ? u : void 0,
                  channelId: c,
                  source: d,
                  onAction: f
              },
              'sync'
          )
        : null;
}
