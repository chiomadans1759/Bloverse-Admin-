<template> 
	<div class="d-flex justify-content-center align-items-center users-profile">
		<div class="login-area col-md-6 p-0 border">
			<div class="d-flex justify-content-center pt-3">
				<img src="/assets/avartar.jpg"/>
			</div> 
			<div class="row user-info px-3">
				<p class="col-md-6 col-sm-6 mt-3"><span>Username</span><br>John@5</p> 
				<p class="col-md-6 col-sm-6 mt-3"><span>First Name</span><br>Emmanuel</p> 
				<p class="col-md-6 col-sm-6"><span>Last Name</span><br>Doe</p> 
				<p class="col-md-6 col-sm-6"><span>Phone Number</span><br>+0 000 000 0000</p> 
				<p class="col-md-6 col-sm-6"><span>Email</span><br>email@bloverse.com</p> 
				<p class="col-md-6 col-sm-6"><span>Gender</span><br>Male</p>  
				<p class="col-md-6 col-sm-6"><span>Birthday</span><br>3 June 2001</p> 
				<p class="col-md-6 col-sm-6"><span>Location</span><br>Lagos, Nigeria</p> 
				<p class="col-md-12 col-sm-12"><span>University</span><br>University of Lagos, Lagos Nigeria.</p> 
				<p class="col-md-12 col-sm-12"><span>Bio</span><br>Lopsun Ipsun Ipsun ah Asun Rupum Lopsun Ipsun ah Asun Rupum </p>   
			</div>
			<div class="default-tags px-3">
				<h5>Interest</h5>
				<button class="default-tag border mr-2 mb-2" 
					v-for="(tag, index) in tags" 
					:key="index" 
				>
					{{tag}}
				</button>  
			</div>
			<div class="country-tags mt-4 border-bottom pb-2 px-3">
				<h5>Interest</h5> 
				<button 
					v-for="(country, index) in countries" 
					:key="index" 
					class="d-inline-flex align-content-center align-items-center mr-2 mb-2"
				>
					<img :src="country.img_url" class="mr-2"/> {{country.name}} 
				</button> 
			</div>
			<div class="mt-2 mb-3 d-flex justify-content-end close-select">
				<button class="mr-3">Close</button>
				<div class="dropup show mr-4">
					<a :class="{ 
						'btn text-capitalize dropdown-toggle': true,
						'btn-primary': status == 'pending',
						'btn-success': status == 'accepted',
						'btn-danger': status == 'rejected'
						}" 
						href="#" 
						data-toggle="dropdown" 
						aria-haspopup="true"> 
						{{status}}
					</a> 
					<div class="dropdown-menu"> 
						<a href="#" class="dropdown-item" @click.prevent="selectStatus('accepted')">
							<i class="fa fa-circle text-success"></i>
							Accepted
						</a>
						<a href="#" class="dropdown-item" @click.prevent="selectStatus('pending')">
							<i class="fa fa-circle text-primary"></i>
							Pending
						</a>
						<a href="#" class="dropdown-item" @click.prevent="selectStatus('rejected')">
							<i class="fa fa-circle text-danger"></i>
							Rejected
						</a>
					</div>
				</div> 
			</div>
		</div> 
	</div> 
</template>

<script>
export default {
	name: "user-profile", 
	data(){
		return{
			tags: [ "Nigeria", "Kenya", "Technology", "Australia", "South Africa", "Category" ],
			countries: [
				{
					name: "Nigeria",
					img_url: "/assets/nigeria.jpg"
				},
				{
					name: "Mexico",
					img_url: "/assets/mexico.jpg"
				},
				{
					name: "Ghana",
					img_url: "/assets/ghana.jpg"
				},
				{
					name: "France",
					img_url: "/assets/france.jpg"
				},
				{
					name: "UK",
					img_url: "/assets/uk.jpg"
				}
			],
			status: 'pending'
		}
	},
	methods: { 
		selectStatus(status) {
			this.status = status
		}
  } 
}
</script>

<style scoped> 
.users-profile {
	height:100vh;
}

.users-profile .login-area img {
	height:80px;
	width:80px;
	border-radius: 50%;
	object-fit: cover;
	background-size: cover;
}

.users-profile .login-area {
	background:#fff; 
}

.users-profile .country-tags img { 
	height:18px;
	width:18px; 
	object-fit: fill;
}

.users-profile .default-tags button, 
.users-profile .country-tags button {
	border-radius:2px;
	font-size:12px;
}

.users-profile .user-info p {
	font-size:16px; 
	font-weight:500;
	color:#565656;
}

.users-profile .user-info span {
	font-size:14px;
	color:#B7B7B7;
}

.users-profile h5 {
	font-size:16px;
	color:#252525;
	font-weight:600;
}

.users-profile .close-select, 
.users-profile  .dropdown a {
	font-size:14px; 
}

.users-profile .close-select .btn,
.users-profile button { 
	border-radius:2px!important;
	padding:5px;
	outline:none;
}

.users-profile .close-select button { 
	color:#096DD9;
	border:.5px solid #096DD9; 
}

.users-profile .fa-circle {
	font-size:8px;
}
 
</style>

