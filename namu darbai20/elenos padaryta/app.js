let app = new Vue({
    el: "#app",
    data: {
        message: "Hello from Vue app!",
        myClass: "active",
        isVisible: false,
        tekstas: "Tekstas",
        albums: JSON_DATA.albums
    },
    methods: {
      getAlbumImage(name) {
        return "img/" + name;
      }
    }
  })