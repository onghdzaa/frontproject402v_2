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
        to="/customer/Booking"
        >ย้อนกลับ</router-link
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
    <div class="card mb-3" style="border-right: solid 9px #17a2bb">
      <div class="row">
        <div class="col-sm-4">
          <img
            v-bind:src="img_staff"
            alt="user"
            class="img-booking"
            style="max-width: 100%"
          />
        </div>
        <div
          class="col-sm-8"
         style=" margin-left: -40px ;"
        >
          <div class="card-body" style="font-size: 22px; color: dimgray">
            <br />
            <div> จองคิวบริการล้างรถวันที่ : ({{ currentDateTime() }})</div>
            <div> เวลาให้บริการ : {{ time }}</div>
            <hr>
            <div>ชื่อ - นามสกุล : {{ name }}</div>
            <div>เบอร์โทรศัพท์ : {{ tel }}</div>
            <div>รหัสพนักงาน : {{ staff }}</div>

            <hr />
            <form @submit.prevent="onsubmit()">
            <div class="form-group" style="font-size: 21px">
              <i class="fa fa-pencil-square"> </i>
              กรอกข้อมูลเพื่อทำการจอง
              <br />
              <br />
              <label for="">ทะเบียนรถ</label>
              <input
                type="text"
                class="form-control"
                style="font-size: 21px; margin-bottom: 15px;"
                name="numcar"
                             v-validate="{required: true}"
                            v-model.trim = form.numcar 
                            :class="{ 'is-invalid' : errors.has('numcar')}" 
                       
              />

              <!-- <div class="form-group"  style="font-size: 21px;margin-bottom:15px">
              <label for="">ยี่ห้อของรถ</label>
              <input type="text" class="form-control"  style="font-size: 21px;margin-bottom:15px">
            </div> -->
            </div>
            <div
              class="form-group"
              style="font-size: 21px; margin-bottom: 15px"
            >
              <label for="">ยี่ห้อของรถ</label>
              <input  
                type="text"
                class="form-control"
                style="font-size: 21px; margin-bottom: 25px;"
                 name=" model"
                             v-validate="{required: true}"
                            v-model.trim = form.model 
                            :class="{ 'is-invalid' : errors.has(' model')}" 
                       
              />
            </div>
    <div class="typeservice" style="margin-bottom:10px;">ประเภทการใช้บริการ </div>
    
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="radio"
                 v-validate="{required: true}"
                            v-model.trim = form.radio
                            :class="{ 'is-invalid' : errors.has(' radio')}" 
                id="radio"
               v-bind:value="dataprice[0].type"
                checked
              />
              <label class="form-check-label" >
                {{this.dataprice[0].type}} {{this.dataprice[0].price}} บาท
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
               name="radio"
                 v-validate="{required: true}"
                            v-model.trim = form.radio
                            :class="{ 'is-invalid' : errors.has(' radio')}" 
                id="radio"
                v-bind:value="dataprice[1].type"
                checked
              />
              <label class="form-check-label" for="fexampleRadios2">
               
                {{dataprice[1].type}} {{dataprice[1].price}} บาท
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="radio"
                 v-validate="{required: true}"
                            v-model.trim = form.radio
                            :class="{ 'is-invalid' : errors.has(' radio')}" 
                id="radio"
                v-bind:value="dataprice[2].type"
                checked
              />
              <label class="form-check-label" >
               {{dataprice[2].type}} {{dataprice[2].price}} บาท
              </label>
            </div>
            <br>
            

<!-- 
            <input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span> -->
