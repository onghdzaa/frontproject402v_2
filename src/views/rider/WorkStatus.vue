<template>
  <Layout>
      <div slot="buttons" class="form-group">
      <router-link
        class="btn btn-menu"
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
        to="/rider/WorkStatus"
        >ขั้นตอนที่ 1</router-link
      >
        <!-- <router-link
        class="btn btn-menu" disabled
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
        to="/rider/WorkStatus2"
        >ขั้นตอนที่ 2</router-link
      >
        <router-link
        class="btn btn-menu"
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
        to="/rider/WorkStatus3"
        >ขั้นตอนที่ 3</router-link
      > -->
 
    </div>
     <div class="card">
         <div class="card-body"
         style="
          padding-left: 9%;
          padding-right: 9%;
          margin-left: 0%;
          margin-right: 0%;
          text-align: left;
          font-size: 21px;
        "
         >
       <br>
             <header>
               <div>
   <!-- <b-progress :value="25" show-progress variant="success" striped :animated="animate"></b-progress> -->
    <!-- <b-progress :value="25" show-progress variant="info" striped :animated="animate" class="mt-2"></b-progress> -->
    <!-- <b-progress :value="75" show-progress variant="warning" striped :animated="animate" class="mt-2"></b-progress> -->
    

    

    
  </div>
               <div>ขั้นตอนที่ 1 : <i class="fa fa-pencil-square" > </i> อัพเดทสถานะการให้บริการ (1/4)</div>
            
             </header>
             <!-- <th>เวลา</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์โทรศัพท์</th>
              <th>ทะเบียนรถ</th>
              <th>ที่อยู่</th>
               <th>ประเภท</th>
                 <th>ราคา</th>
              <th>รหัส</th> -->
    
    <div></div>
              
               <b-progress :value="20"  variant="info" animated  class="mt-2"></b-progress>
               <br>
             <!-- <hr> -->
             <div class="table-responsive">
        <table class="table" style="font-size: 16px;white-space: nowrap">
          <thead>
            <!-- <tr> -->
              
              
              <th>เวลา</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์โทรศัพท์</th>
              <th>ทะเบียนรถ</th>
            
               <th>ประเภท</th>
                 <th>ราคา</th>
              <th>รหัส</th>
              
            <!-- </tr> -->
          </thead>
          <tbody>
            <!-- <tr v-for="lr in employees" :key="lr.id"> -->
              
               <!-- <td> <div class="img-container">
                  <img src="/img/imguser.jpg" alt="employee" />
                </div></td> -->
               <td>{{time}}</td>
              <td>{{name_member}} </td>
                    <td>{{tel_member}}</td>
                     <td>{{numcar}}</td>
                        <td>{{service}}</td>
                         <td>{{price}}</td>
                     <td>{{id}}</td>
            
              
            <!-- </tr> -->
             
          </tbody>
        </table>
         </div>
    

<hr>
 <br><br>
            
      <div class="row " style="margin-top:0% !important;">
        <div class="col-sm-4 " style="max-width: 100%;margin-top:0 !important;">
          <img src="/img/start1.png"  alt="user" class="img-booking" style="max-width: 100%;margin-top:0 !important;">
      
    
        </div>
        
        <div class="col-sm-8">
          
        <div>   <i class=" fa fa-road" aria-hidden="true"></i> พนักงานออกเดินทางไปยังที่อยู่ลูกค้า</div>
        <br>
        <form  @submit.prevent="onsubmit()">
   <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="radio"
                 v-validate="{required: true}"
                            v-model.trim = form.radio
                            :class="{ 'is-invalid' : errors.has(' radio')}" 
                id="radio"
                value="ออกเดินทาง"
                checked
              />

              <label class="form-check-label" >
                ออกเดินทาง
              </label>

            </div>
            
            <!-- ใน div ใส่ map ที่ปักข้อมูลที่อยู่ลูกค้าแล้ว -->
            <br>
            <hr>
            <br>
            <div>กดปุ่มเพื่อนำเส้นทาง :  <button type="button" @click="gotogps()" class="btn btn-info btn-block" style="display:inline;border:none; font-size:17px;width:30%;background-color: #E74C3C ;color:#fff;">
              <i class="fa fa-map-marker" aria-hidden="true"></i> เริ่มนำทาง</button> </div>
            <br>
            <hr>
            <br>
             <div class="form-group">
<button type="submit" class="btn btn-info btn-block" style=" font-size:17px;width:40%;background-color: #17A2BB;color:#fff;">
                  ต่อไป >
                </button>
                  
 </div>
           
</form>
 <br><br><br> 


                <br><br><br>
        </div>

    </div>



         </div>
     </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layoutrider";
import axios from 'axios';
export default {
components:{
    Layout
},
data() {
    return {
       
                 time:'', name_member: '', tel_member: '', numcar:'',address:'',service:'',price:'',id:'' ,
               
                
            
     
      form:{
               
                radio:"",
               
            }
    };
  },
    created(){
      
    
  console.log(this.$session.get('user'))
console.log(this.$session.get('idwork'))

                axios.get('https://appcarwashbackend.herokuapp.com/showinformation',{params:{id:this.$session.get('user')}}).then(res=>{
                console.log(res.data[0].time)
        this.time=res.data[0].time;
        this.name_member=res.data[0].name_member;
        this.tel_member=res.data[0].tel_member;
        this.numcar=res.data[0].numcar;
        this.address=res.data[0].address;
        this.service=res.data[0].type;
         this.price=res.data[0].price;
          this.id=res.data[0].id;
            })
            .catch(error =>{ 
                console.error(error);
           });
           
           //console.log(this.employees.time)
    },
 // window.open("https://www.google.com/maps/@13.6638236,100.5235515,17z"); googlemap rider
    methods:{
     onsubmit(){  
               this.$validator.validateAll().then(valid => {
                 console.log(valid);
                //  this.alertify.confirm('การจองเสร็จสิ้น').setHeader('<em> แจ้งเตือน ! </em> ')
                // console.log(this.form);
                if(this.form.radio==""){
                  
                  return this.alertify.warning('กรุณากรอกข้อมูลให้ครบ !!')
                }
                console.log(this.$session.get('idwork'))
                 const parameters = {
           
            "id": this.$session.get('idwork'),
            
            "status":"ไปจุดนัดหมาย",
            }
                axios.put('https://appcarwashbackend.herokuapp.com/statuschange',parameters).then(res=>{
        console.log(res.status);
            })
            .catch(error =>{ 
                console.error(error);
           });
           
                
                 this.$router.push({name :"rider-WorkStatus2"})
               // console.log(this.form);
           });
           
        },
        gotogps(){
           axios.get('https://appcarwashbackend.herokuapp.com/gps',{params:{id:this.$session.get("idwork")}}).then(res=>{
       // console.log(res.data[0]);
        window.open("https://www.google.com/maps/place/"+res.data[0].x+","+res.data[0].y);
            })
            .catch(error =>{ 
                console.error(error);
           });
          
        }
    }
}
</script>

<style>

@media screen and (max-width: 575.98px){
  .form .form-group .btn {
    width:100%;
  }
  /* .card-header {
    margin-top: 7% !important;
} */
.btn{
  font-size:18px;
}
}
</style>