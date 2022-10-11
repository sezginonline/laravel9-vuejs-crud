<template>

    <Header />

    <div class="container-fluid">
        <div class="row">
        
        <Nav />
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Add Product</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <a href="/" type="button" class="btn btn-sm btn-outline-secondary">Back to Products</a>
              </div>
              <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar" class="align-text-bottom"></span>
                All
              </button>
            </div>
          </div>

          <div class="mb-3 row">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="name" placeholder="Name">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Picture</label>
            <div class="col-sm-10">
              <input class="form-control" type="file" id="formFile">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label"></label>
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary mb-3">Save</button>
            </div>
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

    },
    created() {

    },
    methods: {

    }
}
</script>
