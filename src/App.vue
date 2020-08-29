<template>
  <v-app>
    <v-container grid-list-sm>
      <v-row>
        <table>
          <caption>
            Product List
          </caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in products" :key="index">
              <td data-label="Name">{{ item.name }}</td>
              <td data-label="Description">{{ item.description }}</td>
              <td data-label="Price">{{ item.price }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Modal -->
        <Modal />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Firebase from "firebase";
import FireConfig from "./firebase-config"
import Modal from './components/Modal'

let app = Firebase.initializeApp(FireConfig)
let db = app.database();
let productsRef = db.ref("vue-product-list")

// console.log(db)

export default {
  name: "App",
  components: {
    Modal
  },

  firebase: {
    products: productsRef,
  },
  data() {
    return {
      newProduct: {
        name: "Short",
        description: "Blabblala",
        price: "20"
      }
    }
  },
  methods: {
    addProduct() {
      productsRef.push(this.newProduct)
      this.newProduct.name = ''
      this.newProduct.description = ''
      this.newProduct.price = ''
    }
  }
}
</script>

<style scoped>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
        * aria-label has no advantage, it won't be read inside a table
        content: attr(aria-label);
        */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
