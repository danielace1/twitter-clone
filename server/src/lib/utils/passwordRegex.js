export const passwordRegex = (password) => {
  const passRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>+\\-=~`])(?=.{8,})'
  );
  if (!passRegex.test(password)) {
    return {
      message:
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    };
  }
  return null;
};
