<template>
  <div class="user-profile" v-if="current_creator != null">
    <div class="user-details col-md-12 p-0">
      <div class="container">
				<div class="d-flex justify-content-center py-3">
					<div class="profile-img-placeholder bg-primary" v-if="!current_creator.image_url">
						<span class="text-white">
							{{`${current_creator.first_name.substring(0, 1)} ${current_creator.last_name.substring(0, 1)}`}}
						</span>
					</div>
					<img :src="current_creator.image_url" v-else>
				</div>

				<div class="row user-info px-3">
					<div class="col-md-6 col-sm-6 mt-3">
						<span>First Name</span>
						<p class="text-dark">{{current_creator.first_name}}</p>
					</div>
					<div class="col-md-6 col-sm-6 mt-3">
						<span>Last Name</span>
						<p class="text-dark">{{current_creator.last_name}}</p>
					</div>
					<div class="col-md-6 col-sm-6 mt-3">
						<span>Username</span>
						<p class="text-dark">{{current_creator.username}}</p>
					</div>
					<div class="col-md-6 col-sm-6 mt-3">
						<span>Phone Number</span>
						<div class="text-dark">
							<p v-if="!current_creator.phone.number">-</p>
							<p v-else>
								{{current_creator.phone.number}}
							</p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 mt-3">
						<span>Email</span>
						<p class="text-dark">{{current_creator.email.address}}</p>
					</div>
					<div class="col-md-6 col-sm-6 mt-3">
						<span>Gender</span>
						<div class="text-dark">
							<p v-if="!current_creator.gender">-</p>
							<p v-else>{{current_creator.gender}}</p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 mt-3">
						<span>Date of Birth</span>
						<div class="text-dark">
							<p v-if="!current_creator.date_of_birth">-</p>
							<p v-else>{{current_creator.date_of_birth}}</p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 mt-3">
						<span>Location</span>
						<div class="text-dark">
							<p v-if="!current_creator.location">-</p>
							<p v-else>{{current_creator.location}}</p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 mt-3">
						<span>University</span>
						<div class="text-dark">
							<p v-if="current_creator.universities.length > 0">
								{{current_creator.universities[0].name}}
							</p>
							<p v-else>-</p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 mt-3">
						<span>Status</span>
						<p :class="{
							'text-success': current_creator.status == 'ACCEPTED',
							'text-pending': current_creator.status == 'APPLIED',
							'text-danger': current_creator.status == 'REJECTED'
							}">
							{{current_creator.status}}
						</p>
					</div>
					<div class="col-md-12 col-sm-12 mt-3">
						<span>Bio</span>
						<div class="text-dark">
							<p v-if="!current_creator.bio">-</p>
							<p v-else>{{current_creator.bio}}</p>
						</div>
					</div>
				</div>

				<div class="default-tags my-4 px-3">
					<h5>Interest</h5>
					<p v-if="current_creator.categories.length < 1">-</p>
					<button
						class="btn btn-outline-secondary mr-2 mb-2"
						v-else
						v-for="(category, index) in current_creator.categories"
						:key="index"
					>{{category.name}}</button>
				</div>

				<div class="country-tags my-4 px-3">
					<h5>Country</h5>
					<p v-if="current_creator.countries.length < 1">-</p>
					<button
						v-else
						v-for="(country, index) in current_creator.countries"
						:key="index"
						class="btn btn-outline-secondary mr-2 mb-2">
						<img :src="country.img_url" class="mr-2">
						{{country.name}}
					</button>
				</div>

				<hr>

				<div class="row mt-4">
					<div class="col">
						<button class="btn btn-outline-primary" @click="closeModal">Close Profile</button>
					</div>

					<div class="col-auto">
						<button :disabled="disable = true || current_creator.status == 'REJECTED' || current_creator.status == 'ACCEPTED'"
							type="button" 
							class="btn btn-danger mr-2" 
							@click="changeStatus('REJECTED')">
							Reject
						</button>
						<button :disabled="disable = true || current_creator.status == 'ACCEPTED' || current_creator.status == 'REJECTED'" 
										type="button" 
										class="btn btn-success ml-2" 
										@click="changeStatus('ACCEPTED')">
							Accept
						</button>
					</div>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "user-profile",
	data() {
		return {
			disable: false
		}
	},
  methods: {
		...mapActions(['updateUserStatus']),
		
    selectStatus(status) {
      this.status = status
		},

		closeModal() {
			$(".bd-example-modal-lg").modal("hide")
		},
		
		async changeStatus(status) {
			let payload = { status, id: this.current_creator.id }
			this.disable = true
			let res = await this.updateUserStatus(payload)
			if(res == true) {
				alert('Creator status successfully updated')
				this.disable = false
				this.closeModal()
			}else {
				alert('Error updating status, kindly try again')
				this.disable = false
			}
		}
  },
  computed: {
    ...mapState(["current_creator"])
  }
};
</script>

<style scoped>
.user-profile .user-details img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
  background-size: cover;
}

.user-profile .profile-img-placeholder {
	height: 80px;
  width: 80px;
  border-radius: 50%;
	text-align: center;
	padding-top: 4%;
}

.user-profile .profile-img-placeholder 
span {
	font-weight: bold;
	font-weight: 32px;
}

.user-profile .user-details {
  background: #ffffff;
}

.user-profile .country-tags img {
  height: 18px;
  width: 18px;
  object-fit: fill;
}

.user-profile .default-tags button,
.user-profile .country-tags button {
  border-radius: 2px;
  font-size: 12px;
}

.user-profile .user-info p {
  font-size: 16px;
  font-weight: 500;
  color: #565656;
}

.user-profile .user-info span {
  font-size: 14px;
  color: #b7b7b7;
}

.user-profile h5 {
  font-size: 16px;
  color: #252525;
  font-weight: 600;
}

.user-profile .close-select,
.user-profile .dropdown a {
  font-size: 14px;
}

.user-profile .close-select .btn,
.user-profile button {
  border-radius: 2px !important;
  padding: 5px;
  outline: none;
}

.user-profile .close-select button {
  color: #096dd9;
  border: 0.5px solid #096dd9;
}

.user-profile .fa-circle {
  font-size: 8px;
}
</style>

