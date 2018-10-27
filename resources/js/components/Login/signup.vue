<template>
  <v-container>
  	  <v-form @submit.prevent="signup">
  	    <v-text-field
  	      v-model="form.name"
  	      label="Name"
  	      type="text"
  	      required
  	    ></v-text-field>
        <v-text-field
          v-model="form.email"
          label="E-mail"
          type="email"
          required
        ></v-text-field>
  	    <v-text-field
  	      v-model="form.password"
  	      label="Password"
  	      type="password"
  	      required
  	    ></v-text-field>


        <v-text-field
          v-model="form.password_confirmation"
          label="Confirm Password"
          type="password"
          required
        ></v-text-field>

  	    <v-btn
  			color="green"
  			type="submit"
  	    >
  	    	Sign Up
  	    </v-btn>
  	  </v-form>
  </v-container>
</template>

<script>

export default {
  data(){
    return{
      form:{
        name: null,
        email:null,
        password:null,
        password_confirmation:null
      }
    }
  },
	methods: {
    signup(){
      axios.post('/api/auth/signup', this.form)
      .then( res => User.responseAfterLogin(res))
      .catch(error => error.response.data)
    }
  }
}
</script>

<style>
	
</style>