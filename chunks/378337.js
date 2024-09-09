t.d(n, {
    Z: function () {
        return i;
    }
}),
    t(653041),
    t(47120);
var r = t(131704);
function i(e) {
    let n = [];
    for (let t = 0; t < e._categories.length; t++) {
        let i = e._categories[t].channel,
            o = e[i.id].map((e) => e.channel).filter((e) => r.iR.has(e.type));
        if (null != o && 0 !== o.length) for (let e of ('null' !== i.id && n.push(i), o)) n.push(e);
    }
    return n;
}
