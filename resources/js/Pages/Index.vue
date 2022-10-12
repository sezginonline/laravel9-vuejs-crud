<template>

<Header />

<div class="container-fluid">
  <div class="row">
    
    <Nav />

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Products</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <a href="#/form" type="button" class="btn btn-sm btn-primary">Add New Product</a>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar" class="align-text-bottom"></span>
            All
          </button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Picture</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.picture }}</td>
              <td>{{ product.created_at }}</td>
              <td>
                <a @click="editProduct(product.id)" type="button" class="btn btn-secondary" style="margin-right: 5px">Edit</a>
                <a @click="deleteProduct(product.id)" type="button" class="btn btn-danger">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
          products: []
      }
  },
  created() {
    axios
          .get('/api/product/')
          .then(response => {
              this.products = response.data;
          });
  },
  methods: {
      editProduct(id) {
        this.$router.push("/form/" + id);
      },

      deleteProduct(id) {
        this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete('/api/product/' + id).then(response => {
              this.$router.go();
            });
          }
        })
      },
  },
}
</script>
