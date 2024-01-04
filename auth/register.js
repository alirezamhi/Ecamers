exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const now = Date.now();
    const salt = await bc.genSalt(10);
    const hashedPasssword = await bc.hash(password, salt);
    const user = await db.user.create({
      data: { username, password: hashedPasssword },
    });

    return res.json({ msg: `user ${user.username} registerd` });
  } catch (e) {
    next(e);
  }
};
