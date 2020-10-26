<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.btn {
  border: none;
  padding: 15px;
  font-size: 16px;
  border-radius: 10px;
}
.btn-cancel {
  background-color: rgb(221, 122, 122);
}
.btn-ok {
  background-color: rgb(122, 181, 221);
}
button:hover {
  cursor: pointer;
}
button:active, button:focus {
  outline: none;
}
input:active, input:focus {
  outline: none;
}
select:active, select:focus {
  outline: none;
}
button::-moz-focus-inner {
  border: 0;
}
.bread-crumbs {
  margin-left: -70px;
}
.bread-crumbs:hover {
  cursor: pointer;
  color: red;
}
</style>
