import User from "./auth.model.js";
import ApiError from "../utils/api-error.js";
import {
  generateAccessToken,
  generateRefreshToken,
  generateToken,
  generateResetToken
} from "../utils/jwt.utils.js";

const register = async ({ name, email, password, role }) => {
  // find user
  const found = await User.findOne({ email });
  if (found) {
    throw ApiError.alreadyExist();
  }
  const { rawToken, hashedToken } = generateResetToken();
  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken: hashedToken,
  });
  // send raw token to user hashed token to db
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw ApiError.forbidden("Invalid Credentials !");
  }

  // Somehow I will check password

  if (!user.isVerified) {
    throw ApiError.forbidden("Pls verify before going out further.");
  }

  const accessToken = generateAccessToken({ id: user._id, role: user.role });
  const refreshToken = generateRefreshToken({ id: user._id });

  user.refreshToken = generateToken(refreshToken);
  await user.save({ validateBeforeSave: false });

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.refreshToken;

  // try to send cookies using cookie-parser
  return { user: userObj, accessToken, refreshToken };
};

export { register };
