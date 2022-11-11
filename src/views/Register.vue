<template>
    

    <div class="rg-container">
        <div class="main-rg">
            <div></div>
            <div class="rg-content content">
                <h4>Already have an account?</h4>
                <p>If you already have an account you can login to get the view of the latest properties in stock
                </p>
                <button>Register</button>
            </div>
        </div>
    </div>
    <div>
        <!-- Registration Form -->
        <form action="">
            <div class="rg-form">
                <div class="heading">
                    <h2>REGISTRATION</h2>
                </div>
                <div class="log-input">
                    <div class="input2"><input type="text" placeholder="Full name"></div>

                    <div class="input1">
                        <select name="c-code" id="">
                            <option value="+231">+231</option>
                            <option value="+234">+234</option>
                            <option value="+134">+134</option>
                            <option value="+412">+412</option>
                        </select> <input type="text" placeholder="Phone number"></div>
                    <div class="input2"><input type="text" placeholder="Password"></div>
                    <div class="agree-term">I agree to the terms and conditions <input type="checkbox" name="" id=""></div>
                    <div class="btn"><button>Register</button></div>
                </div>
                <div class="log-option">
                    <div>Register with <i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-twitter"></i></div>
                </div>
            </div>
            <div></div>
        </form>
    </div>
    <div class="self">H</div>

</template>
<script>
    export default {
        name: "Register",
        mounted(){
            let check = document.querySelector(".agree-term input")

            check.addEventListener("click", () => {
                check.style.color = (check.checked) ? "#20B2AA" : "red"
            })
        }
}

</script>

<style scoped>
.container{
    height: 100vh;
}
.main,.bottom-content{
    margin-top:6.2%;
}
</style>