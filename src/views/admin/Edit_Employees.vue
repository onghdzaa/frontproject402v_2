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
        to="/admin"
        >รายการข้อมูล</router-link
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
        <header>
          <i class="fa fa-pencil-square"> </i>
          เพิ่มจำนวนข้อมูลของพนักงาน
        </header>
        <hr />
        <form @submit.prevent="onsubmit()">
          <div
            class="form-group"
            style="max-width: 350px !important; margin: auto ;padding: 0.5rem 1rem;"
          >
            <label for="">รหัสพนักงาน</label>
            <input type="text" disabled
            v-model.trim="form.eq_id" 
            name ="eq_id"
            v-validate="{ required:true}"
            :class="{'is-invalid' : errors.has('eq_id')}"
            class="form-control" />
            <p class="invalid-feedback">{{errors.first('eq_id')}}</p>
          </div>
          <div
            class="form-group"
            style="max-width: 350px !important; margin: auto;padding: 0.5rem 1rem;"
          >
            <label for="">Username</label>
            <input type="text" 
            v-model.trim="form.eq_user" 
             name ="eq_user"
              v-validate="{ required:true}"
               :class="{'is-invalid' : errors.has('eq_user')}"
              
            class="form-control" />
             <p class="invalid-feedback">{{errors.first('eq_user')}}</p>
          </div>
          <div
            class="form-group"
            style="max-width: 350px !important; margin: auto;padding: 0.5rem 1rem;"
          >
            <label for="">Password</label>
            <input type="text" 
            v-model.trim="form.eq_pass" 
             name ="eq_pass"
              v-validate="{ required:true}"
               :class="{'is-invalid' : errors.has('eq_pass')}"
              
            class="form-control" />
             <p class="invalid-feedback">{{errors.first('eq_pass')}}</p>
          </div>
          <div
            class="form-group"
            style="max-width: 350px !important; margin: auto ;padding: 0.5rem 1rem;"
          >
            <label for="">ชื่อ-นามสกุล</label>
            <input type="text" 
            v-model.trim="form.eq_name"
             name ="eq_name"
             v-validate="{ required:true}"
            :class="{'is-invalid' : errors.has('eq_name')}"
             class="form-control" />
             <p class="invalid-feedback">{{errors.first('eq_name')}}</p>
          </div>

          <div
            class="form-group"
            style="max-width: 350px !important; margin: auto;padding: 0.5rem 1rem;"
          >
            <label for="">เบอร์โทรศัพท์</label>
            <input type="text" 
            v-model.trim="form.eq_tel" 
             name ="eq_tel"
              v-validate="{ required:true}"
               :class="{'is-invalid' : errors.has('eq_tel')}"
              
            class="form-control" />
             <p class="invalid-feedback">{{errors.first('eq_tel')}}</p>
          </div>
             <div
            class="form-group"
            style="max-width: 350px !important; margin: auto;padding: 0.5rem 1rem;"
          >
            <label for="">อีเมล</label>
            <input type="text" 
            v-model.trim="form.eq_email" 
             name ="eq_email"
              v-validate="{ required:true}"
               :class="{'is-invalid' : errors.has('eq_email')}"
              
            class="form-control" />
             <p class="invalid-feedback">{{errors.first('eq_email')}}</p>
          </div>
             <div
            class="form-group"
            style="max-width: 350px !important; margin: auto;padding: 0.5rem 1rem;"
          >
            <label for="">ที่อยู่</label>
            <input type="text" 
            v-model.trim="form.eq_address" 
             name ="eq_address"
              v-validate="{ required:true}"
               :class="{'is-invalid' : errors.has('eq_address')}"
              
            class="form-control" />
             <p class="invalid-feedback">{{errors.first('eq_address')}}</p>
          </div>
              <div
            class="form-group"
            style="max-width: 350px !important; margin: auto;padding: 0.5rem 1rem;"
          >
            <label for="">ยี่ห้อของรถ</label>
            <input type="text" 
            v-model.trim="form.eq_model" 
             name ="eq_model"
              v-validate="{ required:true}"
               :class="{'is-invalid' : errors.has('eq_model')}"
              
            class="form-control" />
             <p class="invalid-feedback">{{errors.first('eq_model')}}</p>
          </div>
              <div
            class="form-group"
            style="max-width: 350px !important; margin: auto;padding: 0.5rem 1rem;"
          >
            <label for="">ทะเบียนรถ</label>
            <input type="text" 
            v-model.trim="form.eq_numcar" 
             name ="eq_numcar"
              v-validate="{ required:true}"
               :class="{'is-invalid' : errors.has('eq_numcar')}"
              
            class="form-control" />
             <p class="invalid-feedback">{{errors.first('eq_numcar')}}</p>
          </div>
          <br />
          
          <div class="form-group" style=" margin: auto !important;padding: 0rem 1rem; text-align:center;">
            <label
              class="btn btn-secondary" style="max-width: 260px !important;margin-bottom: 25px;"
              
            >
            
              <i class="fa fa-upload" > </i> อัพโหลดรูปภาพ
              <input type="file" class="d-none" @change="onChangeFile($event.target)">
            </label>
