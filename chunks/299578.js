var n = r(807419), _ = r(143283), a = r(706627), i = r(19235), o = /^\[object .+?Constructor\]$/, E = Object.prototype, s = Function.prototype.toString, c = E.hasOwnProperty, I = RegExp('^' + s.call(c).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
t.exports = function (t) {
    return !(!a(t) || _(t)) && (n(t) ? I : o).test(i(t));
};
