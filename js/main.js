// ! Mail
// # Chiedi all'utente la sua email,
// # controlla che sia nella lista di chi può accedere,
// # stampa un messaggio appropriato sull'esito del controllo.

// const emails = [
//   "me@email.it",
//   "other@email.com",
//   "manz@mail.it",
//   "gov@email.gov",
// ];
// const userEmail = prompt("Inserisci l'Email");

// emails.includes(userEmail)
//   ? console.log("Email presente nel DataBase")
//   : console.log("Email non presente nel DataBase");

// ! Gioco dei dadi
// # Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// # Stabilire il vincitore, in base a chi fa il punteggio più alto.

const maxRandomNumber = 6;
const minRandomNumber = 1;
const userRandomNumber = Math.floor(
  Math.random() * maxRandomNumber + minRandomNumber
);
const computerRandomNumber = Math.floor(
  Math.random() * maxRandomNumber + minRandomNumber
);

console.log(
  userRandomNumber > computerRandomNumber
    ? "Il Giocatore ha Vinto!"
    : userRandomNumber == computerRandomNumber
    ? "Avete Pareggiato!"
    : "Il Computer ha Vinto!"
);
