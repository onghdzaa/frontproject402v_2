<template>
  <div class="sidebar">
    <section class="card" style="background: none; border: NONE">
      <header class="card-header text-center">
        <h5 class="m-0">
          <i class="fa fa-user-circle" style="font-size: 28px; font-weight: 600"></i>
          ส่วนของผู้ใช้ 
          
        </h5>
        
      </header>
      <div class="card-body" style="padding: 1rem 0rem !important">
        <router-link to="/customer/Booking" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          จองคิวล้างรถ
        </router-link>
<!-- 
        <router-link to='/admin/List_income' class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ประวัติส่วนตัว
        </router-link> -->

        <router-link v-bind:to="form.path" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          สถานะการจอง
        </router-link>

        <router-link to='/customer/BookingHistory' class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ประวัติการจอง
        </router-link>
        <router-link to='/customer/Price' class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ราคาค่าบริการ
        </router-link>
      </div>
    </section>
<!-- card ส่วนที่ 2 -->
       <section class="card" style="background: none; border: NONE">
      <header class="card-header text-center">
        <h5 class="m-0">
          <i class="fa fa-cogs" style="font-size: 28px; font-weight: 600"></i>
          ตั้งค่าอื่นๆ
        </h5>
      </header>
      <div class="card-body" style="padding: 1rem 0rem !important">
        <router-link to="/customer/Profile" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ประวัติส่วนตัว
        </router-link>

        <router-link to="/login" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ออกจากระบบ
        </router-link>

        <!-- <router-link to="/customer/Booking" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
         การจอง
        </router-link> --> 

       
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
   data() {
    return {
     
      form:{
               
                path:""
               
                

            }
    };
  },
   created(){
 axios.get('https://appcarwashbackend.herokuapp.com/customerstop',{params:{id:this.$session.get('user')}}).then(res=>{
    //console.log(res.data[0].status)
    console.log();
    if(res.data.result=="error"){
this.form.path="/customer/NoBooking"
    }else{
      this.form.path="/customer/BookingStatus"
     }
   
            })
            .catch(error =>{ 
                console.error(error);
            });  
//this.form.path="/rider/UnClick"
  }
  // // props:["item"]
  // props:["header" , "navs"]
};
</script>

<style scope>
.card {
  border: none;
  border-color: #eeeeee;
}
.card-body {
  padding: 1rem 0rem;

  margin-left: 0;
  margin-right: 0;
}
.sidebar-link {
  display: block;
  padding: 0.9rem 1rem;
  color: dimgray;
  font-weight: 500;
  font-size: 19px;
  text-decoration: none !important;
  /* background-color: none;
       background: none;  */
  border: none;
}

.sidebar-link:hover {
  background-color: #d3dadf !important;
}
.sidebar-link:hover,
.sidebar-link:hover .fa fa-chevron-circle-right {
  color: black;
}
</style>