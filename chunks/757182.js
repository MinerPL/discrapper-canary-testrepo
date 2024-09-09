n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(655922),
    a = n(420660),
    s = n(915863),
    o = n(689938);
function l(e) {
    let { activity: t, onAction: n, ButtonComponent: l = s.Z, ...u } = e;
    return (0, a.Z)(t)
        ? (0, r.jsx)(
              l,
              {
                  onClick: () => {
                      null == n || n();
                      let e = (0, i.Z)(t);
                      return window.open(null != e ? e : void 0);
                  },
                  fullWidth: !0,
                  ...u,
                  children: o.Z.Messages.WATCH
              },
              'play-activity'
          )
        : null;
}
