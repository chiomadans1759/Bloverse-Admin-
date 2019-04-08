<template> 
	<div class="admin-auth container-fluid">  
		<div class="login-area row d-flex justify-content-center align-items-center">
			<div class="col-md-4 col-sm-6 col-xs-8">
				<div class="d-flex justify-content-center">
					<img src="/assets/logo-with-text.png"/>
				</div>
				<div class="container">
					<form class="auth-login-form p-4 mt-4 border">
						<input
							type="email"
							id="inputEmail"
							class="form-control"
							placeholder="Email"
							v-model="email"
							required 
						> 
						<input
							type="password"
							id="input-Password"
							class="form-control mt-3"
							placeholder="Password"
							v-model="password"
							required 
						> 
						<button
							class="btn btn-primary btn-block mt-3"
							type="button"
							@click.prevent="loginUser" 
							:disabled="!formIsValid || disable == true"
						>Sign In</button>
					</form>  
				</div>
			</div>
		</div> 
		<div class="auth-footer d-flex justify-content-center footer">
			<p><span>Bloverse </span> 2018. All Rights Reserved</p>
		</div>
	</div>
</template>

<script>  
import { mapActions } from 'vuex' 

export default { 
  name: "admin-auth",
  data(){
    return{
			email:'',
			password:'',
			disable: false 
		}
	},
	computed: {
    formIsValid(){
			const exp = /\S+@\S+\.\S+/;
			return this.email && this.password && exp.test(this.email)
		}
	},
	methods: {
		...mapActions(['loginAdmin']),

		async loginUser(){
			if(this.formIsValid){
				this.disable = true
				const response = await this.loginAdmin({email: this.email, password: this.password})
				this.disable = false
				if(response.status === 200){  
					this.$router.push("/account/dashboard")
				}else {
					alert('User does not exist')
				}
			}
		}
	}
}
</script>

<style scoped>
.admin-auth .login-area {
	height: calc(100vh - 40px);
}

.admin-auth img {
	height:70px;
	width:70px;
}

.admin-auth .auth-login-form { 
	background:#fff;  
}

.admin-auth button {
	background-image: linear-gradient(to left, #2F80ED, #003CE1);
}

.admin-auth button, .admin-auth input {
	border-radius: 2px;
} 

.admin-auth .footer p{
	font-size:10px;
	color:#B7B7B7;
}

.admin-auth .footer p span{
	font-size:16px;
}
</style>

