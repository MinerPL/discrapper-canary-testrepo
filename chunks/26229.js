var i = n(200651),
    r = n(192379);
t.Z = r.memo(function (e) {
    let { layout: t, layoutSize: n, className: r, renderWidget: s } = e;
    return null != t
        ? (0, i.jsx)('div', {
              className: r,
              style: {
                  width: n.width,
                  height: n.height
              },
              children: t.widgets.map((e) => s(e, n))
          })
        : null;
});
