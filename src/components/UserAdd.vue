<template>
  <div class="UserAdd">
    <h2 class="UserAdd-heading">Add new user</h2>
    <b-form-group
      id="fieldset-1"
      class="UserAdd-inputGroup"
      label="Enter first name"
      label-for="userFirstName"
      label-class="UserAdd-inputLabel"
    >
      <b-form-input
        id="userFirstName"
        v-model="userFirstName"
        class="UserAdd-input"
        autocomplete="off"
        type="text"
        trim
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      class="UserAdd-inputGroup"
      label="Enter last name"
      label-for="userLastName"
      label-class="UserAdd-inputLabel"
    >
      <b-form-input
        id="userLastName"
        v-model="userLastName"
        class="UserAdd-input"
        autocomplete="off"
        type="text"
        trim
      ></b-form-input>
    </b-form-group>
    <b-button class="UserAdd-button" @click="addUser({ userFirstName, userLastName })">
      Add new user
    </b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UserAdd',
  data() {
    return {
      userFirstName: '',
      userLastName: '',
    };
  },
  methods: {
    ...mapActions('users', ['addUser']),
  },
};
</script>
<style lang="scss" scoped>
.UserAdd {
  width: 50%;
  min-height: 450px;
  background-color: #5284cf;
  border-radius: 5px;
  border: 1px solid #74a1cc;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.33);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 50px 0 0;
}
.UserAdd-inputGroup {
  width: 90%;
}
.UserAdd-heading {
  font-size: 32px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  margin: 0 0 20px;
}

::v-deep .UserAdd-inputLabel {
  margin: 0 0 10px;
  color: #fff;
  font-size: 24px;
}

::v-deep .UserAdd-input {
  font-family: 'Source Sans Pro', sans-serif;
  color: #236e98;
  font-weight: 600;
  font-size: 24px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.33);
  &:focus {
    color: #236e98;
  }
}

::v-deep .UserAdd-button {
  width: 350px;
  height: 50px;
  font-size: 24px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.33);
  margin: 50px 0 0;
  background-color: #d7fffe;
  border: 1px solid #d7fffe;
  color: #236e98;
  font-weight: 600;
  outline: unset;
  &.btn {
    &.btn-secondary {
      &:hover,
      &:active,
      &:focus {
        background-color: #b1fdfc;
        border: 1px solid #b1fdfc;
        outline: unset;
        color: #236e98;
      }
    }
  }
}
</style>
