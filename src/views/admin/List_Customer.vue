<template>
  <Layout>
     <div slot="buttons" class="form-group">
      <router-link
        class="btn"
        style="
          background-color: #17a2bb;
          color: #fff;
          margin-right: 10px;
          width: 15%;
          font-size: 17px;
          border-radius: 4px;
          margin-bottom: 15px;
          min-width: 130px;
        "
        to="/admin/List_Customer"
        >ข้อมูลลูกค้า</router-link
      >
      <!-- <router-link
        class="btn"
        style="
          background-color: #17a2bb;
          color: #fff;
          margin-right: 10px;
          width: 15%;
          font-size: 17px;
          border-radius: 4px;
          margin-bottom: 15px;
          min-width: 130px;
        "
        to="/admin/Edit_Booking"
        >เพิ่ม/แก้ไขการจอง</router-link
      > -->
    </div>
    <!-- <div slot="buttons" class="form-group">
      <router-link
        class="btn"
        style="
          background-color: #17a2bb;
          color: #fff;
          margin-right: 10px;
          width: 15%;
          font-size: 17px;
          border-radius: 4px;
          margin-bottom: 15px;
          min-width: 130px;
        "
        to="/admin"
        >รายการข้อมูล</router-link
      >
      
    </div> -->
    <div class="card">
      <div
        class="card-body"
        style="
          padding-left: 9%;
          padding-right: 9%;
          margin-left: 0%;
          margin-right: 0%;
          text-align: left;
          font-size: 22px;
        "
      >
        <br />
        <header class="mb-4" >
          <i class="fa fa-address-card"> </i>
            แสดงข้อมูลลูกค้า
        </header>
        
<!-- <div id="dtDynamicVerticalScrollExample" class="table table-striped table-bordered table-sm" cellspacing="0"> -->
        <div  class="table-responsive " >
        <table class="table " style="font-size: 17px;white-space: nowrap">
          <thead>
            <tr>
              
              <th>#</th>
              <th>รูป</th>
              <th>ชื่อ-นามสกุล</th>
              <th>ที่อยู่</th>
              <th>เบอร์โทรศัพท์</th>
               <th>ยี่ห้อรถ</th>
                <th>ทะเบียนรถ</th>
              <th>อีเมล</th>
               <!-- <th>ยี่ห้อของรถ</th>
               <th>ทะเบียนรถ</th> -->
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user,index) in listcustomer" :key="user.numid">
              
               <td>{{index+1}}</td>
               <td>
                  <div class="help" style="font-size:1px;color:#fff">================</div>
                <div class="img-container">
                  <expandable-image v-bind:src="user.img" alt="user" />
                </div>
              </td>
              <td>{{user.name}} </td>
                    <td>{{user.address}}</td>
                    <td>{{user.tel}}</td>
                     <td>{{user.model}}</td>
                      <td>{{user.numcar}}</td>
                    <td>{{user.email}}</td>
                    <!-- <td>{{user.model}}</td>
                    <td>{{user.numcar}}</td> -->
                   <!-- <td>
                <div class="img-container">
                  <img src="/img/slip.jpg" alt="user" />
                </div>
              </td> -->
              
              
            </tr>
             
          </tbody>
        </table>
        </div>
        <template>
  
</template>

        <!-- <div class="mt-3">
      <h6>Default Pills</h6>
      <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
    </div> -->
<!-- </div> -->
        
        <!-- <Pagination/> -->
        <!-- <header>
          <i class="fa fa-list-alt"> </i>
          แสดงจำนวนข้อมูลของพนักงาน
        </header> -->
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
//import Pagination from "@/components/Pagination";
// import Layout from '../../components/Layout.vue';
import {mapState} from "vuex";
export default {
  
  components: { Layout },
  computed:{
    ...mapState(["listcustomer"]),
  },
  created(){
  
    this.$store.dispatch("set_customer");
  },
   data() {
        return {
            users: [
                { name: 'Frank Murphy', address: '153/41 หอพัก a3 จ.กรุงเทพ' ,tel:'0615103308',model:'toyota',numcar:'ฟพ345', email:'kny@gmail.com'},
                { name: 'Vic Reynolds', address: '83/2 หอพัก c3 จ.ปทุมธานี' ,tel:'0908807104',model:'toyota',numcar:'ฟพ345',email:'stp@gmail.com' },
                { name: 'Gina Jabowski', address: '153/41 หอพัก a3 จ.สุพรรณบุรี' ,tel:'0616482107', model:'toyota',numcar:'ฟพ345' ,email:'spc@gmail.com' },
                 { name: 'Frank Murphy', address: '153/41 หอพัก a3 จ.กรุงเทพ' ,tel:'0615103308',model:'toyota',numcar:'ฟพ345', email:'kny@gmail.com'},
                { name: 'Vic Reynolds', address: '83/2 หอพัก c3 จ.ปทุมธานี' ,tel:'0908807104',model:'toyota',numcar:'ฟพ345',email:'stp@gmail.com' },
                { name: 'Gina Jabowski', address: '153/41 หอพัก a3 จ.สุพรรณบุรี' ,tel:'0616482107', model:'toyota',numcar:'ฟพ345' ,email:'spc@gmail.com' }
                // { Name: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
                // { Name: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
            ],
            count:0
        };
    },
    methods:{
      onDelete(users){
        this.alertify.confirm('คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?'),() =>{
console.log(users);
        }; 
        
//         this.alertify.confirm("คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?" ,() =>{
// console.log(users);
//         })
        
      },
    }
};
</script>

<style scope>
.total{
    text-align: right;
    color: dimgray;
}
/* .form-group .btn{
    color: #fff !important;
    margin-right: 10px;
    width: 15%;
    font-size: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    background-color:#ced4da !important;
    
} */
.btn.router-link-exact-active {
  /* background-color:#ced4da !important ; */
  border: 4px solid rgb(165, 163, 155);
  /* border: 3px solid rgb(194, 40, 29); */
  /* #17a2bb */
}
.card-body .fa-list-alt {
  padding-left: 5%;
  margin-left: 0%;
  text-align: left;
}
</style>