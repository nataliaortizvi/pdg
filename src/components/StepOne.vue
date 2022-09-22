<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <form>
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                aria-describedby="emailHelp"
                placeholder="Enter first name"
              />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                aria-describedby="emailHelp"
                placeholder="Enter last name"
              />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                aria-describedby="emailHelp"
                placeholder="Enter phone number"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "StepOne"
  };
  </script>
  
  <style scoped>
  form {
    margin-top: 50px;
  }
  </style>
  