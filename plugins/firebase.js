import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyCuf_GLs0N2ZEEDAs0MauUjxZzGcEBD8Sg",
      authDomain: "coachtech-test.firebaseapp.com",
      projectId: "coachtech-test",
      storageBucket: "coachtech-test.appspot.com",
      messagingSenderId: "741490670787",
      appId: "1:741490670787:web:5742fbdf65ebba5ba17676",
      measurementId: "G-57PKLLV4J2"
    }
  )
}

export default firebase