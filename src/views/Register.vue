
<template>
  <div class="register ">
     
              <!-- รูปโลโก้ -->
              <img src="/img/logoo.png" alt="Logo" class="img-logo">
              <!-- การ์ดทั้งใบ -->
      <div class="card">
          <h1 class="card-header" style="margin-top:0% !important">
            REGISTER
          </h1>
          <div class="card-body"  style="margin-left: 15% !important;
    margin-right: 15% !important;" >
                <form 
                @submit.prevent="onsubmit()">
                    <!-- ชื่อผู้ใช้งาน -->
                    <div class="form-group">
                        <label for="">ชื่อผู้ใช้งาน</label>
                        <input type="text" 
                          name="username"
                          v-validate="{required: true,regex: /^[A-Za-z0-9]{3,15}$/}"
                          v-model.trim = form.username 
                          :class="{ 'is-invalid' : errors.has('username')}" 
                          class="form-control" >
                        <span>{{ errors.first('username') }}</span>
                    </div>
                        <br>
                    <!-- รหัสผ่าน -->
                   <div class="form-group">
                        <label for="">รหัสผ่าน</label>
                        <input type="password" 
                            name="password"
                             v-validate="{required: true,regex: /^[A-Za-z0-9]{1,15}$/}"
                            v-model.trim = form.password 
                            :class="{ 'is-invalid' : errors.has('password')}" 
                        class="form-control">
                        <span>{{ errors.first('password') }}</span>
                        <br>
                    </div>
                    <!-- ชื่อและนามสกุล -->
                     <div class="form-group">
                        <label for="">ชื่อ-นามสกุล</label>
                        <input type="text" 
                        name="name"
                          v-validate="{required: true,regex: /[ก-๙A-Za-z]{1,15}$/}"
                        v-model.trim = form.name
                        :class="{ 'is-invalid' : errors.has('name')}"  
                        class="form-control">
                         <span>{{ errors.first('name') }}</span>
                    </div>
                        <br>
                     <!-- เบอร์โทร -->
                    <div class="form-group">
                        <label for="">เบอร์โทรศัพท์</label>
                        <input type="tel"
                         name="tel"
                          v-validate="{required: true,regex: /[0-9]{1,15}$/}"
                         v-model.trim = form.tel 
                         :class="{ 'is-invalid' : errors.has('tel')}"  
                         class="form-control">
                          <span>{{ errors.first('tel') }}</span>
                    </div>
                     <br>

                     <div class="form-group">
                        <label for="">อีเมล์</label>
                        <input type="e email" 
                         name="email"
                         v-validate="'required'"
                        v-model.trim = form.email 
                        :class="{ 'is-invalid' : errors.has('email')}"  
                        class="form-control">
                        <span>{{ errors.first('email') }}</span>

                    </div>
                    <br>
                    <!-- ที่อยู่ -->
                    <div class="form-group">
                        <label for="">ที่อยู่</label>
                        <input type="text" 
                         name="address"
                         v-validate="'required'"
                        v-model.trim = form.address 
                        :class="{ 'is-invalid' : errors.has('address')}"  
                        class="form-control">
                        <span>{{ errors.first('address') }}</span>

                    </div>
                    <br>
                    <!-- ยี่ห้อรถ -->
                    <div class="form-group">
                        <label for="">ยี่ห้อของรถ</label>
                        <input type="text" 
                         name="model"
                         v-validate="'required'"
                        v-model.trim = form.model 
                        :class="{ 'is-invalid' : errors.has('model')}"
                        class="form-control"  >
                         <span>{{ errors.first('model') }}</span>

                    </div>
                    <br>
                     <!-- ทะเบียนรถ -->
                    <div class="form-group" style="margin-bottom: 1%;">
                        <label for="">ทะเบียนรถ</label>
                        <input type="text" 
                         name="numcar"
                         v-validate="'required'"
                        v-model.trim = form.numcar 
                        :class="{ 'is-invalid' : errors.has('numcar')}"
                        class="form-control">
                        <span>{{ errors.first('numcar') }}</span>
                        <br>
                    </div>
                     <!--ปุ่มลงทะเบียน -->
                     <div class="form-group">
                        <button type="submit"
                        class="btn btn-info" 
                        style="background-color: #17A2BB;width: 100%; 
                        color : #fff ">ลงทะเบียน
                        </button>
                    </div>
                     <br>
                     <!-- ปุ่มไปหน้า login  สร้าง@click -->
                     <div class="form-group">
                        <button type="button" 
                        @click="gotoLogin()" 
                        class="btn btn-secondary" 
                        style="margin-top: -7%; width: 100%; margin-bottom: 4%">เข้าสู่ระบบ
                        </button>
                    </div>
                  
                   
                    
                </form>
          </div>
    
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            form:{
                username:"",
                password:"",
                name:"",
                tel:"",
                email:"",
                address:"",
                model:"",
                numcar:"",
                img:"/img/imguser.jpg"

            },
//             attrs: {
//     src: require('\img\imguser.jpg') 
//   }
        };
    },
   created(){
    //    console.log("test1111");
//  axios.get('https://appcarwashbackend.herokuapp.com/test').then(res=>{
//                 console.log(res.data);
              
//             })
//             .catch(error =>{ 
//                 console.error(error);
//             }); 
        
   },
    methods: {
        onsubmit(){
           
            this.$validator.validateAll().then(valid => {
                console.log(valid);
            //     axios.get('https://appcarwashbackend.herokuapp.com/*').then(res=>{
            //     console.log(res.data);
              
            // })
            // .catch(error =>{ 
            //     console.error(error);
            // }); 
           
           console.log("ss");
            const parameters={"username":this.form.username,"password":this.form.password,"name":this.form.name,"tel":this.form.tel,"email":this.form.email,"address":this.form.address,"model":this.form.model,"numcar":this.form.numcar,"img":this.form.img};
            axios.post('https://appcarwashbackend.herokuapp.com/registers',parameters).then(res=>{
                console.log(res.data.result);
              this.$router.push({name :"login"})
                console.log("ss");
               // this.users=res.data.results;
            })
            .catch(error =>{ 
                console.error(error);
            }); 
            });
        },
        gotoLogin(){
        this.$router.push({name :"login"})
    }
    }
    
}
</script>

<style scope>

.register{
    max-width: 600px;
    margin: 3% auto;
}
.img-logo {
    /* โลโก้ */
    width: 100%;
    display: block;
    margin: auto;
    margin-bottom: 10px;
}
h1{
   /* แต่งฟ้อนท์ */
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 5px;
}
.card-body{
    /* ขอบซ้ายขวาของการ์ด */
    margin-left: 15%;
    margin-right: 15%;
}
.form-group{
    /* ขนาด,สีของชื่อฟอร์ม */
    color: dimgray;
    font-size: 18px;
}

.btn{
    width: 100%;
    font-size: 16px;
}
.btn:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

@media screen and (max-width: 575.98px) {
 
  .card .card-body{
    /* ขอบซ้ายขวาของการ์ด */
    margin-left: 10px ;
    margin-right: 10px ;
}
.register {
    /* padding-left: 10px;
    padding-right: 10px; */
    margin-left: 15px;
    margin-right: 15px;
    /* max-width: 600px;
    margin: 3% auto; */
}
.img-logo {
    /* โลโก้ */
    width: 100%;
    margin-top: 0%;
    /* display: block;
    margin: auto;
    
    margin-bottom: 10px; */
}.card-header{
    margin-top:0% !important;
}

  
}
</style>