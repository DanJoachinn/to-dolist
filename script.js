
new Vue({

  el: "#appVue",
  data: {
    lists: [
    ],
    newKeep: ""

  },

  methods: {
    addKeep: function(){

      this.lists.push({keep: this.newKeep, completed: false});
      this.newKeep = "";

      var  firebaseRef = firebase.database().ref();
      var input = document.getElementById("input");
      var txt = input.value;

      firebaseRef.child("Tareas").push().set(txt);

    },
    remover: function(){
      this.lists.pop();

    },
    datos: function(){
      var rootRef = firebase.database().ref().child("Tareas");
    }
 }
});
