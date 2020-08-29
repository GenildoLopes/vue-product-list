<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="350px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mt-4">
          Add Product
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-form @submit.prevent="addProduct">
              <v-row>
                <v-text-field
                  v-model="newProduct.name"
                  label="Name"
                  required
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="newProduct.description"
                  label="Description"
                  required
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="newProduct.price"
                  label="Price"
                  required
                ></v-text-field>
              </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false"
                  >Close</v-btn
                >
                <v-btn
                  type="submit"
                  color="blue darken-1"
                  text
                  @click="dialog = false"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Modal",

  data: () => ({
    dialog: false,
  })

}
</script>








