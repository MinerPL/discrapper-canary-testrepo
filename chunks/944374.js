let r = n(689118), i = n(988324).Buffer, a = n(1199);
function o(e) {
    a.call(this, e), this.enc = 'pem';
}
r(o, a), e.exports = o, o.prototype.decode = function (e, t) {
    let n = e.toString().split(/[\r\n]+/g), r = t.label.toUpperCase(), o = /^-----(BEGIN|END) ([^-]+)-----$/, s = -1, l = -1;
    for (let e = 0; e < n.length; e++) {
        let t = n[e].match(o);
        if (null !== t) {
            if (t[2] === r) {
                if (-1 === s) {
                    if ('BEGIN' !== t[1])
                        break;
                    s = e;
                } else {
                    if ('END' !== t[1])
                        break;
                    l = e;
                    break;
                }
            }
        }
    }
    if (-1 === s || -1 === l)
        throw Error('PEM section not found for: ' + r);
    let u = n.slice(s + 1, l).join('');
    u.replace(/[^a-z0-9+/=]+/gi, '');
    let c = i.from(u, 'base64');
    return a.prototype.decode.call(this, c, t);
};
