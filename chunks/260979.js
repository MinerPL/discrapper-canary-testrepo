n(653041);
var i = n(735250), a = n(470079), l = n(965288), s = n(311496);
t.Z = a.memo(function (e) {
    let {
        channel: t,
        participants: n,
        maxTiles: a
    } = e;
    if (0 === n.length)
        return null;
    let r = [];
    for (let e = 0; e < a; e++)
        if (e < n.length) {
            let a = n[e];
            r.push((0, i.jsx)(l.Z, {
                channel: t,
                participant: a
            }, a.id));
        } else
            r.push((0, i.jsx)(l.y, {}, e));
    return (0, i.jsx)('div', {
        className: s.participants,
        children: r
    });
});
