<template>

    <Header />

    <div class="container-fluid">
        <div class="row">
        
        <Nav />
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2" v-if="! this.$route.params.id">Add Product</h1>
            <h1 class="h2" v-if="this.$route.params.id">Edit Product</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <a v-on:click="goToHome" type="button" class="btn btn-sm btn-outline-secondary">Back to Products</a>
              </div>
              <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar" class="align-text-bottom"></span>
                All
              </button>
            </div>
          </div>

          <form @submit.prevent="saveProduct">
            <div class="mb-3 row">
              <label for="name" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="name" placeholder="Name" v-model="product.name">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Picture</label>
              <div class="col-sm-10">
                <input class="form-control" type="file" id="file" @change="selectFile">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"></label>
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary mb-3">Save</button>
              </div>
            </div>
          </form>

        </main>
      </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Nav from '../components/Nav.vue';

export default {
    components: {
    Header, Nav
    },
    data() {
      return {
          product: {}
      }
    },
    created() {
      if (this.$route.params.id) {
        axios
            .get('/api/product/' + this.$route.params.id)
            .then((response) => {
                this.product = response.data;
            });
      }
    },
    methods: {

      selectFile(event) {
        this.product.picture = event.target.files[0];
      },

      goToHome() {
        this.$router.push({ name: 'home' });
      },

      saveProduct() {

        const data = new FormData();
        if (this.product.name) {
          data.append('name', this.product.name);
        }
        if (this.product.picture) {
          data.append('picture', this.product.picture);
        }

        if (this.$route.params.id) { 

          this.product._method = "PUT";

          // Edit Product
          axios
          .post('/api/product/' + this.$route.params.id, data, {
            headers: {
              'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substring(2)
            }
          })
          .then(response => (
              this.$router.push({ name: 'home' })
          ))
          .catch(error => {
            this.$swal({
              title: "Error !",
              text: error.response.data.message,
            });
          })

        } else {

          // Add Product
          axios
          .post('/api/product', data, {
            headers: {
              'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substring(2)
            }
          })
          .then(response => (
              this.$router.push({ name: 'home' })
          ))
          .catch(error => {
            this.$swal({
              title: "Error !",
              text: error.response.data.message,
            });
          })
          
        }
      },
      
    }
}
</script>