<!-- <h1>map</h1> -->
<div class="gpsservice" style="margin-bottom:10px;">ที่อยู่ปัจจุบัน</div>
<div>
                <GmapMap
                  :center="coordinates"
                  :zoom="14"
                  style="max-width:660px; height:260px;"
                  ref="mapRef"
                >
                  <gmap-marker :position="mapcoordinates"> </gmap-marker>
                </GmapMap>
                <p>{{ mapcoordinates.lat }},{{ mapcoordinates.lng }}</p>
              </div>

            <div class="form-group">
              <!-- @click="BookingConfirm()" -->
                        <button type="submit" 
                       
                        class="btn btn-info" 
                        style="background-color: #17A2BB; max-width:200px;font-size: 17px;
                        color : #fff ;">ยืนยัน
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
import axios from "axios";
import Layout from "@/components/Layoutcustomer";
//import Pagination from "@/components/Pagination";
// import Layout from '../../components/Layout.vue';
export default {
  components: { Layout},
  props: ["staff", "time", "name", "tel","timereserve","img_staff"],
  data() {
    return {
     
      form:{
                numcar:"",
                model:"" ,
                radio:""
               
                

            },
           coordinates: {
        lat: 0,
        lng: 0,
      },
        dataprice:[{type:"",price:"",process:"",id:"",img:""},
        {type:"",price:"",process:"",id:"",img:""},
        { type:"",price:"",process:"",id:"",img:""}],
      map: null, 
    };
  },
  created() {
   //console.log(this.form.name + "ssssss"); 
   axios
            .get("https://appcarwashbackend.herokuapp.com/listprice")
            .then((res) => {
              this.dataprice=res.data
              console.log(this.dataprice);
            })
            .catch((error) => {
              console.error(error);
            }); 
    this.$getLocation({}).then((coordinates) => {
      this.coordinates = coordinates;
    });
      
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  computed: {
    mapcoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
        };
      }
      return {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
    },
  },
  methods: {
//     BookingButton(form) {
   
//         this.alertify.confirm('การจองเสร็จสิ้น').setHeader('<em> แจ้งเตือน ! </em> '),() =>{
// console.log(form);
//         }; 
//     },

currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      //const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime = date;

      return dateTime;
    },
     onsubmit(){  
               this.$validator.validateAll().then(valid => {
                 console.log(valid);
                //  this.alertify.confirm('การจองเสร็จสิ้น').setHeader('<em> แจ้งเตือน ! </em> ')
                // console.log(this.form);
                if(this.form.numcar=="" ||this.form.model==""||this.form.radio==""){return this.alertify.warning('กรุณากรอกข้อมูลให้ครบ !!')}
                console.log(this.form.radio);
            
                 axios
        .post("https://appcarwashbackend.herokuapp.com/profile", {
          fullname: this.$session.get("user"),
        })
        .then((res) => {
          // var prices =
           console.log(this.form.radio);
            axios
            .post("https://appcarwashbackend.herokuapp.com/munuprice",{p:this.form.radio
                    })
            .then((ress) => {
              
             // prices=ress.data[0].price
            console.log(ress.data[0].price)
            
           

        // console.log(prices)
          const parameters = {
            "name_member": res.data[0].name,
            "tel_member": res.data[0].tel,
            "model": this.form.model,
            "numcar": this.form.numcar,
            "name_staff": this.name,
            "tel_staff": this.tel,
            "id_staff": this.staff,
            "time": this.time,
            "gps": this.mapcoordinates,
            "type": this.form.radio,
            "date": this.currentDateTime(),
            "price": ress.data[0].price,
            "status": "กำลังดำเนินการ",
            "id_member": this.$session.get("user"),
            "address": res.data[0].address,
            "img":this.img_staff,
            "img_member":res.data[0].img
          };
          axios
            .post("https://appcarwashbackend.herokuapp.com/booking", parameters)
            .then((res) => {
              this.$session.set('id2',res.data.id);
              console.log(res.data.id);
            })
            .catch((error) => {
              console.error(error);
            }); 
        })
            .catch((error) => {
              
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
           const parameterss = {
           
            "time": this.timereserve,
            "id":this.staff,
            }
         axios.put('https://appcarwashbackend.herokuapp.com/time',parameterss).then(res=>{
        console.log(res.data);
            })
            .catch(error =>{ 
                console.error(error);
           });
        // 1234 ไม่ใช้ด่านล่าง
        //   axios
        //     .get("http://localhost:5000/bookinghistory/search",{
        //             params: {
        //                 id: this.$session.get("user")}
        //             })
        //     .then((res) => {
               
        //     //console.log(res)
        //     })
        //     .catch((error) => {
              
        //       console.error(error);
        //     });
                this.$router.push({ name: "BookingConfirm",params: { staff: this.staff , tel: this.tel ,name: this.name,time: this.time,date:this.currentDateTime(),img:this.img_staff}  });
                //console.log(this.form);
           });
           
        },
        BookingConfirm(){
          
        //     axios
        // .post("http://localhost:5000/profile", {
        //   fullname: this.$session.get("user"),
        // })
        // .then((res) => {
        //   var prices = ""
        //     axios
        //     .get("http://localhost:5000/munuprice",{
        //             params: {
        //                 type: this.form.radio}
        //             })
        //     .then((res) => {
        //       prices=res.config.params.type
        //     console.log(res.config.params.type)
        //     })
        //     .catch((error) => {
              
        //       console.error(error);
        //     });
        //   console.log(prices+"sssssss")
        //   const parameters = {
        //     "name_member": res.data[0].name,
        //     "tel_member": res.data[0].tel,
        //     "model": res.data[0].model,
        //     "numcar": this.form.numcar,
        //     "name_staff": this.name,
        //     "tel_staff": this.tel,
        //     "id_staff": this.staff,
        //     "time": this.time,
        //     "gps": this.mapcoordinates,
        //     "type": this.form.radio,
        //     "date": this.currentDateTime(),
        //     "price": prices,
        //     "status": "กำลังดำเนินการ",
        //     "id_member": this.$session.get("user"),
        //     "address": res.data[0].address
        //   };
        //   axios
        //     .post("http://localhost:5000/booking", parameters)
        //     .then((res) => {
        //      // console.log(res.data);
        //     })
        //     .catch((error) => {
        //       console.error(error);
        //     });
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
         // this.$router.push({ name: "BookingConfirm" });
        }
    
  },
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

  /* #17a2bb */
}
.card-body .fa-list-alt {
  padding-left: 5%;
  margin-left: 0%;
  text-align: left;
}
.img-booking {
  max-width: 100%;
  margin-left: 0%;
}
.card {
  border-right: solid 5px #17a2bb;
}
@media screen and (max-width: 575.98px) {
 /* .form-group .img-fluid{
   /* max-width:300px;
   max-height:360px; */
   
   /* margin-right: 15px;
 } * */
 /* .col-sm-6 .btn-danger {
    margin-top: 10px

 } */
.GmapMap {
width:220px !important; 
height:60px !important;
}
.form-group{
  font-size: 18px !important;
}
  
}

</style>