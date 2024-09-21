const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middlewares/auth");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

async function userSignup(req, res) {
  const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Invalid inputs.",
        });
    }

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
        return res.status(400).json({
            message: "Username already taken.",
        });
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    const userId = user._id;
    const token = jwt.sign({ userId }, JWT_SECRET);

    res.status(201).json({
        message: "User created successfully",
        token,
    });
}

const loginBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

async function userLogin(req, res) {
  const { success } = loginBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken or invalid inputs.",
    });
  }

  const user = User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }
}

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

async function userModifyData(req, res) {
  const { success } = updateBody.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      message: "Error while updating",
    });
  }
  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Updated successfully",
  });
}

async function getAllUsers(params) {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
}

module.exports = {
  userSignup,
  userLogin,
  userModifyData,
  getAllUsers,
};
