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

hbs.registerHelper("isAuthenticated", (user, options) => {
  if (user?.id) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isNotAuthenticated", (user, options) => {
  if (!user?.id) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper("isApoimentToday", (date, options) => {
  const todayDate = new Date().toISOString().split("T")[0]; // fecha actual pasada a formato de nuestro modelo
  console.log(todayDate);

  if (todayDate === date.date) {
    return options.fn();
  }
});

hbs.registerHelper("isApoimentTomorrow", (date, options) => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000); // i = a cada día desde hoy siendo tomorrow 1 así en adelante
  const tomorrowDate = tomorrow.toISOString().split("T")[0]; //da la fecha de mañana en formato de nuestra base de datos
  if (tomorrowDate === date.date) {
    return options.fn();
  }
});

// hbs.registerHelper("isApoimentTomorrow2", (date, options) => {
//   const tomorrow = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000); // i = a cada día desde hoy siendo tomorrow 1 así en adelante
//   const tomorrowDate = tomorrow.toISOString().split("T")[0]; //da la fecha de mañana en formato de nuestra base de datos
//   if (tomorrowDate === date.date) {
//     return options.fn();
//   }
// });
