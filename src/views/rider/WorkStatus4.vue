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
        to="/rider/WorkCalendar4"
        >ขั้นตอนที่ 4</router-link
      >
       
      
 
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
            ขั้นตอนที่ 4 :
            <i class="fa fa-pencil-square"> </i> อัพเดทสถานะการให้บริการ (4/4)
          </div>
            
             </header>
               <b-progress :value="80"  variant="info" animated  class="mt-2"></b-progress>
              <br>
            
             <!-- <hr> -->
             <div class="table-responsive">
        <table class="table" style="font-size: 16px;white-space: nowrap">
          <thead>
            <tr>
              
              
              <th>เวลา</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์โทรศัพท์</th>
              <th>ทะเบียนรถ</th>
            
               <th>ประเภท</th>
                 <th>ราคา</th>
              <th>รหัส</th>
              
            </tr>
          </thead>
          <tbody>
           <td>{{employees[0].time}}</td>
              <td>{{employees[0].name_member}} </td>
                    <td>{{employees[0].tel_member}}</td>
                     <td>{{employees[0].numcar}}</td>
                        <td>{{employees[0].service}}</td>
                         <td>{{employees[0].price}}</td>
                     <td>{{employees[0].id}}</td>
             
          </tbody>
        </table>
         </div>
         <hr />
 <br><br>
            
      <div class="row " style="margin-top:0% !important;">
        <div class="col-sm-4 " style="max-width: 100%;margin-top:0 !important;">
          <img src="/img/start3.png"  alt="user" class="img-booking" style="max-width: 100%;margin-top:0 !important;">
      
    
        </div>
        
        <div class="col-sm-8">
          
        <div>    <i class="fa fa-check-square" aria-hidden="true"></i>การชำระเงิน</div>
        <br>
        <hr>
        <div><i class="fa fa-money" aria-hidden="true"></i> ประเภทการชำระเงิน</div>
              <br />
              <form @submit.prevent="onsubmit()">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio"
                  v-validate="{ required: true }"
                  v-model.trim="form.radio"
                  :class="{ 'is-invalid': errors.has(' radio') }"
                  id="radio"
                  value="เงินสด"
                  checked
                />

                <label class="form-check-label"> เงินสด </label>

                <br />

                
              </div>
               <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio"
                  v-validate="{ required: true }"
                  v-model.trim="form.radio"
                  :class="{ 'is-invalid': errors.has(' radio') }"
                  id="radio"
                  value="โอนเงิน"
                  checked
                />

                <label class="form-check-label"> โอนเงิน </label>

                <br />

                <hr />
              </div>
              <br />
              <div>
                <i class="fa fa-file-image-o" aria-hidden="true"></i>
                อัพโหลดรูปภาพหลักฐานการชำระเงิน
              </div>
              <br />
              <div
                class="form-group"
                style="
                  margin: auto !important;
                  text-align: center;
                  margin-bottom: 25px;
                "
              >
                <!-- <img class="img-fluid" :src="form.img ||'/img/noimg.jpg'" alt="no_img" /> -->

                <img
                  class="img-fluid"
                  style="max-width: 65%"
                  :src="form.img || '/img/noimg.jpg'"
                  alt="no_img"
                />
                <br />
                <label
                  class="btn btn-secondary"
                  style="
                    max-width: 50% !important;
                    margin-bottom: 25px;
                    margin-top: 25px;
                  "
                >
                  <i class="fa fa-upload"> </i> อัพโหลดรูปภาพ
                  <input
                    type="file"
                    class="d-none"
                    @change="onChangeFile($event.target)"
                  />
                </label>
              </div>
              <hr />
              <br />
              
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-info btn-block"
                  style="
                    font-size: 17px;
                    width: 40%;
                    background-color: #17a2bb;
                    color: #fff;
                  "
                >
                  เสร็จสิ้น >
                </button>
              </div>
            </form>
              <!-- พัก -->
         

        </div>

    </div>



         </div>
     </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layoutrider";
import axios from "axios";
export default {
components:{
    Layout
},data() {
    return {
      employees: [
                { time:'08.00-09.00', name_member: 'Frank phy', tel_member: '0908801234', numcar:'กข123',address:'14/53 มธ.',service:'ล้างภายใน',price:'300',id: '01' },
               
                
            ]
     ,
     
     
      form:{
               
                radio:"",
                img:"/img/noimg.jpg"
               
                

            }
    };
  },
   created(){
      
     
                axios.get('https://appcarwashbackend.herokuapp.com/showinformation',{params:{id:this.$session.get('user')}}).then(res=>{
                console.log(res.data[0].time)
         this.employees[0].time=res.data[0].time;
        this.employees[0].name_member=res.data[0].name_member;
        this.employees[0].tel_member=res.data[0].tel_member;
        this.employees[0].numcar=res.data[0].numcar;
        this.employees[0].address=res.data[0].address;
        this.employees[0].service=res.data[0].type;
        this.employees[0].price=res.data[0].price;
         this.employees[0].id=res.data[0].id;
            })
            .catch(error =>{ 
                console.error(error);
           });
           console.log(this.employees.time)
    },
    methods:{
     onsubmit(){  
               this.$validator.validateAll().then(valid => {
                 console.log(valid);
                //  this.alertify.confirm('การจองเสร็จสิ้น').setHeader('<em> แจ้งเตือน ! </em> ')
                 console.log(this.form.radio);
                if(this.form.radio=="โอนเงิน"&&this.form.img == "/img/noimg.jpg"){
                  console.log("sadasd");
return this.alertify.warning('กรุณากรอกข้อมูลให้ครบ !!')
                }else if(this.form.radio=="เงินสด"&& this.form.img != ""){console.log("โอนเงิน");}
                else if(this.form.radio==""){return this.alertify.warning('กรุณากรอกข้อมูลให้ครบ !!')}
                const parameters = {
           
            "id": this.$session.get('idwork'),
            "status":"ชำระเงินเสร็จสิ้น",
            "imgpay":this.form.img,
            "typepay":this.form.radio,
            }
                axios.put('https://appcarwashbackend.herokuapp.com/statuschange4',parameters).then(res=>{
        console.log(res.status);
            })
            .catch(error =>{ 
                console.error(error);
           });
                
               this.$router.push({ name: "rider-WorkStatus5" });
               
                console.log(this.form);
               // location.reload();
           });
           
        }, 
    onChangeFile(input) {
      // const imag =""
      this.form.img = "";
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        if (file.type.indexOf("image/") >= 0) {
          //
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.addEventListener("load", () => {
            // console.log(reader.result);
            // this.form.eq_image=reader.result;
            this.form.img = reader.result;
          });
          return;
        }
      }
      this.alertify.warning("กรุณาเลือกรูปภาพที่จะอัพโหลด");
    },
    }
}
</script>

<style>

@media screen and (max-width: 575.98px){
  .form .form-group .btn {
    width:100%;
  }
}
</style>