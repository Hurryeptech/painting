export const validatePassword = async (_: any, value: any) => {
  if (value.length < 8) {
    throw new Error("Password must be at least 8 characters long!");
  }
  if (value.length > 16) {
    throw new Error("Password must be at most 16 characters long!");
  }
  if (!/^\S*$/.test(value)) {
    throw new Error("Password must not contain spaces!");
  }
  if (!/[A-Z]/.test(value)) {
    throw new Error("Password must contain at least one uppercase letter!");
  }
  if (!/[a-z]/.test(value)) {
    throw new Error("Password must contain at least one lowercase letter!");
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    throw new Error("Password must contain at least one special character!");
  }
};
