<template>
    <div class="container"> 
        <div class="login-container">
            <div class="main-login">
                <div class="content">
                    <h4>Don't have an account?</h4>
                    <p>If you don't have an account you can create one now to get the view of all the available properties in stock.
                    </p>
                    <button><a href="/register">Register</a> </button>
                </div>
                <div></div>
            </div>
        </div>

        <!-- Login Form -->
          <form action="">
            <div class="login-form">
                <div class="heading">
                    <h2>LOGIN</h2>
                </div>
                <div class="log-input">
                    <div class="input1">
                        <select name="c-code" id="">
                                <option value="+231">+231</option>
                                <option value="+234">+234</option>
                                <option value="+134">+134</option>
                                <option value="+412">+412</option>
                            </select> <input type="text" placeholder="Phone number"></div>
                    <div class="input2"><input type="text" placeholder="Password"></div>
                    <div class="forget-password"><strong>Forgot password?</strong></div>
                    <div class="btn"><button>Login</button></div>
                </div>
                <div class="log-option">
                    <div>Log in with <i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-twitter"></i></div>
                </div>
            </div>
        </form>  
    </div>
</template>


<script> 
export default { name : 'Login'}
</script>