const generateFibonacciSequence = (n) => {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
};

const getFibonacci = (req, res) => {
    const memberCount = parseInt(req.params.memberCount);

    if (isNaN(memberCount) || memberCount < 1 || memberCount > 100) {
        return res.status(400)
            .json({error:'memberCount must be an integer between 1-100.'});
    }

    const sequence = generateFibonacciSequence(memberCount);
    const total = sequence.reduce((acc, num) => acc + num, 0);

    res.json({
        "member-count": memberCount,
        "sequence": sequence,
        "total": total
    });
};

module.exports = { getFibonacci };
