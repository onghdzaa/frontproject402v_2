<template>
  <Layout>
    <div slot="buttons" class="form-group">
      <!-- <router-link
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
        to="/rider/WorkStatus2"
        >ขั้นตอนที่ 2</router-link
      > -->
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
          font-size: 21px;
        "
      >
        <br />
        <header>
          <div>
            ขั้นตอนที่ 3 :
            <i class="fa fa-pencil-square"> </i> อัพเดทสถานะการให้บริการ (3/4)
          </div>
        </header>
         <b-progress :value="60"  variant="info" animated  class="mt-2"></b-progress>
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
        <br /><br />

        <div class="row" style="margin-top: 0% !important">
          <div
            class="col-sm-4"
            style="max-width: 100%; margin-top: 0 !important"
          >
            <img
              src="/img/start5.png"
              alt="user"
              class="img-booking"
              style="max-width: 100%; margin-top: 0 !important"
            />
          </div>

          <div class="col-sm-8">
            <div>
              <i class="fa fa-tint" aria-hidden="true"></i>
              พนักงานล้างรถเสร็จสิ้น
            </div>
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
                  value="ล้างรถเสร็จสิ้น"
                  checked
                />

                <label class="form-check-label"> ล้างรถเสร็จสิ้น </label>
 <br />
                <br />

                <hr />
              </div>
              <br />
              <div>
                <i class="fa fa-file-image-o" aria-hidden="true"></i>
                อัพโหลดรูปภาพรถหลังงานเสร็จสิ้น
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
  components: {
    Layout,
  },
  data() {
    return {
      employees: [
                { time:'08.00-09.00', name_member: 'Frank phy', tel_member: '0908801234', numcar:'กข123',address:'14/53 มธ.',service:'ล้างภายใน',price:'300',id: '01' },
               
                
            ]
     ,
     
      form: {
        radio: "",
        img: ""
      },
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
  methods: {
    onsubmit() {
      this.$validator.validateAll().then((valid) => {
        console.log(valid);
        //  this.alertify.confirm('การจองเสร็จสิ้น').setHeader('<em> แจ้งเตือน ! </em> ')
        // console.log(this.form);
        if (this.form.radio == "" || this.form.img == ""){
          return this.alertify.warning("กรุณากรอกข้อมูลให้ครบ !!");
        }
          const parameters = {
           
            "id": this.$session.get('idwork'),
            "status":"ล้างรถเสร็จสิ้น",
            "imgcar":this.form.img
           
            }
                axios.put('https://appcarwashbackend.herokuapp.com/statuschange3',parameters).then(res=>{
        console.log(res.status);
            })
            .catch(error =>{ 
                console.error(error);
           });

        this.$router.push({ name: "rider-WorkStatus4" });
        console.log(this.form);
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
  },
};
</script>

<style>
@media screen and (max-width: 575.98px) {
  .form .form-group .btn {
    width: 100%;
  }
}
</style>