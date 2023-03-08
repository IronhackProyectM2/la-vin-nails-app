const hbs = require("hbs");

hbs.registerPartials(`${__dirname}/../views/partials`);


hbs.registerHelper("phathActive", (currentPath, desiredPath) => {
  return currentPath === desiredPath ? "active" : "";
});

hbs.registerHelper("isAdmin", (currentUser, options) => {
  console.log(currentUser);
  if (currentUser.role === "admin") {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isConfirmed", (date, options) => {
  if (date.dateState === "Confirmada") {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isPending", (date, options) => {
  if (date.dateState === "Pendiente") {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isAuthenticated", (currentUser, options) => {
  if (currentUser) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("dateInTurn", function (dates, turn, options) {
  const turns = dates.map((x) => x.turn);
  console.log(turns);

  if (turns.includes(turn)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper("ifTurns", (date, turn, options) => {
  if (date.turn === turn) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("ifDate", (date, currentUser, options) => {
  if (date.user.id === currentUser.id) {
    return options.fn();
  } else {
    return options.inverse();
  }
});
