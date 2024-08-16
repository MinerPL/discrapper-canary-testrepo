var r = n(192853),
    i = n(690244),
    a = n(148025),
    s = r('RegExp.prototype.exec'),
    o = i('%TypeError%');
e.exports = function (e) {
    if (!a(e)) throw new o('`regex` must be a RegExp');
    return function (t) {
        return null !== s(e, t);
    };
};
