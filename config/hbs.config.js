const hbs = require("hbs");

hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper("isAdmin", (currentUser, options) => {
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

hbs.registerHelper("isAuthenticated", (logedUser, options) => {
  if (logedUser?.id) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isFirstTurn", (date, options) => {
  if (date.turn === 1) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isSecondTurn", (date, options) => {
  if (date.turn === 2) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isThirdTurn", (date, options) => {
  if (date.turn === 3) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isFourthTurn", (date, options) => {
  if (date.turn === 4) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isFifthTurn", (date, options) => {
  if (date.turn === 5) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isSixthTurn", (date, options) => {
  if (date.turn === 6) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isSeventhTurn", (date, options) => {
  if (date.turn === 7) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isEighthTurn", (date, options) => {
  if (date.turn === 8) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

// hbs.registerHelper("isApoimentTomorrow2", (date, options) => {
//   const tomorrow = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000); // i = a cada día desde hoy siendo tomorrow 1 así en adelante
//   const tomorrowDate = tomorrow.toISOString().split("T")[0]; //da la fecha de mañana en formato de nuestra base de datos
//   if (tomorrowDate === date.date) {
//     return options.fn();
//   }
// });
