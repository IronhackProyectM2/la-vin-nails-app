const hbs = require("hbs");

hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper("isAdmin", (currentUser, options) => {
  if (currentUser.role === "admin") {
    return options.fn();
  } else {
    return options.inverse();
  }
})
