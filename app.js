// Importa il modulo createApp da Vue
const { createApp } = Vue;

// Crea un'app Vue
const app = createApp({
  // Dati iniziali dell'app
  data() {
    return {
      // Array di contatti con informazioni su ciascun contatto

      myProfile: {
        name: 'mio profilo',
        avatar: 'img/avatar_io.jpg', 
      },

      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          lastAccess: '14 minutes ago',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: 'img/avatar_2.jpg',
          lastAccess: '120 minutes ago', 
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: 'img/avatar_3.jpg',
          lastAccess: '30 minutes ago', 
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: 'img/avatar_4.jpg',
          lastAccess: '20 minutes ago', 
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: 'img/avatar_5.jpg',
          lastAccess: '10 minutes ago',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: 'img/avatar_6.jpg',
          lastAccess: '130 minutes ago',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: 'img/avatar_7.jpg',
          lastAccess: '230 minutes ago', 
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: 'img/avatar_8.jpg',
          lastAccess: '10 minutes ago',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],
      // Contatto attualmente selezionato nella chat
      selectedContact: null,
      // Testo inserito nell'input di ricerca
      searchQuery: '',
      // Nuovo messaggio da inviare
      newMessage: '',
    };
  },
  // Definizione di una proprietà calcolata chiamata "filteredContacts"
  computed: {
    // Funzione della proprietà calcolata che restituisce una lista di contatti filtrati in base alla query di ricerca
    filteredContacts() {
      // Utilizza il metodo filter() per filtrare i contatti in base al nome
      return this.contacts.filter(contact =>
        // Confronta il nome del contatto (ignorando maiuscole/minuscole) con la query di ricerca
        contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  // Metodi dell'app
  methods: {
    // Funzione per aggiungere un nuovo messaggio
    addMessage() {
      // Verifica se il campo del nuovo messaggio non è vuoto
      if (this.newMessage.trim() !== '') {
        // Aggiunge un nuovo messaggio alla lista dei messaggi del contatto selezionato
        this.selectedContact.messages.push({
          // Ottiene la data e l'ora corrente formattata come stringa
          date: new Date().toLocaleString(),
          // Estrae il testo del nuovo messaggio, rimuovendo gli spazi iniziali e finali
          message: this.newMessage.trim(),
          // Imposta lo stato del messaggio come 'sent' (inviato)
          status: 'sent',
        });
  
      // Funzione setTimeout utilizzata per simulare una risposta dall'interlocutore dopo 1 secondo
      setTimeout(() => {
        // Aggiunge un nuovo messaggio alla lista dei messaggi del contatto selezionato
        this.selectedContact.messages.push({
          // Ottiene la data e l'ora corrente formattata come stringa
          date: new Date().toLocaleString(),
          // Testo del messaggio di risposta simulato
          message: 'Ok',
          // Imposta lo stato del messaggio come 'received' (ricevuto)
          status: 'received',
        });
      }, 1000);
  
        // Pulisci il campo del nuovo messaggio
        this.newMessage = '';
      }
    },
    // Metodo per selezionare un contatto
    selectContact(contact) {
      // Imposta il contatto selezionato sulla base dell'argomento passato
      this.selectedContact = contact;
    },
  },  
});

// Montaggio dell'app Vue al nodo con l'id "app" nell'HTML
app.mount('#app');
