<template>
  <div class="hello">
    <h1>Vue.Foo</h1>
    <p>{{msg}} </p>
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>

     <Plotly
      id="plotxy"
      :data="data"
      :layout="layout"
      :display-mode-bar="false"
    ></Plotly>

  </div>
</template>

<script>
import { Plotly } from "vue-plotly";


export default {
  name: 'HelloWorld',
  components: {
    Plotly
  },
  props: {
    msg: String
  },
  computed: {
    data() {
      let res = [];
      let item = new Object();
      item.x = [];
      item.y = [];
      this.items.forEach((element, index) => {
        item.x.push(index);
        item.y.push(element.age);       
      });
      
      item.type = "scatter"
      res.push(item);
      return res;
    }
  },
  data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        layout: {
          xaxis: {
            range: [0, 3],
            tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
            tick0: 0            
          },
          title: "age",
      },

      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
