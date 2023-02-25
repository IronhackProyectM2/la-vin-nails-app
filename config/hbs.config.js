const hbs = require("hbs");

hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper("isAdmin", (currentUser, options) => {
  if (currentUser.role === "admin") {
    return options.fn();
  } else {
    return options.inverse();
  }
})

hbs.registerHelper("isConfirmed", (date, options) => {
  if (date.dateState === "Confirmada") {
    return options.fn();
  } else {
    return options.inverse();
  }
})

hbs.registerHelper("isPending", (date, options) => {
  if (date.dateState === "Pendiente") {
    return options.fn();
  } else {
    return options.inverse();
  }
})