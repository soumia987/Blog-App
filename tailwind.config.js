module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // تأكد أن مسارات ملفاتك مضافة هنا
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Poppins"', 'sans-serif'],
        secondary: ['"Roboto"', 'sans-serif'],
      },
      // يمكنك إضافة ألوان مخصصة هنا أيضًا إن أردت
    },
  },
  plugins: [],
};
