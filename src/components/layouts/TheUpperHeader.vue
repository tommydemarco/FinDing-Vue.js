<template>
    <div class="upper-header">
        <div>
            <ul>
                <li>
                    <a>A Vue.js personal project</a>
                </li>
                <li class="right">
                    <a>GitHub</a>
                </li>
                <li class="right">
                    <a>Contacts</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.upper-header {
    background-color: #fed330;
    display: inline-block;
    width:100%;
    max-width:100%;
}
.upper-header div {
    max-width:90%;
    margin: 0 auto;
}
.upper-header a {
    margin:0px;
    padding: 15px 20px!important;
    width: 40%;
    font-family: 'Sansita Swashed', cursive;
}
.upper-header ul {
    margin:0;
    padding: 20px 20px;
    display: inline-block;
    width: 100%;
}
.upper-header li {
    display: inline-block;
}
.right {
    float:right;
}
</style>