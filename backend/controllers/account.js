const mongoose = require("mongoose");
const { Account } = require("../connection");
const { authmiddleware } = require("../middlewares/auth");

async function getBalance(req, res) {
  const account = await Account.findOne({
    userid: req.userid,
  });

  res.json({
    balance: account.balance,
  });
}

async function transferMoney(req, res) {
  const session = await mongoose.startSession();
  session.startTransaction();
  const { amount, to } = req.body;
  const account = await Account.findOne({ userid: req.userid }).session(
    session
  );

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: "insufficient balance",
    });
  }
  const toaccount = await Account.findOne({ userid: to }).session(session);
  if (!toaccount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: "no account",
    });
  }

  await Account.updateOne(
    { userid: req.userid },
    { $inc: { balance: -amount } }
  ).session(session);

  await Account.updateOne(
    { userid: to },
    { $inc: { balance: amount } }
  ).session(session);
  await session.commitTransaction();
  res.json({
    msg: "transaction successful",
  });
}

module.exports = {
  transferMoney,
  getBalance,
};
