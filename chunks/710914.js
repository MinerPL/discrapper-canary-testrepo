n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(497505),
    o = n(415104),
    c = n(82969);
function d(e) {
    var t;
    let { quests: n, selectedQuestId: s } = e;
    a.useEffect(() => {
        for (let e of n)
            if (e.id === s) {
                let e = document.getElementById('quest-tile-'.concat(s));
                null == e ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                break;
            }
    }, [n, s]);
    let d = null != s,
        [u, _] = a.useState(window.innerWidth);
    a.useEffect(() => {
        let e = () => {
            _(window.innerWidth);
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []);
    let E = (t = u) >= 1610 ? 3 : t >= 1340 ? 2 : 1;
    return (0, i.jsx)(
        'div',
        {
            className: c.container,
            children: n.map((e, t) => {
                let n = Math.floor(t / E);
                return (0, i.jsx)(
                    o.Z,
                    {
                        quest: e,
                        questContent: l.jn.QUEST_HOME_DESKTOP,
                        contentPosition: t,
                        rowIndex: n,
                        className: r()(c.questTile, {
                            [c.selected]: d && e.id === s,
                            [c.unselected]: d && e.id !== s
                        })
                    },
                    e.id
                );
            })
        },
        null != s ? s : ''
    );
}
