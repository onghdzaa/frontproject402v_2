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
        to="/admin"
        >รายการข้อมูล</router-link
      >
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
        to="/admin/form"
        >เพิ่ม/แก้ไขข้อมูล</router-link
      >
    </div>
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
          <i class="fa fa-align-justify"> </i>
          แสดงจำนวนข้อมูลของพนักงาน
        </header>
        
        <div class="table-responsive">
        <table class="table" style="font-size: 17px;white-space: nowrap">
          <thead>
            <tr>
              <th>รูปภาพ</th>
              <th>รหัสพนักงาน</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์โทรศัพท์</th>
              <th>คะแนนพนักงาน</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sv in staff" :key="sv.ID_Staff">
              <td>
                <div class="img-container">
                  <expandable-image v-bind:src="sv.img_staff" alt="employee" />
                </div>
              </td>
               <td>{{sv.id_staff}}</td>
              <td>{{sv.full_name}} </td>
                    <td>{{sv.tell_staff}}</td>
                    <td>{{sv.average}}/5.00</td>
              
              <td class="text-right">
                <i @click="gotoEdit(sv.id_staff,sv.full_name,sv.tell_staff,sv.username,sv.email,sv.address,sv.model,sv.numcar,sv.password,sv.img_staff)"
                  class="pointer fa fa-pencil-square"
                  style="padding-right: 19%; color: #17a2bb"
                >
                </i>
                <i @click="onDelete(sv.id_staff)" class="pointer fa fa-trash" style="color: #ed2939"> </i>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
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
import axios from 'axios';
import {mapState} from "vuex";
export default {
  components: { Layout },
  computed:{
    ...mapState(["staff"])
  },
   created(){
this.$store.dispatch("set_staff");
  },
   data() {
        return {
            employees: [
                { id: '00001', name: 'Frank Murphy', tel: '0908801234' },
                { id: '00002',name: 'Vic Reynolds', tel: '0908801234' },
                { id: '00003',name: 'Gina Jabowski', tel: '0908801234' },
                
            ]
        };
    },
    methods:{
      onDelete(id){
        console.log("asdasdasd");
        //console.log(id)
  // this.alertify.confirm('คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?').setHeader('<em> แจ้งเตือน ! </em> ')
    //,(res) =>{
      this.alertify.confirm('<em> แจ้งเตือน ! </em>', 'คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?', function(){
        
         axios.delete('https://appcarwashbackend.herokuapp.com/deleteemployee',{params:{id:id}}).then(res=>{
        console.log(res.status);
            })
            .catch(error =>{ 
                console.error(error);
           });
            }, function(){});

      },gotoEdit(id,name,tel,user,email,address,model,numcar,pass,img){
        
        this.$router.push({name :"admin-Edit_Employees",params:{ id:id,name:name,tel:tel,user:user,email:email,address:address,model:model,numcar:numcar,pass:pass,img:img
        }})
    }
    }
};
</script>

<style scope>
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