var app = new Vue({
    el: '#app',
    data: {
      new_iten_value: '',
      search_text: '',
      items:[
        {
          "text": "walk",
          "status": false
        },
        {
          "text": "readbook",
          "status": true
        },
      ]
    },
    computed:{
      search_items(){
        if (this.search_text == ''){
          return this.items
        }
        else{
          return this.items.filter((t) => t.text.includes(this.search_text))
        }
      },
    },
    methods: {
      check(item){
        item.status = item.status ? false: true
      },
      addItem(){
        this.items.push(
          {
            "text":this.new_iten_value,
            "status": false
          }
        );
        this.new_iten_value = ''
      },
      delItem(item){
        this.items = this.items.filter((t) => t != item)
      }
    }
  })