<br>
            <img class="img-fluid" style=" margin: auto !important; text-align:center;margin-bottom: 25px; max-width:300px;max-height:360px;" :src="form.eq_img ||'/img/noimg.jpg'" alt="no_img" />
          </div>

          <div class="form-group mb-5" style="max-width: 50% !important; margin: auto; ">
            <div class="row"  >
              <div class="col-sm-6" >
                <button type="submit" class="btn btn-info btn-block" style=" background-color: #17A2BB;color:#fff;">
                  บันทึก
                </button>
              </div>
             <div class="col-sm-6" >
                 <router-link to="/admin" class="btn btn-danger btn-block" style=" background-color: #ed2939;color:#fff;border-color: #ed2939;" >
                  ยกเลิก
                 </router-link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import axios from "axios";
// import Layout from '../../components/Layout.vue';
export default {
  props:["id","name","tel","user","email","address","numcar","model","pass","img"],
  data(){
    console.log(this.id)
        return {
            form:{
                eq_id:this.id,
                eq_name:this.name,
                eq_tel:this.tel,
                eq_user:this.user,
                eq_pass:this.pass,
                eq_email:this.email,
                eq_address:this.address,
                eq_numcar:this.numcar,
                eq_model:this.model,
                eq_img:this.img
                

            }
        };
    },
    created(){
      console.log("sdasdasasdasdsd");
    },
  components: { Layout },
  methods:{
    onsubmit(){
      this.$validator.validateAll().then(valid => {
               console.log(valid);
               if(this.form.eq_img=="")
                return this.alertify.warning('กรุณาอัพโหลดรูปภาพ !!');
                //axios ส่งข้อมูลไปยังแบคเอน
                 const parameters = {
            "id": this.form.eq_id,
            "user": this.form.eq_user,
            "pass": this.form.eq_pass,
            "name": this.form.eq_name,
            "tel": this.form.eq_tel,
            "email": this.form.eq_email,
            "address": this.form.eq_address,
            "model": this.form.eq_model,
            "numcar": this.form.eq_numcar,
            "img": this.form.eq_img,
            
            }
                 axios.put('https://appcarwashbackend.herokuapp.com/editemployee',parameters).then(res=>{
        console.log(res.status)

            })
            .catch(error =>{ 
                console.error(error);
           });
           });
     
    },
    onChangeFile(input){
      // const imag =""
       this.form.eq_img="";
      if(input.files && input.files.length > 0){
        const file = input.files[0];
        if(file.type.indexOf("image/") >= 0){
          //   
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.addEventListener("load",() => {
            // console.log(reader.result);
            // this.form.eq_image=reader.result;
            this.form.eq_img = reader.result;

          });
          return;
        }
      }
      this.alertify.warning('กรุณาเลือกรูปภาพที่จะอัพโหลด');
    }
  }
};
</script>

<style scope>
.card-body .fa-list-alt {
  padding-left: 5%;
  margin-left: 0%;
  text-align: left;
}
/* .form-control {
  max-width: 350px !important;
  margin: auto;
} */
/* .form-group .img{
  width: 60px;
  height: 60px;
} */
</style>