n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(481060),
    o = n(497505),
    c = n(415104),
    d = n(82969);
function u(e) {
    var t;
    let { quests: n, isFetching: s } = e,
        u = null;
    if (window.location.hash.length > 0) {
        let e = window.location.hash.slice(1);
        for (let t of n)
            if (t.id === e) {
                u = e;
                break;
            }
    }
    a.useEffect(() => {
        for (let e of n)
            if (e.id === u) {
                let e = document.getElementById('quest-tile-'.concat(u));
                null == e ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                break;
            }
    }, [n, u]);
    let _ = null != u,
        [E, h] = a.useState(window.innerWidth);
    a.useEffect(() => {
        let e = () => {
            h(window.innerWidth);
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []);
    let m = (t = E) >= 1610 ? 3 : t >= 1340 ? 2 : 1;
    return s && 0 === n.length
        ? (0, i.jsx)(l.Spinner, { className: d.spinner })
        : (0, i.jsx)(
              'div',
              {
                  className: d.container,
                  children: n.map((e, t) => {
                      let n = Math.floor(t / m);
                      return (0, i.jsx)(
                          c.Z,
                          {
                              quest: e,
                              questContent: o.jn.QUEST_HOME_DESKTOP,
                              contentPosition: t,
                              rowIndex: n,
                              className: r()(d.questTile, {
                                  [d.selected]: _ && e.id === u,
                                  [d.unselected]: _ && e.id !== u
                              })
                          },
                          e.id
                      );
                  })
              },
              null != u ? u : ''
          );
}
