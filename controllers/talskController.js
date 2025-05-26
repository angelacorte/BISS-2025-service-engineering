const talks = new Map();

exports.getAllTalks = (req, res) => {
    const talksArray = Array.from(talks.entries()).map(([talkId, votes]) => ({ talkId, votes }));
    res.json(talksArray);
};

exports.addTalk = (req, res) => {
    const { talkId } = req.body;
    if (!talkId) {
        return res.status(400).json({ error: 'Talk ID is required.' });
    }
    if (talks.has(talkId)) {
        return res.status(409).json({ error: 'Talk ID already exists.' });
    }
    talks.set(talkId, 0);
    res.status(201).json({ talkId, votes: 0 });
};

exports.voteTalk = (req, res) => {
    const { talkId } = req.params;
    if (!talks.has(talkId)) {
        return res.status(404).json({ error: 'Talk not found.' });
    }
    const votes = talks.get(talkId) + 1;
    talks.set(talkId, votes);
    res.json({ talkId, votes });
};

exports.deleteTalk = (req, res) => {
    const { talkId } = req.params;
    if (!talks.has(talkId)) {
        return res.status(404).json({ error: 'Talk not found.' });
    }
    talks.delete(talkId);
    res.json({ message: `Talk ${talkId} deleted.` });
};
